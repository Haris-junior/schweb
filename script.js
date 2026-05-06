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
  {src:'pics/pic44.jpg',  cat:'students'},
  {src:'pics/pic27.jpg',  cat:'students'},
  {src:'pics/pic28.jpg',  cat:'students'},
  {src:'pics/pic29.jpg',  cat:'students'},
  {src:'pics/pic5.jpg',   cat:'staff'},
  {src:'pics/pic6.jpg',   cat:'students'},
  {src:'pics/pic7.jpg',   cat:'students'},
  {src:'pics/pic8.jpg',   cat:'students'},
  {src:'pics/logo.jpg',   cat:'facilities'},
  {src:'pics/pic10.jpg',  cat:'facilities'},
  {src:'pics/pic11.jpg',  cat:'facilities'},
  {src:'pics/pic12.jpg',  cat:'facilities'},
  {src:'pics/pic13.jpg',  cat:'facilities'},
  {src:'pics/pic14.jpg',  cat:'facilities'},
  {src:'pics/pic15.jpg',  cat:'students'},
  {src:'pics/pic16.jpg',  cat:'students'},
  {src:'pics/pic17.jpg',  cat:'students'},
  {src:'pics/pic18.jpg',  cat:'students'},
  {src:'pics/pic19.jpg',  cat:'events'},
  {src:'pics/pic20.jpg',  cat:'students'},
  {src:'pics/pic21.jpg',  cat:'events'},
  {src:'pics/pic22.jpg',  cat:'events'},
  {src:'pics/pic23.jpg',  cat:'events'},
  {src:'pics/pic24.jpg',  cat:'events'},
  {src:'pics/kk.jpg',     cat:'staff'},
  {src:'pics/kofi1.jpg',  cat:'staff'},
  {src:'pics/pic42.jpg',  cat:'students'},
  {src:'pics/kids1.jpg',  cat:'students'},
  {src:'pics/kids2.jpg',  cat:'students'},
  {src:'pics/comp.jpg',   cat:'facilities'},
  {src:'pics/pic30.jpg',  cat:'facilities'},
  {src:'pics/pic25.jpg',  cat:'students'},
  {src:'pics/pic26.jpg',  cat:'students'},
  {src:'pics/pic31.jpg',  cat:'events'},
  {src:'pics/pic34.jpg',  cat:'events'},
  {src:'pics/pic35.jpg',  cat:'events'},
  {src:'pics/pic36.jpg',  cat:'events'},
  {src:'pics/pic37.jpg',  cat:'students'},
  {src:'pics/pic38.jpg',  cat:'students'},
  {src:'pics/pic39.jpg',  cat:'students'},
  {src:'pics/pic40.jpg',  cat:'students'},
  {src:'pics/pic41.jpg',  cat:'students'},
  {src:'pics/pic43.jpg',  cat:'events'},
  {src:'pics/pic45.jpg',  cat:'events'},
  {src:'pics/pic46.jpg',  cat:'facilities'},
  {src:'pics/staff1.jpg', cat:'staff'},
  {src:'pics/staff2.jpg', cat:'staff'},
  {src:'pics/teach.jpg',  cat:'staff'},
  {src:'pics/teach1.jpg',  cat:'staff'},
  {src:'pics/teach3.jpg',  cat:'staff'},
  {src:'pics/opoku1.jpg',  cat:'staff'},
];

let currentList = [];
let currentModalIndex = -1;
function renderGallery(cat){
  const grid=document.getElementById('galleryGrid');
  if(!grid)return;
  const list=cat==='all'?galleryImages:galleryImages.filter(img=>img.cat===cat);
  currentList=list;
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

function openModal(index){
  currentModalIndex = index;
  const modal=document.getElementById('imageModal');
  const img=document.getElementById('modalImage');
  img.style.opacity='0';
  img.style.transform='scale(0.92)';
  img.src=currentList[index].src;
  modal.classList.add('active');
  document.body.style.overflow='hidden';
  img.onload=()=>{
    img.style.transition='opacity .3s ease, transform .3s ease';
    img.style.opacity='1';
    img.style.transform='scale(1)';
  };
}

function navigateModal(direction){
  const modal=document.getElementById('imageModal');
  if(!modal.classList.contains('active'))return;
  // Calculate the new index, wrapping around at the ends
  currentModalIndex=(currentModalIndex + direction + currentList.length) % currentList.length;
  openModal(currentModalIndex);
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
