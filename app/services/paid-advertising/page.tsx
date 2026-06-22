import React from 'react';
import Link from 'next/link';
import '../services.css';
import '../service-page.css';
import './paid-advertising.css';

const WHAT_WE_DO = [
  { num: '01', title: 'Expert PPC Specialists', desc: 'Certified PPC experts with deep knowledge of digital marketing trends and best practices' },
  { num: '02', title: 'Advanced Audience Targeting', desc: 'Precise targeting using location, demographics, interests, devices, and behavioral data' },
  { num: '03', title: 'Fast & Measurable Results', desc: 'Optimized campaigns that deliver immediate increases in traffic, leads, and conversions' },
  { num: '04', title: 'Smart Budget Management', desc: 'Continuous bid and budget optimization to avoid wasted ad spend and improve profitability' },
  { num: '05', title: 'Transparent Pricing', desc: 'Clear pricing models with no hidden costs, allowing accurate planning and budgeting' },
];

const EXPERTISE = [
  {
    title: 'High Purchase Intent',
    desc: 'Someone who clicks on ads has a high chance of making a purchase within a short time frame',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20"/>
        <polyline points="16,24 22,30 34,18"/>
      </svg>
    ),
  },
  {
    title: 'Brand Awareness',
    desc: 'Online ads significantly increase brand awareness and influence buying decisions',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 36 L4 44 L20 38 L36 44 L44 36 L40 20 C38 10 30 6 24 6 C18 6 10 10 8 20 Z"/>
        <circle cx="24" cy="22" r="5"/>
      </svg>
    ),
  },
  {
    title: 'SMB Growth',
    desc: 'A large percentage of small and medium-sized businesses rely on pay-per-click advertising to grow quickly',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6,38 18,26 28,32 42,14"/>
        <polyline points="34,14 42,14 42,22"/>
      </svg>
    ),
  },
  {
    title: 'Quality Leads',
    desc: 'Google Ads are one of the most effective tools for generating high-quality leads and increasing sales',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="18" r="10"/>
        <path d="M34 44 C34 36 26 30 20 30 C14 30 6 36 6 44"/>
        <line x1="36" y1="20" x2="44" y2="28"/>
        <line x1="44" y1="20" x2="36" y2="28"/>
      </svg>
    ),
  },
];

const FAQS = [
  { q: 'Are PPC services suitable for small businesses?', a: 'Yes. PPC is ideal for small businesses because it delivers fast results with controlled budgets and measurable returns.' },
  { q: 'Do you manage PPC campaigns outside Dubai?', a: 'Yes. We manage PPC campaigns across the UAE, GCC, and internationally for clients in multiple markets.' },
  { q: 'What makes a PPC agency effective?', a: 'An effective PPC agency combines data analysis, creative ad copy, precise targeting, and continuous optimization to maximize ROI.' },
  { q: 'Why choose Wide Wings Media for PPC advertising?', a: 'We bring certified expertise, transparent reporting, and a proven track record of delivering measurable results for businesses in Dubai and beyond.' },
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

export default function PaidAdvertisingPage() {
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
            <span>Paid Advertising</span>
          </nav>
          <h1 className="svc-hero-h1">Best PPC Advertising Company in Dubai</h1>
          <p className="svc-hero-sub">We plan, execute, and optimize paid advertising campaigns that maximize reach, conversions, and ROI.</p>
          <div className="svc-hero-btns">
            <Link href="/contact" className="svc-btn-primary">
              Get a Proposal
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/contact" className="svc-btn-outline">Request a PPC Proposal</Link>
          </div>
        </div>
      </section>

      <div data-reveal className="cb-intro-band">
        <p className="cb-intro-text">
          Leading PPC Agency for More Leads &amp; Sales — Google Ads are one of the most effective tools for generating high-quality leads and increasing sales. Our ads appear on Google, Bing, Facebook, Instagram, and LinkedIn.
        </p>
      </div>

      <section className="cb-section">
        <div className="container">
          <span data-reveal className="section-label">What We Do</span>
          <h2 data-reveal className="cb-section-h2">Driving results with <span className="gradient-text">expert PPC</span></h2>
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
          <h2 data-reveal className="cb-section-h2">Why invest in <span className="gradient-text">PPC advertising?</span></h2>
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
          <span data-reveal className="section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Let&apos;s Grow</span>
          <h2 data-reveal className="cb-cta-h2">Turn 1 AED Into 15 AED with<br /><span className="gradient-text">Expert Google Ads Strategy</span></h2>
          <p data-reveal className="cb-cta-body">Scale faster with high-performance PPC campaigns. Wide Wings Media is your PPC advertising company in Dubai.</p>
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
