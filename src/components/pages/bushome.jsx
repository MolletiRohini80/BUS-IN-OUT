import React, { useState } from 'react'; // Import useState for handling menu open state
import styles1 from '../css/bushome.module.css';

function Bushome() {
  const [menuOpen, setMenuOpen] = useState(false); // State for menu open/close

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu open state
  };

  return (
    <div className={styles1.app}>
      <div className={styles1.app1}>
        <header className={styles1.heade}>
          <div className={styles1.logosectio}>
            <img src="/public/AUlogo.png" alt="Logo" className={styles1.log} />
            <span className={styles1.bustex}></span>
          </div>

          <nav className={`${styles1.navsectio} ${menuOpen ? styles1.ope : ''}`}>
            <a href="/home" className={styles1.navlin}>Home</a>
            <a href="/busdash" className={styles1.navlin}>Dashboard</a>
            <a href="/graph" className={styles1.navlin}>Graph</a>
            {/* <a href="/contact" className={styles1.navlin}>Contact Us</a> */}
            <a href="/admin" className={styles1.navlin}>Login</a>
          </nav>

          <div className={styles1.menuico} onClick={toggleMenu}>
            <div className={styles1.ba}></div>
            <div className={styles1.ba}></div>
            <div className={styles1.ba}></div>
          </div>
        </header>
      </div>
      <div className={styles1.app2}>
        <div className={styles1.des1}>
          <span>
            <h2>Bus Schedule</h2>
            <p>Track your bus timings easily</p>
          </span>
        </div>
        <div className={styles1.des2}>
          <span>
            <h2>Analytics</h2>
            <p>Visualize bus statistics</p>
          </span>
        </div>
        <div className={styles1.des3}>
          <span>
            <h2>Contact Us</h2>
            <p>Get help and support anytime</p>
          </span>
        </div>
        <div className={styles1.outer}>
          <div className={styles1['outer-part']}></div>
          <div className={styles1['outer-part']}>
            <div className={styles1['mini-circle']}>
              <img src="/public/support.png" alt="Support Icon" style={{ transform: 'rotate(3deg)' }} />
            </div>
          </div>
          <div className={styles1['outer-part']}>
            <div className={styles1['mini-circle']}>
              <img src="/public/graph.png" alt="Graph Icon" style={{ transform: 'rotate(270deg)' }} />
            </div>
          </div>
          <div className={styles1['outer-part']}>
            <div className={styles1['mini-circle']}>
              <img src="/public/busappli.png" alt="Bus Application Icon" style={{ transform: 'rotate(195deg)' }} />
            </div>
          </div>
          <div className={styles1['outer-part']}></div>
          <div className={styles1.inn}><p>FEATURES</p></div>
        </div>
      </div>
    </div>
  );
}

export default Bushome;



