import React from 'react';
import Link from 'next/link';
import '../services.css';
import '../service-page.css';
import './analytics-performance.css';

const EXPERTISE = [
  {
    title: 'Outcome-Focused Marketing',
    desc: 'We operate marketing performance focused on outcomes, not impressions.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20"/>
        <polyline points="16,24 22,30 34,18"/>
      </svg>
    ),
  },
  {
    title: 'Strategy Before Spend',
    desc: 'We put strategy before spend, most campaigns fail before they launch. Start scaling with a performance marketing agency that actually delivers.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 4h24l8 8v32H8z"/>
        <line x1="16" y1="20" x2="32" y2="20"/>
        <line x1="16" y1="27" x2="32" y2="27"/>
        <line x1="16" y1="34" x2="24" y2="34"/>
        <path d="M32 4v8h8"/>
      </svg>
    ),
  },
  {
    title: 'Attribution Clarity',
    desc: 'We address attribution gaps, giving you a clear view of how your top-of-funnel efforts truly perform.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="24" r="6"/>
        <circle cx="38" cy="10" r="6"/>
        <circle cx="38" cy="38" r="6"/>
        <line x1="16" y1="21" x2="32" y2="13"/>
        <line x1="16" y1="27" x2="32" y2="35"/>
      </svg>
    ),
  },
  {
    title: 'Precision Tracking',
    desc: 'Our tracking frameworks ensure precise data collection, enabling effective retargeting and high-quality lookalike audience building.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20"/>
        <circle cx="24" cy="24" r="10"/>
        <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    title: 'LTV &amp; CAC Optimisation',
    desc: 'We support you in calculating key metrics like Customer Lifetime Value (LTV) and Customer Acquisition Cost (CAC), helping you refine and scale your business model with confidence.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6,38 18,26 28,32 42,14"/>
        <polyline points="34,14 42,14 42,22"/>
      </svg>
    ),
  },
];

const PROCESS = [
  { step: '01', title: 'Technical Audit', desc: 'We start with a technical audit of your tagging setup (GTM, Pixel, Analytics) to ensure data accuracy.' },
  { step: '02', title: 'Custom Dashboards', desc: 'We create custom dashboards using Looker Studio, designed around your core business KPIs for clear, actionable insights.' },
  { step: '03', title: 'A/B Testing', desc: 'We continuously test and optimize through A/B experiments across landing pages and ad creatives to improve performance over time.' },
  { step: '04', title: 'Monthly Reports', desc: 'Our monthly in-depth reports break down key trends, performance wins, and strategic opportunities to guide the next phase of growth.' },
];

const WHY_US = [
  {
    num: '01',
    title: 'Crystal Clear Reporting',
    desc: 'No more confusing spreadsheets. Get visual, easy-to-understand dashboards.',
  },
  {
    num: '02',
    title: 'Higher Profitability',
    desc: 'Eliminate wasted spend and focus budget on high-performing channels.',
  },
  {
    num: '03',
    title: 'Technical Expertise',
    desc: 'We handle complex tracking setups involving GTM, API conversions, and server-side tracking.',
  },
  {
    num: '04',
    title: 'Proactive Insights',
    desc: "We don't just report history; we predict trends and suggest future moves.",
  },
];

const FAQS = [
  { q: 'What is Performance Marketing?', a: "It's a results-driven approach where you pay based on specific actions like clicks, leads, or sales." },
  { q: 'Do I need Google Analytics 4 (GA4)?', a: 'Yes. GA4 is the new standard. We help you migrate, set up, and master it.' },
  { q: 'How does CRO help?', a: 'Improving your conversion rate means getting more customers from the same amount of traffic, lowering your CPA.' },
  { q: 'Do you provide training?', a: 'Yes. We can train your team on how to read dashboards and interpret key metrics.' },
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

export default function AnalyticsPerformancePage() {
  return (
    <>
      {/* ── HERO ── */}
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
            <span>Analytics &amp; Performance</span>
          </nav>
          <p className="svc-hero-eyebrow">Measurable</p>
          <h1 className="svc-hero-h1">Media Buying &mdash; Turn ad spend into measurable growth.</h1>
          <p className="svc-hero-sub">We&apos;re not just a media buying agency, we build performance systems that scale. From strategy to execution, every campaign is designed to convert, not just reach.</p>
          <div className="svc-hero-btns">
            <Link href="/contact" className="svc-btn-primary">
              Get a Proposal
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/contact" className="svc-btn-outline">Get a Data Audit</Link>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="cb-section">
        <div className="container">
          <span data-reveal className="section-label">The Only Measurable Way Is Ours. Data without insight is noise.</span>
          <h2 data-reveal className="cb-section-h2">Analytics that <span className="gradient-text">drive decisions</span></h2>
          <div className="wad-intro-2col">
            <div className="wad-intro-2col-left">
              <p className="wad-para">We turn complex datasets into clear, actionable strategies that drive real business decisions. Our data analytics and marketing insights services in the UAE help brands uncover opportunities, improve performance, and scale with confidence across competitive MENA markets.</p>
              <p className="wad-para">For Conversion Rate Optimization (CRO), we test proven frameworks and user behavior strategies to improve how your website performs. In addition, we focus on increasing conversions, reducing drop-offs, and maximizing the value of every visitor.</p>
              <p className="wad-para">Attribution shouldn&apos;t be a guessing game. We solve tracking and attribution challenges to give you a clear picture of what&apos;s actually driving results. Our marketing attribution solutions in the UAE help you understand the true impact of your top-of-funnel campaigns and optimize your media spend accordingly.</p>
              <div className="wad-watermark" aria-hidden="true">Wide Wings</div>
            </div>
            <div className="wad-intro-2col-right">
              <p className="wad-para">Accurate tracking is the foundation of smart marketing. We implement advanced tracking systems to ensure reliable data collection across all platforms. With our conversion tracking and analytics setup services in Dubai, you can build high-performing retargeting campaigns and scalable lookalike audiences with confidence.</p>
              <p className="wad-para">Understanding your numbers is key to sustainable growth. We help you calculate and optimize critical metrics like Customer Lifetime Value (LTV) and Customer Acquisition Cost (CAC). Our marketing consultancy services in the MENA region focus on improving profitability, refining your business model, and driving long-term success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section className="cb-section cb-section-alt">
        <div className="container">
          <span data-reveal className="section-label">Expertise &amp; Insights</span>
          <h2 data-reveal className="cb-section-h2">Performance marketing <span className="gradient-text">that delivers</span></h2>
          <div className="cb-expertise-grid">
            {EXPERTISE.map((e, i) => (
              <div key={i} data-reveal data-reveal-delay={`${i * 80}`} className="cb-expertise-card">
                <div className="cb-expertise-icon">{e.icon}</div>
                <h3 className="cb-expertise-title" dangerouslySetInnerHTML={{ __html: e.title }} />
                <p className="cb-expertise-desc">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="cb-section">
        <div className="container cb-faq-wrap">
          <span data-reveal className="section-label">FAQ</span>
          <h2 data-reveal className="cb-section-h2">Frequently asked <span className="gradient-text">questions</span></h2>
          <div className="cb-faq-list">
            {FAQS.map((f, i) => (
              <details key={i} data-reveal data-reveal-delay={`${i * 80}`} className="cb-faq-item">
                <summary className="cb-faq-q">{f.q}<span className="cb-faq-icon">+</span></summary>
                <p className="cb-faq-a">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="cb-section cb-section-alt">
        <div className="container">
          <span data-reveal className="section-label">Our Process</span>
          <h2 data-reveal className="cb-section-h2">Measure, Optimize, <span className="gradient-text">Scale</span></h2>
          <div className="cb-process-grid-4">
            {PROCESS.map((p, i) => (
              <div key={i} data-reveal data-reveal-delay={`${i * 100}`} className="cb-process-card">
                <div className="cb-process-step">{p.step}</div>
                <div className="cb-process-line" />
                <h3 className="cb-process-title">{p.title}</h3>
                <p className="cb-process-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MASTER YOUR DATA ── */}
      <section className="cb-section cb-section-dark">
        <div className="container">
          <span data-reveal className="section-label">Master Your Marketing Data</span>
          <h2 data-reveal className="cb-section-h2">What we <span className="gradient-text">deliver</span></h2>
          <div className="cb-services-grid">
            {WHY_US.map((s, i) => (
              <div key={s.num} data-reveal data-reveal-delay={`${i * 80}`} className="cb-svc-card">
                <div className="cb-svc-num">{s.num}</div>
                <h3 className="cb-svc-title">{s.title}</h3>
                <p className="cb-svc-desc">{s.desc}</p>
              </div>
            ))}
            <div data-reveal data-reveal-delay="320" className="cb-svc-card wad-cta-card">
              <p className="wad-cta-card-text">Unlock the power of your data. Build a marketing engine that is predictable and scalable.</p>
              <Link href="/contact" className="svc-btn-primary wad-cta-card-btn">
                Get a Data Audit
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cb-cta cb-cta-light">
        <div className="cb-cta-deco" aria-hidden="true">
          <div className="cb-cta-deco-dots cb-cta-deco-dots--tl" />
          <div className="cb-cta-deco-dots cb-cta-deco-dots--br" />
          <div className="cb-cta-deco-dots cb-cta-deco-dots--tr" />
          <div className="cb-cta-deco-dots cb-cta-deco-dots--bl" />
          <div className="cb-cta-watermark-text">WIDE WINGS</div>
        </div>
        <div className="container cb-cta-inner">
          <span data-reveal className="section-label">Get Clarity</span>
          <h2 data-reveal className="cb-cta-h2">Scale Your Business<br /><span className="gradient-text">with Confidence</span></h2>
          <p data-reveal className="cb-cta-body">Unlock the power of your data. Let&apos;s build a marketing engine that is predictable and scalable.</p>
          <div data-reveal className="cb-cta-btns">
            <Link href="/contact" className="svc-btn-primary">
              Get a Data Audit
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/contact" className="svc-btn-outline cb-cta-outline">Free Consultation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
