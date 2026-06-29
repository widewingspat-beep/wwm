import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Boost ROI with Data-Driven Digital Marketing Services in Dubai',
  description: 'Wide Wings Media offers full-service digital marketing in Dubai — SEO, paid advertising, social media management, content creation, web development, OOH advertising, and PR. Data-driven strategies that deliver measurable ROI across UAE and GCC.',
  keywords: [
    'digital marketing services Dubai',
    'data-driven digital marketing UAE',
    'SEO services Dubai',
    'paid advertising Dubai',
    'social media management UAE',
    'content creation Dubai',
    'web development UAE',
    'OOH advertising Dubai',
    'performance marketing GCC',
    'PR management Dubai',
  ],
  openGraph: {
    title: 'Boost ROI with Data-Driven Digital Marketing Services in Dubai',
    description: 'Full-service digital marketing agency in Dubai. SEO, paid ads, social media, web development, branding, OOH, analytics and PR — all under one roof.',
    url: 'https://wwm-mu.vercel.app/services',
    type: 'website',
    images: [{ url: '/og-services.jpg', width: 1200, height: 630, alt: 'Wide Wings Media Digital Marketing Services Dubai' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data-Driven Digital Marketing Services Dubai | Wide Wings Media',
    description: 'Boost ROI with SEO, paid ads, social media & web development from Dubai\'s leading digital marketing agency.',
    images: ['/og-services.jpg'],
  },
  alternates: {
    canonical: 'https://wwm-mu.vercel.app/services',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
