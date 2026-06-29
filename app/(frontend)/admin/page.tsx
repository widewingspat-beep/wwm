import { redirect } from 'next/navigation';
import { getSession } from '@/lib/admin/auth';

export default async function AdminRoot() {
  const session = await getSession();
  if (!session) redirect('/admin/login');
  redirect('/admin/dashboard');
}
