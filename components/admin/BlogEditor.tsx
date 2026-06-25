'use client';
import { useState, useEffect, useCallback } from 'react';
import { POSTS } from '@/app/blogs/posts-data';

type Tab = 'edit' | 'preview';

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

  const post = POSTS.find(p => p.slug === slug);
  const wordCount = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').filter(Boolean).length;

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
          <select
            value={slug}
            onChange={e => setSlug(e.target.value)}
            className="adm-input"
            style={{ maxWidth: 480, width: '100%' }}
          >
            {POSTS.map(p => (
              <option key={p.slug} value={p.slug}>
                [{p.category}] {p.title}
              </option>
            ))}
          </select>
          {post && (
            <div style={{ marginTop: 8, fontSize: '0.78rem', color: '#9ca3af' }}>
              Slug: <code style={{ background: '#1f2937', padding: '1px 6px', borderRadius: 4 }}>{post.slug}</code>
              &nbsp;&nbsp;Category: <strong style={{ color: '#d1d5db' }}>{post.category}</strong>
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
            <p style={{ fontSize: '0.8rem', color: '#9ca3af', marginBottom: 8 }}>
              Paste HTML content below. Use standard HTML tags: &lt;h2&gt;, &lt;h3&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;strong&gt;, &lt;em&gt;, &lt;br /&gt;
            </p>
            {loading ? (
              <div style={{ padding: 40, textAlign: 'center', color: '#6b7280' }}>Loading…</div>
            ) : (
              <textarea
                value={html}
                onChange={e => setHtml(e.target.value)}
                className="adm-input"
                style={{
                  width: '100%', minHeight: 500, fontFamily: 'monospace',
                  fontSize: '0.82rem', lineHeight: 1.6, resize: 'vertical',
                }}
                placeholder={`<h2>Section heading</h2>\n<p>Your paragraph text here...</p>\n<ul>\n  <li>List item</li>\n</ul>`}
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
