import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/About.module.css';

const VideoWithFallback = ({ src, fallbackSrc, ...props }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Pemutaran video gagal:", error);
      });
    }
  }, []);

  return (
    <div className={styles.videoContainer}>
      <Image
        src={fallbackSrc}
        alt="Thumbnail video"
        layout="fill"
        objectFit="cover"
        priority
      />
      <video
        ref={videoRef}
        src={src}
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        {...props}
      />
    </div>
  );
};

const About = ({ scrollToSection }) => {
  return (
    <div>
      {/* Bagian Studio Arsitek */}
      <div className={styles.aboutPage}>
        <div className={styles.imageContainer}>
          <VideoWithFallback src="/daiku/about/1.mp4" fallbackSrc="/daiku/about/fallback1.jpg" />
          <VideoWithFallback src="/daiku/about/2.mp4" fallbackSrc="/daiku/about/fallback2.jpg" />
        </div>
        <div className={styles.textContainer}>
          <h1>STUDIO ARSITEK</h1>
          <p>Kami menyediakan layanan desain arsitektur yang inovatif dengan tim profesional di studio kami.</p>
          <p>Dari konsep hingga eksekusi, kami memastikan kualitas dan keindahan pada setiap proyek yang kami tangani.</p>
        </div>
      </div>

      {/* Bagian Workshop */}
      <div className={styles.aboutPage}>
        <div className={styles.textContainer}>
          <h1>WORKSHOP</h1>
          <p>Di workshop kami, para ahli tukang bekerja dengan dedikasi untuk mewujudkan desain terbaik.</p>
          <p>Dari proses pembuatan hingga instalasi di lapangan, kami selalu berkomitmen pada kualitas dan presisi.</p>
        </div>
        <div className={styles.imageContainer}>
          <VideoWithFallback src="/daiku/about/3.mp4" fallbackSrc="/daiku/about/fallback3.jpg" />
          <VideoWithFallback src="/daiku/about/4.mp4" fallbackSrc="/daiku/about/fallback4.jpg" />
        </div>
      </div>

      {/* Bagian Renovasi */}
      <div className={styles.aboutPage}>
        <div className={styles.imageContainer}>
          <VideoWithFallback src="/daiku/about/5.mp4" fallbackSrc="/daiku/about/fallback5.jpg" />
          <VideoWithFallback src="/daiku/about/6.mp4" fallbackSrc="/daiku/about/fallback6.jpg" />
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
