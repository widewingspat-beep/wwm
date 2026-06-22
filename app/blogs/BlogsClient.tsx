'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
};

const PER_PAGE = 6;

export default function BlogsClient({ posts }: { posts: Post[] }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [page, setPage] = useState(1);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(posts.map(p => p.category))).sort();
    return ['All', ...cats];
  }, [posts]);

  const catCounts = useMemo(() => {
    const map: Record<string, number> = { All: posts.length };
    posts.forEach(p => { map[p.category] = (map[p.category] || 0) + 1; });
    return map;
  }, [posts]);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return posts;
    return posts.filter(p => p.category === activeCategory);
  }, [posts, activeCategory]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const visible = filtered.slice(start, start + PER_PAGE);
  const recent = posts.slice(0, 5);

  function getPageNumbers() {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (page <= 3) return [1, 2, 3, '…', totalPages];
    if (page >= totalPages - 2) return [1, '…', totalPages - 2, totalPages - 1, totalPages];
    return [1, '…', page - 1, page, page + 1, '…', totalPages];
  }

  function go(p: number) { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }

  function changeCategory(cat: string) { setActiveCategory(cat); setPage(1); }

  return (
    <section className="blg-section">

      {/* ── Sticky filter bar ── */}
      <div className="blg-filter-bar">
        <div className="container">
          <div className="blg-filter-inner" role="tablist">
            {categories.map(cat => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`blg-filter-btn${activeCategory === cat ? ' blg-filter-btn--active' : ''}`}
                onClick={() => changeCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="blg-layout">

          {/* ── Main ── */}
          <div className="blg-main">
            <div className="blg-results-meta">
              <p className="blg-results-count">
                Showing <strong>{filtered.length}</strong> {activeCategory === 'All' ? 'articles' : `articles in "${activeCategory}"`}
              </p>
            </div>

            {visible.length === 0 ? (
              <p className="blg-empty">No posts in this category yet.</p>
            ) : (
              <div className="blg-grid">
                {visible.map(post => (
                  <article key={post.slug} className="blg-card">
                    <div className="blg-card-img">
                      <Image src={post.image} alt={post.title} width={600} height={340} className="blg-card-img-el" />
                      <span className="blg-card-cat">{post.category}</span>
                    </div>
                    <div className="blg-card-body">
                      <h2 className="blg-card-title">{post.title}</h2>
                      <p className="blg-card-excerpt">{post.excerpt}</p>
                      <a href={`https://wide-wings.ae/${post.slug}/`} target="_blank" rel="noopener noreferrer" className="blg-card-link">
                        Read More
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                        </svg>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {totalPages > 1 && (
              <nav className="blg-pagination" aria-label="Blog pagination">
                <button className="blg-page-btn" onClick={() => go(page - 1)} disabled={page === 1}>← Prev</button>
                {getPageNumbers().map((p, idx) =>
                  p === '…' ? (
                    <span key={`e-${idx}`} className="blg-page-ellipsis">…</span>
                  ) : (
                    <button key={p} className={`blg-page-btn${page === p ? ' blg-page-btn--active' : ''}`} onClick={() => go(p as number)} aria-current={page === p ? 'page' : undefined}>{p}</button>
                  )
                )}
                <button className="blg-page-btn" onClick={() => go(page + 1)} disabled={page === totalPages}>Next →</button>
              </nav>
            )}
          </div>

          {/* ── Sidebar ── */}
          <aside className="blg-sidebar">

            {/* Recent Posts */}
            <div className="blg-widget">
              <div className="blg-widget-hd">
                <span className="blg-widget-icon blg-widget-icon--purple">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                </span>
                <h3>Recent Posts</h3>
              </div>
              <ul className="blg-recent-list">
                {recent.map(post => (
                  <li key={post.slug} className="blg-recent-item">
                    <a href={`https://wide-wings.ae/${post.slug}/`} target="_blank" rel="noopener noreferrer" className="blg-recent-link">
                      <div className="blg-recent-thumb">
                        <Image src={post.image} alt={post.title} width={58} height={42} className="blg-recent-img" />
                      </div>
                      <div className="blg-recent-info">
                        <span className="blg-recent-cat">{post.category}</span>
                        <p className="blg-recent-title">{post.title}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="blg-widget">
              <div className="blg-widget-hd">
                <span className="blg-widget-icon blg-widget-icon--gold">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                </span>
                <h3>Categories</h3>
              </div>
              <ul className="blg-cat-list">
                {categories.map(cat => (
                  <li key={cat}>
                    <button className={`blg-cat-item${activeCategory === cat ? ' blg-cat-item--active' : ''}`} onClick={() => changeCategory(cat)}>
                      <span>{cat}</span>
                      <span className="blg-cat-badge">{catCounts[cat] ?? 0}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </aside>
        </div>
      </div>
    </section>
  );
}
