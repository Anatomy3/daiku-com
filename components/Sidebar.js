import React from 'react';
import styles from '../styles/Sidebar.module.css';
import { useRouter } from 'next/router';

const Sidebar = ({ scrollToSection }) => {
  const router = useRouter();

  const handleClick = (path, section = null) => {
    if (router.pathname === '/') {
      scrollToSection(section); // Scroll ke bagian Projects jika di halaman beranda
    } else {
      // Kirim status 'projectsSection' sebagai query parameter saat redirect ke beranda
      router.push({
        pathname: path,
        query: section ? { section } : {} // Menyimpan informasi bagian untuk scroll setelah halaman berubah
      });
    }
  };

  return (
    <div className={styles.sidebar}>
      {/* Logo hanya muncul pada mobile */}
      <div className={styles.logoContainer}>
        <img src="/daiku/logo.png" alt="Daiku Logo" className={styles.logo} />
      </div>

      {/* Container untuk tombol */}
      <div className={styles.iconContainer}>
        <div
          className={`${styles.iconWrapper} ${router.pathname === '/' ? styles.active : ''}`}
          onClick={() => handleClick('/')}
        >
          <i className={`${styles.icon} fas fa-home`}></i>
          <span className={styles.text}>Beranda</span>
        </div>
        <div
          className={`${styles.iconWrapper} ${router.pathname === '/' ? styles.active : ''}`}
          onClick={() => handleClick('/', 'projectsSection')} // Kirim informasi 'projectsSection' di sini
        >
          <i className={`${styles.icon} fas fa-briefcase`}></i>
          <span className={styles.text}>Projects</span>
        </div>
        <div
          className={`${styles.iconWrapper} ${router.pathname === '/contact' ? styles.active : ''}`}
          onClick={() => handleClick('/contact')}
        >
          <i className={`${styles.icon} fas fa-envelope`}></i>
          <span className={styles.text}>Contact</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
