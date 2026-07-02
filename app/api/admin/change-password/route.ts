import { NextRequest, NextResponse } from 'next/server';
import { getSession, verifyCurrentPassword, changePassword, type AdminRole } from '@/lib/admin/auth';

const VALID_ROLES: AdminRole[] = ['webadmin', 'seo', 'enquiry'];

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { targetRole, currentPassword, newPassword } = await req.json();

  if (!VALID_ROLES.includes(targetRole)) {
    return NextResponse.json({ error: 'Invalid role' }, { status: 400 });
  }
  if (typeof newPassword !== 'string' || newPassword.length < 8) {
    return NextResponse.json({ error: 'New password must be at least 8 characters' }, { status: 400 });
  }

  const isSelf = targetRole === session.role;
  const isWebadmin = session.role === 'webadmin';

  // webadmin (master) can reset any account without knowing its current password.
  // Every other case — changing your own password, including webadmin's own —
  // requires proving you know the current one first.
  if (!isWebadmin && !isSelf) {
    return NextResponse.json({ error: 'Forbidden — you can only change your own password' }, { status: 403 });
  }
  if (isSelf) {
    if (typeof currentPassword !== 'string' || !(await verifyCurrentPassword(session.role, currentPassword))) {
      return NextResponse.json({ error: 'Current password is incorrect' }, { status: 401 });
    }
  }

  const ok = await changePassword(targetRole, newPassword);
  if (!ok) return NextResponse.json({ error: 'Failed to save new password' }, { status: 500 });
  return NextResponse.json({ ok: true });
}
