import type { NextConfig } from "next";

const SERVICE_SLUGS = [
  'creative-branding',
  'web-app-development',
  'paid-advertising',
  'social-media-management',
  'content-creation',
  'email-sms-crm',
  'seo-performance',
  'ooh-advertising',
  'analytics-performance',
  'pr-management',
];

const nextConfig: NextConfig = {
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
      { source: '/services/:slug', destination: '/:slug', permanent: true },
      { source: '/blogs/:slug', destination: '/:slug', permanent: true },
    ];
  },
};

export default nextConfig;
