// Prerender the SPA to static HTML after `vite build`.
// 1. `vite build` → dist/ (client bundle + index.html with <!--app-html-->)
// 2. `vite build --ssr src/entry-server.jsx --outDir dist-ssr` → server bundle
// 3. this script renders <App /> to a string and injects it into dist/index.html
import { readFile, writeFile, rm, readdir } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const indexPath = `${root}dist/index.html`;
const ssrDir = `${root}dist-ssr`;

const { render } = await import(pathToFileURL(`${ssrDir}/entry-server.js`).href);
const template = await readFile(indexPath, 'utf8');

if (!template.includes('<!--app-html-->')) {
  throw new Error('dist/index.html is missing the <!--app-html--> placeholder');
}

// Preload the fonts used above the fold so they arrive before first paint and
// the fallback → web font swap can't shift the hero (CLS).
const CRITICAL_FONTS = [/^syne-latin-700-/, /^sora-latin-400-/, /^sora-latin-500-/, /^sora-latin-600-/];
const assets = await readdir(`${root}dist/assets`);
const preloads = CRITICAL_FONTS.map((re) => assets.find((f) => re.test(f) && f.endsWith('.woff2')))
  .filter(Boolean)
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)
  .join('\n    ');

const html = template
  .replace('<!--app-html-->', render())
  .replace('</title>', `</title>\n    ${preloads}`);
await writeFile(indexPath, html);
await rm(ssrDir, { recursive: true, force: true });

for (const needle of ['CodeMind', 'CentraLogic']) {
  if (!html.includes(needle)) throw new Error(`Prerendered HTML is missing "${needle}"`);
}
console.log(`Prerendered dist/index.html (${(html.length / 1024).toFixed(1)} kB)`);
