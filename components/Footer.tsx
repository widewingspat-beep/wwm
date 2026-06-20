'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(scrolled > 300);
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    function initFooterAccordion() {
      const cols = document.querySelectorAll('.footer-col');
      if (window.innerWidth > 768) {
        cols.forEach(c => {
          c.classList.remove('acc-open');
        });
        return;
      }
      cols.forEach(col => {
        const h4 = col.querySelector('h4');
        if (!h4 || (h4 as HTMLElement).dataset.accBound) return;
        (h4 as HTMLElement).dataset.accBound = '1';
        h4.addEventListener('click', () => col.classList.toggle('acc-open'));
      });
    }
    initFooterAccordion();
    window.addEventListener('resize', initFooterAccordion);
    return () => window.removeEventListener('resize', initFooterAccordion);
  }, []);

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <Image src="/LogoWhite.svg" alt="Wide Wings Media" width={160} height={52} />
            </div>
            <p className="footer-tagline">
              We specialize in connecting communities and ideas that turn your vision into a reality. Dubai&apos;s leading digital marketing agency for the UAE and GCC market.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/widewingsadvertising" className="social-icon" aria-label="Facebook" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/wide.wings.media/" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/wide-wings-media-advertising/" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://x.com/Wide_WingsMedia/" className="social-icon" aria-label="X / Twitter" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Services <span className="acc-icon">+</span></h4>
            <ul>
              <li><Link href="/services/web-app-development">Web &amp; App Development</Link></li>
              <li><Link href="/services/creative-branding">Creative &amp; Branding</Link></li>
              <li><Link href="/services/paid-advertising">Paid Advertising &amp; Media Buying</Link></li>
              <li><Link href="/services/social-media-management">Social Media Management</Link></li>
              <li><Link href="/services/seo-performance">SEO &amp; Performance Management</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company <span className="acc-icon">+</span></h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
              <li><Link href="/news">News</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Us <span className="acc-icon">+</span></h4>
            <div className="footer-contact-wrap">
              <div className="footer-contact-item">
                Wide Wings Media, LLC<br />
                Al Quoz Industrial Area 3<br />
                Dubai, United Arab Emirates
              </div>
              <div className="footer-contact-item">Office: <a href="tel:+97143352645">+971 4 335 2645</a></div>
              <div className="footer-contact-item">Mobile: <a href="tel:+971555657609">+971 55 565 7609</a></div>
              <div className="footer-contact-item">Email: <a href="mailto:info@wide-wings.ae">info@wide-wings.ae</a></div>
            </div>
          </div>
        </div>

        {/* ── Go to top ── */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className={`go-top-btn${visible ? ' go-top-visible' : ''}`}
          style={{ '--prog': `${progress}%` } as React.CSSProperties}
        >
          <svg className="go-top-ring" viewBox="0 0 44 44">
            <defs>
              <linearGradient id="gtGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF6B5B" />
                <stop offset="100%" stopColor="#FFA94D" />
              </linearGradient>
            </defs>
            <circle cx="22" cy="22" r="19" />
            <circle cx="22" cy="22" r="19" className="go-top-track" style={{ strokeDashoffset: `${119.4 - (119.4 * progress) / 100}` }} />
          </svg>
          <svg className="go-top-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>

        <div className="footer-bottom">
          <p className="footer-copy">© 2026 | All Rights Reserved by Wide Wings Media</p>
          <div className="footer-legal">
            <Link href="/terms-conditions">Terms &amp; Conditions</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
