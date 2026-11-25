// ── Analytics (Umami Cloud) ───────────────────────────────────────────────────
// Cookieless, privacy-friendly. The Umami dashboard is the "admin panel":
// visitors, referrers, UTM campaigns, countries, devices and the custom events
// below. Nothing personal is ever sent: no form contents, no emails, no IDs.
import { UMAMI_WEBSITE_ID, UMAMI_SCRIPT_URL, ANALYTICS_DOMAIN } from '../data/portfolioData';

const queue = [];
let loaded = false;

export const analyticsEnabled = Boolean(UMAMI_WEBSITE_ID);

// Inject the Umami script once (after first paint, from boot.jsx).
// data-domains makes Umami ignore localhost / previews, so dev never counts.
export function initAnalytics() {
  if (!analyticsEnabled || typeof document === 'undefined' || loaded) return;
  loaded = true;
  const s = document.createElement('script');
  s.defer = true;
  s.src = UMAMI_SCRIPT_URL;
  s.dataset.websiteId = UMAMI_WEBSITE_ID;
  s.dataset.domains = ANALYTICS_DOMAIN;
  s.onload = flush;
  document.head.appendChild(s);
}

function flush() {
  if (!window.umami) return;
  while (queue.length) {
    const [name, data] = queue.shift();
    window.umami.track(name, data);
  }
}

// track('project-open', { project: 'codemind' })
// Events fired before the script has loaded are queued, not lost.
export function track(name, data) {
  if (!analyticsEnabled || typeof window === 'undefined') return;
  if (window.umami) window.umami.track(name, data);
  else queue.push([name, data]);
}

// Section views (each section once per visit, when it crosses a line 40% down
// the viewport, which works for sections taller than the screen too)
// and scroll depth milestones (25/50/75/100%).
export function trackSectionsAndScroll() {
  if (!analyticsEnabled || typeof window === 'undefined') return () => {};

  const seen = new Set();
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        const id = e.target.id;
        if (e.isIntersecting && !seen.has(id)) {
          seen.add(id);
          track('section-view', { section: id });
        }
      }
    },
    { rootMargin: '-40% 0px -59% 0px', threshold: 0 },
  );
  document.querySelectorAll('main section[id]').forEach((s) => io.observe(s));

  const marks = [25, 50, 75, 100];
  const hit = new Set();
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (max <= 0) return;
    const pct = (window.scrollY / max) * 100;
    for (const m of marks) {
      if (pct >= m - 1 && !hit.has(m)) {
        hit.add(m);
        track('scroll-depth', { percent: m });
      }
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  return () => {
    io.disconnect();
    window.removeEventListener('scroll', onScroll);
  };
}

// Declarative click tracking: any element with data-track="event-name" is
// tracked on click; data-track-foo="bar" attributes become event properties.
//   <a data-track="resume-open" data-track-location="hero">
export function trackClicks() {
  if (!analyticsEnabled || typeof document === 'undefined') return () => {};
  const onClick = (e) => {
    const el = e.target.closest?.('[data-track]');
    if (!el) return;
    const data = {};
    for (const [k, v] of Object.entries(el.dataset)) {
      if (k.startsWith('track') && k !== 'track') {
        data[k.slice(5, 6).toLowerCase() + k.slice(6)] = v;
      }
    }
    track(el.dataset.track, Object.keys(data).length ? data : undefined);
  };
  document.addEventListener('click', onClick, { capture: true });
  return () => document.removeEventListener('click', onClick, { capture: true });
}
