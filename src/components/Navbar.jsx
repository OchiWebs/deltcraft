import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Home', 'Backstory', 'Gallery', 'Server IP'];

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-white tracking-wider">
          Delt<span className="text-teal-400">Craft</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`} className="text-gray-300 hover:text-teal-400 transition-colors duration-300">
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pt-2 pb-4 flex flex-col space-y-3">
          {menuItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-teal-400 transition-colors duration-300">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;