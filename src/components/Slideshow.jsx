import { useEffect, useState } from 'react';
import { heroSlidesDesktop, heroSlidesMobile } from '../data/galleryImages';

export default function Slideshow({ intervalMs = 7000 }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [current, setCurrent] = useState(0);
  const slides = isMobile ? heroSlidesMobile : heroSlidesDesktop;

  useEffect(() => {
    function onResize() { setIsMobile(window.innerWidth <= 768); }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    setCurrent(0);
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [slides.length, intervalMs]);

  return (
    <>
      <div className="ss-wrap" id="hero-ss">
        {slides.map((src, i) => (
          <div
            key={src}
            className={`slide${i === current ? ' active' : ''}`}
            style={{ backgroundImage: `url('/${src}')` }}
          />
        ))}
      </div>
      <div className="ss-dots" id="heroDots">
        {slides.map((src, i) => (
          <div
            key={src}
            className={`dot${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </>
  );
}
