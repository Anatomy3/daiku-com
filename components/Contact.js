import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.contactInfo}>
          <h1 className={styles.title}>
            DAIKU<span className={styles.break}>INTERIOR</span>
          </h1>
          <div className={styles.contactItem}>
            <p> Jl Yos Sudarso, Pekanbaru 28154</p>
            <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
          </div>
          <div className={styles.contactItem}>
            <p>0811-7597-766</p>
            <i className="fas fa-phone-alt" aria-hidden="true"></i>
          </div>
          <div className={styles.contactItem}>
            <p>fendrabudiono@gmail.com</p>
            <i className="fas fa-envelope" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.mapContainer}>
          <div className={styles.mapShadow}></div>
          <iframe
            src="https://www.google.com/maps?q=Jalan%20Yos%20Sudarso,%20Rumbai,%20Pekanbaru&output=embed&gestureHandling=none"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
