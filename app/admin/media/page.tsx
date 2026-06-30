'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import AdminShell from '@/components/admin/AdminShell';
import type { SessionPayload } from '@/lib/admin/auth';
import type { MediaItem } from '@/lib/admin/store';

type FileType = 'image' | 'video' | 'pdf' | 'other';

function getMimeFileType(mime: string): FileType {
  if (mime.startsWith('image/')) return 'image';
  if (mime.startsWith('video/')) return 'video';
  if (mime === 'application/pdf') return 'pdf';
  return 'other';
}

function formatBytes(b: number) {
  if (b < 1024) return `${b} B`;
  if (b < 1024 * 1024) return `${(b / 1024).toFixed(1)} KB`;
  return `${(b / (1024 * 1024)).toFixed(1)} MB`;
}

function FileIcon({ type }: { type: FileType }) {
  if (type === 'pdf') return (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <rect width="48" height="48" rx="8" fill="#fef2f2"/>
      <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" fontSize="13" fontWeight="700" fill="#ef4444">PDF</text>
    </svg>
  );
  if (type === 'video') return (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <rect width="48" height="48" rx="8" fill="#eff6ff"/>
      <polygon points="18,14 36,24 18,34" fill="#3b82f6"/>
    </svg>
  );
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
      <rect width="48" height="48" rx="8" fill="#f3f4f6"/>
      <rect x="10" y="12" width="28" height="24" rx="2" stroke="#9ca3af" strokeWidth="2"/>
      <circle cx="18" cy="22" r="3" fill="#9ca3af"/>
      <polyline points="10,36 20,26 26,32 32,24 38,36" fill="none" stroke="#9ca3af" strokeWidth="2"/>
    </svg>
  );
}

function EditModal({ item, onSave, onClose }: { item: MediaItem; onSave: (data: Partial<MediaItem>) => void; onClose: () => void }) {
  const [altText, setAltText] = useState(item.altText);
  const [keywords, setKeywords] = useState(item.keywords);
  const [name, setName] = useState(item.name);
  const [copied, setCopied] = useState(false);

  function copyUrl() {
    navigator.clipboard.writeText(item.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="adm-overlay" onClick={onClose}>
      <div className="adm-modal" style={{ width: 640 }} onClick={e => e.stopPropagation()}>
        <div className="adm-modal-head">
          <div className="adm-modal-title">Edit Media Details</div>
          <button className="adm-modal-close" onClick={onClose}>×</button>
        </div>

        {/* Preview */}
        <div style={{ marginBottom: 20, borderRadius: 10, overflow: 'hidden', background: '#f9fafb', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 180 }}>
          {item.fileType === 'image' ? (
            <img src={item.url} alt={item.altText} style={{ maxHeight: 240, maxWidth: '100%', objectFit: 'contain', display: 'block' }} />
          ) : item.fileType === 'video' ? (
            <video src={item.url} controls style={{ maxHeight: 240, maxWidth: '100%' }} />
          ) : (
            <div style={{ padding: 32, textAlign: 'center' }}>
              <FileIcon type={item.fileType} />
              <div style={{ marginTop: 10, color: '#6b7280', fontSize: '0.88rem' }}>{item.name}</div>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="adm-field">
            <label className="adm-label">File Name</label>
            <input className="adm-input" value={name} onChange={e => setName(e.target.value)}
              readOnly={item.source === 'public'} style={item.source === 'public' ? { background: '#f9fafb', color: '#6b7280' } : {}} />
          </div>

          {(item.fileType === 'image' || item.fileType === 'video') && (
            <div className="adm-field">
              <label className="adm-label">
                Alt Text
                <span className="adm-label-hint">Describe the {item.fileType} for accessibility &amp; SEO</span>
              </label>
              <input className="adm-input" value={altText} onChange={e => setAltText(e.target.value)}
                placeholder={item.fileType === 'image' ? 'e.g. Marketing team in Dubai office' : 'e.g. Product demo walkthrough video'} />
            </div>
          )}

          <div className="adm-field">
            <label className="adm-label">
              Keywords
              <span className="adm-label-hint">Comma-separated</span>
            </label>
            <input className="adm-input" value={keywords} onChange={e => setKeywords(e.target.value)}
              placeholder="e.g. digital marketing, Dubai, branding" />
          </div>

          <div className="adm-field">
            <label className="adm-label">File URL <span className="adm-label-hint">(use this path in pages &amp; SEO)</span></label>
            <div style={{ display: 'flex', gap: 8 }}>
              <input className="adm-input" value={item.url.startsWith('data:') ? '(embedded data URL)' : item.url}
                readOnly style={{ flex: 1, background: '#f9fafb', color: '#374151', fontFamily: 'monospace', fontSize: '0.82rem' }} />
              {!item.url.startsWith('data:') && (
                <button className="adm-btn adm-btn-outline adm-btn-sm" onClick={copyUrl}>
                  {copied ? '✓ Copied' : 'Copy'}
                </button>
              )}
            </div>
          </div>

          <div style={{ color: '#9ca3af', fontSize: '0.78rem' }}>
            {item.mimeType} · {formatBytes(item.sizeBytes)}
            {item.source === 'public' && <span style={{ marginLeft: 8, background: '#f0fdf4', color: '#16a34a', padding: '1px 6px', borderRadius: 4, fontWeight: 600 }}>PUBLIC ASSET</span>}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
          <button className="adm-btn adm-btn-primary" onClick={() => onSave({ name: item.source === 'public' ? item.name : name, altText, keywords })}>Save Changes</button>
          <button className="adm-btn adm-btn-outline" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

function MediaCard({ item, onEdit, onDelete }: { item: MediaItem; onEdit: () => void; onDelete: () => void }) {
  const isPublic = item.source === 'public';

  return (
    <div className="adm-card" style={{ margin: 0, overflow: 'hidden' }}>
      {/* Thumbnail */}
      <div style={{ height: 140, background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative', cursor: 'pointer' }} onClick={onEdit}>
        {item.fileType === 'image' ? (
          <img src={item.url} alt={item.altText || item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : item.fileType === 'video' ? (
          <video src={item.url} style={{ width: '100%', height: '100%', objectFit: 'cover' }} muted />
        ) : (
          <FileIcon type={item.fileType} />
        )}
        {/* Type badge */}
        <span style={{ position: 'absolute', top: 8, left: 8, background: 'rgba(0,0,0,0.6)', color: '#fff', fontSize: '0.62rem', fontWeight: 700, padding: '2px 7px', borderRadius: 100, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          {item.fileType}
        </span>
        {/* Missing alt warning */}
        {(item.fileType === 'image' || item.fileType === 'video') && !item.altText && (
          <span style={{ position: 'absolute', top: 8, right: 8, background: '#f59e0b', color: '#fff', fontSize: '0.62rem', fontWeight: 700, padding: '2px 6px', borderRadius: 100 }} title="Alt text missing">! ALT</span>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: '10px 14px' }}>
        <div style={{ fontWeight: 600, fontSize: '0.82rem', color: '#0f0f1a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={item.name}>{item.name}</div>
        <div style={{ fontSize: '0.72rem', color: '#9ca3af', marginTop: 2 }}>
          {formatBytes(item.sizeBytes)}
          {isPublic && <span style={{ marginLeft: 6, background: '#f0fdf4', color: '#16a34a', padding: '0px 5px', borderRadius: 3, fontWeight: 700 }}>PUBLIC</span>}
        </div>
        {item.altText && (
          <div style={{ fontSize: '0.72rem', color: '#6b7280', marginTop: 3, display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            ALT: {item.altText}
          </div>
        )}
        {item.keywords && (
          <div style={{ fontSize: '0.72rem', color: '#a73184', marginTop: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {item.keywords}
          </div>
        )}
      </div>

      {/* Actions */}
      <div style={{ padding: '0 14px 12px', display: 'flex', gap: 6 }}>
        <button className="adm-btn adm-btn-outline adm-btn-sm" style={{ flex: 1 }} onClick={onEdit}>Edit Details</button>
        {!isPublic && (
          <button className="adm-btn adm-btn-sm" style={{ background: '#fef2f2', color: '#ef4444', border: '1px solid #fecaca' }} onClick={onDelete}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default function MediaAdmin() {
  const router = useRouter();
  const [session, setSession] = useState<SessionPayload | null>(null);
  const [items, setItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | FileType>('all');
  const [search, setSearch] = useState('');
  const [editing, setEditing] = useState<MediaItem | null>(null);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [urlInput, setUrlInput] = useState('');
  const [urlType, setUrlType] = useState<FileType>('video');
  const [urlName, setUrlName] = useState('');
  const [tab, setTab] = useState<'upload' | 'url'>('upload');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch('/api/admin/session').then(r => r.ok ? r.json() : null).then(s => s && setSession(s));
    fetch('/api/admin/media').then(r => {
      if (r.status === 401) { router.push('/admin/login'); return; }
      return r.json();
    }).then(d => { if (d) setItems(d); setLoading(false); });
  }, []);

  const processFiles = useCallback(async (files: FileList | File[]) => {
    const arr = Array.from(files);
    setUploading(true);
    for (const file of arr) {
      const fileType = getMimeFileType(file.type);
      const dataUrl = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = e => resolve(e.target?.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
      const payload = { name: file.name, fileType, mimeType: file.type, url: dataUrl, sizeBytes: file.size, altText: '', keywords: '' };
      const res = await fetch('/api/admin/media', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (res.ok) {
        const item = await res.json();
        setItems(prev => [item, ...prev]);
        if (fileType === 'image' || fileType === 'video') setEditing(item);
      }
    }
    setUploading(false);
  }, []);

  async function addFromUrl() {
    if (!urlInput.trim()) return;
    const payload = {
      name: urlName || urlInput.split('/').pop() || 'external-file',
      fileType: urlType,
      mimeType: urlType === 'video' ? 'video/mp4' : urlType === 'pdf' ? 'application/pdf' : 'image/jpeg',
      url: urlInput, sizeBytes: 0, altText: '', keywords: '',
    };
    const res = await fetch('/api/admin/media', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    if (res.ok) { const item = await res.json(); setItems(prev => [item, ...prev]); setUrlInput(''); setUrlName(''); setEditing(item); }
  }

  async function handleUpdate(data: Partial<MediaItem>) {
    if (!editing) return;
    const updated = { ...editing, ...data };
    const res = await fetch('/api/admin/media', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(updated) });
    if (res.ok) { const saved = await res.json(); setItems(prev => prev.map(m => m.id === saved.id ? saved : m)); setEditing(null); }
  }

  async function handleDelete(id: string) {
    if (!confirm('Remove this uploaded file?')) return;
    await fetch('/api/admin/media', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
    setItems(prev => prev.filter(m => m.id !== id));
  }

  // Filter & search
  const searchLower = search.toLowerCase();
  const filtered = items.filter(m => {
    if (filter !== 'all' && m.fileType !== filter) return false;
    if (searchLower && !m.name.toLowerCase().includes(searchLower) && !m.url.toLowerCase().includes(searchLower) && !m.altText.toLowerCase().includes(searchLower)) return false;
    return true;
  });

  // Group: uploaded first, then public items grouped by folder
  const uploaded = filtered.filter(m => m.source !== 'public');
  const publicItems = filtered.filter(m => m.source === 'public');
  const folderMap = new Map<string, MediaItem[]>();
  for (const item of publicItems) {
    const f = item.folder ?? 'Other';
    if (!folderMap.has(f)) folderMap.set(f, []);
    folderMap.get(f)!.push(item);
  }
  // Sort folders: Site Assets first, then alphabetical
  const sortedFolders = [...folderMap.keys()].sort((a, b) => {
    if (a === 'Site Assets') return -1;
    if (b === 'Site Assets') return 1;
    return a.localeCompare(b);
  });

  const counts = {
    all: items.length,
    image: items.filter(m => m.fileType === 'image').length,
    video: items.filter(m => m.fileType === 'video').length,
    pdf: items.filter(m => m.fileType === 'pdf').length,
    other: items.filter(m => m.fileType === 'other').length,
  };

  const fakeSession: SessionPayload = session ?? { username: 'webadmin', role: 'webadmin', displayName: 'Web Admin' };

  return (
    <AdminShell session={fakeSession} title="Media Library" subtitle="Browse public assets and manage uploaded files">

      {/* UPLOAD PANEL */}
      <div className="adm-card" style={{ marginBottom: 24 }}>
        <div className="adm-card-head">
          <div className="adm-card-title">Add Media</div>
          <div style={{ display: 'flex', gap: 6 }}>
            <button className={`adm-btn adm-btn-sm ${tab === 'upload' ? 'adm-btn-primary' : 'adm-btn-outline'}`} onClick={() => setTab('upload')}>Upload File</button>
            <button className={`adm-btn adm-btn-sm ${tab === 'url' ? 'adm-btn-primary' : 'adm-btn-outline'}`} onClick={() => setTab('url')}>Add from URL</button>
          </div>
        </div>

        <div style={{ padding: 24 }}>
          {tab === 'upload' ? (
            <>
              <div
                style={{ border: `2px dashed ${dragOver ? '#a73184' : '#d1d5db'}`, borderRadius: 12, padding: '40px 32px', textAlign: 'center', background: dragOver ? 'rgba(167,49,132,0.04)' : '#fafafa', transition: 'all 0.2s', cursor: 'pointer' }}
                onClick={() => fileInputRef.current?.click()}
                onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={e => { e.preventDefault(); setDragOver(false); processFiles(e.dataTransfer.files); }}
              >
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke={dragOver ? '#a73184' : '#d1d5db'} strokeWidth="1.5" style={{ margin: '0 auto 14px' }}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
                <div style={{ fontWeight: 700, color: '#374151', fontSize: '1rem', marginBottom: 6 }}>
                  {uploading ? 'Uploading…' : 'Drag & drop files here'}
                </div>
                <div style={{ color: '#9ca3af', fontSize: '0.85rem', marginBottom: 16 }}>or click to browse — Images, Videos, PDFs, Documents</div>
                <button className="adm-btn adm-btn-outline" onClick={e => { e.stopPropagation(); fileInputRef.current?.click(); }}>Browse Files</button>
                <input ref={fileInputRef} type="file" multiple accept="image/*,video/*,application/pdf,.doc,.docx,.xls,.xlsx" style={{ display: 'none' }}
                  onChange={e => e.target.files && processFiles(e.target.files)} />
              </div>
              <p style={{ color: '#9ca3af', fontSize: '0.78rem', marginTop: 10, textAlign: 'center' }}>
                After upload, you will be prompted to add alt text and keywords for images &amp; videos.
              </p>
            </>
          ) : (
            <div className="adm-form-grid">
              <div className="adm-field adm-form-full">
                <label className="adm-label">File URL</label>
                <input className="adm-input" value={urlInput} onChange={e => setUrlInput(e.target.value)} placeholder="https://example.com/video.mp4 or /uploads/image.jpg" />
              </div>
              <div className="adm-field">
                <label className="adm-label">File Name</label>
                <input className="adm-input" value={urlName} onChange={e => setUrlName(e.target.value)} placeholder="e.g. Brand Video 2025" />
              </div>
              <div className="adm-field">
                <label className="adm-label">File Type</label>
                <select className="adm-select" value={urlType} onChange={e => setUrlType(e.target.value as FileType)}>
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                  <option value="pdf">PDF</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="adm-field" style={{ justifyContent: 'flex-end' }}>
                <label className="adm-label">&nbsp;</label>
                <button className="adm-btn adm-btn-primary" onClick={addFromUrl} disabled={!urlInput.trim()}>Add File</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* FILTER + SEARCH BAR */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 20, flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {(['all', 'image', 'video', 'pdf', 'other'] as const).map(f => (
            <button key={f} className={`adm-btn adm-btn-sm ${filter === f ? 'adm-btn-primary' : 'adm-btn-outline'}`} onClick={() => setFilter(f)}>
              {f === 'all' ? `All (${counts.all})` : f === 'image' ? `Images (${counts.image})` : f === 'video' ? `Videos (${counts.video})` : f === 'pdf' ? `PDFs (${counts.pdf})` : `Other (${counts.other})`}
            </button>
          ))}
        </div>
        <input
          className="adm-input"
          style={{ flex: 1, minWidth: 200, maxWidth: 320 }}
          placeholder="Search by name or alt text…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: 48, color: '#9ca3af' }}>Loading media library…</div>
      ) : filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '64px 32px', color: '#9ca3af' }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ margin: '0 auto 16px', display: 'block', opacity: 0.4 }}>
            <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
          </svg>
          <div style={{ fontWeight: 600 }}>No files found</div>
          <div style={{ fontSize: '0.85rem', marginTop: 4 }}>Try a different filter or search term</div>
        </div>
      ) : (
        <>
          {/* Uploaded files section */}
          {uploaded.length > 0 && (
            <Section title="Uploaded Files" count={uploaded.length}>
              {uploaded.map(item => (
                <MediaCard key={item.id} item={item} onEdit={() => setEditing(item)} onDelete={() => handleDelete(item.id)} />
              ))}
            </Section>
          )}

          {/* Public asset sections grouped by folder */}
          {sortedFolders.map(folder => (
            <Section key={folder} title={folder} count={folderMap.get(folder)!.length} isPublic>
              {folderMap.get(folder)!.map(item => (
                <MediaCard key={item.id} item={item} onEdit={() => setEditing(item)} onDelete={() => handleDelete(item.id)} />
              ))}
            </Section>
          ))}
        </>
      )}

      {editing && <EditModal item={editing} onSave={handleUpdate} onClose={() => setEditing(null)} />}
    </AdminShell>
  );
}

function Section({ title, count, isPublic, children }: { title: string; count: number; isPublic?: boolean; children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div style={{ marginBottom: 32 }}>
      <div
        style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, cursor: 'pointer', userSelect: 'none' }}
        onClick={() => setCollapsed(c => !c)}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" style={{ transform: collapsed ? 'rotate(-90deg)' : 'rotate(0deg)', transition: 'transform 0.15s', flexShrink: 0 }}>
          <polyline points="6 9 12 15 18 9"/>
        </svg>
        <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0f0f1a' }}>{title}</span>
        <span style={{ background: '#f3f4f6', color: '#6b7280', fontSize: '0.73rem', fontWeight: 600, padding: '2px 8px', borderRadius: 100 }}>{count}</span>
        {isPublic && (
          <span style={{ background: '#f0fdf4', color: '#16a34a', fontSize: '0.68rem', fontWeight: 700, padding: '2px 7px', borderRadius: 100, letterSpacing: '0.04em' }}>PUBLIC ASSETS</span>
        )}
      </div>
      {!collapsed && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: 14 }}>
          {children}
        </div>
      )}
    </div>
  );
}
