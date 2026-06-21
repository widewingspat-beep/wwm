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
  { id: 'home', title: 'Home', slug: '/', content: '', status: 'published', createdAt: '2025-01-01', updatedAt: '2026-06-01' },
  { id: 'about', title: 'About Us', slug: '/about-us', content: '', status: 'published', createdAt: '2025-01-01', updatedAt: '2026-06-10' },
  { id: 'services', title: 'Services', slug: '/services', content: '', status: 'published', createdAt: '2025-01-01', updatedAt: '2026-06-21' },
  { id: 'contact', title: 'Contact', slug: '/contact', content: '', status: 'published', createdAt: '2025-01-01', updatedAt: '2026-06-05' },
];

const seoData: SeoData[] = [
  {
    pageId: 'home', pageTitle: 'Home', slug: '/',
    metaTitle: 'Wide Wings Media: Leading Digital Marketing Agency in Dubai',
    metaDescription: "Wide Wings Media is Dubai's leading full-service digital marketing agency. We specialize in SEO, paid advertising, social media management, web development, and branding across the UAE and GCC market.",
    focusKeyword: 'digital marketing agency Dubai',
    secondaryKeywords: 'SEO Dubai, social media management UAE, paid advertising Dubai, web development UAE, branding agency Dubai, performance marketing GCC',
    canonicalUrl: 'https://wwm-mu.vercel.app/',
    ogTitle: 'Wide Wings Media: Leading Digital Marketing Agency in Dubai',
    ogDescription: 'Full-service digital marketing agency in Dubai. SEO, paid ads, social media, web development and branding for UAE & GCC businesses.',
    ogImage: '/og-home.jpg',
    twitterCard: 'summary_large_image',
    robots: 'index, follow',
    schemaType: 'Organization',
    featuredImage: '/shutterstock_1984521299.jpg',
    featuredImageAlt: 'Wide Wings Media – Leading Digital Marketing Agency in Dubai',
    noindex: false, nofollow: false,
    updatedAt: '2026-06-21',
  },
  {
    pageId: 'services', pageTitle: 'Services', slug: '/services',
    metaTitle: 'Boost ROI with Data-Driven Digital Marketing Services in Dubai',
    metaDescription: 'Wide Wings Media offers full-service digital marketing in Dubai — SEO, paid advertising, social media management, content creation, web development, OOH advertising, and PR. Data-driven strategies that deliver measurable ROI across UAE and GCC.',
    focusKeyword: 'digital marketing services Dubai',
    secondaryKeywords: 'data-driven digital marketing UAE, SEO services Dubai, paid advertising Dubai, social media management UAE, content creation Dubai, OOH advertising Dubai, performance marketing GCC, PR management Dubai',
    canonicalUrl: 'https://wwm-mu.vercel.app/services',
    ogTitle: 'Boost ROI with Data-Driven Digital Marketing Services in Dubai',
    ogDescription: 'Full-service digital marketing agency in Dubai. SEO, paid ads, social media, web development, branding, OOH, analytics and PR — all under one roof.',
    ogImage: '/og-services.jpg',
    twitterCard: 'summary_large_image',
    robots: 'index, follow',
    schemaType: 'Service',
    featuredImage: '/shutterstock_2421890557.jpg',
    featuredImageAlt: 'Wide Wings Media Digital Marketing Services Dubai',
    noindex: false, nofollow: false,
    updatedAt: '2026-06-21',
  },
  {
    pageId: 'about', pageTitle: 'About Us', slug: '/about-us',
    metaTitle: 'About Wide Wings Media – Full-Service Digital Marketing Agency Dubai',
    metaDescription: 'Wide Wings Media is a fully in-house digital marketing company in Dubai with 50+ specialists. Google & Meta verified partner operating across 15+ industries in UAE and GCC.',
    focusKeyword: 'digital marketing agency Dubai about',
    secondaryKeywords: 'Wide Wings Media Dubai, in-house digital agency UAE, Google partner Dubai, Meta partner UAE',
    canonicalUrl: 'https://wwm-mu.vercel.app/about-us',
    ogTitle: 'About Wide Wings Media – Dubai\'s Leading Digital Marketing Agency',
    ogDescription: 'Meet the team behind Dubai\'s top-ranked digital marketing agency. 50+ specialists, Google & Meta verified, 15+ industries.',
    ogImage: '/og-about.jpg',
    twitterCard: 'summary_large_image',
    robots: 'index, follow',
    schemaType: 'Organization',
    featuredImage: '/shutterstock_2284331463.jpg',
    featuredImageAlt: 'Wide Wings Media team Dubai',
    noindex: false, nofollow: false,
    updatedAt: '2026-06-21',
  },
  {
    pageId: 'contact', pageTitle: 'Contact', slug: '/contact',
    metaTitle: 'Contact Wide Wings Media – Digital Marketing Agency Dubai',
    metaDescription: 'Get in touch with Wide Wings Media, Dubai\'s leading digital marketing agency. Office: Al Quoz Industrial Area 3, Dubai, UAE. Phone: +971 4 335 2645. Free consultation available.',
    focusKeyword: 'contact digital marketing agency Dubai',
    secondaryKeywords: 'Wide Wings Media contact, digital marketing consultation Dubai, marketing agency Al Quoz Dubai',
    canonicalUrl: 'https://wwm-mu.vercel.app/contact',
    ogTitle: 'Contact Wide Wings Media – Free Digital Marketing Consultation',
    ogDescription: 'Speak to Dubai\'s leading digital marketing team. Free consultation for SEO, paid ads, social media & web development.',
    ogImage: '/og-contact.jpg',
    twitterCard: 'summary_large_image',
    robots: 'index, follow',
    schemaType: 'LocalBusiness',
    featuredImage: '/shutterstock_1614191626.jpg',
    featuredImageAlt: 'Wide Wings Media office Al Quoz Dubai',
    noindex: false, nofollow: false,
    updatedAt: '2026-06-21',
  },
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
