import Link from 'next/link';

interface Props {
  title: string;
  category?: string;
}

export default function ComingSoon({ title, category = 'Page' }: Props) {
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0d0d2b 0%, #1a1a4a 50%, #2a1a3e 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 24px 60px', position: 'relative', overflow: 'hidden' }}>
      {/* Background glows */}
      <div style={{ position: 'absolute', width: '600px', height: '600px', borderRadius: '50%', background: 'rgba(167,49,132,.15)', filter: 'blur(100px)', top: '-100px', right: '-100px', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(207,168,33,.1)', filter: 'blur(80px)', bottom: '-80px', left: '5%', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '640px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', border: '1px solid rgba(207,168,33,.4)', padding: '7px 20px', marginBottom: '32px', background: 'rgba(207,168,33,.08)' }}>
          <div style={{ width: '6px', height: '6px', background: '#cfa821', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
          <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#cfa821' }}>{category}</span>
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.01em' }}>{title}</h1>
        <div style={{ width: '80px', height: '3px', background: 'linear-gradient(90deg, #b62d83, #cfa821)', margin: '0 auto 32px' }} />
        <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,.55)', lineHeight: 1.8, marginBottom: '48px', fontWeight: 300 }}>
          We&apos;re crafting something amazing for this page. Our team is working hard to bring you exceptional content very soon.
        </p>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', padding: '20px 36px', border: '1px solid rgba(255,255,255,.1)', background: 'rgba(255,255,255,.04)', marginBottom: '48px' }}>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 900, background: 'linear-gradient(135deg, #b62d83, #cfa821)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1 }}>COMING</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'rgba(255,255,255,.15)', lineHeight: 1 }}>SOON</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 32px', background: '#a73184', color: '#fff', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none' }}>
            ← Back to Home
          </Link>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 32px', border: '1px solid rgba(255,255,255,.2)', color: 'rgba(255,255,255,.8)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
