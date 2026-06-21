// In-memory store — replace with a real DB (Supabase, Neon, etc.) for production

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
    metaTitle: 'Wide Wings Media & Advertisement – Leading Digital Marketing Agency Dubai',
    metaDescription: "Dubai's leading digital marketing agency for the UAE and GCC market.",
    focusKeyword: 'digital marketing agency Dubai',
    secondaryKeywords: 'UAE digital marketing, GCC advertising agency',
    canonicalUrl: 'https://wwm-mu.vercel.app/',
    ogTitle: 'Wide Wings Media – Digital Marketing Dubai',
    ogDescription: "Dubai's leading digital marketing agency.",
    ogImage: '/og-home.jpg',
    twitterCard: 'summary_large_image',
    robots: 'index, follow',
    schemaType: 'Organization',
    featuredImage: '/hero-bg.jpg',
    featuredImageAlt: 'Wide Wings Media office Dubai',
    noindex: false, nofollow: false,
    updatedAt: '2026-06-21',
  },
];

const redirects: Redirect[] = [];

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
};
