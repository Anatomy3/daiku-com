import React, { useState } from 'react';
import HomePage from '../components/HomePage';
import About from '../components/About';  // Mengimpor komponen About
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Sidebar from '../components/Sidebar';

export default function Home() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
      <div style={{ display: 'flex', flex: 1, overflowX: 'hidden' }}>
        <Sidebar isManualExpanded={isSidebarExpanded} />
        <div className="content-wrapper">
          <style jsx global>{`
            /* Mengatur scrollbar kustom untuk WebKit browsers (Chrome, Safari, Edge) */
            ::-webkit-scrollbar {
              width: 12px;
              height: 12px;
            }

            ::-webkit-scrollbar-track {
              background: rgba(255, 255, 255, 0.2);
              backdrop-filter: blur(10px);
              border-radius: 9999px;
            }

            ::-webkit-scrollbar-thumb {
              background: orange; /* Ubah warna menjadi oranye */
              backdrop-filter: blur(10px);
              border-radius: 9999px;
              border: 2px solid rgba(255, 255, 255, 0.2);
            }

            ::-webkit-scrollbar-thumb:hover {
              background: #e69500; /* Warna saat hover, sedikit lebih gelap dari oranye */
            }

            ::-webkit-scrollbar-corner {
              background: rgba(255, 255, 255, 0.2);
              backdrop-filter: blur(10px);
              border-radius: 9999px;
            }

            /* Untuk Firefox */
            * {
              scrollbar-width: thin;
              scrollbar-color: orange rgba(255, 255, 255, 0.2); /* Ubah warna menjadi oranye */
            }

            /* Gaya untuk mengatur keseluruhan tampilan */
            body {
              margin: 0;
              padding: 0;
              overflow-x: hidden;
            }

            /* Media query untuk layar kecil atau mode mobile */
            @media (max-width: 768px) {
              .content-wrapper {
                margin-left: 0 !important;
                padding-top: 0; /* Hapus padding atas */
              }
            }

            /* Default layout untuk desktop */
            .content-wrapper {
              flex: 1;
              margin-left: 58px;
              padding-top: 0; /* Hapus padding atas */
              overflow-x: hidden;
            }
          `}</style>
          <HomePage /> {/* Mengganti Header dengan HomePage */}
          <About /> {/* Tambahkan halaman About di sini */}
          <Projects /> {/* Mengganti Gallery dengan Projects */}
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}
