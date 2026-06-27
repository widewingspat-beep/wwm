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

export function normalize(rawHtml) {
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
  return (body.children ? body.children : [])
    .map(n => $$.html(n))
    .join('\n')
    .replace(/\n{2,}/g, '\n')
    .trim();
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
