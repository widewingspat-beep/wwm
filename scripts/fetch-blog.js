#!/usr/bin/env node
/**
 * fetch-blog.js — Wide Wings Media blog migrator
 * Usage: node scripts/fetch-blog.js <url1> [url2] ...
 *
 * Fetches old site content via Wayback Machine (Dec 2024 snapshot),
 * converts to JSX, and injects into:
 *   app/blogs/[slug]/page.tsx  (PAGE_TITLES + CONTENT map)
 *   app/blogs/posts-data.ts    (adds slug entry)
 * Then git-commits and pushes.
 */

const { Readability } = require('@mozilla/readability');
const { JSDOM }       = require('jsdom');
const cheerio         = require('cheerio');
const fs              = require('fs');
const path            = require('path');
const { execSync }    = require('child_process');

const ROOT       = path.resolve(__dirname, '..');
const PAGE_TSX   = path.join(ROOT, 'app/blogs/[slug]/page.tsx');
const POSTS_DATA = path.join(ROOT, 'app/blogs/posts-data.ts');

// ─── Wayback Machine URL — try Dec 2024 first, fallback to earlier ───────────
function waybackUrl(url, ts = '20241201120000') {
  return `https://web.archive.org/web/${ts}/${url}`;
}

// ─── Page title extraction — strip site name suffix ──────────────────────────
function extractTitle(html) {
  const $ = cheerio.load(html);
  // 1. Try the <title> tag, strip " | Site Name" suffix
  const rawTitle = $('title').text().trim();
  const cleanTitle = rawTitle
    .replace(/\s*[\|–\-]\s*Wide Wings.*$/i, '')
    .replace(/\s*[\|–\-]\s*WWM.*$/i, '')
    .replace(/\s+/g, ' ').trim();
  if (cleanTitle && cleanTitle.length > 3 && cleanTitle !== rawTitle.trim()) return cleanTitle;

  // 2. Try the page H1
  const h1 = $('h1').first().text().replace(/\s+/g,' ').trim();
  if (h1 && h1.length > 3) return h1;

  // 3. Try the first elementor heading widget
  const hw = $('.elementor-heading-title').first().text().replace(/\s+/g,' ').trim();
  if (hw && hw.length > 3) return hw;

  // 4. og:title as last resort
  const og = $('meta[property="og:title"]').attr('content') || '';
  return og.replace(/\s*[\|–\-]\s*Wide Wings.*$/i, '').trim() || rawTitle || 'Untitled';
}

function slugFromUrl(url) {
  return url.replace(/\/$/, '').split('/').pop();
}

// ─── JSX string escaping ──────────────────────────────────────────────────────
function escJsx(str) {
  return str
    .replace(/&amp;/g,  '&')   // decode first
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;/g,"'").replace(/&#8216;/g,"'")
    .replace(/&#8220;/g,'"').replace(/&#8221;/g,'"')
    .replace(/&#8211;/g,'–').replace(/&#8212;/g,'—')
    .replace(/&lt;/g,  '<').replace(/&gt;/g,  '>')
    .replace(/&quot;/g,'"')
    .replace(/&/g,  '&amp;')   // re-encode for JSX
    .replace(/</g,  '&lt;').replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;')
    .replace(/'/g, '&apos;').replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;').replace(/"/g, '&quot;');
}

function escStr(str) {
  return str.replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/`/g,'\\`');
}

// ─── Footer patterns — stop processing when we hit these ────────────────────
const FOOTER_PATTERNS = [
  /sheikh zayed road/i, /\+971\s*\d/, /info@wide-wings/,
  /©\s*20\d{2}/, /all rights reserved/i,
  /we specialize in connecting communities/i,
  /follow us/i,
];
function isFooter(text) { return FOOTER_PATTERNS.some(p => p.test(text)); }

// ─── Extract JSON-LD FAQ ──────────────────────────────────────────────────────
function extractJsonLdFaqs($) {
  const faqs = [];
  $('script[type="application/ld+json"]').each((_, el) => {
    const raw = $(el).html() || '';
    if (!raw.includes('"FAQPage"')) return;
    try {
      const data = JSON.parse(raw);
      const entities = Array.isArray(data?.mainEntity) ? data.mainEntity : [];
      for (const e of entities) {
        const q = (e?.name || '').trim();
        const a = (e?.acceptedAnswer?.text || '').trim();
        if (q && a) faqs.push({ q, a });
      }
    } catch {}
  });
  return faqs;
}

// ─── DOM node → JSX string ───────────────────────────────────────────────────
function nodeToJsx($, node) {
  if (!node) return '';
  if (node.type === 'text') {
    const t = (node.data || '').replace(/\n/g,' ').replace(/\s+/g,' ').trim();
    return t ? escJsx(t) : '';
  }
  if (node.type !== 'tag') return '';

  const tag = node.name.toLowerCase();
  const kids = () => $(node).contents().toArray().map(c => nodeToJsx($,c)).join('');

  if (['script','style','noscript','nav','header','footer','iframe','form','button','svg','img'].includes(tag)) return '';
  if (tag === 'h1') return '';
  if (['h2','h3','h4','h5','h6'].includes(tag)) {
    const t = $(node).text().replace(/\s+/g,' ').trim();
    return t ? `\n      <${tag}>${escJsx(t)}</${tag}>` : '';
  }
  if (tag === 'p') { const i = kids().trim(); return i ? `\n      <p>${i}</p>` : ''; }
  if (tag === 'ul') {
    const items = $(node).children('li').toArray().map(li => {
      const t = $(li).contents().toArray().map(c=>nodeToJsx($,c)).join('').trim();
      return t ? `\n        <li>${t}</li>` : '';
    }).join('');
    return items.trim() ? `\n      <ul>${items}\n      </ul>` : '';
  }
  if (tag === 'ol') {
    const items = $(node).children('li').toArray().map(li => {
      const t = $(li).contents().toArray().map(c=>nodeToJsx($,c)).join('').trim();
      return t ? `\n        <li>${t}</li>` : '';
    }).join('');
    return items.trim() ? `\n      <ol>${items}\n      </ol>` : '';
  }
  if (tag === 'table') return tableToJsx($, node);
  if (tag === 'strong' || tag === 'b') { const i=kids().trim(); return i?`<strong>${i}</strong>`:''; }
  if (tag === 'em'     || tag === 'i') { const i=kids().trim(); return i?`<em>${i}</em>`:''; }
  if (tag === 'br')  return '<br />';
  if (tag === 'hr')  return '\n      <hr className="bp-divider" />';
  if (tag === 'a')   return kids();
  return kids();
}

function tableToJsx($, node) {
  const $t = $(node);
  const thead = $t.find('thead tr').toArray().map(tr =>
    `\n            <tr>${$(tr).children('th,td').toArray().map(c=>`<th>${escJsx($(c).text().trim())}</th>`).join('')}</tr>`
  ).join('');
  const tbody = $t.find('tbody tr').toArray().map(tr =>
    `\n            <tr>${$(tr).children('td,th').toArray().map(c=>`<td>${escJsx($(c).text().trim())}</td>`).join('')}</tr>`
  ).join('');
  if (!tbody && !thead) return '';
  return `\n      <div className="bp-table-wrap"><table className="bp-table">${
    thead?`\n          <thead>${thead}\n          </thead>`:''}${
    tbody?`\n          <tbody>${tbody}\n          </tbody>`:''}\n        </table></div>`;
}

// ─── Elementor widget → JSX ───────────────────────────────────────────────────
function widgetToJsx($, el) {
  const cls = $(el).attr('class') || '';

  // QI FAQ addon widget (what wide-wings.ae uses)
  if (cls.includes('qi_addons_for_elementor_faq') || cls.includes('qi_addons_for_elementor_accordion')) {
    return qiFaqToJsx($, el);
  }
  // Standard Elementor accordion
  if (cls.includes('elementor-widget-accordion') || cls.includes('elementor-widget-toggle')) {
    return standardAccordionToJsx($, el);
  }
  // Heading widget
  if (cls.includes('elementor-widget-heading')) {
    const text = $(el).text().replace(/\s+/g,' ').trim();
    return text ? `\n      <h2>${escJsx(text)}</h2>` : '';
  }
  // Text editor
  if (cls.includes('elementor-widget-text-editor')) {
    const container = $(el).find('.elementor-widget-container').first();
    const root = container.length ? container[0] : el;
    return $(root).contents().toArray().map(c => nodeToJsx($,c)).join('');
  }
  // Icon list → ul
  if (cls.includes('elementor-widget-icon-list')) {
    const items = $(el).find('.elementor-icon-list-item').toArray().map(li => {
      const t = $(li).find('.elementor-icon-list-text').text().trim();
      return t ? `\n        <li>${escJsx(t)}</li>` : '';
    }).join('');
    return items.trim() ? `\n      <ul>${items}\n      </ul>` : '';
  }
  // Table
  if (cls.includes('elementor-widget-table')) {
    return tableToJsx($, $(el).find('table').first()[0]);
  }
  return '';
}

function qiFaqToJsx($, widgetEl) {
  const items = [];
  const faqDiv = $(widgetEl).find('.qodef-qi-faq, .qodef-qi-accordion').first();
  if (!faqDiv.length) return '';

  const children = faqDiv.children().toArray();
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    const childCls = $(child).attr('class') || '';
    if (childCls.includes('qodef-e-title-holder') || child.name === 'h5' || child.name === 'h4') {
      const q = ($(child).find('.qodef-e-title').text() || $(child).text()).trim();
      const nextEl = children[i + 1];
      let aJsx = '';
      if (nextEl && ($(nextEl).attr('class') || '').includes('qodef-e-content')) {
        const inner = $(nextEl).find('.qodef-e-content-inner').first();
        aJsx = (inner.length ? inner : $(nextEl)).contents().toArray().map(c => nodeToJsx($,c)).join('').trim();
        i++;
      }
      if (q) items.push({ q, a: aJsx || '' });
    }
  }

  return faqItemsToJsx(items);
}

function standardAccordionToJsx($, el) {
  const items = [];
  $(el).find('.elementor-accordion-item').each((_, item) => {
    const q = $(item).find('.elementor-accordion-title, .elementor-tab-title').text().trim();
    const a = $(item).find('.elementor-accordion-content, .elementor-tab-content').first();
    const aJsx = a.length ? a.contents().toArray().map(c=>nodeToJsx($,c)).join('').trim() : '';
    if (q) items.push({ q, a: aJsx });
  });
  $(el).find('.elementor-toggle-item').each((_, item) => {
    const q = $(item).find('.elementor-toggle-title').text().trim();
    const a = $(item).find('.elementor-toggle-content').first();
    const aJsx = a.length ? a.contents().toArray().map(c=>nodeToJsx($,c)).join('').trim() : '';
    if (q) items.push({ q, a: aJsx });
  });
  return faqItemsToJsx(items);
}

function faqItemsToJsx(items) {
  if (!items.length) return '';
  const entries = items.map(({ q, a }) =>
    `        {\n          q: '${escStr(q)}',\n          a: <>${a || '<p></p>'}</>,\n        }`
  ).join(',\n');
  return `\n      <FaqAccordion items={[\n${entries}\n      ]} />`;
}

// ─── Main extraction ──────────────────────────────────────────────────────────
const FALLBACK_TIMESTAMPS = ['20241201120000', '20241101120000', '20240901120000', '20240601120000'];

async function fetchHtml(originalUrl) {
  for (const ts of FALLBACK_TIMESTAMPS) {
    const wbUrl = waybackUrl(originalUrl, ts);
    try {
      const res = await fetch(wbUrl, {
        headers: { 'user-agent': 'Mozilla/5.0 (compatible; BlogMigrator/1.0)', 'accept': 'text/html' },
        redirect: 'follow',
      });
      if (res.ok) {
        const html = await res.text();
        console.log(`  📦 Wayback ${ts} → ${html.length} bytes`);
        return html;
      }
    } catch {}
  }
  throw new Error('No Wayback snapshot found for any timestamp');
}

async function fetchAndExtract(originalUrl) {
  const html = await fetchHtml(originalUrl);
  const $ = cheerio.load(html);

  // Remove Wayback toolbar
  $('#wm-ipp-base, #wm-ipp, #wm-ipp-inside, .wb-autocomplete-suggestions').remove();

  // ── Try Elementor widget extraction first ─────────────────────────────────
  const widgetSel = [
    '.elementor-widget-text-editor',
    '.elementor-widget-heading',
    '.elementor-widget-icon-list',
    '.elementor-widget-accordion',
    '.elementor-widget-toggle',
    '.elementor-widget-table',
    '[class*="qi_addons_for_elementor_faq"]',
    '[class*="qi_addons_for_elementor_accordion"]',
  ].join(', ');

  const widgets = $(widgetSel).toArray();

  let jsx = '';
  let skippedTitle = false;

  let pageTitle = extractTitle(html);

  if (widgets.length >= 3) {
    console.log(`  ✅ Elementor: found ${widgets.length} widgets`);
    for (const w of widgets) {
      const text = $(w).text().trim();
      if (isFooter(text)) break;

      // Skip first heading if it matches the page title
      const cls = $(w).attr('class') || '';
      if (!skippedTitle && cls.includes('elementor-widget-heading')) {
        const normalized = text.replace(/\s+/g, ' ').trim();
        if (normalized.toLowerCase() === pageTitle.toLowerCase() ||
            pageTitle.toLowerCase().includes(normalized.toLowerCase())) {
          skippedTitle = true;
          continue;
        }
      }

      jsx += widgetToJsx($, w);
    }
  }

  // ── Fallback: Readability ─────────────────────────────────────────────────
  if (!jsx || jsx.trim().length < 200) {
    console.log('  ⚠️  Few Elementor widgets — trying Readability...');
    try {
      const wbUrl = waybackUrl(originalUrl);
      const dom = new JSDOM(html, { url: wbUrl });
      // Remove Wayback toolbar from JSDOM too
      dom.window.document.querySelector('#wm-ipp-base')?.remove();
      dom.window.document.querySelector('#wm-ipp')?.remove();
      const cloned = dom.window.document.cloneNode(true);
      const article = new Readability(cloned, { charThreshold: 100 }).parse();
      if (article?.content) {
        const $art = cheerio.load(article.content);
        jsx = $art('body').contents().toArray().map(c => nodeToJsx($art, c)).join('');
        console.log(`  ✅ Readability: ${jsx.trim().length} chars`);
      }
    } catch(e) {
      console.log('  ⚠️  Readability failed:', e.message);
    }
  }

  // ── Last resort: Cheerio text extraction from <main>/<article> ───────────
  if (!jsx || jsx.trim().length < 200) {
    console.log('  ⚠️  Trying cheerio fallback on <main>...');
    const candidates = ['article .elementor', 'article', 'main', '[role="main"]', '.entry-content', '.post-content'];
    for (const sel of candidates) {
      const el = $(sel).first();
      if (el.length && el.text().trim().length > 200) {
        el.find('script,style,nav,header,footer,aside,.elementor-widget-button,.elementor-widget-image').remove();
        jsx = el.contents().toArray().map(c => nodeToJsx($,c)).join('');
        console.log(`  ✅ Cheerio (${sel}): ${jsx.trim().length} chars`);
        break;
      }
    }
  }

  // ── FAQ from JSON-LD (append if not already extracted) ───────────────────
  const jsonFaqs = extractJsonLdFaqs($);
  if (jsonFaqs.length && !jsx.includes('FaqAccordion')) {
    console.log(`  ✅ JSON-LD FAQs: ${jsonFaqs.length} items`);
    const faqJsx = faqItemsToJsx(jsonFaqs);
    jsx += `\n      <h2>Frequently Asked Questions</h2>${faqJsx}`;
  }

  return { pageTitle, jsx: jsx.trim() };
}

// ─── page.tsx updater ─────────────────────────────────────────────────────────
function updatePageTsx(slug, title, jsxBody) {
  let src = fs.readFileSync(PAGE_TSX, 'utf8');

  // 1. PAGE_TITLES
  const titleEntry = `  '${slug}': '${escStr(title)}',`;
  if (src.includes(`'${slug}':`)) {
    src = src.replace(new RegExp(`  '${slug}':\\s*'[^']*',`), titleEntry);
  } else {
    const titlesEnd = src.indexOf('\n};\n\n/* ── per-post content map');
    if (titlesEnd !== -1) src = src.slice(0, titlesEnd) + `\n${titleEntry}` + src.slice(titlesEnd);
  }

  // 2. CONTENT block
  const block = `\n  '${slug}': (\n    <>\n      ${jsxBody}\n    </>\n  ),\n`;

  if (src.includes(`'${slug}': (`)) {
    // Replace existing block
    const start = src.indexOf(`\n  '${slug}': (`);
    const end   = src.indexOf('\n  ),\n', start);
    if (start !== -1 && end !== -1) {
      src = src.slice(0, start) + block.slice(0, -1) + src.slice(end + '\n  ),\n'.length - 1);
    }
  } else {
    // Insert before CONTENT closing
    const marker = '\n};\n\n/* ── Related posts helper';
    const idx = src.indexOf(marker);
    if (idx !== -1) src = src.slice(0, idx) + block + src.slice(idx);
  }

  fs.writeFileSync(PAGE_TSX, src, 'utf8');
  console.log(`  📝 page.tsx updated`);
}

function updatePostsData(slug, title) {
  let src = fs.readFileSync(POSTS_DATA, 'utf8');
  if (src.includes(`slug: '${slug}'`)) {
    console.log(`  ℹ️  Already in posts-data.ts`);
    return;
  }
  const excerpt = `${title.slice(0, 100)}.`;
  const entry = `  {\n    slug: '${slug}',\n    title: '${escStr(title)}',\n    excerpt: '${escStr(excerpt)}',\n    category: 'Insights',\n    image: '/images/blog/default.jpg',\n    date: '${new Date().toISOString().slice(0,10)}',\n    readTime: '8 min read',\n  },`;
  src = src.replace(/\];\s*$/, `${entry}\n];\n`);
  fs.writeFileSync(POSTS_DATA, src, 'utf8');
  console.log(`  📝 posts-data.ts updated`);
}

function gitCommitPush(slugs) {
  try {
    execSync(`git -C "${ROOT}" add "app/blogs/[slug]/page.tsx" app/blogs/posts-data.ts`, { stdio: 'inherit' });
    execSync(`git -C "${ROOT}" commit -m "Add blog content: ${slugs.join(', ')}"`, { stdio: 'inherit' });
    execSync(`git -C "${ROOT}" push origin main`, { stdio: 'inherit' });
    console.log('\n✅ Committed and pushed.');
  } catch(e) {
    console.error('Git error:', e.message);
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function run() {
  const urls = process.argv.slice(2).filter(a => a.startsWith('http'));
  if (!urls.length) {
    console.error('Usage: node scripts/fetch-blog.js <url1> [url2] ...');
    process.exit(1);
  }

  const processed = [];

  for (const url of urls) {
    const slug = slugFromUrl(url);
    console.log(`\n${'─'.repeat(60)}`);
    console.log(`Slug: ${slug}`);
    console.log(`URL:  ${url}`);

    try {
      const { pageTitle, jsx } = await fetchAndExtract(url);
      console.log(`  📌 Title: ${pageTitle}`);
      console.log(`  📄 Content: ${jsx.length} chars`);

      if (!jsx || jsx.length < 80) {
        console.error(`  ❌ Content too short — skipping`);
        continue;
      }

      updatePageTsx(slug, pageTitle, jsx);
      updatePostsData(slug, pageTitle);
      processed.push(slug);

    } catch(err) {
      console.error(`  ❌ Error: ${err.message}`);
    }
  }

  if (processed.length) {
    console.log(`\n${'─'.repeat(60)}`);
    gitCommitPush(processed);
  } else {
    console.log('\n⚠️  Nothing processed.');
  }
}

run();
