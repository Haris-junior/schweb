import { useEffect } from 'react';

export function useCounters(ref) {
  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    let ran = false;
    function animate() {
      section.querySelectorAll('.glance-num').forEach((el) => {
        const raw = el.getAttribute('data-val') || el.textContent.trim();
        el.setAttribute('data-val', raw);
        const num = parseInt(raw, 10);
        if (isNaN(num)) return;
        const suffix = raw.replace(/[0-9]/g, '');
        const duration = 2600;
        let start = null;
        function step(ts) {
          if (!start) start = ts;
          const progress = Math.min((ts - start) / duration, 1);
          el.textContent = Math.floor(progress * num) + suffix;
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = num + suffix;
        }
        requestAnimationFrame(step);
      });
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !ran) {
            ran = true;
            animate();
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(section);
    return () => obs.disconnect();
  }, [ref]);
}
