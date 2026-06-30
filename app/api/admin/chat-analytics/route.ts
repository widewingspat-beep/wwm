import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/admin/auth';
import { store } from '@/lib/admin/store';
import type { ChatEvent } from '@/lib/admin/store';

// POST — no auth required, called from the public-facing chat widget
export async function POST(req: NextRequest) {
  const body = await req.json() as Omit<ChatEvent, 'id' | 'timestamp'>;
  if (!body.event || !body.sessionId) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }
  const ev = store.chatEvents.add(body);
  return NextResponse.json(ev, { status: 201 });
}

// GET — admin-only, returns all events + pre-computed stats
export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const events = store.chatEvents.list();

  // Unique sessions
  const sessions = new Set(events.map(e => e.sessionId));

  // Option click counts
  const optionCounts: Record<string, number> = {};
  for (const e of events) {
    if (e.event === 'option_click' || e.event === 'topic_view') {
      optionCounts[e.label] = (optionCounts[e.label] ?? 0) + 1;
    }
  }
  const topOptions = Object.entries(optionCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([label, count]) => ({ label, count }));

  // Daily interaction counts (last 30 days)
  const now = Date.now();
  const dailyMap: Record<string, number> = {};
  for (let i = 29; i >= 0; i--) {
    const d = new Date(now - i * 86400000);
    dailyMap[d.toISOString().slice(0, 10)] = 0;
  }
  for (const e of events) {
    const day = e.timestamp.slice(0, 10);
    if (day in dailyMap) dailyMap[day]++;
  }
  const daily = Object.entries(dailyMap).map(([date, count]) => ({ date, count }));

  // Weekly bucket counts (last 8 weeks)
  function weekKey(ts: string) {
    const d = new Date(ts);
    const start = new Date(d);
    start.setDate(d.getDate() - d.getDay());
    return start.toISOString().slice(0, 10);
  }
  const weeklyMap: Record<string, number> = {};
  for (const e of events) {
    const wk = weekKey(e.timestamp);
    weeklyMap[wk] = (weeklyMap[wk] ?? 0) + 1;
  }
  const weekly = Object.entries(weeklyMap)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .slice(-8)
    .map(([week, count]) => ({ week, count }));

  // Monthly counts
  const monthlyMap: Record<string, number> = {};
  for (const e of events) {
    const mo = e.timestamp.slice(0, 7);
    monthlyMap[mo] = (monthlyMap[mo] ?? 0) + 1;
  }
  const monthly = Object.entries(monthlyMap)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .slice(-6)
    .map(([month, count]) => ({ month, count }));

  // Opens vs clicks breakdown
  const opens = events.filter(e => e.event === 'widget_open').length;
  const clicks = events.filter(e => e.event === 'option_click').length;
  const externalClicks = events.filter(e => e.event === 'external_link').length;

  return NextResponse.json({
    events,
    stats: {
      totalEvents: events.length,
      totalSessions: sessions.size,
      totalOpens: opens,
      totalClicks: clicks,
      totalExternalClicks: externalClicks,
      avgInteractionsPerSession: sessions.size > 0 ? Math.round((clicks / sessions.size) * 10) / 10 : 0,
    },
    topOptions,
    daily,
    weekly,
    monthly,
  });
}

// DELETE — clear all events (admin only)
export async function DELETE() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  store.chatEvents.clear();
  return NextResponse.json({ ok: true });
}
