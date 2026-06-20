'use client';
import { useEffect, useRef } from 'react';

const words = ['Digital Marketing', 'Web & App Dev', 'Creative & Branding', 'Social Media', 'Paid Advertising'];

export default function ServiceFlipText() {
  const ref = useRef<HTMLSpanElement>(null);
  const idx = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const tick = setInterval(() => {
      el.classList.add('svc-flip-out');
      setTimeout(() => {
        idx.current = (idx.current + 1) % words.length;
        el.textContent = words[idx.current];
        el.classList.remove('svc-flip-out');
        el.classList.add('svc-flip-in');
        setTimeout(() => el.classList.remove('svc-flip-in'), 400);
      }, 300);
    }, 2500);
    return () => clearInterval(tick);
  }, []);

  return <span ref={ref} className="svc-flip-text gradient-text">{words[0]}</span>;
}
