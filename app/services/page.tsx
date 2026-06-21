'use client';
import Link from 'next/link';
import './services.css';

const SERVICES = [
  {
    num: '01',
    title: 'Web & App Development',
    slug: '/services/web-app-development',
    desc: 'From sleek websites to powerful mobile applications, we build digital products that perform — fast, secure, and built to scale with your business.',
  },
  {
    num: '02',
    title: 'Creative & Branding',
    slug: '/services/creative-branding',
    desc: 'We craft identities that resonate. From logo design to full brand systems, we ensure your brand speaks clearly across every touchpoint.',
  },
  {
    num: '03',
    title: 'Paid Advertising & Media Buying',
    slug: '/services/paid-advertising',
    desc: 'Hyper-targeted campaigns across Google, Meta, TikTok, and beyond. We maximise your ROI with data-driven ad strategies designed to convert.',
  },
  {
    num: '04',
    title: 'Social Media Management',
    slug: '/services/social-media-management',
    desc: 'We manage your social presence end-to-end — content calendars, community management, and growth strategies that build loyal audiences.',
  },
  {
    num: '05',
    title: 'Content Creation & Graphic Design',
    slug: '/services/content-creation',
    desc: 'Compelling visuals, videos, and copy that stop the scroll. Our creative team produces content that drives engagement and reflects your brand perfectly.',
  },
  {
    num: '06',
    title: 'Email, SMS & CRM Marketing',
    slug: '/services/email-sms-crm',
    desc: 'Keep your audience engaged and your pipeline full. We design and automate email and SMS campaigns that nurture leads into loyal customers.',
  },
  {
    num: '07',
    title: 'SEO & Performance Management',
    slug: '/services/seo-performance',
    desc: 'Rank higher, get found faster. Our SEO strategies are built on keyword intelligence, technical audits, and content that earns authority.',
  },
  {
    num: '08',
    title: 'OOH Advertising',
    slug: '/services/ooh-advertising',
    desc: 'Billboards, unipoles, bridge banners, and digital screens across the UAE. We plan and execute out-of-home campaigns that make your brand impossible to ignore.',
  },
  {
    num: '09',
    title: 'Analytics & Performance Marketing',
    slug: '/services/analytics-performance',
    desc: 'Data is your competitive edge. We track, measure, and optimise every campaign to turn intent into measurable, real-world growth.',
  },
  {
    num: '10',
    title: 'PR Management',
    slug: '/services/pr-management',
    desc: 'From press releases to crisis communications, we protect and elevate your reputation through strategic media relations and influencer outreach.',
  },
];

const VALUE_PROPS = [
  {
    title: 'Keywords Optimised for Conversion',
    body: 'Get in front of high-intent customers with hyper-targeted campaigns and display ads designed to drive action at every stage of the funnel.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20"/>
        <circle cx="24" cy="24" r="12"/>
        <circle cx="24" cy="24" r="4" fill="currentColor" stroke="none"/>
        <line x1="24" y1="4" x2="24" y2="10"/>
        <line x1="24" y1="38" x2="24" y2="44"/>
        <line x1="4" y1="24" x2="10" y2="24"/>
        <line x1="38" y1="24" x2="44" y2="24"/>
      </svg>
    ),
  },
  {
    title: 'Top of Mind, Bottom of Funnel',
    body: 'We capture top-funnel traffic and transform it into bottom-funnel conversions through rapid experimentation and proven frameworks.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 10h32l-12 16v10l-8-4V26L8 10z"/>
        <line x1="6" y1="10" x2="42" y2="10"/>
      </svg>
    ),
  },
  {
    title: 'Turn Intent into Measurable Growth',
    body: 'By unlocking high-quality consumer intent, we fuel rapid and measurable growth through quality leads and performance-first strategies.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6,36 18,22 26,30 42,12"/>
        <polyline points="32,12 42,12 42,22"/>
        <line x1="6" y1="42" x2="42" y2="42"/>
        <line x1="6" y1="12" x2="6" y2="42"/>
      </svg>
    ),
  },
  {
    title: 'Proven Revenue Growth',
    body: 'Our team of growth experts measure and maximise search intent and keyword potential at every stage of the funnel — delivering results you can see.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4l4.5 9 10 1.5-7.25 7 1.75 10L24 26.5 15 31.5l1.75-10L9.5 14.5l10-1.5z"/>
        <line x1="24" y1="34" x2="24" y2="44"/>
        <line x1="16" y1="44" x2="32" y2="44"/>
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="svc-hero">
        <div className="svc-hero-noise" aria-hidden="true" />
        <div className="svc-hero-blob" aria-hidden="true" />
        <div className="svc-hero-inner">
          <div className="svc-eyebrow">
            <span className="svc-dot" />
            Our Digital Marketing Services
          </div>
          <h1 className="svc-hero-h1">
            Boost ROI with<br />
            <em>Data-Driven</em> Marketing
          </h1>
          <p className="svc-hero-sub">
            Use digital marketing services that are based on data to make your brand stronger.
            Get a high return on investment and more conversions with Wide Wings Media.
          </p>
          <div className="svc-hero-btns">
            <Link href="/contact" className="svc-btn-primary">
              Free Consultation
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
            <a href="#svc-list" className="svc-btn-outline">View All Services</a>
          </div>
        </div>
        <div className="svc-hero-after" aria-hidden="true" />
      </section>

      {/* ── PARTNER BAND ── */}
      <div className="svc-band">
        <span className="svc-band-tag">TOP RANKED</span>
        <p className="svc-band-text">
          <strong>Your Partner for Premier Digital Marketing Services</strong> — A trusted partner for startups, scaleups, and established enterprises.
        </p>
        <Link href="/contact" className="svc-band-cta">
          Take the Leap
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </Link>
      </div>

      {/* ── SERVICE LIST ── */}
      <section id="svc-list" className="svc-list-section">
        <div className="svc-list-inner">

          {/* LEFT COLUMN */}
          <div className="svc-list-left">
            <div className="svc-list-heading">
              <strong className="svc-lh-main">Digital Marketing Services</strong>
            </div>
            {/* 3-image cinematic collage */}
            <div className="svc-collage">
              <div className="svc-collage-main">
                <img src="/shutterstock_2421890557.jpg" alt="Digital strategy" />
              </div>
              <div className="svc-collage-side">
                <div className="svc-collage-sm">
                  <img src="/shutterstock_2619060609.jpg" alt="Dubai business" />
                </div>
                <div className="svc-collage-sm">
                  <img src="/shutterstock_2584810093.jpg" alt="Brand marketing" />
                </div>
              </div>
            </div>
            <p className="svc-list-desc">
              Use digital marketing services that are based on data to make your brand stronger.
              Get a high return on investment (ROI) and more conversions with Wide Wings Media&apos;s
              digital marketing services, which are data-based. Request a quote now.
            </p>
            <p className="svc-list-desc">
              Work with a digital marketing services agency in Dubai that has won awards and is
              designed to help businesses thrive by making meaningful connections.
            </p>
          </div>

          {/* RIGHT COLUMN — lined list */}
          <div className="svc-list-right">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={s.slug} className="svc-row">
                <span className="svc-row-title">{s.title}</span>
                <svg className="svc-row-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M9 7h8v8"/>
                </svg>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ── VALUE PROPS ── */}
      <section className="svc-values">
        <span className="svc-values-watermark" aria-hidden="true">WIDE WINGS</span>
        <div className="svc-values-inner">
          <div className="svc-values-head">
            <div className="svc-eyebrow"><span className="svc-dot" />Why Choose Us</div>
            <h2 className="svc-values-h2">Take the Leap from<br /><em>Experiments to Conversions</em></h2>
          </div>
          <div className="svc-values-grid">
            {VALUE_PROPS.map((v, i) => (
              <div key={i} className="svc-value-card">
                <div className="svc-value-icon">{v.icon}</div>
                <h3 className="svc-value-title">{v.title}</h3>
                <p className="svc-value-body">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="svc-cta">
        <div className="svc-cta-blob" aria-hidden="true" />
        <div className="svc-cta-inner">
          <h2 className="svc-cta-h2">Have Any Project in Mind?</h2>
          <p className="svc-cta-sub">
            Let&apos;s discuss how we can drive measurable growth for your business.
          </p>
          <Link href="/contact" className="svc-btn-primary">
            Free Consultation
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
