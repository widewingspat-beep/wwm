'use client';

import Link from 'next/link';
import './digital-marketing-services.css';

const services = [
  {
    num: '01',
    title: 'Web & App Development',
    href: '/services/web-app-development',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#ds1)" strokeWidth="1.8">
        <defs><linearGradient id="ds1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#b62d83"/><stop offset="1" stopColor="#cfa821"/></linearGradient></defs>
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Creative & Branding',
    href: '/services/creative-branding',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#ds2)" strokeWidth="1.8">
        <defs><linearGradient id="ds2" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#b62d83"/><stop offset="1" stopColor="#cfa821"/></linearGradient></defs>
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Paid Advertising & Media Buying',
    href: '/services/paid-advertising',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#ds3)" strokeWidth="1.8">
        <defs><linearGradient id="ds3" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#b62d83"/><stop offset="1" stopColor="#cfa821"/></linearGradient></defs>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Social Media Management',
    href: '/services/social-media-management',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#ds4)" strokeWidth="1.8">
        <defs><linearGradient id="ds4" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#b62d83"/><stop offset="1" stopColor="#cfa821"/></linearGradient></defs>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Content Creation & Graphic Design',
    href: '/services/content-creation',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#ds5)" strokeWidth="1.8">
        <defs><linearGradient id="ds5" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#b62d83"/><stop offset="1" stopColor="#cfa821"/></linearGradient></defs>
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Email, SMS & CRM Marketing',
    href: '/services/email-sms-crm',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#ds6)" strokeWidth="1.8">
        <defs><linearGradient id="ds6" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#b62d83"/><stop offset="1" stopColor="#cfa821"/></linearGradient></defs>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    num: '07',
    title: 'SEO & Performance Management',
    href: '/services/seo-performance',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#ds7)" strokeWidth="1.8">
        <defs><linearGradient id="ds7" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#b62d83"/><stop offset="1" stopColor="#cfa821"/></linearGradient></defs>
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
  },
  {
    num: '08',
    title: 'OOH Advertising',
    href: '/services/ooh-advertising',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#ds8)" strokeWidth="1.8">
        <defs><linearGradient id="ds8" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#b62d83"/><stop offset="1" stopColor="#cfa821"/></linearGradient></defs>
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    num: '09',
    title: 'Analytics & Performance Marketing',
    href: '/services/analytics-performance',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#ds9)" strokeWidth="1.8">
        <defs><linearGradient id="ds9" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#b62d83"/><stop offset="1" stopColor="#cfa821"/></linearGradient></defs>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    num: '10',
    title: 'PR Management',
    href: '/services/pr-management',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#ds10)" strokeWidth="1.8">
        <defs><linearGradient id="ds10" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#b62d83"/><stop offset="1" stopColor="#cfa821"/></linearGradient></defs>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
];

const valueProps = [
  {
    num: '01',
    title: 'Keywords Optimized for Conversion',
    desc: 'Get in front of high-intent customers with hyper-targeted campaigns and display ads that put your brand exactly where your audience is searching.',
  },
  {
    num: '02',
    title: 'Top of Mind, Bottom of Funnel',
    desc: 'We capture top-funnel traffic and transform it into bottom-funnel conversions through rapid experimentation and data-backed creative testing.',
  },
  {
    num: '03',
    title: 'Turn Intent Into Measurable Growth',
    desc: 'By unlocking high-quality consumer intent, we fuel rapid and measurable growth through quality leads that convert into loyal, long-term customers.',
  },
  {
    num: '04',
    title: 'Digital Marketing Services with Proven Revenue Growth',
    desc: 'Our team of paid search growth experts measure and maximize search intent and keyword potential at every stage of the funnel to drive real revenue.',
  },
];

export default function DigitalMarketingServicesPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section id="dm-hero">
        <div className="dm-hero-bg" />
        <div className="dm-hero-glow-1" />
        <div className="dm-hero-glow-2" />
        <div className="dm-hero-inner">
          <div>
            <div className="dm-hero-badge">
              <div className="dm-hero-badge-dot" />
              <span>Our Digital Marketing Services</span>
            </div>
            <h1 className="dm-hero-h1">
              Boost ROI with <em>Data-Driven</em><br />
              Digital Marketing Services<br />
              in Dubai
            </h1>
            <p className="dm-hero-sub">
              Use digital marketing services that are based on data to make your brand stronger. Get a high return on investment (ROI) and more conversions with Wide Wings Media&apos;s digital marketing services, which are data-based. Request a quote now.
            </p>
            <p className="dm-hero-sub2">
              Work with a digital marketing services agency in Dubai that has won awards and is designed to help businesses thrive by making meaningful connections.
            </p>
            <div className="dm-hero-actions">
              <Link href="/contact" className="btn-primary">
                Request a Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <Link href="#dm-services" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,.25)', color: '#fff' }}>
                Our Services
              </Link>
            </div>
          </div>
          <div>
            <div className="dm-stat-cards">
              {[
                { num: '5+',   lbl: 'Years of Excellence' },
                { num: '62+',  lbl: 'Clients Served' },
                { num: '11+',  lbl: 'Countries We Reach' },
                { num: '50+',  lbl: 'Brand Partners' },
              ].map((s, i) => (
                <div key={i} className="dm-stat-card">
                  <div className="dm-stat-num">{s.num}</div>
                  <div className="dm-stat-lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
            <div className="dm-hero-tag">
              {['SEO', 'Paid Ads', 'Social Media', 'Branding', 'Content', 'PR', 'Analytics', 'Email Marketing'].map(t => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section id="dm-services">
        <div className="container">
          <div className="dm-services-header">
            <span className="section-label">What We Do</span>
            <h2 className="dm-services-h2">
              Full-Service <span className="gradient-text">Digital Marketing</span> Agency
            </h2>
            <p className="dm-services-sub">
              Every service we offer is designed to work together — so your brand grows with momentum, not just isolated wins.
            </p>
          </div>
          <div className="dm-services-grid">
            {services.map(svc => (
              <Link key={svc.num} href={svc.href} className="dm-svc-card">
                <div className="dm-svc-num">{svc.num}</div>
                <div className="dm-svc-icon">{svc.icon}</div>
                <div className="dm-svc-title">{svc.title}</div>
                <div className="dm-svc-arrow">
                  Learn More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUE PROPS ── */}
      <section id="dm-value">
        <div className="dm-value-glow" />
        <div className="container">
          <div className="dm-value-inner">
            <div>
              <div className="dm-value-label">Top Ranked</div>
              <div className="dm-value-tag">Your Partner for Premier Digital Marketing Services</div>
              <h2 className="dm-value-h2">
                Take the Leap from<br />
                <span className="gradient-text">Experiments to Conversions</span>
              </h2>
              <p className="dm-value-trust">A trusted partner for startups, scaleups, and Fortune 100s.</p>
              <div className="dm-value-cta">
                <Link href="/contact" className="btn-primary">Free Consultation</Link>
              </div>
            </div>
            <div className="dm-props-list">
              {valueProps.map(p => (
                <div key={p.num} className="dm-prop-item">
                  <div className="dm-prop-num">{p.num}</div>
                  <div className="dm-prop-body">
                    <div className="dm-prop-title">{p.title}</div>
                    <p className="dm-prop-desc">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="dm-cta">
        <div className="container">
          <h2 className="dm-cta-h2">
            Have Any Project <span>in Mind..?</span>
          </h2>
          <Link href="/contact" className="btn-primary">
            Free Consultation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
