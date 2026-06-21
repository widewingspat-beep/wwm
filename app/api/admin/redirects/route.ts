import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/admin/auth';
import { store } from '@/lib/admin/store';

export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  return NextResponse.json(store.redirects.list());
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session || (session.role !== 'seo' && session.role !== 'webadmin')) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }
  const data = await req.json();
  const redirect = store.redirects.create(data);
  return NextResponse.json(redirect, { status: 201 });
}

export async function DELETE(req: NextRequest) {
  const session = await getSession();
  if (!session || (session.role !== 'seo' && session.role !== 'webadmin')) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }
  const { id } = await req.json();
  store.redirects.delete(id);
  return NextResponse.json({ ok: true });
}
