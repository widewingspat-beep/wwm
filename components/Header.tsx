'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function toggleMenu() {
    const btn = btnRef.current;
    const nav = navRef.current;
    if (!btn || !nav) return;
    const open = btn.classList.toggle('open');
    nav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  function closeMenu() {
    const btn = btnRef.current;
    const nav = navRef.current;
    if (!btn || !nav) return;
    btn.classList.remove('open');
    nav.classList.remove('open');
    document.body.style.overflow = '';
  }

  const isActive = (href: string) => pathname === href;

  return (
    <header ref={headerRef} id="site-header">
      <div className="header-inner">
      <Link href="/" className="nav-logo">
        <Image src="/LogoWhite.svg" alt="Wide Wings Media" width={160} height={64} priority className="logo-white" />
        <Image src="/Logoblack.webp" alt="Wide Wings Media" width={160} height={64} priority className="logo-dark" />
      </Link>
      <nav id="site-nav" ref={navRef}>
        <ul className="nav-links">
          <li><Link href="/" className={isActive('/') ? 'active' : ''} onClick={closeMenu}>Home</Link></li>
          <li className="nav-has-dropdown">
            <Link href="/services" className={pathname.startsWith('/services') ? 'active' : ''} onClick={closeMenu}>Services</Link>
            <div className="nav-dropdown">
              <div className="nav-dropdown-header">Our Services</div>
              {[
                ['01', 'Web & App Development', '/services/web-app-development'],
                ['02', 'Creative & Branding', '/services/creative-branding'],
                ['03', 'Paid Advertising & Media Buying', '/services/paid-advertising'],
                ['04', 'Social Media Management', '/services/social-media-management'],
                ['05', 'Content Creation & Graphic Design', '/services/content-creation'],
                ['06', 'Email, SMS & CRM Marketing', '/services/email-sms-crm'],
                ['07', 'SEO & Performance Management', '/services/seo-performance'],
                ['08', 'OOH Advertising', '/services/ooh-advertising'],
                ['09', 'Analytics & Performance Marketing', '/services/analytics-performance'],
                ['10', 'PR Management', '/services/pr-management'],
              ].map(([num, label, href]) => (
                <Link key={href} href={href} onClick={closeMenu}>
                  <span className="nav-dropdown-num">{num}</span>
                  {label}
                </Link>
              ))}
            </div>
          </li>
          <li><Link href="/about-us" className={isActive('/about-us') ? 'active' : ''} onClick={closeMenu}>About Us</Link></li>
          <li><Link href="/blogs" className={isActive('/blogs') ? 'active' : ''} onClick={closeMenu}>Blogs</Link></li>
          <li><Link href="/news" className={isActive('/news') ? 'active' : ''} onClick={closeMenu}>News</Link></li>
          <li><Link href="/contact" className={isActive('/contact') ? 'active' : ''} onClick={closeMenu}>Contact Us</Link></li>
        </ul>
      </nav>
      <Link href="/contact" className="nav-cta">Free Consultation</Link>
      <button className="nav-hamburger" ref={btnRef} id="nav-hamburger" aria-label="Toggle menu" onClick={toggleMenu}>
        <span></span><span></span><span></span>
      </button>
      </div>
    </header>
  );
}
