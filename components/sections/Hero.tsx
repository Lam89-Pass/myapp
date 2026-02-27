import React from 'react';

export default function Hero({ contact }: { contact: any }) {
  const name = contact?.name || "Muhamad Nur Salam";
  
  return (
    <section id="home" className="relative pt-40 md:pt-44 pb-20 overflow-hidden min-h-[85vh] flex items-center">
      <div className="w-[95%] max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-8">
        
        <div className="flex-1 text-center md:text-left">
                    <div className="group inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-50/80 border border-blue-100 hover:bg-blue-100 transition-colors cursor-default">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-google-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-google-blue"></span>
            </span>
            <span className="text-google-blue font-bold text-xs tracking-wide uppercase">
              Tersedia untuk Kolaborasi & Proyek
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2 leading-tight text-[#202124]">
            Halo, Saya <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              {name}
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-semibold text-slate-700 mb-5">
            📚 Edukasi | AI | Coding | IT Student
          </h2>
          <p className="text-lg text-[#5f6368] mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Teknologi baru seperti <strong className="text-google-blue font-semibold">AI, IoT, dan Blockchain </strong>membentuk masa depan, jadilah bagian dari inovasi tersebut.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a 
              href="#projects" 
              aria-label="Lihat Proyek Portofolio Muhamad Nur Salam"
              className="bg-google-blue text-white px-8 py-3.5 rounded-full font-bold shadow-[0_4px_14px_0_rgba(26,115,232,0.39)] hover:shadow-[0_6px_20px_rgba(26,115,232,0.23)] hover:-translate-y-1 transition-all duration-300"
            >
              Lihat Proyek Saya
            </a>
            <a 
              href="#about" 
              aria-label="Baca Profil Muhamad Nur Salam"
              className="bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-full font-bold shadow-sm hover:border-google-blue hover:text-google-blue hover:-translate-y-1 transition-all duration-300"
            >
              Tentang Saya
            </a>
          </div>
        </div>

        <div className="flex-1 relative flex justify-center md:justify-end lg:justify-center mt-10 md:mt-0">
          <div className="relative inline-block group">
            
            <div className="relative z-10 bg-white p-2 md:p-3 rounded-2xl shadow-xl rotate-3 group-hover:rotate-0 transition-all duration-500 hover:shadow-2xl">
              <img 
                src="/assets/profile.png" 
                alt="Foto Profil Muhamad Nur Salam, Mahasiswa Teknik Informatika UNPAS" 
                width="340"
                height="340"
                className="w-full max-w-[280px] md:max-w-[340px] rounded-xl shadow-inner object-cover bg-slate-50"
              />
            </div>
            <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 text-4xl md:text-5xl animate-float drop-shadow-md z-20 hover:scale-125 transition-transform cursor-default" title="Web Development">💻</div>
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 text-4xl md:text-5xl animate-float [animation-delay:1s] drop-shadow-md z-20 hover:scale-125 transition-transform cursor-default" title="Inovasi">✨</div>
            <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 text-4xl md:text-5xl animate-float [animation-delay:2s] drop-shadow-md z-20 hover:scale-125 transition-transform cursor-default" title="Cyber Security">🛡️</div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 text-4xl md:text-5xl animate-float [animation-delay:0.5s] drop-shadow-md z-20 hover:scale-125 transition-transform cursor-default" title="Game Creation">🚀</div>
          </div>
        </div>

      </div>
    </section>
  );
}