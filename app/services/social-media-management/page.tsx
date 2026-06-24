import React from 'react';
import Link from 'next/link';
import '../services.css';
import '../service-page.css';
import './social-media-management.css';

const WHY_US = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: 'Get 96% More Followers on Social Media',
    desc: 'We help brands grow their audience by generating qualified leads and running targeted campaigns.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    title: 'Content is King on Social Media',
    desc: 'Our strategy follows the 80/20 rule, focusing on educational and engaging content.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
    title: 'More Customers Come When a Business Grows',
    desc: 'We use analytics and ROI tracking to show real business impact and growth.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
    title: 'Dedicated Social Media Expert',
    desc: 'Every client works with a dedicated expert supported by monthly planning and reporting.',
  },
];

const EXPERTISE = [
  {
    title: 'Healthcare Social Media',
    desc: 'We are a social media agency in Dubai that works with healthcare practices, offering benefits and opportunities to connect with patients and professionals.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 42 C24 42 6 30 6 18 A10 10 0 0 1 24 14 A10 10 0 0 1 42 18 C42 30 24 42 24 42Z"/>
        <line x1="24" y1="20" x2="24" y2="28"/><line x1="20" y1="24" x2="28" y2="24"/>
      </svg>
    ),
  },
  {
    title: 'Patient Engagement',
    desc: 'Healthcare social media marketing helps practices present a more personal side through platforms like Facebook, Instagram, and LinkedIn to reach new patients.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="16" r="10"/>
        <path d="M6 44 C6 34 14 28 24 28 C34 28 42 34 42 44"/>
      </svg>
    ),
  },
  {
    title: 'Brand Visibility',
    desc: 'Being active on social media increases website visibility and allows practices to share expertise, health education, and wellness information.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20"/>
        <path d="M24 4 C14 14, 14 34, 24 44"/><path d="M24 4 C34 14, 34 34, 24 44"/>
        <line x1="4" y1="24" x2="44" y2="24"/>
      </svg>
    ),
  },
  {
    title: 'Luxury Brand Strategies',
    desc: 'We also work with luxury brands across the Gulf region, offering advanced technology, custom digital solutions, and refined social media strategies.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4l4.5 9 10 1.5-7.25 7 1.75 10L24 26.5 15 31.5l1.75-10L9.5 14.5l10-1.5z"/>
      </svg>
    ),
  },
  {
    title: 'Captivating Content',
    desc: 'Our role is to help your brand stand out by creating engaging content that meets the high expectations of luxury audiences.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="10" width="30" height="28" rx="3"/>
        <polyline points="34,19 44,13 44,35 34,29"/>
      </svg>
    ),
  },
  {
    title: 'Data-Driven Growth',
    desc: 'We use the 80/20 rule — 80% value-driven content, 20% promotional — to build audiences that convert, supported by deep analytics.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6,38 18,26 28,32 42,14"/>
        <polyline points="34,14 42,14 42,22"/>
      </svg>
    ),
  },
];

const FAQS = [
  { q: 'How can social media help grow my business?', a: 'Social media helps businesses increase visibility, build trust, and connect directly with customers, which leads to higher engagement and growth.' },
  { q: 'Is content important for social media marketing?', a: 'Yes. Content is the foundation of social media success. Educational, visual, and value-driven content performs best and builds long-term trust.' },
  { q: 'Do you work with healthcare and medical practices?', a: 'Yes. We specialize in healthcare social media marketing, focusing on educational content, video strategies, and patient engagement.' },
  { q: 'Do you provide analytics and reporting?', a: 'Yes. We use data, analytics, and ROI reporting dashboards to track performance and measure results.' },
];

const DEDICATED = [
  { icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="16" r="10"/>
        <path d="M6 44 C6 34 14 28 24 28 C34 28 42 34 42 44"/>
        <circle cx="38" cy="20" r="5"/>
        <line x1="38" y1="26" x2="38" y2="34"/>
      </svg>
    ), title: 'Dedicated Expert', desc: 'Each client gets a dedicated social media marketing expert who supports strategy, execution, and performance optimization.' },
  { icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="40" height="40" rx="3"/>
        <line x1="14" y1="4" x2="14" y2="44"/>
        <line x1="34" y1="4" x2="34" y2="44"/>
        <line x1="4" y1="16" x2="44" y2="16"/>
        <line x1="4" y1="32" x2="44" y2="32"/>
      </svg>
    ), title: 'Monthly Planning', desc: 'Our experts meet with clients monthly to plan content, evaluate performance, and ensure marketing success.' },
  { icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="40" height="40" rx="3"/>
        <rect x="10" y="20" width="8" height="18" rx="1"/>
        <rect x="22" y="12" width="8" height="26" rx="1"/>
        <rect x="34" y="16" width="8" height="22" rx="1"/>
      </svg>
    ), title: '24/7 Dashboard', desc: 'You get access to a 24/7 marketing growth dashboard where analytics and results are tracked in real time.' },
  { icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20"/>
        <polyline points="16,24 22,30 34,18"/>
      </svg>
    ), title: 'Transparency & Results', desc: 'This ensures transparency, accountability, and continuous improvement for your social media campaigns.' },
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

export default function SocialMediaManagementPage() {
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
            <span>Social Media Management</span>
          </nav>
          <p className="svc-hero-eyebrow">#1 Ranked</p>
          <h1 className="svc-hero-h1">SOCIAL MEDIA MARKETING<br />AGENCY IN DUBAI</h1>
          <p className="svc-hero-sub">We manage your social media presence with strategic content, consistent engagement, and platform-specific growth tactics. Our approach builds communities, increases visibility, and drives meaningful interactions.</p>
          <div className="svc-hero-btns">
            <Link href="/contact" className="svc-btn-primary">
              Get a Proposal
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="cb-section smm-intro-section">
        <div className="container">
          <div className="smm-intro-editorial">
            <div className="smm-intro-left">
              <h2 className="smm-intro-title">360° Social Media Marketing <span className="gradient-text">Agency in Dubai</span></h2>
              <div className="smm-intro-bar" />
            </div>
            <div className="smm-intro-right">
              <p>Make your stories come to life on social media with Wide Wings Media. We are your trusted social media marketing agency in Dubai.</p>
              <p>We will help your brand stand out online by creating interesting and informative content that people enjoy and learn from. Our agency focuses on excellent content supported by analytics and key performance indicators (KPIs).</p>
              <p>Social media marketing is essential for building strong brand presence in today&apos;s fast-changing digital world. People rely on social platforms to discover brands, make buying decisions, and contact businesses directly.</p>
              <p>If you want to market effectively today, social media is the most powerful channel. It requires creativity, strategy, and data-driven management. Wide Wings Media understands how this market works.</p>
              <p>Our team has extensive experience creating social media strategies that connect people with brands and help businesses reach their goals.</p>
              <p>This approach helps position your business as a market leader and achieve sustainable long-term growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section className="cb-section cb-section-alt">
        <div className="container">
          <span data-reveal className="section-label" style={{display:'block',textAlign:'center'}}>Expertise &amp; Insights</span>
          <h2 data-reveal className="cb-section-h2 smm-exp-title">Managing social media for healthcare, hospitals <span className="gradient-text">&amp; luxury brands</span></h2>
          <div className="smm-exp-2col">
            {[0,3,1,4,2,5].map((idx, i) => {
              const e = EXPERTISE[idx];
              return (
                <div key={idx} data-reveal data-reveal-delay={`${i*80}`} className="smm-exp-row">
                  <div className="smm-exp-circle">{e.icon}</div>
                  <div className="smm-exp-content">
                    <h3 className="smm-exp-title-card">{e.title}</h3>
                    <p className="smm-exp-desc">{e.desc}</p>
                  </div>
                </div>
              );
            })}
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

      {/* ── DEDICATED EXPERTS ── */}
      <section className="cb-section cb-section-alt smm-dedicated-section">
        <div className="container">
          <div className="smm-dedicated-layout">
            <div className="smm-dedicated-left">
              <h2 data-reveal className="smm-dedicated-title">Dedicated Social Media Experts &amp; <span className="gradient-text">Data-Driven Growth</span></h2>
              <p data-reveal className="smm-dedicated-sub">Each client gets a dedicated social media marketing expert who supports strategy, execution, and performance optimization.</p>
            </div>
            <div className="smm-dedicated-right">
              {[
                'Our experts meet with clients monthly to plan content, evaluate performance, and ensure marketing success.',
                'You get access to a 24/7 marketing growth dashboard where analytics and results are tracked in real time.',
                'This ensures transparency, accountability, and continuous improvement for your social media campaigns.',
              ].map((point, i) => (
                <div key={i} data-reveal data-reveal-delay={`${i * 80}`} className="smm-dedicated-point">
                  <div className="smm-dedicated-dot">
                    {[
                      <svg key={0} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="4" x2="9" y2="20"/><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/></svg>,
                      <svg key={1} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><rect x="3" y="3" width="18" height="18" rx="2"/><polyline points="9 12 11 14 15 10"/></svg>,
                      <svg key={2} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
                    ][i]}
                  </div>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="cb-section cb-section-dark smm-why-section">
        <div className="container">
          <h2 data-reveal className="cb-section-h2 smm-why-title">Why Choose Our Social Media Marketing <span className="gradient-text">Agency in Dubai?</span></h2>
          <div className="smm-why-grid">
            {WHY_US.map((s, i) => (
              <div key={i} data-reveal data-reveal-delay={`${i * 80}`} className="smm-why-card">
                <div className="smm-why-icon">{s.icon}</div>
                <h3 className="smm-why-card-title">{s.title}</h3>
                <p className="smm-why-card-desc">{s.desc}</p>
              </div>
            ))}
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
          <h2 data-reveal className="cb-cta-h2">Grow Your Brand with Social Media<br /><span className="gradient-text">That Converts</span></h2>
          <p data-reveal className="cb-cta-body">Partner with a top social media marketing agency in Dubai and turn engagement into real business growth.</p>
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
