"use client";

import React, { useRef } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects = [] }: ProjectsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="relative py-24 px-6 max-w-7xl mx-auto" aria-labelledby="projects-heading">
      
      <div data-aos-delay="200" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <h2 id="projects-heading" className="text-4xl font-extrabold text-[#202124] tracking-tight mb-4">
            Proyek Pilihan
          </h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed">
            Eksplorasi solusi digital yang dibangun dengan fokus pada performa dan keamanan.
          </p>
        </div>

        {projects.length > 3 && (
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="p-4 rounded-full bg-white border border-slate-200 shadow-sm hover:bg-blue-50 hover:border-blue-200 hover:text-google-blue transition-all"
              aria-label="Geser ke kiri"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-4 rounded-full bg-white border border-slate-200 shadow-sm hover:bg-blue-50 hover:border-blue-200 hover:text-google-blue transition-all"
              aria-label="Geser ke kanan"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        )}
      </div>

      <div  data-aos-delay="200"
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-2 px-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project) => (
          <article 
            key={project.id} 
            className="group flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] snap-start bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500"
          >
            <div className="relative aspect-video overflow-hidden rounded-t-[2.5rem] bg-slate-50">
              <img 
                src={project.image || "https://picsum.photos/seed/code/800/450"} 
                alt={`Tampilan proyek ${project.title}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>

            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold rounded-lg border border-slate-100 uppercase tracking-widest">
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-[#202124] mb-3 group-hover:text-google-blue transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                {project.description}
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" className="flex items-center gap-2 text-slate-700 font-bold text-sm hover:text-google-blue transition-colors">
                    GitHub
                  </a>
                )}
                
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    className="ml-auto flex items-center gap-2 bg-google-blue text-white px-5 py-2.5 rounded-2xl text-sm font-bold shadow-md hover:bg-blue-700 transition-all active:scale-95"
                  >
                    Live Demo
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}