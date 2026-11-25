// Prerender the SPA to static HTML after `vite build`.
// 1. `vite build` → dist/ (client bundle + index.html with <!--app-html-->)
// 2. `vite build --ssr src/entry-server.jsx --outDir dist-ssr` → server bundle
// 3. this script renders <App /> to a string and injects it into dist/index.html
import { readFile, writeFile, rm } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const indexPath = `${root}dist/index.html`;
const ssrDir = `${root}dist-ssr`;

const { render } = await import(pathToFileURL(`${ssrDir}/entry-server.js`).href);
const template = await readFile(indexPath, 'utf8');

if (!template.includes('<!--app-html-->')) {
  throw new Error('dist/index.html is missing the <!--app-html--> placeholder');
}

const html = template.replace('<!--app-html-->', render());
await writeFile(indexPath, html);
await rm(ssrDir, { recursive: true, force: true });

for (const needle of ['CodeMind', 'CentraLogic']) {
  if (!html.includes(needle)) throw new Error(`Prerendered HTML is missing "${needle}"`);
}
console.log(`Prerendered dist/index.html (${(html.length / 1024).toFixed(1)} kB)`);
