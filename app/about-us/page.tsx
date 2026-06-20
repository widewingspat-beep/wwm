'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import './about-us.css';

const team = [
  { name: 'Mina Banoub',              title: 'Sales Director',           img: '/Mina.webp' },
  { name: 'Moamen Habrout',           title: 'Sales Manager',            img: '/Moamen.webp' },
  { name: 'Alaa Mokhless Ali',        title: 'Account Manager',          img: '/Alaa.webp' },
  { name: 'Nouran Mamdouh',           title: 'Account Manager',          img: '/nowran.webp' },
  { name: 'Ebtehal Elnoras',          title: 'Account Manager',          img: '/Ebtehal.webp' },
  { name: 'Rawan Akram',              title: 'Account Manager',          img: '/RawanAkram.webp' },
  { name: 'Mohamed Shaarawi',         title: 'Full-Stack Web Developer', img: '/Shaarawi.webp' },
  { name: 'Lawrence Peter Watyabuko', title: 'SEO Specialist',           img: '/Lawrence.webp' },
  { name: 'Mohamed Ibrahim Juba',     title: 'Graphic Designer',         img: '/MohamedIbrahimJuba.webp' },
  { name: 'Mahmoud Ismail',           title: 'Graphic Designer',         img: '/MahmoudIsmail.webp' },
  { name: 'Prasanna Veeramani',       title: 'Graphic Designer',         img: '/Prasanna.webp' },
  { name: 'Nesma Ibrahim',            title: 'Graphic Designer',         img: '/Nesma.webp' },
  { name: 'Omar Mohamed',             title: 'Video Editor',             img: '/Omar.webp' },
  { name: 'Asmaa Mostafa',            title: 'Content Creator',          img: '/Asmaa.webp' },
  { name: 'Doha Ghareeb',             title: 'Content Creator',          img: '/Doha.webp' },
  { name: 'Eslam Deif',               title: 'Media Buyer',              img: '/Eslam.webp' },
  { name: 'Muhammad Hamza Khalid',    title: 'Media Buyer',              img: '/Hamza.webp' },
  { name: 'Kareem Ayman Abdu',        title: 'Media Buyer',              img: '/Kareemayman.webp' },
  { name: 'Rana Amir Irshad',         title: 'Cash Flow In-charge',      img: '/Amir.webp' },
  { name: 'Joy Donald Gomez',         title: 'Strategic Consultant',     img: '/Joydonald.webp' },
];

const COLORS = ['#FF6B5B','#FFA94D','#FFD166','#06D6A0','#4CC9F0','#9B5DE5'];

function CtaSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const GAP = 60;
    let raf = 0;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMove = (e: MouseEvent | TouchEvent) => {
      const r = canvas.getBoundingClientRect();
      const src = 'touches' in e ? e.touches[0] : e;
      mouse.current = { x: src.clientX - r.left, y: src.clientY - r.top };
    };
    const section = canvas.parentElement!;
    section.addEventListener('mousemove', onMove);
    section.addEventListener('touchmove', onMove as any);
    section.addEventListener('mouseleave', () => { mouse.current = { x: -999, y: -999 }; });

    const draw = () => {
      const { width: W, height: H } = canvas;
      ctx.clearRect(0, 0, W, H);
      const { x: mx, y: my } = mouse.current;
      const RADIUS = 180;

      // vertical lines
      for (let x = GAP; x < W; x += GAP) {
        const dist = Math.abs(x - mx);
        if (dist < RADIUS) {
          const t = 1 - dist / RADIUS;
          const ci = Math.floor((x / GAP) % COLORS.length);
          ctx.strokeStyle = COLORS[ci];
          ctx.globalAlpha = t * 0.85;
          ctx.lineWidth = 1.5 + t * 2;
        } else {
          ctx.strokeStyle = '#ccc';
          ctx.globalAlpha = 0.35;
          ctx.lineWidth = 1;
        }
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }

      // horizontal lines
      for (let y = GAP; y < H; y += GAP) {
        const dist = Math.abs(y - my);
        if (dist < RADIUS) {
          const t = 1 - dist / RADIUS;
          const ci = Math.floor((y / GAP) % COLORS.length);
          ctx.strokeStyle = COLORS[ci];
          ctx.globalAlpha = t * 0.85;
          ctx.lineWidth = 1.5 + t * 2;
        } else {
          ctx.strokeStyle = '#ccc';
          ctx.globalAlpha = 0.35;
          ctx.lineWidth = 1;
        }
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      section.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <section id="au-cta" className="au-cta-white">
      <canvas ref={canvasRef} className="au-cta-canvas" />
      <div className="au-cta-content">
        <div className="au-eyebrow au-eyebrow-dark"><span className="dot dot-dark" />END CREDITS</div>
        <h2 className="au-cta-h2 au-cta-h2-dark">Ready to write the next scene for your brand?</h2>
        <Link href="/contact" className="au-ticket">Free Consultation &nbsp;→</Link>
      </div>
    </section>
  );
}

export default function AboutUsPage() {
  return (
    <div id="au-page">

      {/* ── HERO ── */}
      <section id="au-hero-orig">
        <div className="au-hero-bg" />
        <div className="au-hero-glow-1" />
        <div className="au-hero-glow-2" />
        <div className="au-hero-inner">
          <div>
            <div className="au-hero-badge">
              <div className="au-hero-badge-dot" />
              <span>About Us</span>
            </div>
            <h1 className="au-hero-h1-orig">
              Wide Wings Media:<br />
              A Digital Marketing Partner<br />
              <em>You Can Trust</em>
            </h1>
            <p className="au-hero-sub-orig">
              We believe in limitless potential. Our mission is to help brands break free from boundaries and explore new horizons — empowering businesses to spread their wings and soar way beyond expectations.
            </p>
            <div className="au-hero-actions">
              <Link href="/contact" className="btn-primary">
                Free Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <Link href="#au-team" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,.25)', color: '#fff' }}>
                Meet the Team
              </Link>
            </div>
          </div>
          <div className="au-stat-cards">
            {[
              { num: '5+',  lbl: 'Years of Excellence' },
              { num: '62+', lbl: 'Clients Served' },
              { num: '11+', lbl: 'Countries We Reach' },
              { num: '50+', lbl: 'Brand Partners' },
            ].map((s, i) => (
              <div key={i} className="au-stat-card">
                <div className="au-stat-num">{s.num}</div>
                <div className="au-stat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="au-divider" />

      {/* ── FOUNDERS ── */}
      <section id="au-founders">
        <div className="au-founders-inner">

          {/* Reem — photo left, content right */}
          <div className="au-founder-card">
            <div className="au-fc-photo">
              <Image src="/Reem.jpg" alt="Reem Osman" fill sizes="50vw" priority />
            </div>
            <div className="au-fc-panel">
              <div className="au-fc-watermark">WIDE WINGS</div>
              <div className="au-fs-name">Reem Osman</div>
              <div className="au-fs-middle">
                <div className="au-fs-quote">
                  <blockquote>&ldquo;As the CEO of Wide Wings Media, I carry the responsibility of every brand that puts its trust in us.&rdquo;</blockquote>
                </div>
                <p className="au-fs-bio">Our team&apos;s expertise and dedication are what let me make that promise with confidence. Together, we turn ambitious ideas into results our clients can measure.</p>
              </div>
              <div className="au-fs-bottom">
                <Link href="/contact" className="au-fs-arrow" aria-label="Connect with Reem Osman">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M7 17L17 7M9 7h8v8"/></svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Seham — content left, photo right */}
          <div className="au-founder-card is-reversed">
            <div className="au-fc-photo">
              <Image src="/SehamTeam.webp" alt="Seham Batterjee" fill sizes="50vw" />
            </div>
            <div className="au-fc-panel">
              <div className="au-fc-watermark">WIDE WINGS</div>
              <div className="au-fs-name">Seham Batterjee</div>
              <div className="au-fs-middle">
                <div className="au-fs-quote">
                  <blockquote>&ldquo;I built Wide Wings Media because I believe great marketing should never feel like guesswork.&rdquo;</blockquote>
                </div>
                <p className="au-fs-bio">Every brand that works with us gets a partner that&apos;s as invested in their growth as they are. That&apos;s the standard we hold ourselves to, every single day.</p>
              </div>
              <div className="au-fs-bottom">
                <Link href="/contact" className="au-fs-arrow" aria-label="Connect with Seham Batterjee">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M7 17L17 7M9 7h8v8"/></svg>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <hr className="au-divider" />

      {/* ── TEAM ── */}
      <section id="au-team" className="au-wrap">
        <div className="au-cast-head">
          <div className="au-eyebrow"><span className="dot" />FEATURING</div>
          <h2>Expert Team Members</h2>
          <p>The best people to support your project</p>
        </div>
        <div className="au-cast-grid">
          {team.map((m, i) => {
            const row  = Math.floor(i / 4);
            const col  = i % 4;
            const delay = (row === 0 ? col : col) * 0.05;
            return (
              <div key={m.name} className="au-cast-card" style={{ '--d': `${delay}s` } as React.CSSProperties}>
                <div className="frame">
                  <Image src={m.img} alt={m.name} fill sizes="300px" style={{ objectFit:'cover', objectPosition:'center 12%' }} loading="lazy" />
                  <div className="spotlight" />
                  <div className="grain" />
                </div>
                <div className="meta">
                  <div>
                    <h3>{m.name}</h3>
                    <p className="role">{m.title}</p>
                    <span className="rule" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <CtaSection />
    </div>
  );
}
