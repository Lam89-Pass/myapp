interface ExperienceProps {
  experiences: any[];
}

export default function Kegiatan({ experiences = [] }: ExperienceProps) {
  return (
    <section id="experience" className="py-32 px-6 bg-white/40 border-y border-slate-100">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Jejak & Kontribusi</h2>
          <p className="text-slate-500">Pengalaman organisasi dan analisis profesional Muhamad Nur Salam.</p>
        </div>

        <div className="space-y-12">
          {experiences.length > 0 ? experiences.map((exp, index) => (
            <div key={index} className="group relative pl-12 border-l-2 border-slate-100 hover:border-blue-600 transition-all duration-500">
              {/* Dot Timeline */}
              <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-white border-4 border-slate-100 group-hover:border-blue-600 group-hover:scale-125 transition-all duration-300"></div>
              
              <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest rounded-full mb-2">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900">{exp.title}</h3>
                    <p className="text-lg font-medium text-blue-600/80">{exp.organization}</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </div>
            </div>
          )) : (
            <p className="text-center text-slate-400">Data kegiatan kosong.</p>
          )}
        </div>
      </div>
    </section>
  );
}