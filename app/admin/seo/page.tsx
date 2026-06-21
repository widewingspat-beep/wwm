'use client';
import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import AdminShell from '@/components/admin/AdminShell';
import type { SessionPayload } from '@/lib/admin/auth';
import type { SeoData } from '@/lib/admin/store';

const EMPTY_SEO: Partial<SeoData> = {
  metaTitle: '', metaDescription: '', focusKeyword: '', secondaryKeywords: '',
  canonicalUrl: '', ogTitle: '', ogDescription: '', ogImage: '', featuredImage: '',
  featuredImageAlt: '', twitterCard: 'summary_large_image', robots: 'index, follow',
  schemaType: 'WebPage', noindex: false, nofollow: false,
};

function CharCount({ val, max, warn }: { val: string; max: number; warn: number }) {
  const len = val.length;
  const cls = len > max ? 'adm-char-over' : len > warn ? 'adm-char-warn' : 'adm-char-ok';
  return <span className={`adm-char-counter ${cls}`}>{len}/{max}</span>;
}

function SeoScore({ data }: { data: Partial<SeoData> }) {
  let score = 0;
  if (data.metaTitle && data.metaTitle.length >= 30 && data.metaTitle.length <= 60) score += 20;
  if (data.metaDescription && data.metaDescription.length >= 100 && data.metaDescription.length <= 160) score += 20;
  if (data.focusKeyword) score += 15;
  if (data.ogTitle && data.ogImage) score += 15;
  if (data.canonicalUrl) score += 10;
  if (data.featuredImage && data.featuredImageAlt) score += 10;
  if (data.schemaType) score += 10;
  const cls = score >= 70 ? 'adm-score-good' : score >= 40 ? 'adm-score-mid' : 'adm-score-low';
  const label = score >= 70 ? 'Good' : score >= 40 ? 'Needs Work' : 'Poor';
  return (
    <div className="adm-seo-score">
      <span style={{ minWidth: 52 }}>{score}%</span>
      <div className="adm-score-bar"><div className={`adm-score-fill ${cls}`} style={{ width: `${score}%` }} /></div>
      <span style={{ minWidth: 60, color: score >= 70 ? '#16a34a' : score >= 40 ? '#f59e0b' : '#ef4444' }}>{label}</span>
    </div>
  );
}

function SeoEditorInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initPage = searchParams.get('page') ?? '';

  const [session, setSession] = useState<SessionPayload | null>(null);
  const [pages, setPages] = useState<{ id: string; title: string; slug: string }[]>([]);
  const [selectedPage, setSelectedPage] = useState(initPage);
  const [form, setForm] = useState<Partial<SeoData>>(EMPTY_SEO);
  const [redirects, setRedirects] = useState<{ id: string; from: string; to: string; type: '301' | '302' }[]>([]);
  const [newRedirect, setNewRedirect] = useState({ from: '', to: '', type: '301' as '301' | '302' });
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/session').then(r => r.ok ? r.json() : null).then(s => s && setSession(s));
    fetch('/api/admin/pages').then(r => {
      if (r.status === 401) { router.push('/admin/login'); return; }
      return r.json();
    }).then(data => { if (data) setPages(data); setLoading(false); });
    fetch('/api/admin/seo').then(r => r.json()).then(data => {
      if (initPage && data) {
        const found = data.find((s: SeoData) => s.pageId === initPage);
        if (found) setForm(found);
      }
    });
    fetch('/api/admin/redirects').then(r => r.ok ? r.json() : []).then(data => data && setRedirects(data));
  }, []);

  function loadPage(pageId: string) {
    setSelectedPage(pageId);
    const page = pages.find(p => p.id === pageId);
    fetch('/api/admin/seo').then(r => r.json()).then(data => {
      const found = data?.find((s: SeoData) => s.pageId === pageId);
      setForm(found ?? { ...EMPTY_SEO, pageId, pageTitle: page?.title ?? '', slug: page?.slug ?? '' });
    });
  }

  function set(key: keyof SeoData, val: string | boolean) {
    setForm(prev => ({ ...prev, [key]: val }));
    setSaved(false);
  }

  async function handleSave() {
    const res = await fetch('/api/admin/seo', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, pageId: selectedPage }),
    });
    if (res.ok) { setSaved(true); setTimeout(() => setSaved(false), 3000); }
  }

  async function addRedirect() {
    if (!newRedirect.from || !newRedirect.to) return;
    const res = await fetch('/api/admin/redirects', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newRedirect) });
    if (res.ok) { const r = await res.json(); setRedirects(prev => [...prev, r]); setNewRedirect({ from: '', to: '', type: '301' }); }
  }

  async function deleteRedirect(id: string) {
    await fetch('/api/admin/redirects', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
    setRedirects(prev => prev.filter(r => r.id !== id));
  }

  const fakeSession: SessionPayload = session ?? { username: 'seouser', role: 'seo', displayName: 'SEO Manager' };

  return (
    <AdminShell session={fakeSession} title="SEO Manager" subtitle="Manage on-page SEO, metadata, redirects and performance">

      {/* PAGE SELECTOR */}
      <div className="adm-card" style={{ marginBottom: 24 }}>
        <div className="adm-card-head"><div className="adm-card-title">Select Page to Edit</div></div>
        <div style={{ padding: '16px 24px' }}>
          <div className="adm-page-selector">
            {pages.map(p => (
              <button key={p.id} className={`adm-page-chip ${selectedPage === p.id ? 'sel' : ''}`} onClick={() => loadPage(p.id)}>
                {p.title}
              </button>
            ))}
          </div>
          {selectedPage && <SeoScore data={form} />}
        </div>
      </div>

      {selectedPage && (
        <>
          {/* ON-PAGE SEO */}
          <div className="adm-card">
            <div className="adm-card-head">
              <div className="adm-card-title">On-Page SEO</div>
              {saved && <span style={{ color: '#16a34a', fontSize: '0.82rem', fontWeight: 600 }}>✓ Saved</span>}
            </div>
            <div style={{ padding: 24 }}>
              <div className="adm-section-title">Keywords</div>
              <div className="adm-form-grid">
                <div className="adm-field">
                  <label className="adm-label">Focus / Primary Keyword</label>
                  <input className="adm-input" value={form.focusKeyword ?? ''} onChange={e => set('focusKeyword', e.target.value)} placeholder="e.g. digital marketing agency Dubai" />
                </div>
                <div className="adm-field">
                  <label className="adm-label">Secondary Keywords <span className="adm-label-hint">(comma separated)</span></label>
                  <input className="adm-input" value={form.secondaryKeywords ?? ''} onChange={e => set('secondaryKeywords', e.target.value)} placeholder="e.g. UAE marketing, social media Dubai" />
                </div>
              </div>

              <div className="adm-section-title">Meta Tags</div>
              <div className="adm-form-grid">
                <div className="adm-field adm-form-full">
                  <label className="adm-label">
                    SEO Title (Page Title Tag)
                    <CharCount val={form.metaTitle ?? ''} warn={50} max={60} />
                  </label>
                  <input className="adm-input" value={form.metaTitle ?? ''} onChange={e => set('metaTitle', e.target.value)} placeholder="e.g. Digital Marketing Agency Dubai | Wide Wings Media" maxLength={70} />
                </div>
                <div className="adm-field adm-form-full">
                  <label className="adm-label">
                    Meta Description
                    <CharCount val={form.metaDescription ?? ''} warn={140} max={160} />
                  </label>
                  <textarea className="adm-textarea" value={form.metaDescription ?? ''} onChange={e => set('metaDescription', e.target.value)} placeholder="Concise description for search results (120–160 chars)…" maxLength={180} rows={3} />
                </div>
                <div className="adm-field">
                  <label className="adm-label">Canonical URL</label>
                  <input className="adm-input" value={form.canonicalUrl ?? ''} onChange={e => set('canonicalUrl', e.target.value)} placeholder="https://widewingsmedia.ae/services" />
                </div>
                <div className="adm-field">
                  <label className="adm-label">Robots</label>
                  <select className="adm-select" value={form.robots ?? 'index, follow'} onChange={e => set('robots', e.target.value)}>
                    <option value="index, follow">index, follow</option>
                    <option value="noindex, follow">noindex, follow</option>
                    <option value="index, nofollow">index, nofollow</option>
                    <option value="noindex, nofollow">noindex, nofollow</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 24, marginTop: 8 }}>
                <div className="adm-toggle">
                  <button className={`adm-switch ${form.noindex ? 'on' : ''}`} onClick={() => set('noindex', !form.noindex)} />
                  <span className="adm-toggle-label">No Index</span>
                </div>
                <div className="adm-toggle">
                  <button className={`adm-switch ${form.nofollow ? 'on' : ''}`} onClick={() => set('nofollow', !form.nofollow)} />
                  <span className="adm-toggle-label">No Follow</span>
                </div>
              </div>

              <div className="adm-section-title">Featured Image &amp; Alt Text</div>
              <div className="adm-form-grid">
                <div className="adm-field">
                  <label className="adm-label">Featured Image URL</label>
                  <input className="adm-input" value={form.featuredImage ?? ''} onChange={e => set('featuredImage', e.target.value)} placeholder="/images/page-hero.jpg" />
                </div>
                <div className="adm-field">
                  <label className="adm-label">Featured Image Alt Tag</label>
                  <input className="adm-input" value={form.featuredImageAlt ?? ''} onChange={e => set('featuredImageAlt', e.target.value)} placeholder="Descriptive alt text for this image…" />
                </div>
              </div>

              <div className="adm-section-title">Open Graph (Social Sharing)</div>
              <div className="adm-form-grid">
                <div className="adm-field">
                  <label className="adm-label">OG Title</label>
                  <input className="adm-input" value={form.ogTitle ?? ''} onChange={e => set('ogTitle', e.target.value)} placeholder="Title when shared on Facebook / LinkedIn" />
                </div>
                <div className="adm-field">
                  <label className="adm-label">OG Image URL</label>
                  <input className="adm-input" value={form.ogImage ?? ''} onChange={e => set('ogImage', e.target.value)} placeholder="/og/page-og.jpg (1200×630px)" />
                </div>
                <div className="adm-field adm-form-full">
                  <label className="adm-label">
                    OG Description
                    <CharCount val={form.ogDescription ?? ''} warn={180} max={200} />
                  </label>
                  <textarea className="adm-textarea" value={form.ogDescription ?? ''} onChange={e => set('ogDescription', e.target.value)} rows={2} placeholder="Description when shared on social media…" />
                </div>
              </div>

              <div className="adm-section-title">Twitter / X Card</div>
              <div className="adm-form-grid">
                <div className="adm-field">
                  <label className="adm-label">Twitter Card Type</label>
                  <select className="adm-select" value={form.twitterCard ?? 'summary_large_image'} onChange={e => set('twitterCard', e.target.value)}>
                    <option value="summary_large_image">Summary Large Image</option>
                    <option value="summary">Summary</option>
                  </select>
                </div>
              </div>

              <div className="adm-section-title">Schema / Structured Data</div>
              <div className="adm-form-grid">
                <div className="adm-field">
                  <label className="adm-label">Schema Type</label>
                  <select className="adm-select" value={form.schemaType ?? 'WebPage'} onChange={e => set('schemaType', e.target.value)}>
                    <option value="WebPage">WebPage</option>
                    <option value="Organization">Organization</option>
                    <option value="LocalBusiness">LocalBusiness</option>
                    <option value="Service">Service</option>
                    <option value="Article">Article</option>
                    <option value="FAQPage">FAQPage</option>
                    <option value="BreadcrumbList">BreadcrumbList</option>
                  </select>
                </div>
              </div>

              <div style={{ marginTop: 24, display: 'flex', gap: 10 }}>
                <button className="adm-btn adm-btn-primary" onClick={handleSave}>Save SEO Settings</button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* URL REDIRECTS */}
      <div className="adm-card">
        <div className="adm-card-head">
          <div className="adm-card-title">URL Redirects</div>
        </div>
        <div style={{ padding: 24 }}>
          <div className="adm-form-grid" style={{ marginBottom: 12 }}>
            <div className="adm-field">
              <label className="adm-label">From URL</label>
              <input className="adm-input" value={newRedirect.from} onChange={e => setNewRedirect(r => ({ ...r, from: e.target.value }))} placeholder="/old-page" />
            </div>
            <div className="adm-field">
              <label className="adm-label">To URL</label>
              <input className="adm-input" value={newRedirect.to} onChange={e => setNewRedirect(r => ({ ...r, to: e.target.value }))} placeholder="/new-page" />
            </div>
            <div className="adm-field">
              <label className="adm-label">Type</label>
              <select className="adm-select" value={newRedirect.type} onChange={e => setNewRedirect(r => ({ ...r, type: e.target.value as '301' | '302' }))}>
                <option value="301">301 — Permanent</option>
                <option value="302">302 — Temporary</option>
              </select>
            </div>
            <div className="adm-field" style={{ justifyContent: 'flex-end' }}>
              <label className="adm-label">&nbsp;</label>
              <button className="adm-btn adm-btn-primary" onClick={addRedirect}>Add Redirect</button>
            </div>
          </div>
          {redirects.length > 0 ? (
            <table className="adm-table">
              <thead><tr><th>From</th><th>To</th><th>Type</th><th></th></tr></thead>
              <tbody>
                {redirects.map(r => (
                  <tr key={r.id}>
                    <td><code style={{ background: '#f3f4f6', padding: '2px 6px', borderRadius: 4, fontSize: '0.82rem' }}>{r.from}</code></td>
                    <td><code style={{ background: '#f3f4f6', padding: '2px 6px', borderRadius: 4, fontSize: '0.82rem' }}>{r.to}</code></td>
                    <td><span className="adm-redirect-type">{r.type}</span></td>
                    <td><button className="adm-btn adm-btn-sm" style={{ background: '#fef2f2', color: '#ef4444', border: '1px solid #fecaca' }} onClick={() => deleteRedirect(r.id)}>Remove</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p style={{ color: '#9ca3af', fontSize: '0.88rem' }}>No redirects configured yet.</p>
          )}
        </div>
      </div>

      {/* PERFORMANCE CHECKLIST */}
      <div className="adm-card">
        <div className="adm-card-head"><div className="adm-card-title">Speed &amp; Performance Checklist</div></div>
        <div style={{ padding: 24 }}>
          {[
            { label: 'Images use next/image or have explicit width/height', tip: 'Prevents layout shift (CLS)' },
            { label: 'All images have descriptive alt attributes', tip: 'Accessibility + image SEO' },
            { label: 'Fonts loaded with font-display: swap', tip: 'Reduces FOIT/FOUT' },
            { label: 'No render-blocking scripts in <head>', tip: 'Improves LCP' },
            { label: 'CSS is minified and unused CSS removed', tip: 'Reduces TBT' },
            { label: 'Third-party scripts loaded asynchronously', tip: 'e.g. Google Analytics, Meta Pixel' },
            { label: 'Sitemap submitted to Google Search Console', tip: 'Ensures all pages are indexed' },
            { label: 'Core Web Vitals passing in PageSpeed Insights', tip: 'LCP < 2.5s, CLS < 0.1, FID < 100ms' },
            { label: 'Canonical URLs set on all pages', tip: 'Prevents duplicate content penalties' },
            { label: 'HTTPS enabled and all pages redirect to https://', tip: 'Required for ranking' },
            { label: 'Mobile viewport meta tag present', tip: '<meta name="viewport" ...>' },
            { label: 'Structured data validated with Google Rich Results Test', tip: 'Enables rich snippets in SERP' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, padding: '10px 0', borderBottom: i < 11 ? '1px solid #f9fafb' : 'none', alignItems: 'flex-start' }}>
              <input type="checkbox" style={{ marginTop: 3, accentColor: '#a73184', width: 16, height: 16, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '0.88rem', color: '#374151', fontWeight: 600 }}>{item.label}</div>
                <div style={{ fontSize: '0.78rem', color: '#9ca3af', marginTop: 2 }}>{item.tip}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}

export default function SeoAdmin() {
  return (
    <Suspense fallback={null}>
      <SeoEditorInner />
    </Suspense>
  );
}
