import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { MotionGlobalConfig } from 'framer-motion';
import App from './App.jsx';

// Respect prefers-reduced-motion: make every Framer Motion animation instant.
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  MotionGlobalConfig.skipAnimations = true;
}

const root = document.getElementById('root');
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Production HTML is prerendered (scripts/prerender.js) → hydrate it.
// In dev the root only holds a placeholder comment → render from scratch.
if (root.firstElementChild) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
