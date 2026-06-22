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
  {
    q: 'Is static web design a good choice?',
    a: 'Static websites are a good choice for small websites that are meant for short-term use, like events and personal portfolio websites. If you want to market your business, a custom-designed dynamic website is recommended.',
  },
  {
    q: 'Are WordPress websites better than custom websites?',
    a: "If you don't have a large budget, WordPress is a good option. It offers many templates and allows you to launch quickly. However, custom-designed websites usually deliver better results but cost more.",
  },
  {
    q: 'What is the difference between web design and web development?',
    a: 'Web design focuses on UI and UX, while web development involves coding and programming the website to connect with databases and display content dynamically.',
  },
  {
    q: 'Is Webflow a good option for website design?',
    a: 'Webflow has been a reliable platform for over 10 years and is suitable for small and medium businesses. However, it has limitations when it comes to custom functionality.',
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

      {/* Your Top Web Design Company intro */}
      <section className="cb-section">
        <div className="container">
          <span data-reveal className="section-label">Your Top Web Design Company in Dubai</span>
          <div data-reveal className="wad-intro-block">
            <p>Wide Wings Media was chosen as the best medical web design company in Dubai by one of the best hospitals in Dubai. We create good websites for doctors and other medical practices to help them get new patients. Let Wide Wings Media, the best web design company in Dubai, make your online presence better with great websites!</p>
            <p>We are a marketing leader in web development and design agencies in the UAE. We provide affordable, modern, and responsive web design services in Dubai, Abu Dhabi, and Sharjah. Hire our talented web designers and developers to create stunning websites that will impress.</p>
            <p>We design websites that get results. We specialize in custom websites, personalizing Sitecore and WordPress, 3D experiences, and more.</p>
            <p>As the world moves more and more into the digital age, the first and most important digital encounter between potential customers and your brand is through your website. It affects how users see the site and how many people visit and buy things from it.</p>
            <p>Wide Wings Media is one of the best web design companies in Dubai. We build websites that are beautiful and work well. These websites help businesses reach their goals. Our talented team combines creativity, strategy, and technology to make websites that attract your target audience and make your Dubai business look successful.</p>
            <p>We have successfully changed many businesses in different markets. We are committed to developing excellent digital solutions that deliver tangible results and extended business growth.</p>
          </div>
        </div>
      </section>

      {/* Expertise & Insights */}
      <section className="cb-section cb-section-alt">
        <div className="container">
          <span data-reveal className="section-label">Web Design Company in Dubai: For all Types of Industries</span>
          <h2 data-reveal className="cb-section-h2">Expertise &amp; <span className="gradient-text">Insights</span></h2>
          <div data-reveal className="wad-expertise-block">
            <p>Did you know that most people now use mobile devices to browse the internet? Google now shows the mobile version of your website first in its search results. So, your medical website design must work perfectly on mobile devices, just like it does on laptops or desktops.</p>
            <p>Having a strong online presence is not just a good idea; businesses need to thrive and succeed. Wide Wings Media recognizes this and provides web development services that are customized according to each client&apos;s needs.</p>
            <p>Every business is different, and every business has its challenges and goals. It&apos;s very important to understand this idea if you&apos;re working on a website. At Wide Wings Media, we understand that each business is unique. We customize our web development services for each client.</p>
            <p>Our team of expert web designers has a lot of experience building websites for healthcare and other industries that work with patients on all devices. Our services are designed to create cutting-edge digital experiences.</p>
            <p>Make your website better than your competitors&apos; websites. Make people want to use your website by giving them a great experience. Improve the chances that users will complete a conversion by offering them a positive experience. Our company has been in business for years, and we build custom-designed websites.</p>
          </div>

          <div data-reveal className="wad-medical-block">
            <h3 className="wad-subheading">Designing websites for doctors and dental practices.</h3>
            <p>We are an award-winning medical website design agency. We know how to design and develop a website that attracts and engages new patients. Our medical website design process includes making the website easy for patients to use and making sure that it ranks highly in online searches.</p>
            <p>The website design for medical practices is made to make the patient experience better and get more new patients. Your medical website is your best tool for digital marketing because it&apos;s like your digital billboard, the foundation of your marketing traffic, and a doorway to provide valuable information to patients.</p>
            <p>Turn your old or slow-loading website into an award-winning one with our website redesigns. Often, medical websites don&apos;t use digital marketing to their advantage.</p>
            <p>Many medical websites don&apos;t make it easy for people to find what they&apos;re looking for. Is it time to check if your website is up to date? Just like medicine, your online presence should always be improving to meet the needs of patients.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* Builds and Hosts Websites */}
      <section className="cb-section cb-section-alt">
        <div className="container">
          <span data-reveal className="section-label">Web Design Company in Dubai: Builds and Hosts Websites</span>
          <div data-reveal className="wad-hosting-grid">
            <div className="wad-hosting-card">
              <div className="wad-hosting-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="10" width="40" height="28" rx="3"/><line x1="4" y1="18" x2="44" y2="18"/>
                  <circle cx="10" cy="14" r="1.5" fill="currentColor"/><circle cx="16" cy="14" r="1.5" fill="currentColor"/>
                </svg>
              </div>
              <h3>Launch &amp; Hosting</h3>
              <p>Once we finish designing your website, we will launch it and provide you with secure hosting and website care plans to ensure smooth performance.</p>
            </div>
            <div className="wad-hosting-card">
              <div className="wad-hosting-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M24 4 L44 14 L44 26 C44 36 35 43 24 46 C13 43 4 36 4 26 L4 14 Z"/>
                  <polyline points="16,24 21,29 32,18"/>
                </svg>
              </div>
              <h3>Care Plans</h3>
              <p>Our care plans give you peace of mind and full support. Even if we&apos;re not developing your website, we can still host it as part of our marketing partnership.</p>
            </div>
            <div className="wad-hosting-card">
              <div className="wad-hosting-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="24" cy="24" r="20"/><line x1="24" y1="4" x2="24" y2="44"/>
                  <path d="M4 24 Q14 16 24 24 Q34 32 44 24"/><path d="M4 24 Q14 32 24 24 Q34 16 44 24"/>
                </svg>
              </div>
              <h3>Ongoing Maintenance</h3>
              <p>We offer ongoing maintenance to keep your website updated, secure, and functional, including security checks, software updates, and bug fixes.</p>
            </div>
            <div className="wad-hosting-card">
              <div className="wad-hosting-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 36 L6 12 C6 10 8 8 10 8 L38 8 C40 8 42 10 42 12 L42 28"/>
                  <line x1="6" y1="16" x2="42" y2="16"/><line x1="14" y1="24" x2="28" y2="24"/>
                  <line x1="14" y1="30" x2="22" y2="30"/><path d="M28 36 L44 36 M36 28 L44 36 L36 44"/>
                </svg>
              </div>
              <h3>Content Writing</h3>
              <p>Our content writers help craft brand messages, build a strong brand voice, and improve your website&apos;s usability and visibility.</p>
            </div>
            <div className="wad-hosting-card">
              <div className="wad-hosting-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="24" cy="16" r="8"/><path d="M8 40 C8 32 15 26 24 26 C33 26 40 32 40 40"/>
                  <circle cx="38" cy="20" r="5"/><line x1="38" y1="26" x2="38" y2="34"/>
                </svg>
              </div>
              <h3>Dedicated Support</h3>
              <p>Each client gets an experienced designer and a dedicated account manager to support every step of the project.</p>
            </div>
            <div className="wad-hosting-card">
              <div className="wad-hosting-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="14" cy="20" r="6"/><circle cx="34" cy="20" r="6"/><circle cx="24" cy="34" r="6"/>
                  <line x1="19" y1="23" x2="22" y2="29"/><line x1="29" y1="23" x2="26" y2="29"/>
                </svg>
              </div>
              <h3>Full Team</h3>
              <p>You&apos;ll have a full team working to deliver a website that attracts, converts, and educates new and existing patients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Best Medical Web Design Company */}
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
