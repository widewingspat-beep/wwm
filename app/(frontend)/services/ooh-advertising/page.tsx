import React from 'react';
import Link from 'next/link';
import '../services.css';
import '../service-page.css';
import './ooh-advertising.css';

const EXPERTISE = [
  {
    title: 'Wide OOH Solutions',
    desc: 'We provide a wide range of outdoor and out-of-home (OOH) advertising solutions placed in key locations across the Emirates.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="40" height="24" rx="3"/>
        <line x1="16" y1="32" x2="10" y2="44"/>
        <line x1="32" y1="32" x2="38" y2="44"/>
        <line x1="10" y1="44" x2="38" y2="44"/>
      </svg>
    ),
  },
  {
    title: 'Full-Service Formats',
    desc: 'Our services include billboard advertising, mobile billboards, street furniture advertising, unipole advertising, hoardings, and airport advertising.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="18" height="18" rx="2"/>
        <rect x="26" y="4" width="18" height="18" rx="2"/>
        <rect x="4" y="26" width="18" height="18" rx="2"/>
        <rect x="26" y="26" width="18" height="18" rx="2"/>
      </svg>
    ),
  },
  {
    title: 'Smart Technology',
    desc: 'We use smart thinking, modern technology, and attention to detail to make brands stand out and remain memorable.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20"/>
        <polyline points="16,24 22,30 34,18"/>
      </svg>
    ),
  },
  {
    title: 'Ideal Dubai Market',
    desc: 'Dubai is an ideal market for outdoor advertising due to its fast growth, diverse population, and global business presence.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20"/>
        <path d="M4 24 Q14 12 24 24 Q34 36 44 24"/>
        <line x1="24" y1="4" x2="24" y2="44"/>
      </svg>
    ),
  },
  {
    title: 'Brand Visibility',
    desc: 'Successful outdoor advertising increases brand visibility, recognition, and audience interaction.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 24 C4 24 12 10 24 10 C36 10 44 24 44 24 C44 24 36 38 24 38 C12 38 4 24 4 24Z"/>
        <circle cx="24" cy="24" r="7"/>
      </svg>
    ),
  },
];

const WHY_US = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>, title: 'High Visibility', desc: "Dubai's landmarks and busy streets allow outdoor ads to reach millions of residents, tourists, and professionals." },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, title: 'Targeted Reach', desc: 'Outdoor advertising reaches specific audiences in high-traffic areas, luxury districts, and business centers.' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, title: 'Cost-Effective Advertising', desc: 'Outdoor advertising is more affordable than traditional media like TV and newspapers.' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>, title: 'Strong Brand Recognition', desc: 'Frequent exposure helps audiences remember and recognize brands more easily.' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>, title: 'Captive Audience', desc: 'People in traffic or public spaces are more likely to notice and remember outdoor advertisements.' },
];

const FAQS = [
  { q: 'What types of outdoor advertising do you offer?', a: 'We offer billboard advertising, bridge banners, LED billboards, lampposts, unipolar, hoardings, airport, metro, mall, and transit advertising.' },
  { q: 'Where are outdoor advertisements placed in Dubai?', a: "Outdoor ads are placed on highways, main roads, bridges, busy intersections, malls, metro stations, airports, and high-traffic locations." },
  { q: 'Is outdoor advertising effective in Dubai?', a: "Yes. Dubai's busy streets, landmarks, and high traffic make outdoor advertising one of the most effective branding strategies." },
  { q: 'Can outdoor advertising help brand awareness?', a: 'Outdoor advertising ensures constant visibility, helping brands stay top-of-mind with repeated exposure.' },
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
            <span>OOH Advertising</span>
          </nav>
          <p className="svc-hero-eyebrow">Premium</p>
          <h1 className="svc-hero-h1">Outdoor Advertising<br />Services</h1>
          <p className="svc-hero-sub">We deliver impactful out-of-home advertising that amplifies brand visibility across key locations. From billboards to transit media, we help your message reach audiences beyond digital screens.</p>
          <div className="svc-hero-btns">
            <Link href="/contact" className="svc-btn-primary">
              Get a Proposal
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="cb-section ooh-intro-section">
        <div className="container">
          <div className="ooh-intro-editorial">
            <div className="ooh-intro-left">
              <h2 className="ooh-intro-title">Premium Outdoor Advertising<br /><span className="gradient-text">Services in Dubai</span></h2>
              <div className="ooh-intro-bar" />
            </div>
            <div className="ooh-intro-right">
              <p>Get exposure with effective outdoor advertising in Dubai. We run strategic outdoor advertising campaigns that help brands reach their target audiences.</p>
              <p>Wide Wings Media is a leading outdoor advertising agency in Dubai. Founded in 2020, the company delivers premium hoardings and unipolar advertising solutions.</p>
              <p>Outdoor advertising includes billboards on bridges and lampposts, unipolar, wall banners, scaffolding, and taxi advertising.</p>
              <p>We are leaders in outdoor advertising across Dubai and the Emirates, offering a wide range of placements including billboards, bridge banners, lampposts, rooftops, metro, airport, malls, and transit advertising.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section className="cb-section cb-section-alt">
        <div className="container ooh-expertise-wrap">
          <span data-reveal className="section-label">Expertise &amp; Insights</span>
          <h2 data-reveal className="cb-section-h2">Outdoor advertising for <span className="gradient-text">business growth</span></h2>
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

      {/* ── OOH VS OTHER ── */}
      <section className="cb-section cb-section-alt">
        <div className="container">
          <div className="ooh-cmp-split">
            <div data-reveal className="ooh-cmp-left">
              <h2 className="ooh-cmp-title">Outdoor Advertising vs.<br /><span className="gradient-text">Other Forms of Advertising</span></h2>
              <p className="ooh-cmp-sub">Outdoor advertising differs from newspaper, television, and digital advertising by offering continuous brand visibility.</p>
              <Link href="/contact" className="svc-btn-primary ooh-cmp-btn">
                Get a Proposal
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
            <div className="ooh-cmp-right">
              {[
                { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>, text: 'Billboards and street advertising are always visible, allowing brands to communicate messages throughout the day.' },
                { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, text: 'Repeated exposure increases brand recognition and recall among audiences.' },
                { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>, text: "Dubai's constantly evolving landscape makes it one of the world's most dynamic environments for outdoor brand exposure." },
              ].map((item, i) => (
                <div key={i} data-reveal data-reveal-delay={`${i * 100}`} className="ooh-cmp-card">
                  <div className="ooh-cmp-icon">{item.icon}</div>
                  <p className="ooh-cmp-card-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY INVEST ── */}
      <section className="cb-section cb-section-dark">
        <div className="container">
          <h2 data-reveal className="cb-section-h2 ooh-deliver-title">Why Invest in Outdoor Advertising<br />in <span className="gradient-text">Dubai?</span></h2>
          <div className="cb-services-grid">
            {WHY_US.map((s, i) => (
              <div key={i} data-reveal data-reveal-delay={`${i * 80}`} className="cb-svc-card ooh-deliver-card">
                <div className="ooh-deliver-icon">{s.icon}</div>
                <h3 className="cb-svc-title">{s.title}</h3>
                <p className="cb-svc-desc">{s.desc}</p>
              </div>
            ))}
            <div data-reveal data-reveal-delay="400" className="cb-svc-card ooh-deliver-card ooh-deliver-purple">
              <p className="wad-cta-card-text">Make Your Brand Impossible to Ignore</p>
              <Link href="/contact" className="svc-btn-primary wad-cta-card-btn">
                Request an Outdoor Advertising Plan
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
          <h2 data-reveal className="cb-cta-h2">Make Your Brand<br /><span className="gradient-text">Impossible to Ignore</span></h2>
          <p data-reveal className="cb-cta-body">Launch high-impact outdoor advertising campaigns in Dubai and reach audiences where it matters most.</p>
          <div data-reveal className="cb-cta-btns">
            <Link href="/contact" className="svc-btn-primary">
              Request an Outdoor Advertising Plan
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
