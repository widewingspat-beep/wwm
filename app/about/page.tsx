import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo';
import ComingSoon from '@/components/ComingSoon';

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('about');
}

export default function AboutPage() {
  return <ComingSoon title="About Us" category="Who We Are" />;
}
