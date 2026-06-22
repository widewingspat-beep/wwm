import React from 'react';
import Link from 'next/link';
import '../services.css';
import '../service-page.css';
import './social-media-management.css';

const WHAT_WE_DO = [
  { num: '01', title: 'Content Strategy', desc: 'Strategic content planning aligned with your brand voice, business goals, and audience preferences' },
  { num: '02', title: 'Community Management', desc: 'Active engagement with your audience to build loyalty, trust, and meaningful connections' },
  { num: '03', title: 'Platform Growth', desc: 'Data-driven growth tactics tailored specifically to each platform — Instagram, LinkedIn, TikTok, Facebook, and more' },
  { num: '04', title: 'Healthcare & Luxury Brands', desc: 'Specialized social media management for healthcare practices, hospitals, and luxury brands across the Gulf region' },
  { num: '05', title: 'Analytics & Reporting', desc: 'Monthly planning meetings, 24/7 marketing dashboard access, and detailed performance reporting' },
];

const EXPERTISE = [
  {
    title: '360° Social Media',
    desc: 'Full-service social media management from strategy and content creation to scheduling and community engagement',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20"/>
        <path d="M24 4 C14 14, 14 34, 24 44"/><path d="M24 4 C34 14, 34 34, 24 44"/>
        <line x1="4" y1="24" x2="44" y2="24"/>
      </svg>
    ),
  },
  {
    title: 'Data-Driven Growth',
    desc: 'We use the 80/20 rule — 80% value-driven content, 20% promotional — to build audiences that convert',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6,38 18,26 28,32 42,14"/>
        <polyline points="34,14 42,14 42,22"/>
      </svg>
    ),
  },
  {
    title: 'Healthcare Social Media',
    desc: 'We help healthcare practices present a more personal side through platforms like Facebook, Instagram, and LinkedIn',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 42 C24 42 6 30 6 18 A10 10 0 0 1 24 14 A10 10 0 0 1 42 18 C42 30 24 42 24 42Z"/>
        <line x1="24" y1="20" x2="24" y2="28"/><line x1="20" y1="24" x2="28" y2="24"/>
      </svg>
    ),
  },
  {
    title: 'Measurable Results',
    desc: '96% more followers on social media is achievable with the right strategy, content, and consistency',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="26" width="8" height="16" rx="1"/>
        <rect x="20" y="18" width="8" height="24" rx="1"/>
        <rect x="34" y="8" width="8" height="34" rx="1"/>
      </svg>
    ),
  },
];

const FAQS = [
  { q: 'How does social media help business growth?', a: 'Social media increases brand visibility, drives website traffic, and creates direct connections with your target audience, leading to more leads and sales.' },
  { q: 'Why is content important for social media marketing?', a: 'Consistent, high-quality content builds credibility, keeps your audience engaged, and positions your brand as an authority in your industry.' },
  { q: 'Do you have experience with healthcare and medical practices?', a: 'Yes. We specialize in social media marketing for healthcare providers, helping clinics and hospitals connect with patients authentically.' },
  { q: 'Do you provide analytics and reporting?', a: 'Yes. We provide monthly reports, client planning meetings, and 24/7 access to a live marketing dashboard.' },
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
            <span>Social Media Management</span>
          </nav>
          <h1 className="svc-hero-h1">Social Media Marketing Agency in Dubai</h1>
          <p className="svc-hero-sub">We manage your social media presence with strategic content, consistent engagement, and platform-specific growth tactics.</p>
          <div className="svc-hero-btns">
            <Link href="/contact" className="svc-btn-primary">
              Get a Proposal
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/contact" className="svc-btn-outline">View Our Work</Link>
          </div>
        </div>
      </section>

      <div data-reveal className="cb-intro-band">
        <p className="cb-intro-text">Managing social media for healthcare, hospitals, and luxury brands across Dubai and the GCC.</p>
      </div>

      <section className="cb-section">
        <div className="container">
          <span data-reveal className="section-label">What We Do</span>
          <h2 data-reveal className="cb-section-h2">Social media that <span className="gradient-text">builds communities</span></h2>
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
          <h2 data-reveal className="cb-section-h2">Built on <span className="gradient-text">social excellence</span></h2>
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
          <span data-reveal className="section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Let&apos;s Connect</span>
          <h2 data-reveal className="cb-cta-h2">Grow Your Brand with<br /><span className="gradient-text">Social Media That Converts</span></h2>
          <p data-reveal className="cb-cta-body">Managing social media for healthcare, hospitals, and luxury brands across Dubai and the GCC.</p>
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
