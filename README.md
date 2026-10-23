# Asomdwee Ntonton Som School — React Rebuild

## Getting it running
1. `npm install`
2. Copy your existing `pics/` folder into `public/pics/` (same filenames the site already used — logo.jpg, pic5.jpg, nsy.jpg, etc.)
3. `npm run dev` to preview locally, `npm run build` for a production build (outputs to `dist/`)

## What changed vs. the old static site
- Real React app (Vite + React Router) instead of one big HTML file with `showPage()` swapping — same instant page-switch feel, same fade/slide-up transition, just componentized.
- `src/pages/` — one component per page (Home, About, Academics, Gallery, Contact)
- `src/components/` — Navbar, Footer, Slideshow (hero), ImageModal (gallery lightbox), PageTransition (the fade/slide wrapper)
- `src/data/galleryImages.js` — gallery + hero photo list, now just an array you edit instead of hunting through JS
- `src/context/ModalContext.jsx` — the gallery lightbox works from any page via `useModal()`
- `src/index.css` — your original stylesheet, unchanged (same navy/steel-blue palette, Cormorant Garamond + Outfit type)

## Still open
- The `pics/` folder itself (not uploaded to this chat) — drop it into `public/pics/`
- Boys'/Girls' dorm gallery still references `boys_dorm2.jpg` etc. that don't exist yet (same as the original site)
- Ready for a Canva pass on photo consistency + a hero/OG banner, then a Replit deploy
