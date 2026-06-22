import React from 'react';
import Link from 'next/link';
import '../services.css';
import '../service-page.css';
import './pr-management.css';

const WHAT_WE_DO = [
  { num: '01', title: 'Media Relations', desc: 'Targeted media relations and press outreach positioning your brand strategically in relevant publications and outlets' },
  { num: '02', title: 'Content & Storytelling', desc: 'Compelling press releases and brand narratives aligned with your identity and business goals' },
  { num: '03', title: 'Influencer Marketing', desc: 'Connecting your brand with the right influencers and partners to create authentic, high-value collaborations' },
  { num: '04', title: 'Reputation Management', desc: 'Monitoring brand perception, managing sentiment, and providing proactive risk response to protect your reputation' },
];

const EXPERTISE = [
  {
    title: 'Third-Party Validation',
    desc: 'PR builds trust faster than advertising — editorial coverage and media mentions carry credibility that ads cannot buy',
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
    title: 'Crisis Management',
    desc: 'We have crisis protocols and an emergency response team for sensitive situations that require immediate action',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 6 L42 38 H6 Z"/>
        <line x1="24" y1="20" x2="24" y2="30"/>
        <circle cx="24" cy="34" r="1.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    title: 'Digital PR & SEO',
    desc: 'Digital PR strategies that improve your SEO through quality backlinks from authoritative media outlets',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="20" r="14"/>
        <line x1="30" y1="30" x2="42" y2="42"/>
        <polyline points="14,20 19,25 28,14"/>
      </svg>
    ),
  },
  {
    title: 'Measurement & Reporting',
    desc: 'We measure PR success via sentiment analysis, share of voice, media coverage, and engagement metrics',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="26" width="8" height="16" rx="1"/>
        <rect x="20" y="18" width="8" height="24" rx="1"/>
        <rect x="34" y="8" width="8" height="34" rx="1"/>
      </svg>
    ),
  },
];

const PROCESS = [
  { step: '01', title: 'Define Your Narrative', desc: 'We define your core narrative and identify the strongest story angles that resonate with your target audience' },
  { step: '02', title: 'Media Targeting', desc: 'We create a targeted media list of relevant journalists, editors, and outlets aligned with your industry and goals' },
  { step: '03', title: 'Pitch & Manage', desc: 'We pitch your stories and manage all media inquiries, interviews, and follow-ups professionally' },
  { step: '04', title: 'Monitor & Report', desc: 'We monitor media coverage and brand sentiment, providing detailed reports on reach, tone, and impact' },
];

const WHY_US = [
  {
    title: 'GCC Media Network',
    desc: 'Established relationships with leading media outlets and journalists across the Gulf region',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20"/>
        <path d="M24 4 C14 14, 14 34, 24 44"/><path d="M24 4 C34 14, 34 34, 24 44"/>
        <line x1="4" y1="24" x2="44" y2="24"/>
      </svg>
    ),
  },
  {
    title: 'Crisis Ready',
    desc: 'Emergency response team available to manage sensitive situations and protect your brand reputation',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 6 L42 38 H6 Z"/>
        <line x1="24" y1="20" x2="24" y2="30"/>
        <circle cx="24" cy="34" r="1.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    title: 'Thought Leadership',
    desc: 'We position your executives as industry voices through expert commentary and speaking opportunities',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="16" r="10"/>
        <path d="M10 44 C10 34 16 28 24 28 C32 28 38 34 38 44"/>
        <polyline points="20,12 24,8 28,12"/>
      </svg>
    ),
  },
  {
    title: 'Integrated Approach',
    desc: 'Fully aligned PR, social media, and marketing strategies for a consistent brand narrative',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="18" height="18" rx="2"/><rect x="26" y="4" width="18" height="18" rx="2"/>
        <rect x="4" y="26" width="18" height="18" rx="2"/><rect x="26" y="26" width="18" height="18" rx="2"/>
      </svg>
    ),
  },
];

const FAQS = [
  { q: 'What is included in PR management?', a: 'Our PR services include media relations, press release writing, influencer outreach, reputation monitoring, and crisis communications.' },
  { q: 'How does PR differ from advertising?', a: 'PR earns media coverage through storytelling and relationships, providing third-party credibility that paid advertising cannot replicate.' },
  { q: 'Do you handle crisis communications?', a: 'Yes. We have dedicated crisis management protocols and an experienced team ready to respond to reputational risks quickly.' },
  { q: 'Can PR improve our SEO?', a: 'Yes. Digital PR generates high-quality backlinks from authoritative publications, which significantly improves your search engine rankings.' },
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

export default function PrManagementPage() {
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
            <span>PR Management</span>
          </nav>
          <h1 className="svc-hero-h1">PR That Builds Presence</h1>
          <p className="svc-hero-sub">We position your brand where it matters — through the right narratives, the right platforms, and the right timing.</p>
          <div className="svc-hero-btns">
            <Link href="/contact" className="svc-btn-primary">
              Get a Proposal
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/contact" className="svc-btn-outline">Consult with a PR Expert</Link>
          </div>
        </div>
      </section>

      <div data-reveal className="cb-intro-band">
        <p className="cb-intro-text">We build bridges between communities. Shaping perceptions and building trust through strategic public relations.</p>
      </div>

      <section className="cb-section">
        <div className="container">
          <span data-reveal className="section-label">What We Do</span>
          <h2 data-reveal className="cb-section-h2">PR that <span className="gradient-text">shapes narratives</span></h2>
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
          <h2 data-reveal className="cb-section-h2">Built on <span className="gradient-text">media expertise</span></h2>
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
          <h2 data-reveal className="cb-section-h2">How we earn your <span className="gradient-text">media coverage</span></h2>
          <div className="cb-process-grid-4">
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
        <div className="container">
          <span data-reveal className="section-label">Why Choose Us</span>
          <h2 data-reveal className="cb-section-h2">Why choose Wide Wings for <span className="gradient-text">PR?</span></h2>
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
          <span data-reveal className="section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Let&apos;s Tell Your Story</span>
          <h2 data-reveal className="cb-cta-h2">Tell Your Story<br /><span className="gradient-text">to the World</span></h2>
          <p data-reveal className="cb-cta-body">Position your brand where it actually matters. Protect and grow your reputation with strategic PR that delivers real results.</p>
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
