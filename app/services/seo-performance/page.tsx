import React from 'react';
import Link from 'next/link';
import '../services.css';
import '../service-page.css';
import './seo-performance.css';

const WHAT_WE_DO = [
  { num: '01', title: 'Competitor Analysis', desc: 'We study your competitors to identify gaps and opportunities that help you outperform them in search results' },
  { num: '02', title: 'Comprehensive SEO Audits', desc: 'We analyze your website using advanced SEO tools to uncover technical and content improvements' },
  { num: '03', title: 'Targeted Keyword Strategy', desc: 'We focus on high-intent search terms based on market trends, user behaviour, and competitor data' },
  { num: '04', title: 'Link Building', desc: 'We build high-quality backlinks safely to improve domain authority without risking search engine penalties' },
  { num: '05', title: 'Website Optimisation', desc: 'We optimize site structure and performance to improve search engine rankings and user experience' },
];

const EXPERTISE = [
  {
    title: 'Sales-Driven SEO',
    desc: 'Effective SEO turns your website into an active sales platform by generating high-quality business leads',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="20" r="14"/>
        <line x1="30" y1="30" x2="42" y2="42"/>
        <polyline points="14,20 19,25 28,14"/>
      </svg>
    ),
  },
  {
    title: 'All Industries & Sizes',
    desc: 'We provide SEO services for businesses of all sizes and industries, helping them grow online with proven strategies',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="18" height="18" rx="2"/><rect x="26" y="4" width="18" height="18" rx="2"/>
        <rect x="4" y="26" width="18" height="18" rx="2"/><rect x="26" y="26" width="18" height="18" rx="2"/>
      </svg>
    ),
  },
  {
    title: 'Ethical Practices',
    desc: 'We invest in our team and believe in ethical SEO practices, which is why clients continue to trust us',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4 L30 14 L42 16 L33 25 L35 38 L24 32 L13 38 L15 25 L6 16 L18 14 Z"/>
      </svg>
    ),
  },
  {
    title: 'Maximum ROI',
    desc: 'Our approach helps maximise return on investment by improving traffic, conversions, and long-term growth',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6,38 18,26 28,32 42,14"/>
        <polyline points="34,14 42,14 42,22"/>
      </svg>
    ),
  },
];

const FAQS = [
  { q: 'Why is local SEO important for businesses in Dubai?', a: 'Local SEO helps businesses appear in search results when customers are actively looking for nearby services, increasing visibility and conversions.' },
  { q: 'How does SEO help generate more customers?', a: 'SEO brings people who are actively searching for your products or services, resulting in higher quality leads and better conversion rates.' },
  { q: 'Do you follow Google SEO best practices?', a: 'Yes. Every SEO campaign follows Google\'s guidelines using white-hat techniques to deliver sustainable, long-term results.' },
  { q: 'Is SEO suitable for small and local businesses?', a: 'Absolutely. Local SEO is one of the most cost-effective ways for small businesses to compete with larger brands in their local market.' },
];

const SPARKS = [
  { l:'12%', t:'18%', c:'#FF6B5B', sz:'3px', op:'0.65', sd:'2.1s', dl:'0s'   },
  { l:'28%', t:'72%', c:'#FFA94D', sz:'4px', op:'0.6',  sd:'3.0s', dl:'0.5s' },
  { l:'45%', t:'15%', c:'#FFD166', sz:'3px', op:'0.55', sd:'2.6s', dl:'1.1s' },
  { l:'60%', t:'80%', c:'#06D6A0', sz:'3px', op:'0.6',  sd:'2.8s', dl:'0.3s' },
  { l:'73%', t:'30%', c:'#4CC9F0', sz:'4px', op:'0.65', sd:'2.3s', dl:'0.8s' },
  { l:'85%', t:'65%', c:'#9B5DE5', sz:'3px', op:'0.55', sd:'3.2s', dl:'0.2s' },
  { l:'18%', t:'45%', c:'#FF6B5B', sz:'2px', op:'0.5',  sd:'2.5s', dl:'1.4s' },
  { l:'52%', t:'55%', c:'#FFA94D', sz:'2px', op:'0.5',  sd:'2.9s', dl:'0.7s' },
  { l:'78%', t:'12%', c:'#FFD166', sz:'2px', op:'0.5',  sd:'3.4s', dl:'0.4s' },
  { l:'90%', t:'42%', c:'#06D6A0', sz:'3px', op:'0.55', sd:'2.7s', dl:'1.2s' },
];

export default function SeoPerformancePage() {
  return (
    <>
      <section className="svc-hero">
        <div className="svc-hero-blob" aria-hidden="true" />
        <div className="svc-hero-sparks" aria-hidden="true">
          {SPARKS.map((s, i) => (
            <span key={i} className="svc-spark" style={{ left:s.l, top:s.t, '--sc':s.c, '--sz':s.sz, '--op':s.op, '--sd':s.sd, '--dl':s.dl } as React.CSSProperties} />
          ))}
        </div>
        <div className="svc-hero-inner">
          <nav className="svc-breadcrumb" aria-label="breadcrumb">
            <Link href="/">Home</Link>
            <span className="svc-bc-sep">/</span>
            <Link href="/services">Services</Link>
            <span className="svc-bc-sep">/</span>
            <span>SEO &amp; Performance</span>
          </nav>
          <h1 className="svc-hero-h1">Best Local SEO Services in Dubai</h1>
          <p className="svc-hero-sub">We optimize your digital presence to rank higher, attract quality traffic, and improve long-term performance. Our SEO strategies are data-led, ethical, and focused on sustainable growth.</p>
          <div className="svc-hero-btns">
            <Link href="/contact" className="svc-btn-primary">
              Get a Proposal
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/contact" className="svc-btn-outline">Get Your Free SEO Consultation</Link>
          </div>
        </div>
      </section>

      <div data-reveal className="cb-intro-band">
        <p className="cb-intro-text">Is it easy for potential customers to find your company online? Our local SEO services in Dubai help improve search engine rankings and attract more visitors.</p>
      </div>

      <section className="cb-section">
        <div className="container">
          <span data-reveal className="section-label">What We Do</span>
          <h2 data-reveal className="cb-section-h2">SEO strategies that <span className="gradient-text">drive growth</span></h2>
          <div className="cb-services-grid">
            {WHAT_WE_DO.map((s, i) => (
              <div key={s.num} data-reveal data-reveal-delay={`${i * 80}`} className="cb-svc-card">
                <div className="cb-svc-num">{s.num}</div>
                <h3 className="cb-svc-title">{s.title}</h3>
                <p className="cb-svc-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cb-section cb-section-alt">
        <div className="container">
          <span data-reveal className="section-label">Expertise &amp; Insights</span>
          <h2 data-reveal className="cb-section-h2">Why choose <span className="gradient-text">local SEO?</span></h2>
          <div className="cb-expertise-grid">
            {EXPERTISE.map((e, i) => (
              <div key={i} data-reveal data-reveal-delay={`${i * 80}`} className="cb-expertise-card">
                <div className="cb-expertise-icon">{e.icon}</div>
                <h3 className="cb-expertise-title">{e.title}</h3>
                <p className="cb-expertise-desc">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cb-section">
        <div className="container cb-faq-wrap">
          <span data-reveal className="section-label">FAQ</span>
          <h2 data-reveal className="cb-section-h2">Frequently asked <span className="gradient-text">questions</span></h2>
          <div className="cb-faq-list">
            {FAQS.map((f, i) => (
              <details key={i} data-reveal data-reveal-delay={`${i * 80}`} className="cb-faq-item">
                <summary className="cb-faq-q">{f.q}</summary>
                <p className="cb-faq-a">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cb-cta">
        <div className="container cb-cta-inner">
          <span data-reveal className="section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Let&apos;s Rank</span>
          <h2 data-reveal className="cb-cta-h2">Rank Higher and Grow<br /><span className="gradient-text">with Local SEO</span></h2>
          <p data-reveal className="cb-cta-body">Wide Wings Media is a local SEO company in Dubai, UAE. We increase organic traffic, conversions, and leads by ranking websites for high-value business keywords.</p>
          <div data-reveal className="cb-cta-btns">
            <Link href="/contact" className="svc-btn-primary">
              Get a Proposal
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/contact" className="svc-btn-outline cb-cta-outline">Free Consultation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
