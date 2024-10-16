import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/About.module.css';

const videoData = [
  { src: '/daiku/about/1.mp4', poster: '/daiku/about/poster1.jpg' },
  { src: '/daiku/about/2.mp4', poster: '/daiku/about/poster2.jpg' },
  { src: '/daiku/about/3.mp4', poster: '/daiku/about/poster3.jpg' },
  { src: '/daiku/about/4.mp4', poster: '/daiku/about/poster4.jpg' },
  { src: '/daiku/about/5.mp4', poster: '/daiku/about/poster5.jpg' },
  { src: '/daiku/about/6.mp4', poster: '/daiku/about/poster6.jpg' },
];

const VideoWithPoster = ({ src, poster }) => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', () => setIsVideoLoaded(true));
      return () => video.removeEventListener('loadeddata', () => setIsVideoLoaded(true));
    }
  }, []);

  return (
    <div className={styles.videoWrapper}>
      <Image
        src={poster}
        alt="Video poster"
        layout="fill"
        objectFit="cover"
        priority
        className={isVideoLoaded ? styles.hidden : ''}
      />
      <video
        ref={videoRef}
        className={`${styles.video} ${isVideoLoaded ? styles.loaded : ''}`}
        muted
        loop
        playsInline
        poster={poster}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const About = ({ scrollToSection }) => {
  return (
    <div>
      {/* Komponen pertama: Studio Arsitek */}
      <div className={styles.aboutPage}>
        <div className={styles.imageContainer}>
          <VideoWithPoster {...videoData[0]} />
          <VideoWithPoster {...videoData[1]} />
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
          <VideoWithPoster {...videoData[2]} />
          <VideoWithPoster {...videoData[3]} />
        </div>
      </div>

      {/* Komponen ketiga: Hasil */}
      <div className={styles.aboutPage}>
        <div className={styles.imageContainer}>
          <VideoWithPoster {...videoData[4]} />
          <VideoWithPoster {...videoData[5]} />
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
