import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageTransition({ children }) {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    setActive(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => setActive(true));
      ref.current = raf2;
    });
    return () => cancelAnimationFrame(raf1);
  }, [location.pathname]);

  return (
    <div className={`page${active ? ' active' : ''}`} style={{ display: 'block' }}>
      {children}
    </div>
  );
}
