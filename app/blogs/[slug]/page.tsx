import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { POSTS } from '../posts-data';
import '../blog-post.css';

/* ── per-post content map ── */
const CONTENT: Record<string, React.ReactNode> = {

  'ecommerce-website-development-dubai': (
    <>
      <h2>How Ecommerce Website Development Works in Dubai</h2>
      <p>Ecommerce development in Dubai has evolved far beyond building a product catalogue. Today, a high-performing online store must feature mobile-first design, trusted local payment gateways, VAT-compliant checkout, and seamless shipping integrations — all optimised for UAE buyer behaviour and regional search intent.</p>
      <p>Buyers now spend more time researching and purchasing products online than visiting physical stores. If your business doesn&apos;t have a fast, reliable, conversion-focused ecommerce platform, you&apos;re losing sales to competitors who do.</p>

      <h2>What an E-Commerce Website Includes</h2>
      <h3>Features of a High-Performing Ecommerce Website in the UAE</h3>
      <ul>
        <li>Advanced product filtering &amp; search</li>
        <li>Secure user accounts &amp; dashboards</li>
        <li>Multi-currency and multi-language support</li>
        <li>Built-in inventory &amp; order management</li>
        <li>Abandoned cart recovery</li>
        <li>Wishlist functionality</li>
        <li>Discount/coupon tools</li>
        <li>VAT-compliant invoicing</li>
        <li>CRM &amp; marketing automation integrations</li>
        <li>POS &amp; ERP integrations</li>
      </ul>

      <h3>Payment Gateway Integrations</h3>
      <p>We integrate the most trusted payment gateways used across the UAE: Stripe, PayTabs, Apple Pay, Google Pay, Network International, Telr, and Mashreq Pay — giving your customers a frictionless, secure checkout experience.</p>

      <h3>Shipping Integrations</h3>
      <p>We connect your store to leading UAE logistics providers including Aramex, Fetchr, DHL, Quiqup, and local UAE courier networks to automate fulfilment and reduce delivery delays.</p>

      <h3>Industry-Specific Ecommerce Solutions</h3>
      <p>We build stores across eight key verticals:</p>
      <ul>
        <li><strong>Fashion &amp; Apparel</strong> — Size guides, lookbooks, returns management</li>
        <li><strong>Electronics &amp; Gadgets</strong> — Spec filtering, warranty tracking, bulk pricing</li>
        <li><strong>Beauty, Cosmetics &amp; Skincare</strong> — Shade finders, subscription boxes, reviews</li>
        <li><strong>Groceries &amp; Food Delivery</strong> — Slot booking, freshness filters, rapid checkout</li>
        <li><strong>Furniture &amp; Home Decor</strong> — 3D previews, room planners, delivery scheduling</li>
        <li><strong>Healthcare &amp; Clinics</strong> — Prescription uploads, regulated payment flows</li>
        <li><strong>Real Estate &amp; Property Developers</strong> — Virtual tours, payment plan tools</li>
        <li><strong>B2B &amp; Wholesale</strong> — Tiered pricing, MOQs, bulk order dashboards</li>
      </ul>

      <h2>Sell More with E-Commerce Web Development</h2>
      <p>A well-built ecommerce platform drives growth through fast transactions, secure payments, mobile responsiveness, buyer-centric layouts, SEO-ready structure, and scalable ecommerce architecture. Every element of your store should be designed to convert visitors into customers — not just showcase your products.</p>

      <h2>Why Your Business Needs an E-Commerce Website</h2>
      <h3>Reduce Sales Pressure for Customers</h3>
      <p>Online stores eliminate friction by allowing visitors to explore products at their own pace, without the pressure of a sales environment. Customers can research, compare, and purchase on their own schedule — 24 hours a day.</p>

      <h3>Easier Stock Expansion &amp; Product Visibility</h3>
      <p>Ecommerce removes the operational constraints of physical retail. You can add thousands of SKUs, update pricing in real time, and expand your catalogue without additional floor space or staff.</p>

      <h3>Enable Price Comparisons</h3>
      <p>UAE shoppers are highly price-aware. A well-structured product page with transparent pricing, reviews, and trust signals helps you compete confidently and win the sale even in a crowded market.</p>

      <h2>Strengthen Your Brand Exposure</h2>
      <p>An SEO-optimised ecommerce store builds long-term organic visibility on Google. Every product page, category page, and blog post is an opportunity to rank for high-intent search queries and drive consistent traffic without ongoing ad spend.</p>

      <h2>Mobile-First E-Commerce in the UAE</h2>
      <p>Mobile optimisation is no longer optional — it&apos;s a non-negotiable requirement. Over 70% of online purchases in the UAE are initiated on a smartphone. We build responsive layouts, mobile-optimised checkout journeys, SSL-protected pages, and fast-loading stores that convert on every device.</p>

      <h2>Platforms We Use to Build High-ROI Ecommerce Stores</h2>
      <h3>WooCommerce Development Dubai</h3>
      <p>Fast stores, custom product pages, smart checkout flows, and performance-optimised code — WooCommerce gives you full flexibility to build exactly what your business needs without platform limitations.</p>

      <h3>Shopify Stores for Fast Scaling</h3>
      <p>Our Shopify web development services in Dubai use high-converting themes, UAE payment integrations, and automation tools to help brands launch fast and scale efficiently.</p>

      <h3>Magento / Adobe Commerce for Large Catalogs</h3>
      <p>Enterprise-level capabilities with multi-store functionality, advanced B2B features, and deep customisation — ideal for large retailers with complex inventory requirements.</p>

      <h3>Custom E-Commerce Solutions</h3>
      <p>When off-the-shelf platforms aren&apos;t enough, we build fully tailored ecommerce systems with custom UX, API-ready architecture, and integrations built specifically for your business model.</p>

      <h3>Shopify vs WooCommerce vs Magento</h3>
      <div className="bp-table-wrap">
        <table className="bp-table">
          <thead>
            <tr>
              <th>Factor</th>
              <th>Shopify</th>
              <th>WooCommerce</th>
              <th>Magento</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Best For</td><td>Fast growth, quick launch</td><td>Custom &amp; flexible</td><td>Enterprise, multi-store</td></tr>
            <tr><td>Cost</td><td>Monthly subscription</td><td>Low (self-hosted)</td><td>High (enterprise)</td></tr>
            <tr><td>Speed</td><td>Fast</td><td>Optimisable</td><td>High with tuning</td></tr>
            <tr><td>Customisation</td><td>Moderate</td><td>High</td><td>Very High</td></tr>
            <tr><td>UAE Payments</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
            <tr><td>Catalog Size</td><td>Small–Medium</td><td>Medium–Large</td><td>Large–Enterprise</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Our Proven E-Commerce Website Development Process</h2>
      <ol>
        <li><strong>Discovery &amp; Strategy</strong> — Competitor and audience analysis, platform selection, feature scoping</li>
        <li><strong>UX &amp; UI Design</strong> — Wireframes, visual design, mobile-first layouts</li>
        <li><strong>Custom Development &amp; Integrations</strong> — Responsive build, secure backend, payment and shipping setup</li>
        <li><strong>QA Testing &amp; Performance Optimisation</strong> — Cross-device testing, speed audits, bug resolution</li>
        <li><strong>Launch with SEO &amp; Hosting Setup</strong> — Technical SEO foundations, high-performance hosting, SSL</li>
        <li><strong>Ongoing Optimisation &amp; Growth</strong> — Continuous performance monitoring and conversion improvements</li>
      </ol>

      <h2>Ecommerce Security, Compliance &amp; UAE Regulations</h2>
      <h3>Security Measures We Implement</h3>
      <ul>
        <li>SSL certificates (256-bit encryption)</li>
        <li>PCI DSS-compliant payment processing</li>
        <li>Encrypted user accounts</li>
        <li>Fraud detection systems</li>
        <li>Secure cloud infrastructure</li>
        <li>GDPR-aligned data controls</li>
      </ul>

      <h3>Dubai &amp; UAE Ecommerce Compliance</h3>
      <ul>
        <li>VAT-compliant invoicing</li>
        <li>UAE consumer rights law alignment</li>
        <li>TRA digital guidelines</li>
        <li>Data retention &amp; privacy requirements</li>
        <li>Cookie consent compliance</li>
      </ul>

      <h2>How Much Does E-Commerce Website Development Cost in Dubai?</h2>
      <p>Pricing depends on the scope of your project. Key cost factors include the number of products, custom vs. template design, required features, payment gateway setup, shipping integrations, custom functionality, and hosting &amp; security requirements.</p>

      <div className="bp-highlight">
        <p><strong>Typical UAE Price Ranges:</strong><br />
        Starter Stores (SMEs): AED 6,000 – AED 18,000<br />
        Growth-Ready Stores: AED 20,000 – AED 45,000<br />
        Enterprise Platforms: AED 50,000 – AED 120,000+</p>
      </div>

      <h2>Why Choose Wide Wings Media for E-Commerce?</h2>
      <p>Wide Wings Media is a full-service ecommerce development agency in Dubai specialising in WooCommerce, Shopify, Magento, and custom builds. We combine technical expertise with conversion-led design and ongoing digital marketing support to deliver stores that don&apos;t just look great — they sell.</p>
      <ul>
        <li>End-to-end ecommerce development</li>
        <li>UAE payment gateway &amp; logistics integration</li>
        <li>Mobile-first, SEO-ready architecture</li>
        <li>Post-launch support &amp; growth plans</li>
        <li>In-house digital marketing &amp; CRO team</li>
      </ul>
    </>
  ),

};

/* ── Related posts helper ── */
function getRelated(slug: string, category: string) {
  return POSTS.filter(p => p.slug !== slug && p.category === category).slice(0, 4);
}

/* ── Page ── */
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS.find(p => p.slug === slug);
  if (!post) notFound();

  const content = CONTENT[slug];
  const related = getRelated(slug, post.category);

  /* TOC: pull h2 headings from content string representation */
  const tocItems = [
    'How It Works in Dubai',
    'What an E-Commerce Website Includes',
    'Sell More with E-Commerce',
    'Why Your Business Needs It',
    'Mobile-First in the UAE',
    'Platforms We Use',
    'Our Development Process',
    'Security & Compliance',
    'Cost in Dubai',
    'Why Choose Wide Wings',
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section className="bp-hero">
        <div className="bp-hero-blob" aria-hidden="true" />
        <div className="bp-hero-inner">
          <nav className="bp-breadcrumb" aria-label="breadcrumb">
            <Link href="/">Home</Link>
            <span className="bp-bc-sep">/</span>
            <Link href="/blogs">Blogs</Link>
            <span className="bp-bc-sep">/</span>
            <span>{post.category}</span>
          </nav>
          <div className="bp-cat-chip">{post.category}</div>
          <h1 className="bp-hero-h1">{post.title}</h1>
          <div className="bp-meta">
            <span className="bp-meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              8 min read
            </span>
            <span className="bp-meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Wide Wings Media
            </span>
          </div>
        </div>
      </section>

      {/* ── FEATURED IMAGE ── */}
      {post.image && (
        <div className="bp-featured-img-wrap">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={480}
            style={{ width: '100%', height: '480px', objectFit: 'cover' }}
            priority
          />
        </div>
      )}

      {/* ── BODY ── */}
      <div className="bp-body-wrap">
        <div className="bp-layout">

          {/* Article */}
          <article className="bp-article">
            {content ?? (
              <p>Full article coming soon. Check back shortly for the complete post.</p>
            )}
          </article>

          {/* Sidebar */}
          <aside className="bp-sidebar">

            {/* TOC */}
            {slug === 'ecommerce-website-development-dubai' && (
              <div className="bp-toc">
                <p className="bp-toc-title">Table of Contents</p>
                <ul className="bp-toc-list">
                  {tocItems.map((item, i) => (
                    <li key={i}><a href="#">{item}</a></li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA */}
            <div className="bp-sidebar-cta">
              <p className="bp-sidebar-cta-title">Ready to Grow Your Business?</p>
              <p className="bp-sidebar-cta-sub">Get a free consultation with our team today.</p>
              <Link href="/contact" className="bp-sidebar-cta-btn">
                Free Consultation
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>

            {/* Related */}
            {related.length > 0 && (
              <div className="bp-related">
                <p className="bp-related-hd">Related Posts</p>
                <ul className="bp-related-list">
                  {related.map(r => (
                    <li key={r.slug} className="bp-related-item">
                      <Link href={`/blogs/${r.slug}`} className="bp-related-link">
                        <div className="bp-related-thumb">
                          <Image src={r.image} alt={r.title} width={58} height={42} />
                        </div>
                        <div>
                          <span className="bp-related-cat">{r.category}</span>
                          <p className="bp-related-title">{r.title}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </aside>
        </div>
      </div>

      {/* ── BOTTOM CTA ── */}
      <section className="bp-bottom-cta">
        <div className="bp-bottom-cta-inner">
          <p className="bp-bottom-cta-eyebrow">Let&apos;s Work Together</p>
          <h2 className="bp-bottom-cta-h2">Ready to Build Something<br /><span style={{color:'#a73184'}}>That Actually Sells?</span></h2>
          <p className="bp-bottom-cta-sub">Talk to our ecommerce experts and get a free strategy session tailored to your business goals.</p>
          <Link href="/contact" className="bp-bottom-cta-btn">
            Get a Free Consultation
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </section>
    </>
  );
}

export function generateStaticParams() {
  return POSTS.map(p => ({ slug: p.slug }));
}
