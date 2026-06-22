import React from 'react';
import Link from 'next/link';
import '../services.css';
import '../service-page.css';
import './content-creation.css';

const WHAT_WE_DO = [
  { num: '01', title: 'Social Media Graphics & Motion', desc: 'Eye-catching graphics and motion design optimized for Instagram, LinkedIn, TikTok, and beyond' },
  { num: '02', title: 'Copywriting', desc: 'Professional copywriting that communicates your brand voice, drives engagement, and converts readers into customers' },
  { num: '03', title: 'Photography & Video', desc: 'Short-form and long-form video production and professional photography designed to engage, retain, and convert' },
  { num: '04', title: 'Design with Trend Awareness', desc: 'We align your visuals with current design trends to keep your brand feeling fresh and relevant' },
  { num: '05', title: 'Platform-Optimised Content', desc: 'Content tailored specifically for each platform to maximize reach, engagement, and performance' },
];

const EXPERTISE = [
  {
    title: 'Multi-Disciplinary Team',
    desc: 'A full creative team under one roof — designers, writers, videographers, and strategists working together',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="8"/>
        <circle cx="32" cy="16" r="8"/>
        <path d="M4 42 C4 34 10 28 16 28 C22 28 26 32 28 36"/>
        <path d="M20 42 C20 34 26 28 32 28 C38 28 44 34 44 42"/>
      </svg>
    ),
  },
  {
    title: 'Quick Turnaround',
    desc: 'Fast delivery timelines to keep your marketing channels active and your audience consistently engaged',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20"/>
        <polyline points="24,12 24,26 32,30"/>
      </svg>
    ),
  },
  {
    title: 'Strategic Art Direction',
    desc: 'Consistent visual identity and art direction that strengthens your brand across all touchpoints',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="36" height="36" rx="3"/>
        <line x1="6" y1="18" x2="42" y2="18"/>
        <line x1="18" y1="18" x2="18" y2="42"/>
      </svg>
    ),
  },
  {
    title: 'Full Production Handling',
    desc: 'From scriptwriting through editing — we manage the entire production process end to end',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="10" width="30" height="28" rx="3"/>
        <polyline points="34,19 44,13 44,35 34,29"/>
      </svg>
    ),
  },
];

const PROCESS = [
  { step: '01', title: 'Strategy Consultation', desc: 'We start with a deep understanding of your goals, audience, and brand before creating a single piece of content' },
  { step: '02', title: 'Production & Review', desc: 'Full production with draft review and revision cycles to ensure every piece meets your standards' },
  { step: '03', title: 'Fast Delivery', desc: 'Content delivered on time to maintain active marketing channels and consistent audience engagement' },
];

const FAQS = [
  { q: 'Do you create content for social media?', a: 'Yes. We produce platform-specific content for Instagram, TikTok, LinkedIn, Facebook, and more — including graphics, reels, and copy.' },
  { q: 'Can you write SEO-friendly articles?', a: 'Absolutely. Our copywriters produce blog posts and website content optimized for both readers and search engines.' },
  { q: 'Do you offer photography and videography?', a: 'Yes. We handle professional photography and both short-form and long-form video production.' },
  { q: 'What does graphic design include?', a: 'Our graphic design services cover social media graphics, brand materials, print design, presentations, and motion graphics.' },
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

export default function ContentCreationPage() {
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
            <span>Content Creation</span>
          </nav>
          <h1 className="svc-hero-h1">Content Creation &amp; Graphic Design</h1>
          <p className="svc-hero-sub">We create compelling content and visuals that capture attention and communicate your brand story clearly across every channel.</p>
          <div className="svc-hero-btns">
            <Link href="/contact" className="svc-btn-primary">
              Get a Proposal
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/contact" className="svc-btn-outline">Request a Creative Quote</Link>
          </div>
        </div>
      </section>

      <div data-reveal className="cb-intro-band">
        <p className="cb-intro-text">High-quality content for every channel. Elevate your brand&apos;s visual language with Wide Wings Media.</p>
      </div>

      <section className="cb-section">
        <div className="container">
          <span data-reveal className="section-label">What We Do</span>
          <h2 data-reveal className="cb-section-h2">Content that <span className="gradient-text">captivates and converts</span></h2>
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
          <h2 data-reveal className="cb-section-h2">Built on <span className="gradient-text">creative excellence</span></h2>
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
          <span data-reveal className="section-label">Our Process</span>
          <h2 data-reveal className="cb-section-h2">From brief to <span className="gradient-text">brilliant</span></h2>
          <div className="cb-process-grid">
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
          <span data-reveal className="section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Let&apos;s Create</span>
          <h2 data-reveal className="cb-cta-h2">Create Content<br /><span className="gradient-text">That Converts</span></h2>
          <p data-reveal className="cb-cta-body">High-quality content for every channel. Elevate your brand&apos;s visual language with Wide Wings Media.</p>
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
