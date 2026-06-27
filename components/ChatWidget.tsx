'use client';

import { useState } from 'react';
import './chat-widget.css';

type View = 'home' | 'services' | 'contact';

const Chevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>('home');

  const reset = () => { setOpen(false); setTimeout(() => setView('home'), 250); };

  return (
    <>
      {open && (
        <div className="cw-panel" role="dialog" aria-label="Wide Wings chat assistant">
          {/* Header */}
          <div className="cw-header">
            <div className="cw-avatar"><div className="cw-avatar-ball" /></div>
            <div className="cw-head-text">
              <p className="cw-title">Wide Wings</p>
              <div className="cw-status"><span className="cw-status-dot" />Online Assistant</div>
            </div>
            <button className="cw-close" onClick={reset} aria-label="Close chat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="cw-body">
            <p className="cw-bot-label">Wide Wings Bot</p>
            <div className="cw-row">
              <div className="cw-mini-avatar"><span /></div>
              <div className="cw-bubble">
                👋 Hey there! Welcome to Wide Wings Media — your creative growth partner.
                I&apos;m here to help you take your brand to the next level 🚀<br />
                What would you like to do today?
              </div>
            </div>

            {view === 'home' && (
              <>
                <p className="cw-bot-label">Wide Wings Bot</p>
                <div className="cw-options">
                  <button className="cw-option" onClick={() => setView('services')}>
                    <span>Learn about our services 💡</span>
                    <span className="cw-option-chev"><Chevron /></span>
                  </button>
                  <a className="cw-option" href="/contact">
                    <span>Book a meeting 📅</span>
                    <span className="cw-option-chev"><Chevron /></span>
                  </a>
                  <button className="cw-option" onClick={() => setView('contact')}>
                    <span>Contact our team ✉️</span>
                    <span className="cw-option-chev"><Chevron /></span>
                  </button>
                </div>
              </>
            )}

            {view === 'services' && (
              <>
                <button className="cw-back" onClick={() => setView('home')}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                  Back
                </button>
                <div className="cw-row">
                  <div className="cw-mini-avatar"><span /></div>
                  <div className="cw-bubble">Here&apos;s what we do best — pick one to explore 👇</div>
                </div>
                <div className="cw-options">
                  <a className="cw-option" href="/services"><span>SEO &amp; Performance Marketing 📈</span><span className="cw-option-chev"><Chevron /></span></a>
                  <a className="cw-option" href="/services"><span>Paid Advertising 🎯</span><span className="cw-option-chev"><Chevron /></span></a>
                  <a className="cw-option" href="/services"><span>Social Media Management 📱</span><span className="cw-option-chev"><Chevron /></span></a>
                  <a className="cw-option" href="/services"><span>Web Development &amp; Branding 🎨</span><span className="cw-option-chev"><Chevron /></span></a>
                </div>
              </>
            )}

            {view === 'contact' && (
              <>
                <button className="cw-back" onClick={() => setView('home')}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                  Back
                </button>
                <div className="cw-row">
                  <div className="cw-mini-avatar"><span /></div>
                  <div className="cw-bubble">Let&apos;s talk! Reach our team directly 👇</div>
                </div>
                <div className="cw-options">
                  <a className="cw-option" href="https://wa.me/971555657609" target="_blank" rel="noopener"><span>WhatsApp us 💬</span><span className="cw-option-chev"><Chevron /></span></a>
                  <a className="cw-option" href="tel:+97143352645"><span>Call +971 4 335 2645 📞</span><span className="cw-option-chev"><Chevron /></span></a>
                  <a className="cw-option" href="mailto:info@wide-wings.ae"><span>Email our team ✉️</span><span className="cw-option-chev"><Chevron /></span></a>
                </div>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="cw-footer">✨ Powered by Wide Wings Media</div>
        </div>
      )}

      <button className="cw-launcher" onClick={() => (open ? reset() : setOpen(true))} aria-label={open ? 'Close chat' : 'Open chat'}>
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        )}
      </button>
    </>
  );
}
