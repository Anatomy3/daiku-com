import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/About.module.css';

const videoUrls = [
  '/daiku/about/1.mp4',
  '/daiku/about/2.mp4',
  '/daiku/about/3.mp4',
  '/daiku/about/4.mp4',
  '/daiku/about/5.mp4',
  '/daiku/about/6.mp4'
];

const About = ({ scrollToSection }) => {
  const videoRefs = useRef([]);
  const [videosLoaded, setVideosLoaded] = useState(Array(videoUrls.length).fill(false));

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.src = videoUrls[index];
        video.load();
        video.onloadeddata = () => {
          setVideosLoaded(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        };
        video.play().catch(error => console.error("Error memutar video:", error));
      }
    });
  }, []);

  return (
    <div>
      {/* Komponen pertama: Studio Arsitek */}
      <div className={styles.aboutPage}>
        <div className={styles.imageContainer}>
          {[0, 1].map((index) => (
            <video 
              key={index}
              ref={el => videoRefs.current[index] = el}
              className={`${styles.video} ${videosLoaded[index] ? styles.loaded : ''}`}
              muted 
              loop 
              playsInline
            />
          ))}
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
          {[2, 3].map((index) => (
            <video 
              key={index}
              ref={el => videoRefs.current[index] = el}
              className={`${styles.video} ${videosLoaded[index] ? styles.loaded : ''}`}
              muted 
              loop 
              playsInline
            />
          ))}
        </div>
      </div>

      {/* Komponen ketiga: Hasil */}
      <div className={styles.aboutPage}>
        <div className={styles.imageContainer}>
          {[4, 5].map((index) => (
            <video 
              key={index}
              ref={el => videoRefs.current[index] = el}
              className={`${styles.video} ${videosLoaded[index] ? styles.loaded : ''}`}
              muted 
              loop 
              playsInline
            />
          ))}
        </div>
        <div className={styles.textContainer}>
          <h1>RENOVASI</h1>
          <p>Kami berkomitmen untuk memberikan solusi renovasi yang inovatif dan berkualitas, baik untuk rumah tinggal, kantor, maupun gedung komersial.</p>
          <p>Setiap proyek renovasi yang kami tangani dirancang dengan detail untuk memastikan bahwa hasil akhir memenuhi kebutuhan dan keinginan klien, sambil meningkatkan nilai estetika dan fungsionalitas bangunan.</p>
          
          <button className={styles.exploreButton} onClick={() => scrollToSection('projectsSection')}>
            KLIK UNTUK MELIHAT PROJEK LEBIH LANJUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
