"use client";

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-7 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="flex gap-6 mb-4">
          <a href="https://tiktok.com/@kalyn_051" target="_blank" className="text-slate-400 hover:text-google-blue transition-colors">
            <span className="text-sm font-bold uppercase tracking-widest">TikTok</span>
          </a>
          <a href="https://linkedin.com/in/muhamadnursalam" target="_blank" className="text-slate-400 hover:text-google-blue transition-colors">
            <span className="text-sm font-bold uppercase tracking-widest">LinkedIn</span>
          </a>
          <a href="https://instagram.com/lam.xyz" target="_blank" className="text-slate-400 hover:text-google-blue transition-colors">
            <span className="text-sm font-bold uppercase tracking-widest">Instagram</span>
          </a>
        </div>
        <p className="text-slate-400 text-[11px] font-medium tracking-wide">
          © {currentYear} — Dibuat oleh <a href="https://instagram.com/lam.xyz" target="_blank" className="text-google-blue">Muhamad Nur Salam</a>
        </p>

      </div>
    </footer>
  );
}