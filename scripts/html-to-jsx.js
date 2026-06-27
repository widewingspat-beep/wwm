/**
 * html-to-jsx.js
 * Converts a Cheerio-parsed HTML subtree into JSX string.
 * Handles: h2/h3/h4, p, ul/ol/li, table, strong/em, a, br
 * FAQ detection: wraps <h2>FAQ…</h2> + following dl/ul into <FaqAccordion>
 */

const VOID = new Set(['br','hr','img','input','meta','link']);

function escJsx(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#215;/g, '×')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escAttr(str) {
  return str.replace(/"/g, '&quot;');
}

function nodeToJsx($, node, depth = 0) {
  if (node.type === 'text') {
    const t = node.data.replace(/\n/g, ' ').replace(/\s+/g, ' ');
    if (!t.trim()) return '';
    return escJsx(t);
  }
  if (node.type !== 'tag') return '';

  const tag = node.name.toLowerCase();
  const children = () => $(node).contents().toArray()
    .map(c => nodeToJsx($, c, depth + 1)).join('');

  // Skip nav/header/footer/script/style
  if (['nav','header','footer','script','style','noscript','iframe','form'].includes(tag)) return '';

  // Headings
  if (['h1','h2','h3','h4','h5','h6'].includes(tag)) {
    const text = $(node).text().trim();
    if (!text) return '';
    return `\n      <${tag}>${escJsx(text)}</${tag}>`;
  }

  // Paragraph
  if (tag === 'p') {
    const inner = children().trim();
    if (!inner) return '';
    return `\n      <p>${inner}</p>`;
  }

  // Lists
  if (tag === 'ul') {
    const items = $(node).children('li').toArray()
      .map(li => {
        const inner = $(li).contents().toArray().map(c => nodeToJsx($, c, depth+1)).join('').trim();
        if (!inner) return '';
        return `\n        <li>${inner}</li>`;
      }).join('');
    if (!items.trim()) return '';
    return `\n      <ul>${items}\n      </ul>`;
  }
  if (tag === 'ol') {
    const items = $(node).children('li').toArray()
      .map(li => {
        const inner = $(li).contents().toArray().map(c => nodeToJsx($, c, depth+1)).join('').trim();
        if (!inner) return '';
        return `\n        <li>${inner}</li>`;
      }).join('');
    if (!items.trim()) return '';
    return `\n      <ol>${items}\n      </ol>`;
  }

  // Table
  if (tag === 'table') {
    const thead = $(node).find('thead').length
      ? `\n          <thead>${$(node).find('thead tr').toArray().map(tr =>
          `\n            <tr>${$(tr).find('th,td').toArray().map(cell =>
            `<th>${escJsx($(cell).text().trim())}</th>`).join('')}</tr>`
        ).join('')}\n          </thead>` : '';
    const tbody = `\n          <tbody>${$(node).find('tbody tr').toArray().map(tr =>
      `\n            <tr>${$(tr).find('td,th').toArray().map(cell =>
        `<td>${escJsx($(cell).text().trim())}</td>`).join('')}</tr>`
    ).join('')}\n          </tbody>`;
    return `\n      <div className="bp-table-wrap"><table className="bp-table">${thead}${tbody}\n        </table></div>`;
  }

  // Inline: strong / b
  if (tag === 'strong' || tag === 'b') {
    const inner = children().trim();
    if (!inner) return '';
    return `<strong>${inner}</strong>`;
  }

  // Inline: em / i
  if (tag === 'em' || tag === 'i') {
    const inner = children().trim();
    if (!inner) return '';
    return `<em>${inner}</em>`;
  }

  // Inline: a
  if (tag === 'a') {
    const href = $(node).attr('href') || '#';
    const inner = children().trim();
    if (!inner) return '';
    // Internal links only — external stripped to plain text
    if (href.startsWith('http') && !href.includes('wide-wings')) return inner;
    return inner; // strip links to keep JSX clean
  }

  // br
  if (tag === 'br') return '<br />';

  // hr
  if (tag === 'hr') return '\n      <hr className="bp-divider" />';

  // div / section / article / span / aside — recurse
  if (['div','section','article','main','span','aside','figure','figcaption'].includes(tag)) {
    return children();
  }

  // Fallback — recurse
  return children();
}

/**
 * Detect FAQ items from common patterns:
 * Pattern A: consecutive <h3>Q</h3><p>A</p> after a "FAQ" heading
 * Pattern B: <dt>Q</dt><dd>A</dd>
 * Pattern C: <strong>Q</strong> text pair
 */
function extractFaqs($, nodes) {
  const faqs = [];

  // Pattern: find nodes where a heading looks like a question
  let i = 0;
  while (i < nodes.length) {
    const node = nodes[i];
    if (node.type === 'tag') {
      const tag = node.name.toLowerCase();
      const text = $(node).text().trim();

      // h3/h4 that ends with ? → question
      if (['h3','h4'].includes(tag) && text.endsWith('?')) {
        // Collect answer: next p/ul/ol siblings until next h3/h4 or end
        const answer = [];
        let j = i + 1;
        while (j < nodes.length) {
          const next = nodes[j];
          if (next.type !== 'tag') { j++; continue; }
          const ntag = next.name.toLowerCase();
          if (['h2','h3','h4'].includes(ntag)) break;
          answer.push(next);
          j++;
        }
        if (answer.length > 0) {
          faqs.push({ q: text, answerNodes: answer });
          i = j;
          continue;
        }
      }
    }
    i++;
  }
  return faqs;
}

function buildFaqAccordion($, faqs) {
  if (!faqs.length) return '';
  const items = faqs.map(({ q, answerNodes }) => {
    const answerJsx = answerNodes.map(n => nodeToJsx($, n)).join('').trim();
    const qEsc = escJsx(q);
    return `        {\n          q: '${q.replace(/'/g, "\\'")}',\n          a: <>${answerJsx}</>,\n        }`;
  }).join(',\n');
  return `\n      <FaqAccordion items={[\n${items}\n      ]} />`;
}

/**
 * Main converter: takes $ (cheerio) and root selector, returns JSX body string
 */
function convertToJsx($, rootEl) {
  const allNodes = $(rootEl).contents().toArray();

  // Split into pre-FAQ and FAQ sections
  let faqHeadingIdx = -1;
  const flatNodes = [];

  // Flatten one level for scanning
  function flatten(nodes) {
    nodes.forEach(n => {
      if (n.type === 'tag') {
        const tag = n.name.toLowerCase();
        const text = $(n).text().trim().toLowerCase();
        if (['h2','h3'].includes(tag) && (text.includes('faq') || text.includes('frequently asked'))) {
          faqHeadingIdx = flatNodes.length;
        }
        flatNodes.push(n);
      }
    });
  }
  flatten(allNodes);

  let preFaqJsx = '';
  let faqJsx = '';

  if (faqHeadingIdx === -1) {
    // No FAQ — convert everything
    preFaqJsx = flatNodes.map(n => nodeToJsx($, n)).join('');
  } else {
    // Convert pre-FAQ nodes
    preFaqJsx = flatNodes.slice(0, faqHeadingIdx).map(n => nodeToJsx($, n)).join('');

    // FAQ section
    const faqTitle = $(flatNodes[faqHeadingIdx]).text().trim();
    const postFaqNodes = flatNodes.slice(faqHeadingIdx + 1);
    const faqs = extractFaqs($, postFaqNodes);

    if (faqs.length > 0) {
      // Find where FAQs end
      let faqEnd = 0;
      let consumed = 0;
      for (let i = 0; i < postFaqNodes.length; i++) {
        const n = postFaqNodes[i];
        if (n.type !== 'tag') continue;
        const tag = n.name.toLowerCase();
        const text = $(n).text().trim();
        if (['h3','h4'].includes(tag) && text.endsWith('?')) {
          // This node is a FAQ Q — skip it and its answers
          faqEnd = i;
        }
      }

      // Find last answer node belonging to FAQs
      const lastFaq = faqs[faqs.length - 1];
      const lastAns = lastFaq.answerNodes[lastFaq.answerNodes.length - 1];
      const lastAnsIdx = postFaqNodes.indexOf(lastAns);

      faqJsx = `\n      <h2>${escJsx(faqTitle)}</h2>`;
      faqJsx += buildFaqAccordion($, faqs);

      // Any content after the last FAQ answer
      if (lastAnsIdx >= 0 && lastAnsIdx + 1 < postFaqNodes.length) {
        const afterFaq = postFaqNodes.slice(lastAnsIdx + 1);
        faqJsx += afterFaq.map(n => nodeToJsx($, n)).join('');
      }
    } else {
      // FAQ heading found but no Q? format — include as-is
      preFaqJsx += flatNodes.slice(faqHeadingIdx).map(n => nodeToJsx($, n)).join('');
    }
  }

  return preFaqJsx + faqJsx;
}

module.exports = { convertToJsx, nodeToJsx, escJsx };
