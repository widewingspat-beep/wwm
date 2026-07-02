import { cookies } from 'next/headers';
import { getPasswordOverride, setPasswordOverride } from './auth-kv';

export type AdminRole = 'webadmin' | 'seo' | 'enquiry';

export interface SessionPayload {
  username: string;
  role: AdminRole;
  displayName: string;
}

const SECRET = process.env.ADMIN_SECRET ?? 'wwm-admin-secret-key-2025';
export const COOKIE_NAME = 'wwm_admin';

const USERS: (SessionPayload & { password: string })[] = [
  {
    username: process.env.WEBADMIN_USER ?? 'webadmin',
    password: process.env.WEBADMIN_PASS ?? 'Wwm@Admin2025',
    role: 'webadmin',
    displayName: 'Web Admin',
  },
  {
    username: process.env.SEO_USER ?? 'seouser',
    password: process.env.SEO_PASS ?? 'Wwm@Seo2025',
    role: 'seo',
    displayName: 'SEO Manager',
  },
  {
    username: process.env.ENQUIRY_USER ?? 'enquiry',
    password: process.env.ENQUIRY_PASS ?? 'Wwm@Enq2025',
    role: 'enquiry',
    displayName: 'Enquiry Viewer',
  },
];

const enc = new TextEncoder();

const PBKDF2_ITERATIONS = 100_000;

function toHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function fromHex(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < bytes.length; i++) bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
  return bytes;
}

export async function hashPassword(password: string): Promise<string> {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const key = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt, iterations: PBKDF2_ITERATIONS, hash: 'SHA-256' }, key, 256
  );
  return `${toHex(salt.buffer as ArrayBuffer)}:${toHex(bits)}`;
}

async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const [saltHex, hashHex] = stored.split(':');
  if (!saltHex || !hashHex) return false;
  const salt = fromHex(saltHex);
  const key = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt: salt.buffer as ArrayBuffer, iterations: PBKDF2_ITERATIONS, hash: 'SHA-256' }, key, 256
  );
  return toHex(bits) === hashHex;
}

async function hmac(value: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw', enc.encode(SECRET),
    { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(value));
  return Buffer.from(sig).toString('base64url');
}

export async function createToken(payload: SessionPayload): Promise<string> {
  const data = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const sig = await hmac(data);
  return `${data}.${sig}`;
}

export async function verifyToken(token: string): Promise<SessionPayload | null> {
  try {
    const [data, sig] = token.split('.');
    if (!data || !sig) return null;
    const expected = await hmac(data);
    if (sig !== expected) return null;
    return JSON.parse(Buffer.from(data, 'base64url').toString()) as SessionPayload;
  } catch {
    return null;
  }
}

export async function validateCredentials(username: string, password: string) {
  const user = USERS.find(u => u.username === username);
  if (!user) return null;

  const override = await getPasswordOverride(user.role);
  const ok = override ? await verifyPassword(password, override) : password === user.password;
  return ok ? user : null;
}

// For the change-password flow: verifies a user's *current* password (override
// if one has been set, otherwise the original default) so a role can confirm
// its own identity before rotating to a new one.
export async function verifyCurrentPassword(role: AdminRole, password: string): Promise<boolean> {
  const user = USERS.find(u => u.role === role);
  if (!user) return false;
  const override = await getPasswordOverride(role);
  return override ? verifyPassword(password, override) : password === user.password;
}

export async function changePassword(role: AdminRole, newPassword: string): Promise<boolean> {
  const hashed = await hashPassword(newPassword);
  return setPasswordOverride(role, hashed);
}

export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifyToken(token);
}
