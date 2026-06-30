import { NextRequest, NextResponse } from 'next/server';
import { readdir, stat } from 'fs/promises';
import path from 'path';
import { getSession } from '@/lib/admin/auth';
import { store } from '@/lib/admin/store';
import type { MediaItem } from '@/lib/admin/store';

// Next.js default placeholder files — skip these
const SKIP_FILES = new Set(['file.svg', 'globe.svg', 'next.svg', 'vercel.svg', 'window.svg']);

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg', '.avif', '.ico']);
const VIDEO_EXTS = new Set(['.mp4', '.webm', '.mov', '.avi', '.ogv']);

function extToType(ext: string): MediaItem['fileType'] {
  const e = ext.toLowerCase();
  if (IMAGE_EXTS.has(e)) return 'image';
  if (VIDEO_EXTS.has(e)) return 'video';
  if (e === '.pdf') return 'pdf';
  return 'other';
}

const MIME_MAP: Record<string, string> = {
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png',
  '.webp': 'image/webp', '.gif': 'image/gif', '.svg': 'image/svg+xml',
  '.avif': 'image/avif', '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.mp4': 'video/mp4', '.webm': 'video/webm', '.mov': 'video/quicktime',
  '.avi': 'video/x-msvideo', '.ogv': 'video/ogg',
};
function extToMime(ext: string): string {
  return MIME_MAP[ext.toLowerCase()] ?? 'application/octet-stream';
}

function makeId(relUrl: string): string {
  return `pub-${relUrl.replace(/[^a-zA-Z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')}`;
}

function folderLabel(relBase: string): string {
  if (!relBase || relBase === '/') return 'Site Assets';
  const parts = relBase.replace(/^\//, '').split('/');
  return parts.map(p => p.charAt(0).toUpperCase() + p.slice(1).replace(/-/g, ' ')).join(' › ');
}

async function scanDir(dir: string, relBase: string): Promise<MediaItem[]> {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return [];
  }
  const results: MediaItem[] = [];
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const sub = await scanDir(path.join(dir, entry.name), `${relBase}/${entry.name}`);
      results.push(...sub);
    } else {
      if (SKIP_FILES.has(entry.name)) continue;
      const ext = path.extname(entry.name);
      if (!ext) continue;
      const relUrl = `${relBase}/${entry.name}`;
      let sizeBytes = 0;
      let mtime = new Date();
      try {
        const s = await stat(path.join(dir, entry.name));
        sizeBytes = s.size;
        mtime = s.mtime;
      } catch { /* ignore */ }
      results.push({
        id: makeId(relUrl),
        name: entry.name,
        fileType: extToType(ext),
        mimeType: extToMime(ext),
        url: relUrl,
        sizeBytes,
        altText: '',
        keywords: '',
        uploadedAt: mtime.toISOString(),
        source: 'public',
        folder: folderLabel(relBase),
      });
    }
  }
  return results;
}

export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const publicDir = path.join(process.cwd(), 'public');
  const publicFiles = await scanDir(publicDir, '');

  // Store items override scanned public files (preserves user-edited alt/keywords)
  const storeItems = store.media.list();
  const storeById = new Map(storeItems.map(m => [m.id, m]));

  const mergedPublic = publicFiles.map(f => storeById.get(f.id) ?? f);

  // User-uploaded items (not seeded from /public)
  const uploaded = storeItems.filter(m => !m.id.startsWith('pub-'));

  const result = [
    ...uploaded.sort((a, b) => b.uploadedAt.localeCompare(a.uploadedAt)),
    ...mergedPublic.sort((a, b) => {
      const fa = a.folder ?? '';
      const fb = b.folder ?? '';
      if (fa !== fb) return fa.localeCompare(fb);
      return a.name.localeCompare(b.name);
    }),
  ];

  return NextResponse.json(result);
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json() as Omit<MediaItem, 'id' | 'uploadedAt'>;
  const item = store.media.add({ ...body, source: 'upload' });
  return NextResponse.json(item, { status: 201 });
}

export async function PUT(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const data = await req.json() as MediaItem;
  // upsert so editing a public-file (not yet in store) also works
  const item = store.media.upsert(data);
  return NextResponse.json(item);
}

export async function DELETE(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await req.json();
  store.media.delete(id);
  return NextResponse.json({ ok: true });
}
