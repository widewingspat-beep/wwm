import { redirect } from 'next/navigation';
import { getSession } from '@/lib/admin/auth';
import { store } from '@/lib/admin/store';
import { POSTS } from '@/app/(frontend)/blogs/posts-data';
import AdminShell from '@/components/admin/AdminShell';

export default async function Dashboard() {
  const session = await getSession();
  if (!session) redirect('/admin/login');

  const pages = store.pages.list();
  const enquiries = store.enquiries.list();
  const newEnquiries = enquiries.filter(e => e.status === 'new').length;
  const seoData = store.seo.list();
  const seoFilled = seoData.filter(s => s.metaTitle && s.metaDescription).length;
  const totalBlogs = POSTS.length;

  const roleLabel = { webadmin: 'Web Admin', seo: 'SEO Manager', enquiry: 'Enquiry Viewer' }[session.role];

  return (
    <AdminShell session={session} title="Dashboard" subtitle={`Welcome back, ${session.displayName}`}>
      {/* STATS */}
      <div className="adm-stat-grid">
        {(session.role === 'webadmin' || session.role === 'seo') && (
          <div className="adm-stat adm-stat-accent">
            <div className="adm-stat-num">{pages.length}</div>
            <div className="adm-stat-label">Total Pages</div>
          </div>
        )}
        {(session.role === 'webadmin' || session.role === 'seo') && (
          <div className="adm-stat adm-stat-accent">
            <div className="adm-stat-num">{totalBlogs}</div>
            <div className="adm-stat-label">Total Blogs</div>
          </div>
        )}
        {(session.role === 'webadmin' || session.role === 'enquiry') && (
          <div className="adm-stat adm-stat-gold">
            <div className="adm-stat-num">{enquiries.length}</div>
            <div className="adm-stat-label">Total Enquiries</div>
          </div>
        )}
        {(session.role === 'webadmin' || session.role === 'enquiry') && (
          <div className="adm-stat adm-stat-orange">
            <div className="adm-stat-num">{newEnquiries}</div>
            <div className="adm-stat-label">New Enquiries</div>
          </div>
        )}
        {(session.role === 'webadmin' || session.role === 'seo') && (
          <div className="adm-stat adm-stat-blue">
            <div className="adm-stat-num">{seoFilled}/{pages.length}</div>
            <div className="adm-stat-label">SEO Configured</div>
          </div>
        )}
      </div>

      {/* QUICK ACTIONS */}
      <div className="adm-card">
        <div className="adm-card-head">
          <div className="adm-card-title">Quick Actions</div>
        </div>
        <div style={{ padding: '20px 24px', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {session.role === 'webadmin' && (
            <a href="/admin/pages" className="adm-btn adm-btn-primary" style={{ textDecoration: 'none' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              Manage Pages
            </a>
          )}
          {(session.role === 'seo' || session.role === 'webadmin') && (
            <a href="/admin/seo" className="adm-btn adm-btn-primary" style={{ textDecoration: 'none' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              Open SEO Manager
            </a>
          )}
          {(session.role === 'enquiry' || session.role === 'webadmin') && (
            <a href="/admin/enquiries" className="adm-btn adm-btn-primary" style={{ textDecoration: 'none' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              View Enquiries
            </a>
          )}
        </div>
      </div>

      {/* RECENT ENQUIRIES PREVIEW */}
      {(session.role === 'webadmin' || session.role === 'enquiry') && (
        <div className="adm-card">
          <div className="adm-card-head">
            <div className="adm-card-title">Recent Enquiries</div>
            <a href="/admin/enquiries" className="adm-btn adm-btn-outline adm-btn-sm" style={{ textDecoration: 'none' }}>View All</a>
          </div>
          <table className="adm-table">
            <thead>
              <tr>
                <th>Name</th><th>Service</th><th>Received</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.slice(0, 5).map(e => (
                <tr key={e.id}>
                  <td><strong>{e.name}</strong><br /><span style={{ color: '#9ca3af', fontSize: '0.78rem' }}>{e.email}</span></td>
                  <td>{e.service}</td>
                  <td>{new Date(e.receivedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
                  <td><span className={`adm-badge ${e.status === 'new' ? 'adm-badge-new' : 'adm-badge-read'}`}>{e.status === 'new' ? '● New' : '✓ Read'}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminShell>
  );
}
