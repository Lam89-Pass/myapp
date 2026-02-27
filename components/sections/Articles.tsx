"use client";

import React from 'react';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  tags: string[];
}

export default function Articles({ articles = [] }: { articles: Article[] }) {
  return (
    <section id="articles" className="relative py-24 px-6 max-w-7xl mx-auto" aria-labelledby="articles-heading">
      
      <div className="text-center mb-16">
        <h2 id="articles-heading" className="text-4xl md:text-5xl font-extrabold text-[#202124] tracking-tight mb-4">
          Artikel & Catatan
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
          Berbagi wawasan seputar pengembangan web, keamanan siber, dan eksplorasi teknologi terbaru.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <article 
            key={article.id}
            className="group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img 
                src={article.image || "https://picsum.photos/seed/article/800/500"} 
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-md text-google-blue px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-white/20">
                  {article.category}
                </span>
              </div>
            </div>

            <div className="p-7 flex flex-col flex-1">
              <div className="flex items-center gap-3 text-slate-400 text-xs font-bold mb-4 uppercase tracking-widest">
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                </time>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-google-blue transition-colors leading-snug">
                <a href={`/artikel/${article.slug}`}>
                  {article.title}
                </a>
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                {article.excerpt}
              </p>

              <div className="mt-auto pt-6 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-bold text-slate-400 border border-slate-100 px-2 py-0.5 rounded-md group-hover:border-blue-100 group-hover:text-blue-400 transition-colors">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <a 
              href={`/artikel/${article.slug}`}
              className="px-7 py-4 bg-slate-50 border-t border-slate-50 text-google-blue text-sm font-bold flex items-center justify-between group-hover:bg-blue-50 transition-colors"
              aria-label={`Baca selengkapnya tentang ${article.title}`}
            >
              Baca Selengkapnya
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </article>
        ))}
      </div>
      <div className="mt-16 text-center">
        <a 
          href="/artikel" 
          className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 text-slate-700 px-8 py-3 rounded-full font-bold hover:border-google-blue hover:text-google-blue transition-all active:scale-95"
        >
          Lihat Semua Artikel
        </a>
      </div>
    </section>
  );
}