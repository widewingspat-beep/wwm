import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/admin/auth';
import { store } from '@/lib/admin/store';
import { listSeoOverrides, setSeoOverride } from '@/lib/admin/seo-kv';

export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const overrides = await listSeoOverrides();
  const merged = store.seo.list().map(s => overrides[s.pageId] ?? s);
  return NextResponse.json(merged);
}

export async function PUT(req: NextRequest) {
  const session = await getSession();
  if (!session || session.role !== 'seo') return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const data = await req.json();
  const updated = { ...data, updatedAt: new Date().toISOString() };
  store.seo.upsert(updated);
  await setSeoOverride(updated.pageId, updated);
  return NextResponse.json({ ok: true });
}
