'use client';

import React, { useState } from 'react';

const ITEMS = [
  {
    title: 'Mobile-First Web Design',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="2" width="10" height="20" rx="2"/>
        <line x1="12" y1="18" x2="12" y2="18.01"/>
      </svg>
    ),
    body: "Did you know that most people now use mobile devices to browse the internet? Google now shows the mobile version of your website first in its search results. So, your medical website design must work perfectly on mobile devices, just like it does on laptops or desktops.",
  },
  {
    title: 'Customised for Every Client',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    body: "Having a strong online presence is not just a good idea; businesses need to thrive and succeed. Wide Wings Media recognizes this and provides web development services that are customized according to each client's needs.",
  },
  {
    title: 'Unique Solutions for Unique Businesses',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    body: "Every business is different, and every business has its challenges and goals. It's very important to understand this idea if you're working on a website. At Wide Wings Media, we understand that each business is unique. We customize our web development services for each client.",
  },
  {
    title: 'Healthcare & Multi-Industry Expertise',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    body: "Our team of expert web designers has a lot of experience building websites for healthcare and other industries that work with patients on all devices. Our services are designed to create cutting-edge digital experiences.",
  },
  {
    title: 'Conversion-Focused Design',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    body: "Make your website better than your competitors' websites. Make people want to use your website by giving them a great experience. Improve the chances that users will complete a conversion by offering them a positive experience. Our company has been in business for years, and we build custom-designed websites.",
  },
];

export default function WadExpertiseAccordion() {
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="wad-acc-list">
      {ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className={`wad-acc-item${isOpen ? ' wad-acc-item--open' : ''}`}>
            <button
              className="wad-acc-trigger"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span className="wad-acc-icon-wrap">{item.icon}</span>
              <span className="wad-acc-title">{item.title}</span>
              <span className="wad-acc-chevron" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </span>
            </button>
            <div className="wad-acc-body" style={{ display: isOpen ? 'block' : 'none' }}>
              <p className="wad-acc-text">{item.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
