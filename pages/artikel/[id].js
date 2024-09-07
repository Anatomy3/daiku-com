import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../../styles/Artikel.module.css';
import Sidebar from '../../components/Sidebar'; // Import Sidebar

// Fungsi untuk mendapatkan tanggal hari ini
const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
};

const articles = [
  {
    id: "desain-interior-rumah-pekanbaru",
    title: "Desain Interior Rumah Minimalis oleh Daiku Interior Pekanbaru",
    image: "/daiku/rumah/rumah (1).jpg",
    description: `
      Daiku Interior Pekanbaru mengkhususkan diri dalam desain interior rumah minimalis yang menggabungkan estetika modern dengan efisiensi ruang. Kami menawarkan solusi desain yang dirancang untuk memenuhi kebutuhan gaya hidup urban yang mengutamakan ruang yang bersih, lapang, dan fungsional.
      
      Setiap proyek dimulai dengan konsultasi mendalam untuk memahami preferensi klien. Kami memberikan solusi yang sesuai dengan visi Anda, memastikan hasil akhir yang nyaman dan berkelas. Dari pemilihan material hingga tata letak furnitur, kami memastikan setiap detail dirancang dengan cermat.
      
      Apakah Anda ingin merombak seluruh rumah atau hanya beberapa ruangan, Daiku Interior menjamin setiap ruang akan mencerminkan gaya dan kebutuhan modern Anda. Hubungi kami untuk layanan desain interior rumah minimalis terbaik di Pekanbaru.`,
    date: getTodayDate(),
  },
  {
    id: "jasa-interior-kantor-pekanbaru",
    title: "Jasa Desain Interior Kantor oleh Daiku Interior Pekanbaru",
    image: "/daiku/kantor/kantor (2).jpg",
    description: `
      Daiku Interior Pekanbaru memahami bahwa lingkungan kantor yang dirancang dengan baik dapat meningkatkan produktivitas dan kenyamanan kerja. Kami menawarkan solusi desain interior kantor yang tidak hanya efisien secara fungsional tetapi juga menciptakan suasana kerja yang modern dan profesional.
      
      Dengan fokus pada ergonomi dan pemanfaatan ruang yang optimal, desain kami memastikan bahwa karyawan dapat bekerja dengan nyaman dan produktif. Setiap elemen, mulai dari furnitur hingga pencahayaan, dirancang untuk mencerminkan identitas perusahaan Anda.
      
      Apakah Anda memerlukan desain untuk ruang rapat, ruang kerja terbuka, atau ruang resepsionis, Daiku Interior siap membantu menciptakan ruang kerja yang mendukung performa tinggi.`,
    date: getTodayDate(),
  },
  {
    id: "desain-kitchen-set-pekanbaru",
    title: "Desain Kitchen Set Modern oleh Daiku Interior Pekanbaru",
    image: "/daiku/rumah/rumah (4).jpg",
    description: `
      Dapur adalah jantung dari setiap rumah, dan Daiku Interior Pekanbaru hadir untuk membantu Anda menciptakan kitchen set yang modern, fungsional, dan elegan. Kami menawarkan desain yang disesuaikan dengan kebutuhan Anda, memaksimalkan penggunaan ruang dan penyimpanan tanpa mengorbankan gaya.
      
      Dengan material berkualitas tinggi dan teknologi terbaru, kitchen set kami memberikan kenyamanan dan kepraktisan. Kami bekerja sama dengan Anda untuk memilih material, tata letak, dan desain yang tepat untuk menciptakan dapur impian Anda.
      
      Hubungi Daiku Interior Pekanbaru untuk kitchen set yang tidak hanya terlihat indah, tetapi juga fungsional dan tahan lama.`,
    date: getTodayDate(),
  },
  {
    id: "renovasi-rumah-dengan-interior-daiku",
    title: "Renovasi Rumah dengan Sentuhan Interior Daiku Pekanbaru",
    image: "/daiku/rumah/rumah (6).jpg",
    description: `
      Apakah Anda ingin memperbarui tampilan rumah Anda dengan desain yang modern dan elegan? Daiku Interior Pekanbaru menawarkan layanan renovasi rumah yang dirancang untuk meningkatkan nilai estetika dan fungsionalitas ruang.
      
      Kami menangani berbagai proyek renovasi, termasuk ruang tamu, kamar tidur, dapur, dan kamar mandi. Setiap proyek kami dikerjakan dengan perhatian penuh pada detail, mulai dari pemilihan material berkualitas tinggi hingga penataan ulang ruang yang sesuai dengan gaya hidup modern Anda.
      
      Daiku Interior menjamin hasil akhir yang sesuai dengan harapan Anda, memberikan sentuhan personal pada setiap ruang di rumah Anda.`,
    date: getTodayDate(),
  },
  {
    id: "desain-showroom-toko-pekanbaru",
    title: "Desain Showroom dan Toko di Pekanbaru oleh Daiku Interior",
    image: "/daiku/usaha/usaha (7).jpg",
    description: `
      Daiku Interior Pekanbaru menyediakan jasa desain interior untuk showroom dan toko yang dirancang untuk meningkatkan daya tarik visual dan pengalaman pelanggan. Kami memahami pentingnya desain interior yang menarik untuk menarik pelanggan dan meningkatkan penjualan.
      
      Dengan tata letak yang strategis dan pencahayaan yang tepat, showroom Anda akan menjadi tempat yang menarik dan fungsional. Kami bekerja sama dengan Anda untuk menciptakan ruang yang mencerminkan identitas merek dan memudahkan pelanggan dalam berinteraksi dengan produk Anda.
      
      Dapatkan desain interior showroom yang memukau dengan Daiku Interior Pekanbaru, yang berfokus pada fungsionalitas dan estetika.`,
    date: getTodayDate(),
  },
  {
    id: "konsultan-interior-berpengalaman-pekanbaru",
    title: "Konsultan Interior Berpengalaman di Pekanbaru oleh Daiku",
    image: "/daiku/rumah/rumah (2).jpg",
    description: `
      Daiku Interior Pekanbaru menyediakan layanan konsultasi desain interior profesional untuk membantu Anda mewujudkan ruang impian. Kami bekerja sama dengan Anda untuk memahami kebutuhan spesifik, preferensi desain, dan gaya hidup Anda, menawarkan solusi yang sepenuhnya disesuaikan.
      
      Dengan pengalaman bertahun-tahun di bidang desain interior, kami memberikan panduan dalam pemilihan material, tata letak, dan elemen dekoratif. Kami berkomitmen untuk menciptakan ruang yang fungsional, nyaman, dan estetis untuk rumah, kantor, atau tempat usaha Anda.
      
      Daiku Interior Pekanbaru adalah mitra tepercaya Anda dalam setiap proyek desain interior, memberikan hasil yang sesuai dengan gaya dan anggaran Anda.`,
    date: getTodayDate(),
  },
];

export default function ArtikelDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Cari artikel berdasarkan id
  const article = articles.find((article) => article.id === id);

  if (!article) return <p>Loading...</p>;

  // Pisahkan deskripsi berdasarkan baris baru menjadi beberapa paragraf
  const descriptionParagraphs = article.description.trim().split('\n').map((para, idx) => (
    <p key={idx}>{para.trim()}</p>
  ));

  return (
    <div style={{ display: 'flex', flexDirection: 'row', minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sidebar scrollToSection={() => {}} /> {/* Sidebar tetap ditampilkan */}

      {/* Konten Artikel */}
      <div className={styles.detailContainer}>
        <Head>
          <title>{article.title} - Daiku Interior Pekanbaru</title>
          <meta
            name="description"
            content={`Baca lebih lanjut tentang ${article.title} di Daiku Interior Pekanbaru. Kami menyediakan layanan terbaik untuk desain interior di Pekanbaru.`}
          />
        </Head>

        {/* Layout artikel: judul -> tanggal -> foto -> keterangan artikel */}
        <h1 className={styles.detailTitle}>{article.title}</h1>
        <p className={styles.detailDate}>{article.date}</p>

        {/* Gambar Artikel */}
        <img src={article.image} alt={article.title} className={styles.detailImage} />
        
        {/* Render deskripsi dalam beberapa paragraf */}
        <div className={styles.detailDescription}>
          {descriptionParagraphs}
        </div>
      </div>
    </div>
  );
}
