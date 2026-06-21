import Link from 'next/link';

interface Props {
  title: string;
  category?: string;
}

export default function ComingSoon({ title, category = 'Page' }: Props) {
  return (
    <main>
      {/* Hero — same dark dot-grid style as about-us / services */}
      <section style={{
        position: 'relative',
        minHeight: '620px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#0d0d20',
        textAlign: 'center',
      }}>
        {/* dot grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          pointerEvents: 'none', zIndex: 0,
        }} />
        {/* colour blob */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px', height: '500px',
          borderRadius: '50%',
          filter: 'blur(80px)',
          opacity: 0.4,
          background: 'radial-gradient(ellipse at 30% 40%, rgba(167,49,132,0.7) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(207,168,33,0.5) 0%, transparent 55%)',
          pointerEvents: 'none', zIndex: 1,
        }} />
        {/* bottom fade */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '100px',
          background: 'linear-gradient(0deg, #0d0d20, transparent)',
          pointerEvents: 'none', zIndex: 2,
        }} />

        <div style={{ position: 'relative', zIndex: 3, maxWidth: '700px', padding: '140px 24px 100px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', border: '1px solid rgba(207,168,33,.4)', padding: '7px 20px', marginBottom: '32px', background: 'rgba(207,168,33,.08)' }}>
            <div style={{ width: '6px', height: '6px', background: '#cfa821', borderRadius: '50%' }} />
            <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#cfa821' }}>{category}</span>
          </div>
          <h1 style={{ fontFamily: "'Nexa', 'Arial Black', sans-serif", fontSize: 'clamp(2.6rem, 6vw, 5.5rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.05, marginBottom: '24px', letterSpacing: '-0.02em' }}>{title}</h1>
          <div style={{ width: '80px', height: '3px', background: 'linear-gradient(90deg, #b62d83, #cfa821)', margin: '0 auto 32px' }} />
          <p style={{ fontFamily: "'Calibri', Arial, sans-serif", fontSize: '1.05rem', color: 'rgba(255,255,255,.6)', lineHeight: 1.8, marginBottom: '48px', fontWeight: 300 }}>
            We&apos;re crafting something amazing for this page. Our team is working hard to bring you exceptional content very soon.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' as const }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 32px', background: '#a73184', color: '#fff', fontFamily: "'Nexa', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' as const, textDecoration: 'none' }}>
              ← Back to Home
            </Link>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 32px', border: '1px solid rgba(255,255,255,.2)', color: 'rgba(255,255,255,.8)', fontFamily: "'Nexa', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' as const, textDecoration: 'none' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
