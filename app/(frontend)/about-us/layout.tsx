import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Wide Wings Media – Full-Service Digital Marketing Agency Dubai',
  description: "Wide Wings Media is a fully in-house digital marketing company in Dubai with 50+ specialists. Google & Meta verified partner operating across 15+ industries in UAE and GCC. 4.9/5 average client rating.",
  keywords: ['Wide Wings Media Dubai', 'digital marketing agency about', 'in-house digital agency UAE', 'Google partner Dubai', 'Meta partner UAE', 'marketing specialists Dubai'],
  openGraph: {
    title: "About Wide Wings Media – Dubai's Leading Digital Marketing Agency",
    description: "Meet the team behind Dubai's top-ranked digital marketing agency. 50+ specialists, Google & Meta verified, 15+ industries served.",
    url: 'https://wwm-mu.vercel.app/about-us',
    type: 'website',
    images: [{ url: '/og-about.jpg', width: 1200, height: 630, alt: 'Wide Wings Media team Dubai' }],
  },
  alternates: { canonical: 'https://wwm-mu.vercel.app/about-us' },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
