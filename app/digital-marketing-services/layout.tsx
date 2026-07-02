import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('digital-marketing-services');
}

export default function DigitalMarketingServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
