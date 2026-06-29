'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../admin.css';

export default function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(''); setLoading(true);
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    setLoading(false);
    if (!res.ok) { setError('Invalid username or password.'); return; }
    router.push('/admin/dashboard');
    router.refresh();
  }

  return (
    <div className="adm-login-wrap">
      <div className="adm-login-box">
        <div className="adm-login-logo">
          <img src="/Logoblack.webp" alt="Wide Wings Media" />
        </div>
        <h1 className="adm-login-title">Admin Portal</h1>
        <p className="adm-login-sub">Wide Wings Media &amp; Advertisement</p>
        {error && <div className="adm-login-error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="adm-login-field">
            <label className="adm-label" style={{ marginBottom: 6 }}>Username</label>
            <input className="adm-input" value={username} onChange={e => setUsername(e.target.value)} required autoFocus />
          </div>
          <div className="adm-login-field">
            <label className="adm-label" style={{ marginBottom: 6 }}>Password</label>
            <input className="adm-input" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <button className="adm-login-btn" type="submit" disabled={loading} style={{ marginTop: 8 }}>
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
