import { useState } from 'react';

// Shows a soft animated placeholder in place of the image until it finishes
// loading, then cross-fades to the real photo. Works with any <img> src —
// no separate low-res asset needed.
export default function LazyImage({ src, alt, className = '' }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`lazy-img-wrap${loaded ? ' is-loaded' : ''}`}>
      <div className="lazy-img-placeholder" aria-hidden="true" />
      <img
        className={className}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
