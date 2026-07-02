import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo';
import ComingSoon from '@/components/ComingSoon';

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('privacy');
}

export default function PrivacyPage() {
  return <ComingSoon title="Privacy Policy" category="Legal" />;
}
