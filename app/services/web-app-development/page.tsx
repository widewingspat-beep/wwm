import React from 'react';
import Link from 'next/link';
import '../services.css';
import '../service-page.css';
import './web-app-development.css';

const WHAT_WE_DO = [
  { num: '01', title: 'Award-Winning Web Design', desc: 'Combining design and digital marketing to help businesses grow revenue online with websites that perform' },
  { num: '02', title: 'Strategy & Consultancy', desc: 'Supporting businesses with complex needs, multi-country operations, and large website ecosystems' },
  { num: '03', title: 'Content Creation for Websites', desc: 'Producing written content, photos, and videos to strengthen your digital presence and engage your audience' },
  { num: '04', title: 'Full Website Design Services', desc: 'Designing award-winning websites that improve reputation, increase sales, and deliver measurable ROI' },
  { num: '05', title: 'Transparent Pricing', desc: 'Clear pricing and custom solutions tailored to your business goals, industry, and budget' },
];

const EXPERTISE = [
  {
    title: 'UX-First Design',
    desc: 'Every website we design starts with the user experience — intuitive navigation, fast load times, and mobile-first layouts',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="40" height="28" rx="3"/>
        <line x1="16" y1="44" x2="32" y2="44"/>
        <line x1="24" y1="36" x2="24" y2="44"/>
        <circle cx="24" cy="22" r="6"/>
      </svg>
    ),
  },
  {
    title: 'Custom Development',
    desc: 'From WordPress to fully custom builds, we develop solutions that match your exact requirements and scale with your business',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="12,18 6,24 12,30"/>
        <polyline points="36,18 42,24 36,30"/>
        <line x1="20" y1="10" x2="28" y2="38"/>
      </svg>
    ),
  },
  {
    title: 'Medical & Healthcare Websites',
    desc: 'We are the best medical web design company in Dubai, building HIPAA-aware, patient-friendly healthcare websites',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 42 C24 42 6 30 6 18 A10 10 0 0 1 24 14 A10 10 0 0 1 42 18 C42 30 24 42 24 42Z"/>
        <line x1="24" y1="20" x2="24" y2="28"/><line x1="20" y1="24" x2="28" y2="24"/>
      </svg>
    ),
  },
  {
    title: 'SEO-Ready Builds',
    desc: 'Every website is built with SEO best practices from day one — clean code, fast performance, and optimised structure',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="20" r="14"/>
        <line x1="30" y1="30" x2="42" y2="42"/>
        <polyline points="14,20 19,25 28,14"/>
      </svg>
    ),
  },
];

const FAQS = [
  { q: 'Is static web design a good choice?', a: 'Static websites are fast, secure, and cost-effective for businesses with stable content needs. We recommend them for landing pages and portfolio sites.' },
  { q: 'Are WordPress websites better than custom websites?', a: 'WordPress is excellent for content-heavy sites and easy management. Custom builds offer more flexibility and scalability for complex requirements.' },
  { q: 'What is the difference between web design and web development?', a: 'Web design focuses on visual layout and user experience, while web development handles the technical build, functionality, and backend systems.' },
  { q: 'Is Webflow a good option?', a: 'Yes. Webflow combines design flexibility with a no-code CMS, making it ideal for marketing teams who need to update content without developer help.' },
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

export default function WebAppDevelopmentPage() {
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
            <span>Web &amp; App Development</span>
          </nav>
          <h1 className="svc-hero-h1">Leading Web Design Company in Dubai</h1>
          <p className="svc-hero-sub">We design and develop high-performing websites and mobile applications that are fast, secure, and user-focused — optimized for user experience, scalability, and business growth.</p>
          <div className="svc-hero-btns">
            <Link href="/contact" className="svc-btn-primary">
              Get a Proposal
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/contact" className="svc-btn-outline">Get Your Proposal</Link>
          </div>
        </div>
      </section>

      <div data-reveal className="cb-intro-band">
        <p className="cb-intro-text">Your top web design company in Dubai — for all types of industries. Combining design and digital marketing to help businesses grow revenue online.</p>
      </div>

      <section className="cb-section">
        <div className="container">
          <span data-reveal className="section-label">What We Do</span>
          <h2 data-reveal className="cb-section-h2">Websites that <span className="gradient-text">perform and convert</span></h2>
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
          <h2 data-reveal className="cb-section-h2">Built on <span className="gradient-text">technical excellence</span></h2>
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
          <h2 data-reveal className="cb-cta-h2">Ready to Dominate<br /><span className="gradient-text">Your Market?</span></h2>
          <p data-reveal className="cb-cta-body">Start your project with a leading web design company in Dubai. We build websites that perform, convert, and grow with your business.</p>
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
