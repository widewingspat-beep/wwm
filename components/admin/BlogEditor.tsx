'use client';
import { useState, useEffect, useCallback } from 'react';
import { POSTS } from '@/app/blogs/posts-data';

type Tab = 'edit' | 'preview';

function extractBodyContent(input: string): string {
  // If it's a full HTML document, extract only the body content
  if (!input.includes('<!DOCTYPE') && !input.includes('<html') && !input.includes('<body')) {
    return input.trim();
  }

  // Extract everything inside <body>...</body>
  const bodyMatch = input.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let content = bodyMatch ? bodyMatch[1] : input;

  // Remove wrapper divs like <div class="container"> and <div class="meta">
  content = content.replace(/<div[^>]*class=["'][^"']*(?:container|meta|wrapper)[^"']*["'][^>]*>[\s\S]*?<\/div>/gi, (match) => {
    // Keep inner content of container div, remove meta div entirely
    if (/class=["'][^"']*meta[^"']*["']/.test(match)) return '';
    // For container, extract inner HTML
    const inner = match.replace(/^<div[^>]*>/, '').replace(/<\/div>$/, '');
    return inner;
  });

  // Remove <style> blocks
  content = content.replace(/<style[\s\S]*?<\/style>/gi, '');

  // Remove inline style attributes
  content = content.replace(/\s*style=["'][^"']*["']/gi, '');

  // Remove class attributes that aren't needed (keep structure tags clean)
  content = content.replace(/\s*class=["'][^"']*["']/gi, '');

  // Clean up empty lines and trim
  content = content.replace(/\n{3,}/g, '\n\n').trim();

  return content;
}

export default function BlogEditor() {
  const [slug, setSlug] = useState(POSTS[0]?.slug ?? '');
  const [html, setHtml] = useState('');
  const [tab, setTab] = useState<Tab>('edit');
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);

  const loadContent = useCallback(async (s: string) => {
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch(`/api/admin/blog-content?slug=${encodeURIComponent(s)}`);
      const data = await res.json();
      setHtml(data.content ?? '');
    } catch {
      setHtml('');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadContent(slug); }, [slug, loadContent]);

  async function handleSave() {
    setSaving(true);
    setStatus(null);
    try {
      const res = await fetch('/api/admin/blog-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, content: html }),
      });
      if (res.ok) {
        setStatus({ type: 'success', msg: `Published! Live at /blogs/${slug}` });
      } else {
        const d = await res.json();
        setStatus({ type: 'error', msg: d.error ?? 'Save failed' });
      }
    } catch {
      setStatus({ type: 'error', msg: 'Network error — try again' });
    } finally {
      setSaving(false);
    }
  }

  async function handleReset() {
    if (!confirm('Remove custom content? The page will fall back to the hardcoded version.')) return;
    setSaving(true);
    try {
      await fetch('/api/admin/blog-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, content: '' }),
      });
      setHtml('');
      setStatus({ type: 'success', msg: 'Reset — page now shows hardcoded content.' });
    } finally {
      setSaving(false);
    }
  }

  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target?.result as string;
      setHtml(extractBodyContent(text));
      setTab('edit');
      setStatus(null);
    };
    reader.readAsText(file);
    // Reset input so same file can be re-uploaded
    e.target.value = '';
  }

  const [search, setSearch] = useState('');
  const filteredPosts = search.trim()
    ? POSTS.filter(p => p.title.toLowerCase().includes(search.toLowerCase()) || p.slug.includes(search.toLowerCase()))
    : POSTS;

  const post = POSTS.find(p => p.slug === slug);
  const wordCount = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').filter(Boolean).length;
  const liveUrl = `https://wwm-mu.vercel.app/blogs/${slug}`;

  return (
    <div className="blog-editor">
      {/* Post selector */}
      <div className="adm-card" style={{ marginBottom: 20 }}>
        <div className="adm-card-head">
          <div className="adm-card-title">Select Blog Post</div>
          {post && (
            <a
              href={`/blogs/${slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="adm-btn adm-btn-outline adm-btn-sm"
              style={{ textDecoration: 'none' }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              View Live
            </a>
          )}
        </div>
        <div style={{ padding: '16px 24px' }}>
          {/* Search input */}
          <div style={{ position: 'relative', maxWidth: 600, marginBottom: 10 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"
              style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search blog title..."
              className="adm-input"
              style={{ width: '100%', paddingLeft: 32 }}
            />
          </div>

          {/* Dropdown filtered by search */}
          <select
            value={slug}
            onChange={e => { setSlug(e.target.value); setSearch(''); }}
            className="adm-input"
            size={search ? Math.min(filteredPosts.length + 1, 8) : 1}
            style={{ maxWidth: 600, width: '100%' }}
          >
            {filteredPosts.length === 0 && (
              <option disabled>No posts found</option>
            )}
            {filteredPosts.map(p => (
              <option key={p.slug} value={p.slug}>
                {p.title} — /blogs/{p.slug}
              </option>
            ))}
          </select>

          {/* Selected post info */}
          {post && (
            <div style={{ marginTop: 12, padding: '12px 16px', background: '#0f172a', borderRadius: 8, border: '1px solid #1e3a5f' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#e2e8f0', marginBottom: 4 }}>
                {post.title}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: 6 }}>
                Category: <span style={{ color: '#94a3b8' }}>{post.category}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Live URL:</span>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: '0.72rem', color: '#3b82f6', wordBreak: 'break-all' }}>
                  {liveUrl}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Editor card */}
      <div className="adm-card">
        <div className="adm-card-head">
          <div style={{ display: 'flex', gap: 4 }}>
            <button
              className={`adm-btn adm-btn-sm ${tab === 'edit' ? 'adm-btn-primary' : 'adm-btn-outline'}`}
              onClick={() => setTab('edit')}
            >Edit HTML</button>
            <button
              className={`adm-btn adm-btn-sm ${tab === 'preview' ? 'adm-btn-primary' : 'adm-btn-outline'}`}
              onClick={() => setTab('preview')}
            >Preview</button>
          </div>
          <span style={{ fontSize: '0.78rem', color: '#9ca3af' }}>{wordCount} words</span>
        </div>

        {tab === 'edit' ? (
          <div style={{ padding: '0 24px 16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
              <p style={{ fontSize: '0.8rem', color: '#9ca3af', margin: 0 }}>
                Paste your full HTML page, or upload an <strong style={{ color: '#d1d5db' }}>.html file</strong> — wrapper tags are stripped automatically.
              </p>
              <label style={{
                display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer',
                padding: '6px 14px', borderRadius: 6, fontSize: '0.8rem', fontWeight: 600,
                background: '#1f2937', color: '#d1d5db', border: '1px solid #374151',
                whiteSpace: 'nowrap', flexShrink: 0,
              }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
                Upload HTML File
                <input
                  type="file"
                  accept=".html,.htm"
                  onChange={handleFileUpload}
                  style={{ display: 'none' }}
                />
              </label>
            </div>
            {loading ? (
              <div style={{ padding: 40, textAlign: 'center', color: '#6b7280' }}>Loading…</div>
            ) : (
              <textarea
                value={html}
                onChange={e => setHtml(e.target.value)}
                onPaste={e => {
                  e.preventDefault();
                  const pasted = e.clipboardData.getData('text');
                  setHtml(extractBodyContent(pasted));
                }}
                className="adm-input"
                style={{
                  width: '100%', minHeight: 500, fontFamily: 'monospace',
                  fontSize: '0.82rem', lineHeight: 1.6, resize: 'vertical',
                }}
                placeholder={`Paste your full HTML page here — it will be cleaned automatically.`}
                spellCheck={false}
              />
            )}
          </div>
        ) : (
          <div
            style={{ padding: '20px 24px', minHeight: 300, color: '#e5e7eb', lineHeight: 1.8 }}
            className="bp-article"
            dangerouslySetInnerHTML={{ __html: html || '<p style="color:#6b7280;font-style:italic">Nothing to preview yet.</p>' }}
          />
        )}

        {/* Actions */}
        <div style={{ padding: '12px 24px 20px', borderTop: '1px solid #1f2937', display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
          <button
            className="adm-btn adm-btn-primary"
            onClick={handleSave}
            disabled={saving || loading}
          >
            {saving ? 'Publishing…' : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Publish to Live Site
              </>
            )}
          </button>

          <button
            className="adm-btn adm-btn-outline adm-btn-sm"
            onClick={handleReset}
            disabled={saving || !html}
            style={{ color: '#ef4444', borderColor: '#ef4444' }}
          >
            Reset to Default
          </button>

          {status && (
            <span style={{
              fontSize: '0.82rem', padding: '6px 12px', borderRadius: 6,
              background: status.type === 'success' ? '#052e16' : '#450a0a',
              color: status.type === 'success' ? '#4ade80' : '#f87171',
            }}>
              {status.type === 'success' ? '✓ ' : '✕ '}{status.msg}
            </span>
          )}
        </div>
      </div>

      <div style={{ marginTop: 12, fontSize: '0.75rem', color: '#6b7280' }}>
        <strong style={{ color: '#9ca3af' }}>How it works:</strong> Content saved here overrides the hardcoded version and goes live instantly on the Vercel edge. &quot;Reset to Default&quot; removes the override and restores the original.
      </div>
    </div>
  );
}
