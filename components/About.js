import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import styles from '../styles/About.module.css';

const About = ({ scrollToSection, videoUrls }) => {
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.src = videoUrls[index];
        video.load();
        video.play().catch(error => console.error("Error memutar video:", error));
      }
    });
  }, [videoUrls]);

  return (
    <>
      <Head>
        {videoUrls.map((url, index) => (
          <link key={index} rel="preload" href={url} as="video" type="video/mp4" />
        ))}
      </Head>
      <div>
        {/* Komponen pertama: Studio Arsitek */}
        <div className={styles.aboutPage}>
          <div className={styles.imageContainer}>
            <video 
              ref={el => videoRefs.current[0] = el}
              className={styles.video} 
              muted 
              loop 
              playsInline
            />
            <video 
              ref={el => videoRefs.current[1] = el}
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
              className={styles.video} 
              muted 
              loop 
              playsInline
            />
            <video 
              ref={el => videoRefs.current[3] = el}
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
              className={styles.video} 
              muted 
              loop 
              playsInline
            />
            <video 
              ref={el => videoRefs.current[5] = el}
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
            
            <button className={styles.exploreButton} onClick={() => scrollToSection('projectsSection')}>
              KLIK UNTUK MELIHAT PROJEK LEBIH LANJUT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const videoUrls = [
    '/daiku/about/1.mp4',
    '/daiku/about/2.mp4',
    '/daiku/about/3.mp4',
    '/daiku/about/4.mp4',
    '/daiku/about/5.mp4',
    '/daiku/about/6.mp4'
  ];

  return {
    props: {
      videoUrls,
    },
  };
}

export default About;
