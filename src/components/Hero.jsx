import React from 'react';
import HeroBg from '../assets/hero-bg.jpg'; 

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full scroll-mt-24"
      style={{ 
        backgroundImage: `url(${HeroBg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-gray-800"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Selamat Datang di Delt<span className="text-teal-400">Craft</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-300">
          Temukan dunia baru yang penuh petualangan, bangun mahakaryamu, dan jadilah bagian dari komunitas kami yang solid.
        </p>
        <a 
          href="#serverip" 
          className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
        >
          Main Sekarang!
        </a>
      </div>
    </section>
  );
};

export default Hero;