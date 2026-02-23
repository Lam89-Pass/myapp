"use client";

import React, { useState } from 'react';
// IMPORT DATA DARI FOLDER BACKEND KAMU
import { aboutData } from '@/backend/data/aboutData';
// --- Komponen Interaktif Timeline Accordion ---
const TimelineItem = ({ item }: { item: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="relative pl-8 md:pl-0">
      <div className="md:hidden absolute left-[11px] top-8 bottom-[-2rem] w-[2px] bg-blue-100"></div>

      <div className={`relative bg-white/90 backdrop-blur-sm rounded-2xl border ${isOpen ? 'border-google-blue shadow-md' : 'border-slate-200 shadow-sm'} overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300 mb-6 group`}>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className="w-full text-left px-5 md:px-6 py-5 flex gap-4 items-center focus:outline-none"
        >
          <div className="hidden md:flex flex-shrink-0 w-12 h-12 items-center justify-center rounded-full bg-blue-50 text-google-blue text-xl group-hover:scale-110 transition-transform">
            {item.icon}
          </div>
          
          <div className="flex-1 pr-4">
            <h4 className="text-lg font-bold text-[#202124] group-hover:text-google-blue transition-colors">{item.title}</h4>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mt-1">
              <span className="text-sm font-semibold text-google-blue">{item.subtitle}</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full w-fit">{item.date}</span>
            </div>
          </div>

          <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 border border-slate-100 transform transition-transform duration-300 ${isOpen ? 'rotate-180 bg-blue-100 text-google-blue' : 'text-slate-400 group-hover:text-google-blue'}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </button>
        
        <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-slate-50/50`}>
          <div className="px-5 md:px-6 pb-6 pt-2 border-t border-slate-100 text-[#5f6368] text-sm leading-relaxed">
            
            {item.highlight && (
              <div className="mb-3 p-3 bg-blue-50/50 rounded-xl border border-blue-100">
                <p className="font-semibold text-google-blue">{item.highlight}</p>
              </div>
            )}

            {item.description && (
              <p className="mb-3 font-medium text-slate-600">{item.description}</p>
            )}

            {item.listTitle && (
              <p className="mb-2 font-bold text-slate-700">{item.listTitle}</p>
            )}

            {item.listItems && item.listItems.length > 0 && (
              <ul className={`space-y-2 ${typeof item.listItems[0] === 'string' ? 'list-disc ml-5 marker:text-google-blue' : 'list-none'}`}>
                {item.listItems.map((listItem: any, idx: number) => (
                  typeof listItem === 'string' ? (
                    <li key={idx}><span className="text-slate-700">{listItem}</span></li>
                  ) : (
                    <li key={idx} className="flex gap-2">
                      <span className="text-google-blue">{listItem.icon}</span> 
                      <span>{listItem.text}</span>
                    </li>
                  )
                ))}
              </ul>
            )}

          </div>
        </div>
      </div>
    </article>
  );
};

// --- Komponen Utama ---
export default function About() {
  // Kita langsung menggunakan 'aboutData' yang di-import dari folder data
  const data = aboutData;

  return (
    <section id="about" aria-label="Tentang Muhamad Nur Salam" className="relative py-24 px-6 max-w-6xl mx-auto">
      
      {/* 1. BAGIAN TENTANG SAYA */}
      <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white mb-16 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 relative overflow-hidden group">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl group-hover:bg-blue-400/20 transition-all duration-500"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl flex items-center justify-center text-2xl shadow-sm transform group-hover:-rotate-6 transition-transform">
              👨‍💻
            </div>
            <h2 className="text-3xl font-extrabold text-[#202124] tracking-tight">Tentang Saya</h2>
          </div>
          <p className="text-lg text-slate-600 leading-relaxed text-justify">
            {data.profileText}
          </p>
        </div>
      </div>

      {/* 2. BAGIAN PENDIDIKAN & PENGALAMAN */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
        
        {/* Kolom Kiri: Pendidikan */}
        <div>
          <div className="flex items-center gap-3 mb-8 px-2">
            <span className="text-2xl bg-blue-50 p-2 rounded-xl text-blue-600">🎓</span>
            <h3 className="text-2xl font-bold text-[#202124]">Pendidikan & Aktivitas</h3>
          </div>
          <div className="relative border-l-2 border-slate-100 ml-4 md:ml-0 md:border-transparent md:pl-0">
            {data.education.map((item: any) => (
              <TimelineItem key={`edu-${item.id}`} item={item} />
            ))}
          </div>
        </div>

        {/* Kolom Kanan: Pengalaman */}
        <div>
          <div className="flex items-center gap-3 mb-8 px-2">
            <span className="text-2xl bg-blue-50 p-2 rounded-xl text-blue-600">💼</span>
            <h3 className="text-2xl font-bold text-[#202124]">Pengalaman Kerja</h3>
          </div>
          <div className="relative border-l-2 border-slate-100 ml-4 md:ml-0 md:border-transparent md:pl-0">
            {data.experience.map((item: any) => (
              <TimelineItem key={`exp-${item.id}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* 3. BAGIAN SKILLS */}
      <div className="relative z-10">
        <div className="flex items-center justify-center gap-3 mb-10">
          <h3 className="text-3xl font-extrabold text-[#202124] text-center">Keahlian & Tools</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Hard Skills */}
          <div className="bg-white/80 backdrop-blur-md p-7 rounded-3xl border border-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">💻</div>
            <h4 className="text-xl font-bold text-slate-800 mb-4">Hard Skills</h4>
            <div className="flex flex-wrap gap-2">
              {data.skills.hardSkills.map((skill: string) => (
                <span key={skill} className="bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg text-sm font-medium hover:border-google-blue hover:text-google-blue transition-colors cursor-default shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Soft Skills */}
          <div className="bg-white/80 backdrop-blur-md p-7 rounded-3xl border border-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">🤝</div>
            <h4 className="text-xl font-bold text-slate-800 mb-4">Soft Skills</h4>
            <div className="flex flex-wrap gap-2">
              {data.skills.softSkills.map((skill: string) => (
                <span key={skill} className="bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg text-sm font-medium hover:border-emerald-500 hover:text-emerald-600 transition-colors cursor-default shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: Tools */}
          <div className="bg-white/80 backdrop-blur-md p-7 rounded-3xl border border-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">🛠️</div>
            <h4 className="text-xl font-bold text-slate-800 mb-4">Tools & Tech</h4>
            <div className="flex flex-wrap gap-2">
              {data.skills.tools.map((tool: string) => (
                <span key={tool} className="bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg text-sm font-medium hover:border-amber-500 hover:text-amber-600 transition-colors cursor-default shadow-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}