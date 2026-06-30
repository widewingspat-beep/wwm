'use client';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import AdminShell from '@/components/admin/AdminShell';
import type { SessionPayload } from '@/lib/admin/auth';
import type { ChatEvent } from '@/lib/admin/store';

interface Stats {
  totalEvents: number;
  totalSessions: number;
  totalOpens: number;
  totalClicks: number;
  totalExternalClicks: number;
  avgInteractionsPerSession: number;
}
interface Bucket { date?: string; week?: string; month?: string; count: number }
interface TopOption { label: string; count: number }

interface AnalyticsData {
  events: ChatEvent[];
  stats: Stats;
  topOptions: TopOption[];
  daily: Bucket[];
  weekly: Bucket[];
  monthly: Bucket[];
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}
function fmtMonth(ym: string) {
  const [y, m] = ym.split('-');
  return new Date(Number(y), Number(m) - 1).toLocaleDateString('en-GB', { month: 'short', year: '2-digit' });
}
function fmtWeek(iso: string) {
  const d = new Date(iso);
  const end = new Date(d);
  end.setDate(d.getDate() + 6);
  return `${fmtDate(d.toISOString())}–${fmtDate(end.toISOString())}`;
}

function BarChart({ data, labelKey, valueKey, color }: { data: Record<string, unknown>[]; labelKey: string; valueKey: string; color: string }) {
  const max = Math.max(...data.map(d => Number(d[valueKey]) || 0), 1);
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 120, paddingBottom: 24, position: 'relative' }}>
      {data.map((d, i) => {
        const val = Number(d[valueKey]) || 0;
        const h = Math.round((val / max) * 100);
        return (
          <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, minWidth: 0 }}>
            <div title={`${d[labelKey]}: ${val}`} style={{ width: '100%', height: `${h}%`, background: val > 0 ? color : '#e5e7eb', borderRadius: '3px 3px 0 0', minHeight: val > 0 ? 3 : 1, transition: 'height 0.4s ease' }} />
            {data.length <= 12 && (
              <span style={{ fontSize: '0.6rem', color: '#9ca3af', whiteSpace: 'nowrap', overflow: 'hidden', maxWidth: '100%', textAlign: 'center' }}>
                {String(d[labelKey])}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

function StatCard({ label, value, sub, color }: { label: string; value: string | number; sub?: string; color?: string }) {
  return (
    <div className="adm-card" style={{ margin: 0, padding: '20px 24px' }}>
      <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>{label}</div>
      <div style={{ fontSize: '2rem', fontWeight: 800, color: color ?? '#0f0f1a', lineHeight: 1 }}>{value}</div>
      {sub && <div style={{ fontSize: '0.78rem', color: '#9ca3af', marginTop: 6 }}>{sub}</div>}
    </div>
  );
}

function exportCsv(events: ChatEvent[]) {
  const header = 'Timestamp,Event,Label,Page,Session ID\n';
  const rows = events.map(e =>
    [e.timestamp, e.event, `"${e.label.replace(/"/g, '""')}"`, e.page, e.sessionId].join(',')
  ).join('\n');
  const blob = new Blob([header + rows], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `chat-analytics-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function ChatAnalyticsPage() {
  const router = useRouter();
  const [session, setSession] = useState<SessionPayload | null>(null);
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const [clearing, setClearing] = useState(false);

  const load = useCallback(async () => {
    const [sess, ana] = await Promise.all([
      fetch('/api/admin/session').then(r => r.ok ? r.json() : null),
      fetch('/api/admin/chat-analytics').then(r => {
        if (r.status === 401) { router.push('/admin/login'); return null; }
        return r.json();
      }),
    ]);
    if (sess) setSession(sess);
    if (ana) setData(ana);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  async function clearData() {
    if (!confirm('Clear all chat analytics data? This cannot be undone.')) return;
    setClearing(true);
    await fetch('/api/admin/chat-analytics', { method: 'DELETE' });
    await load();
    setClearing(false);
  }

  const fakeSession: SessionPayload = session ?? { username: 'webadmin', role: 'webadmin', displayName: 'Web Admin' };

  const chartData = data ? (
    period === 'daily'
      ? data.daily.map(d => ({ label: fmtDate(d.date!), count: d.count }))
      : period === 'weekly'
      ? data.weekly.map(d => ({ label: fmtWeek(d.week!), count: d.count }))
      : data.monthly.map(d => ({ label: fmtMonth(d.month!), count: d.count }))
  ) : [];

  const chartTitle = period === 'daily' ? 'Last 30 Days' : period === 'weekly' ? 'Last 8 Weeks' : 'Last 6 Months';

  return (
    <AdminShell session={fakeSession} title="Chat Analytics" subtitle="Track how visitors interact with the Wide Wings bot">
      {loading ? (
        <div style={{ textAlign: 'center', padding: 64, color: '#9ca3af' }}>Loading analytics…</div>
      ) : !data || data.stats.totalEvents === 0 ? (
        <div style={{ textAlign: 'center', padding: '80px 32px', color: '#9ca3af' }}>
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ margin: '0 auto 20px', display: 'block', opacity: 0.35 }}>
            <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
          </svg>
          <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 8 }}>No interactions yet</div>
          <div style={{ fontSize: '0.88rem' }}>Data will appear here once visitors start using the chat widget.</div>
        </div>
      ) : (
        <>
          {/* STAT CARDS */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 14, marginBottom: 28 }}>
            <StatCard label="Total Sessions" value={data.stats.totalSessions} sub="Unique visitors who opened the chat" color="#a73184" />
            <StatCard label="Widget Opens" value={data.stats.totalOpens} sub="Times the chat was launched" />
            <StatCard label="Option Clicks" value={data.stats.totalClicks} sub="Menu options selected" />
            <StatCard label="External Links" value={data.stats.totalExternalClicks} sub="Booking & contact clicks" color="#0891b2" />
            <StatCard label="Avg per Session" value={data.stats.avgInteractionsPerSession} sub="Clicks per unique visitor" />
          </div>

          {/* CHART */}
          <div className="adm-card" style={{ marginBottom: 24 }}>
            <div className="adm-card-head">
              <div className="adm-card-title">Interactions — {chartTitle}</div>
              <div style={{ display: 'flex', gap: 6 }}>
                {(['daily', 'weekly', 'monthly'] as const).map(p => (
                  <button key={p} className={`adm-btn adm-btn-sm ${period === p ? 'adm-btn-primary' : 'adm-btn-outline'}`}
                    onClick={() => setPeriod(p)}>
                    {p === 'daily' ? 'Daily' : p === 'weekly' ? 'Weekly' : 'Monthly'}
                  </button>
                ))}
              </div>
            </div>
            <div style={{ padding: '8px 24px 16px' }}>
              {chartData.every(d => d.count === 0) ? (
                <div style={{ textAlign: 'center', padding: '32px 0', color: '#9ca3af', fontSize: '0.88rem' }}>No data in this period</div>
              ) : (
                <BarChart data={chartData} labelKey="label" valueKey="count" color="#a73184" />
              )}
            </div>
          </div>

          {/* TOP OPTIONS + RECENT EVENTS SIDE BY SIDE */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
            {/* Popular options */}
            <div className="adm-card" style={{ margin: 0 }}>
              <div className="adm-card-head">
                <div className="adm-card-title">Most Popular Options</div>
              </div>
              <div style={{ padding: '0 0 8px' }}>
                {data.topOptions.length === 0 ? (
                  <div style={{ padding: '24px 24px', color: '#9ca3af', fontSize: '0.88rem' }}>No option clicks yet</div>
                ) : (
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <tbody>
                      {data.topOptions.map((opt, i) => {
                        const pct = Math.round((opt.count / data.topOptions[0].count) * 100);
                        return (
                          <tr key={i} style={{ borderBottom: i < data.topOptions.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                            <td style={{ padding: '10px 20px', width: 24, color: '#9ca3af', fontWeight: 700, fontSize: '0.8rem' }}>{i + 1}</td>
                            <td style={{ padding: '10px 8px 10px 0' }}>
                              <div style={{ fontWeight: 600, fontSize: '0.85rem', color: '#0f0f1a', marginBottom: 4 }}>{opt.label}</div>
                              <div style={{ height: 4, borderRadius: 2, background: '#f3f4f6', overflow: 'hidden' }}>
                                <div style={{ width: `${pct}%`, height: '100%', background: '#a73184', borderRadius: 2 }} />
                              </div>
                            </td>
                            <td style={{ padding: '10px 20px 10px 8px', textAlign: 'right', fontWeight: 700, fontSize: '0.88rem', color: '#374151', whiteSpace: 'nowrap' }}>{opt.count}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>

            {/* Recent events */}
            <div className="adm-card" style={{ margin: 0 }}>
              <div className="adm-card-head">
                <div className="adm-card-title">Recent Events</div>
              </div>
              <div style={{ padding: '0 0 8px', maxHeight: 340, overflowY: 'auto' }}>
                {data.events.length === 0 ? (
                  <div style={{ padding: '24px', color: '#9ca3af', fontSize: '0.88rem' }}>No events yet</div>
                ) : (
                  [...data.events].reverse().slice(0, 30).map((ev, i) => (
                    <div key={ev.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '9px 20px', borderBottom: i < 29 ? '1px solid #f9fafb' : 'none' }}>
                      <span style={{
                        fontSize: '0.65rem', fontWeight: 700, padding: '2px 7px', borderRadius: 100, flexShrink: 0, marginTop: 1,
                        background: ev.event === 'widget_open' ? '#eff6ff' : ev.event === 'external_link' ? '#f0fdf4' : '#fdf4ff',
                        color: ev.event === 'widget_open' ? '#2563eb' : ev.event === 'external_link' ? '#16a34a' : '#9333ea',
                      }}>
                        {ev.event === 'widget_open' ? 'OPEN' : ev.event === 'external_link' ? 'LINK' : 'CLICK'}
                      </span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: '0.83rem', color: '#0f0f1a', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ev.label}</div>
                        <div style={{ fontSize: '0.72rem', color: '#9ca3af', marginTop: 1 }}>
                          {ev.page} · {new Date(ev.timestamp).toLocaleString('en-GB', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* ACTIONS */}
          <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', alignItems: 'center' }}>
            <span style={{ fontSize: '0.78rem', color: '#9ca3af' }}>{data.stats.totalEvents.toLocaleString()} total events recorded</span>
            <button className="adm-btn adm-btn-outline" onClick={() => exportCsv(data.events)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 6 }}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Export CSV
            </button>
            <button className="adm-btn adm-btn-sm" style={{ background: '#fef2f2', color: '#ef4444', border: '1px solid #fecaca' }}
              onClick={clearData} disabled={clearing}>
              {clearing ? 'Clearing…' : 'Clear All Data'}
            </button>
          </div>
        </>
      )}
    </AdminShell>
  );
}
