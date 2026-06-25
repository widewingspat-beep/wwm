import { kv } from '@vercel/kv';

const PREFIX = 'blog:';

export async function getBlogContent(slug: string): Promise<string | null> {
  try {
    return await kv.get<string>(`${PREFIX}${slug}`);
  } catch {
    return null;
  }
}

export async function setBlogContent(slug: string, html: string): Promise<void> {
  await kv.set(`${PREFIX}${slug}`, html);
}

export async function deleteBlogContent(slug: string): Promise<void> {
  await kv.del(`${PREFIX}${slug}`);
}

export async function listPublishedSlugs(): Promise<string[]> {
  try {
    const keys = await kv.keys(`${PREFIX}*`);
    return keys.map((k: string) => k.replace(PREFIX, ''));
  } catch {
    return [];
  }
}
