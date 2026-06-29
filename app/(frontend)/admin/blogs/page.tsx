import { redirect } from 'next/navigation';
import { getSession } from '@/lib/admin/auth';
import AdminShell from '@/components/admin/AdminShell';
import BlogEditor from '@/components/admin/BlogEditor';
import { listPublishedSlugs } from '@/lib/admin/blog-kv';
import { POSTS } from '@/app/(frontend)/blogs/posts-data';

export default async function BlogsPage() {
  const session = await getSession();
  if (!session) redirect('/admin/login');
  if (session.role !== 'webadmin') redirect('/admin/dashboard');

  const publishedSlugs = await listPublishedSlugs();

  return (
    <AdminShell session={session} title="Blog Content Editor" subtitle="Paste HTML content for any blog post and publish it live">

      {/* Stats bar */}
      <div className="adm-stat-grid" style={{ marginBottom: 20 }}>
        <div className="adm-stat adm-stat-accent">
          <div className="adm-stat-num">{POSTS.length}</div>
          <div className="adm-stat-label">Total Posts</div>
        </div>
        <div className="adm-stat adm-stat-blue">
          <div className="adm-stat-num">{publishedSlugs.length}</div>
          <div className="adm-stat-label">Custom Content</div>
        </div>
        <div className="adm-stat adm-stat-gold">
          <div className="adm-stat-num">{POSTS.length - publishedSlugs.length}</div>
          <div className="adm-stat-label">Using Default</div>
        </div>
      </div>

      <BlogEditor />
    </AdminShell>
  );
}
