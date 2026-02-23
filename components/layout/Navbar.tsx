"use client";

import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Tentang", href: "#about" },
    { name: "Proyek", href: "#projects" },
    { name: "Artikel", href: "/artikel" },
    { name: "Kegiatan", href: "#experience" },
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50">
      <nav className="bg-white/80 backdrop-blur-md border border-white/20 shadow-lg rounded-full px-5 md:px-8 py-2.5 md:py-3 flex justify-between items-center transition-all duration-300">
        
        {/* Logo ditarik lebih ke kiri dengan -ml-2 md:-ml-5 */}
        <a href="#home" className="flex items-center gap-3 cursor-pointer group z-50 -ml-2 md:-ml-5">
          <div className="relative flex items-center justify-center group-hover:scale-105 transition-all duration-300">
            <img 
              src="/assets/logo1.png" 
              alt="Logo Muhamad Nur Salam" 
              className="h-14 md:h-16 w-auto object-contain drop-shadow-sm -my-4"
            />
          </div>
          <span className="text-sm md:text-base font-bold text-slate-500 group-hover:text-google-blue transition-colors duration-300">
            Muhamad Nur Salam
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-sm font-semibold text-[#5f6368]">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <a href={link.href} className="group-hover:text-google-blue transition-colors duration-300 block py-1">
                {link.name}
              </a>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-google-blue transition-all duration-300 group-hover:w-full rounded-full"></span>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button ditarik lebih ke kanan dengan lg:-mr-5 */}
        <a 
          href="#contact" 
          className="hidden lg:inline-block bg-google-blue text-white px-7 py-2 md:py-2.5 rounded-full text-sm font-bold shadow-md hover:bg-blue-700 hover:shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 lg:-mr-5"
        >
          Hubungi Saya
        </a>

        {/* Hamburger Toggle Button (HP) ditarik ke kanan dengan -mr-2 md:-mr-5 */}
        <button 
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50 -mr-2 md:-mr-5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`block w-6 h-0.5 bg-slate-800 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-slate-800 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-slate-800 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden absolute top-[110%] left-0 w-full bg-white/95 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl overflow-hidden transition-all duration-300 origin-top ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col p-4 space-y-2 text-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="block text-base font-semibold text-slate-800 hover:text-google-blue hover:bg-blue-50 rounded-xl transition-colors py-3"
                onClick={() => setIsOpen(false)} 
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="pt-4 pb-2 border-t border-slate-100 mt-2">
            <a 
              href="#contact" 
              className="inline-block bg-google-blue text-white w-[80%] py-3 rounded-full text-sm font-bold shadow-md active:scale-95 transition-transform"
              onClick={() => setIsOpen(false)}
            >
              Hubungi Saya
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}