'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 dark:bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/20 dark:bg-purple-600/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
                <div className="relative group mb-8">
          <h1 className="text-[140px] sm:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 drop-shadow-2xl select-none">
            404
          </h1>
                    <div className="absolute top-1/4 -right-2 sm:-right-8 bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold px-5 py-2 rounded-2xl shadow-xl transform rotate-12 animate-bounce border border-slate-100 dark:border-slate-700">
            Oops! 🚀
          </div>
        </div>
        <div className="max-w-xl space-y-6 -mt-8 sm:-mt-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
            Kamu Tersesat di Ruang Hampa
          </h2>
          
          <p className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl font-medium leading-relaxed">
            Halaman yang kamu cari sedang dalam tahap maintenance. Mari kembali ke jalur yang benar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            
            <Link 
              href="/"
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Kembali ke Beranda
            </Link>

            <button 
              onClick={() => window.history.back()}
              className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5 mr-2 text-slate-500 group-hover:-rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
              Halaman Sebelumnya
            </button>
            
          </div>
        </div>
      </div>
    </main>
  );
}