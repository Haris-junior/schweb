// PAGE NAV
function showPage(n){
  document.querySelectorAll('.page').forEach(p=>{p.classList.remove('active');p.style.display='none';p.style.opacity='0';p.style.transform='translateY(16px)';});
  const pg=document.getElementById('page-'+n);if(!pg)return;
  pg.style.display='block';
  requestAnimationFrame(()=>requestAnimationFrame(()=>{pg.style.opacity='1';pg.style.transform='translateY(0)';pg.classList.add('active');}));
  window.scrollTo({top:0,behavior:'instant'});
  document.querySelectorAll('.nav-link,.mob-link').forEach(l=>l.classList.toggle('active',l.dataset.page===n));
  setTimeout(triggerReveal,200);
}

// SLIDESHOW
function buildSS(wrap,dotsWrap,ms){
  const all=Array.from(wrap.querySelectorAll('.slide'));
  const slides=all.filter(s=>getComputedStyle(s).display!=='none');
  if(!slides.length)return;
  let cur=0;
  slides.forEach((_,i)=>{
    const d=document.createElement('div');d.className='dot'+(i===0?' active':'');
    d.onclick=()=>go(i);dotsWrap.appendChild(d);
  });
  slides.forEach((s,i)=>s.classList.toggle('active',i===0));
  const getDots=()=>dotsWrap.querySelectorAll('.dot');
  function go(n){
    slides[cur].classList.remove('active');getDots()[cur]&&getDots()[cur].classList.remove('active');
    cur=(n+slides.length)%slides.length;
    slides[cur].classList.add('active');getDots()[cur]&&getDots()[cur].classList.add('active');
  }
  setInterval(()=>go(cur+1),ms);
}

// REVEAL
function triggerReveal(){
  const obs=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('visible');obs.unobserve(x.target);}}),{threshold:.10});
  document.querySelectorAll('.reveal:not(.visible)').forEach(el=>obs.observe(el));
}

// GALLERY
const galleryImages=[
  {src:'pics/pic44.jpg',  cat:'events'},
  {src:'pics/pic27.jpg',  cat:'events'},
  {src:'pics/pic28.jpg',  cat:'events'},
  {src:'pics/pic29.jpg',  cat:'events'},
  {src:'pics/pic5.jpg',   cat:'staff'},
  {src:'pics/pic6.jpg',   cat:'events'},
  {src:'pics/pic7.jpg',   cat:'staff'},
  {src:'pics/pic8.jpg',   cat:'students'},
  {src:'pics/pic10.jpg',  cat:'students'},
  {src:'pics/pic11.jpg',  cat:'students'},
  {src:'pics/pic12.jpg',  cat:'students'},
  {src:'pics/pic13.jpg',  cat:'students'},
  {src:'pics/pic14.jpg',  cat:'events'},
  {src:'pics/pic15.jpg',  cat:'students'},
  {src:'pics/pic16.jpg',  cat:'students'},
  {src:'pics/pic17.jpg',  cat:'students'},
  {src:'pics/pic18.jpg',  cat:'students'},
  {src:'pics/pic19.jpg',  cat:'students'},
  {src:'pics/pic20.jpg',  cat:'students'},
  {src:'pics/pic21.jpg',  cat:'students'},
  {src:'pics/pic22.jpg',  cat:'students'},
  {src:'pics/pic23.jpg',  cat:'students'},
  {src:'pics/pic24.jpg',  cat:'students'},
  {src:'pics/kk.jpg',     cat:'staff'},
  {src:'pics/kofi1.jpg',  cat:'staff'},
  {src:'pics/pic42.jpg',  cat:'events'},
  {src:'pics/kids1.jpg',  cat:'students'},
  {src:'pics/kids2.jpg',  cat:'students'},
  {src:'pics/comp.jpg',   cat:'facilities'},
  {src:'pics/pic30.jpg',  cat:'events'},
  {src:'pics/pic25.jpg',  cat:'students'},
  {src:'pics/pic26.jpg',  cat:'students'},
  {src:'pics/pic31.jpg',  cat:'events'},
  {src:'pics/pic34.jpg',  cat:'events'},
  {src:'pics/pic35.jpg',  cat:'events'},
  {src:'pics/pic36.jpg',  cat:'events'},
  {src:'pics/pic37.jpg',  cat:'events'},
  {src:'pics/pic38.jpg',  cat:'events'},
  {src:'pics/pic39.jpg',  cat:'events'},
  {src:'pics/pic40.jpg',  cat:'events'},
  {src:'pics/pic41.jpg',  cat:'events'},
  {src:'pics/pic43.jpg',  cat:'events'},
  {src:'pics/pic45.jpg',  cat:'events'},
  {src:'pics/pic46.jpg',  cat:'events'},
  {src:'pics/staff1.jpg', cat:'staff'},
  {src:'pics/staff2.jpg', cat:'staff'},
  {src:'pics/teach.jpg',  cat:'staff'},
  {src:'pics/teach1.jpg',  cat:'staff'},
  {src:'pics/teach3.jpg',  cat:'staff'},
  {src:'pics/opoku1.jpg',  cat:'staff'},
  {src:'pics/boys_d.jpg',   cat:'facilities'},
  {src:'pics/girls_d.jpg',   cat:'facilities'},
  {src:'pics/aunty-adjoa.jpg',  cat:'staff'},
  {src:'pics/mosey.jpg',  cat:'staff'},
];

let currentList = [];
let currentGalleryList = [];
let currentModalIndex = -1;
const boysDormImages = [
  {src:'pics/boys_d.jpg'},
  {src:'boys_dorm2.jpg'},
  {src:'boys_dorm3.jpg'},
  {src:'boys_dorm4.jpg'},
];

const girlsDormImages = [
  {src:'pics/girls_d.jpg'},
  {src:'girls_dorm2.jpg'},
  {src:'girls_dorm3.jpg'},
  {src:'girls_dorm4.jpg'},
];
function renderGallery(cat){
  const grid=document.getElementById('galleryGrid');
  if(!grid)return;
  const list=cat==='all'?galleryImages:galleryImages.filter(img=>img.cat===cat);
  currentList=list;
  currentGalleryList = list
  grid.innerHTML=list.map((img,i)=>`<div class="gal-item" onclick="openModal(${i})"><img src="${img.src}" alt="Gallery image ${i+1}"/></div>`).join('');
}

function filterGallery(cat,btn){
  document.querySelectorAll('.gal-cat').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderGallery(cat);
}

function initGallery(){
  renderGallery('all');
}

function openModal(indexOrSrc){
  const modal = document.getElementById('imageModal');
  const img = document.getElementById('modalImage');
  img.style.opacity = '0';
  img.style.transform = 'scale(0.92)';

  if(typeof indexOrSrc === 'number'){
  currentList = currentGalleryList;
  currentModalIndex = indexOrSrc;
  img.src = currentList[indexOrSrc].src;
  document.querySelector('.modal-prev').style.display = 'flex';
  document.querySelector('.modal-next').style.display = 'flex';
} else {
  currentModalIndex = -1;
  img.src = indexOrSrc;
  document.querySelector('.modal-prev').style.display = 'none';
  document.querySelector('.modal-next').style.display = 'none';
}

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  img.onload = ()=>{
    img.style.transition = 'opacity .3s ease, transform .3s ease';
    img.style.opacity = '1';
    img.style.transform = 'scale(1)';
  };
}

function navigateModal(direction){
  const modal = document.getElementById('imageModal');
  if(!modal.classList.contains('active')) return;
  if(currentModalIndex === -1) return;
  currentModalIndex = (currentModalIndex + direction + currentList.length) % currentList.length;
  openModal(currentModalIndex);
}

function animateCounters() {
  document.querySelectorAll('.glance-num').forEach(el => {
    const raw = el.textContent.trim();
    const num = parseInt(raw); // extract the number
    if (isNaN(num)) return;    // skip non-numeric ones like "GES"
    const suffix = raw.replace(/[0-9]/g, ''); // e.g. "+" sign
    let start = 0;
    const duration = 1800;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      el.textContent = Math.floor(progress * num) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

function closeModal(){
  document.getElementById('imageModal').classList.remove('active');
  document.body.style.overflow='';
}

document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();
  if (e.key==='ArrowRight')navigateModal(1);
  if (e.key==='ArrowLeft')navigateModal(-1);
});
let touchStartX = 0;
document.getElementById('imageModal').addEventListener('touchstart', e=>{
  touchStartX = e.changedTouches[0].clientX;
});
document.getElementById('imageModal').addEventListener('touchend', e=>{
  const diff = touchStartX - e.changedTouches[0].clientX;
  if(Math.abs(diff) < 50) return;
  if(diff > 0) navigateModal(1);
  else navigateModal(-1);
});
document.getElementById('imageModal').addEventListener('click',function(e){if(e.target===this)closeModal();});

// NAV SCROLL
window.addEventListener('scroll',()=>document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>34));

// HAMBURGER
function toggleMenu(){document.getElementById('ham').classList.toggle('open');document.getElementById('mobMenu').classList.toggle('open');}

// INIT
document.addEventListener('DOMContentLoaded',()=>{
  const h=document.getElementById('page-home');h.style.opacity='1';h.style.transform='translateY(0)';
  buildSS(document.getElementById('hero-ss'),document.getElementById('heroDots'),5000);
  initGallery();
  triggerReveal();
});
