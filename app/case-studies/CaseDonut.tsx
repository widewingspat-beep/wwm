'use client';

import { useEffect, useRef, useState } from 'react';

export type DonutSegment = { label: string; value: number; color: string };

type CaseDonutProps = {
  title?: string;
  segments: DonutSegment[];
  size?: number;
};

export default function CaseDonut({ title, segments, size = 220 }: CaseDonutProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);
  const [count, setCount] = useState(0);

  const total = segments.reduce((sum, s) => sum + s.value, 0);
  const leading = segments[0];
  const leadingPct = (leading.value / total) * 100;

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!animate) return;
    const duration = 1100;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(leadingPct * eased);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [animate, leadingPct]);

  const viewBoxSize = 200;
  const radius = 80;
  const strokeWidth = 22;
  const circumference = 2 * Math.PI * radius;

  let cumulative = 0;
  const arcs = segments.map((seg, i) => {
    const fraction = seg.value / total;
    const dash = fraction * circumference;
    const offset = -cumulative * circumference;
    cumulative += fraction;
    return { ...seg, dash, offset, delay: i * 150 };
  });

  return (
    <div className="cs-donut" ref={wrapRef}>
      <div className="cs-donut-ring" style={{ width: size, height: size }}>
        <svg viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} width={size} height={size} className="cs-donut-svg">
          <circle
            cx={viewBoxSize / 2} cy={viewBoxSize / 2} r={radius}
            fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={strokeWidth}
          />
          {arcs.map((arc) => (
            <circle
              key={arc.label}
              cx={viewBoxSize / 2} cy={viewBoxSize / 2} r={radius}
              fill="none"
              stroke={arc.color}
              strokeWidth={strokeWidth}
              strokeDasharray={animate ? `${arc.dash} ${circumference - arc.dash}` : `0 ${circumference}`}
              strokeDashoffset={arc.offset}
              transform={`rotate(-90 ${viewBoxSize / 2} ${viewBoxSize / 2})`}
              className="cs-donut-arc"
              style={{ transitionDelay: `${arc.delay}ms` }}
            />
          ))}
        </svg>
        <div className="cs-donut-center">
          <span className="cs-donut-value">{count.toFixed(1)}%</span>
          <span className="cs-donut-label">{leading.label}</span>
        </div>
      </div>

      {title && <p className="cs-donut-title">{title}</p>}

      <div className="cs-donut-legend">
        {segments.map((s) => (
          <div className="cs-donut-legend-item" key={s.label}>
            <span className="cs-donut-dot" style={{ background: s.color }} />
            <span className="cs-donut-legend-name">{s.label}</span>
            <span className="cs-donut-legend-value">{((s.value / total) * 100).toFixed(1)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
