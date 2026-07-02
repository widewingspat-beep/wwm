import { kv } from '@vercel/kv';
import type { AdminRole } from './auth';

const PREFIX = 'admin-pw:';

// Stored value is `salt:hash`, both hex — PBKDF2-SHA256, no plaintext ever persisted.
export async function getPasswordOverride(role: AdminRole): Promise<string | null> {
  try {
    return await kv.get<string>(`${PREFIX}${role}`);
  } catch {
    return null;
  }
}

export async function setPasswordOverride(role: AdminRole, hashed: string): Promise<boolean> {
  try {
    await kv.set(`${PREFIX}${role}`, hashed);
    return true;
  } catch {
    return false;
  }
}
