import React from 'react';
import { useInView } from 'react-intersection-observer';

// Komponen ini akan membungkus setiap section utama kita
// Props `id` dan `className` akan diteruskan ke elemen section
const AnimatedSection = ({ children, id, className }) => {
  const { ref, inView } = useInView({
    // Opsi: animasi hanya berjalan sekali saat pertama kali terlihat
    triggerOnce: true,
    // Opsi: persentase elemen yang harus terlihat sebelum animasi berjalan
    threshold: 0.1, 
  });

  return (
    <section
      ref={ref}
      id={id}
      // Gabungkan className yang ada dengan class animasi
      className={`${className} transition-all duration-1000 ease-out
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;