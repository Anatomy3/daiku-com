import React, { useRef } from 'react';
import styles from '../styles/HomePage.module.css';
import Sidebar from './Sidebar';

const HomePage = () => {
  const scrollToRef = useRef(null); // Inisialisasi ref

  const scrollToSection = () => {
    scrollToRef.current.scrollIntoView({ behavior: 'smooth' }); // Fungsi untuk scroll ke ref
  };

  return (
    <div className={styles.homepage}>
      <Sidebar scrollToSection={scrollToSection} /> {/* Mengoper fungsi scroll */}
      <aside className={styles.sidebar}>
        <img src="/daiku/logo.png" alt="Logo" className={styles.logo} />
        <div className={styles.mainContent}>
          <h1>
            <span className={styles.highlight}>Inter</span>ior design
          </h1>
          <p>Kami akan menciptakan desain interior yang paling sesuai untuk rumah, bisnis, dan kantor Anda. Dapatkan tampilan interior yang benar-benar baru.</p>
          <a href="#" className={styles.learnMore}>Learn More</a>
        </div>
        <div className={styles.socialIcons}>
          <a href="https://www.tiktok.com/@d.a.i.ku.pekanbaru?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="https://www.threads.net/@daikuinterior?xmt=AQGzinU5_ySnDqvyuCDhgzxaECeWrfJvua88MAWE-RL6vCE" target="_blank" rel="noopener noreferrer">
            <img src="/daiku/threads.png" alt="Threads Icon" className={styles.iconImage} />
          </a>
          <a href="https://www.instagram.com/daikuinterior?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </aside>
      
      {/* Section yang akan discroll */}
      <div className={styles.mainImage} ref={scrollToRef}>
        <div className={styles.imageOverlay}>
          <img src="/daiku/homepage.jpg" alt="Desain Interior" />
        </div>
        <div className={styles.textOverlay}>
          <div className={styles.textItem}>
            <h3>Furniture Terbaik</h3>
            <p>Pilihan furnitur kami yang dikurasi menawarkan perpaduan sempurna antara gaya dan kenyamanan, dirancang untuk meningkatkan ruang hidup Anda.</p>
          </div>
          <div className={styles.textItem}>
            <h3>Interior Terbaik</h3>
            <p>Kami mendesain interior yang mencerminkan kepribadian unik Anda, menciptakan keseimbangan harmonis antara estetika dan fungsionalitas.</p>
          </div>
          <div className={styles.textItem}>
            <h3>Desain Modern</h3>
            <p>Desain modern kami menggabungkan garis-garis bersih dan elemen minimalis untuk menciptakan ruang yang fungsional dan elegan.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;