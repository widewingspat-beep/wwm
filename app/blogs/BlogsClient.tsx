'use client';

import { useState } from 'react';
import Image from 'next/image';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
};

const PER_PAGE = 9;

export default function BlogsClient({ posts }: { posts: Post[] }) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(posts.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const visible = posts.slice(start, start + PER_PAGE);

  function getPageNumbers() {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (page <= 3) return [1, 2, 3, '…', totalPages];
    if (page >= totalPages - 2) return [1, '…', totalPages - 2, totalPages - 1, totalPages];
    return [1, '…', page - 1, page, page + 1, '…', totalPages];
  }

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  function go(p: number) {
    setPage(p);
    scrollTop();
  }

  return (
    <section className="blg-section">
      <div className="container">
        {/* Grid */}
        <div className="blg-grid">
          {visible.map((post, i) => (
            <article key={post.slug} className="blg-card">
              <div className="blg-card-img">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={340}
                  className="blg-card-img-el"
                />
                <span className="blg-card-cat">{post.category}</span>
              </div>
              <div className="blg-card-body">
                <h2 className="blg-card-title">{post.title}</h2>
                <p className="blg-card-excerpt">{post.excerpt}</p>
                <a
                  href={`https://wide-wings.ae/${post.slug}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blg-card-link"
                >
                  Read More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="blg-pagination" aria-label="Blog pagination">
            <button
              className="blg-page-btn"
              onClick={() => go(page - 1)}
              disabled={page === 1}
              aria-label="Previous page"
            >
              ← Prev
            </button>

            {getPageNumbers().map((p, idx) =>
              p === '…' ? (
                <span key={`ellipsis-${idx}`} className="blg-page-ellipsis">…</span>
              ) : (
                <button
                  key={p}
                  className={`blg-page-btn${page === p ? ' blg-page-btn--active' : ''}`}
                  onClick={() => go(p as number)}
                  aria-current={page === p ? 'page' : undefined}
                >
                  {p}
                </button>
              )
            )}

            <button
              className="blg-page-btn"
              onClick={() => go(page + 1)}
              disabled={page === totalPages}
              aria-label="Next page"
            >
              Next →
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}
