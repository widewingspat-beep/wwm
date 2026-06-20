'use client';

import { useState } from 'react';
import Link from 'next/link';
import './creative-branding.css';

const faqs = [
  {
    q: 'What is included in a branding package?',
    a: 'Our branding packages include logo design, colour palette development, typography selection, brand voice guidelines, stationery design, and a full brand identity guide. We tailor every package to the specific needs of your business and industry.',
  },
  {
    q: 'How long does the branding process take?',
    a: 'A complete branding project typically takes 3–6 weeks depending on scope, revisions, and client feedback cycles. We keep you informed at every stage and ensure timely delivery without compromising quality.',
  },
  {
    q: 'Do you offer re-branding services?',
    a: 'Yes, we specialise in both new brand creation and brand evolution. Whether you need a subtle refresh or a full repositioning, our team analyses your current brand equity and builds on what works while addressing what needs to change.',
  },
  {
    q: 'Can you help with naming my business?',
    a: 'Absolutely. Brand naming is one of the most critical steps in building a brand. We conduct market research, competitor analysis, and linguistic checks to develop a name that is memorable, ownable, and strategically aligned with your positioning.',
  },
];

export default function CreativeBrandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      {/* ── HERO ── */}
      <section id="cb-hero">
        <div className="cb-hero-bg" />
        <div className="cb-hero-glow-1" />
        <div className="cb-hero-glow-2" />
        <div className="cb-hero-inner">
          <div>
            <div className="cb-hero-badge">
              <div className="cb-hero-badge-dot" />
              <span>Creative &amp; Branding</span>
            </div>
            <h1 className="cb-hero-h1">
              Build a brand people<br />
              <em>don&apos;t scroll past</em>
            </h1>
            <p className="cb-hero-sub">
              Not every brand needs more noise. Most need clarity. We design brands that communicate with precision — so your audience knows exactly who you are and why they should choose you.
            </p>
            <div className="cb-hero-actions">
              <Link href="/contact" className="btn-primary">
                Get a Proposal
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <Link href="/contact" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,.25)', color: '#fff' }}>
                Request a Creative Quote
              </Link>
            </div>
          </div>
          <div className="cb-hero-visual">
            <div className="cb-stat-cards">
              {[
                { num: '5+', lbl: 'Years of Branding Excellence' },
                { num: '62+', lbl: 'Brands Built &amp; Evolved' },
                { num: '11+', lbl: 'Countries We Serve' },
                { num: '100%', lbl: 'Custom, No Templates' },
              ].map((s, i) => (
                <div key={i} className="cb-stat-card">
                  <div className="cb-stat-num">{s.num}</div>
                  <div className="cb-stat-lbl" dangerouslySetInnerHTML={{ __html: s.lbl }} />
                </div>
              ))}
            </div>
            <div className="cb-hero-tag">
              {['Logo Design', 'Brand Identity', 'Visual Systems', 'Packaging', 'Brand Guidelines', 'Copywriting'].map(t => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="cb-services">
        <div className="container">
          <div className="cb-services-header">
            <span className="section-label">What We Do</span>
            <h2 className="cb-services-h2">
              Soar your persona through <span className="gradient-text">branding</span>
            </h2>
            <p className="cb-services-sub">
              Design is communication, not decoration. Every element we create serves a purpose — to attract the right audience and convert them into loyal customers.
            </p>
          </div>
          <div className="cb-services-grid">
            {[
              {
                num: '01',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="url(#sg1)" strokeWidth="1.8">
                    <defs><linearGradient id="sg1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#b62d83"/><stop offset="1" stopColor="#cfa821"/></linearGradient></defs>
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                  </svg>
                ),
                title: 'Brand Strategy',
                desc: 'We define how your brand thinks, speaks, and shows up across every touchpoint. A strong brand strategy is the foundation everything else is built on — without it, design is just decoration.',
                tags: ['Positioning', 'Messaging Framework', 'Tone of Voice', 'Audience Research'],
              },
              {
                num: '02',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="url(#sg2)" strokeWidth="1.8">
                    <defs><linearGradient id="sg2" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#b62d83"/><stop offset="1" stopColor="#cfa821"/></linearGradient></defs>
                    <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
                  </svg>
                ),
                title: 'Visual Identity & Design',
                desc: 'We create identities that are consistent, memorable, and flexible enough to work across every format — from your logo and brand guidelines to social media systems and print assets.',
                tags: ['Logo Design', 'Brand Guidelines', 'Social Media Kits', 'Print Assets'],
              },
              {
                num: '03',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="url(#sg3)" strokeWidth="1.8">
                    <defs><linearGradient id="sg3" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#b62d83"/><stop offset="1" stopColor="#cfa821"/></linearGradient></defs>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ),
                title: 'Strategic Branding',
                desc: 'Every decision we make ties back to how your brand performs in the real world. We blend creative instinct with strategic thinking to ensure your brand not only looks great but delivers measurable business results.',
                tags: ['Competitive Analysis', 'Brand Positioning', 'Market Research', 'Brand Audits'],
              },
              {
                num: '04',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="url(#sg4)" strokeWidth="1.8">
                    <defs><linearGradient id="sg4" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#b62d83"/><stop offset="1" stopColor="#cfa821"/></linearGradient></defs>
                    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
                  </svg>
                ),
                title: 'Clarity &amp; Creative Impact',
                desc: 'We deliver marketing creatives, campaign visuals, digital assets, presentation design, and print materials — all built with a single goal: making your brand impossible to ignore.',
                tags: ['Campaign Visuals', 'Digital Assets', 'Presentation Design', 'Packaging'],
              },
            ].map(svc => (
              <div key={svc.num} className="cb-svc-item">
                <div className="cb-svc-num">{svc.num}</div>
                <div className="cb-svc-icon">{svc.icon}</div>
                <div className="cb-svc-title" dangerouslySetInnerHTML={{ __html: svc.title }} />
                <p className="cb-svc-desc">{svc.desc}</p>
                <div className="cb-svc-tags">
                  {svc.tags.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section id="cb-expertise">
        <div className="watermark">BRANDING</div>
        <div className="container">
          <div className="cb-exp-grid">
            <div>
              <div className="cb-exp-label">Our Expertise</div>
              <h2 className="cb-exp-h2">
                A creative agency that<br />
                <span className="gradient-text">builds brands</span> that perform
              </h2>
              <p className="cb-exp-body">
                Our in-house creative team covers the full spectrum — from visual communication and copywriting to video production and content strategy. We don&apos;t just make things look good. We make them work.
              </p>
              <Link href="/contact" className="btn-primary">Start Your Brand Journey</Link>
            </div>
            <div className="cb-exp-items">
              {[
                {
                  icon: <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></>,
                  title: 'Visual Communication',
                  desc: 'Attention-grabbing visuals that communicate your message clearly and consistently across every platform and format.',
                },
                {
                  icon: <><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></>,
                  title: 'Copywriting & Messaging',
                  desc: 'Persuasive, on-brand messaging for website content, ad scripts, social captions, and campaign copy that converts.',
                },
                {
                  icon: <><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></>,
                  title: 'Video Production',
                  desc: 'Short-form and long-form video content crafted for engagement, conversion, and brand awareness across social and digital channels.',
                },
                {
                  icon: <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></>,
                  title: 'Design Evolution',
                  desc: 'We keep your brand fresh and relevant — continuously evolving your visual identity in line with market trends and audience expectations.',
                },
                {
                  icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></>,
                  title: 'Content Delivery',
                  desc: 'Consistent, high-quality content delivered on schedule — building brand credibility and keeping your marketing channels active.',
                },
              ].map((item, i) => (
                <div key={i} className="cb-exp-item">
                  <div className="cb-exp-dot">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">{item.icon}</svg>
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="cb-process">
        <div className="cb-process-glow" />
        <div className="container">
          <div className="cb-process-header">
            <span className="section-label" style={{ color: '#cfa821' }}>Our Process</span>
            <h2 className="cb-process-h2">Wide Wings Gives You <span className="gradient-text">Wings!</span></h2>
            <p className="cb-process-sub">A structured creative process that ensures every brand we build is rooted in strategy, refined through collaboration, and delivered with impact.</p>
          </div>
          <div className="cb-process-steps">
            {[
              {
                num: '01',
                icon: <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></>,
                title: 'Strategy & Messaging',
                desc: 'Speak your truth through scripts and strategies that tell your brand\'s story and deliver your message to the right audience with clarity and conviction.',
              },
              {
                num: '02',
                icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
                title: 'Feedback & Delivery',
                desc: 'You get exactly what you ask for. We leave safe space for feedback at every stage, ensuring the final output aligns perfectly with your vision and business goals.',
              },
              {
                num: '03',
                icon: <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></>,
                title: 'Flexibility & Execution',
                desc: 'Flexibility and punctuality are two sides of our coin. We keep your marketing channels active and your brand consistently showing up — on time, every time.',
              },
            ].map((step, i) => (
              <div key={i} className="cb-process-step">
                <div className="cb-step-num">{step.num}</div>
                <div className="cb-step-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">{step.icon}</svg>
                </div>
                <div className="cb-step-title">{step.title}</div>
                <p className="cb-step-desc">{step.desc}</p>
                <div className="cb-step-accent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section id="cb-why">
        <div className="container">
          <div className="cb-why-grid">
            <div>
              <span className="section-label">Why Wide Wings</span>
              <h2 className="cb-why-h2">
                A branding agency that thinks<br />
                <span className="gradient-text">beyond the logo</span>
              </h2>
              <p className="cb-why-body">
                We combine strategic intelligence with world-class design craft. Our team has built and evolved brands across hospitality, real estate, healthcare, retail, and tech — giving us the cross-industry experience to make your brand stand out in any market.
              </p>
              <Link href="/contact" className="btn-primary">Let&apos;s Build Your Brand</Link>
            </div>
            <ul className="cb-why-list">
              {[
                {
                  icon: <><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></>,
                  title: 'Strategic Approach',
                  desc: 'Every creative decision is aligned with your business goals. We don\'t create for aesthetics alone — we create for performance.',
                },
                {
                  icon: <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>,
                  title: 'World-Class Design',
                  desc: 'Our award-winning designers create beautiful, functional visuals that make your brand look as credible as it is.',
                },
                {
                  icon: <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></>,
                  title: 'Full-Service Agency',
                  desc: 'Your branding extends seamlessly into web, social, advertising, and beyond. One team, total brand consistency.',
                },
                {
                  icon: <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>,
                  title: 'UAE & GCC Market Expertise',
                  desc: 'We understand the cultural nuances, consumer behaviours, and competitive landscape of the Dubai and GCC market inside out.',
                },
              ].map((item, i) => (
                <li key={i} className="cb-why-item">
                  <div className="cb-why-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#a73184" strokeWidth="2">{item.icon}</svg>
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="cb-faq">
        <div className="container">
          <div className="cb-faq-header">
            <span className="section-label">Got Questions?</span>
            <h2 className="cb-faq-h2">Frequently Asked <span className="gradient-text">Questions</span></h2>
            <p className="cb-faq-sub">Everything you need to know about our creative and branding services.</p>
          </div>
          <div className="cb-faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`cb-faq-item${openFaq === i ? ' open' : ''}`}>
                <div className="cb-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="cb-faq-icon">+</span>
                </div>
                <div className="cb-faq-a">
                  <div className="cb-faq-a-inner">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="cb-cta">
        <div className="container">
          <div className="cb-cta-label">Start Your Project</div>
          <h2 className="cb-cta-h2">Build a brand that <em>actually works.</em></h2>
          <p className="cb-cta-sub">
            Start your project with a leading branding agency in Dubai. We&apos;ll help you create a brand identity that resonates, differentiates, and drives real business growth.
          </p>
          <div className="cb-cta-actions">
            <Link href="/contact" className="btn-white">
              Free Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/services" className="btn-ghost">View All Services</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
