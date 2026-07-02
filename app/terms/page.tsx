import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo';
import ComingSoon from '@/components/ComingSoon';

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('terms');
}

export default function TermsPage() {
  return <ComingSoon title="Terms & Conditions" category="Legal" />;
}
