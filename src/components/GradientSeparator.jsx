import React from 'react';

const GradientSeparator = () => {
  return (
    // Div ini berfungsi sebagai garis horizontal tipis dengan efek gradasi
    // dari transparan di kiri, ke warna teal di tengah, lalu transparan lagi di kanan.
    <div className="h-px w-full bg-gradient-to-r from-transparent via-teal-600 to-transparent"></div>
  );
};

export default GradientSeparator;