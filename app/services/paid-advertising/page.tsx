import React from 'react';
import Link from 'next/link';
import '../services.css';
import '../service-page.css';
import './paid-advertising.css';

const WHAT_WE_DO = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, title: 'Expert PPC Specialists', desc: 'Certified PPC experts with deep knowledge of digital marketing trends and best practices.' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>, title: 'Advanced Audience Targeting', desc: 'Precise targeting using location, demographics, interests, devices, and behavioral data.' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>, title: 'Fast and Measurable Results', desc: 'Optimized campaigns that deliver immediate increases in traffic, leads, and conversions.' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, title: 'Smart Budget Management', desc: 'Continuous bid and budget optimization to avoid wasted ad spend and improve profitability.' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>, title: 'Transparent and Affordable Pricing', desc: 'Clear pricing models with no hidden costs, allowing accurate planning and budgeting.' },
];

const EXPERTISE = [
  {
    title: 'High Purchase Intent',
    desc: 'If someone clicks on one of your ads, there is a high chance they will make a purchase within a short time frame.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20"/>
        <polyline points="16,24 22,30 34,18"/>
      </svg>
    ),
  },
  {
    title: 'Brand Awareness',
    desc: 'Online ads significantly increase brand awareness and influence buying decisions.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 36 L4 44 L20 38 L36 44 L44 36 L40 20 C38 10 30 6 24 6 C18 6 10 10 8 20 Z"/>
        <circle cx="24" cy="22" r="5"/>
      </svg>
    ),
  },
  {
    title: 'SMB Growth',
    desc: 'A large percentage of small and medium-sized businesses rely on pay-per-click advertising to grow quickly.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6,38 18,26 28,32 42,14"/>
        <polyline points="34,14 42,14 42,22"/>
      </svg>
    ),
  },
  {
    title: 'Quality Leads',
    desc: 'Google Ads are one of the most effective tools for generating high-quality leads and increasing sales.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="18" r="10"/>
        <path d="M34 44 C34 36 26 30 20 30 C14 30 6 36 6 44"/>
        <line x1="36" y1="20" x2="44" y2="28"/>
        <line x1="44" y1="20" x2="36" y2="28"/>
      </svg>
    ),
  },
  {
    title: 'Instant Traffic',
    desc: 'PPC advertising allows businesses to bring targeted visitors instantly by paying for clicks.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20"/>
        <polyline points="24,12 24,24 32,28"/>
        <line x1="24" y1="4" x2="24" y2="8"/>
      </svg>
    ),
  },
  {
    title: 'Multi-Platform Reach',
    desc: 'Your ads appear at the top of search engines and social platforms such as Google, Bing, Facebook, Instagram, and LinkedIn.',
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
];

const FAQS = [
  { q: 'Are PPC services suitable for small businesses?', a: 'Yes. PPC is ideal for small businesses because it delivers fast results with controlled budgets and measurable returns.' },
  { q: 'Do you manage PPC campaigns outside Dubai?', a: 'Yes. We manage PPC campaigns across Dubai, Abu Dhabi, and international markets using global advertising platforms.' },
  { q: 'What makes a PPC agency effective?', a: 'An effective PPC agency combines certifications, market analysis, audience targeting, and continuous campaign optimization.' },
  { q: 'Why choose Wide Wings Media for PPC advertising?', a: 'We offer certified PPC experts, proven results, transparent pricing, and continuous performance reporting.' },
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
    <div className="cb-svc-page">
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
            <span>Paid Advertising</span>
          </nav>
          <p className="svc-hero-eyebrow">#Best</p>
          <h1 className="svc-hero-h1">PPC Advertising<br />Company in Dubai</h1>
          <p className="svc-hero-sub">We plan, execute, and optimize paid advertising campaigns that maximize reach, conversions, and ROI. Our data-driven media buying ensures your budget delivers measurable results across platforms.</p>
          <div className="svc-hero-btns">
            <Link href="/contact" className="svc-btn-primary">
              Get a Proposal
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTRO EDITORIAL ── */}
      <section className="cb-section pad-intro-section">
        <div className="container">
          <div className="pad-intro-editorial">
            <div className="pad-intro-left">
              <h2 className="pad-intro-title">Leading PPC Agency for More Leads &amp; <span className="gradient-text">Sales</span></h2>
              <div className="pad-intro-bar" />
            </div>
            <div className="pad-intro-right">
              <p>Launch promotions and earn more with Wide Wings Media, the best PPC agency in Dubai. Drive more traffic and increase sales with expert PPC advertising.</p>
              <p>Leverage our expertise in PPC campaigns to maximize your return on investment. We focus on delivering strong results regardless of your business size.</p>
              <p>Wide Wings Media is a leading PPC advertising agency in Dubai. We help businesses reach marketing goals by attracting the right users through strategic ad placements.</p>
              <p>Our PPC strategies help businesses generate qualified leads, increase conversions, and grow sales across multiple industries.</p>
              <p>We are your trusted PPC advertising partner, delivering measurable ROI and proven success for businesses of all sizes, including enterprise-level organizations.</p>
              <p>We align every PPC campaign with your personal and business goals to ensure long-term growth and profitability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section className="cb-section cb-section-alt">
        <div className="container">
          <span data-reveal className="section-label" style={{display:'block', textAlign:'center'}}>Expertise &amp; Insights</span>
          <h2 data-reveal className="cb-section-h2" style={{textAlign:'center'}}>Google Ads tailored to your <span className="gradient-text">business and customers</span></h2>
          <div className="pad-expertise-2col">
            {[EXPERTISE.slice(0,3), EXPERTISE.slice(3)].map((col, ci) => (
              <div key={ci} className="pad-expertise-col">
                {col.map((e, i) => (
                  <div key={i} data-reveal data-reveal-delay={`${(ci * 3 + i) * 80}`} className="pad-expertise-row">
                    <div className="pad-expertise-circle">{e.icon}</div>
                    <div className="pad-expertise-content">
                      <h3 className="pad-expertise-row-title">{e.title}</h3>
                      <p className="pad-expertise-row-desc">{e.desc}</p>
                    </div>
                  </div>
                ))}
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
                <summary className="cb-faq-q">{f.q}<span className="wad-faq-icon">+</span></summary>
                <p className="cb-faq-a">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERFORMANCE ── */}
      <section className="cb-section cb-section-alt">
        <div className="container">
          <span data-reveal className="section-label">Performance</span>
          <h2 data-reveal className="cb-section-h2">Turn 1 AED into 15 AED with <span className="gradient-text">Expert Google Ads Strategy</span></h2>
          <p data-reveal className="pad-perf-desc">Our PPC agency handles planning, execution, and management of PPC campaigns to help businesses scale profitably.</p>
          <div className="pad-perf-points">
            {([
              { text: 'Wide Wings Media provides a complete PPC management system that supports long-term growth.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg> },
              { text: 'Many agencies struggle with Google Ads, but our decade-long experience allows us to deliver exceptional returns.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg> },
              { text: 'We treat Google Ads as a business growth engine, not just an advertising platform.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg> },
              { text: 'Our strategic PPC approach ensures your ads reach the right users at the right time to maximize conversions.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> },
            ] as {text:string, icon:React.ReactNode}[]).map((item, i) => (
              <div key={i} data-reveal data-reveal-delay={`${i * 80}`} className="pad-perf-point">
                <div className="pad-perf-dot">{item.icon}</div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DELIVER ── */}
      <section className="cb-section">
        <div className="container">
          <span data-reveal className="section-label">Wide Wings Media: Your PPC Advertising Company in Dubai</span>
          <h2 data-reveal className="cb-section-h2">What we <span className="gradient-text">deliver</span></h2>
          <div className="cb-services-grid">
            {WHAT_WE_DO.map((s, i) => (
              <div key={i} data-reveal data-reveal-delay={`${i * 80}`} className="cb-svc-card">
                <div className="pad-deliver-icon">{s.icon}</div>
                <h3 className="cb-svc-title">{s.title}</h3>
                <p className="cb-svc-desc">{s.desc}</p>
              </div>
            ))}
            <div data-reveal data-reveal-delay="400" className="cb-svc-card wad-cta-card">
              <p className="wad-cta-card-text">Scale Faster with High-Performance PPC Campaigns</p>
              <Link href="/contact" className="svc-btn-primary wad-cta-card-btn">
                Request a PPC Proposal
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
          <span data-reveal className="section-label">Get Started</span>
          <h2 data-reveal className="cb-cta-h2">Scale Faster with High-Performance<br /><span className="gradient-text">PPC Campaigns</span></h2>
          <p data-reveal className="cb-cta-body">Work with a trusted PPC advertising agency in Dubai and turn clicks into real revenue.</p>
          <div data-reveal className="cb-cta-btns">
            <Link href="/contact" className="svc-btn-primary">
              Get a Proposal
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
