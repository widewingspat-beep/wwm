// JSON-LD schema markup replicated verbatim from wide-wings.ae (the legacy site),
// scraped via scripts/scrape-old-site-seo.mjs into lib/seo/old-site-data.json.
import oldSiteData from './seo/old-site-data.json';

type OldSitePage = {
  slug: string;
  url: string;
  ldJson: Record<string, unknown>[];
};

// The first ld+json block is identical on every old-site page — rendered once,
// sitewide, in app/layout.tsx instead of repeating it on every page.
export const SITEWIDE_SCHEMA = (oldSiteData as Record<string, OldSitePage>).home.ldJson[0];

// Returns the page-specific ld+json block(s) for a given old-site key (everything
// after the sitewide block), or an empty array if the key/data is missing.
export function getPageSchema(key: string): Record<string, unknown>[] {
  const page = (oldSiteData as Record<string, OldSitePage>)[key];
  if (!page || !page.ldJson || page.ldJson.length < 2) return [];
  return page.ldJson.slice(1);
}
