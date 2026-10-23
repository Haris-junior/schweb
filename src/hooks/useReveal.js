import { useEffect } from 'react';

// Attaches an IntersectionObserver to every .reveal element inside `ref`
// and adds the `visible` class once each scrolls into view (matching the
// original site's scroll-reveal behaviour).
export function useReveal(ref, deps = []) {
  useEffect(() => {
    const root = ref?.current || document;
    const els = root.querySelectorAll('.reveal:not(.visible)');
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
