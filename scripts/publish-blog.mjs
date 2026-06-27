/**
 * publish-blog.mjs
 * Usage: node scripts/publish-blog.mjs <slug> <html-file>
 * Or: pipe HTML via stdin: cat page.html | node scripts/publish-blog.mjs <slug>
 *
 * Env vars required: KV_REST_API_URL, KV_REST_API_TOKEN
 */

import { JSDOM } from 'jsdom';
import { readFileSync } from 'fs';

const KV_URL   = process.env.KV_REST_API_URL;
const KV_TOKEN = process.env.KV_REST_API_TOKEN;

const slug = process.argv[2];
if (!slug) { console.error('Usage: node scripts/publish-blog.mjs <slug>'); process.exit(1); }
if (!KV_URL || !KV_TOKEN) { console.error('Missing KV_REST_API_URL / KV_REST_API_TOKEN'); process.exit(1); }

// Read HTML from file arg or stdin
let rawHtml = '';
if (process.argv[3]) {
  rawHtml = readFileSync(process.argv[3], 'utf8');
} else {
  rawHtml = readFileSync('/dev/stdin', 'utf8');
}

// ── same extraction logic as BlogEditor.tsx ──
const SVG_CHEVRON = `<svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;

function extract(input) {
  const { window } = new JSDOM(input, { contentType: 'text/html' });
  const { document } = window;
  const body = document.body;

  // 1. Remove chrome
  body.querySelectorAll('header, footer, nav').forEach(e => e.remove());
  body.querySelectorAll(
    '[class*="site-header"],[class*="site-footer"],[class*="site-nav"],' +
    '[class*="main-nav"],[class*="top-bar"],[class*="breadcrumb"],' +
    '[id*="header"],[id*="footer"],[id*="nav"],[id*="menu"],' +
    '[class*="footer"],[class*="sidebar"],[class*="widget-area"],' +
    '[class*="social-icon"],[class*="social-media"],[class*="share-btn"],' +
    '[class*="cookie"],[class*="popup"],[class*="modal"],[class*="banner"]'
  ).forEach(e => e.remove());
  body.querySelectorAll('svg').forEach(e => e.remove());
  body.querySelectorAll('img, picture, figure, figcaption, source, video, audio, iframe, embed').forEach(e => e.remove());
  body.querySelectorAll('script, style, noscript').forEach(e => e.remove());
  body.querySelectorAll(
    '[class*="widget-spacer"],[class*="widget-divider"],[class*="elementor-divider"],' +
    '[class*="elementor-spacer"],[class*="elementor-separator"],.meta'
  ).forEach(e => e.remove());

  // 2. Remove h1 only
  body.querySelectorAll('h1').forEach(e => e.remove());

  // 2.5. Convert <br><br> → <p> inside Elementor text widgets
  const BLOCK = ['H1','H2','H3','H4','H5','H6','UL','OL','TABLE','BLOCKQUOTE','DETAILS','P','SECTION','ARTICLE'];
  Array.from(body.querySelectorAll('div, td')).forEach(el => {
    if (Array.from(el.children).some(c => BLOCK.includes(c.tagName))) return;
    if (!el.innerHTML.match(/(<br\s*\/?>\s*){2,}/i)) return;
    const conv = el.innerHTML
      .replace(/\s*(<br\s*\/?>\s*){2,}/gi, '</p><p>')
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/^(<p>\s*<\/p>)+/, '')
      .replace(/(<p>\s*<\/p>)+$/, '');
    el.innerHTML = `<p>${conv}</p>`;
  });

  // 3a. FAQ: <details>/<summary>
  const buildItem = (q, a) => {
    const el = document.createElement('details');
    el.className = 'faq-item';
    el.innerHTML = `<summary class="faq-question"><span>${q}</span>${SVG_CHEVRON}</summary><div class="faq-answer"><div class="faq-answer-inner">${a}</div></div>`;
    return el;
  };
  const findFaqH = () => {
    let h;
    body.querySelectorAll('h2, h3').forEach(el => {
      if (!h && /faq|frequently asked/i.test(el.textContent || '')) h = el;
    });
    return h;
  };

  const allDetails = Array.from(body.querySelectorAll('details'));
  if (allDetails.length > 0) {
    const faqH = findFaqH();
    const acc = document.createElement('div'); acc.className = 'faq-accordion';
    allDetails.forEach(d => {
      const sum = d.querySelector('summary');
      const ans = d.querySelector('.faq-answer') || d.querySelector('div');
      acc.appendChild(buildItem(sum?.textContent?.trim() || '', ans?.innerHTML?.trim() || ''));
      d.remove();
    });
    if (faqH) faqH.after(acc); else body.appendChild(acc);
  }

  // 3b. FAQ: WCF .accordion-item
  const wcfItems = Array.from(body.querySelectorAll('.accordion-item'));
  if (wcfItems.length > 0) {
    const faqH = findFaqH();
    const acc = document.createElement('div'); acc.className = 'faq-accordion';
    wcfItems.forEach(item => {
      const q = item.querySelector('.accordion-title')?.textContent?.trim() || '';
      const a = item.querySelector('.tab-content')?.innerHTML?.trim() || '';
      if (q) acc.appendChild(buildItem(q, a));
      item.remove();
    });
    body.querySelectorAll('script').forEach(s => s.remove());
    if (faqH) faqH.after(acc); else body.appendChild(acc);
  }

  // 4. Unwrap divs/sections (protect faq-*)
  for (let pass = 0; pass < 20; pass++) {
    const wrappers = Array.from(body.querySelectorAll('div, section, article, aside, header, footer, main, nav'));
    if (wrappers.length === 0) break;
    let any = false;
    wrappers.forEach(el => {
      const cls = el.getAttribute('class') || '';
      if (cls.split(' ').some(c => c.startsWith('faq-'))) return;
      while (el.firstChild) el.before(el.firstChild);
      el.remove();
      any = true;
    });
    if (!any) break;
  }

  // 5. Clean stray <br>
  let html = body.innerHTML;
  html = html.replace(/<br\s*\/?>\s*(<\/?h[2-6])/gi, '$1');
  html = html.replace(/(<\/h[2-6]>)\s*<br\s*\/?>/gi, '$1');
  html = html.replace(/<p>\s*(<br\s*\/?>\s*)+/gi, '<p>');
  html = html.replace(/(<br\s*\/?>\s*)+\s*<\/p>/gi, '</p>');

  // 6. Clean attrs
  const { window: w2 } = new JSDOM(`<html><body>${html}</body></html>`);
  const body2 = w2.document.body;
  body2.querySelectorAll('*').forEach(el => {
    el.removeAttribute('style');
    el.removeAttribute('id');
    Array.from(el.attributes)
      .filter(a => a.name.startsWith('data-') || a.name.startsWith('on'))
      .forEach(a => el.removeAttribute(a.name));
    const cls = el.getAttribute('class');
    if (cls !== null) {
      const keep = cls.split(/\s+/).filter(c => c.startsWith('faq-')).join(' ');
      if (keep) el.setAttribute('class', keep); else el.removeAttribute('class');
    }
  });

  // 7. Remove empty blocks
  body2.querySelectorAll('p, h2, h3, h4, li').forEach(el => {
    if (!el.textContent?.trim()) el.remove();
  });

  return body2.innerHTML.replace(/\n{3,}/g, '\n\n').trim();
}

const cleaned = extract(rawHtml);
console.log(`Extracted ${cleaned.length} chars for slug: ${slug}`);

// Push to KV
const key = `blog:${slug}`;
const res = await fetch(`${KV_URL}/set/${encodeURIComponent(key)}`, {
  method: 'POST',
  headers: { Authorization: `Bearer ${KV_TOKEN}`, 'Content-Type': 'application/json' },
  body: JSON.stringify(cleaned),
});
const json = await res.json();
if (json.result === 'OK') {
  console.log(`✓ Published to KV: ${key}`);
} else {
  console.error('KV error:', json);
  process.exit(1);
}
