import React, { useState } from 'react';
import styles from '../styles/Sidebar.module.css';
import { useRouter } from 'next/router';

const Sidebar = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk mengontrol tampilan menu
  const router = useRouter();

  const handleClick = (path, section = null) => {
    if (path === '/' && section === 'projectsSection') {
      // Scroll ke bagian Projects di halaman yang sama
      scrollToSection('projectsSection');
    } else if (router.pathname === '/') {
      // Jika di halaman home, scroll ke bagian tertentu
      scrollToSection(section);
    } else {
      // Jika di halaman lain, navigasi ke path yang diberikan
      router.push({
        pathname: path,
        query: section ? { section } : {},
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle state menu terbuka atau tertutup
  };

  return (
    <div className={styles.sidebar}>
      {/* Logo hanya muncul pada mobile */}
      <div className={styles.logoContainer}>
        <img src="/daiku/logo.png" alt="Daiku Logo" className={styles.logo} />
      </div>

      {/* Ikon 3 garis (Hamburger menu) hanya di mobile */}
      <div className={styles.hamburgerIcon} onClick={toggleMenu}>
        <i className="fas fa-bars"></i> {/* Ikon 3 garis */}
      </div>

      {/* Container untuk tombol, tampilkan jika isMenuOpen true */}
      <div className={`${styles.iconContainer} ${isMenuOpen ? styles.showMenu : ''}`}>
        <div
          className={`${styles.iconWrapper} ${router.pathname === '/' ? styles.active : ''}`}
          onClick={() => handleClick('/')}
        >
          <div className={styles.iconBackground}>
            <i className={`${styles.icon} fas fa-home`}></i>
          </div>
          <span className={styles.text}>Beranda</span>
        </div>
        <div
          className={`${styles.iconWrapper} ${router.pathname === '/' ? styles.active : ''}`}
          onClick={() => handleClick('/', 'projectsSection')}  // Scroll ke bagian Projects
        >
          <div className={styles.iconBackground}>
            <i className={`${styles.icon} fas fa-briefcase`}></i>
          </div>
          <span className={styles.text}>Projects</span>
        </div>
        <div
          className={`${styles.iconWrapper} ${router.pathname === '/contact' ? styles.active : ''}`}
          onClick={() => handleClick('/contact')}
        >
          <div className={styles.iconBackground}>
            <i className={`${styles.icon} fas fa-envelope`}></i>
          </div>
          <span className={styles.text}>Contact</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
