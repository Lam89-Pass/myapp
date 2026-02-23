export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-slate-100 bg-white">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-900 font-bold text-xl">MNS.</div>
        <p className="text-slate-500 text-sm text-center">
          © 2026 Muhamad Nur Salam. Dibuat dengan Next.js & Tailwind CSS.
        </p>
        <div className="flex gap-6 text-slate-400 text-sm">
          <a href="#" className="hover:text-blue-600">Github</a>
          <a href="#" className="hover:text-blue-600">Twitter</a>
        </div>
      </div>
    </footer>
  );
}