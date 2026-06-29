import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/admin/auth';
import { getBlogContent, setBlogContent, deleteBlogContent } from '@/lib/admin/blog-kv';
import { revalidatePath } from 'next/cache';

export async function GET(req: NextRequest) {
  const session = await getSession();
  if (!session || session.role !== 'webadmin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const slug = req.nextUrl.searchParams.get('slug');
  if (!slug) return NextResponse.json({ error: 'Missing slug' }, { status: 400 });

  const content = await getBlogContent(slug);
  return NextResponse.json({ content: content ?? '' });
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session || session.role !== 'webadmin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { slug, content } = await req.json() as { slug: string; content: string };
  if (!slug) return NextResponse.json({ error: 'Missing slug' }, { status: 400 });

  if (content === '') {
    await deleteBlogContent(slug);
  } else {
    await setBlogContent(slug, content);
  }

  revalidatePath(`/${slug}`);
  return NextResponse.json({ ok: true });
}
