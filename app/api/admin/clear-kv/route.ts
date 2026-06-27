import { NextRequest, NextResponse } from 'next/server';
import { setBlogContent, deleteBlogContent, listPublishedSlugs } from '@/lib/admin/blog-kv';

// Temporary one-time route — will be deleted after use
const SECRET = 'wwm-clear-2026';

export async function GET(req: NextRequest) {
  if (req.nextUrl.searchParams.get('token') !== SECRET) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }
  const slug = req.nextUrl.searchParams.get('slug');
  if (slug) {
    await deleteBlogContent(slug);
    return NextResponse.json({ ok: true, deleted: slug });
  }
  const slugs = await listPublishedSlugs();
  return NextResponse.json({ slugs });
}

export async function POST(req: NextRequest) {
  if (req.nextUrl.searchParams.get('token') !== SECRET) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }
  const { slug, html } = await req.json() as { slug: string; html: string };
  if (!slug || !html) return NextResponse.json({ error: 'Missing slug or html' }, { status: 400 });
  await setBlogContent(slug, html);
  return NextResponse.json({ ok: true, saved: slug });
}
