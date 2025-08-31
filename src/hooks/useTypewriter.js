import { useState, useEffect } from 'react';

// Custom hook untuk efek mengetik
const useTypewriter = (text, speed = 50) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText(''); // Reset teks setiap kali teks sumber berubah
    if (text) {
      let i = 0;
      const intervalId = setInterval(() => {
        // Hentikan interval jika sudah selesai
        if (i >= text.length) {
          clearInterval(intervalId);
          return;
        }
        setDisplayedText(prev => prev + text.charAt(i));
        i++;
      }, speed);
      
      // Cleanup function untuk membersihkan interval
      return () => clearInterval(intervalId);
    }
  }, [text, speed]);

  return displayedText;
};

export default useTypewriter;