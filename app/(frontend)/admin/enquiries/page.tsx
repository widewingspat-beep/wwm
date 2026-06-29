'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminShell from '@/components/admin/AdminShell';
import type { SessionPayload } from '@/lib/admin/auth';
import type { Enquiry } from '@/lib/admin/store';

export default function EnquiriesAdmin() {
  const router = useRouter();
  const [session, setSession] = useState<SessionPayload | null>(null);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [selected, setSelected] = useState<Enquiry | null>(null);
  const [filter, setFilter] = useState<'all' | 'new' | 'read'>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/session').then(r => r.ok ? r.json() : null).then(s => s && setSession(s));
    fetch('/api/admin/enquiries').then(r => {
      if (r.status === 401) { router.push('/admin/login'); return; }
      return r.json();
    }).then(data => { if (data) setEnquiries(data); setLoading(false); });
  }, []);

  async function markRead(e: Enquiry) {
    if (e.status === 'read') return;
    await fetch('/api/admin/enquiries', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: e.id }) });
    setEnquiries(prev => prev.map(x => x.id === e.id ? { ...x, status: 'read' } : x));
  }

  function openEnquiry(e: Enquiry) {
    setSelected(e);
    markRead(e);
  }

  const filtered = filter === 'all' ? enquiries : enquiries.filter(e => e.status === filter);
  const newCount = enquiries.filter(e => e.status === 'new').length;
  const fakeSession: SessionPayload = session ?? { username: 'enquiry', role: 'enquiry', displayName: 'Enquiry Viewer' };

  return (
    <AdminShell session={fakeSession} title="Enquiries" subtitle="Messages received from the website contact form">

      {/* STATS */}
      <div className="adm-stat-grid" style={{ marginBottom: 24 }}>
        <div className="adm-stat adm-stat-accent">
          <div className="adm-stat-num">{enquiries.length}</div>
          <div className="adm-stat-label">Total Enquiries</div>
        </div>
        <div className="adm-stat adm-stat-orange">
          <div className="adm-stat-num">{newCount}</div>
          <div className="adm-stat-label">Unread</div>
        </div>
        <div className="adm-stat adm-stat-blue">
          <div className="adm-stat-num">{enquiries.length - newCount}</div>
          <div className="adm-stat-label">Read</div>
        </div>
      </div>

      <div className="adm-card">
        <div className="adm-card-head">
          <div className="adm-card-title">All Enquiries</div>
          <div style={{ display: 'flex', gap: 6 }}>
            {(['all', 'new', 'read'] as const).map(f => (
              <button key={f} className={`adm-btn adm-btn-sm ${filter === f ? 'adm-btn-primary' : 'adm-btn-outline'}`} onClick={() => setFilter(f)}>
                {f === 'all' ? 'All' : f === 'new' ? `New (${newCount})` : 'Read'}
              </button>
            ))}
          </div>
        </div>

        <table className="adm-table">
          <thead>
            <tr>
              <th>Status</th><th>Name</th><th>Contact</th><th>Service</th><th>Received</th><th></th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={6} style={{ textAlign: 'center', color: '#9ca3af', padding: '32px' }}>Loading…</td></tr>
            ) : filtered.length === 0 ? (
              <tr><td colSpan={6} style={{ textAlign: 'center', color: '#9ca3af', padding: '32px' }}>No enquiries found.</td></tr>
            ) : filtered.map(e => (
              <tr key={e.id} style={{ cursor: 'pointer' }} onClick={() => openEnquiry(e)}>
                <td><span className={`adm-badge ${e.status === 'new' ? 'adm-badge-new' : 'adm-badge-read'}`}>{e.status === 'new' ? '● New' : '✓ Read'}</span></td>
                <td><strong style={{ color: '#0f0f1a' }}>{e.name}</strong></td>
                <td>
                  <div style={{ fontSize: '0.85rem' }}>{e.email}</div>
                  <div style={{ fontSize: '0.78rem', color: '#9ca3af' }}>{e.phone}</div>
                </td>
                <td style={{ fontSize: '0.85rem' }}>{e.service}</td>
                <td style={{ color: '#9ca3af', fontSize: '0.82rem', whiteSpace: 'nowrap' }}>
                  {new Date(e.receivedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                  <br />
                  {new Date(e.receivedAt).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
                </td>
                <td>
                  <button className="adm-btn adm-btn-outline adm-btn-sm" onClick={ev => { ev.stopPropagation(); openEnquiry(e); }}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {selected && (
        <div className="adm-overlay" onClick={() => setSelected(null)}>
          <div className="adm-modal" onClick={e => e.stopPropagation()}>
            <div className="adm-modal-head">
              <div>
                <div className="adm-modal-title">Enquiry from {selected.name}</div>
                <div style={{ color: '#9ca3af', fontSize: '0.8rem', marginTop: 3 }}>
                  {new Date(selected.receivedAt).toLocaleString('en-GB', { dateStyle: 'long', timeStyle: 'short' })}
                </div>
              </div>
              <button className="adm-modal-close" onClick={() => setSelected(null)}>×</button>
            </div>

            <div className="adm-detail-row"><span className="adm-detail-key">Name</span><span className="adm-detail-val">{selected.name}</span></div>
            <div className="adm-detail-row"><span className="adm-detail-key">Email</span>
              <span className="adm-detail-val"><a href={`mailto:${selected.email}`} style={{ color: '#a73184' }}>{selected.email}</a></span>
            </div>
            <div className="adm-detail-row"><span className="adm-detail-key">Phone</span>
              <span className="adm-detail-val"><a href={`tel:${selected.phone}`} style={{ color: '#a73184' }}>{selected.phone}</a></span>
            </div>
            <div className="adm-detail-row"><span className="adm-detail-key">Service</span><span className="adm-detail-val">{selected.service}</span></div>
            <div className="adm-detail-row"><span className="adm-detail-key">Status</span>
              <span className="adm-detail-val"><span className={`adm-badge ${selected.status === 'new' ? 'adm-badge-new' : 'adm-badge-read'}`}>{selected.status}</span></span>
            </div>

            <div style={{ marginTop: 16 }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Message</div>
              <div className="adm-detail-msg">{selected.message}</div>
            </div>

            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              <a href={`mailto:${selected.email}?subject=Re: Your enquiry about ${selected.service}`} className="adm-btn adm-btn-primary" style={{ textDecoration: 'none' }}>
                Reply via Email
              </a>
              <button className="adm-btn adm-btn-outline" onClick={() => setSelected(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </AdminShell>
  );
}
