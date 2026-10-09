/**
 * Enhancement: build-time Substack sync.
 * Fetches the public RSS feed and writes a tiny local JSON cache consumed by React.
 * Failure is intentionally non-fatal so offline/local builds keep the committed fallback.
 */
import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const FEED_URL = 'https://srujanpandya.substack.com/feed';
const MAX_POSTS = 5;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const output = path.resolve(__dirname, '../src/data/generated/substackPosts.json');

function decodeXml(value = '') {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function field(item, name) {
  const match = item.match(new RegExp(`<${name}>([\\s\\S]*?)<\\/${name}>`, 'i'));
  return decodeXml(match?.[1] ?? '');
}

function formatDate(rawDate) {
  const date = new Date(rawDate);
  if (Number.isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(date);
}

try {
  const response = await fetch(FEED_URL, {
    headers: { 'user-agent': 'SrujanPandya.github.io portfolio build' },
  });

  if (!response.ok) throw new Error(`RSS request returned ${response.status}`);

  const xml = await response.text();
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)]
    .slice(0, MAX_POSTS)
    .map((match) => {
      const body = match[1];
      const pubDate = field(body, 'pubDate');
      return {
        title: field(body, 'title'),
        url: field(body, 'link'),
        dateLabel: formatDate(pubDate),
        platform: 'Substack',
      };
    })
    .filter((post) => post.title && post.url);

  if (!items.length) throw new Error('RSS feed contained no readable posts');

  await writeFile(output, `${JSON.stringify(items, null, 2)}\n`, 'utf8');
  console.log(`Synced ${items.length} Substack post(s) to ${path.relative(process.cwd(), output)}.`);
} catch (error) {
  console.warn(`Substack sync skipped: ${error.message}`);
  console.warn('Using the committed fallback in src/data/generated/substackPosts.json.');
}
