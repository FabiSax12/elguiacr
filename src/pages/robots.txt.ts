import type { APIRoute } from 'astro';
import { SITE_URL } from '../i18n/config';

// Search engines and AI answer engines are welcome: being cited by assistants brings travelers too.
// Named groups make the intent explicit; a crawler with its own group ignores the `*` group.
const welcomedCrawlers = [
  'Googlebot',
  'Googlebot-Image',
  'Google-Extended',
  'Bingbot',
  'Applebot',
  'Applebot-Extended',
  'DuckDuckBot',
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'Perplexity-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
];

export const GET: APIRoute = () => {
  const lines = [
    'User-agent: *',
    'Allow: /',
    '',
    ...welcomedCrawlers.map((agent) => `User-agent: ${agent}`),
    'Allow: /',
    '',
    `Sitemap: ${new URL('/sitemap-index.xml', SITE_URL).href}`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
