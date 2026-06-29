import Image from 'next/image';
import { RichText } from '@payloadcms/richtext-lexical/react';

type Media = { url?: string; alt?: string; width?: number; height?: number } | string | number | null | undefined;

function mediaUrl(m: Media): string | null {
  if (!m || typeof m === 'string' || typeof m === 'number') return null;
  return m.url ?? null;
}

function mediaAlt(m: Media): string {
  if (!m || typeof m === 'string' || typeof m === 'number') return '';
  return m.alt ?? '';
}

type Block =
  | { blockType: 'hero'; eyebrow?: string; heading: string; subheading?: string; image?: Media }
  | { blockType: 'textSection'; heading?: string; body?: unknown }
  | { blockType: 'imageBlock'; image: Media; caption?: string }
  | { blockType: 'twoColumn'; leftHeading?: string; leftBody?: unknown; rightHeading?: string; rightBody?: unknown }
  | { blockType: 'cta'; heading: string; body?: string; buttonLabel: string; buttonHref: string };

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <div className="pl-blocks">
      {blocks.map((block, i) => {
        switch (block.blockType) {
          case 'hero': {
            const img = mediaUrl(block.image);
            return (
              <section key={i} className="pl-hero">
                {block.eyebrow && <div className="pl-eyebrow">{block.eyebrow}</div>}
                <h1 className="pl-hero-heading">{block.heading}</h1>
                {block.subheading && <p className="pl-hero-sub">{block.subheading}</p>}
                {img && (
                  <Image src={img} alt={mediaAlt(block.image)} width={1200} height={600} className="pl-hero-image" />
                )}
              </section>
            );
          }
          case 'textSection':
            return (
              <section key={i} className="pl-text">
                {block.heading && <h2 className="pl-section-heading">{block.heading}</h2>}
                {block.body ? <RichText data={block.body as never} /> : null}
              </section>
            );
          case 'imageBlock': {
            const img = mediaUrl(block.image);
            if (!img) return null;
            return (
              <figure key={i} className="pl-figure">
                <Image src={img} alt={mediaAlt(block.image)} width={1200} height={800} />
                {block.caption && <figcaption>{block.caption}</figcaption>}
              </figure>
            );
          }
          case 'twoColumn':
            return (
              <section key={i} className="pl-two-col">
                <div className="pl-col">
                  {block.leftHeading && <h3>{block.leftHeading}</h3>}
                  {block.leftBody ? <RichText data={block.leftBody as never} /> : null}
                </div>
                <div className="pl-col">
                  {block.rightHeading && <h3>{block.rightHeading}</h3>}
                  {block.rightBody ? <RichText data={block.rightBody as never} /> : null}
                </div>
              </section>
            );
          case 'cta':
            return (
              <section key={i} className="pl-cta">
                <h2>{block.heading}</h2>
                {block.body && <p>{block.body}</p>}
                <a href={block.buttonHref} className="pl-cta-btn">{block.buttonLabel}</a>
              </section>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
