'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
};

const PER_PAGE = 6;

const READ_MORE_PHRASES = [
  'See how to grow your brand',
  'Get the full story',
  'Explore more strategies',
  'Boost your marketing game',
  'Find out more about this topic',
];

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
          <div className="blg-filter-wrap">
            {/* Pinned "All" tab */}
            <button
              role="tab"
              aria-selected={activeCategory === 'All'}
              className={`blg-filter-btn blg-filter-btn--all${activeCategory === 'All' ? ' blg-filter-btn--all-active' : ''}`}
              onClick={() => changeCategory('All')}
            >
              All
            </button>

            {/* Scrolling marquee of other categories */}
            <div className="blg-marquee-track" role="tablist">
              <div className="blg-marquee-inner">
                {/* Duplicate list for seamless loop */}
                {[...categories.filter(c => c !== 'All'), ...categories.filter(c => c !== 'All')].map((cat, i) => (
                  <button
                    key={`${cat}-${i}`}
                    role="tab"
                    aria-selected={activeCategory === cat && i < categories.length - 1}
                    className={`blg-filter-btn${activeCategory === cat ? ' blg-filter-btn--active' : ''}`}
                    onClick={() => changeCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
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
                {visible.map((post, i) => (
                  <article key={post.slug} className="blg-card">
                    <Link href={`/${post.slug}/`} className="blg-card-img">
                      <Image src={post.image} alt={post.title} width={600} height={340} className="blg-card-img-el" />
                      <span className="blg-card-cat">{post.category}</span>
                    </Link>
                    <div className="blg-card-body">
                      <h2 className="blg-card-title">
                        <Link href={`/${post.slug}/`}>{post.title}</Link>
                      </h2>
                      <p className="blg-card-excerpt">{post.excerpt}</p>
                      <Link href={`/${post.slug}/`} className="blg-card-link">
                        {READ_MORE_PHRASES[i % READ_MORE_PHRASES.length]}<span className="sr-only"> about {post.title}</span>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                        </svg>
                      </Link>
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
                    <a href={`/${post.slug}/`} className="blg-recent-link">
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

            {/* CTA widget */}
            <div className="blg-widget blg-widget-cta">
              <h3 className="blg-cta-heading">Ready to build a website that works as hard as you do?</h3>
              <a href="/contact-us" className="blg-cta-btn">
                Free Consultation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>


          </aside>
        </div>
      </div>
    </section>
  );
}
