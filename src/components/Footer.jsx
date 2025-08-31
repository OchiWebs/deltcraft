import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} DeltCraft. All Rights Reserved.</p>
        <p className="text-sm mt-2">Dibuat dengan ❤️ untuk komunitas Minecraft.</p>
      </div>
    </footer>
  );
};

export default Footer;