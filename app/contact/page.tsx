'use client';

import { useState, useRef, MouseEvent } from 'react';
import Link from 'next/link';
import './contact.css';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleCard3D(e: MouseEvent<HTMLDivElement>) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 22;
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 22;
    card.style.transform = `perspective(600px) rotateX(${y}deg) rotateY(${x}deg) translateY(-6px) scale(1.03)`;
  }
  function resetCard3D(e: MouseEvent<HTMLDivElement>) {
    e.currentTarget.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
  }

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

              <div className="info-cards-3d">
                <div className="card-3d anim-fade-up anim-d2" onMouseMove={handleCard3D} onMouseLeave={resetCard3D}>
                  <div className="card-3d-glow" />
                  <div className="card-3d-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
                    </svg>
                  </div>
                  <div className="card-3d-body">
                    <div className="card-3d-label">Our Location</div>
                    <div className="card-3d-value">Wide Wings Media, LLC — Al Quoz Industrial Area 3, Warehouse #47, Dubai, UAE</div>
                  </div>
                </div>

                <div className="card-3d anim-fade-up anim-d3" onMouseMove={handleCard3D} onMouseLeave={resetCard3D}>
                  <div className="card-3d-glow" />
                  <div className="card-3d-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.04.01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/>
                    </svg>
                  </div>
                  <div className="card-3d-body">
                    <div className="card-3d-label">Phone / WhatsApp</div>
                    <div className="card-3d-value">
                      <a href="tel:+97143352645">+971 4 335 2645</a> &nbsp;·&nbsp; <a href="tel:+971555657609">+971 55 565 7609</a>
                      <br/><a href="https://wa.me/971555657609" className="card-3d-cta">Chat on WhatsApp →</a>
                    </div>
                  </div>
                </div>

                <div className="card-3d anim-fade-up anim-d4" onMouseMove={handleCard3D} onMouseLeave={resetCard3D}>
                  <div className="card-3d-glow" />
                  <div className="card-3d-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
                    </svg>
                  </div>
                  <div className="card-3d-body">
                    <div className="card-3d-label">Email Address</div>
                    <div className="card-3d-value">
                      <a href="mailto:info@wide-wings.ae">info@wide-wings.ae</a>
                      <br/><a href="mailto:info@wide-wings.ae" className="card-3d-cta">Send us an email →</a>
                    </div>
                  </div>
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
            src="https://www.google.com/maps?q=Wide+Wings+Media+LLC+Al+Quoz+Industrial+Area+3+Goshi+Warehouse+City+Warehouse+47+Dubai&output=embed"
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
              <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.04.01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/></svg></span>
              <span>Call Us Now</span>
            </a>
            <a href="https://wa.me/971555657609" className="btn-cta-outline">
              <span><svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></span>
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
