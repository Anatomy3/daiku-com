import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Artikel.module.css';

// Fungsi untuk mendapatkan tanggal hari ini dalam format YYYY.MM.DD
const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Tambahkan '0' jika kurang dari 2 digit
  const day = String(today.getDate()).padStart(2, '0'); // Tambahkan '0' jika kurang dari 2 digit
  return `${year}.${month}.${day}`;
};

const articles = [
  {
    id: "desain-interior-rumah-pekanbaru",
    title: "Desain Interior Rumah Minimalis oleh Daiku Interior Pekanbaru",
    image: "daiku/rumah/rumah (1).jpg",
  },
  {
    id: "jasa-interior-kantor-pekanbaru",
    title: "Jasa Desain Interior Kantor oleh Daiku Interior Pekanbaru",
    image: "daiku/kantor/kantor (2).jpg",
  },
  {
    id: "desain-kitchen-set-pekanbaru",
    title: "Desain Kitchen Set Modern oleh Daiku Interior Pekanbaru",
    image: "daiku/rumah/rumah (4).jpg",
  },
  {
    id: "renovasi-rumah-dengan-interior-daiku",
    title: "Renovasi Rumah dengan Sentuhan Interior Daiku Pekanbaru",
    image: "daiku/rumah/rumah (6).jpg",
  },
  {
    id: "desain-showroom-toko-pekanbaru",
    title: "Desain Showroom dan Toko di Pekanbaru oleh Daiku Interior",
    image: "daiku/usaha/usaha (7).jpg",
  },
  {
    id: "konsultan-interior-berpengalaman-pekanbaru",
    title: "Konsultan Interior Berpengalaman di Pekanbaru oleh Daiku",
    image: "daiku/rumah/rumah (2).jpg",
  },
];

export default function Artikel() {
  const [visibleArticles, setVisibleArticles] = useState(3); // Awalnya hanya 3 artikel yang ditampilkan

  const handleReadMore = () => {
    setVisibleArticles((prevVisible) => prevVisible + 3); // Tambahkan 3 artikel setiap klik
  };

  const todayDate = getTodayDate(); // Mendapatkan tanggal hari ini

  return (
    <div className={styles.fullBackground}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {articles.slice(0, visibleArticles).map((article) => (
            <Link key={article.id} href={`/artikel/${article.id}`}>
              <div className={styles.card}>
                <img src={article.image} alt={article.title} className={styles.image} />
                <div className={styles.content}>
                  <p className={styles.date}>{todayDate}</p> {/* Tampilkan tanggal hari ini */}
                  <h3 className={styles.title}>{article.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {visibleArticles < articles.length && (
          <button className={styles.loadMore} onClick={handleReadMore}>
            Read More
          </button>
        )}
      </div>
    </div>
  );
}
