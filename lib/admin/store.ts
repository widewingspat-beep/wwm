// In-memory store — replace with a real DB (Supabase, Neon, etc.) for production

export interface MediaItem {
  id: string;
  name: string;
  fileType: 'image' | 'video' | 'pdf' | 'other';
  mimeType: string;
  url: string;           // data URL for images, external URL for video/pdf
  sizeBytes: number;
  altText: string;
  keywords: string;
  uploadedAt: string;
}

export interface Page {
  id: string;
  title: string;
  slug: string;
  content: string;
  status: 'published' | 'draft';
  createdAt: string;
  updatedAt: string;
}

export interface SeoData {
  pageId: string;
  pageTitle: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  secondaryKeywords: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterCard: 'summary' | 'summary_large_image';
  robots: string;
  schemaType: string;
  featuredImage: string;
  featuredImageAlt: string;
  noindex: boolean;
  nofollow: boolean;
  updatedAt: string;
}

export interface Redirect {
  id: string;
  from: string;
  to: string;
  type: '301' | '302';
  createdAt: string;
}

export interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  status: 'new' | 'read';
  receivedAt: string;
}

const pages: Page[] = [
  // Static pages
  { id: 'home', title: 'Home', slug: '/', content: '', status: 'published', createdAt: '2025-01-01', updatedAt: '2026-06-01' },
  { id: 'about', title: 'About', slug: '/about', content: '', status: 'published', createdAt: '2025-01-01', updatedAt: '2026-06-10' },
  { id: 'about-us', title: 'About Us', slug: '/about-us', content: '', status: 'published', createdAt: '2025-01-01', updatedAt: '2026-06-10' },
  { id: 'contact', title: 'Contact', slug: '/contact', content: '', status: 'published', createdAt: '2025-01-01', updatedAt: '2026-06-05' },
  { id: 'services', title: 'Services', slug: '/services', content: '', status: 'published', createdAt: '2025-01-01', updatedAt: '2026-06-21' },
  { id: 'blogs', title: 'Blogs', slug: '/blogs', content: '', status: 'published', createdAt: '2025-01-01', updatedAt: '2026-06-21' },
  { id: 'news', title: 'News', slug: '/news', content: '', status: 'published', createdAt: '2025-01-01', updatedAt: '2026-06-21' },
  { id: 'digital-marketing-services', title: 'Digital Marketing Services', slug: '/digital-marketing-services', content: '', status: 'published', createdAt: '2025-01-01', updatedAt: '2026-06-21' },
  { id: 'privacy', title: 'Privacy', slug: '/privacy', content: '', status: 'published', createdAt: '2025-01-01', updatedAt: '2026-06-21' },
  { id: 'privacy-policy', title: 'Privacy Policy', slug: '/privacy-policy', content: '', status: 'published', createdAt: '2025-01-01', updatedAt: '2026-06-21' },
  { id: 'terms', title: 'Terms', slug: '/terms', content: '', status: 'published', createdAt: '2025-01-01', updatedAt: '2026-06-21' },
  { id: 'terms-conditions', title: 'Terms & Conditions', slug: '/terms-conditions', content: '', status: 'published', createdAt: '2025-01-01', updatedAt: '2026-06-21' },
  // Service detail pages (clean URLs)
  { id: 'web-app-development', title: 'Web & App Development', slug: '/web-app-development', content: '', status: 'published', createdAt: '2025-01-01', updatedAt: '2026-06-21' },
  { id: 'creative-branding', title: 'Creative & Branding', slug: '/creative-branding', content: '', status: 'published', createdAt: '2025-01-01', updatedAt: '2026-06-21' },
  { id: 'paid-advertising', title: 'Paid Advertising & Media Buying', slug: '/paid-advertising', content: '', status: 'published', createdAt: '2025-01-01', updatedAt: '2026-06-21' },
  { id: 'social-media-management', title: 'Social Media Management', slug: '/social-media-management', content: '', status: 'published', createdAt: '2025-01-01', updatedAt: '2026-06-21' },
  { id: 'content-creation', title: 'Content Creation & Graphic Design', slug: '/content-creation', content: '', status: 'published', createdAt: '2025-01-01', updatedAt: '2026-06-21' },
  { id: 'email-sms-crm', title: 'Email, SMS & CRM Marketing', slug: '/email-sms-crm', content: '', status: 'published', createdAt: '2025-01-01', updatedAt: '2026-06-21' },
  { id: 'seo-performance', title: 'SEO & Performance Management', slug: '/seo-performance', content: '', status: 'published', createdAt: '2025-01-01', updatedAt: '2026-06-21' },
  { id: 'ooh-advertising', title: 'OOH Advertising', slug: '/ooh-advertising', content: '', status: 'published', createdAt: '2025-01-01', updatedAt: '2026-06-21' },
  { id: 'analytics-performance', title: 'Analytics & Performance Marketing', slug: '/analytics-performance', content: '', status: 'published', createdAt: '2025-01-01', updatedAt: '2026-06-21' },
  { id: 'pr-management', title: 'PR Management', slug: '/pr-management', content: '', status: 'published', createdAt: '2025-01-01', updatedAt: '2026-06-21' },
];

// SEO metadata fetched from the corresponding pages on the legacy wide-wings.ae
// site so search rankings transfer cleanly when the domain points here.
function makeSeo(
  pageId: string,
  pageTitle: string,
  slug: string,
  metaTitle: string,
  metaDescription: string,
  schemaType: string = 'WebPage',
): SeoData {
  return {
    pageId, pageTitle, slug,
    metaTitle, metaDescription,
    focusKeyword: '', secondaryKeywords: '',
    canonicalUrl: `https://wwm-mu.vercel.app${slug}`,
    ogTitle: metaTitle, ogDescription: metaDescription,
    ogImage: '', featuredImage: '', featuredImageAlt: '',
    twitterCard: 'summary_large_image',
    robots: 'index, follow',
    schemaType,
    noindex: false, nofollow: false,
    updatedAt: '2026-06-29',
  };
}

const seoData: SeoData[] = [
  makeSeo('home', 'Home', '/',
    'Wide Wings Media: Leading Digital Marketing Agency in Dubai',
    'Achieve rapid growth across all media platforms with Wide Wings Media, your premier digital marketing agency in Dubai, UAE.',
    'Organization'),
  makeSeo('about', 'About', '/about',
    'Wide Wings Media: A Digital Marketing Partner You Can Trust.',
    'Wide Wings Media is a digital marketing company in Dubai, driving growth through SEO, paid media, and social marketing. Reach out for more.',
    'Organization'),
  makeSeo('about-us', 'About Us', '/about-us',
    'Wide Wings Media: A Digital Marketing Partner You Can Trust.',
    'Wide Wings Media is a digital marketing company in Dubai, driving growth through SEO, paid media, and social marketing. Reach out for more.',
    'Organization'),
  makeSeo('contact', 'Contact', '/contact',
    'Contact Us at Wide Wings Media to Start Your Project Today!',
    "Contact us at Wide Wings Media to discuss your project or get a free quote. Let's bring your media vision to life with expert support.",
    'LocalBusiness'),
  makeSeo('services', 'Services', '/services',
    'Boost ROI with Data-Driven Digital Marketing Services in Dubai',
    'Drive conversions and return on investment (ROI) with data-based digital marketing services from Wide Wings Media. Request your quote today!',
    'Service'),
  makeSeo('blogs', 'Blogs', '/blogs',
    'Wide Wings Media: Digital Marketing Insights and Knowledge',
    'Explore valuable insights, articles, and blogs with Wide Wings Media. Expand your knowledge and feed your curiosity daily with our blogs.'),
  makeSeo('news', 'News', '/news',
    'News | Wide Wings Media',
    'Latest news and media coverage featuring Wide Wings Media. Read our press mentions and industry insights.'),
  makeSeo('digital-marketing-services', 'Digital Marketing Services', '/digital-marketing-services',
    'Boost ROI with Data-Driven Digital Marketing Services in Dubai',
    'Drive conversions and return on investment (ROI) with data-based digital marketing services from Wide Wings Media. Request your quote today!',
    'Service'),
  makeSeo('privacy', 'Privacy', '/privacy',
    'Privacy Policy | Wide Wings Media',
    'Wide Wings Media, LLC is committed to protecting your privacy. Read our Privacy Policy to understand how we collect, use, and disclose your personal information.'),
  makeSeo('privacy-policy', 'Privacy Policy', '/privacy-policy',
    'Privacy Policy | Wide Wings Media',
    'Wide Wings Media, LLC is committed to protecting your privacy. Read our Privacy Policy to understand how we collect, use, and disclose your personal information.'),
  makeSeo('terms', 'Terms', '/terms',
    'Terms & Conditions | Wide Wings Media',
    'Read the Terms & Conditions for Wide Wings Media, LLC. Understand our usage policies, user rights, and legal agreements for our digital marketing services.'),
  makeSeo('terms-conditions', 'Terms & Conditions', '/terms-conditions',
    'Terms & Conditions | Wide Wings Media',
    'Read the Terms & Conditions for Wide Wings Media, LLC. Understand our usage policies, user rights, and legal agreements for our digital marketing services.'),
  makeSeo('web-app-development', 'Web & App Development', '/web-app-development',
    'Web & App Development | Wide Wings Media Digital Agency Dubai',
    'We design and develop high-performing websites and mobile applications that are fast, secure, and user-focused. Every build is optimized for user experience, scalability, and business growth.',
    'Service'),
  makeSeo('creative-branding', 'Creative & Branding', '/creative-branding',
    'Creative & Branding | Wide Wings Media Digital Agency Dubai',
    'We create brands that look sharp, speak clearly, and actually perform, from strategy to design and content.',
    'Service'),
  makeSeo('paid-advertising', 'Paid Advertising & Media Buying', '/paid-advertising',
    'Paid Advertising & Media Buying | Wide Wings Media Digital Agency Dubai',
    'We plan, execute, and optimize paid advertising campaigns that maximize reach, conversions, and ROI. Our data-driven media buying ensures your budget delivers measurable results across platforms.',
    'Service'),
  makeSeo('social-media-management', 'Social Media Management', '/social-media-management',
    'Social Media Management | Wide Wings Media Digital Agency Dubai',
    'We manage your social media presence with strategic content, consistent engagement, and platform-specific growth tactics. Our approach builds communities, increases visibility, and drives meaningful interactions.',
    'Service'),
  makeSeo('content-creation', 'Content Creation & Graphic Design', '/content-creation',
    'Content Creation & Graphic Design | Wide Wings Media Digital Agency Dubai',
    'We create compelling content and visuals that capture attention and communicate your brand story clearly. From graphics to copy, every asset is designed to inspire action and strengthen brand recall.',
    'Service'),
  makeSeo('email-sms-crm', 'Email, SMS & CRM Marketing', '/email-sms-crm',
    'Email, SMS & CRM Marketing | Wide Wings Media Digital Agency Dubai',
    'We create campaigns that people open, read, and act on. From welcome flows to retention sequences, every message has a purpose and a result behind it.',
    'Service'),
  makeSeo('seo-performance', 'SEO & Performance Management', '/seo-performance',
    'SEO & Performance Management | Wide Wings Media Digital Agency Dubai',
    'We optimize your digital presence to rank higher, attract quality traffic, and improve long-term performance. Our SEO strategies are data-led, ethical, and focused on sustainable growth.',
    'Service'),
  makeSeo('ooh-advertising', 'OOH Advertising', '/ooh-advertising',
    'OOH Advertising | Wide Wings Media Digital Agency Dubai',
    'We deliver impactful out-of-home advertising that amplifies brand visibility across key locations. From billboards to transit media, we help your message reach audiences beyond digital screens.',
    'Service'),
  makeSeo('analytics-performance', 'Analytics & Performance Marketing', '/analytics-performance',
    'Analytics & Performance Marketing | Wide Wings Media Digital Agency Dubai',
    "We're not just a media buying agency, we build performance systems that scale. From strategy to execution, every campaign is designed to convert, not just reach.",
    'Service'),
  makeSeo('pr-management', 'PR Management', '/pr-management',
    'PR Management | Wide Wings Media Digital Agency Dubai',
    'We position your brand where it matters. Through the right narratives, the right platforms, and the right timing. Every move is intentional, built to strengthen credibility and visibility.',
    'Service'),
];

const redirects: Redirect[] = [];

const mediaItems: MediaItem[] = [];

const enquiries: Enquiry[] = [
  { id: 'enq-001', name: 'Ahmed Al Rashid', email: 'ahmed@example.com', phone: '+971 50 123 4567', service: 'SEO & Performance Management', message: 'We need help ranking our e-commerce site in the UAE. Please get in touch.', status: 'new', receivedAt: '2026-06-20T09:15:00Z' },
  { id: 'enq-002', name: 'Sara Mohammed', email: 'sara@techbiz.ae', phone: '+971 55 987 6543', service: 'Social Media Management', message: 'Looking for a full social media management package for our startup. Budget around AED 5,000/month.', status: 'read', receivedAt: '2026-06-19T14:30:00Z' },
  { id: 'enq-003', name: 'James Wilson', email: 'james@globalco.com', phone: '+44 7700 900 123', service: 'Paid Advertising & Media Buying', message: 'We are expanding to the Middle East and need a PPC campaign across Google and Meta platforms.', status: 'new', receivedAt: '2026-06-18T11:00:00Z' },
  { id: 'enq-004', name: 'Fatima Al Zaabi', email: 'fatima@zaabibrand.com', phone: '+971 52 345 6789', service: 'Creative & Branding', message: 'We are launching a new fashion brand and need complete branding — logo, guidelines, and website.', status: 'new', receivedAt: '2026-06-17T16:45:00Z' },
  { id: 'enq-005', name: 'Raj Sharma', email: 'raj@indiadubai.com', phone: '+971 56 789 0123', service: 'Web & App Development', message: 'Need a B2B e-commerce platform built. Would like to discuss requirements.', status: 'read', receivedAt: '2026-06-15T08:20:00Z' },
];

export const store = {
  pages: {
    list: () => [...pages],
    get: (id: string) => pages.find(p => p.id === id),
    create: (p: Omit<Page, 'id' | 'createdAt' | 'updatedAt'>) => {
      const page: Page = { ...p, id: Date.now().toString(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
      pages.push(page);
      return page;
    },
    update: (id: string, data: Partial<Page>) => {
      const idx = pages.findIndex(p => p.id === id);
      if (idx === -1) return null;
      pages[idx] = { ...pages[idx], ...data, updatedAt: new Date().toISOString() };
      return pages[idx];
    },
    delete: (id: string) => { const idx = pages.findIndex(p => p.id === id); if (idx > -1) pages.splice(idx, 1); },
  },
  seo: {
    list: () => pages.map(p => seoData.find(s => s.pageId === p.id) ?? { pageId: p.id, pageTitle: p.title, slug: p.slug } as SeoData),
    get: (pageId: string) => seoData.find(s => s.pageId === pageId),
    upsert: (data: SeoData) => {
      const idx = seoData.findIndex(s => s.pageId === data.pageId);
      if (idx > -1) seoData[idx] = { ...data, updatedAt: new Date().toISOString() };
      else seoData.push({ ...data, updatedAt: new Date().toISOString() });
    },
  },
  redirects: {
    list: () => [...redirects],
    create: (r: Omit<Redirect, 'id' | 'createdAt'>) => {
      const redirect: Redirect = { ...r, id: Date.now().toString(), createdAt: new Date().toISOString() };
      redirects.push(redirect);
      return redirect;
    },
    delete: (id: string) => { const idx = redirects.findIndex(r => r.id === id); if (idx > -1) redirects.splice(idx, 1); },
  },
  enquiries: {
    list: () => [...enquiries].sort((a, b) => new Date(b.receivedAt).getTime() - new Date(a.receivedAt).getTime()),
    markRead: (id: string) => { const e = enquiries.find(e => e.id === id); if (e) e.status = 'read'; },
    add: (e: Omit<Enquiry, 'id' | 'receivedAt' | 'status'>) => {
      const enq: Enquiry = { ...e, id: `enq-${Date.now()}`, status: 'new', receivedAt: new Date().toISOString() };
      enquiries.unshift(enq);
      return enq;
    },
  },
  media: {
    list: () => [...mediaItems].sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()),
    get: (id: string) => mediaItems.find(m => m.id === id),
    add: (item: Omit<MediaItem, 'id' | 'uploadedAt'>) => {
      const m: MediaItem = { ...item, id: `media-${Date.now()}`, uploadedAt: new Date().toISOString() };
      mediaItems.unshift(m);
      return m;
    },
    update: (id: string, data: Partial<MediaItem>) => {
      const idx = mediaItems.findIndex(m => m.id === id);
      if (idx === -1) return null;
      mediaItems[idx] = { ...mediaItems[idx], ...data };
      return mediaItems[idx];
    },
    delete: (id: string) => { const idx = mediaItems.findIndex(m => m.id === id); if (idx > -1) mediaItems.splice(idx, 1); },
  },
};
