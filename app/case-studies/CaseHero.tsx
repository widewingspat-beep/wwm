import Link from 'next/link';
import type { ReactNode } from 'react';

type CaseHeroProps = {
  image: string;
  category: string;
  client: string;
  title: string;
  result: ReactNode;
};

export default function CaseHero({ image, category, client, title, result }: CaseHeroProps) {
  return (
    <section className="cs-hero">
      <div className="cs-hero-media" style={{ backgroundImage: `url('${image}')` }} />
      <div className="cs-hero-grid" aria-hidden="true" />
      <div className="cs-hero-scrim" aria-hidden="true" />
      <div className="cs-hero-fade" aria-hidden="true" />

      <div className="cs-hero-inner">
        <nav className="cs-breadcrumb" aria-label="breadcrumb">
          <Link href="/">Home</Link>
          <span className="cs-bc-sep">/</span>
          <Link href="/#cases">Success Stories</Link>
          <span className="cs-bc-sep">/</span>
          <span>{title}</span>
        </nav>

        <div className="cs-hero-meta">
          <span className="cs-hero-tag">{category}</span>
          <span className="cs-hero-client">{client}</span>
        </div>

        <h1 className="cs-hero-title">{title}</h1>
        <p className="cs-hero-result">{result}</p>

        <div className="cs-hero-btns">
          <Link href="/contact" className="btn-primary">
            Start Your Success Story
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
          <Link href="/#cases" className="cs-btn-outline">More Case Studies</Link>
        </div>
      </div>

      <div className="cs-hero-scroll">
        Scroll
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
    </section>
  );
}
