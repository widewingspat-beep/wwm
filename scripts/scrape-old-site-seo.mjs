// Scrapes wide-wings.ae (old WordPress site) for JSON-LD schema, canonical/robots meta,
// and internal links, so the new Next.js site can replicate them exactly.
// Usage: node scripts/scrape-old-site-seo.mjs
import { writeFileSync, mkdirSync, readFileSync } from 'fs';

const BASE = 'https://wide-wings.ae';

const SERVICE_SLUGS = [
  'web-design-company-dubai',
  'creative-branding',
  'ppc-advertising-company-dubai',
  'social-media-marketing-agency-in-dubai',
  'content-creation-graphic-design',
  'email-sms-crm-marketing',
  'seo-services-dubai',
  'outdoor-advertising-dubai',
  'analytics-performance-marketing',
  'pr-management',
];

const STATIC_SLUGS = [
  '', // homepage
  'digital-marketing-services',
  'insights',
  'about-us',
  'contact-us',
  'news',
  'privacy-policy',
  'terms-conditions',
];

const postsDataSrc = readFileSync(new URL('../app/blogs/posts-data.ts', import.meta.url), 'utf8');
const blogSlugs = [...postsDataSrc.matchAll(/slug: '([^']+)'/g)].map(m => m[1]);

const allSlugs = [
  ...STATIC_SLUGS,
  ...SERVICE_SLUGS,
  ...blogSlugs,
];

async function fetchPage(slug) {
  const url = slug ? `${BASE}/${slug}/` : `${BASE}/`;
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
    if (!res.ok) {
      return { slug, url, status: res.status, error: `HTTP ${res.status}` };
    }
    const html = await res.text();

    const ldJsonBlocks = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)]
      .map(m => {
        try { return JSON.parse(m[1]); } catch { return { __raw: m[1] }; }
      });

    const canonicalMatch = html.match(/<link rel="canonical" href="([^"]+)"/);
    const robotsMatch = html.match(/<meta name="robots" content="([^"]+)"/);

    const internalLinks = [...new Set(
      [...html.matchAll(/href="(https:\/\/wide-wings\.ae\/[^"?#]*)"/g)].map(m => m[1])
    )];

    return {
      slug,
      url,
      status: res.status,
      canonical: canonicalMatch?.[1] ?? null,
      robots: robotsMatch?.[1] ?? null,
      ldJson: ldJsonBlocks,
      internalLinks,
    };
  } catch (err) {
    return { slug, url, error: String(err) };
  }
}

async function main() {
  const results = {};
  const errors = [];
  let i = 0;
  for (const slug of allSlugs) {
    i++;
    process.stderr.write(`[${i}/${allSlugs.length}] fetching ${slug || '(home)'}...\n`);
    const data = await fetchPage(slug);
    const key = slug || 'home';
    results[key] = data;
    if (data.error) errors.push({ slug: key, error: data.error });
    // be polite
    await new Promise(r => setTimeout(r, 150));
  }

  mkdirSync('lib/seo', { recursive: true });
  writeFileSync('lib/seo/old-site-data.json', JSON.stringify(results, null, 2));

  console.log(`\nDone. Wrote lib/seo/old-site-data.json (${Object.keys(results).length} pages).`);
  if (errors.length) {
    console.log(`\n${errors.length} page(s) had errors:`);
    for (const e of errors) console.log(`  - ${e.slug}: ${e.error}`);
  }
}

main();
