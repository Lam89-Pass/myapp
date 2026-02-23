import React from 'react';
// Import komponen Button agar tidak terjadi ReferenceError
import Button from "../ui/Button";

interface HeroProps {
  contact: {
    name: string;
    nickname: string;
    bio: string;
  };
}

export default function Hero({ contact }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 text-center overflow-hidden min-h-[80vh] flex flex-col justify-center">
      {/* Konten Utama */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-slate-900 mb-6 drop-shadow-sm">
          {contact.name}
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
          {contact.bio} 
          <span className="block mt-2 font-medium text-blue-600">
            Teknik Informatika Universitas Pasundan
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button text="Lihat Proyek" link="#projects" variant="primary" />
          <Button text="Hubungi Saya" link="#contact" variant="outline" />
        </div>
      </div>

      {/* Dekorasi Ikon Melayang (GSA Style) */}
      {/* Ikon-ikon ini menggunakan class animate-float yang sudah kita buat di globals.css */}
      <div className="hidden md:block absolute top-1/4 left-10 lg:left-32 text-6xl animate-float pointer-events-none">
        🚀
      </div>
      <div className="hidden md:block absolute top-1/3 right-10 lg:right-32 text-6xl animate-float [animation-delay:1s] pointer-events-none">
        🛡️
      </div>
      <div className="hidden md:block absolute bottom-20 left-20 lg:left-48 text-6xl animate-float [animation-delay:1.5s] pointer-events-none">
        🎮
      </div>
      <div className="hidden md:block absolute bottom-32 right-20 lg:right-48 text-6xl animate-float [animation-delay:0.5s] pointer-events-none">
        💻
      </div>

      {/* Efek Blur Dekoratif di Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl max-h-[400px] bg-blue-100/30 blur-[120px] rounded-full -z-10"></div>
    </section>
  );
}