import React from 'react';
import styles from '../styles/Profile.module.css';

const Profile = () => {
  return (
    <div id="profile" className={styles.profileWrapper}>
      <div className={styles.profileContainer}>
        <div className={styles.imageContainer}>
          <img src="/profile.jpg" alt="Profile" className={styles.profileImage} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.profileName}>Lingga Dwi Satria Vigio</h2>
          <p className={styles.jobTitle}>Visual Developer</p>
          <p className={styles.description}>Menyukai pembelajaran mandiri lewat YouTube, ChatGPT, mesin pencari, dan lain-lain</p>
        </div>
        <div className={styles.socialLinks}>
          <a className={styles.instagram} href="https://www.instagram.com/lingga_d_satria">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a className={styles.whatsapp} href="https://wa.me/085805908809">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a className={styles.gmail} href="mailto:linggadwisatriavigio@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
