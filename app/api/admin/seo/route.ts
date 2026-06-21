import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/admin/auth';
import { store } from '@/lib/admin/store';

export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  return NextResponse.json(store.seo.list());
}

export async function PUT(req: NextRequest) {
  const session = await getSession();
  if (!session || session.role !== 'seo') return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const data = await req.json();
  store.seo.upsert(data);
  return NextResponse.json({ ok: true });
}
