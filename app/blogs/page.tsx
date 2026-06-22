import Link from 'next/link';
import Image from 'next/image';
import './blogs.css';

const POSTS = [
  {
    slug: 'ecommerce-website-development-dubai',
    title: 'Ecommerce Website Development in Dubai for Scalable Growth',
    excerpt: 'Get high-converting ecommerce website development in Dubai & UAE. Fast, secure, mobile-first online stores designed for sales growth and ROI.',
    category: 'Web Development',
    image: '/blog/ecommerce-website-development-dubai.webp',
  },
  {
    slug: 'search-engine-marketing-company-dubai',
    title: 'Search Engine Marketing Company in Dubai — SEM Services UAE',
    excerpt: 'ROI-focused search engine marketing company in Dubai delivering high-intent PPC campaigns built for UAE buyers. Get a free SEM audit today.',
    category: 'SEM',
    image: '/blog/search-engine-marketing-company-dubai.webp',
  },
  {
    slug: 'ppc-for-ecommerce-dubai',
    title: 'PPC for E-commerce Websites in Dubai: Where to Start',
    excerpt: 'Smart PPC for e-commerce websites in Dubai that aligns with buyer intent — not clicks. Decision-led Google Ads and Shopping campaigns.',
    category: 'PPC',
    image: '/blog/ppc-for-ecommerce-dubai.webp',
  },
  {
    slug: 'instagram-growth-services-uae',
    title: 'How to Choose the Best Instagram Growth Services in UAE',
    excerpt: 'Learn how to choose the best Instagram growth services in UAE. Proven strategies, local insights, and tips to grow followers & sales.',
    category: 'Social Media',
    image: '/blog/instagram-growth-services-uae.webp',
  },
  {
    slug: 'shopify-web-development-dubai',
    title: 'Shopify Web Development in Dubai for Ecommerce Growth',
    excerpt: 'Expert Shopify web development in Dubai focused on speed, Arabic UX, local payments & conversions. Built for real UAE ecommerce growth.',
    category: 'Web Development',
    image: '/blog/shopify-web-development-dubai.webp',
  },
  {
    slug: 'videography-company-dubai',
    title: 'Professional Videography & Photography Services in Dubai',
    excerpt: 'Hire a top videography company in Dubai for cinematic videos, photography, drone shots, events, and corporate productions across the UAE.',
    category: 'Creative',
    image: '/blog/videography-company-dubai.webp',
  },
  {
    slug: 'b2b-seo-services-in-dubai',
    title: 'B2B SEO Services in Dubai: Revenue with Strategic Authority',
    excerpt: 'Boost revenue with expert B2B SEO Services in Dubai. Drive qualified leads, build authority, and win high-intent decision-makers in the UAE.',
    category: 'SEO',
    image: '/blog/b2b-seo-services-in-dubai.webp',
  },
  {
    slug: 'digital-marketing-for-restaurants',
    title: 'Digital Marketing in UAE for Restaurant Success',
    excerpt: 'Digital marketing for restaurants in UAE that drives bookings, boosts visibility, and grows your brand across Dubai and the wider region.',
    category: 'Digital Marketing',
    image: '/blog/digital-marketing-for-restaurants.webp',
  },
  {
    slug: 'google-ads-agency-dubai',
    title: 'Google Ads Agency in Dubai: Get Measurable Results Today!',
    excerpt: 'Wide Wings Media is your leading Google Ads Agency in Dubai for data-driven campaigns, targeted leads, & measurable ROI for business growth.',
    category: 'PPC',
    image: '/blog/google-ads-agency-dubai.webp',
  },
];

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

      {/* Grid */}
      <section className="blg-section">
        <div className="container">
          <div className="blg-grid">
            {POSTS.map((post, i) => (
              <article key={post.slug} className="blg-card" data-reveal data-reveal-delay={`${(i % 3) * 80}`}>
                {/* Thumbnail */}
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
                {/* Body */}
                <div className="blg-card-body">
                  <h2 className="blg-card-title">{post.title}</h2>
                  <p className="blg-card-excerpt">{post.excerpt}</p>
                  <a
                    href={`https://wide-wings.ae/${post.slug}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blg-card-link"
                  >
                    Read Article
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
