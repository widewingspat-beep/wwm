import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo';
import './news.css';

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('news');
}

const NEWS = [
  {
    id: 1,
    source: 'Entrepreneur Middle East',
    title: 'Reem Holding Group Sets the Pace for Business Transformation with Innovation and Reliability',
    image: '/News/Lead-image-5.webp',
    href: 'https://mena.entrepreneur.com/women-entrepreneur/reem-holding-group-sets-the-pace-for-business-transformation-with-innovation-and-reliability',
  },
  {
    id: 2,
    source: 'Gulf Magazine',
    title: 'Reem Osman Redefining Leadership Through Purpose And Legacy',
    image: '/News/img.jpeg',
    href: 'https://gulfmagazine.co/reem-osman-redefining-leadership-through-purpose/',
  },
];

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="nws-hero">
        <div className="nws-hero-blob" aria-hidden="true" />
        <div className="container nws-hero-inner">
          <nav className="nws-breadcrumb" aria-label="breadcrumb">
            <Link href="/">Home</Link>
            <span className="nws-bc-sep">/</span>
            <span>News</span>
          </nav>
          <h1 className="nws-hero-h1">News &amp; Media</h1>
          <p className="nws-hero-sub">
            Stay updated with the latest press mentions, media coverage, and company announcements.
            Discover how Wide Wings Media is making headlines and shaping the future of digital marketing and branding.
          </p>
        </div>
      </section>

      {/* News grid */}
      <section className="nws-section">
        <div className="container">
          <div className="nws-grid">
            {NEWS.map(item => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nws-card"
              >
                <div className="nws-card-img">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={480}
                    className="nws-card-img-el"
                  />
                  <div className="nws-card-overlay" aria-hidden="true" />
                </div>
                <div className="nws-card-body">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/LogoWhite.svg" alt="" aria-hidden="true" className="nws-card-watermark" />
                  <span className="nws-card-source">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    {item.source}
                  </span>
                  <h2 className="nws-card-title">{item.title}</h2>
                  <span className="nws-card-read">
                    Read Article
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
