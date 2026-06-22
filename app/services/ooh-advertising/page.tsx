import React from 'react';
import Link from 'next/link';
import '../services.css';
import '../service-page.css';
import './ooh-advertising.css';

const WHAT_WE_DO = [
  { num: '01', title: 'Billboard Advertising', desc: 'Large-format billboards and unipoles in prime Dubai locations to maximize your brand\'s reach and visibility' },
  { num: '02', title: 'Bridge Banners & Hoardings', desc: 'High-impact bridge banners and hoardings that capture attention in high-traffic areas across the UAE' },
  { num: '03', title: 'LED & Digital Billboards', desc: 'Dynamic LED digital billboard campaigns that stand out in Dubai\'s competitive outdoor advertising landscape' },
  { num: '04', title: 'Transit & Metro Advertising', desc: 'Airport, metro, mall, and transit advertising that reaches commuters and travellers across Dubai' },
  { num: '05', title: 'Mobile Billboards', desc: 'Mobile billboard and street furniture options that bring your brand message directly to your target audience' },
];

const EXPERTISE = [
  {
    title: 'Massive Reach',
    desc: 'High visibility reaching millions of people in Dubai\'s busy streets, highways, and commercial areas',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20"/>
        <path d="M24 4 C14 14, 14 34, 24 44"/><path d="M24 4 C34 14, 34 34, 24 44"/>
        <line x1="4" y1="24" x2="44" y2="24"/>
      </svg>
    ),
  },
  {
    title: 'Targeted Locations',
    desc: 'Strategic placement in high-traffic and luxury districts to reach your specific target demographic',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="20" r="10"/>
        <path d="M24 44 C24 44 8 30 8 20 A16 16 0 0 1 40 20 C40 30 24 44 24 44Z"/>
        <circle cx="24" cy="20" r="4" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    title: 'Cost-Effective',
    desc: 'Outdoor advertising delivers strong cost-per-impression value compared to traditional media channels',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20"/>
        <path d="M18 28 C18 32 30 32 30 24 C30 16 18 20 18 14 C18 8 30 8 30 14"/>
        <line x1="24" y1="6" x2="24" y2="10"/><line x1="24" y1="38" x2="24" y2="42"/>
      </svg>
    ),
  },
  {
    title: 'Brand Recognition',
    desc: 'Repeated exposure through outdoor advertising builds strong brand recognition and top-of-mind awareness',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4 L30 14 L42 16 L33 25 L35 38 L24 32 L13 38 L15 25 L6 16 L18 14 Z"/>
      </svg>
    ),
  },
  {
    title: 'Captive Audience',
    desc: 'Reach a captive audience in traffic, public spaces, and transit environments where attention is focused',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="18" r="10"/>
        <path d="M6 44 C6 34 14 28 24 28 C34 28 42 34 42 44"/>
        <polyline points="30,12 36,18 30,24"/>
      </svg>
    ),
  },
];

const WHY_US = [
  {
    title: 'Massive Reach',
    desc: 'High visibility reaching millions of people in Dubai\'s busy streets, highways, and commercial areas',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20"/>
        <path d="M24 4 C14 14, 14 34, 24 44"/><path d="M24 4 C34 14, 34 34, 24 44"/>
        <line x1="4" y1="24" x2="44" y2="24"/>
      </svg>
    ),
  },
  {
    title: 'Targeted Locations',
    desc: 'Strategic placement in high-traffic and luxury districts to reach your specific target demographic',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="20" r="10"/>
        <path d="M24 44 C24 44 8 30 8 20 A16 16 0 0 1 40 20 C40 30 24 44 24 44Z"/>
        <circle cx="24" cy="20" r="4" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    title: 'Brand Recognition',
    desc: 'Repeated exposure through outdoor advertising builds strong brand recognition and top-of-mind awareness',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4 L30 14 L42 16 L33 25 L35 38 L24 32 L13 38 L15 25 L6 16 L18 14 Z"/>
      </svg>
    ),
  },
  {
    title: 'Captive Audience',
    desc: 'Reach a captive audience in traffic, public spaces, and transit environments where attention is focused',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="18" r="10"/>
        <path d="M6 44 C6 34 14 28 24 28 C34 28 42 34 42 44"/>
      </svg>
    ),
  },
];

const FAQS = [
  { q: 'What types of outdoor advertising do you offer?', a: 'We offer billboards, bridge banners, LED digital boards, unipoles, lampposts, hoardings, airport, metro, mall, and mobile billboard advertising.' },
  { q: 'Can you help plan outdoor advertising locations?', a: 'Yes. We analyze traffic data and demographics to recommend the most effective outdoor advertising locations for your campaign goals.' },
  { q: 'How long does an outdoor advertising campaign run?', a: 'Campaign durations vary based on your goals and budget. We offer flexible packages from short-term activations to long-term brand campaigns.' },
  { q: 'Do you handle production of the advertising materials?', a: 'Yes. We manage the full production process including design, printing, and installation of all outdoor advertising materials.' },
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

export default function OohAdvertisingPage() {
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
            <span>OOH Advertising</span>
          </nav>
          <h1 className="svc-hero-h1">Outdoor Advertising Services in Dubai</h1>
          <p className="svc-hero-sub">We deliver impactful out-of-home advertising that amplifies brand visibility across key locations throughout Dubai and the UAE.</p>
          <div className="svc-hero-btns">
            <Link href="/contact" className="svc-btn-primary">
              Get a Proposal
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/contact" className="svc-btn-outline">Request an Outdoor Advertising Plan</Link>
          </div>
        </div>
      </section>

      <div data-reveal className="cb-intro-band">
        <p className="cb-intro-text">Premium outdoor advertising solutions including billboards, bridge banners, LED billboards, lampposts, unipoles, hoardings, airport, metro, mall, and transit advertising.</p>
      </div>

      <section className="cb-section">
        <div className="container">
          <span data-reveal className="section-label">What We Do</span>
          <h2 data-reveal className="cb-section-h2">Outdoor advertising that <span className="gradient-text">commands attention</span></h2>
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
          <h2 data-reveal className="cb-section-h2">Why invest in <span className="gradient-text">outdoor advertising?</span></h2>
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
        <div className="container">
          <span data-reveal className="section-label">Why Choose Us</span>
          <h2 data-reveal className="cb-section-h2">Why choose Wide Wings for <span className="gradient-text">outdoor advertising?</span></h2>
          <div className="cb-why-grid">
            {WHY_US.map((w, i) => (
              <div key={i} data-reveal data-reveal-delay={`${i * 80}`} className="cb-why-card">
                <div className="cb-why-icon">{w.icon}</div>
                <h3 className="cb-why-title">{w.title}</h3>
                <p className="cb-why-desc">{w.desc}</p>
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
          <span data-reveal className="section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Let&apos;s Amplify</span>
          <h2 data-reveal className="cb-cta-h2">Make Your Brand<br /><span className="gradient-text">Impossible to Ignore</span></h2>
          <p data-reveal className="cb-cta-body">Premium outdoor advertising services in Dubai. Why invest in outdoor advertising? High visibility, targeted reach, and strong brand recognition.</p>
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
