// Reads original Elementor HTML, cleans it, and saves to KV via temp route
import { readFileSync } from 'fs';

const TOKEN = 'wwm-clear-2026';
const BASE = 'https://wwm-mu.vercel.app';

function cleanHtml(raw) {
  // Extract the inner content from elementor-widget-text-editor divs
  // and heading/list elements — strip all Elementor wrapper divs
  const bodyMatch = raw.match(/<body>([\s\S]*)<\/body>/);
  const body = bodyMatch ? bodyMatch[1] : raw;

  // Remove elementor wrapper divs — keep only semantic content
  let html = body
    .replace(/<\/?div[^>]*>/g, '')
    .replace(/<\/?section[^>]*>/g, '')
    .replace(/<\/?h1[^>]*>.*?<\/h1>/gs, '') // remove h1 (shown in hero)
    .replace(/<img[^>]*>/g, '')              // remove images (shown in hero)
    .replace(/class="lisb"/g, '')            // remove Elementor list class
    .replace(/ class="[^"]*"/g, '')          // remove remaining classes
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>');

  // Convert <br/><br/> paragraph separators to </p><p>
  // First wrap bare text blocks (not inside headings/lists) in <p> tags
  // Split on double <br> patterns
  html = html.replace(/<br\s*\/?>\s*<br\s*\/?>/g, '</p><p>');

  // Remove orphan single <br/> after headings
  html = html.replace(/(<\/h[2-4]>)\s*<br\s*\/?>/g, '$1');

  // Remove <br/> after </ul>
  html = html.replace(/(<\/ul>)\s*<br\s*\/?>/g, '$1');

  // Wrap raw text at the start (before first tag or after </p>) into <p>
  // Add opening <p> after headings where text follows directly
  html = html.replace(/(<\/h[2-4]>)\s*([A-Z])/g, '$1<p>$2');

  // Close unclosed <p> before headings and lists
  html = html.replace(/(<p>[^<]*(?:<(?!\/p>)[^<]*)*)\s*(<h[2-4]|<ul)/g, '$1</p>$2');

  // Wrap the very first text content in <p> if not already
  html = html.replace(/^(\s*)([A-Z])/m, '$1<p>$2');

  // Clean up empty <p></p> and <p> </p>
  html = html.replace(/<p>\s*<\/p>/g, '');

  // Remove <strong> inside headings (CSS handles bold weight)
  html = html.replace(/(<h[2-4][^>]*>)\s*<strong>([\s\S]*?)<\/strong>\s*(<\/h[2-4]>)/g, '$1$2$3');
  html = html.replace(/(<h[2-4][^>]*>)\s*<em>\s*<strong>([\s\S]*?)<\/strong>\s*<\/em>\s*(<\/h[2-4]>)/g, '$1$2$3');
  html = html.replace(/(<h[2-4][^>]*>)\s*<strong>\s*<em>([\s\S]*?)<\/em>\s*<\/strong>\s*(<\/h[2-4]>)/g, '$1$2$3');
  html = html.replace(/(<h[2-4][^>]*>)\s*<em>([\s\S]*?)<\/em>\s*(<\/h[2-4]>)/g, '$1$2$3');

  // Convert wide-wings.ae absolute links to relative
  html = html.replace(/https?:\/\/wide-wings\.ae\//g, '/');

  // Remove external non-wide-wings links (keep text)
  html = html.replace(/<a href="https?:\/\/(?!wide-wings)[^"]*"[^>]*>([\s\S]*?)<\/a>/g, '$1');

  // Tidy whitespace
  html = html.replace(/\n{3,}/g, '\n\n').trim();

  return html;
}

async function run() {
  const raw = readFileSync(new URL('./youtube-studio-for-more-views-page.html', import.meta.url), 'utf8');
  const clean = cleanHtml(raw);

  console.log('--- CLEAN HTML PREVIEW (first 500 chars) ---');
  console.log(clean.slice(0, 500));
  console.log('...\n');

  const res = await fetch(`${BASE}/api/admin/clear-kv?token=${TOKEN}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ slug: 'youtube-studio-for-more-views', html: clean }),
  });

  const text = await res.text();
  console.log('Status:', res.status);
  console.log('Result:', text.slice(0, 300));
}

run().catch(console.error);
