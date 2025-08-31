import React, { useState } from 'react';

// Impor komponen
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Backstory from './components/Backstory';
import Gallery from './components/Gallery';
import ServerIP from './components/ServerIP';
import Footer from './components/Footer';
import GradientSeparator from './components/GradientSeparator';
import AnimatedSection from './components/AnimatedSection';

// Impor data & komponen untuk Lightbox
import { galleryData } from './galleryData.js';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function App() {
  // 1. State untuk lightbox sekarang tinggal di sini
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // 2. Fungsi-fungsi untuk mengontrol lightbox juga pindah ke sini
  const openLightbox = (index) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);
  const goToNext = () => {
    // Kita perlu tahu gambar mana yang sedang difilter saat ini. Untuk simpelnya, kita asumsikan tidak ada filter.
    // Jika ingin lebih canggih, state filter juga perlu diangkat ke App.jsx
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % galleryData.length);
  };
  const goToPrev = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + galleryData.length) % galleryData.length);
  };

  return (
    <div className="font-poppins bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <GradientSeparator />
        <AnimatedSection id="backstory" className="relative min-h-screen w-full flex items-center scroll-mt-24">
          <Backstory />
        </AnimatedSection>
        <GradientSeparator />
        <AnimatedSection id="gallery" className="min-h-screen w-full flex items-center bg-gray-900 text-white scroll-mt-24">
          {/* 3. Kirim fungsi 'openLightbox' sebagai prop ke Gallery */}
          <Gallery onImageClick={openLightbox} />
        </AnimatedSection>
        <GradientSeparator />
        <AnimatedSection id="serverip" className="min-h-screen w-full flex items-center bg-gray-800 text-white scroll-mt-24">
          <ServerIP />
        </AnimatedSection>
      </main>
      <Footer />

      {/* 4. Kode JSX untuk Lightbox sekarang berada di sini, di level tertinggi */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center transition-opacity duration-300 animate-fadeIn"
          onClick={closeLightbox}
          role="dialog" 
          aria-modal="true"
        >
          <div className="relative w-full max-w-5xl mx-4" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeLightbox} className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 z-20 transition-colors duration-200" aria-label="Tutup lightbox">
              <FiX size={24} />
            </button>
            <div className="w-full my-8 bg-gray-900 rounded-lg overflow-hidden shadow-2xl z-10">
              <button onClick={goToPrev} className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700/70 text-white p-3 rounded-full transition-all duration-200 hidden md:block" aria-label="Gambar sebelumnya">
                <FiChevronLeft size={30} />
              </button>
              <button onClick={goToNext} className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700/70 text-white p-3 rounded-full transition-all duration-200 hidden md:block" aria-label="Gambar berikutnya">
                <FiChevronRight size={30} />
              </button>
              <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
                <div className="flex-grow flex items-center justify-center p-4">
                  <img src={galleryData[selectedImageIndex].image} alt={galleryData[selectedImageIndex].title} className="max-w-full max-h-[calc(80vh-100px)] object-contain rounded-lg" />
                </div>
                <div className="md:w-1/3 p-4 bg-gray-800 md:flex md:flex-col md:justify-center">
                  <h3 className="font-bold text-2xl text-teal-400 mb-2">{galleryData[selectedImageIndex].title}</h3>
                  <p className="text-gray-300 text-base leading-relaxed">{galleryData[selectedImageIndex].description}</p>
                  <div className="flex justify-between md:hidden mt-4 gap-2">
                    <button onClick={goToPrev} className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg flex-grow"><FiChevronLeft size={20} className="inline-block mr-1"/> Prev</button>
                    <button onClick={goToNext} className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg flex-grow">Next <FiChevronRight size={20} className="inline-block ml-1"/></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;