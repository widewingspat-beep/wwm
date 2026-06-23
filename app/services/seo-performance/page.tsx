import React from 'react';
import Link from 'next/link';
import '../services.css';
import '../service-page.css';
import './seo-performance.css';

const EXPERTISE = [
  {
    title: 'Advanced SEO Services',
    desc: 'Wide Wings Media is the best SEO agency in Dubai, offering advanced and effective SEO services that follow Google and search engine best practices.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="20" r="14"/>
        <line x1="30" y1="30" x2="44" y2="44"/>
        <line x1="14" y1="20" x2="26" y2="20"/>
        <line x1="20" y1="14" x2="20" y2="26"/>
      </svg>
    ),
  },
  {
    title: 'Lead Generation',
    desc: 'Effective SEO turns your website into an active sales platform by generating high-quality business leads.',
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
    title: 'All Business Sizes',
    desc: 'We provide SEO services for businesses of all sizes and industries, helping them grow online with proven strategies.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="22" width="12" height="22" rx="2"/>
        <rect x="18" y="14" width="12" height="30" rx="2"/>
        <rect x="32" y="6" width="12" height="38" rx="2"/>
      </svg>
    ),
  },
  {
    title: 'Custom SEO Plans',
    desc: 'Every SEO campaign follows a step-by-step process: understanding your business, building a custom plan, and executing using modern SEO tools.',
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
    title: 'Maximised ROI',
    desc: 'Our approach helps maximize return on investment by improving traffic, conversions, and long-term growth.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6,38 18,26 28,32 42,14"/>
        <polyline points="34,14 42,14 42,22"/>
      </svg>
    ),
  },
  {
    title: 'Ethical Practices',
    desc: 'We invest in our team and believe in ethical SEO practices, which is why clients continue to trust us.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20"/>
        <polyline points="16,24 22,30 34,18"/>
      </svg>
    ),
  },
  {
    title: 'Industry Experience',
    desc: 'Our experience across multiple industries allows us to apply proven strategies that help websites rank higher in Google.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20"/>
        <circle cx="24" cy="24" r="10"/>
        <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    title: 'Hands-Free SEO',
    desc: 'You don\'t have to worry about keeping up with SEO trends—we handle everything for you.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4 L4 14 L4 26 C4 36 13 44 24 46 C35 44 44 36 44 26 L44 14 Z"/>
        <polyline points="16,24 22,30 34,18"/>
      </svg>
    ),
  },
];

const WHAT_WE_DO = [
  { num: '01', title: 'Competitor Analysis', desc: 'We study your competitors to identify gaps and opportunities that help you outperform them.' },
  { num: '02', title: 'Comprehensive SEO Audits', desc: 'We analyze your website using advanced SEO tools to uncover technical and content improvements.' },
  { num: '03', title: 'Targeted Keyword Strategy', desc: 'We focus on high-intent search terms based on market trends, user behavior, and competitor data.' },
  { num: '04', title: 'Link Building Strategies', desc: 'We build high-quality backlinks safely to improve authority without risking penalties.' },
  { num: '05', title: 'Website Optimisation', desc: 'We optimize site structure and performance to improve search engine rankings.' },
];

const FAQS = [
  { q: 'Why is local SEO important for businesses in Dubai?', a: 'Local SEO helps businesses appear in search results when customers are actively looking for nearby services, increasing visibility and conversions.' },
  { q: 'How does SEO help generate more customers?', a: 'SEO improves website rankings, which drives targeted traffic and turns visitors into qualified leads and customers.' },
  { q: 'Do you follow Google SEO best practices?', a: 'Yes. All our SEO strategies follow Google guidelines and industry best practices to ensure sustainable growth.' },
  { q: 'Is SEO suitable for small and local businesses?', a: 'Yes. SEO is especially effective for local businesses looking to compete in their market and attract ready-to-buy customers.' },
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

export default function SeoPerformancePage() {
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
            <span>SEO &amp; Performance</span>
          </nav>
          <p className="svc-hero-eyebrow">#Best</p>
          <h1 className="svc-hero-h1">Local SEO Services in Dubai</h1>
          <p className="svc-hero-sub">We optimize your digital presence to rank higher, attract quality traffic, and improve long-term performance. Our SEO strategies are data-led, ethical, and focused on sustainable growth.</p>
          <div className="svc-hero-btns">
            <Link href="/contact" className="svc-btn-primary">
              Get a Proposal
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/contact" className="svc-btn-outline">Get Your Free SEO Consultation</Link>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="cb-section">
        <div className="container">
          <span data-reveal className="section-label">The Best Local SEO Agency in Dubai</span>
          <h2 data-reveal className="cb-section-h2">Local SEO that <span className="gradient-text">drives real results</span></h2>
          <div className="wad-intro-2col">
            <div className="wad-intro-2col-left">
              <p className="wad-para">Is it easy for potential customers to find your company online? Our local SEO services in Dubai help improve search engine rankings and attract more visitors.</p>
              <p className="wad-para">Local SEO brings people who are ready to buy your products or services. Strengthen your online presence by working with a top local SEO company in Dubai.</p>
              <p className="wad-para">Wide Wings Media is a local SEO company in Dubai, UAE. We provide high-quality search engine optimization services focused on delivering measurable results.</p>
              <div className="wad-watermark" aria-hidden="true">Wide Wings</div>
            </div>
            <div className="wad-intro-2col-right">
              <p className="wad-para">We increase organic traffic, conversions, and leads by ranking websites for high-value business keywords using proven SEO strategies in Dubai.</p>
              <p className="wad-para">Our technical SEO experts ensure your website gets the technical attention it needs to rank in top search results.</p>
              <p className="wad-para">Our goal is not only to increase visibility but also to increase long-term business value and revenue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section className="cb-section cb-section-alt">
        <div className="container">
          <span data-reveal className="section-label">Expertise &amp; Insights</span>
          <h2 data-reveal className="cb-section-h2">Best SEO services in Dubai by a <span className="gradient-text">leading local SEO company</span></h2>
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

      {/* ── PROVEN STRATEGIES ── */}
      <section className="cb-section cb-section-alt">
        <div className="container">
          <span data-reveal className="section-label">Why Choose Us</span>
          <h2 data-reveal className="cb-section-h2">Grow your business with <span className="gradient-text">proven SEO strategies</span></h2>
          <div className="wad-expertise-split">
            <div data-reveal className="wad-expertise-left">
              <p className="wad-para">Choosing the right SEO agency in Dubai can have a major impact on your online success.</p>
              <p className="wad-para">Wide Wings Media stands out through innovative strategies, skilled professionals, and measurable results.</p>
              <p className="wad-para">We build custom SEO plans tailored to the Dubai marketplace and your business goals.</p>
            </div>
            <div data-reveal data-reveal-delay="120" className="wad-expertise-right">
              <div className="wad-medical-card">
                <div className="wad-medical-card-header">
                  <div className="wad-medical-icon">
                    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="24" cy="24" r="20"/>
                      <polyline points="16,24 22,30 34,18"/>
                    </svg>
                  </div>
                  <h3>Long-term visibility, brand trust, and sustainable growth.</h3>
                </div>
                <p className="wad-para">Our focus is on long-term visibility, brand trust, and sustainable growth through ethical SEO practices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DELIVER ── */}
      <section className="cb-section cb-section-dark">
        <div className="container">
          <span data-reveal className="section-label">Local SEO Services in Dubai for All Businesses</span>
          <h2 data-reveal className="cb-section-h2">What we <span className="gradient-text">deliver</span></h2>
          <div className="cb-services-grid">
            {WHAT_WE_DO.map((s, i) => (
              <div key={s.num} data-reveal data-reveal-delay={`${i * 80}`} className="cb-svc-card">
                <div className="cb-svc-num">{s.num}</div>
                <h3 className="cb-svc-title">{s.title}</h3>
                <p className="cb-svc-desc">{s.desc}</p>
              </div>
            ))}
            <div data-reveal data-reveal-delay="400" className="cb-svc-card wad-cta-card">
              <p className="wad-cta-card-text">Rank Higher and Grow with Local SEO in Dubai</p>
              <Link href="/contact" className="svc-btn-primary wad-cta-card-btn">
                Get Your Free SEO Consultation
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
          <h2 data-reveal className="cb-cta-h2">Rank Higher and Grow<br /><span className="gradient-text">with Local SEO</span></h2>
          <p data-reveal className="cb-cta-body">Work with a trusted local SEO agency in Dubai and turn search traffic into real business growth.</p>
          <div data-reveal className="cb-cta-btns">
            <Link href="/contact" className="svc-btn-primary">
              Get Your Free SEO Consultation
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/contact" className="svc-btn-outline cb-cta-outline">Free Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
