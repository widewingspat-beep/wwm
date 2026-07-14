import type { Metadata } from 'next';
import Link from 'next/link';
import '../home.css';
import './case-index.css';
import { CASE_STUDIES } from './cases-data';
import CaseStoryCard from './CaseStoryCard';

export const metadata: Metadata = {
  title: 'Success Stories: Case Studies',
  description: 'Explore how Wide Wings Media has delivered brand growth, healthcare communication, and digital marketing results for clients across hospitality, healthcare, real estate, and non-profit sectors.',
};

export default function CaseStudiesIndexPage() {
  return (
    <>
      <section className="case-index-hero">
        <div className="case-index-hero-blob" aria-hidden="true" />
        <div className="container case-index-hero-inner">
          <nav className="case-index-breadcrumb" aria-label="breadcrumb">
            <Link href="/">Home</Link>
            <span className="case-index-bc-sep">/</span>
            <span>Success Stories</span>
          </nav>
          <h1 className="case-index-h1">Our Success Stories</h1>
          <p className="case-index-sub">Real brands, real results. Explore how we&apos;ve helped clients across hospitality, healthcare, real estate, and non-profit sectors grow their reach and impact.</p>
        </div>
      </section>

      <section className="case-index-section">
        <div className="container">
          <div className="case-index-grid">
            {CASE_STUDIES.map((c, i) => (
              <CaseStoryCard key={c.href} data={c} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
