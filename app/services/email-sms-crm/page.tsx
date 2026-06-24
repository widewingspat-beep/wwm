import React from 'react';
import Link from 'next/link';
import '../services.css';
import '../service-page.css';
import './email-sms-crm.css';

const EXPERTISE = [
  {
    title: 'Automation Flows',
    desc: 'Automated flows keep your brand in motion, even when you\'re off the clock. From welcome emails to abandoned cart recovery and retention journeys, we build systems that guide your customers with precision and timing. Our email marketing automation services in Dubai and the UAE are designed to increase conversions, recover lost sales, and improve long-term customer engagement.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20"/>
        <path d="M16 24 L22 18 L22 30 Z" fill="currentColor" stroke="none"/>
        <path d="M26 24 L32 18 L32 30 Z" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    title: 'Campaign Strategy',
    desc: 'A strong campaign is like catching the right wind, it carries your message further with less resistance. We develop data-driven campaign strategies and content that align with your goals and audience behavior. As a performance marketing and email marketing agency in the UAE, we ensure every campaign is built to drive measurable results.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6,38 18,26 28,32 42,14"/>
        <polyline points="34,14 42,14 42,22"/>
        <circle cx="8" cy="40" r="3" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    title: 'Segmentation & Personalisation',
    desc: 'Segmentation and personalization bring you closer to your audience, not further from them. We use CRM insights to deliver tailored messages based on behavior, preferences, and lifecycle stage. Our CRM marketing services in Dubai help brands improve targeting, increase engagement rates, and maximize customer lifetime value.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20"/>
        <circle cx="24" cy="24" r="10"/>
        <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    title: 'Testing & Optimisation',
    desc: 'Through continuous testing and optimization, we refine your strategy mid-flight. From A/B testing to performance tracking, we analyze what works and scale it. Our marketing analytics and optimization services in the UAE provide clear reporting, actionable insights, and continuous growth opportunities—so every campaign performs better than the last.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="40" height="40" rx="3"/>
        <rect x="10" y="20" width="8" height="18" rx="1"/>
        <rect x="22" y="12" width="8" height="26" rx="1"/>
        <rect x="34" y="16" width="8" height="22" rx="1"/>
      </svg>
    ),
  },
  {
    title: 'Feedback & Loyalty',
    desc: 'And because every interaction matters, we implement structured feedback follow-ups to close the loop. By integrating customer feedback systems within your CRM, we help you improve retention, enhance customer experience, and build stronger brand loyalty across the MENA market. High-quality content, you don\'t just show up—you build a nest of trust, layer by layer, until your audience sees you as a name worth returning to.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 42 C24 42 6 30 6 18 A10 10 0 0 1 24 14 A10 10 0 0 1 42 18 C42 30 24 42 24 42Z"/>
      </svg>
    ),
  },
];

const WHAT_WE_DO = [
  { num: '01', title: 'High ROI', desc: 'Email marketing consistently delivers one of the highest returns on investment.' },
  { num: '02', title: 'Customer Loyalty', desc: 'Regular, valuable communication keeps your brand top-of-mind.' },
  { num: '03', title: 'Automated Revenue', desc: 'Set-and-forget flows generate sales automatically.' },
  { num: '04', title: 'Advanced Segmentation', desc: 'Target users precisely based on their purchase history and behavior.' },
];

const FAQS = [
  { q: 'What CRM platforms do you work with?', a: 'We work with major platforms like HubSpot, Salesforce, Klaviyo, Mailchimp, and others.' },
  { q: 'Is SMS marketing intrusive?', a: 'Not when done right. We follow best practices to ensure messages are valuable and timely, not spammy.' },
  { q: 'How do you measure success?', a: 'We track Open Rate, Click-Through Rate (CTR), Conversion Rate, and Revenue per Recipient.' },
  { q: 'Can you help build my email list?', a: 'Yes. We implement lead generation strategies like pop-ups and lead magnets to grow your database.' },
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

export default function EmailSmsCrmPage() {
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
            <span>Email, SMS &amp; CRM</span>
          </nav>
          <p className="svc-hero-eyebrow">Direct Value</p>
          <h1 className="svc-hero-h1">EMAIL MARKETING THAT<br />ACTUALLY CONVERTS</h1>
          <p className="svc-hero-sub">We create campaigns that people open, read, and act on. From welcome flows to retention sequences, every message has a purpose and a result behind it.</p>
          <div className="svc-hero-btns">
            <Link href="/contact" className="svc-btn-primary">
              Get a Proposal
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="cb-section">
        <div className="container">
          <span data-reveal className="section-label">Built for Performance, Not Noise</span>
          <h2 data-reveal className="cb-section-h2">Email that <span className="gradient-text">drives revenue</span></h2>
          <div className="wad-intro-2col">
            <div className="wad-intro-2col-left">
              <p className="wad-para">Winning a customer is just the beginning. At Wide Wings Media, we focus on increasing lifetime value through strategic Email, SMS, and CRM-driven marketing.</p>
              <p className="wad-para">We turn your data into smart, automated journeys that guide leads, onboard new customers, and bring inactive users back into the loop.</p>
              <p className="wad-para">Email marketing continues to deliver exceptional ROI. We create visually refined, mobile-optimized campaigns designed to drive open and meaningful engagement.</p>
              <div className="wad-watermark" aria-hidden="true">Wide Wings</div>
            </div>
            <div className="wad-intro-2col-right">
              <p className="wad-para">SMS marketing delivers immediate impact, making it ideal for urgent promotions and time-sensitive communication.</p>
              <p className="wad-para">Using CRM insights, we ensure every message is timely, relevant, and delivered to the right audience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section className="cb-section cb-section-alt">
        <div className="container">
          <span data-reveal className="section-label">Expertise &amp; Insights</span>
          <h2 data-reveal className="cb-section-h2">We don&apos;t do random <span className="gradient-text">newsletters.</span></h2>
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

      {/* ── REVENUE CHANNEL ── */}
      <section className="cb-section cb-section-alt">
        <div className="container">
          <span data-reveal className="section-label">Performance</span>
          <h2 data-reveal className="cb-section-h2">More than emails. It&apos;s a <span className="gradient-text">revenue channel.</span></h2>
          <div className="wad-expertise-split">
            <div data-reveal className="wad-expertise-left">
              <p className="wad-para">If you&apos;re wondering what email marketing should actually do, it should move users from attention to action, consistently.</p>
              <p className="wad-para">We design branded templates and write persuasive copy for your campaigns and flows.</p>
              <p className="wad-para">We set up complex automation triggers based on user behavior (e.g., abandoned cart, birthday, post-purchase).</p>
            </div>
            <div data-reveal data-reveal-delay="120" className="wad-expertise-right">
              <div className="wad-medical-card">
                <div className="wad-medical-card-header">
                  <div className="wad-medical-icon">
                    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6,38 18,26 28,32 42,14"/>
                      <polyline points="34,14 42,14 42,22"/>
                    </svg>
                  </div>
                  <h3>Regular A/B testing ensures we are constantly improving performance.</h3>
                </div>
                <p className="wad-para">Regular A/B testing of subject lines and content ensures we are constantly improving performance across every campaign we run.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DELIVER ── */}
      <section className="cb-section cb-section-dark">
        <div className="container">
          <span data-reveal className="section-label">Unlock Hidden Revenue in Your Database</span>
          <h2 data-reveal className="cb-section-h2">What we <span className="gradient-text">deliver</span></h2>
          <div className="cb-services-grid">
            {WHAT_WE_DO.map((s, i) => (
              <div key={s.num} data-reveal data-reveal-delay={`${i * 80}`} className="cb-svc-card">
                <div className="cb-svc-num">{s.num}</div>
                <h3 className="cb-svc-title">{s.title}</h3>
                <p className="cb-svc-desc">{s.desc}</p>
              </div>
            ))}
            <div data-reveal data-reveal-delay="320" className="cb-svc-card wad-cta-card">
              <p className="wad-cta-card-text">Turn Subscribers into Loyal Customers</p>
              <Link href="/contact" className="svc-btn-primary wad-cta-card-btn">
                Audit My CRM Strategy
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
          <span data-reveal className="section-label">Stay Ahead of the Game</span>
          <h2 data-reveal className="cb-cta-h2">Turn Subscribers into<br /><span className="gradient-text">Loyal Customers</span></h2>
          <p data-reveal className="cb-cta-body">Use your customer data to the optimal point, build relationships that last and drive repeat sales.</p>
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
