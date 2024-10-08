import React, { useState, useRef } from 'react';
import HomePage from '../components/HomePage';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Sidebar from '../components/Sidebar';
import Artikel from '../components/Artikel'; // Import Komponen Artikel

export default function Home() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  // Gunakan useRef untuk merujuk pada section Projects, Artikel, dan Contact
  const projectsSectionRef = useRef(null);
  const artikelSectionRef = useRef(null); // Refs untuk Artikel
  const contactSectionRef = useRef(null); // Refs untuk Contact

  // Fungsi untuk scroll ke bagian yang diinginkan
  const scrollToSection = (section) => {
    if (section === 'projectsSection') {
      projectsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'artikelSection') {
      artikelSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'contactSection') { // Tambahkan bagian untuk scroll ke Contact
      contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
      <div style={{ display: 'flex', flex: 1, overflowX: 'hidden' }}>
        {/* Pass scrollToSection function ke Sidebar dan About */}
        <Sidebar scrollToSection={scrollToSection} isManualExpanded={isSidebarExpanded} />
        <div className="content-wrapper">
          <style jsx global>{`
            /* Custom scrollbar */
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
              background: orange;
              backdrop-filter: blur(10px);
              border-radius: 9999px;
              border: 2px solid rgba(255, 255, 255, 0.2);
            }

            ::-webkit-scrollbar-thumb:hover {
              background: #e69500;
            }

            ::-webkit-scrollbar-corner {
              background: rgba(255, 255, 255, 0.2);
              backdrop-filter: blur(10px);
              border-radius: 9999px;
            }

            /* Untuk Firefox */
            * {
              scrollbar-width: thin;
              scrollbar-color: orange rgba(255, 255, 255, 0.2);
            }

            body {
              margin: 0;
              padding: 0;
              overflow-x: hidden;
            }

            @media (max-width: 768px) {
              .content-wrapper {
                margin-left: 0 !important;
                padding-top: 0;
              }
            }

            .content-wrapper {
              flex: 1;
              margin-left: 58px;
              padding-top: 0;
              overflow-x: hidden;
            }
          `}</style>

          {/* Halaman Utama dan bagian-bagian yang akan di-scroll */}
          <HomePage /> {/* Halaman HomePage */}
          
          {/* Pass scrollToSection ke About */}
          <About scrollToSection={scrollToSection} /> {/* Halaman About */}
          
          {/* Tambahkan ref ke bagian Projects */}
          <div ref={projectsSectionRef}>
            <Projects /> {/* Section Projects */}
          </div>
          
          {/* Tambahkan ref ke bagian Artikel */}
          <div ref={artikelSectionRef}>
            <Artikel /> {/* Section Artikel */}
          </div>

          {/* Tambahkan ref ke bagian Contact */}
          <div ref={contactSectionRef}>
            <Contact /> {/* Section Contact */}
          </div>

          <Footer /> {/* Footer */}
        </div>
      </div>
    </div>
  );
}
