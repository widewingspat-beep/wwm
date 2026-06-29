import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Wide Wings Media – Digital Marketing Agency Dubai',
  description: "Get in touch with Wide Wings Media, Dubai's leading digital marketing agency. Office: Al Quoz Industrial Area 3, Dubai, UAE. Phone: +971 4 335 2645. Free consultation available.",
  keywords: ['contact digital marketing agency Dubai', 'Wide Wings Media contact', 'digital marketing consultation Dubai', 'marketing agency Al Quoz Dubai', 'free marketing consultation UAE'],
  openGraph: {
    title: 'Contact Wide Wings Media – Free Digital Marketing Consultation',
    description: "Speak to Dubai's leading digital marketing team. Free consultation for SEO, paid ads, social media & web development.",
    url: 'https://wwm-mu.vercel.app/contact',
    type: 'website',
    images: [{ url: '/og-contact.jpg', width: 1200, height: 630, alt: 'Wide Wings Media office Al Quoz Dubai' }],
  },
  alternates: { canonical: 'https://wwm-mu.vercel.app/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
