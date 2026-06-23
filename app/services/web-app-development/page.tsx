import React from 'react';
import Link from 'next/link';
import '../services.css';
import '../service-page.css';
import './web-app-development.css';
import WadExpertiseAccordion from './WadExpertiseAccordion';

const WHAT_WE_DO = [
  {
    title: 'Web design that has won awards',
    desc: 'We combine design and digital marketing to help businesses grow revenue online.',
    icon: (<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M24 4 L44 14 L44 26 C44 36 35 43 24 46 C13 43 4 36 4 26 L4 14 Z"/><polyline points="16,24 22,30 34,18"/></svg>),
  },
  {
    title: 'Strategy and consultancy for websites',
    desc: 'We help businesses with complex needs, multi-country operations, and large website ecosystems.',
    icon: (<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="24" cy="14" r="8"/><path d="M8 44 C8 34 40 34 40 44"/><line x1="32" y1="28" x2="44" y2="28"/><line x1="38" y1="22" x2="38" y2="34"/></svg>),
  },
  {
    title: 'Content creation for websites',
    desc: 'We produce written content, photos, and videos that support your digital presence.',
    icon: (<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="6" width="36" height="28" rx="3"/><line x1="14" y1="16" x2="34" y2="16"/><line x1="14" y1="22" x2="34" y2="22"/><line x1="14" y1="28" x2="24" y2="28"/><polyline points="18,40 24,34 30,40"/></svg>),
  },
  {
    title: 'Full website design services',
    desc: 'We design award-winning websites that improve reputation and increase sales.',
    icon: (<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="8" width="40" height="28" rx="3"/><line x1="4" y1="16" x2="44" y2="16"/><circle cx="9" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="14" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.5" fill="currentColor" stroke="none"/><line x1="16" y1="40" x2="32" y2="40"/><line x1="24" y1="36" x2="24" y2="40"/></svg>),
  },
  {
    title: 'Transparent pricing',
    desc: 'Clear pricing and custom solutions tailored to your business goals and industry.',
    icon: (<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="24" cy="24" r="20"/><line x1="24" y1="12" x2="24" y2="16"/><line x1="24" y1="32" x2="24" y2="36"/><path d="M18 20 C18 16 30 16 30 22 C30 28 18 26 18 32 C18 36 30 36 30 32"/></svg>),
  },
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
    desc: "Our care plans give you peace of mind and full support. Even if we're not developing your website, we can still host it as part of our marketing partnership.",
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M24 4 L44 14 L44 26 C44 36 35 43 24 46 C13 43 4 36 4 26 L4 14 Z"/><polyline points="16,24 21,29 32,18"/></svg>,
  },
  {
    title: 'Ongoing Maintenance',
    desc: 'We offer ongoing maintenance to keep your website updated, secure, and functional, including security checks, software updates, and bug fixes.',
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="24" cy="24" r="20"/><line x1="24" y1="4" x2="24" y2="44"/><path d="M4 24 Q14 16 24 24 Q34 32 44 24"/><path d="M4 24 Q14 32 24 24 Q34 16 44 24"/></svg>,
  },
  {
    title: 'Content Writing',
    desc: "Our content writers help craft brand messages, build a strong brand voice, and improve your website's usability and visibility.",
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

const TECH_ITEMS = ['React', 'Next.js', 'WordPress', 'Webflow', 'Sitecore', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'AWS', 'Vercel', 'MySQL'];

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
    <div className="wad-page">
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
          <p className="svc-hero-eyebrow">Leading</p>
          <h1 className="svc-hero-h1">Web Design Company in Dubai</h1>
          <p className="wad-hero-service-tag-dark">Services</p>
          <p className="svc-hero-sub">We design and develop high-performing websites and mobile applications that are fast, secure, and user-focused. Every build is optimized for user experience, scalability, and business growth.</p>
          <div className="svc-hero-btns">
            <Link href="/contact" className="svc-btn-primary">
              Get a Proposal
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── TECH STRIP ── */}
      <div className="wad-tech-strip" aria-hidden="true">
        <div className="wad-tech-track">
          {[...TECH_ITEMS, ...TECH_ITEMS].map((t, i) => (
            <span key={i} className="wad-tech-pill">{t}</span>
          ))}
        </div>
      </div>

      {/* ── Your Top Web Design Company ── */}
      <section className="cb-section wad-intro-section">
        <div className="wad-section-orb wad-orb-1" aria-hidden="true" />
        <div className="container">
          <div className="wad-exp-layout">
            {/* Left — sticky big title */}
            <div className="wad-exp-title-col" data-reveal>
              <h2 className="wad-exp-big-title">Your Top Web Design Company in Dubai</h2>
              <div className="wad-exp-gold-bar" aria-hidden="true" />
              {/* Stat chips */}
              <div className="wad-chip-row" style={{ marginTop: '28px' }}>
                <div className="wad-chip wad-chip--magenta">
                  <svg width="14" height="14" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M24 4 L44 14 L44 26 C44 36 35 43 24 46 C13 43 4 36 4 26 L4 14 Z"/><polyline points="16,24 21,29 32,18"/></svg>
                  Award Winning
                </div>
                <div className="wad-chip wad-chip--gold">
                  <svg width="14" height="14" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="4,36 16,20 24,28 32,14 44,24"/></svg>
                  500+ Projects
                </div>
                <div className="wad-chip">
                  <svg width="14" height="14" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="24" cy="24" r="20"/><line x1="24" y1="4" x2="24" y2="44"/><path d="M4 24 Q14 16 24 24 Q34 32 44 24"/></svg>
                  10+ Years UAE
                </div>
              </div>
            </div>

            {/* Right — paragraphs */}
            <div className="wad-exp-cards-col" data-reveal data-reveal-delay="80">
              {[
                "Wide Wings Media was chosen as the best medical web design company in Dubai by one of the best hospitals in Dubai. We create good websites for doctors and other medical practices to help them get new patients. Let Wide Wings Media, the best web design company in Dubai, make your online presence better with great websites!",
                "We are a marketing leader in web development and design agencies in the UAE. We provide affordable, modern, and responsive web design services in Dubai, Abu Dhabi, and Sharjah. Hire our talented web designers and developers to create stunning websites that will impress.",
                "We design websites that get results. We specialize in custom websites, personalizing Sitecore and WordPress, 3D experiences, and more.",
                "As the world moves more and more into the digital age, the first and most important digital encounter between potential customers and your brand is through your website. It affects how users see the site and how many people visit and buy things from it.",
                "Wide Wings Media is one of the best web design companies in Dubai. We build websites that are beautiful and work well. These websites help businesses reach their goals. Our talented team combines creativity, strategy, and technology to make websites that attract your target audience and make your Dubai business look successful.",
                "We have successfully changed many businesses in different markets. We are committed to developing excellent digital solutions that deliver tangible results and extended business growth.",
              ].map((text, i) => (
                <div key={i} className="wad-exp-card">
                  <p className="wad-exp-card-text">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Expertise & Insights ── */}
      <section className="cb-section cb-section-alt wad-expertise-section">
        <div className="wad-section-orb wad-orb-2" aria-hidden="true" />
        <div className="container">
          {(() => {
            const EXP_TEXTS = [
              "Did you know that most people now use mobile devices to browse the internet? Google now shows the mobile version of your website first in its search results. So, your medical website design must work perfectly on mobile devices, just like it does on laptops or desktops.",
              "Having a strong online presence is not just a good idea; businesses need to thrive and succeed. Wide Wings Media recognizes this and provides web development services that are customized according to each client's needs.",
              "Every business is different, and every business has its challenges and goals. It's very important to understand this idea if you're working on a website. At Wide Wings Media, we understand that each business is unique. We customize our web development services for each client.",
              "Our team of expert web designers has a lot of experience building websites for healthcare and other industries that work with patients on all devices. Our services are designed to create cutting-edge digital experiences.",
              "Make your website better than your competitors' websites. Make people want to use your website by giving them a great experience. Improve the chances that users will complete a conversion by offering them a positive experience. Our company has been in business for years, and we build custom-designed websites.",
              "Designing websites for doctors and dental practices.",
              "We are an award-winning medical website design agency. We know how to design and develop a website that attracts and engages new patients. Our medical website design process includes making the website easy for patients to use and making sure that it ranks highly in online searches.",
              "The website design for medical practices is made to make the patient experience better and get more new patients. Your medical website is your best tool for digital marketing because it's like your digital billboard, the foundation of your marketing traffic, and a doorway to provide valuable information to patients.",
              "Turn your old or slow-loading website into an award-winning one with our website redesigns. Often, medical websites don't use digital marketing to their advantage.",
              "Many medical websites don't make it easy for people to find what they're looking for. Is it time to check if your website is up to date? Just like medicine, your online presence should always be improving to meet the needs of patients.",
            ];
            return (
              <div className="wad-deliver-2col">
                {/* Col 1 — title + first 2 cards */}
                <div className="wad-deliver-col-small">
                  <h2 data-reveal className="wad-exp-section-title">Web Design Company in Dubai: <span className="wad-exp-title-purple">For all Types of Industries.</span></h2>
                  <p data-reveal className="wad-exp-sub-label" style={{ marginBottom: '16px' }}>Expertise &amp; Insights</p>
                  <div data-reveal className="wad-exp-section-img-wrap">
                    <img src="/webdev.jpg" alt="Web development expertise" className="wad-exp-section-img" />
                  </div>
                  {EXP_TEXTS.slice(0, 2).map((text, i) => (
                    <div key={i} data-reveal data-reveal-delay={`${i * 80}`} className="wad-exp-card">
                      <p className="wad-exp-card-text">{text}</p>
                    </div>
                  ))}
                </div>
                {/* Col 2 — remaining cards stacked */}
                <div className="wad-deliver-col-big">
                  <div className="wad-deliver-col-big-inner">
                    {EXP_TEXTS.slice(2).map((text, i) => (
                      <div key={i} data-reveal data-reveal-delay={`${i * 80}`} className="wad-exp-card">
                        <p className="wad-exp-card-text">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
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
                <summary className="cb-faq-q">
                  {f.q}
                  <span className="wad-faq-icon">+</span>
                </summary>
                <p className="cb-faq-a">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Builds and Hosts ── */}
      <section className="cb-section cb-section-alt wad-hosting-section">
        <div className="wad-section-orb wad-orb-3" aria-hidden="true" />
        <div className="container">
          <h2 data-reveal className="cb-section-h2" style={{ textAlign: 'center' }}>
            Web Design Company in Dubai:<br />
            <span className="gradient-text">Builds and Hosts Websites</span>
          </h2>
          <div className="wad-hosting-grid">
            {HOSTING.map((h, i) => (
              <div key={i} data-reveal data-reveal-delay={`${i * 80}`} className="wad-hosting-card">
                <div className="wad-hosting-icon-wrap">
                  <div className="wad-hosting-icon">{h.icon}</div>
                </div>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
                <div className="wad-hosting-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Deliver ── */}
      <section className="cb-section wad-deliver-section">
        <div className="container">
          <div className="wad-deliver-2col">
            {/* Col 1 — small: title + cards 01 & 02 */}
            <div className="wad-deliver-col-small">
              <h2 data-reveal className="cb-section-h2wad">The Best Medical Web Design <span className="gradient-text">Company in Dubai</span></h2>
              {WHAT_WE_DO.slice(0, 2).map((s, i) => (
                <div key={i} data-reveal data-reveal-delay={`${i * 80}`} className="cb-svc-card wad-deliver-card">
                  <div className="wad-deliver-icon">{s.icon}</div>
                  <h3 className="cb-svc-title">{s.title}</h3>
                  <p className="cb-svc-desc">{s.desc}</p>
                  <div className="wad-deliver-line" />
                </div>
              ))}
            </div>
            {/* Col 2 — big: cards 03-05 + CTA */}
            <div className="wad-deliver-col-big">
              <div className="wad-deliver-col-big-inner">
                {WHAT_WE_DO.slice(2).map((s, i) => (
                  <div key={i} data-reveal data-reveal-delay={`${(i + 2) * 80}`} className="cb-svc-card wad-deliver-card">
                    <div className="wad-deliver-icon">{s.icon}</div>
                    <h3 className="cb-svc-title">{s.title}</h3>
                    <p className="cb-svc-desc">{s.desc}</p>
                    <div className="wad-deliver-line" />
                  </div>
                ))}
                <div data-reveal data-reveal-delay="400" className="cb-svc-card wad-cta-card">
                  <p className="wad-cta-card-text">Ready to build a website that works as hard as you do?</p>
                  <Link href="/contact" className="svc-btn-primary wad-cta-card-btn">
                    Free Consultation
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cb-cta wad-cta-white">
        {/* Decorative dots & circles */}
        <div className="wad-cta-bg" aria-hidden="true">
          <div className="wad-cta-circle wad-cta-circle--1" />
          <div className="wad-cta-circle wad-cta-circle--2" />
          <div className="wad-cta-circle wad-cta-circle--3" />
          <div className="wad-cta-dots wad-cta-dots--tl" />
          <div className="wad-cta-dots wad-cta-dots--br" />
        </div>
        <div className="container cb-cta-inner">
          <span data-reveal className="section-label">Let&apos;s Build</span>
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
    </div>
  );
}
