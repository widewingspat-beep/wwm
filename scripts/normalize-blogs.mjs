// Parser-based blog normalizer (cheerio).
// Rebuilds clean semantic HTML: every text block -> <p>, clean headings/lists,
// no <br>, no empty nodes, no loose text. Preserves ALL text and links exactly.
import * as cheerio from 'cheerio';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dir = dirname(fileURLToPath(import.meta.url));

const BLOCK = new Set(['h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'table', 'blockquote', 'pre', 'figure']);

// Keep only href on <a>; drop every other attribute on every element.
function stripAttrs($, scope) {
  $(scope).find('*').each((_, el) => {
    if (el.type !== 'tag') return;
    const keepHref = el.name === 'a' ? ($(el).attr('href') || null) : null;
    el.attribs = {};
    if (keepHref !== null) el.attribs.href = keepHref;
  });
}

// Normalize links: wide-wings.ae -> relative; external (non-wide-wings) -> unwrap (keep text).
function normalizeLinks($, scope) {
  $(scope).find('a').each((_, a) => {
    const $a = $(a);
    let href = ($a.attr('href') || '').trim();
    href = href.replace(/^https?:\/\/(www\.)?wide-wings\.ae\//i, '/');
    if (/^https?:\/\//i.test(href) && !/wide-wings\.ae/i.test(href)) {
      $a.replaceWith($a.html() ?? $a.text()); // external -> keep inner text/markup
    } else if (href) {
      $a.attr('href', href);
    } else {
      $a.replaceWith($a.html() ?? $a.text());
    }
  });
}

// Remove <br> inside a block, return cleaned inner html.
function cleanInner($, node) {
  const $n = $(node);
  $n.find('br').remove();
  normalizeLinks($, $n);
  stripAttrs($, $n);
  return ($n.html() || '').replace(/\s+/g, ' ').trim();
}

// Strip wrapping <strong>/<em> from a heading but keep inner links/text.
function cleanHeadingInner($, node) {
  let html = cleanInner($, node);
  // unwrap leading/trailing emphasis wrappers
  for (let i = 0; i < 3; i++) {
    const m = html.match(/^<(strong|em|b|i)>([\s\S]*)<\/\1>$/i);
    if (!m) break;
    html = m[2].trim();
  }
  return html;
}

function cleanList($, node) {
  const tag = node.name;
  const $n = $(node);
  const items = [];
  $n.children('li').each((_, li) => {
    const inner = cleanInner($, li);
    if (inner) items.push(`<li>${inner}</li>`);
  });
  if (!items.length) return '';
  return `<${tag}>${items.join('')}</${tag}>`;
}

function faqIcon() {
  return '<svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';
}

// Normalize links + strip attrs on a fragment string, return inner html.
function cleanFragmentStr(html) {
  const $ = cheerio.load(html, { decodeEntities: false });
  normalizeLinks($, $.root());
  stripAttrs($, $.root());
  const b = $('body')[0] || $.root()[0];
  return (b.children ? b.children : []).map(n => $.html(n)).join('');
}

// Convert an answer fragment into clean blocks, preserving ALL content
// (paragraphs, sub-headings, and lists) — never drops text.
function answerToParas(html) {
  const $ = cheerio.load(html, { decodeEntities: false });
  const root = $('body')[0] || $.root()[0];
  const out = [];
  let buf = '';
  const flush = () => {
    const t = cleanFragmentStr(buf).replace(/\s+/g, ' ').trim();
    if (t) out.push(`<p>${t}</p>`);
    buf = '';
  };
  const kids = root.children ? root.children : [];
  for (const node of kids) {
    if (node.type === 'tag' && /^h[2-6]$/.test(node.name)) {
      flush();
      const t = cleanFragmentStr($(node).html() || '')
        .replace(/<\/?(?:strong|em|b|i)>/gi, '')
        .replace(/\s+/g, ' ').trim();
      if (t) out.push(`<p><strong>${t}</strong></p>`); // answer sub-heading -> bold line
    } else if (node.type === 'tag' && (node.name === 'ul' || node.name === 'ol')) {
      flush();
      const list = cleanList($, node);
      if (list) out.push(list);
    } else if (node.type === 'tag' && node.name === 'p') {
      flush();
      $(node).find('br').remove();
      const t = cleanFragmentStr($(node).html() || '').replace(/\s+/g, ' ').trim();
      if (t) out.push(`<p>${t}</p>`);
    } else if (node.type === 'tag' && node.name === 'br') {
      flush(); // <br><br> in source acts as a paragraph break
    } else {
      buf += $.html(node);
    }
  }
  flush();
  return out.join('');
}

function buildAccordion(items) {
  if (!items.length) return '';
  const body = items.map(it =>
    `<details class="faq-item"><summary class="faq-question">${it.q}${faqIcon()}</summary>` +
    `<div class="faq-answer"><div class="faq-answer-inner">${it.a}</div></div></details>`
  ).join('');
  return `<div class="faq-accordion">${body}</div>`;
}

const FAQ_SENTINEL = '%%FAQ_ACCORDION%%';

// Extract an FAQ section (if any) and replace its items with a sentinel.
// Returns { html, accordion }.
function extractFaq(rawBody) {
  const headingRe = /<h([234])\b[^>]*>(?:\s*<(?:strong|em)>)*\s*((?:Frequently Asked|FAQ)[^<]*?)\s*(?:<\/(?:strong|em)>\s*)*<\/h\1>/i;
  const hm = rawBody.match(headingRe);
  if (!hm) return { html: rawBody, accordion: '' };

  const headingEnd = hm.index + hm[0].length;
  // region = from heading end to next top-level <h2 (or end)
  const rest = rawBody.slice(headingEnd);
  const nextH2 = rest.search(/<h2\b/i);
  const region = nextH2 === -1 ? rest : rest.slice(0, nextH2);

  const items = [];
  if (/role="button"|<span[\s>]/i.test(region) && /<div/i.test(region)) {
    // FORMAT A: Elementor accordion — question in <span>, answer in sibling div
    const $ = cheerio.load(region, { decodeEntities: false });
    $('span').each((_, sp) => {
      const $sp = $(sp);
      const q = $sp.text().replace(/\s+/g, ' ').trim();
      if (!q) return;
      const $aDiv = $sp.parent().next();
      if (!$aDiv.length) return;
      const a = answerToParas($aDiv.html() || '');
      if (a) items.push({ q, a });
    });
  }
  if (!items.length && /<h[456]\b/i.test(region)) {
    // FORMAT C: questions in <h4>/<h5>/<h6> sub-headings, answer = text until next such heading
    const hRe = /<h([456])\b[^>]*>([\s\S]*?)<\/h\1>/gi;
    const ms = [...region.matchAll(hRe)];
    for (let i = 0; i < ms.length; i++) {
      const q = ms[i][2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
      const start = ms[i].index + ms[i][0].length;
      const end = i + 1 < ms.length ? ms[i + 1].index : region.length;
      const a = answerToParas(region.slice(start, end));
      if (q && a) items.push({ q, a });
    }
  }
  if (!items.length && /(<strong>\s*<em>|<em>\s*<strong>)/i.test(region)) {
    // FORMAT B: inline <strong><em>Question</em></strong> then answer text
    const qRe = /<strong>\s*<em>([\s\S]*?)<\/em>\s*<\/strong>|<em>\s*<strong>([\s\S]*?)<\/strong>\s*<\/em>/gi;
    const ms = [...region.matchAll(qRe)];
    for (let i = 0; i < ms.length; i++) {
      const q = (ms[i][1] || ms[i][2] || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
      const start = ms[i].index + ms[i][0].length;
      const end = i + 1 < ms.length ? ms[i + 1].index : region.length;
      const a = answerToParas(region.slice(start, end));
      if (q && a) items.push({ q, a });
    }
  }

  if (!items.length) return { html: rawBody, accordion: '' };

  // Replace [heading + region] with [heading + sentinel]
  const newBody = rawBody.slice(0, headingEnd) + FAQ_SENTINEL + rawBody.slice(headingEnd + region.length);
  return { html: newBody, accordion: buildAccordion(items) };
}

export function normalize(rawHtml) {
  // Pull FAQ out first (its messy markup would be flattened by the DOM walk).
  const bodyMatch0 = rawHtml.match(/<body>([\s\S]*)<\/body>/);
  const pre = bodyMatch0 ? bodyMatch0[1] : rawHtml;
  const { html: preBody, accordion } = extractFaq(pre);
  rawHtml = bodyMatch0 ? rawHtml.replace(bodyMatch0[1], preBody) : preBody;

  const $ = cheerio.load(rawHtml, { decodeEntities: false });

  // Drop non-content elements entirely.
  $('header, footer, nav, script, style, img, h1, noscript, svg, form, iframe, button, input').remove();

  // Unwrap all structural containers until only content tags remain.
  let guard = 0;
  while ($('div, section, article, main, aside').length && guard++ < 50) {
    $('div, section, article, main, aside').each((_, el) => {
      const $el = $(el);
      $el.replaceWith($el.contents());
    });
  }
  // Unwrap styling spans (keep their text).
  $('span').each((_, el) => { const $el = $(el); $el.replaceWith($el.contents()); });

  const container = $('body')[0] || $.root()[0];
  const nodes = container.children ? [...container.children] : [];

  const out = [];
  let buf = '';
  const flush = () => {
    const t = buf.replace(/\s+/g, ' ').trim();
    if (t && t !== '&nbsp;') out.push(`<p>${t}</p>`);
    buf = '';
  };

  for (const node of nodes) {
    if (node.type === 'tag' && BLOCK.has(node.name)) {
      flush();
      if (node.name === 'ul' || node.name === 'ol') {
        const list = cleanList($, node);
        if (list) out.push(list);
      } else if (/^h[2-6]$/.test(node.name)) {
        const inner = cleanHeadingInner($, node);
        if (inner) out.push(`<${node.name}>${inner}</${node.name}>`);
      } else {
        // table / blockquote / pre / figure -> keep cleaned
        const inner = cleanInner($, node);
        if (inner) out.push(`<${node.name}>${inner}</${node.name}>`);
      }
    } else if (node.type === 'tag' && node.name === 'p') {
      flush();
      const inner = cleanInner($, node);
      if (inner) out.push(`<p>${inner}</p>`);
    } else if (node.type === 'tag' && node.name === 'br') {
      flush(); // a break ends the current paragraph
    } else {
      // text node or inline element -> accumulate into current paragraph
      buf += $.html(node);
    }
  }
  flush();

  // Final uniform pass: normalize links + strip stray attrs across ALL output
  // (covers links that were accumulated via the loose-text buffer path).
  const $$ = cheerio.load(out.join('\n'), { decodeEntities: false });
  normalizeLinks($$, $$.root());
  stripAttrs($$, $$.root());
  $$('br').remove();
  $$('p').each((_, p) => { if (!$$(p).text().trim()) $$(p).remove(); });

  const body = $$('body')[0] || $$.root()[0];
  let result = (body.children ? body.children : [])
    .map(n => $$.html(n))
    .join('\n')
    .replace(/\n{2,}/g, '\n')
    .trim();

  // Swap the FAQ sentinel back in AFTER the attr-stripping pass so faq-* classes survive.
  if (accordion) {
    result = result
      .replace(new RegExp(`<p>\\s*${FAQ_SENTINEL}\\s*</p>`, 'g'), accordion)
      .replace(new RegExp(FAQ_SENTINEL, 'g'), accordion);
  }
  return result;
}

// CLI: normalize one file and print/save for inspection.
if (process.argv[1] && process.argv[1].endsWith('normalize-blogs.mjs')) {
  const file = process.argv[2];
  if (file) {
    const raw = readFileSync(join(__dir, file), 'utf8');
    const result = normalize(raw);
    const outPath = join(__dir, '_normalized-preview.html');
    writeFileSync(outPath, result, 'utf8');
    console.log(`Normalized ${file} -> ${outPath}\n`);
    console.log(result.slice(0, 1200));
  }
}
