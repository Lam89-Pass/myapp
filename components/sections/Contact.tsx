export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-blue-600 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-6">Mari Berkolaborasi</h2>
        <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
          Tertarik untuk membangun proyek web, game di Roblox, atau sekadar berdiskusi tentang keamanan siber?
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:email@kamu.com" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition">
            Kirim Email
          </a>
          <a href="#" className="bg-blue-700 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition border border-blue-500">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}