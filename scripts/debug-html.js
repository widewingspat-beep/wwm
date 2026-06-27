const cheerio = require('cheerio');
const fs = require('fs');
const html = fs.readFileSync('C:/Users/mdwas/ww-seo.html', 'utf8');
const $ = cheerio.load(html);
$('#wm-ipp-base, #wm-ipp').remove();

// Count widgets
const types = {};
$('[class]').each((i, el) => {
  const cls = $(el).attr('class') || '';
  const m = cls.match(/elementor-widget-([\w-]+)/);
  if (m) types[m[1]] = (types[m[1]] || 0) + 1;
});
console.log('Widget types:', types);

// Also check if it's the new Next.js site
const isNext = html.includes('_next/static');
console.log('Is Next.js site?', isNext);

// Check h1
console.log('H1:', $('h1').first().text().trim().substring(0,100));
console.log('First heading widget:', $('.elementor-widget-heading').first().text().trim().substring(0,100));
