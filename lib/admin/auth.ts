import { cookies } from 'next/headers';

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

export function validateCredentials(username: string, password: string) {
  return USERS.find(u => u.username === username && u.password === password) ?? null;
}

export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifyToken(token);
}
