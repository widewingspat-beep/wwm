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
          </div>
        </div>
      </section>

      {/* ── Your Top Web Design Company ── */}
      <section className="cb-section">
        <div className="container">
          <div className="wad-intro-split">
            <div className="wad-intro-text" data-reveal>
              <span className="section-label">Your Top Web Design Company in Dubai</span>
              <h2 className="cb-section-h2" style={{ marginTop: '14px' }}>
                Websites that <span className="gradient-text">drive real growth</span>
              </h2>
              <p className="wad-para">Wide Wings Media was chosen as the best medical web design company in Dubai by one of the best hospitals in Dubai. We create good websites for doctors and other medical practices to help them get new patients. Let Wide Wings Media, the best web design company in Dubai, make your online presence better with great websites!</p>
              <p className="wad-para">We are a marketing leader in web development and design agencies in the UAE. We provide affordable, modern, and responsive web design services in Dubai, Abu Dhabi, and Sharjah. Hire our talented web designers and developers to create stunning websites that will impress.</p>
            </div>

            <div className="wad-intro-visual" data-reveal data-reveal-delay="120">
              {/* Stats card block */}
              <div className="wad-stats-stack">
                <div className="wad-stat-card wad-stat-card--accent">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
                    <rect x="4" y="8" width="40" height="28" rx="3"/>
                    <line x1="16" y1="44" x2="32" y2="44"/>
                    <line x1="24" y1="36" x2="24" y2="44"/>
                    <rect x="10" y="14" width="12" height="10" rx="1"/>
                    <line x1="26" y1="16" x2="38" y2="16"/>
                    <line x1="26" y1="20" x2="34" y2="20"/>
                    <line x1="26" y1="24" x2="36" y2="24"/>
                  </svg>
                  <div>
                    <div className="wad-stat-val">10+ Years</div>
                    <div className="wad-stat-lbl">Web Design Experience in UAE</div>
                  </div>
                </div>
                <div className="wad-stat-card">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
                    <polyline points="4,36 16,20 24,28 32,14 44,24"/>
                    <polyline points="36,14 44,14 44,22"/>
                  </svg>
                  <div>
                    <div className="wad-stat-val">500+ Projects</div>
                    <div className="wad-stat-lbl">Delivered across multiple industries</div>
                  </div>
                </div>
                <div className="wad-stat-card">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
                    <circle cx="24" cy="24" r="20"/>
                    <line x1="24" y1="4" x2="24" y2="44"/>
                    <path d="M4 24 Q14 16 24 24 Q34 32 44 24"/>
                  </svg>
                  <div>
                    <div className="wad-stat-val">Dubai · Abu Dhabi · Sharjah</div>
                    <div className="wad-stat-lbl">Serving businesses across the UAE</div>
                  </div>
                </div>
                <div className="wad-stat-card wad-stat-card--gold">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
                    <path d="M24 4 L44 14 L44 26 C44 36 35 43 24 46 C13 43 4 36 4 26 L4 14 Z"/>
                    <polyline points="16,24 21,29 32,18"/>
                  </svg>
                  <div>
                    <div className="wad-stat-val">Award Winning</div>
                    <div className="wad-stat-lbl">Best medical web design company in Dubai</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-reveal className="wad-intro-2col">
            <p className="wad-para">We design websites that get results. We specialize in custom websites, personalizing Sitecore and WordPress, 3D experiences, and more.</p>
            <p className="wad-para">As the world moves more and more into the digital age, the first and most important digital encounter between potential customers and your brand is through your website. It affects how users see the site and how many people visit and buy things from it.</p>
            <p className="wad-para">Wide Wings Media is one of the best web design companies in Dubai. We build websites that are beautiful and work well. These websites help businesses reach their goals. Our talented team combines creativity, strategy, and technology to make websites that attract your target audience and make your Dubai business look successful.</p>
            <p className="wad-para">We have successfully changed many businesses in different markets. We are committed to developing excellent digital solutions that deliver tangible results and extended business growth.</p>
          </div>
        </div>
      </section>

      {/* ── Expertise & Insights ── */}
      <section className="cb-section cb-section-alt">
        <div className="container">
          <span data-reveal className="section-label">Web Design Company in Dubai: For all Types of Industries</span>
          <h2 data-reveal className="cb-section-h2">Expertise &amp; <span className="gradient-text">Insights</span></h2>

          <div className="wad-expertise-split">
            {/* Left column: main expertise paragraphs */}
            <div data-reveal className="wad-expertise-left">
              <p className="wad-para">Did you know that most people now use mobile devices to browse the internet? Google now shows the mobile version of your website first in its search results. So, your medical website design must work perfectly on mobile devices, just like it does on laptops or desktops.</p>
              <p className="wad-para">Having a strong online presence is not just a good idea; businesses need to thrive and succeed. Wide Wings Media recognizes this and provides web development services that are customized according to each client&apos;s needs.</p>
              <p className="wad-para">Every business is different, and every business has its challenges and goals. It&apos;s very important to understand this idea if you&apos;re working on a website. At Wide Wings Media, we understand that each business is unique. We customize our web development services for each client.</p>
              <p className="wad-para">Our team of expert web designers has a lot of experience building websites for healthcare and other industries that work with patients on all devices. Our services are designed to create cutting-edge digital experiences.</p>
              <p className="wad-para">Make your website better than your competitors&apos; websites. Make people want to use your website by giving them a great experience. Improve the chances that users will complete a conversion by offering them a positive experience. Our company has been in business for years, and we build custom-designed websites.</p>
            </div>

            {/* Right column: medical highlight card */}
            <div data-reveal data-reveal-delay="120" className="wad-expertise-right">
              <div className="wad-medical-card">
                <div className="wad-medical-card-header">
                  <div className="wad-medical-icon">
                    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M24 4 C14 4 6 12 6 22 C6 34 24 44 24 44 C24 44 42 34 42 22 C42 12 34 4 24 4Z"/>
                      <line x1="24" y1="14" x2="24" y2="30"/><line x1="16" y1="22" x2="32" y2="22"/>
                    </svg>
                  </div>
                  <h3>Designing websites for doctors and dental practices.</h3>
                </div>
                <p className="wad-para">We are an award-winning medical website design agency. We know how to design and develop a website that attracts and engages new patients. Our medical website design process includes making the website easy for patients to use and making sure that it ranks highly in online searches.</p>
                <p className="wad-para">The website design for medical practices is made to make the patient experience better and get more new patients. Your medical website is your best tool for digital marketing because it&apos;s like your digital billboard, the foundation of your marketing traffic, and a doorway to provide valuable information to patients.</p>
                <p className="wad-para">Turn your old or slow-loading website into an award-winning one with our website redesigns. Often, medical websites don&apos;t use digital marketing to their advantage.</p>
                <p className="wad-para">Many medical websites don&apos;t make it easy for people to find what they&apos;re looking for. Is it time to check if your website is up to date? Just like medicine, your online presence should always be improving to meet the needs of patients.</p>
              </div>
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
                <summary className="cb-faq-q">{f.q}</summary>
                <p className="cb-faq-a">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Builds and Hosts ── */}
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

      {/* ── What We Deliver ── */}
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
            <div data-reveal data-reveal-delay="400" className="cb-svc-card wad-cta-card">
              <p className="wad-cta-card-text">Ready to build a website that works as hard as you do?</p>
              <Link href="/contact" className="svc-btn-primary wad-cta-card-btn">
                Free Consultation
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
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
