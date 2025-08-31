import React, { useState, useEffect } from 'react';
import { storyChapters } from '../backstoryData.jsx';
import useTypewriter from '../hooks/useTypewriter'; // Impor custom hook kita

// Impor untuk background slideshow (tidak berubah)
import Bg1 from '../assets/backstory1.jpg';
import Bg2 from '../assets/backstory2.jpg';
import Bg3 from '../assets/backstory3.jpg';

const images = [Bg1, Bg2, Bg3];

// Komponen kecil untuk kursor mengetik
const BlinkingCursor = () => <span className="inline-block w-0.5 h-5 bg-teal-300 animate-pulse ml-1"></span>;

const Backstory = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const [selectedStoryId, setSelectedStoryId] = useState(storyChapters[0].id);
  const selectedStory = storyChapters.find(c => c.id === selectedStoryId);
  
  const typedContent = useTypewriter(selectedStory.content, 30);
  const progressPercentage = (selectedStory.id / storyChapters.length) * 100;

  return (
    <section id="backstory" className="relative min-h-screen w-full flex items-center scroll-mt-24">
      <div
        key={currentImageIndex}
        className="absolute inset-0 bg-cover bg-center animate-fadeIn"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div>
      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>

      <div className="relative z-10 container mx-auto px-6 py-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-teal-400">Jelajahi Sejarah DeltCraft</h2>
          <p className="text-lg text-gray-400 mt-2">Setiap blok memiliki cerita. Ungkap kisah di baliknya.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          
          <div className="w-full md:w-1/3 flex flex-col gap-2 relative">
            <div className="hidden md:block absolute w-0.5 h-full bg-gray-700 top-0 left-5 transform -translate-x-1/2"></div>
            {storyChapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => setSelectedStoryId(chapter.id)}
                className={`relative z-10 flex items-center w-full text-left p-3 rounded-lg transition-all duration-300
                  ${selectedStoryId === chapter.id ? 'bg-teal-600/30' : 'hover:bg-gray-700/50'}`}
              >
                <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center mr-4 transition-all duration-300 ${
                  selectedStoryId === chapter.id ? 'bg-teal-500 text-white' : 'bg-gray-600 text-gray-300'
                }`}>
                  {chapter.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white">{chapter.era}</h3>
                </div>
              </button>
            ))}
          </div>

          <div className="w-full md:w-2/3 bg-gray-800/50 p-6 md:p-8 rounded-lg">
            {selectedStory && (
              <div key={selectedStory.id} className="animate-fadeIn">
                <h3 className="text-3xl font-bold text-teal-400 mb-4">{selectedStory.title}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
                  <div 
                    className="bg-teal-500 h-2 rounded-full transition-all duration-500 ease-out" 
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed min-h-[150px] sm:min-h-[125px]">
                  {typedContent}
                  {typedContent.length < selectedStory.content.length && <BlinkingCursor />}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Backstory;