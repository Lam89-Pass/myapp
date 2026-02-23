export default function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-50">
      <nav className="bg-white/80 backdrop-blur-md border border-white/20 shadow-lg rounded-full px-6 py-3 flex justify-between items-center">
        <div className="font-bold text-slate-800 text-lg tracking-tighter">MNS.</div>
        <ul className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <li><a href="#about" className="hover:text-blue-600 transition">Tentang</a></li>
          <li><a href="#experience" className="hover:text-blue-600 transition">Pengalaman</a></li>
          <li><a href="#projects" className="hover:text-blue-600 transition">Proyek</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition">Kontak</a></li>
        </ul>
        <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-blue-700 transition">
          Hire Me
        </a>
      </nav>
    </div>
  );
}