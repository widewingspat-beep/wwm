'use client';
import { useState, useEffect } from 'react';
import AdminShell from '@/components/admin/AdminShell';
import type { SessionPayload, AdminRole } from '@/lib/admin/auth';

const ROLE_LABELS: Record<AdminRole, string> = { webadmin: 'Web Admin', seo: 'SEO Manager', enquiry: 'Enquiry Viewer' };

function PasswordCard({ role, requireCurrent }: { role: AdminRole; requireCurrent: boolean }) {
  const [current, setCurrent] = useState('');
  const [next, setNext] = useState('');
  const [confirm, setConfirm] = useState('');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    if (next.length < 8) { setMessage({ type: 'error', text: 'New password must be at least 8 characters.' }); return; }
    if (next !== confirm) { setMessage({ type: 'error', text: 'New password and confirmation do not match.' }); return; }

    setSaving(true);
    try {
      const res = await fetch('/api/admin/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetRole: role, currentPassword: current, newPassword: next }),
      });
      if (res.ok) {
        setMessage({ type: 'success', text: '✓ Password updated' });
        setCurrent(''); setNext(''); setConfirm('');
      } else {
        const data = await res.json().catch(() => ({}));
        setMessage({ type: 'error', text: data.error || 'Failed to update password.' });
      }
    } catch {
      setMessage({ type: 'error', text: 'Failed to update password.' });
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="adm-card" style={{ marginBottom: 20 }}>
      <div className="adm-card-head">
        <div className="adm-card-title">{ROLE_LABELS[role]}{!requireCurrent && ' (reset)'}</div>
      </div>
      <form onSubmit={handleSubmit} style={{ padding: 24 }}>
        <div className="adm-form-grid">
          {requireCurrent && (
            <div className="adm-field">
              <label className="adm-label">Current Password</label>
              <input className="adm-input" type="password" value={current} onChange={e => setCurrent(e.target.value)} required autoComplete="current-password" />
            </div>
          )}
          <div className="adm-field">
            <label className="adm-label">New Password</label>
            <input className="adm-input" type="password" value={next} onChange={e => setNext(e.target.value)} required minLength={8} autoComplete="new-password" />
          </div>
          <div className="adm-field">
            <label className="adm-label">Confirm New Password</label>
            <input className="adm-input" type="password" value={confirm} onChange={e => setConfirm(e.target.value)} required minLength={8} autoComplete="new-password" />
          </div>
        </div>
        <div style={{ marginTop: 20, display: 'flex', gap: 10, alignItems: 'center' }}>
          <button className="adm-btn adm-btn-primary" type="submit" disabled={saving}>
            {saving ? 'Saving…' : 'Update Password'}
          </button>
          {message && (
            <span style={{ color: message.type === 'success' ? '#16a34a' : '#dc2626', fontSize: '0.85rem', fontWeight: 600 }}>
              {message.text}
            </span>
          )}
        </div>
      </form>
    </div>
  );
}

export default function AccountPage() {
  const [session, setSession] = useState<SessionPayload | null>(null);

  useEffect(() => {
    fetch('/api/admin/session').then(r => r.ok ? r.json() : null).then(s => s && setSession(s));
  }, []);

  const fakeSession: SessionPayload = session ?? { username: 'webadmin', role: 'webadmin', displayName: 'Web Admin' };
  const isWebadmin = fakeSession.role === 'webadmin';

  return (
    <AdminShell session={fakeSession} title="Account" subtitle="Change admin login passwords">
      <PasswordCard role={fakeSession.role} requireCurrent={true} />
      {isWebadmin && (
        <>
          <PasswordCard role="seo" requireCurrent={false} />
          <PasswordCard role="enquiry" requireCurrent={false} />
        </>
      )}
    </AdminShell>
  );
}
