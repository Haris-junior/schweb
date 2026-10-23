import { useEffect, useRef } from 'react';
import { useModal } from '../context/ModalContext';

export default function ImageModal() {
  const { isOpen, src, hasNav, closeModal, navigateModal } = useModal();
  const touchStartX = useRef(0);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') navigateModal(1);
      if (e.key === 'ArrowLeft') navigateModal(-1);
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [closeModal, navigateModal]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  function onTouchStart(e) {
    touchStartX.current = e.changedTouches[0].clientX;
  }
  function onTouchEnd(e) {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) < 50) return;
    navigateModal(diff > 0 ? 1 : -1);
  }

  return (
    <div
      className={`modal${isOpen ? ' active' : ''}`}
      id="imageModal"
      onClick={(e) => { if (e.target.id === 'imageModal') closeModal(); }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="modal-content">
        <img id="modalImage" src={src} alt="Full screen" />
        <button className="modal-close" onClick={closeModal}>&times;</button>
        {hasNav && (
          <>
            <button className="modal-prev" onClick={() => navigateModal(-1)}>&#8249;</button>
            <button className="modal-next" onClick={() => navigateModal(1)}>&#8250;</button>
          </>
        )}
      </div>
    </div>
  );
}
