// Self-hosted fonts (Latin subset, only the weights in use; font-display: swap).
import '@fontsource/sora/latin-400.css';
import '@fontsource/sora/latin-500.css';
import '@fontsource/sora/latin-600.css';
import '@fontsource/sora/latin-700.css';
import '@fontsource/syne/latin-600.css';
import '@fontsource/syne/latin-700.css';
import './index.css';

// The HTML is prerendered, so the page is readable before any JS runs.
// Load React + the app after the first paint so hydration never delays it.
const start = () => import('./boot.jsx');
if (document.getElementById('root').firstElementChild) {
  requestAnimationFrame(() => setTimeout(start, 0));
} else {
  start();
}
