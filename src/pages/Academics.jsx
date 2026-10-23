import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { useReveal } from '../hooks/useReveal';

export default function Academics() {
  const navigate = useNavigate();
  const rootRef = useRef(null);
  const go = (key) => navigate(key === 'home' ? '/' : '/' + key);

  useReveal(rootRef);

  return (
    <PageTransition>
      <div ref={rootRef}>

  <section className="ac-hero">
    <div className="ac-hero-in">
      <p className="sec-lbl center">What We Teach</p>
      <h1>Academics at<br/><em>Asomdwee Ntonton Som School</em></h1>
      <p>We follow the Ghana Education Service structure from Pre-school through to Junior High School — enriched by the Common Core Programme and guided by the spirit of Asomdwee Ntonton Som. Since our founding, every stage of learning here has been marked by nothing but excellence.</p>
    </div>
  </section>

  <section className="ac-body">
    <div className="ac-body-in">

      <div className="ac-excellence reveal">
        <div className="ac-excellence-in">
          <p className="sec-lbl center" style={{marginBottom:'10px'}}>Our Track Record</p>
          <h3>Excellence From the Very First Day</h3>
          <p>Since Asomdwee Ntonton Som School opened its doors in 2023, the results have spoken for themselves. From the youngest children in Pre-school to our growing Junior High School cohort, every stage of education at this school has been characterised by genuine academic achievement, strong character development and the quiet confidence of children who know they are being well taught. We are proud of what has been accomplished — and we are only just getting started.</p>
        </div>
      </div>

      <div className="ccp-banner glass reveal">
        <div className="ccp-icon"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg></div>
        <div className="ccp-text">
          <h4>The Common Core Programme (CCP)</h4>
          <p>Developed by the National Council for Curriculum and Assessment (NaCCA) under the Ministry of Education, the CCP is Ghana's modern, standards-based curriculum for KG through JHS. It focuses on building character, nurturing values and equipping learners with 21st-century skills — going beyond memorisation to foster creativity, critical thinking and real-world problem-solving. Asomdwee Ntonton Som School is fully aligned with this curriculum at all levels.</p>
        </div>
        <a className="ccp-link" href="https://nacca.gov.gh/curriculum/" target="_blank" rel="noopener">
          View Full Curriculum
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="14" height="14"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
        </a>
      </div>

      <div className="ac-stage reveal">
        <div className="stage-header">
          <div className="stage-num"><span>01</span></div>
          <div className="stage-title">
            <h2>Pre-School</h2>
            <span className="stage-sub">Kindergarten 1 &amp; 2 · Ages 4–6 · 2 Years</span>
          </div>
        </div>
        <div className="stage-body">
          <div className="stage-text">
            <p>The Pre-school years are where everything begins. At Asomdwee Ntonton Som School, we treat these two years — Kindergarten 1 and Kindergarten 2 — with the reverence they deserve, because we understand that what a child experiences in their earliest school years shapes how they feel about learning for the rest of their life.</p>
            <p>Our Pre-school follows the GES/NaCCA standards-based curriculum for Kindergarten, which is structured around six core developmental areas. Through play, song, storytelling, movement and guided discovery, our young learners are gently introduced to language, numbers and the world around them — all while developing the social and emotional foundations they will carry into every classroom that follows.</p>
            <p>The classrooms are warm and welcoming, our teachers are patient and encouraging, and every child is met exactly where they are. We believe that the best thing a school can do for a four-year-old is to make them love coming to school — and at Asomdwee Ntonton Som School, that is exactly what we do.</p>
            <a className="curric-link" href="https://nacca.gov.gh/kg-curriculum/" target="_blank" rel="noopener">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
              KG Curriculum (NaCCA)
            </a>
          </div>
          <div className="stage-right">
            <div className="classes-card glass">
              <h4>Classes Offered</h4>
              <div className="classes-list">
                <span className="class-tag">Kindergarten 1</span>
                <span className="class-tag">Kindergarten 2</span>
              </div>
            </div>
            <div className="subjects-card card">
              <h4>Learning Areas</h4>
              <div className="subj-grid">
                <span className="subj-item">Language &amp; Literacy</span>
                <span className="subj-item">Mathematics (Number Work)</span>
                <span className="subj-item">Environmental Studies</span>
                <span className="subj-item">Creative Arts </span>
                <span className="subj-item">Music &amp; Movement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="stage-divider"/>

      <div className="ac-stage reveal">
        <div className="stage-header">
          <div className="stage-num"><span>02</span></div>
          <div className="stage-title">
            <h2>Primary School</h2>
            <span className="stage-sub">Basic 1 – Basic 6 · Ages 6–12 · 6 Years</span>
          </div>
        </div>
        <div className="stage-body">
          <div className="stage-text">
            <p>Primary School is where curiosity takes flight. Across six years — from Basic 1 through to Basic 6 — our pupils move from learning to read to reading to learn; from counting on their fingers to solving problems with confidence. It is a journey of remarkable transformation, and we have the privilege of witnessing it every single day.</p>
            <p>Our Primary curriculum is built on the NaCCA Standards-Based Curriculum introduced in 2019, which divides the six years into Lower Primary (Basic 1–3) and Upper Primary (Basic 4–6). The emphasis throughout is on enquiry, creativity and making meaning — not rote repetition. Children are encouraged to ask questions, think critically and connect what they learn in the classroom to the world outside it.</p>
            <p>At Asomdwee Ntonton Som School, Primary education is also where the values of the school are most deeply felt. The gentle integration of the teachings of Asomdwee Ntonton Som — peace, purpose and togetherness — runs quietly through the fabric of daily school life, shaping young minds and young hearts in equal measure.</p>
            <a className="curric-link" href="https://nacca.gov.gh/lower-primary-curriculum/" target="_blank" rel="noopener">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
              Primary Curriculum (NaCCA)
            </a>
          </div>
          <div className="stage-right">
            <div className="classes-card glass">
              <h4>Classes Offered</h4>
              <div className="classes-list">
                <span className="class-tag">Basic 1</span>
                <span className="class-tag">Basic 2</span>
                <span className="class-tag">Basic 3</span>
                <span className="class-tag">Basic 4</span>
                <span className="class-tag">Basic 5</span>
                <span className="class-tag">Basic 6</span>
              </div>
            </div>
            <div className="subjects-card card">
              <h4>Subjects Taught</h4>
              <div className="subj-grid">
                <span className="subj-item">English Language</span>
                <span className="subj-item">Mathematics</span>
                <span className="subj-item">Science</span>
                <span className="subj-item">Our World, Our People (O.W.O.P)</span>
                <span className="subj-item">Ghanaian Language</span>
                <span className="subj-item">Religious &amp; Moral Ed.</span>
                <span className="subj-item">Creative Arts &amp; Design</span>
                <span className="subj-item">Computing / ICT</span>
                <span className="subj-item">Physical &amp; Health Ed.</span>
                <span className="subj-item">History</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="stage-divider"/>

      <div className="ac-stage reveal">
        <div className="stage-header">
          <div className="stage-num"><span>03</span></div>
          <div className="stage-title">
            <h2>Junior High School</h2>
            <span className="stage-sub">JHS 1 – JHS 3 (Basic 7 – Basic 9) · Ages 12–15 · 3 Years</span>
          </div>
        </div>
        <div className="stage-body">
          <div className="stage-text">
            <p>Junior High School is where students begin to discover who they are becoming. Across three years — JHS 1, JHS 2 and JHS 3 — our students grow rapidly in academic depth, personal maturity and a clearer sense of their own gifts and ambitions. It is our responsibility to match that growth with teaching that challenges, inspires and prepares.</p>
            <p>Our JHS programme runs on the Common Core Programme (CCP) Curriculum — Ghana's most recent and comprehensive curriculum reform, implemented progressively from the 2021/2022 academic year. The CCP is designed specifically for Basic 7 to Basic 9, with a focus on building character alongside academic knowledge. It equips learners with 21st-century competencies: critical thinking, communication, creativity, collaboration and digital literacy. There are no optional subjects — every learner studies the full range of core areas.</p>
            <p>JHS 3 culminates in the Basic Education Certificate Examination (BECE), which opens the door to Senior High School. At Asomdwee Ntonton Som School, we prepare our JHS students thoroughly — academically, spiritually and emotionally — so that they leave us ready not just for the exam, but for the life that comes after it.</p>
            <a className="curric-link" href="https://nacca.gov.gh/common-core-programme-ccp/" target="_blank" rel="noopener">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
              CCP Curriculum (NaCCA)
            </a>
          </div>
          <div className="stage-right">
            <div className="classes-card glass">
              <h4>Classes Offered</h4>
              <div className="classes-list">
                <span className="class-tag">JHS 1 (Basic 7)</span>
                <span className="class-tag">JHS 2 (Basic 8)</span>
                <span className="class-tag">JHS 3 (Basic 9)</span>
              </div>
            </div>
            <div className="subjects-card card">
              <h4>CCP Subjects</h4>
              <div className="subj-grid">
                <span className="subj-item">English Language</span>
                <span className="subj-item">Mathematics</span>
                <span className="subj-item">Integrated Science</span>
                <span className="subj-item">Social Studies</span>
                <span className="subj-item">Ghanaian Language</span>
                <span className="subj-item">Religious &amp; Moral Ed.</span>
                <span className="subj-item">Creative Arts &amp; Design</span>
                <span className="subj-item">Career Technology</span>
                <span className="subj-item">Computing / ICT</span>
                <span className="subj-item">Physical &amp; Health Ed.</span>
              </div>
            </div>
            <div className="glass-blue" style={{padding:'18px 20px',borderRadius:'14px'}}>
              <p style={{fontSize:'.8rem',fontWeight:'600',color:'var(--af-blue)',letterSpacing:'.1em',textTransform:'uppercase',marginBottom:'7px'}}>Exit Examination</p>
              <p style={{fontSize:'.85rem',color:'var(--text-secondary)',lineHeight:'1.65',fontWeight:'300'}}>JHS 3 students sit the <strong style={{color:'var(--text-primary)',fontWeight:'500'}}>Basic Education Certificate Examination (BECE)</strong>, conducted by the West African Examinations Council (WAEC), qualifying them for Senior High School entry.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>


      </div>
    </PageTransition>
  );
}
