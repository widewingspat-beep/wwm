import React from 'react';
import Link from 'next/link';
import '../services.css';
import '../service-page.css';
import './analytics-performance.css';

const WHAT_WE_DO = [
  { num: '01', title: 'CRO Services', desc: 'Test proven frameworks and user behaviour strategies to improve website performance, increasing conversions and maximising visitor value' },
  { num: '02', title: 'Attribution Solutions', desc: 'Solve tracking challenges to show true top-of-funnel campaign impact and optimise media spend accordingly' },
  { num: '03', title: 'Conversion Tracking', desc: 'Implement advanced tracking systems for reliable data collection, enabling retargeting and quality lookalike audiences' },
  { num: '04', title: 'Marketing Consultancy', desc: 'Calculate and optimise LTV and CAC metrics to improve profitability and drive long-term success' },
];

const PROCESS = [
  { step: '01', title: 'Technical Audit', desc: 'We start with a technical audit of your tagging setup (GTM, Pixel, Analytics) to ensure data accuracy' },
  { step: '02', title: 'Custom Dashboards', desc: 'We create custom dashboards using Looker Studio, designed around your core business KPIs for clear, actionable insights' },
  { step: '03', title: 'A/B Testing', desc: 'We continuously test and optimise through A/B experiments across landing pages and ad creatives to improve performance' },
  { step: '04', title: 'Monthly Reports', desc: 'Our monthly in-depth reports break down key trends, performance wins, and strategic opportunities to guide the next phase of growth' },
];

const EXPERTISE = [
  {
    title: 'Crystal Clear Reporting',
    desc: 'No more confusing spreadsheets. Get visual, easy-to-understand dashboards built around your business KPIs',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="40" height="40" rx="3"/>
        <rect x="10" y="20" width="8" height="18" rx="1"/>
        <rect x="22" y="12" width="8" height="26" rx="1"/>
        <rect x="34" y="16" width="8" height="22" rx="1"/>
      </svg>
    ),
  },
  {
    title: 'Higher Profitability',
    desc: 'Eliminate wasted spend and focus budget on high-performing channels for maximum return on investment',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6,38 18,26 28,32 42,14"/>
        <polyline points="34,14 42,14 42,22"/>
      </svg>
    ),
  },
  {
    title: 'Technical Expertise',
    desc: 'We handle complex tracking setups involving GTM, API conversions, and server-side tracking',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="12,18 6,24 12,30"/>
        <polyline points="36,18 42,24 36,30"/>
        <line x1="20" y1="10" x2="28" y2="38"/>
      </svg>
    ),
  },
  {
    title: 'Proactive Insights',
    desc: 'We don\'t just report history — we predict trends and suggest future moves to stay ahead of the competition',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20"/>
        <polyline points="24,12 24,26 32,30"/>
        <line x1="24" y1="4" x2="24" y2="8"/>
        <line x1="38" y1="10" x2="35" y2="13"/>
      </svg>
    ),
  },
];

const FAQS = [
  { q: 'What is Performance Marketing?', a: 'It\'s a results-driven approach where you pay based on specific actions like clicks, leads, or sales — ensuring every dirham is accountable.' },
  { q: 'Do I need Google Analytics 4 (GA4)?', a: 'Yes. GA4 is now the standard for web analytics and provides essential data for understanding user behaviour and optimising campaigns.' },
  { q: 'How does CRO help my business?', a: 'CRO improves the percentage of website visitors who take a desired action, increasing revenue without needing more traffic.' },
  { q: 'Do you provide training?', a: 'Yes. We offer training sessions and workshops to help your team understand performance marketing, analytics, and data interpretation.' },
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
          <h1 className="svc-hero-h1">Measurable Media Buying — Turn Ad Spend into Measurable Growth</h1>
          <p className="svc-hero-sub">We&apos;re not just a media buying agency — we build performance systems that scale. From strategy to execution, every campaign is designed to convert, not just reach.</p>
          <div className="svc-hero-btns">
            <Link href="/contact" className="svc-btn-primary">
              Get a Proposal
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/contact" className="svc-btn-outline">Get a Data Audit</Link>
          </div>
        </div>
      </section>

      <div data-reveal className="cb-intro-band">
        <p className="cb-intro-text">Data without insight is noise. We turn complex datasets into clear, actionable strategies that drive real business decisions.</p>
      </div>

      <section className="cb-section">
        <div className="container">
          <span data-reveal className="section-label">What We Do</span>
          <h2 data-reveal className="cb-section-h2">Performance systems that <span className="gradient-text">scale</span></h2>
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
          <span data-reveal className="section-label">Our Process</span>
          <h2 data-reveal className="cb-section-h2">How we <span className="gradient-text">measure what matters</span></h2>
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

      <section className="cb-section">
        <div className="container">
          <span data-reveal className="section-label">Expertise &amp; Insights</span>
          <h2 data-reveal className="cb-section-h2">Built on <span className="gradient-text">data intelligence</span></h2>
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

      <section className="cb-section cb-section-alt">
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
          <span data-reveal className="section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Let&apos;s Scale</span>
          <h2 data-reveal className="cb-cta-h2">Measure, Optimise,<br /><span className="gradient-text">Scale</span></h2>
          <p data-reveal className="cb-cta-body">Unlock the power of your data. Let&apos;s build a marketing engine that is predictable and scalable. We operate marketing performance focused on outcomes, not impressions.</p>
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
