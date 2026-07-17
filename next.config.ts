import type { NextConfig } from "next";

// Old wide-wings.ae slugs — kept identical so link equity carries over at domain cutover.
const SERVICE_SLUGS = [
  'creative-branding',
  'web-design-company-dubai',
  'ppc-advertising-company-dubai',
  'social-media-marketing-agency-in-dubai',
  'content-creation-graphic-design',
  'email-sms-crm-marketing',
  'seo-services-dubai',
  'outdoor-advertising-dubai',
  'analytics-performance-marketing',
  'pr-management',
];

// Short slugs used during the pre-launch build, now redirected to the old-site slugs above.
const LEGACY_SERVICE_REDIRECTS: Record<string, string> = {
  'web-app-development': 'web-design-company-dubai',
  'paid-advertising': 'ppc-advertising-company-dubai',
  'social-media-management': 'social-media-marketing-agency-in-dubai',
  'content-creation': 'content-creation-graphic-design',
  'email-sms-crm': 'email-sms-crm-marketing',
  'seo-performance': 'seo-services-dubai',
  'ooh-advertising': 'outdoor-advertising-dubai',
  'analytics-performance': 'analytics-performance-marketing',
};

const nextConfig: NextConfig = {
  trailingSlash: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: `/:slug(${SERVICE_SLUGS.join('|')})`,
          destination: '/services/:slug',
        },
      ],
      fallback: [
        { source: '/:slug', destination: '/blogs/:slug' },
      ],
    };
  },
  async redirects() {
    return [
      ...Object.entries(LEGACY_SERVICE_REDIRECTS).map(([from, to]) => ({
        source: `/${from}`,
        destination: `/${to}/`,
        permanent: true,
      })),
      { source: '/services', destination: '/digital-marketing-services/', permanent: true },
      { source: '/services/:slug', destination: '/:slug/', permanent: true },
      { source: '/blogs', destination: '/insights/', permanent: true },
      { source: '/blogs/:slug', destination: '/:slug/', permanent: true },
      { source: '/case-studies/sbk-properties', destination: '/case-studies/batterjee-properties/', permanent: true },
    ];
  },
};

export default nextConfig;
