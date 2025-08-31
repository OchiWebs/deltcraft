import React, { useState } from 'react';
import { galleryData, categories } from '../galleryData.js';
import { FiEye } from 'react-icons/fi';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Komponen Gallery sekarang menerima prop 'onImageClick' dari App.jsx
const Gallery = ({ onImageClick }) => {
  const [filter, setFilter] = useState('Semua');

  const filteredImages = filter === 'Semua' 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-4xl font-bold text-center mb-4 text-teal-400">Galeri Momen</h2>
      <p className="text-lg text-gray-400 text-center mb-10">Lihat lebih dekat dunia dan komunitas DeltCraft.</p>
      
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              filter === category ? 'bg-teal-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((item, index) => (
          <div
            key={item.id}
            className="relative group rounded-lg overflow-hidden cursor-pointer"
            // Saat gambar di-klik, panggil fungsi onImageClick dan kirim indeksnya
            onClick={() => onImageClick(index)}
          >
            <LazyLoadImage
              src={item.image}
              alt={item.title}
              effect="blur"
              className="w-full h-auto object-contain rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
              <FiEye size={40} className="text-teal-400" />
            </div>
            <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-teal-500 transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;