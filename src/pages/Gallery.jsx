import { useEffect, useMemo, useRef, useState } from 'react';
import PageTransition from '../components/PageTransition';
import LazyImage from '../components/LazyImage';
import { useReveal } from '../hooks/useReveal';
import { useModal } from '../context/ModalContext';
import { galleryImages } from '../data/galleryImages';

const CATS = [
  { key: 'all', label: 'All Photos' },
  { key: 'students', label: 'Students' },
  { key: 'facilities', label: 'Facilities' },
  { key: 'staff', label: 'Staff' },
  { key: 'events', label: 'Events' },
  {key: 'class26', label: 'Class of 2026'},
  {key: 'class24', label: 'Class Of 2024'}
];

export default function Gallery() {
  const rootRef = useRef(null);
  const [activeCat, setActiveCat] = useState('all');
  const { openModal, registerList } = useModal();

  const list = useMemo(
    () => (activeCat === 'all' ? galleryImages : galleryImages.filter((img) => img.cat === activeCat)),
    [activeCat]
  );

  useEffect(() => { registerList(list); }, [list, registerList]);

  useReveal(rootRef, [activeCat]);

  return (
    <PageTransition>
      <div ref={rootRef}>

        <section className="gal-hero">
          <div className="gal-hero-in">
            <p className="ct-lbl">Moments &amp; Memories</p>
            <h1 className="gal-intro-title">Our Gallery</h1>
            <p className="gal-intro">Explore the vibrant life, achievements and cherished moments that define the Asomdwee Ntonton Som School community.</p>
          </div>
        </section>

        <section className="gal-body">
          <div className="gal-body-in">
            <p className="gal-intro-text">Every photograph in this gallery tells a story — of growth, joy, learning and community. From academic achievements to sporting triumphs, from spiritual gatherings to quiet moments of reflection, these images capture the essence of who we are. They showcase the dedication of our teachers, the brilliance of our students, and the warmth of a school family united in purpose. As you browse through these moments, you will see not just pictures, but the living proof of our commitment to nurturing young people who are knowledgeable, compassionate and grounded in faith. Each image is a testament to the belief that education, when rooted in love and guided by purpose, transforms lives.</p>

            <div className="gal-cats">
              {CATS.map((c) => (
                <button
                  key={c.key}
                  className={`gal-cat${activeCat === c.key ? ' active' : ''}`}
                  onClick={() => setActiveCat(c.key)}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="gal-masonry" id="galleryGrid">
              {list.map((img, i) => (
                <div className="gal-item" key={img.src} onClick={() => openModal(i)}>
                  <LazyImage src={`/${img.src}`} alt={`Gallery image ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
