'use client';
import { useEffect, useRef, useState } from 'react';

const SERVICES = [
  { label: 'Web & App Development',            icon: '⬡', color: '#4CC9F0' },
  { label: 'Creative & Branding',              icon: '◈', color: '#FF6B5B' },
  { label: 'Paid Advertising & Media Buying',  icon: '◎', color: '#FFA94D' },
  { label: 'Social Media Management',          icon: '◉', color: '#a73184' },
  { label: 'Content Creation & Design',        icon: '◆', color: '#FFD166' },
  { label: 'Email, SMS & CRM Marketing',       icon: '◈', color: '#06D6A0' },
  { label: 'SEO & Performance Management',     icon: '◎', color: '#9B5DE5' },
  { label: 'OOH Advertising',                  icon: '◉', color: '#FF6B5B' },
  { label: 'Analytics & Performance',          icon: '◆', color: '#4CC9F0' },
  { label: 'PR Management',                    icon: '⬡', color: '#cfa821' },
];

export default function ServiceShowcase() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [active, setActive] = useState(0);
  const frameRef = useRef(0);
  const progressRef = useRef(0);
  const DURATION = 200; // frames per slide

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let raf = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    // Particle pool
    type Particle = { x: number; y: number; vx: number; vy: number; r: number; alpha: number; color: string };
    const particles: Particle[] = Array.from({ length: 60 }, () => ({
      x: Math.random(), y: Math.random(),
      vx: (Math.random() - 0.5) * 0.001,
      vy: (Math.random() - 0.5) * 0.001,
      r: 1 + Math.random() * 2,
      alpha: 0.2 + Math.random() * 0.5,
      color: SERVICES[Math.floor(Math.random() * SERVICES.length)].color,
    }));

    let slideIdx = 0;
    let progress = 0;
    let nextSlide = 1;

    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      progress += 1 / DURATION;
      if (progress >= 1) {
        progress = 0;
        slideIdx = nextSlide;
        nextSlide = (nextSlide + 1) % SERVICES.length;
        setActive(slideIdx);
      }
      progressRef.current = progress;
      frameRef.current++;

      const cur = SERVICES[slideIdx];
      const nxt = SERVICES[nextSlide];
      const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;

      // Background gradient
      const grad = ctx.createLinearGradient(0, 0, W, H);
      grad.addColorStop(0, '#0d0d20');
      grad.addColorStop(0.5, hexAlpha(cur.color, 0.15));
      grad.addColorStop(1, '#0d0d20');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      // Dot grid
      ctx.fillStyle = 'rgba(255,255,255,0.04)';
      const gs = 28;
      for (let x = gs; x < W; x += gs)
        for (let y = gs; y < H; y += gs) {
          ctx.beginPath(); ctx.arc(x, y, 1, 0, Math.PI * 2); ctx.fill();
        }

      // Moving particles
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = 1; if (p.x > 1) p.x = 0;
        if (p.y < 0) p.y = 1; if (p.y > 1) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x * W, p.y * H, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      // Service number background watermark
      ctx.save();
      ctx.font = `bold ${H * 1.2}px 'Nexa', 'Calibri', sans-serif`;
      ctx.fillStyle = hexAlpha(cur.color, 0.04);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(String(slideIdx + 1).padStart(2, '0'), W / 2, H / 2);
      ctx.restore();

      // Slide-in text (current)
      const curAlpha = progress > 0.75 ? 1 - (progress - 0.75) * 4 : 1;
      const curY = H / 2 + ease * (-H * 0.1);

      // Accent line
      const lineW = W * 0.12;
      ctx.save();
      ctx.globalAlpha = curAlpha * 0.9;
      const lineGrad = ctx.createLinearGradient(W / 2 - lineW / 2, 0, W / 2 + lineW / 2, 0);
      lineGrad.addColorStop(0, 'transparent');
      lineGrad.addColorStop(0.5, cur.color);
      lineGrad.addColorStop(1, 'transparent');
      ctx.strokeStyle = lineGrad;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(W / 2 - lineW / 2, curY - H * 0.14);
      ctx.lineTo(W / 2 + lineW / 2, curY - H * 0.14);
      ctx.stroke();
      ctx.restore();

      // Service label
      ctx.save();
      ctx.globalAlpha = curAlpha;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const fontSize = Math.min(W * 0.055, 36);
      ctx.font = `700 ${fontSize}px 'Nexa', 'Calibri', sans-serif`;
      ctx.fillStyle = '#ffffff';
      ctx.fillText(cur.label, W / 2, curY);
      ctx.restore();

      // Next service fading in
      if (progress > 0.8) {
        const nxtAlpha = (progress - 0.8) * 5;
        ctx.save();
        ctx.globalAlpha = nxtAlpha * 0.9;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = `700 ${fontSize}px 'Nexa', 'Calibri', sans-serif`;
        ctx.fillStyle = '#ffffff';
        ctx.fillText(nxt.label, W / 2, H / 2 + H * 0.04);
        ctx.restore();
      }

      // Progress bar
      ctx.save();
      ctx.fillStyle = 'rgba(255,255,255,0.08)';
      ctx.fillRect(W * 0.1, H - 6, W * 0.8, 2);
      const barGrad = ctx.createLinearGradient(W * 0.1, 0, W * 0.1 + W * 0.8 * progress, 0);
      barGrad.addColorStop(0, cur.color);
      barGrad.addColorStop(1, nxt.color);
      ctx.fillStyle = barGrad;
      ctx.fillRect(W * 0.1, H - 6, W * 0.8 * progress, 2);
      ctx.restore();

      // Dots indicator
      const dotR = 3, dotGap = 16, totalW = SERVICES.length * dotGap;
      SERVICES.forEach((s, i) => {
        ctx.beginPath();
        ctx.arc(W / 2 - totalW / 2 + i * dotGap + dotGap / 2, H - 20, dotR, 0, Math.PI * 2);
        ctx.fillStyle = i === slideIdx ? s.color : 'rgba(255,255,255,0.2)';
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <div className="svc-showcase-wrap">
      <canvas ref={canvasRef} className="svc-showcase-canvas" aria-label="Wide Wings Media services showcase" />
    </div>
  );
}

function hexAlpha(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}
