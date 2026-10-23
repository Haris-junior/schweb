import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { useReveal } from '../hooks/useReveal';
import { useModal } from '../context/ModalContext';

export default function About() {
  const navigate = useNavigate();
  const location = useLocation();
  const rootRef = useRef(null);
  const anthemAudioRef = useRef(null);
  const anthemVideoRef = useRef(null);
  const go = (key) => navigate(key === 'home' ? '/' : '/' + key);
  const { openModal } = useModal();

  const alignAnthemVideo = () => {
    const audio = anthemAudioRef.current;
    const video = anthemVideoRef.current;
    if (!audio || !video || !Number.isFinite(audio.currentTime)) return;

    // Correct only meaningful drift, so ordinary playback is not interrupted.
    if (Math.abs(video.currentTime - audio.currentTime) > 0.15) {
      video.currentTime = audio.currentTime;
    }
  };

  const playAnthemVideo = () => {
    const video = anthemVideoRef.current;
    if (!video) return;
    alignAnthemVideo();
    video.playbackRate = anthemAudioRef.current?.playbackRate || 1;
    video.play().catch(() => {});
  };

  const pauseAnthemVideo = () => anthemVideoRef.current?.pause();

  const resetAnthemVideo = () => {
    const video = anthemVideoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  useReveal(rootRef);

  useEffect(() => {
    if (location.hash === '#anthem') {
      document.getElementById('anthem')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.hash]);

  return (
    <PageTransition>
      <div ref={rootRef}>

  <section className="ab-hero">
    <div className="ab-hero-in">
      <p className="motto-pre">Our School Motto</p>
      <h1 className="motto-main">Nyimdzepa Fir Kan</h1>
      <p className="motto-tr">"Good Knowledge Comes From The Most High God"</p>
      <div className="motto-orn"><span></span>◆<span></span></div>
      <p style={{fontSize:'.98rem',color:'var(--text-secondary)',lineHeight:'1.82',maxWidth:'560px',margin:'26px auto 0',fontWeight:'300',fontStyle:'italic'}}>These words are not merely etched on our crest — they are the living principle that guides every lesson taught, every life touched, and every dream nurtured within our walls.</p>
    </div>
  </section>

  <section className="ab-body">
    <div className="ab-body-in">

      <div className="ab-intro">
        <div className="ab-intro-txt reveal">
          <p className="sec-lbl">Our Story</p>
          <h2>Rooted in Purpose,<br/>Growing with Vision</h2>
          <p>In 2023, something remarkable took root in Apam. Asomdwee Ntonton Som School opened its doors — not simply as another school, but as a declaration: that every child in this community deserves an education that sees them wholly, honours who they are and prepares them courageously for the world ahead.</p>
          <p>The school was conceived and founded in the spirit and image of Asomdwee Ntonton Som — the Religion of Peaceful Exaltations. From its very first day, the school has been shaped by the faith's core conviction: that peace, praise and togetherness are not just virtues to preach, but principles to live and to teach. This is a school where the spiritual and the academic walk hand in hand.</p>
          <p>While firmly grounded in the structure and standards of the Ghana Education Service, Asomdwee Ntonton Som School weaves a thread of the religion's teachings into the fabric of daily learning. Children here do not only gain knowledge — they gain wisdom. They are not only taught to read the world; they are taught to understand it with grace, integrity and a sense of divine purpose.</p>
          <p>Since 2023, the growth has been both quiet and extraordinary. What began as a bold community vision has blossomed into something genuinely promising — a school that families believe in, children thrive in and teachers pour their hearts into. The journey has only just begun, and already, its promise shines clearly in the lives of every child who has come through.</p>
        </div>
        <div className="ab-aside reveal r2">
          <div className="aside-c card">
            <div className="aside-lbl">Established</div>
            <div className="aside-val">2023 · Apam, Central Region</div>
          </div>
          <div className="aside-c card">
            <div className="aside-lbl">Location</div>
            <div className="aside-val">M223 Rose Hips St, Apam<br/>Central Region, Ghana</div>
          </div>
          <div className="aside-c card">
            <div className="aside-lbl">Postal Address</div>
            <div className="aside-val">Asomdwee Ntonton Som School-Ghana<br/>P. O. Box 51, Gomoa Ankamu</div>
          </div>
          <div className="aside-c card">
            <div className="aside-lbl">Contact</div>
            <div className="aside-val">+233 24 344 4864<br/>esselkhadis@gmail.com</div>
          </div>
          <div className="aside-c card">
            <div className="aside-lbl">Our Motto</div>
            <div className="aside-val" style={{fontFamily:'\'Cormorant Garamond\',serif',fontStyle:'italic',fontSize:'1.25rem'}}>Nyimdzepa Fir Kan</div>
          </div>
        </div>
      </div>

      <section className="anthem-sec reveal" id="anthem" aria-labelledby="anthem-title">
        <div className="anthem-media">
          <figure className="anthem-photo">
            <img src="/pics/assemble.jpg" alt="Students gathered for school assembly" />
            <figcaption>Students gathered in assembly</figcaption>
          </figure>
          <div className="anthem-video-wrap">
            <video
              ref={anthemVideoRef}
              className="anthem-video"
              poster="/pics/assem.jpg"
              muted
              playsInline
              preload="metadata"
              aria-label="Students singing the school anthem"
            >
              <source src="/video/Anthem.mp4" type="video/mp4" />
            </video>
            <div className="anthem-video-label">School anthem video</div>
          </div>
          <div className="anthem-player card">
            <p className="anthem-player-label">Listen to the anthem</p>
            <audio
              ref={anthemAudioRef}
              controls
              preload="metadata"
              onPlay={playAnthemVideo}
              onPause={pauseAnthemVideo}
              onSeeking={alignAnthemVideo}
              onTimeUpdate={alignAnthemVideo}
              onRateChange={() => {
                if (anthemVideoRef.current) anthemVideoRef.current.playbackRate = anthemAudioRef.current?.playbackRate || 1;
              }}
              onEnded={resetAnthemVideo}
            >
              <source src="/audio/anthem.mp3" type="audio/mpeg" />
              Your browser does not support audio playback.
            </audio>
          </div>
        </div>
        <div className="anthem-content">
          <div className="anthem-copy">
            <p className="sec-lbl">Our School Anthem</p>
            <h2 id="anthem-title">Asomdwee Ntonton Som School Anthem</h2>
            <p>Sing with us in peace, purpose and the pursuit of knowledge.</p>
          </div>
          <details className="anthem-lyrics">
            <summary>Anthem lyrics</summary>
            <div className="anthem-lyrics-text">
              <p>
             Edzikanfo eee <br/>
            Edzikanfo eee <br />
            Edzikanfo a hom hyɛ ɔsom yi ase <br />
              yɛerfrɛfrɛ hom <br />
            Edzikanfo ee <br />
              nkyirmba refrɛ hom oooo ayɛ eeee 2× <br />
            Hom ayɛ bi egyaa nkyirmba Yɛda hom ase <br />
              yɛma hom damirifa 3× <br />
            Hom ayɛ bi egyaa nkyirbayɛda hom ase <br />
            Yɛma hom damirifa ooo <br />
            Yɛgyaa hom ekyir a ɔnnyɛ ye <br />
              yɛamfrɛ hom a ɔnnyɛ ye  <br />
              yɛannkaa hom a ɔnnyɛ ye ooo <br />
            Edzikanfo ee <br />
              nkyirmba refrɛ hom oo ayɛ eee <br />
            Edzikanfo ee 4× <br />
            Edzikanfo eee <br />
            Hom nsoɛree mbɛgye hom ayɛyi ooo <br />
            Edzikanfo ee 4× <br />
            Edzikanfo eee <br />
            Hom nsoɛree mbɛgye hom aseda oo <br />
            Ɛkɔm dzee hom <br />
            Ewia hyee hom, Nsuo hwee hom <br />
            Edzikanfo eeee <br />
            Nkyirmba refrɛ hom oooo ayɛ eeeee

              </p>
            </div>
          </details>
        </div>
      </section>

      <div className="founder-sec reveal">
        <p className="sec-lbl" style={{marginBottom:'14px'}}>Our Spiritual Foundation</p>
        <div className="founder-grid">
          <div className="founder-port"><img src="/pics/nsy.jpg" alt="Ɔkronkronyi Nyame Somafo Yawoh"/></div>
          <div className="f-bio">
            <h2>Ɔkronkronyi Nyame Somafo Yawoh</h2>
            <p className="f-title">Founder of Asomdwee Ntonton Som · Spiritual Leader</p>
            <p>Asomdwee Ntonton Som School draws its identity and founding spirit from the life and extraordinary works of Ɔkronkronyi Nyame Somafo Yawoh — founder and spiritual leader of Asomdwee Ntonton Som, widely described as the Third Religion of the Most High God, RABBI. Born on February 28, 1952 in Ekumfi Dunkwa in Ghana's Central Region, his calling into ministry was, as his followers insist, not of his own choosing — it was divinely ordained.</p>
            <p>What makes his story truly remarkable goes beyond preaching and teaching. Ɔkronkronyi Nyame Somafo Yawoh is widely known among his followers for healing the sick — not through any form of medicine or conventional treatment, but through divine power alone. People from all walks of life, carrying ailments that the world had given up on, have testified to receiving healing through his intercession. To those who have witnessed it, this is not legend — it is lived experience.</p>
            <p>He is also the man behind the construction of the Third Temple of God, built in Ekumfi Otuam in Ghana's Central Region — a sacred site that believers from across the country and beyond make pilgrimage to. According to his teachings, Ghana holds a divine place at the centre of the world's spiritual geography, and the Third Temple stands as a fulfilment of ancient prophecy. Ɔkronkronyi Nyame Somafo Yawoh has been received by heads of state, including former President John Agyekum Kufuor, in recognition of his remarkable contributions to Ghanaian faith, culture and national life.</p>
            <p>The school carries forward his deepest conviction: that true knowledge, when rooted in faith and shaped by good character, is the most powerful and lasting gift a society can offer its children. The name Asomdwee Ntonton — "Peaceful Exaltations" — reflects our commitment to nurturing young people who live in peace, reach upward in praise and go forward with purpose.</p>
            <div className="rel-pills">
              <div className="r-pill"><h4>Peace</h4><p>Asomdwee — the peace that anchors all learning and life</p></div>
              <div className="r-pill"><h4>Exaltation</h4><p>Ntonton — raising the name of The Most High across all nations</p></div>
              <div className="r-pill"><h4>Faith</h4><p>Som — devotion to God and service to community</p></div>
            </div>
          </div>
        </div>
      </div>

      <div className="boarding-sec reveal">
        <div className="boarding-hdr">
          <p className="sec-lbl" style={{marginBottom:'14px'}}>A Home Away From Home</p>
          <h2>Boarding Facilities for Our Students</h2>
        </div>
        <p className="boarding-intro">At Asomdwee Ntonton Som School, we understand that many of our students come from distant places across Ghana and beyond. To support their journey of learning and growth, we offer comfortable, secure and nurturing boarding facilities that serve as a true home away from home. Our dormitories are designed with the well-being and safety of every student in mind, providing a warm and supportive environment where young people can thrive both academically and personally.</p>
        
        <div className="boarding-grid">
          <div className="dorm-section">
            <h3>Boys' Dormitory</h3>
            <p>Our boys' dormitory is a spacious, well-maintained facility designed to foster brotherhood, responsibility and mutual respect. Each room is thoughtfully arranged to provide comfort and privacy while encouraging community and shared learning. The dormitory features modern amenities, secure storage, study areas and recreational spaces where students can relax, bond and develop lifelong friendships. Our dedicated residential staff ensure that every boy feels safe, supported and cared for throughout his stay.</p>
            <div className="dorm-gallery">
              <div className="dorm-img-placeholder" onClick={()=>openModal('/pics/boys_d.jpg')}>
                <div style={{textAlign:'center',color:'var(--text-muted)',fontSize:'.8rem'}}><img src="/pics/boys_d.jpg" alt="Boys Dormitory Exterior"/></div>
              </div>
              <div className="dorm-img-placeholder" onClick={()=>openModal('pics/boys d 2.jpg')}>
                <div style={{textAlign:'center',color:'var(--text-muted)',fontSize:'.8rem'}}><img src="/pics/boys d 2.jpg" alt="Boys Dormitory 1"></img>
                </div>
              </div>
              <div className="dorm-img-placeholder" onClick={()=>openModal('pics/boys d 1.jpg')}>
                <div style={{textAlign:'center',color:'var(--text-muted)',fontSize:'.8rem'}}><img src="/pics/boys d 1.jpg" alt="Boys Dormitory 2"></img></div>
              </div>
              <div className="dorm-img-placeholder" onClick={()=>openModal('pics/boys d 3.jpg')}>
                <div style={{textAlign:'center',color:'var(--text-muted)',fontSize:'.8rem'}}><img src="/pics/boys d 3.jpg" alt="Boys Dormitory 3"></img></div>
              </div>
            </div>
          </div>

          <div className="dorm-section">
            <h3>Girls' Dormitory</h3>
            <p>Our girls' dormitory is an equally spacious and welcoming sanctuary, designed to empower young women with confidence, independence and sisterhood. The facility offers comfortable living spaces, secure lockers, study zones and common areas for social interaction and personal development. With attention to detail and a commitment to creating a nurturing environment, our residential team ensures that every girl experiences safety, dignity and genuine care. The dormitory becomes a place where lifelong bonds are formed and personal growth is celebrated.</p>
            <div className="dorm-gallery">
              <div className="dorm-img-placeholder" onClick={()=>openModal('/pics/girls_d.jpg')}>
                <div style={{textAlign:'center',color:'var(--text-muted)',fontSize:'.8rem'}}><img src="/pics/girls_d.jpg" alt="Girls Dormitry Exterior"/></div>
              </div>
              <div className="dorm-img-placeholder" onClick={()=>openModal('pics/girls d 1.jpg')}>
                <div style={{textAlign:'center',color:'var(--text-muted)',fontSize:'.8rem'}}><img src="pics/girls d 1.jpg" alt="Girls Dormitory 1"></img></div>
              </div>
              <div className="dorm-img-placeholder" onClick={()=>openModal('pics/girls d 2.jpg')}>
                <div style={{textAlign:'center',color:'var(--text-muted)',fontSize:'.8rem'}}><img src="pics/girls d 2.jpg" alt="Girls Dormitory 2"></img></div>
              </div>
              <div className="dorm-img-placeholder" onClick={()=>openModal('pics/girls d 3.jpg')}>
                <div style={{textAlign:'center',color:'var(--text-muted)',fontSize:'.8rem'}}><img src="pics/girls d 3.jpg" alt="Girls Dormitory 3"></img></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

  <section className="heads-section">
    <div className="heads-inner">
      <div className="heads-intro reveal">
        <p className="sec-lbl center">The People Behind the School</p>
        <h2>Our Leadership Team</h2>
        <p>Every great school is shaped by the people who lead it. These are the dedicated individuals who give their best every single day — guiding our teachers, supporting our students and keeping the vision of Asomdwee Ntonton Som School alive and growing.</p>
      </div>
      <div className="heads-grid-top reveal">
        <div className="head-card glass proprietor">
          <div className="head-photo-wrap">
            <img src="/pics/nsy.jpg" alt="Ɔkronkronyi Nyame Somafo Yawoh" onError={(e)=>{e.target.style.display='none'; e.target.nextElementSibling.style.display='flex';}}/>
            <div className="head-photo-placeholder" style={{display:'none'}}>NY</div>
            <div className="head-role-badge">Proprietor</div>
          </div>
          <div className="head-name">Ɔkronkronyi Nyame Somafo Yawoh</div>
          <div className="head-title">School Proprietor</div>
          <div className="head-desc">The visionary founder and proprietor of Asomdwee Ntonton Som School. His spiritual leadership and unwavering commitment to education rooted in faith guide the entire school community. Through his wisdom and purpose, the school stands as a beacon of excellence and character development.</div>
        </div>
      </div>
      <div className="heads-grid">
        <div className="head-card glass reveal r1">
          <div className="head-photo-wrap">
            <img src="/pics/pic5.jpg" alt="Mr. Mark Asare" onError={(e)=>{e.target.style.display='none'; e.target.nextElementSibling.style.display='flex';}}/>
            <div className="head-photo-placeholder" style={{display:'none'}}>MA</div>
            <div className="head-role-badge">Headmaster</div>
          </div>
          <div className="head-name">Mr. Mark Asare</div>
          <div className="head-title">Headmaster</div>
          <div className="head-desc">The heart and driving force of the school. Mr. Asare provides overall leadership — setting the tone for academic standards, school culture and the daily life of every student and staff member.</div>
        </div>
        <div className="head-card glass reveal r2">
          <div className="head-photo-wrap">
            <img src="/pics/uncle_kojo.jpg" alt="Kojo" onError={(e)=>{e.target.style.display='none'; e.target.nextElementSibling.style.display='flex';}}/>
            <div className="head-photo-placeholder" style={{display:'none'}}>KO</div>
            <div className="head-role-badge">Asst. Head</div>
          </div>
          <div className="head-name">Mr. Ninson Abubakar Sadique</div>
          <div className="head-title">Assistant Head of Academics</div>
          <div className="head-desc">The guardian of academic excellence. Mr. Ninson oversees the delivery of the curriculum, supports teachers in their craft and ensures that every learner is given the tools to reach their full potential.</div>
        </div>
        <div className="head-card glass reveal r3">
          <div className="head-photo-wrap">
            <img src="/pics/kk2.jpg" alt="Mrs. Khadijah Essel" onError={(e)=>{e.target.style.display='none'; e.target.nextElementSibling.style.display='flex';}}/>
            <div className="head-photo-placeholder" style={{display:'none'}}>KE</div>
            <div className="head-role-badge">Administrator</div>
          </div>
          <div className="head-name">Mrs. Khadijah Essel</div>
          <div className="head-title">Administrator</div>
          <div className="head-desc">The backbone of school operations. Mrs. Essel manages the administrative functions that keep the school running smoothly — from records and resources to communication and coordination.</div>
        </div>
        <div className="head-card glass reveal r4">
          <div className="head-photo-wrap">
            <img src="/pics/aunt_yaa.jpg" alt="Ms. Gladys Botwey" onError={(e)=>{e.target.style.display='none'; e.target.nextElementSibling.style.display='flex';}}/>
            <div className="head-photo-placeholder" style={{display:'none'}}>GB</div>
            <div className="head-role-badge">Catering</div>
          </div>
          <div className="head-name">Ms. Gladys Botwey</div>
          <div className="head-title">Catering Officer</div>
          <div className="head-desc">The one who makes sure no child goes hungry or uncared for. Ms. Botwey oversees the school's catering, ensuring that every meal served is nutritious, well-prepared and delivered with warmth.</div>
        </div>
        <div className="head-card glass reveal r5">
          <div className="head-photo-wrap">
            <img src="/pics/uncle_fiifi.jpg" alt="Uncle Fiifi" onError={(e)=>{e.target.style.display='none'; e.target.nextElementSibling.style.display='flex';}}/>
            <div className="head-photo-placeholder" style={{display:'none'}}>UF</div>
            <div className="head-role-badge">Core Trainer</div>
          </div>
          <div className="head-name">Mr. Augustine Abdullah Ninson</div>
          <div className="head-title">Core Trainer</div>
          <div className="head-desc">The bridge between knowledge and practice. Mr. Augustine works directly with teachers and students to strengthen the delivery of learning — coaching classroom techniques, reinforcing curriculum standards and ensuring that every lesson goes beyond content to build genuine understanding and lasting skill.</div>
        </div>
      </div>
    </div>
  </section>

  <section className="ab-body">
    <div className="ab-body-in">

      <div className="ab-vals reveal">
        <p className="sec-lbl center" style={{marginBottom:'12px'}}>What We Stand For</p>
        <h2>Our Core Values</h2>
        <div className="vals-grid">
          <div className="val-c glass reveal r1"><div className="val-n">01</div><h3>Integrity</h3><p>Honesty, transparency and ethical conduct in every dimension of school life — from the classroom to the playing field.</p></div>
          <div className="val-c glass reveal r2"><div className="val-n">02</div><h3>Excellence</h3><p>Challenging every student to push beyond their limits and celebrate growth, effort and the pursuit of their personal best.</p></div>
          <div className="val-c glass reveal r3"><div className="val-n">03</div><h3>Compassion</h3><p>Nurturing empathy and kindness, teaching students to value each other's humanity and serve their communities with care.</p></div>
          <div className="val-c glass reveal r4"><div className="val-n">04</div><h3>Curiosity</h3><p>Igniting a love of learning beyond textbooks — inspiring students to ask bold questions and explore the world creatively.</p></div>
        </div>
      </div>

      <div className="mv-grid reveal">
        <div className="mv-c glass"><div className="mv-bg">M</div><p className="sec-lbl">Our</p><h3>Mission</h3><p>To provide a holistic, inclusive and high-quality education that empowers students with the knowledge, skills and values needed to thrive academically, socially and spiritually — contributing meaningfully to Ghana and the global community.</p></div>
        <div className="mv-c glass-blue"><div className="mv-bg">V</div><p className="sec-lbl">Our</p><h3>Vision</h3><p>To be a leading educational institution in Ghana renowned for developing ethical, intellectual and resilient individuals — graduates who carry the torch of learning and service wherever life takes them.</p></div>
      </div>

      <div className="tl-hdr reveal">
        <p className="sec-lbl center" style={{marginBottom:'12px'}}>Our Journey</p>
        <h2>Milestones That Shaped Us</h2>
      </div>
      <div className="timeline reveal">
        <div className="tl-item"><div className="tl-yr">2023 · Foundation</div><h3>The School Opens Its Doors</h3><p>In 2023, Asomdwee Ntonton Som School was established in Apam, Central Region — born from the faith and vision of Asomdwee Ntonton Som. From day one, it was built on the structure of the Ghana Education Service and enriched with the teachings of the religion: a school designed to raise children who are as knowledgeable as they are grounded.</p></div>
        <div className="tl-item"><div className="tl-yr">2023–2024 · Early Growth</div><h3>A Community Begins to Believe</h3><p>Word spread quickly. Families across Apam began to entrust their children to the school, drawn by its warm environment, dedicated teachers and a genuinely different approach to learning. Academic tracks were introduced alongside activities in sports, arts and community involvement — the full shape of a holistic school began to take form.</p></div>
        <div className="tl-item"><div className="tl-yr">2024–2025 · Growing Stronger</div><h3>A Promising Future Takes Shape</h3><p>With each passing term, the school has grown — not just in numbers, but in spirit and reputation. Children who have come through its doors carry something with them that goes beyond grades: a sense of purpose, a love of learning and the values instilled by a school that genuinely cares about who they are becoming.</p></div>
        <div className="tl-item"><div className="tl-yr">Today · Onward</div><h3>The Journey Continues</h3><p>Asomdwee Ntonton Som School is still young, but its promise is already evident. Each new school year brings new children, new stories and a renewed commitment to the founding vision — that education, grounded in faith and guided by purpose, can shape a brighter future for every child in this community and beyond.</p></div>
      </div>

    </div>
  </section>


      </div>
    </PageTransition>
  );
}
