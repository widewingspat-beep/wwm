import { kv } from '@vercel/kv';
import type { SeoData } from './store';

const PREFIX = 'seo:';

export async function getSeoOverride(pageId: string): Promise<SeoData | null> {
  try {
    return await kv.get<SeoData>(`${PREFIX}${pageId}`);
  } catch {
    return null;
  }
}

export async function setSeoOverride(pageId: string, data: SeoData): Promise<boolean> {
  try {
    await kv.set(`${PREFIX}${pageId}`, data);
    return true;
  } catch {
    return false;
  }
}

export async function listSeoOverrides(): Promise<Record<string, SeoData>> {
  try {
    const keys = await kv.keys(`${PREFIX}*`);
    if (keys.length === 0) return {};
    const values = await Promise.all(keys.map(k => kv.get<SeoData>(k)));
    const map: Record<string, SeoData> = {};
    keys.forEach((k, i) => {
      const value = values[i];
      if (value) map[k.replace(PREFIX, '')] = value;
    });
    return map;
  } catch {
    return {};
  }
}
