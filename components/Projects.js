import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/Projects.module.css';

const Projects = () => {
  const [currentCategory, setCurrentCategory] = useState('rumah');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mainImage, setMainImage] = useState('/daiku/homepage.jpg'); 
  const [imagesPerSlide, setImagesPerSlide] = useState(15);

  const projectsSectionRef = useRef(null); // Buat referensi untuk elemen projects

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setCurrentSlide(0); 
    setMainImage(`/daiku/${category}/${category} (1).jpg`);
  };

  const handleImageClick = (imageUrl) => {
    setMainImage(imageUrl);
  };

  const categories = {
    rumah: Array.from({ length: 75 }, (_, index) => `/daiku/rumah/rumah (${index + 1}).jpg`),
    kantor: Array.from({ length: 47 }, (_, index) => `/daiku/kantor/kantor (${index + 1}).jpg`),
    usaha: Array.from({ length: 151 }, (_, index) => `/daiku/usaha/usaha (${index + 1}).jpg`)
  };

  useEffect(() => {
    const updateImagesPerSlide = () => {
      if (window.innerWidth <= 768) {
        setImagesPerSlide(12); 
      } else {
        setImagesPerSlide(15); 
      }
    };

    updateImagesPerSlide();

    window.addEventListener('resize', updateImagesPerSlide);

    return () => {
      window.removeEventListener('resize', updateImagesPerSlide);
    };
  }, []);

  const currentImages = categories[currentCategory].slice(
    currentSlide * imagesPerSlide,
    (currentSlide + 1) * imagesPerSlide
  );
  const totalSlides = Math.ceil(categories[currentCategory].length / imagesPerSlide);

  return (
    <div className={styles.projectsPage}>
      <aside className={styles.sidebar}>
        <div className={styles.imageGrid}>
          {currentImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              onClick={() => handleImageClick(src)}
              className={styles.sidebarImage}
            />
          ))}
        </div>
        <div className={styles.dotsContainer}>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </aside>

      {/* Gunakan ref untuk bagian Projects */}
      <div ref={projectsSectionRef} className={styles.mainContent}>
        <img src={mainImage} alt="Main Content" className={`${styles.mainImage} ${styles.largeImage}`} />

        <div className={styles.description}>
          <h2>Cara Baru untuk</h2>
          <h3>Mendesain Rumah Anda</h3>
          <p>Kami menghilangkan kesalahpahaman terbesar tentang perencanaan dan desain rumah yang efisien dan estetis.</p>
        </div>

        <div className={styles.photoGallery}>
          <div className={styles.photos}>
            <div className={styles.photoItem}>
              <img src="/daiku/rumah/rumah (1).jpg" alt="RUMAH" onClick={() => handleCategoryChange('rumah')} />
              <div className={styles.photoLabel}>RUMAH</div>
            </div>
            <div className={styles.photoItem}>
              <img src="/daiku/kantor/kantor (1).jpg" alt="KANTOR" onClick={() => handleCategoryChange('kantor')} />
              <div className={styles.photoLabel}>KANTOR</div>
            </div>
            <div className={styles.photoItem}>
              <img src="/daiku/usaha/usaha (1).jpg" alt="USAHA" onClick={() => handleCategoryChange('usaha')} />
              <div className={styles.photoLabel}>USAHA</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
