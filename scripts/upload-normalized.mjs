// Uploads parser-normalized HTML for all KV blog posts.
// 45 posts from source HTML files + 2 KV-only posts fetched from the store.
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { normalize } from './normalize-blogs.mjs';

const __dir = dirname(fileURLToPath(import.meta.url));
const TOKEN = 'wwm-clear-2026';
const BASE = 'https://wwm-mu.vercel.app';

// html file -> slug (45 posts with source HTML)
const FILES = [
  ['shopify-page.html', 'shopify-web-development-dubai'],
  ['b2b-seo-page.html', 'b2b-seo-services-in-dubai'],
  ['restaurants-page.html', 'digital-marketing-for-restaurants'],
  ['healthcare-page.html', 'healthcare-marketing-agency-in-dubai'],
  ['paid-ads-page.html', 'reliable-paid-ads-agency-in-dubai'],
  ['seo-startups-page.html', 'seo-strategy-for-uae-startups'],
  ['ai-trend-page.html', 'ai-trend'],
  ['real-estate-content-page.html', 'real-estate-content-writing-uae'],
  ['local-seo-abu-dhabi-page.html', 'local-seo-services-in-abu-dhabi'],
  ['social-media-smes-page.html', 'social-media-packages-for-smes'],
  ['digital-marketing-smes-page.html', 'digital-marketing-strategies-for-smes'],
  ['local-seo-agency-startups-page.html', 'local-seo-agency-for-startups'],
  ['what-is-a-url-page.html', 'what-is-a-url'],
  ['social-media-brand-awareness-page.html', 'social-media-for-powerful-brand-awareness'],
  ['ai-in-healthcare-page.html', 'ai-in-healthcare-marketing'],
  ['advertisement-company-dubai-page.html', 'advertisement-company-in-dubai'],
  ['broadcast-tv-advertising-page.html', 'broadcast-tv-advertising-for-millions'],
  ['connected-tv-advertising-page.html', 'connected-tv-advertising'],
  ['impact-of-ai-marketing-page.html', 'impact-of-ai-on-marketing-and-advertising'],
  ['creative-street-marketing-page.html', 'creative-street-marketing-solutions'],
  ['structured-data-seo-page.html', 'structured-data-for-enhanced-seo-performance'],
  ['systematic-seo-page.html', 'systematic-search-engine-optimization'],
  ['brand-lift-tests-page.html', 'brand-lift-tests'],
  ['marketing-ecommerce-page.html', 'marketing-for-ecommerce-businesses'],
  ['content-repurposing-page.html', 'content-repurposing'],
  ['local-seo-ai-page.html', 'local-seo-and-ai-for-small-businesses'],
  ['social-media-smb-page.html', 'social-media-for-small-businesses'],
  ['open-graph-tags-page.html', 'what-are-open-graph-tags'],
  ['anchor-texts-page.html', 'what-are-anchor-texts'],
  ['b2b-marketing-strategy-page.html', 'digital-marketing-strategy-for-b2bs'],
  ['image-optimization-page.html', 'image-optimization-tips'],
  ['abu-dhabi-agency-page.html', 'best-digital-marketing-agency-in-abu-dhabi'],
  ['top-social-media-agencies-page.html', 'top-social-media-marketing-agencies-in-dubai'],
  ['healthcare-marketing-page.html', 'healthcare-marketing'],
  ['what-are-banner-ads-page.html', 'what-are-banner-ads'],
  ['power-of-bridge-banner-advertising-page.html', 'power-of-bridge-banner-advertising'],
  ['power-of-shopping-mall-advertising-page.html', 'power-of-shopping-mall-advertising'],
  ['market-segmentation-and-targeting-page.html', 'market-segmentation-and-targeting'],
  ['power-of-reputation-management-page.html', 'power-of-reputation-management'],
  ['premier-cinema-advertising-company-page.html', 'premier-cinema-advertising-company'],
  ['best-time-to-post-on-instagram-in-uae-page.html', 'best-time-to-post-on-instagram-in-uae'],
  ['guide-to-effective-social-media-campaign-page.html', 'guide-to-effective-social-media-campaign'],
  ['youtube-studio-for-more-views-page.html', 'youtube-studio-for-more-views'],
  ['ai-video-creation-trends-page.html', 'ai-video-creation-trends'],
  ['successfully-rebrand-your-business-page.html', 'successfully-rebrand-your-business'],
  ['how-to-keep-your-audience-engaged-page.html', 'how-to-keep-your-audience-engaged'],
];

// KV-only posts (no source HTML) — fetch current KV content, normalize, re-save.
const KV_ONLY = ['instagram-growth-services-uae', 'google-ads-agency-dubai'];

async function save(slug, html) {
  const res = await fetch(`${BASE}/api/admin/clear-kv?token=${TOKEN}`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ slug, html }),
  });
  return (await res.text()).includes('"ok":true');
}

async function run() {
  let ok = 0, fail = 0;
  for (const [file, slug] of FILES) {
    const raw = readFileSync(join(__dir, file), 'utf8');
    const clean = normalize(raw);
    const success = await save(slug, clean);
    console.log(`${success ? '✓' : '✗'} ${slug}`);
    success ? ok++ : fail++;
  }
  for (const slug of KV_ONLY) {
    const res = await fetch(`${BASE}/api/admin/clear-kv?token=${TOKEN}&slug=${slug}`);
    const { content } = await res.json();
    if (!content) { console.log(`⚠ no KV content: ${slug}`); fail++; continue; }
    const clean = normalize(content);
    const success = await save(slug, clean);
    console.log(`${success ? '✓' : '✗'} ${slug} (KV-only)`);
    success ? ok++ : fail++;
  }
  console.log(`\nDone. ${ok} ok, ${fail} failed.`);
}

run().catch(console.error);
