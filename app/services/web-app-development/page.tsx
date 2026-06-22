import React from 'react';
import Link from 'next/link';
import '../services.css';
import '../service-page.css';
import './web-app-development.css';

const WHAT_WE_DO = [
  { num: '01', title: 'Web design that has won awards', desc: 'We combine design and digital marketing to help businesses grow revenue online.' },
  { num: '02', title: 'Strategy and consultancy for websites', desc: 'We help businesses with complex needs, multi-country operations, and large website ecosystems.' },
  { num: '03', title: 'Content creation for websites', desc: 'We produce written content, photos, and videos that support your digital presence.' },
  { num: '04', title: 'Full website design services', desc: 'We design award-winning websites that improve reputation and increase sales.' },
  { num: '05', title: 'Transparent pricing', desc: 'Clear pricing and custom solutions tailored to your business goals and industry.' },
];

const FAQS = [
  { q: 'Is static web design a good choice?', a: 'Static websites are a good choice for small websites that are meant for short-term use, like events and personal portfolio websites. If you want to market your business, a custom-designed dynamic website is recommended.' },
  { q: 'Are WordPress websites better than custom websites?', a: "If you don't have a large budget, WordPress is a good option. It offers many templates and allows you to launch quickly. However, custom-designed websites usually deliver better results but cost more." },
  { q: 'What is the difference between web design and web development?', a: 'Web design focuses on UI and UX, while web development involves coding and programming the website to connect with databases and display content dynamically.' },
  { q: 'Is Webflow a good option for website design?', a: 'Webflow has been a reliable platform for over 10 years and is suitable for small and medium businesses. However, it has limitations when it comes to custom functionality.' },
];

const HOSTING = [
  {
    title: 'Launch & Hosting',
    desc: 'Once we finish designing your website, we will launch it and provide you with secure hosting and website care plans to ensure smooth performance.',
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10" width="40" height="28" rx="3"/><line x1="4" y1="18" x2="44" y2="18"/><circle cx="10" cy="14" r="1.5" fill="currentColor"/><circle cx="16" cy="14" r="1.5" fill="currentColor"/></svg>,
  },
  {
    title: 'Care Plans',
    desc: 'Our care plans give you peace of mind and full support. Even if we\'re not developing your website, we can still host it as part of our marketing partnership.',
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M24 4 L44 14 L44 26 C44 36 35 43 24 46 C13 43 4 36 4 26 L4 14 Z"/><polyline points="16,24 21,29 32,18"/></svg>,
  },
  {
    title: 'Ongoing Maintenance',
    desc: 'We offer ongoing maintenance to keep your website updated, secure, and functional, including security checks, software updates, and bug fixes.',
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="24" cy="24" r="20"/><line x1="24" y1="4" x2="24" y2="44"/><path d="M4 24 Q14 16 24 24 Q34 32 44 24"/><path d="M4 24 Q14 32 24 24 Q34 16 44 24"/></svg>,
  },
  {
    title: 'Content Writing',
    desc: 'Our content writers help craft brand messages, build a strong brand voice, and improve your website\'s usability and visibility.',
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="6" width="36" height="36" rx="3"/><line x1="14" y1="18" x2="34" y2="18"/><line x1="14" y1="24" x2="34" y2="24"/><line x1="14" y1="30" x2="24" y2="30"/></svg>,
  },
  {
    title: 'Dedicated Support',
    desc: 'Each client gets an experienced designer and a dedicated account manager to support every step of the project.',
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="24" cy="16" r="8"/><path d="M8 40 C8 32 15 26 24 26 C33 26 40 32 40 40"/><circle cx="38" cy="20" r="5"/><line x1="38" y1="26" x2="38" y2="34"/></svg>,
  },
  {
    title: 'Full Team',
    desc: "You'll have a full team working to deliver a website that attracts, converts, and educates new and existing patients.",
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="14" cy="20" r="6"/><circle cx="34" cy="20" r="6"/><circle cx="24" cy="34" r="6"/><line x1="19" y1="23" x2="22" y2="29"/><line x1="29" y1="23" x2="26" y2="29"/></svg>,
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

      {/* ── Section 1: Your Top Web Design Company ── */}
      <section className="cb-section">
        <div className="container">
          <div className="wad-split">
            {/* Left: text */}
            <div className="wad-split-text" data-reveal>
              <span className="section-label">Your Top Web Design Company in Dubai</span>
              <h2 className="cb-section-h2" style={{ marginTop: '12px' }}>
                Websites that <span className="gradient-text">drive real growth</span>
              </h2>
              <p className="wad-lead">Wide Wings Media is a marketing leader in web development and design in the UAE — providing affordable, modern, and responsive websites across Dubai, Abu Dhabi, and Sharjah.</p>
              <ul className="wad-bullets">
                <li>Chosen as the <strong>best medical web design company in Dubai</strong> by one of the city&apos;s top hospitals</li>
                <li>Specializing in <strong>custom websites, WordPress, Sitecore,</strong> and immersive 3D web experiences</li>
                <li>Your website is the <strong>first digital encounter</strong> between your brand and potential customers — we make it count</li>
                <li>Beautiful, results-driven websites that <strong>attract your target audience</strong> and reflect your brand&apos;s success</li>
                <li>Committed to delivering <strong>tangible results</strong> and extended business growth across multiple industries</li>
              </ul>
            </div>
            {/* Right: browser illustration SVG */}
            <div className="wad-split-visual" data-reveal data-reveal-delay="120">
              <svg className="wad-browser-svg" viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Browser chrome */}
                <rect x="20" y="20" width="440" height="320" rx="12" fill="#0d0d20" stroke="#a73184" strokeWidth="1.5"/>
                <rect x="20" y="20" width="440" height="44" rx="12" fill="#1a1a35"/>
                <rect x="20" y="52" width="440" height="12" fill="#1a1a35"/>
                {/* Traffic lights */}
                <circle cx="48" cy="42" r="7" fill="#FF5F57"/>
                <circle cx="70" cy="42" r="7" fill="#FEBC2E"/>
                <circle cx="92" cy="42" r="7" fill="#28C840"/>
                {/* URL bar */}
                <rect x="110" y="32" width="260" height="20" rx="4" fill="#0d0d20" stroke="#333" strokeWidth="1"/>
                <text x="120" y="46" fontFamily="Calibri, sans-serif" fontSize="10" fill="#888">wide-wings.ae</text>
                {/* Page hero area */}
                <rect x="36" y="72" width="408" height="110" rx="6" fill="#1a1a35"/>
                <rect x="36" y="72" width="408" height="110" rx="6" fill="url(#wadGrad1)"/>
                <text x="240" y="120" textAnchor="middle" fontFamily="Nexa, sans-serif" fontSize="18" fontWeight="700" fill="white">Your Brand. Online. Powerful.</text>
                <text x="240" y="142" textAnchor="middle" fontFamily="Calibri, sans-serif" fontSize="11" fill="rgba(255,255,255,0.6)">Award-winning web design in Dubai</text>
                <rect x="170" y="155" width="90" height="18" rx="4" fill="#a73184"/>
                <text x="215" y="168" textAnchor="middle" fontFamily="Calibri, sans-serif" fontSize="9" fill="white">Get a Proposal</text>
                <rect x="268" y="155" width="80" height="18" rx="4" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
                <text x="308" y="168" textAnchor="middle" fontFamily="Calibri, sans-serif" fontSize="9" fill="rgba(255,255,255,0.7)">Learn More</text>
                {/* Nav items */}
                <text x="140" y="46" fontFamily="Calibri, sans-serif" fontSize="9" fill="#a73184">⚡</text>
                {/* Content cards */}
                <rect x="36" y="194" width="124" height="74" rx="6" fill="#1a1a35" stroke="#a73184" strokeWidth="1"/>
                <rect x="46" y="204" width="30" height="30" rx="4" fill="#a73184" opacity="0.3"/>
                <rect x="48" y="206" width="26" height="26" rx="3" fill="none" stroke="#a73184" strokeWidth="1.5"/>
                <text x="61" y="223" textAnchor="middle" fontFamily="Calibri, sans-serif" fontSize="12" fill="#a73184">✦</text>
                <text x="82" y="218" fontFamily="Calibri, sans-serif" fontSize="9" fontWeight="700" fill="white">Web Design</text>
                <text x="46" y="248" fontFamily="Calibri, sans-serif" fontSize="8" fill="#888">Custom &amp; responsive</text>
                <text x="46" y="260" fontFamily="Calibri, sans-serif" fontSize="8" fill="#888">sites that convert</text>

                <rect x="172" y="194" width="124" height="74" rx="6" fill="#1a1a35" stroke="#cfa821" strokeWidth="1"/>
                <rect x="182" y="204" width="30" height="30" rx="4" fill="#cfa821" opacity="0.3"/>
                <rect x="184" y="206" width="26" height="26" rx="3" fill="none" stroke="#cfa821" strokeWidth="1.5"/>
                <text x="197" y="223" textAnchor="middle" fontFamily="Calibri, sans-serif" fontSize="12" fill="#cfa821">◈</text>
                <text x="218" y="218" fontFamily="Calibri, sans-serif" fontSize="9" fontWeight="700" fill="white">SEO Ready</text>
                <text x="182" y="248" fontFamily="Calibri, sans-serif" fontSize="8" fill="#888">Built for search</text>
                <text x="182" y="260" fontFamily="Calibri, sans-serif" fontSize="8" fill="#888">engines from day one</text>

                <rect x="308" y="194" width="128" height="74" rx="6" fill="#1a1a35" stroke="#4CC9F0" strokeWidth="1"/>
                <rect x="318" y="204" width="30" height="30" rx="4" fill="#4CC9F0" opacity="0.2"/>
                <rect x="320" y="206" width="26" height="26" rx="3" fill="none" stroke="#4CC9F0" strokeWidth="1.5"/>
                <text x="333" y="223" textAnchor="middle" fontFamily="Calibri, sans-serif" fontSize="12" fill="#4CC9F0">⬡</text>
                <text x="354" y="218" fontFamily="Calibri, sans-serif" fontSize="9" fontWeight="700" fill="white">Mobile First</text>
                <text x="318" y="248" fontFamily="Calibri, sans-serif" fontSize="8" fill="#888">Perfect on every</text>
                <text x="318" y="260" fontFamily="Calibri, sans-serif" fontSize="8" fill="#888">device and screen</text>

                {/* Stats bar */}
                <rect x="36" y="280" width="408" height="44" rx="6" fill="#1a1a35"/>
                <text x="96" y="298" textAnchor="middle" fontFamily="Nexa, sans-serif" fontSize="16" fontWeight="700" fill="#a73184">10+</text>
                <text x="96" y="314" textAnchor="middle" fontFamily="Calibri, sans-serif" fontSize="8" fill="#888">Years Experience</text>
                <line x1="168" y1="288" x2="168" y2="316" stroke="#333" strokeWidth="1"/>
                <text x="240" y="298" textAnchor="middle" fontFamily="Nexa, sans-serif" fontSize="16" fontWeight="700" fill="#cfa821">500+</text>
                <text x="240" y="314" textAnchor="middle" fontFamily="Calibri, sans-serif" fontSize="8" fill="#888">Projects Delivered</text>
                <line x1="312" y1="288" x2="312" y2="316" stroke="#333" strokeWidth="1"/>
                <text x="384" y="298" textAnchor="middle" fontFamily="Nexa, sans-serif" fontSize="16" fontWeight="700" fill="#4CC9F0">UAE</text>
                <text x="384" y="314" textAnchor="middle" fontFamily="Calibri, sans-serif" fontSize="8" fill="#888">Dubai · Abu Dhabi · Sharjah</text>

                <defs>
                  <linearGradient id="wadGrad1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#a73184" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#0d0d20" stopOpacity="0.2"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Expertise & Insights ── */}
      <section className="cb-section cb-section-alt">
        <div className="container">
          <span data-reveal className="section-label">Web Design Company in Dubai: For all Types of Industries</span>
          <h2 data-reveal className="cb-section-h2">Expertise &amp; <span className="gradient-text">Insights</span></h2>

          {/* Mobile-first callout */}
          <div data-reveal className="wad-callout-row">
            <div className="wad-callout-stat">
              <div className="wad-callout-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="14" y="4" width="20" height="40" rx="3"/>
                  <line x1="21" y1="38" x2="27" y2="38"/>
                </svg>
              </div>
              <div>
                <div className="wad-stat-num">Mobile First</div>
                <div className="wad-stat-label">Google indexes your mobile site first</div>
              </div>
            </div>
            <div className="wad-callout-stat">
              <div className="wad-callout-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4,36 16,20 24,28 32,14 44,24"/>
                  <polyline points="36,14 44,14 44,22"/>
                </svg>
              </div>
              <div>
                <div className="wad-stat-num">Custom Built</div>
                <div className="wad-stat-label">Tailored to every client&apos;s unique goals</div>
              </div>
            </div>
            <div className="wad-callout-stat">
              <div className="wad-callout-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="24" cy="24" r="20"/>
                  <polyline points="14,24 20,30 34,16"/>
                </svg>
              </div>
              <div>
                <div className="wad-stat-num">Results Driven</div>
                <div className="wad-stat-label">Focused on conversions, not just aesthetics</div>
              </div>
            </div>
          </div>

          {/* Two-column: bullets left, medical right */}
          <div className="wad-expertise-split">
            <div data-reveal className="wad-expertise-left">
              <h3 className="wad-subheading">Why your website matters</h3>
              <ul className="wad-bullets">
                <li>Having a strong online presence is not just a good idea — <strong>businesses need it to thrive and succeed</strong></li>
                <li>Every business is unique. We customize our web development services <strong>for each client&apos;s challenges and goals</strong></li>
                <li>Our expert web designers have extensive experience building websites <strong>for healthcare and patient-facing industries</strong> across all devices</li>
                <li>We create cutting-edge digital experiences that make your website <strong>better than your competitors&apos;</strong></li>
                <li>Improve conversion chances by offering visitors <strong>a positive, frictionless experience</strong> — years of experience in custom-designed websites</li>
              </ul>
            </div>
            <div data-reveal data-reveal-delay="120" className="wad-expertise-right">
              {/* Medical card */}
              <div className="wad-medical-card">
                <div className="wad-medical-card-header">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
                    <path d="M24 4 C14 4 6 12 6 22 C6 34 24 44 24 44 C24 44 42 34 42 22 C42 12 34 4 24 4Z"/>
                    <line x1="24" y1="14" x2="24" y2="30"/><line x1="16" y1="22" x2="32" y2="22"/>
                  </svg>
                  <h3>Designing for Doctors &amp; Dental Practices</h3>
                </div>
                <ul className="wad-bullets wad-bullets--light">
                  <li>Award-winning medical website design agency with patient-focused UX</li>
                  <li>Websites designed to <strong>attract and engage new patients</strong> and rank highly in searches</li>
                  <li>Your medical website is your <strong>digital billboard</strong>, your marketing foundation, and a doorway to patient information</li>
                  <li>Turn your old or slow website into an <strong>award-winning redesign</strong> that leverages digital marketing</li>
                  <li>Just like medicine, your online presence <strong>should always be improving</strong> to meet patient needs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: FAQ ── */}
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

      {/* ── Section 4: Builds and Hosts Websites ── */}
      <section className="cb-section cb-section-alt">
        <div className="container">
          <span data-reveal className="section-label">Web Design Company in Dubai: Builds and Hosts Websites</span>
          <h2 data-reveal className="cb-section-h2">Everything <span className="gradient-text">after launch</span></h2>
          <div className="wad-hosting-grid">
            {HOSTING.map((h, i) => (
              <div key={i} data-reveal data-reveal-delay={`${i * 80}`} className="wad-hosting-card">
                <div className="wad-hosting-icon">{h.icon}</div>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: What We Deliver ── */}
      <section className="cb-section">
        <div className="container">
          <span data-reveal className="section-label">The Best Medical Web Design Company in Dubai</span>
          <h2 data-reveal className="cb-section-h2">What we <span className="gradient-text">deliver</span></h2>
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

      {/* ── CTA ── */}
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
