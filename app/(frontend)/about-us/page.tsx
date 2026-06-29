import { findPageBySlug } from '@/lib/payload';
import { BlockRenderer } from '@/components/payload/BlockRenderer';
import '@/components/payload/blocks.css';
import './about-us.css';
import LegacyAboutUs from './LegacyAboutUs';

export const revalidate = 0;

export default async function AboutUsPage() {
  const page = await findPageBySlug('about-us');

  if (page && Array.isArray(page.blocks) && page.blocks.length > 0) {
    return <BlockRenderer blocks={page.blocks as never} />;
  }

  return <LegacyAboutUs />;
}
