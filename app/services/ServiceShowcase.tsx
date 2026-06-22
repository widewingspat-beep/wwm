'use client';
import { useEffect, useRef } from 'react';

const SERVICES = [
  { label: 'Web & App Development',           color: '#4CC9F0' },
  { label: 'Creative & Branding',             color: '#FF6B5B' },
  { label: 'Paid Advertising & Media Buying', color: '#FFA94D' },
  { label: 'Social Media Management',         color: '#a73184' },
  { label: 'Content Creation & Design',       color: '#FFD166' },
  { label: 'Email, SMS & CRM Marketing',      color: '#06D6A0' },
  { label: 'SEO & Performance Management',    color: '#9B5DE5' },
  { label: 'OOH Advertising',                 color: '#FF6B5B' },
  { label: 'Analytics & Performance',         color: '#4CC9F0' },
  { label: 'PR Management',                   color: '#cfa821' },
];

// null = logo/contact slide
const SLIDE_ORDER: (number | null)[] = [null, ...SERVICES.map((_, i) => i), null];
const DURATION = 210;
const LOGO_DURATION = 300;

export default function ServiceShowcase() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let raf = 0;

    const logo = new Image();
    logo.src = '/LogoWhite.svg';
    let logoReady = false;
    logo.onload = () => { logoReady = true; };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    type Particle = { x: number; y: number; vx: number; vy: number; r: number; alpha: number; color: string };
    const particles: Particle[] = Array.from({ length: 70 }, () => ({
      x: Math.random(), y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0008,
      vy: (Math.random() - 0.5) * 0.0008,
      r: 1 + Math.random() * 2.5,
      alpha: 0.15 + Math.random() * 0.45,
      color: SERVICES[Math.floor(Math.random() * SERVICES.length)].color,
    }));

    let slideIdx = 0;
    let progress = 0;

    function drawBackground(W: number, H: number, color: string) {
      const grad = ctx.createLinearGradient(0, 0, W, H);
      grad.addColorStop(0, '#0d0d20');
      grad.addColorStop(0.5, hexAlpha(color, 0.18));
      grad.addColorStop(1, '#0d0d20');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      ctx.fillStyle = 'rgba(255,255,255,0.035)';
      const gs = 28;
      for (let x = gs; x < W; x += gs)
        for (let y = gs; y < H; y += gs) {
          ctx.beginPath(); ctx.arc(x, y, 1, 0, Math.PI * 2); ctx.fill();
        }
    }

    function drawParticles(W: number, H: number) {
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
    }

    function drawLogoSlide(W: number, H: number, alpha: number) {
      ctx.save();
      ctx.globalAlpha = alpha;

      if (logoReady) {
        const logoW = Math.min(W * 0.44, 230);
        const logoH = logoW * 0.35;
        ctx.drawImage(logo, W / 2 - logoW / 2, H / 2 - logoH / 2 - H * 0.1, logoW, logoH);
      }

      const lineY = H / 2 + H * 0.02;
      const lineW = W * 0.3;
      const lineGrad = ctx.createLinearGradient(W / 2 - lineW / 2, 0, W / 2 + lineW / 2, 0);
      lineGrad.addColorStop(0, 'transparent');
      lineGrad.addColorStop(0.5, '#cfa821');
      lineGrad.addColorStop(1, 'transparent');
      ctx.strokeStyle = lineGrad;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(W / 2 - lineW / 2, lineY);
      ctx.lineTo(W / 2 + lineW / 2, lineY);
      ctx.stroke();

      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      const addrSize = Math.min(W * 0.026, 13.5);
      ctx.font = `400 ${addrSize}px 'Calibri', sans-serif`;
      ctx.fillStyle = 'rgba(255,255,255,0.5)';
      ctx.fillText('Al Quoz Industrial Area 3, Warehouse #47, Dubai, UAE', W / 2, lineY + 13);

      const phoneSize = Math.min(W * 0.029, 15);
      ctx.font = `600 ${phoneSize}px 'Nexa', 'Calibri', sans-serif`;
      ctx.fillStyle = 'rgba(255,255,255,0.78)';
      ctx.fillText('+971 4 335 2645   |   +971 55 565 7609', W / 2, lineY + 13 + addrSize + 10);

      ctx.restore();
    }

    function wrapText(text: string, maxWidth: number): string[] {
      const words = text.split(' ');
      const lines: string[] = [];
      let current = '';
      for (const word of words) {
        const test = current ? current + ' ' + word : word;
        if (ctx.measureText(test).width > maxWidth && current) {
          lines.push(current);
          current = word;
        } else {
          current = test;
        }
      }
      if (current) lines.push(current);
      return lines;
    }

    function drawServiceSlide(W: number, H: number, svcIdx: number, alpha: number) {
      const svc = SERVICES[svcIdx];
      ctx.save();
      ctx.globalAlpha = alpha;

      // Watermark number
      ctx.font = `bold ${H * 1.3}px 'Nexa', 'Calibri', sans-serif`;
      ctx.fillStyle = hexAlpha(svc.color, 0.045);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(String(svcIdx + 1).padStart(2, '0'), W / 2, H / 2);

      const fontSize = Math.min(W * 0.07, 46);
      ctx.font = `700 ${fontSize}px 'Nexa', 'Calibri', sans-serif`;
      const maxTextW = W * 0.82;
      const lines = wrapText(svc.label, maxTextW);
      const lineH = fontSize * 1.25;
      const totalH = lines.length * lineH;

      // Accent line above text block
      const blockTop = H / 2 - totalH / 2;
      const lineW = W * 0.14;
      const lineGrad = ctx.createLinearGradient(W / 2 - lineW / 2, 0, W / 2 + lineW / 2, 0);
      lineGrad.addColorStop(0, 'transparent');
      lineGrad.addColorStop(0.5, svc.color);
      lineGrad.addColorStop(1, 'transparent');
      ctx.strokeStyle = lineGrad;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(W / 2 - lineW / 2, blockTop - 16);
      ctx.lineTo(W / 2 + lineW / 2, blockTop - 16);
      ctx.stroke();

      // Service name lines
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      lines.forEach((line, i) => {
        ctx.fillText(line, W / 2, blockTop + i * lineH);
      });

      ctx.restore();
    }

    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      const isLogo = SLIDE_ORDER[slideIdx] === null;
      const dur = isLogo ? LOGO_DURATION : DURATION;
      progress += 1 / dur;

      if (progress >= 1) {
        progress = 0;
        slideIdx = (slideIdx + 1) % SLIDE_ORDER.length;
      }

      const nextIdx = (slideIdx + 1) % SLIDE_ORDER.length;
      const svcCur = SLIDE_ORDER[slideIdx];
      const svcNxt = SLIDE_ORDER[nextIdx];
      const color = svcCur !== null ? SERVICES[svcCur].color : '#cfa821';
      const colorNxt = svcNxt !== null ? SERVICES[svcNxt].color : '#cfa821';

      drawBackground(W, H, color);
      drawParticles(W, H);

      const curAlpha = progress > 0.82 ? 1 - (progress - 0.82) * (1 / 0.18) : 1;
      const nxtAlpha = progress > 0.82 ? (progress - 0.82) * (1 / 0.18) : 0;

      if (svcCur === null) drawLogoSlide(W, H, curAlpha);
      else drawServiceSlide(W, H, svcCur, curAlpha);

      if (nxtAlpha > 0) {
        if (svcNxt === null) drawLogoSlide(W, H, nxtAlpha);
        else drawServiceSlide(W, H, svcNxt, nxtAlpha);
      }

      // Progress bar
      ctx.fillStyle = 'rgba(255,255,255,0.07)';
      ctx.fillRect(W * 0.1, H - 6, W * 0.8, 2);
      const barGrad = ctx.createLinearGradient(W * 0.1, 0, W * 0.1 + W * 0.8 * progress, 0);
      barGrad.addColorStop(0, color);
      barGrad.addColorStop(1, colorNxt);
      ctx.fillStyle = barGrad;
      ctx.fillRect(W * 0.1, H - 6, W * 0.8 * progress, 2);

      // Dots
      const dotR = 3, dotGap = 16, totalW = SERVICES.length * dotGap;
      SERVICES.forEach((s, i) => {
        ctx.beginPath();
        ctx.arc(W / 2 - totalW / 2 + i * dotGap + dotGap / 2, H - 20, dotR, 0, Math.PI * 2);
        ctx.fillStyle = svcCur === i ? s.color : 'rgba(255,255,255,0.18)';
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
