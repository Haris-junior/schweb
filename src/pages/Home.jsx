import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import Slideshow from '../components/Slideshow';
import { useReveal } from '../hooks/useReveal';
import { useCounters } from '../hooks/useCounters';

export default function Home() {
  const navigate = useNavigate();
  const rootRef = useRef(null);
  const glanceRef = useRef(null);
  const go = (key) => navigate(key === 'home' ? '/' : '/' + key);

  useReveal(rootRef);
  useCounters(glanceRef);

  return (
    <PageTransition>
      <div ref={rootRef}>

  <section className="hero">
    <Slideshow />
        <div className="hero-cnt">
      <p className="hero-tag">Welcome to</p>
      <h1 className="hero-ttl">Asomdwee Ntonton<br/><em>Som School</em></h1>
      <p className="hero-sub">Where knowledge meets character. Rooted in peace, unity and faith —<br/>shaping the leaders of tomorrow.</p>
      <button className="hero-btn" onClick={()=>go('about')}>
        Discover Our School
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="14" height="14"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
      </button>
    </div>
  </section>

  <section className="h-about">
    <div className="h-about-grid">
      <div className="h-about-txt reveal">
        <p className="sec-lbl">Who We Are</p>
        <h2>A School Rooted in<br/><em>Peace & Purpose</em></h2>
        <p>Asomdwee Ntonton Som School is built on the spiritual foundation of Asomdwee Ntonton Som — the Religion of Peace, Praise and Togetherness — a Ghanaian indigenous faith rooted in the worship of the Most High God, RABBI. Our school carries forward the philosophy of its name: weaving unity, discipline and spiritual consciousness into every dimension of learning.</p>
        <p>Located in Apam, Central Region, we are committed to providing a holistic, high-quality education that honours both our cultural roots and the aspirations of a modern world. Every child who walks through our doors is seen, valued and empowered.</p>
        <button className="txt-link" onClick={()=>go('about')}>Learn More
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="13" height="13"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </button>
      </div>
      <div className="found-card card reveal r2">
        <p className="sec-lbl">Our Foundation</p>
        <div className="found-row" onClick={()=>go('about')}>
          <div className="found-img"><img src="/pics/nsy.jpg" alt="Ɔkronkronyi Nyame Somafo Yawoh"/></div>
          <div className="found-info">
            <h3>Ɔkronkronyi Nyame Somafo Yawoh</h3>
            <span>Founder · Spiritual Leader</span>
          </div>
        </div>
        <p>The school draws its identity from the life and extraordinary works of Ɔkronkronyi Nyame Somafo Yawoh — founder of Asomdwee Ntonton Som, the Third Religion of God. Known as a healer, a teacher and a spiritual leader through whom divine power flows, his central conviction has always been that true knowledge, rooted in faith, illuminates the path to a better life. This school is the living expression of that conviction.</p>
        <div className="pic9-wrap"><a href="https://asomdweentontonsom.com" target="_blank"><img src="/pics/pic9.jpg" alt="Asomdwee Ntonton Som"/></a></div>
      </div>
    </div>
  </section>

  <section className="h-pillars">
    <div className="pillars-hdr reveal">
      <p className="sec-lbl center">Why Choose Us</p>
      <h2>Built on Strong Pillars</h2>
      <p>Our approach to education goes beyond academics — we develop whole human beings equipped with knowledge, character and purpose.</p>
    </div>
    <div className="pillars-grid">
      <div className="p-card card reveal r1">
        <div className="p-icon"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg></div>
        <h3>Academic Excellence</h3>
        <p>Our curriculum challenges, inspires and stretches every learner — building critical thinking, research skills and a genuine love of learning from the earliest years.</p>
      </div>
      <div className="p-card card reveal r2">
        <div className="p-icon"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg></div>
        <h3>Dedicated Educators</h3>
        <p>Our teachers are passionate mentors who bring warmth, expertise and dedication to every lesson — seeing each student as an individual with unique potential.</p>
      </div>
      <div className="p-card card reveal r3">
        <div className="p-icon"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg></div>
        <h3>Character & Values</h3>
        <p>Rooted in the teachings of peace, unity and togetherness, we nurture integrity, empathy and moral responsibility — building citizens of good character.</p>
      </div>
      <div className="p-card card reveal r1">
        <div className="p-icon"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0110.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
        <h3>Cultural Identity</h3>
        <p>We celebrate our Ghanaian heritage and the rich traditions of Asomdwee Ntonton Som while equipping students to engage confidently with the wider world.</p>
      </div>
      <div className="p-card card reveal r2">
        <div className="p-icon"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0114 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg></div>
        <h3>Holistic Growth</h3>
        <p>From the classroom to the community, we invest in the whole child — nurturing intellectual, social, emotional and spiritual growth at every stage.</p>
      </div>
      <div className="p-card card reveal r3">
        <div className="p-icon"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg></div>
        <h3>Community Spirit</h3>
        <p>We are not just a school — we are a family. Parents, teachers and students work together in a warm, inclusive community where everyone belongs.</p>
      </div>
    </div>
  </section>

  <section className="glance-sec">
  <div className="container">
    <p className="sec-lbl center">Asomdwee Ntonton Som School</p>
    <h2 className="glance-title">A School at a Glance</h2>
    <div className="glance-grid" ref={glanceRef}>
      <div className="glance-card glass reveal r1">
        <div className="glance-num">120+</div>
        <div className="glance-lbl">Enrolled Students</div>
      </div>
      <div className="glance-card glass reveal r2">
        <div className="glance-num">14</div>
        <div className="glance-lbl">Dedicated Educators</div>
      </div>
      <div className="glance-card glass reveal r3">
        <div className="glance-num">3</div>
        <div className="glance-lbl">Academic Programmes</div>
      </div>
      <div className="glance-card glass reveal r4">
        <div className="glance-num">3</div>
        <div className="glance-lbl">Years of Excellence</div>
      </div>
    </div>
    <div className="enrol-band glass reveal">
      <div className="enrol-txt">
        <p className="sec-lbl">Open Admissions</p>
        <h2>Give Your Child the Best Start</h2>
        <p>Pre-School, Primary and Junior High School places are open. Rooted in faith, structured by the Ghana Education Service and committed to every child's fullest potential — come see what makes us different.</p>
      </div>
      <button className="enrol-btn" onClick={()=>go('contact')}>Enquire About Admission</button>
    </div>
  </div>
</section>


      </div>
    </PageTransition>
  );
}
