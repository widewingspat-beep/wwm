import Link from 'next/link';
import './blogs.css';
import BlogsClient from './BlogsClient';
import { POSTS } from './posts-data';

export default function BlogsPage() {
  return (
    <>
      {/* Hero */}
      <section className="blg-hero">
        <div className="blg-hero-blob" aria-hidden="true" />
        <div className="container blg-hero-inner">
          <nav className="blg-breadcrumb" aria-label="breadcrumb">
            <Link href="/">Home</Link>
            <span className="blg-bc-sep">/</span>
            <span>Blogs</span>
          </nav>
          <h1 className="blg-hero-h1">Blogs &amp; Insights</h1>
          <p className="blg-hero-sub">Expert perspectives on digital marketing, web design, SEO, and growth strategies for businesses in Dubai and the UAE.</p>
        </div>
      </section>

      {/* Paginated grid — client component */}
      <BlogsClient posts={POSTS} />
    </>
  );
}
