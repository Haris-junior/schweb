import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { useReveal } from '../hooks/useReveal';

export default function Contact() {
  const navigate = useNavigate();
  const rootRef = useRef(null);
  const go = (key) => navigate(key === 'home' ? '/' : '/' + key);

  useReveal(rootRef);

  return (
    <PageTransition>
      <div ref={rootRef}>

  <section className="ct-hero">
    <div className="ct-hero-in">
      <p className="ct-lbl">Get In Touch</p>
      <h1>We'd Love to<br/>Hear From You</h1>
      <p>Whether you're a prospective family, current student or community member — our doors and inboxes are always open.</p>
    </div>
    <div className="ct-graphic">
      <div className="ct-ring"></div><div className="ct-ring"></div><div className="ct-ring"></div>
      <div className="ct-ring-ctr"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></div>
    </div>
  </section>

  <section className="ct-body">
    <div className="ct-body-in">
      <div className="offices-grid">
        <div className="off-card card reveal">
          <div className="off-type">Enrolment & Applications</div>
          <h2>Admissions Office</h2>
          <div className="ct-item"><div className="ct-ico"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></div><div><div className="ct-lbl2">Email</div><div className="ct-val"><a href="mailto:esselkhadis@gmail.com">esselkhadis@gmail.com</a></div></div></div>
          <div className="ct-item"><div className="ct-ico"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg></div><div><div className="ct-lbl2">Phone</div><div className="ct-val"><a href="tel:+233243444864">+233 24 344 4864</a></div></div></div>
          <div className="ct-item"><div className="ct-ico"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div><div><div className="ct-lbl2">Office Hours</div><div className="ct-val">Monday – Friday<br/>7:30 AM – 4:00 PM</div></div></div>
          <div className="ct-item"><div className="ct-ico"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg></div><div><div className="ct-lbl2">Address</div><div className="ct-val">M223 Rose Hips St, Apam<br/>Central Region, Ghana</div></div></div>
          <div className="ct-item"><div className="ct-ico"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/></svg></div><div><div className="ct-lbl2">Post Address</div><div className="ct-val">Asomdwee Ntonton Som School-Ghana<br/>P. O. Box 51, Gomoa Ankamu</div></div></div>
        </div>
        <div className="off-card card reveal r2">
          <div className="off-type">General Enquiries & Admin</div>
          <h2>Administration Office</h2>
          <div className="ct-item"><div className="ct-ico"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></div><div><div className="ct-lbl2">Email</div><div className="ct-val"><a href="mailto:esselkhadis@gmail.com">esselkhadis@gmail.com</a></div></div></div>
          <div className="ct-item"><div className="ct-ico"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg></div><div><div className="ct-lbl2">Phone</div><div className="ct-val"><a href="tel:+233243444864">+233 24 344 4864</a><br/><a href="tel:+233242556318">+233 24 255 6318</a></div></div></div>
          <div className="ct-item"><div className="ct-ico"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div><div><div className="ct-lbl2">Office Hours</div><div className="ct-val">Monday – Friday<br/>7:00 AM – 5:00 PM</div></div></div>
          <div className="ct-item"><div className="ct-ico"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg></div><div><div className="ct-lbl2">Address</div><div className="ct-val">M223 Rose Hips St, Apam<br/>Central Region, Ghana</div></div></div>
          <div className="ct-item"><div className="ct-ico"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/></svg></div><div><div className="ct-lbl2">Post Address</div><div className="ct-val">Asomdwee Ntonton Som School-Ghana<br/>P. O. Box 51, Gomoa Ankamu</div></div></div>
        </div>
      </div>
      <div className="map-ph">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1986.2909768234626!2d-0.7501154729711381!3d5.32770789838654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfde375e84581f95%3A0x11d6275bc2a42728!2sM223%20Rose%20Hips%20St!5e0!3m2!1sen!2sgh!4v1776862057250!5m2!1sen!2sgh" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </section>

  
      </div>
    </PageTransition>
  );
}
