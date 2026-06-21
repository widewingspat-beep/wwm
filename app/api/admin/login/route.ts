import { NextRequest, NextResponse } from 'next/server';
import { validateCredentials, createToken, COOKIE_NAME } from '@/lib/admin/auth';

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  const user = validateCredentials(username, password);
  if (!user) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
  const token = await createToken({ username: user.username, role: user.role, displayName: user.displayName });
  const res = NextResponse.json({ role: user.role, displayName: user.displayName });
  res.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 8, // 8 hours
    path: '/',
  });
  return res;
}
