import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('services');
}

export default function DigitalMarketingServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
