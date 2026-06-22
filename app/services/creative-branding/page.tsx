import React from 'react';
import Link from 'next/link';
import './creative-branding.css';
import '../services.css';

const WHAT_WE_DO = [
  {
    num: '01',
    title: 'Brand Strategy',
    desc: 'We define how your brand thinks, speaks, and shows up. Positioning, tone of voice, messaging frameworks — built to last.',
  },
  {
    num: '02',
    title: 'Visual Identity & Design',
    desc: 'We create identities that are consistent, memorable, and flexible — logo design, brand guidelines, and full visual systems.',
  },
  {
    num: '03',
    title: 'Logo Design',
    desc: 'Brand guidelines, social media design system, packaging & print assets, and graphic design services. Make the first thing your audience views stand out.',
  },
  {
    num: '04',
    title: 'Strategic Branding',
    desc: 'Every decision we make ties back to how your brand performs in the real world — competitive analysis, brand audits, and positioning.',
  },
  {
    num: '05',
    title: 'Clarity & Creative Impact',
    desc: 'Marketing creatives, campaign visuals, digital & social assets, presentation design, brochure & print design — and everything in between.',
  },
];

const EXPERTISE = [
  {
    title: 'Visual Communication',
    desc: 'We create visuals that capture attention and communicate your message with clarity and speed.',
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
    title: 'Copywriting & Messaging',
    desc: 'Our copywriters develop persuasive messaging that drives action, from website content to high-performing ad scripts.',
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
    title: 'Video Production',
    desc: 'Video remains one of the most powerful formats. We produce both short and long-form content designed to engage, retain, and convert.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="10" width="30" height="28" rx="3"/>
        <polyline points="34,19 44,13 44,35 34,29"/>
      </svg>
    ),
  },
  {
    title: 'Design Evolution',
    desc: 'We keep up with evolving design trends to ensure your brand consistently feels fresh, current, and aligned with market expectations.',
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
    title: 'Content Delivery',
    desc: 'Delivering consistent, high-quality content is key to building credibility, strengthening your presence, and earning audience trust.',
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
    step: '01',
    title: 'Strategy & Messaging',
    desc: 'Speak your truth through scripts that tell your story and deliver the message. Then we shape the identity and roll it out across everything your audience sees.',
  },
  {
    step: '02',
    title: 'Feedback & Delivery',
    desc: 'You get exactly what you ask for. We leave safe space for providing feedback, ensuring your vision is perfectly delivered.',
  },
  {
    step: '03',
    title: 'Flexibility & Execution',
    desc: 'Flexibility and punctuality are two sides of our coin, keeping your marketing channels active and your brand always on.',
  },
];

const WHY_US = [
  {
    title: 'Strategic Approach',
    desc: 'We align creative decisions with your business goals for maximum impact.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20"/><circle cx="24" cy="24" r="10"/>
        <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none"/>
        <line x1="24" y1="4" x2="24" y2="14"/><line x1="24" y1="34" x2="24" y2="44"/>
        <line x1="4" y1="24" x2="14" y2="24"/><line x1="34" y1="24" x2="44" y2="24"/>
      </svg>
    ),
  },
  {
    title: 'World-Class Design',
    desc: 'Our award-winning designers create visuals that are both beautiful and functional.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4l4.5 9 10 1.5-7.25 7 1.75 10L24 26.5 15 31.5l1.75-10L9.5 14.5l10-1.5z"/>
      </svg>
    ),
  },
  {
    title: 'Full-Service Agency',
    desc: 'We extend your new brand into web, social, and marketing campaigns seamlessly.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="18" height="18" rx="2"/><rect x="26" y="4" width="18" height="18" rx="2"/>
        <rect x="4" y="26" width="18" height="18" rx="2"/><rect x="26" y="26" width="18" height="18" rx="2"/>
      </svg>
    ),
  },
  {
    title: 'Market Expertise',
    desc: 'We understand the Dubai and GCC market nuances, ensuring cultural relevance across every campaign.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20"/>
        <line x1="4" y1="24" x2="44" y2="24"/>
        <path d="M24 4 C14 14, 14 34, 24 44"/><path d="M24 4 C34 14, 34 34, 24 44"/>
      </svg>
    ),
  },
];

const FAQS = [
  {
    q: 'What is included in a branding package?',
    a: 'Our packages typically include logo design, colour palette, typography, brand voice guidelines, and stationery design. We also offer extended packages covering social media design systems, packaging, and full brand guidelines.',
  },
  {
    q: 'How long does the branding process take?',
    a: 'A typical branding project takes between 3 to 6 weeks depending on scope and complexity. We provide a clear timeline at the start of every project so you always know what to expect.',
  },
  {
    q: 'Do you offer re-branding services?',
    a: 'Yes. Whether you need a full rebrand or a brand refresh, we audit your existing identity, identify what is working, and evolve your brand without losing equity you have already built.',
  },
  {
    q: 'Can you help with naming my business?',
    a: 'Absolutely. Our brand strategy team offers naming services including name development, trademark consideration guidance, and domain availability checks to help you launch with confidence.',
  },
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

export default function CreativeBrandingPage() {
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
            <span>Creative &amp; Branding</span>
          </nav>
          <h1 className="svc-hero-h1">
            Build a brand people<br />
            <em>don&apos;t scroll past</em>
          </h1>
          <p className="svc-hero-sub">
            Not every brand needs more noise — most need clarity. We create brands that look sharp,
            speak clearly, and actually perform, from strategy to design and content.
          </p>
          <div className="svc-hero-btns">
            <Link href="/contact" className="svc-btn-primary">
              Get a Proposal
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/contact" className="svc-btn-outline">Request a Creative Quote</Link>
          </div>
        </div>
      </section>

      {/* ── INTRO BAND ── */}
      <div data-reveal className="cb-intro-band">
        <p className="cb-intro-text">
          Design isn&apos;t decoration — it&apos;s communication. We deliver graphic design services in Dubai and across the MENA region.
        </p>
      </div>

      {/* ── WHAT WE DO ── */}
      <section className="cb-section">
        <div className="container">
          <span data-reveal className="section-label">What We Do</span>
          <h2 data-reveal className="cb-section-h2">
            Soar your persona through <span className="gradient-text">branding</span>
          </h2>
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

      {/* ── EXPERTISE ── */}
      <section className="cb-section cb-section-alt">
        <div className="container">
          <span data-reveal className="section-label">Expertise &amp; Insights</span>
          <h2 data-reveal className="cb-section-h2">
            Built on <span className="gradient-text">creative excellence</span>
          </h2>
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

      {/* ── PROCESS ── */}
      <section className="cb-section">
        <div className="container">
          <span data-reveal className="section-label">Our Process</span>
          <h2 data-reveal className="cb-section-h2">
            Wide Wings gives you <span className="gradient-text">wings!</span>
          </h2>
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

      {/* ── WHY WIDE WINGS ── */}
      <section className="cb-section cb-section-alt">
        <div className="container">
          <span data-reveal className="section-label">Why Choose Us</span>
          <h2 data-reveal className="cb-section-h2">
            Why choose Wide Wings for <span className="gradient-text">branding?</span>
          </h2>
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

      {/* ── FAQ ── */}
      <section className="cb-section">
        <div className="container cb-faq-wrap">
          <span data-reveal className="section-label">FAQ</span>
          <h2 data-reveal className="cb-section-h2">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
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

      {/* ── CTA ── */}
      <section className="cb-cta">
        <div className="container cb-cta-inner">
          <span data-reveal className="section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Let&apos;s Create</span>
          <h2 data-reveal className="cb-cta-h2">
            Build a brand that<br /><span className="gradient-text">actually works.</span>
          </h2>
          <p data-reveal className="cb-cta-body">
            Start your project with a leading branding agency in Dubai. We specialise in connecting
            communities and ideas that turn your vision into a reality.
          </p>
          <div data-reveal className="cb-cta-btns">
            <Link href="/contact" className="svc-btn-primary">
              Free Consultation
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/services" className="svc-btn-outline cb-cta-outline">View All Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
