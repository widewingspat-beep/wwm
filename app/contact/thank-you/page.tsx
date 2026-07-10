import type { Metadata } from 'next';
import Link from 'next/link';
import './thank-you.css';
import { getPageMetadata } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('thank-you');
}

export default function ThankYouPage() {
  return (
    <main>
      <section id="thankyou-hero">
        <div className="ty-blob"></div>
        <div className="ty-inner">
          <div className="ty-check">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 className="ty-title">Thank <em>You!</em></h1>
          <p className="ty-subtitle">
            Your message has been sent successfully. Our team will review your enquiry and get back to you within 24 hours.
          </p>

          <div className="ty-steps">
            <div className="ty-step">
              <div className="ty-step-num">Step 01</div>
              <div className="ty-step-text">Our team reviews your enquiry and project requirements.</div>
            </div>
            <div className="ty-step">
              <div className="ty-step-num">Step 02</div>
              <div className="ty-step-text">A specialist reaches out within 24 hours to discuss your goals.</div>
            </div>
            <div className="ty-step">
              <div className="ty-step-num">Step 03</div>
              <div className="ty-step-text">We craft a tailored strategy with a free consultation.</div>
            </div>
          </div>

          <div className="ty-actions">
            <Link href="/" className="ty-btn ty-btn-primary">
              Back to Home
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/digital-marketing-services/" className="ty-btn ty-btn-outline">
              Explore Our Services
            </Link>
            <a href="https://wa.me/971555657609" className="ty-btn ty-btn-outline" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
