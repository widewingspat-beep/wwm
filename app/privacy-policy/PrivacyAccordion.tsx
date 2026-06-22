'use client';

import { useState } from 'react';

type Section = { id: string; title: string; content: string };

export default function PrivacyAccordion({ sections }: { sections: Section[] }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div style={{ marginTop: 8 }}>
      {sections.map((s) => {
        const isOpen = open === s.id;
        return (
          <div
            key={s.id}
            id={s.id}
            style={{
              borderBottom: '1px solid #ebebeb',
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : s.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 16,
                padding: '20px 0',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              }}
              aria-expanded={isOpen}
            >
              <span style={{
                fontFamily: 'Nexa, sans-serif',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: isOpen ? '#a73184' : '#1a1a2e',
                lineHeight: 1.4,
                transition: 'color 0.2s',
              }}>
                {s.title}
              </span>
              <span style={{
                flexShrink: 0,
                width: 32,
                height: 32,
                borderRadius: '50%',
                border: `2px solid ${isOpen ? '#a73184' : '#ddd'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Nexa, sans-serif',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: isOpen ? '#a73184' : '#888',
                transition: 'border-color 0.2s, color 0.2s, transform 0.25s',
                transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
              }}>
                +
              </span>
            </button>

            {isOpen && (
              <div style={{ paddingBottom: 24 }}>
                {s.content.split('\n\n').map((para, j) => (
                  <p key={j} style={{
                    fontFamily: 'Calibri, sans-serif',
                    fontSize: '1rem',
                    color: '#555',
                    lineHeight: 1.85,
                    marginBottom: 14,
                    whiteSpace: 'pre-line',
                  }}>
                    {para}
                  </p>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
