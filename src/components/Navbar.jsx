import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LINKS = [
  { key: 'home', label: 'Home', path: '/' },
  { key: 'about', label: 'About', path: '/about' },
  { key: 'academics', label: 'Academics', path: '/academics' },
  { key: 'gallery', label: 'Gallery', path: '/gallery' },
  { key: 'contact', label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 34); }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function go(path) {
    navigate(path);
    setMenuOpen(false);
  }

  const activeKey = LINKS.find((l) => l.path === location.pathname)?.key || 'home';

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-brand" onClick={() => go('/')}>
          <div className="nav-logo"><img src="/pics/logo.jpg" alt="School Logo" /></div>
          <div className="nav-school-name">Asomdwee Ntonton Som School<span>Excellence · Peace · Progress</span></div>
        </div>
        <div className="nav-right">
          <div className="nav-links">
            {LINKS.map((l) => (
              <span
                key={l.key}
                className={`nav-link${activeKey === l.key ? ' active' : ''}`}
                onClick={() => go(l.path)}
              >
                {l.label}
              </span>
            ))}
          </div>
          <div className={`nav-ham${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen((o) => !o)}>
            <span></span><span></span><span></span>
          </div>
        </div>
      </nav>
      <div className={`mob-menu${menuOpen ? ' open' : ''}`}>
        {LINKS.map((l) => (
          <span
            key={l.key}
            className={`mob-link${activeKey === l.key ? ' active' : ''}`}
            onClick={() => go(l.path)}
          >
            {l.label}
          </span>
        ))}
      </div>
    </>
  );
}
