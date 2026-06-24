import React from 'react';
import Link from 'next/link';
import '../services.css';
import '../service-page.css';
import './content-creation.css';

const EXPERTISE = [
  {
    title: 'Visual Design',
    desc: 'Great design solves problems. We create visuals that not only look good but also communicate your message instantly.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="40" height="28" rx="3"/>
        <circle cx="24" cy="22" r="7"/>
        <line x1="29" y1="27" x2="35" y2="33"/>
        <line x1="16" y1="44" x2="32" y2="44"/>
        <line x1="24" y1="36" x2="24" y2="44"/>
      </svg>
    ),
  },
  {
    title: 'Copywriting',
    desc: 'Our copywriters craft compelling narratives that persuade and convert, from website copy to ad scripts.',
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
    title: 'Video Content',
    desc: 'Video content is king. We produce short-form and long-form videos that engage audiences and boost retention.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="10" width="30" height="28" rx="3"/>
        <polyline points="34,19 44,13 44,35 34,29"/>
      </svg>
    ),
  },
  {
    title: 'Design Trends',
    desc: 'We stay ahead of design trends, ensuring your brand always looks modern and relevant.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 24a16 16 0 1 1 32 0"/>
        <polyline points="36,16 40,24 44,16"/>
        <path d="M40 24a16 16 0 0 1-32 0"/>
        <polyline points="12,32 8,24 4,32"/>
      </svg>
    ),
  },
  {
    title: 'Authority Building',
    desc: 'Consistent, high-quality content is the fastest way to build authority and trust with your audience.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20"/>
        <polyline points="16,24 22,30 34,18"/>
      </svg>
    ),
  },
];

const PROCESS = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: 'Strategy Session', desc: 'We begin with a content strategy session to understand your goals and upcoming campaigns.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>,
    title: 'Full Production', desc: 'Our team handles everything from scriptwriting and storyboarding to shooting, editing, and designing.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    title: 'Feedback & Approval', desc: 'We provide drafts for your feedback, ensuring the final output matches your vision perfectly.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    title: 'Fast Delivery', desc: 'Quick turnaround times and scalable production allow you to keep your marketing channels active and fresh.',
  },
];

const WHY_US = [
  {
    title: 'Multi-Disciplinary Team',
    desc: 'Access designers, writers, and editors all under one roof.',
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
    title: 'Platform-Optimized',
    desc: 'We tailor content specs and styles for specific platforms like TikTok vs. LinkedIn.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="18" height="18" rx="2"/><rect x="26" y="4" width="18" height="18" rx="2"/>
        <rect x="4" y="26" width="18" height="18" rx="2"/><rect x="26" y="26" width="18" height="18" rx="2"/>
      </svg>
    ),
  },
  {
    title: 'Fast Turnaround',
    desc: 'We deliver high-quality assets quickly to keep up with the fast-paced digital world.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20"/>
        <polyline points="24,12 24,26 32,30"/>
      </svg>
    ),
  },
  {
    title: 'Creative Direction',
    desc: 'We provide strategic art direction to ensure visual consistency.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="36" height="36" rx="3"/>
        <line x1="6" y1="18" x2="42" y2="18"/>
        <line x1="18" y1="18" x2="18" y2="42"/>
      </svg>
    ),
  },
];

const FAQS = [
  { q: 'Do you create content for social media?', a: 'Yes. We design posts, stories, reels, and ads tailored to Instagram, LinkedIn, TikTok, and more.' },
  { q: 'Can you write SEO-friendly articles?', a: 'Yes. Our copywriters are trained in SEO best practices to help your content rank and convert.' },
  { q: 'Do you offer photography and videography?', a: 'Yes. We have a team of professional photographers and videographers for shoots in Dubai.' },
  { q: 'What involves graphic design services?', a: 'Everything from social posts and brochures to presentations, infographics, and digital ads.' },
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
            <span>Content Creation</span>
          </nav>
          <p className="svc-hero-eyebrow">Engaging</p>
          <h1 className="svc-hero-h1">CONTENT CREATION<br />&amp; GRAPHIC DESIGN</h1>
          <p className="svc-hero-sub">We create compelling content and visuals that capture attention and communicate your brand story clearly. From graphics to copy, every asset is designed to inspire action and strengthen brand recall.</p>
          <div className="svc-hero-btns">
            <Link href="/contact" className="svc-btn-primary">
              Get a Proposal
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="cb-section cc-intro-section">
        <div className="container">
          <div className="cc-intro-editorial">
            <div className="cc-intro-left">
              <h2 className="cc-intro-title">Visuals and Words That <span className="gradient-text">Captivate</span></h2>
              <div className="cc-intro-bar" />
            </div>
            <div className="cc-intro-right">
              <p>In the digital world, content is the currency of attention. Wide Wings Media offers premium content creation and graphic design services in Dubai to help your brand speak clearly and look stunning.</p>
              <p>From social media graphics and motion design to professional copywriting and photography, we produce assets that stop the scroll and drive action.</p>
              <p>Quality content builds trust. We ensure every piece of content we create is on-brand, high-quality, and optimised for the platform it lives on.</p>
              <p>Whether you need a monthly content calendar or a one-off campaign asset, our creative team is ready to bring your ideas to life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section className="cb-section cb-section-alt">
        <div className="container">
          <span data-reveal className="section-label cc-expertise-center">Expertise &amp; Insights</span>
          <h2 data-reveal className="cb-section-h2 cc-expertise-center">High-quality content for <span className="gradient-text">every channel</span></h2>
          <div className="cb-expertise-grid">
            {EXPERTISE.map((e, i) => (
              <div key={i} data-reveal data-reveal-delay={`${i * 80}`} className="cb-expertise-card">
                <div className="cb-expertise-icon">{e.icon}</div>
                <h3 className="cb-expertise-title">{e.title}</h3>
                <p className="cb-expertise-desc">{e.desc}</p>
              </div>
            ))}
            <div data-reveal data-reveal-delay="400" className="cb-expertise-card cc-dark-card">
              <p className="cc-dark-card-text">Ready to create content that converts?</p>
              <Link href="/contact" className="svc-btn-primary cc-dark-card-btn">
                Get a Proposal
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
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

      {/* ── PROCESS ── */}
      <section className="cb-section cb-section-alt">
        <div className="container">
          <div className="cc-process-layout">
            <div className="cc-process-left">
              <h2 data-reveal className="cc-process-title">Creative Production <span className="gradient-text">Made Simple</span></h2>
              <p data-reveal className="cc-process-sub">From the first strategy call to final delivery, our streamlined process keeps your brand moving forward without the hassle.</p>
              <Link href="/contact" className="svc-btn-primary cc-process-btn">
                Get a Proposal
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
            <div className="cc-process-right">
              {PROCESS.map((p, i) => (
                <div key={i} data-reveal data-reveal-delay={`${i * 80}`} className="cc-process-point">
                  <div className="cc-process-dot">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="cc-process-point-title">{p.title}</h3>
                    <p className="cc-process-point-desc">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="cb-section cb-section-dark">
        <div className="container">
          <h2 data-reveal className="cb-section-h2 cc-deliver-title">Elevate Your Brand&apos;s <span className="gradient-text">Visual Language</span></h2>
          <div className="cc-deliver-grid">
            {WHY_US.map((w, i) => (
              <div key={i} data-reveal data-reveal-delay={`${i * 80}`} className="cb-svc-card cc-deliver-card">
                <div className="cb-why-icon">{w.icon}</div>
                <h3 className="cb-svc-title">{w.title}</h3>
                <p className="cb-svc-desc">{w.desc}</p>
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
          <span data-reveal className="section-label">Get Noticed</span>
          <h2 data-reveal className="cb-cta-h2">Create Content<br /><span className="gradient-text">That Converts</span></h2>
          <p data-reveal className="cb-cta-body">Stop using stock photos and generic copy. Create specific content that tells your unique story.</p>
          <div data-reveal className="cb-cta-btns">
            <Link href="/contact" className="svc-btn-primary">
              Request a Creative Quote
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
