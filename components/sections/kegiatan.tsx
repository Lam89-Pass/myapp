"use client";

import React from 'react';

interface KegiatanProps {
  images: string[];
}

export default function Kegiatan({ images = [] }: KegiatanProps) {
  const marqueeImages = [...images, ...images, ...images, ...images];

  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#202124] tracking-tight">
          Dokumentasi Kegiatan
        </h2>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="animate-marquee-slow flex gap-6 py-12 px-4 hover:[animation-play-state:paused]">
          {marqueeImages.map((imgName, index) => (
            <div 
              key={`${imgName}-${index}`}
              className={`group relative flex-shrink-0 w-60 md:w-72 bg-white p-3 shadow-lg transform transition-all duration-700 hover:scale-110 hover:z-50 hover:rotate-0 cursor-pointer
                ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} 
                ${index % 3 === 0 ? 'translate-y-2' : '-translate-y-2'}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-50 border border-slate-100 rounded-sm">
                <img 
                  src={`/animated/${imgName}`} 
                  alt={imgName}
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
                />
                
                <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                  <p className="text-white font-bold text-sm md:text-base tracking-wide uppercase">
                    {imgName.split('.')[0].replace(/-/g, ' ')}
                  </p>
                </div>
              </div>

              <div className="pt-5 pb-1 flex flex-col items-center">
                <div className="w-12 h-1 bg-blue-100 rounded-full mb-1 opacity-50"></div>
                <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-bold">Documentation</span>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#f8faff] via-[#f8faff]/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#f8faff] via-[#f8faff]/80 to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}