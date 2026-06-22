'use client';

import { useState } from 'react';
import Link from 'next/link';
import './contact.css';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const required = form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('[required]');
    let valid = true;
    required.forEach(f => {
      if (!f.value.trim()) {
        valid = false;
        f.style.borderColor = '#e53e3e';
        f.addEventListener('input', () => { f.style.borderColor = ''; }, { once: true });
      }
    });
    if (!valid) return;
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1400);
  }


  return (
    <main>
      {/* HERO */}
      <section id="contact-hero">
        <div className="contact-hero-blob"></div>
        <div className="hero-inner">
          <div className="hero-badge">
            <div className="hero-badge-dot"></div>
            <span>Contact Us</span>
          </div>
          <h1 className="hero-title">
            Let&apos;s <em>Soar</em>
          </h1>
          <p className="hero-subtitle">
            Ready to take your brand to new heights? Our digital marketing experts in Dubai are here to craft your success story. Reach out to us today and let&apos;s build your legacy together.
          </p>
        </div>
      </section>

      <div className="divider-line"></div>

      {/* CONTACT MAIN */}
      <section id="contact-main">
        <div className="container">
          <div className="contact-grid">

            {/* LEFT: Info Panel */}
            <div className="contact-info-panel">
              <span className="section-label anim-fade-up">Stay Connected</span>
              <h2 className="contact-info-h2 anim-fade-up anim-d1">Quick <span className="gradient-text">Connect</span></h2>
              <p className="contact-info-desc anim-fade-up anim-d2">We reply to all inquiries within 24 hours.</p>

              <div className="info-cards">
                <div className="info-card anim-fade-up anim-d2">
                  <div className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" color="#a73184">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <div className="info-label">Our Location</div>
                    <div className="info-value">Wide Wings Media, LLC<br/>Al Quoz Industrial Area 3, Goshi Warehouse City<br/>Warehouse #47, Dubai, United Arab Emirates</div>
                  </div>
                </div>
                <div className="info-card anim-fade-up anim-d3">
                  <div className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" color="#a73184">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.04.01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <div className="info-label">Phone / WhatsApp</div>
                    <div className="info-value">
                      <a href="tel:+97143352645">+971 4 335 2645</a><br/>
                      <a href="tel:+971555657609">+971 55 565 7609</a><br/>
                      <a href="https://wa.me/971555657609">WhatsApp Us Directly →</a>
                    </div>
                  </div>
                </div>
                <div className="info-card anim-fade-up anim-d4">
                  <div className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" color="#a73184">
                      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <div className="info-label">Email Address</div>
                    <div className="info-value">
                      <a href="mailto:info@wide-wings.ae">info@wide-wings.ae</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="hours-block anim-fade-up anim-d4">
                <div className="hours-title"><div className="hours-dot"></div>Working Hours</div>
                {[['Monday – Thursday','9:00 AM – 6:00 PM'],['Friday','9:00 AM – 1:00 PM'],['Saturday','10:00 AM – 4:00 PM'],['Sunday','Closed']].map(([day, time]) => (
                  <div key={day} className="hours-row">
                    <span className="hours-day">{day}</span>
                    <span className={`hours-time${time === 'Closed' ? ' closed' : ''}`}>{time}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="anim-fade-up anim-d5">
                <div className="social-label">Follow Us</div>
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
                  <a href="https://x.com/Wide_WingsMedia/" className="social-icon" aria-label="X" target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT: Form */}
            <div className="contact-form-panel">
              <div className="form-wrapper">
                <div className="form-corner-tl"></div>
                {!submitted ? (
                  <div id="form-content">
                    <h3 className="form-title anim-fade-up">Send a Message</h3>
                    <p className="form-subtitle anim-fade-up anim-d1">Fill in the details below and our team will get back to you within 24 hours.</p>
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="form-row">
                        <div className="form-group"><label>Full Name <span>*</span></label><input type="text" className="form-control" placeholder="Your Name" required /></div>
                        <div className="form-group"><label>Email Address <span>*</span></label><input type="email" className="form-control" placeholder="Email" required /></div>
                      </div>
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" className="form-control" placeholder="Phone" />
                      </div>
                      <div className="form-group">
                        <label>Service Interested In <span>*</span></label>
                        <select className="form-control" required defaultValue="">
                          <option value="" disabled>Select a service…</option>
                          <option>Digital Marketing Strategy</option>
                          <option>Social Media Management</option>
                          <option>SEO &amp; Content Marketing</option>
                          <option>Paid Advertising (PPC/Meta Ads)</option>
                          <option>Branding &amp; Creative Design</option>
                          <option>Video Production &amp; Photography</option>
                          <option>Website Development</option>
                          <option>Influencer Marketing</option>
                          <option>Full-Service Package</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Your Message <span>*</span></label>
                        <textarea className="form-control" placeholder="Tell us about your project goals, timeline, and any specific requirements…" required></textarea>
                      </div>
                      <div className="form-submit-row">
                        <p className="form-privacy">By submitting, you agree to our<br/><Link href="#">Privacy Policy</Link> &amp; <Link href="#">Terms of Service</Link>.</p>
                        <button type="submit" className="btn-submit" disabled={submitting}>
                          {submitting ? 'Sending…' : "Let's Talk"}
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                        </button>
                      </div>
                    </form>
                  </div>
                ) : (
                  <div className="form-success visible">
                    <div className="success-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 className="success-title">Message Sent!</h3>
                    <p className="success-desc">Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section id="map-section">
        <div className="map-header">
          <div className="container">
            <span className="section-label">Find Us</span>
            <h2 className="map-h2">Visit Our Dubai <span className="gradient-text">Office</span></h2>
            <p className="map-desc">Sheikh Zayed Road, the heart of Dubai&apos;s business district</p>
          </div>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1783789226!2d55.26655847538457!3d25.20484297773786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1cbb7e2!2sSheikh%20Zayed%20Rd%2C%20Dubai%2C%20UAE!5e0!3m2!1sen!2sae!4v1710000000000!5m2!1sen!2sae"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wide Wings Media Office Location"
          ></iframe>
        </div>
      </section>

      {/* CTA STRIP */}
      <section id="cta-strip">
        <div className="container">
          <div className="cta-label">Ready to Grow?</div>
          <h2 className="cta-h2">Let&apos;s Turn Your Vision Into<br/><span className="gradient-text">Measurable Results</span></h2>
          <p className="cta-body">From brand strategy to viral campaigns — Wide Wings delivers digital marketing that moves the needle in the UAE market and beyond.</p>
          <div className="cta-actions">
            <a href="tel:+97143352645" className="btn-cta-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.04.01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/></svg>
              Call Us Now
            </a>
            <a href="https://wa.me/971555657609" className="btn-cta-outline">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Chat
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
