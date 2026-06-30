import { NextRequest, NextResponse } from 'next/server';
import { readdir, stat } from 'fs/promises';
import path from 'path';
import { getSession } from '@/lib/admin/auth';
import { store } from '@/lib/admin/store';
import type { MediaItem } from '@/lib/admin/store';

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
  '.avif': 'image/avif', '.ico': 'image/x-icon', '.pdf': 'application/pdf',
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

// Explicit alt text for root-level files where filename alone is ambiguous
const ROOT_ALT: Record<string, string> = {
  'Logoblack.webp': 'Wide Wings Media Logo',
  'LogoWhite.svg': 'Wide Wings Media White Logo',
  'brand-wings.svg': 'Wide Wings Media Brand Icon',
  'blog-ecommerce.webp': 'Ecommerce Website Development — Wide Wings Media Blog Featured',
  'blog-sem.webp': 'Search Engine Marketing — Wide Wings Media Blog Featured',
  'blog-ppc.webp': 'PPC for Ecommerce — Wide Wings Media Blog Featured',
  'background.jpeg': 'Digital marketing agency hero background — Wide Wings Media',
  'sgh-best-hospital-in-dubai.webp': 'SGH Best Hospital in Dubai — Wide Wings Media Client',
  'sbk-dubai-realestate.webp': 'SBK Dubai Real Estate — Wide Wings Media Client',
  'zaina-launch.webp': 'Zaina Brand Launch — Wide Wings Media Campaign',
  'zaina.jpg': 'Zaina — Wide Wings Media Client Project',
  'Reem.jpg': 'Reem — Wide Wings Media Team Member',
  'img1.jpg': 'Wide Wings Media marketing services showcase',
  'img2.jpg': 'Wide Wings Media digital solutions showcase',
  'img3.jpg': 'Wide Wings Media agency work showcase',
  'SehamTeam.webp': 'Seham — Wide Wings Media Team Member',
  'RawanAkram.webp': 'Rawan Akram — Wide Wings Media Team Member',
  'MohamedIbrahimJuba.webp': 'Mohamed Ibrahim Juba — Wide Wings Media Team Member',
  'MahmoudIsmail.webp': 'Mahmoud Ismail — Wide Wings Media Team Member',
  'Kareemayman.webp': 'Kareem Ayman — Wide Wings Media Team Member',
  'nowran.webp': 'Nowran — Wide Wings Media Team Member',
  'purple-glitter-texture-background-2024-06-14-01-23-56-utc.jpg': 'Purple glitter texture decorative background',
};

// Simple first-name team members (auto-detected by PascalCase single word)
const TEAM_FIRST_NAMES = new Set([
  'Alaa', 'Amir', 'Asmaa', 'Doha', 'Ebtehal', 'Eslam', 'Hamza', 'Joydonald',
  'Lawrence', 'Mina', 'Moamen', 'Nesma', 'Omar', 'Prasanna', 'Shaarawi',
]);

function generateAltText(filename: string, folder: string): string {
  // Explicit overrides first
  if (ROOT_ALT[filename]) return ROOT_ALT[filename];

  const base = filename.replace(/\.[^.]+$/, '');

  // Blog folder: convert slug to readable title
  if (folder.toLowerCase().includes('blog')) {
    const title = base.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return `${title} — Wide Wings Media Blog`;
  }

  // Team member first names
  if (TEAM_FIRST_NAMES.has(base)) {
    return `${base} — Wide Wings Media Team Member`;
  }

  // Shutterstock stock photos
  if (base.toLowerCase().startsWith('shutterstock')) {
    return 'Digital marketing and advertising — Wide Wings Media Dubai';
  }

  // Logo/brand detection
  const bl = base.toLowerCase();
  if (bl.includes('logo') && bl.includes('white')) return 'Wide Wings Media White Logo';
  if (bl.includes('logo')) return 'Wide Wings Media Logo';
  if (bl.includes('brand')) return 'Wide Wings Media Brand Identity';

  // Background/texture
  if (bl.includes('background') || bl.includes('texture')) return 'Background design element';

  // PascalCase names not in the explicit list (potential new team members)
  if (/^[A-Z][a-z]+([A-Z][a-z]+)*$/.test(base)) {
    const spaced = base.replace(/([A-Z][a-z]+)/g, ' $1').trim();
    return `${spaced} — Wide Wings Media Team Member`;
  }

  // Default: clean up filename to readable text
  const readable = base.replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
  return readable.charAt(0).toUpperCase() + readable.slice(1);
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
      const folder = folderLabel(relBase);
      results.push({
        id: makeId(relUrl),
        name: entry.name,
        fileType: extToType(ext),
        mimeType: extToMime(ext),
        url: relUrl,
        sizeBytes,
        altText: generateAltText(entry.name, folder),
        keywords: '',
        uploadedAt: mtime.toISOString(),
        source: 'public',
        folder,
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

  const storeItems = store.media.list();
  const storeById = new Map(storeItems.map(m => [m.id, m]));

  // Store items take precedence (preserves user edits to alt/keywords)
  const mergedPublic = publicFiles.map(f => storeById.get(f.id) ?? f);
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
