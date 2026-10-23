import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer>
      <div className="ft-in">
        <div className="ft-top">
          <div className="ft-brand">
            <div className="nav-brand" onClick={() => navigate('/')}>
              <div className="nav-logo"><img src="/pics/logo.jpg" alt="Logo" /></div>
              <div className="nav-school-name" style={{ color: '#fff' }}>
                Asomdwee Ntonton Som School<span>Excellence · Peace · Progress</span>
              </div>
            </div>
            <p>Rooted in faith, purpose and the pursuit of knowledge. Nurturing the next generation of leaders from Apam, Central Region, Ghana.</p>
          </div>
          <div className="ft-col">
            <h4>Navigate</h4>
            <a onClick={() => navigate('/')}>Home</a>
            <a onClick={() => navigate('/about')}>About Us</a>
            <a onClick={() => navigate('/about#anthem')}>School Anthem</a>
            <a onClick={() => navigate('/academics')}>Academics</a>
            <a onClick={() => navigate('/gallery')}>Gallery</a>
            <a onClick={() => navigate('/contact')}>Contact</a>
          </div>
          <div className="ft-col">
            <h4>Reach Us</h4>
            <a href="tel:+233243444864">+233 24 344 4864</a>
            <a href="tel:+233242556318">+233 24 255 6318</a>
            <a href="mailto:esselkhadis@gmail.com">esselkhadis@gmail.com</a>
            <a>Apam, Central Region, Ghana</a>
          </div>
        </div>
        <div className="ft-btm">
          <span>© 2026 Asomdwee Ntonton Som School. All rights reserved.</span>
          <span>Nyimdzepa Fir Kan</span>
        </div>
      </div>
    </footer>
  );
}
