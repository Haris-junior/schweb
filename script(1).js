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
function initGallery(){
  const grid=document.getElementById('galleryGrid');
  if(!grid)return;
  const images=[
    'pics/pic44.jpg','pics/pic27.jpg','pics/pic28.jpg','pics/pic29.jpg','pics/pic5.jpg','pics/pic6.jpg','pics/pic7.jpg','pics/pic8.jpg','pics/logo.jpg','pics/pic10.jpg','pics/pic11.jpg','pics/pic12.jpg','pics/pic13.jpg','pics/pic14.jpg','pics/pic15.jpg','pics/pic16.jpg','pics/pic17.jpg','pics/pic18.jpg','pics/pic19.jpg','pics/pic20.jpg','pics/pic21.jpg','pics/pic22.jpg','pics/pic23.jpg','pics/pic24.jpg','pics/kk.jpg','pics/kofi1.jpg','pics/pic42.jpg','pics/kids1.jpg','pics/kids2.jpg','pics/comp.jpg','pics/pic30.jpg','pics/pic25.jpg','pics/pic26.jpg','pics/pic30.jpg','pics/pic31.jpg','pics/pic34.jpg','pics/pic35.jpg','pics/pic36.jpg','pics/pic37.jpg','pics/pic38.jpg','pics/pic39.jpg','pics/pic40.jpg','pics/pic41.jpg','pics/pic43.jpg','pics/pic45.jpg','pics/pic46.jpg','pics/staff1.jpg','pics/staff2.jpg','pics/fiifi.jpg','pics/teach.jpg','pics/teach1.jpg','pics/teach2.jpg','pics/teach3.jpg','pics/opoku1.jpg','pics/opoku2.jpg','pics/opoku3.jpg',
  ];
  grid.innerHTML=images.map((img,i)=>`<div class="gal-item" onclick="openModal('${img}')"><img src="${img}" alt="Gallery image ${i+1}"/></div>`).join('');
}

function openModal(src){
  const modal=document.getElementById('imageModal');
  const img=document.getElementById('modalImage');
  img.style.opacity='0';
  img.style.transform='scale(0.92)';
  img.src=src;
  modal.classList.add('active');
  document.body.style.overflow='hidden';
  img.onload=()=>{
    img.style.transition='opacity .3s ease, transform .3s ease';
    img.style.opacity='1';
    img.style.transform='scale(1)';
  };
}

function closeModal(){
  document.getElementById('imageModal').classList.remove('active');
  document.body.style.overflow='';
}

document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
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
