import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/admin/auth';
import { store } from '@/lib/admin/store';

export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  return NextResponse.json(store.pages.list());
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session || session.role !== 'webadmin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const body = await req.json();
  const page = store.pages.create(body);
  return NextResponse.json(page, { status: 201 });
}

export async function PUT(req: NextRequest) {
  const session = await getSession();
  if (!session || session.role !== 'webadmin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const { id, ...data } = await req.json();
  const page = store.pages.update(id, data);
  if (!page) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(page);
}

export async function DELETE(req: NextRequest) {
  const session = await getSession();
  if (!session || session.role !== 'webadmin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const { id } = await req.json();
  store.pages.delete(id);
  return NextResponse.json({ ok: true });
}
