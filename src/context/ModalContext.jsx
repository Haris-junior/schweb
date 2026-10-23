import { createContext, useContext, useState, useCallback, useRef } from 'react';

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [src, setSrc] = useState('');
  const [hasNav, setHasNav] = useState(false);
  const listRef = useRef([]);
  const indexRef = useRef(-1);
  const [, forceRender] = useState(0);

  // registerList lets a page (e.g. Gallery) tell the modal which array + index to navigate through
  const registerList = useCallback((list) => {
    listRef.current = list;
  }, []);

  const openModal = useCallback((indexOrSrc) => {
    if (typeof indexOrSrc === 'number') {
      indexRef.current = indexOrSrc;
      setSrc(`/${listRef.current[indexOrSrc]?.src || ''}`);
      setHasNav(true);
    } else {
      indexRef.current = -1;
      setSrc(indexOrSrc);
      setHasNav(false);
    }
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => setIsOpen(false), []);

  const navigateModal = useCallback((direction) => {
    if (indexRef.current === -1 || !listRef.current.length) return;
    const len = listRef.current.length;
    indexRef.current = (indexRef.current + direction + len) % len;
    setSrc(`/${listRef.current[indexRef.current]?.src || ''}`);
    forceRender((n) => n + 1);
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, src, hasNav, openModal, closeModal, navigateModal, registerList }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('useModal must be used inside ModalProvider');
  return ctx;
}
