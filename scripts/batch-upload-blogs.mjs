import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dir = dirname(fileURLToPath(import.meta.url));
const TOKEN = 'wwm-clear-2026';
const BASE = 'https://wwm-mu.vercel.app';

// Map: html filename → KV slug
const FILES = [
  ['shopify-page.html',                              'shopify-web-development-dubai'],
  ['b2b-seo-page.html',                             'b2b-seo-services-in-dubai'],
  ['restaurants-page.html',                          'digital-marketing-for-restaurants'],
  ['healthcare-page.html',                           'healthcare-marketing-agency-in-dubai'],
  ['paid-ads-page.html',                             'reliable-paid-ads-agency-in-dubai'],
  ['seo-startups-page.html',                         'seo-strategy-for-uae-startups'],
  ['ai-trend-page.html',                             'ai-trend'],
  ['real-estate-content-page.html',                  'real-estate-content-writing-uae'],
  ['local-seo-abu-dhabi-page.html',                  'local-seo-services-in-abu-dhabi'],
  ['social-media-smes-page.html',                    'social-media-packages-for-smes'],
  ['digital-marketing-smes-page.html',               'digital-marketing-strategies-for-smes'],
  ['local-seo-agency-startups-page.html',            'local-seo-agency-for-startups'],
  ['what-is-a-url-page.html',                        'what-is-a-url'],
  ['social-media-brand-awareness-page.html',         'social-media-for-powerful-brand-awareness'],
  ['ai-in-healthcare-page.html',                     'ai-in-healthcare-marketing'],
  ['advertisement-company-dubai-page.html',          'advertisement-company-in-dubai'],
  ['broadcast-tv-advertising-page.html',             'broadcast-tv-advertising-for-millions'],
  ['connected-tv-advertising-page.html',             'connected-tv-advertising'],
  ['impact-of-ai-marketing-page.html',               'impact-of-ai-on-marketing-and-advertising'],
  ['creative-street-marketing-page.html',            'creative-street-marketing-solutions'],
  ['structured-data-seo-page.html',                  'structured-data-for-enhanced-seo-performance'],
  ['systematic-seo-page.html',                       'systematic-search-engine-optimization'],
  ['brand-lift-tests-page.html',                     'brand-lift-tests'],
  ['marketing-ecommerce-page.html',                  'marketing-for-ecommerce-businesses'],
  ['content-repurposing-page.html',                  'content-repurposing'],
  ['local-seo-ai-page.html',                         'local-seo-and-ai-for-small-businesses'],
  ['social-media-smb-page.html',                     'social-media-for-small-businesses'],
  ['open-graph-tags-page.html',                      'what-are-open-graph-tags'],
  ['anchor-texts-page.html',                         'what-are-anchor-texts'],
  ['b2b-marketing-strategy-page.html',               'digital-marketing-strategy-for-b2bs'],
  ['image-optimization-page.html',                   'image-optimization-tips'],
  ['abu-dhabi-agency-page.html',                     'best-digital-marketing-agency-in-abu-dhabi'],
  ['top-social-media-agencies-page.html',            'top-social-media-marketing-agencies-in-dubai'],
  ['healthcare-marketing-page.html',                 'healthcare-marketing'],
  ['what-are-banner-ads-page.html',                  'what-are-banner-ads'],
  ['power-of-bridge-banner-advertising-page.html',   'power-of-bridge-banner-advertising'],
  ['power-of-shopping-mall-advertising-page.html',   'power-of-shopping-mall-advertising'],
  ['market-segmentation-and-targeting-page.html',    'market-segmentation-and-targeting'],
  ['power-of-reputation-management-page.html',       'power-of-reputation-management'],
  ['premier-cinema-advertising-company-page.html',   'premier-cinema-advertising-company'],
  ['best-time-to-post-on-instagram-in-uae-page.html','best-time-to-post-on-instagram-in-uae'],
  ['guide-to-effective-social-media-campaign-page.html','guide-to-effective-social-media-campaign'],
  ['ai-video-creation-trends-page.html',             'ai-video-creation-trends'],
  ['successfully-rebrand-your-business-page.html',   'successfully-rebrand-your-business'],
  ['how-to-keep-your-audience-engaged-page.html',    'how-to-keep-your-audience-engaged'],
];

function cleanHtml(raw) {
  const bodyMatch = raw.match(/<body>([\s\S]*)<\/body>/);
  const body = bodyMatch ? bodyMatch[1] : raw;

  let html = body
    .replace(/<header[^>]*>[\s\S]*?<\/header>/gi, '')
    .replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, '')
    .replace(/<\/?div[^>]*>/g, '')
    .replace(/<\/?section[^>]*>/g, '')
    .replace(/<h1[^>]*>[\s\S]*?<\/h1>/gi, '')
    .replace(/<img[^>]*\/?>/gi, '')
    .replace(/class="lisb"/g, '')
    .replace(/ class="[^"]*"/g, '')
    .replace(/ data-[^=]*="[^"]*"/g, '');

  // Convert <br/><br/> paragraph breaks to </p><p>
  html = html.replace(/<br\s*\/?>\s*<br\s*\/?>/gi, '</p><p>');

  // Remove stray <br/> after headings and lists
  html = html.replace(/(<\/h[2-4]>)\s*<br\s*\/?>/gi, '$1');
  html = html.replace(/(<\/ul>)\s*<br\s*\/?>/gi, '$1');
  html = html.replace(/(<\/ol>)\s*<br\s*\/?>/gi, '$1');

  // Remove <strong>/<em> wrappers directly inside headings (CSS handles weight)
  html = html.replace(/(<h[2-4][^>]*>)\s*(?:<strong>|<em>|<strong><em>|<em><strong>)([\s\S]*?)(?:<\/strong>|<\/em>|<\/strong><\/em>|<\/em><\/strong>)\s*(<\/h[2-4]>)/gi,
    (m, open, content, close) => open + content.replace(/<\/?(?:strong|em)>/gi, '') + close);

  // Wrap text that comes after </hN> directly (not already in a tag) in <p>
  html = html.replace(/(<\/h[2-4]>)([\s\S]*?)(?=<h[2-4]|<ul|<ol|<p|$)/gi, (m, hclose, text) => {
    const trimmed = text.trim();
    if (!trimmed || trimmed.startsWith('<')) return m;
    return hclose + '<p>' + trimmed + '</p>';
  });

  // Wrap leading bare text in <p>
  html = html.replace(/^(\s*)([A-Za-zÀ-ɏ&])/m, '$1<p>$2');

  // Close unclosed <p> before block elements
  html = html.replace(/(<p>(?:(?!<\/p>)[\s\S])*?)(<h[2-4]|<ul|<ol)/gi, '$1</p>$2');

  // Remove empty <p> tags
  html = html.replace(/<p>\s*<\/p>/gi, '');

  // Convert wide-wings.ae absolute links to relative
  html = html.replace(/https?:\/\/wide-wings\.ae\//g, '/');

  // Strip non-wide-wings external links (keep anchor text)
  html = html.replace(/<a\s+href="https?:\/\/(?!wide-wings)[^"]*"[^>]*>([\s\S]*?)<\/a>/gi, '$1');

  // Tidy up excessive whitespace
  html = html.replace(/[ \t]{2,}/g, ' ').replace(/\n{3,}/g, '\n\n').trim();

  return html;
}

async function uploadSlug(file, slug) {
  const raw = readFileSync(join(__dir, file), 'utf8');
  const clean = cleanHtml(raw);
  const res = await fetch(`${BASE}/api/admin/clear-kv?token=${TOKEN}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ slug, html: clean }),
  });
  const text = await res.text();
  return { slug, status: res.status, ok: text.includes('"ok":true') };
}

async function runBatch(batch) {
  const results = await Promise.all(batch.map(([file, slug]) => uploadSlug(file, slug)));
  results.forEach(r => console.log(`  ${r.ok ? '✓' : '✗'} ${r.slug} (${r.status})`));
  return results;
}

const BATCH_SIZE = 5;
const startArg = parseInt(process.argv[2] || '0', 10);
const endArg = parseInt(process.argv[3] || String(FILES.length), 10);

const todo = FILES.slice(startArg, endArg);
console.log(`\nProcessing ${todo.length} files (index ${startArg}–${endArg - 1})...\n`);

for (let i = 0; i < todo.length; i += BATCH_SIZE) {
  const batch = todo.slice(i, i + BATCH_SIZE);
  console.log(`Batch ${Math.floor(i / BATCH_SIZE) + 1}: ${batch.map(([,s]) => s).join(', ')}`);
  await runBatch(batch);
  if (i + BATCH_SIZE < todo.length) await new Promise(r => setTimeout(r, 1500));
}

console.log('\nDone!');
