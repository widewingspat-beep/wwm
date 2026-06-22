import React from 'react';
import Link from 'next/link';
import '../services.css';
import '../service-page.css';
import './email-sms-crm.css';

const WHAT_WE_DO = [
  { num: '01', title: 'Automated Flows', desc: 'Systems guiding customers through welcome sequences, cart recovery, and retention journeys designed to boost conversions and engagement' },
  { num: '02', title: 'Campaign Strategy', desc: 'Data-driven approaches creating content aligned with your goals and audience behavior for measurable results' },
  { num: '03', title: 'Segmentation & Personalisation', desc: 'CRM-powered tailored messaging based on behaviour, preferences, and lifecycle stage to maximise customer value' },
  { num: '04', title: 'Testing & Optimisation', desc: 'Continuous A/B testing and performance tracking with actionable reporting for improved campaign performance' },
];

const EXPERTISE = [
  {
    title: 'High ROI',
    desc: 'Email consistently delivers the highest return on investment of any digital marketing channel',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6,38 18,26 28,32 42,14"/>
        <polyline points="34,14 42,14 42,22"/>
        <circle cx="8" cy="40" r="3" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    title: 'Customer Loyalty',
    desc: 'Consistent communication maintains brand awareness and builds long-term customer relationships',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 42 C24 42 6 30 6 18 A10 10 0 0 1 24 14 A10 10 0 0 1 42 18 C42 30 24 42 24 42Z"/>
      </svg>
    ),
  },
  {
    title: 'Automated Revenue',
    desc: 'Self-executing flows generate sales and nurture leads around the clock without manual effort',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20"/>
        <path d="M16 24 L22 18 L22 30 Z" fill="currentColor" stroke="none"/>
        <path d="M26 24 L32 18 L32 30 Z" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    title: 'Advanced Segmentation',
    desc: 'Precise targeting via purchase history, behaviour, and lifecycle stage to deliver the right message at the right time',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20"/>
        <circle cx="24" cy="24" r="10"/>
        <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
];

const FAQS = [
  { q: 'Which CRM platforms do you work with?', a: 'We work with major CRM platforms including HubSpot, Klaviyo, Mailchimp, ActiveCampaign, and Salesforce, among others.' },
  { q: 'Is SMS marketing intrusive?', a: 'When done correctly with proper consent and relevant messaging, SMS marketing achieves some of the highest open rates of any channel.' },
  { q: 'How do you measure success?', a: 'We track open rates, click-through rates, conversion rates, revenue generated, and ROI across all email and SMS campaigns.' },
  { q: 'Can you help build our email list?', a: 'Yes. We provide list growth strategies including lead magnets, landing pages, and opt-in forms to grow a high-quality subscriber base.' },
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

export default function EmailSmsCrmPage() {
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
            <span>Email, SMS &amp; CRM</span>
          </nav>
          <h1 className="svc-hero-h1">Email Marketing That Actually Converts</h1>
          <p className="svc-hero-sub">We create campaigns that people open, read, and act on — increasing lifetime value through strategic Email, SMS, and CRM-driven marketing.</p>
          <div className="svc-hero-btns">
            <Link href="/contact" className="svc-btn-primary">
              Get a Proposal
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/contact" className="svc-btn-outline">Audit My CRM Strategy</Link>
          </div>
        </div>
      </section>

      <div data-reveal className="cb-intro-band">
        <p className="cb-intro-text">We don&apos;t do random newsletters. We build performance systems that turn your subscriber list into a revenue channel.</p>
      </div>

      <section className="cb-section">
        <div className="container">
          <span data-reveal className="section-label">What We Do</span>
          <h2 data-reveal className="cb-section-h2">Email that <span className="gradient-text">drives revenue</span></h2>
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
          <h2 data-reveal className="cb-section-h2">Why Email &amp; SMS <span className="gradient-text">outperforms</span></h2>
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
          <span data-reveal className="section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Let&apos;s Build</span>
          <h2 data-reveal className="cb-cta-h2">More Than Emails.<br /><span className="gradient-text">It&apos;s a Revenue Channel.</span></h2>
          <p data-reveal className="cb-cta-body">Unlock hidden revenue in your database. Turn subscribers into loyal customers with strategic Email, SMS, and CRM marketing.</p>
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
