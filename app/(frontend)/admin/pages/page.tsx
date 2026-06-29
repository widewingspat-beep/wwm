'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import AdminShell from '@/components/admin/AdminShell';
import type { SessionPayload } from '@/lib/admin/auth';
import type { Page } from '@/lib/admin/store';

function PageForm({ onSave, onCancel, initial }: {
  onSave: (data: Partial<Page>) => void;
  onCancel: () => void;
  initial?: Partial<Page>;
}) {
  const [title, setTitle] = useState(initial?.title ?? '');
  const [slug, setSlug] = useState(initial?.slug ?? '');
  const [content, setContent] = useState(initial?.content ?? '');
  const [status, setStatus] = useState<'published' | 'draft'>(initial?.status ?? 'draft');

  function autoSlug(t: string) {
    return '/' + t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  return (
    <div style={{ padding: '24px' }}>
      <div className="adm-form-grid">
        <div className="adm-field">
          <label className="adm-label">Page Title</label>
          <input className="adm-input" value={title} onChange={e => { setTitle(e.target.value); if (!initial) setSlug(autoSlug(e.target.value)); }} placeholder="e.g. Our Portfolio" />
        </div>
        <div className="adm-field">
          <label className="adm-label">URL Slug</label>
          <input className="adm-input" value={slug} onChange={e => setSlug(e.target.value)} placeholder="/our-portfolio" />
        </div>
        <div className="adm-field">
          <label className="adm-label">Status</label>
          <select className="adm-select" value={status} onChange={e => setStatus(e.target.value as 'published' | 'draft')}>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>
        <div className="adm-field adm-form-full">
          <label className="adm-label">Page Description / Notes</label>
          <textarea className="adm-textarea" value={content} onChange={e => setContent(e.target.value)} rows={3} placeholder="Brief description of this page…" />
        </div>
      </div>
      <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
        <button className="adm-btn adm-btn-primary" onClick={() => onSave({ title, slug, content, status })}>Save Page</button>
        <button className="adm-btn adm-btn-outline" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default function PagesAdmin() {
  const router = useRouter();
  const [session, setSession] = useState<SessionPayload | null>(null);
  const [pages, setPages] = useState<Page[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Page | null>(null);
  const [loading, setLoading] = useState(true);
  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetch('/api/admin/pages').then(r => {
      if (r.status === 401) { router.push('/admin/login'); return; }
      return r.json();
    }).then(data => { if (data) setPages(data); setLoading(false); });

    fetch('/api/admin/session').then(r => r.ok ? r.json() : null).then(s => s && setSession(s));
  }, []);

  useEffect(() => {
    if (editing || showForm) {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [editing, showForm]);

  async function handleCreate(data: Partial<Page>) {
    const res = await fetch('/api/admin/pages', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    if (res.ok) { const p = await res.json(); setPages(prev => [...prev, p]); setShowForm(false); }
  }

  async function handleUpdate(data: Partial<Page>) {
    if (!editing) return;
    const res = await fetch('/api/admin/pages', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: editing.id, ...data }) });
    if (res.ok) { const p = await res.json(); setPages(prev => prev.map(x => x.id === p.id ? p : x)); setEditing(null); }
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this page?')) return;
    await fetch('/api/admin/pages', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
    setPages(prev => prev.filter(p => p.id !== id));
  }

  const fakeSession: SessionPayload = session ?? { username: 'webadmin', role: 'webadmin', displayName: 'Web Admin' };

  return (
    <AdminShell session={fakeSession} title="Pages" subtitle="Create and manage website pages">
      <div className="adm-card">
        <div className="adm-card-head">
          <div className="adm-card-title">All Pages ({pages.length})</div>
          {!showForm && !editing && (
            <button className="adm-btn adm-btn-primary adm-btn-sm" onClick={() => setShowForm(true)}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              New Page
            </button>
          )}
        </div>

        {showForm && (
          <div ref={formRef} style={{ borderBottom: '1px solid #f3f4f6' }}>
            <div style={{ padding: '14px 24px', background: '#fafafa', borderBottom: '1px solid #f3f4f6', fontWeight: 700, color: '#374151', fontSize: '0.9rem' }}>Create New Page</div>
            <PageForm onSave={handleCreate} onCancel={() => setShowForm(false)} />
          </div>
        )}

        {editing && (
          <div ref={formRef} style={{ borderBottom: '1px solid #f3f4f6' }}>
            <div style={{ padding: '14px 24px', background: '#fafafa', borderBottom: '1px solid #f3f4f6', fontWeight: 700, color: '#374151', fontSize: '0.9rem' }}>Edit: {editing.title}</div>
            <PageForm initial={editing} onSave={handleUpdate} onCancel={() => setEditing(null)} />
          </div>
        )}

        <table className="adm-table">
          <thead>
            <tr>
              <th>Title</th><th>Slug / URL</th><th>Status</th><th>Last Updated</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={5} style={{ textAlign: 'center', color: '#9ca3af', padding: '32px' }}>Loading…</td></tr>
            ) : pages.map(p => (
              <tr key={p.id}>
                <td><strong style={{ color: '#0f0f1a' }}>{p.title}</strong></td>
                <td><code style={{ background: '#f3f4f6', padding: '2px 6px', borderRadius: 4, fontSize: '0.82rem' }}>{p.slug}</code></td>
                <td><span className={`adm-badge ${p.status === 'published' ? 'adm-badge-published' : 'adm-badge-draft'}`}>{p.status}</span></td>
                <td style={{ color: '#9ca3af', fontSize: '0.82rem' }}>{new Date(p.updatedAt).toLocaleDateString('en-GB')}</td>
                <td>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <button className="adm-btn adm-btn-outline adm-btn-sm" onClick={() => setEditing(p)}>Edit</button>
                    <a href={`/admin/seo?page=${p.id}`} className="adm-btn adm-btn-outline adm-btn-sm" style={{ textDecoration: 'none', color: '#a73184', borderColor: '#a73184' }}>SEO</a>
                    <button className="adm-btn adm-btn-sm" style={{ background: '#fef2f2', color: '#ef4444', border: '1px solid #fecaca' }} onClick={() => handleDelete(p.id)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
