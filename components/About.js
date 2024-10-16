import React, { useEffect, useRef } from 'react';
import styles from '../styles/About.module.css';

const About = ({ scrollToSection }) => {
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.play().catch(error => console.error("Error memutar video:", error));
      }
    });
  }, []);

  return (
    <div>
      {/* Komponen pertama: Studio Arsitek */}
      <div className={styles.aboutPage}>
        <div className={styles.imageContainer}>
          <video 
            ref={el => videoRefs.current[0] = el}
            src="/daiku/about/1.mp4" 
            className={styles.video} 
            muted 
            loop 
            playsInline
          />
          <video 
            ref={el => videoRefs.current[1] = el}
            src="/daiku/about/2.mp4" 
            className={styles.video} 
            muted 
            loop 
            playsInline
          />
        </div>
        <div className={styles.textContainer}>
          <h1>STUDIO ARSITEK</h1>
          <p>Kami menyediakan layanan desain arsitektur yang inovatif dengan tim profesional di studio kami.</p>
          <p>Dari konsep hingga eksekusi, kami memastikan kualitas dan keindahan pada setiap proyek yang kami tangani.</p>
        </div>
      </div>

      {/* Komponen kedua: Workshop */}
      <div className={styles.aboutPage}>
        <div className={styles.textContainer}>
          <h1>WORKSHOP</h1>
          <p>Di workshop kami, para ahli tukang bekerja dengan dedikasi untuk mewujudkan desain terbaik.</p>
          <p>Dari proses pembuatan hingga instalasi di lapangan, kami selalu berkomitmen pada kualitas dan presisi.</p>
        </div>
        <div className={styles.imageContainer}>
          <video 
            ref={el => videoRefs.current[2] = el}
            src="/daiku/about/3.mp4" 
            className={styles.video} 
            muted 
            loop 
            playsInline
          />
          <video 
            ref={el => videoRefs.current[3] = el}
            src="/daiku/about/4.mp4" 
            className={styles.video} 
            muted 
            loop 
            playsInline
          />
        </div>
      </div>

      {/* Komponen ketiga: Hasil */}
      <div className={styles.aboutPage}>
        <div className={styles.imageContainer}>
          <video 
            ref={el => videoRefs.current[4] = el}
            src="/daiku/about/5.mp4" 
            className={styles.video} 
            muted 
            loop 
            playsInline
          />
          <video 
            ref={el => videoRefs.current[5] = el}
            src="/daiku/about/6.mp4" 
            className={styles.video} 
            muted 
            loop 
            playsInline
          />
        </div>
        <div className={styles.textContainer}>
          <h1>RENOVASI</h1>
          <p>Kami berkomitmen untuk memberikan solusi renovasi yang inovatif dan berkualitas, baik untuk rumah tinggal, kantor, maupun gedung komersial.</p>
          <p>Setiap proyek renovasi yang kami tangani dirancang dengan detail untuk memastikan bahwa hasil akhir memenuhi kebutuhan dan keinginan klien, sambil meningkatkan nilai estetika dan fungsionalitas bangunan.</p>
          
          {/* Tombol untuk Scroll ke Projects */}
          <button className={styles.exploreButton} onClick={() => scrollToSection('projectsSection')}>
            KLIK UNTUK MELIHAT PROJEK LEBIH LANJUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
