import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBottom}>
        <img src="/daiku/logo.png" alt="Logo" className={styles.footerLogo} />
        <p>© 2024 Daiku Interior.</p>
        <div className={styles.socialIcons}>
          <a href="https://www.tiktok.com/@d.a.i.ku.pekanbaru?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-tiktok"></i> {/* Ikon TikTok */}
          </a>
          <a href="https://www.threads.net/@daikuinterior?xmt=AQGzinU5_ySnDqvyuCDhgzxaECeWrfJvua88MAWE-RL6vCE" target="_blank" rel="noopener noreferrer">
            <img src="/daiku/threads.png" alt="Threads Icon" className={styles.iconImage} /> {/* Ikon Threads */}
          </a>
          <a href="https://www.instagram.com/daikuinterior?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> {/* Ikon Instagram */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
