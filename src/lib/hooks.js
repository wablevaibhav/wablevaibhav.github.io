import { useSyncExternalStore } from 'react';

const REDUCED_QUERY = '(prefers-reduced-motion: reduce)';

function subscribeReducedMotion(callback) {
  const mql = window.matchMedia(REDUCED_QUERY);
  mql.addEventListener('change', callback);
  return () => mql.removeEventListener('change', callback);
}

// true when the visitor asked the OS to reduce motion. Server snapshot is
// true so the prerendered HTML is the calm, static version.
export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_QUERY).matches,
    () => true,
  );
}
