"use client";

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 py-12 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center gap-8">

        {/* --- Hak Cipta & Kredit --- */}
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-slate-400 text-xs font-semibold tracking-widest uppercase">
            © {currentYear} Muhamad Nur Salam. All Rights Reserved.
          </p>
          
          {/* Bagian Credit dengan Link */}
          <p className="text-slate-400/80 text-[11px] font-medium tracking-wider flex items-center justify-center gap-1.5 flex-wrap">
            Dibuat dengan <span className="text-red-500 animate-pulse text-xs">❤️</span> oleh 
            <a 
              href="https://googlestudentambassador.id" 
              target="_blank" 
              rel="noreferrer" 
              className="text-blue-600 font-bold hover:underline transition-all"
            >
              Muhamad Nur Salam
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}