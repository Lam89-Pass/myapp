import React from 'react';

// Definisi tipe data agar sesuai dengan data Muhamad Nur Salam
interface Education {
  school: string;
  major: string;
  period: string;
  description?: string;
}

interface Organization {
  name: string;
  role: string;
  period: string;
  description: string;
}

interface AboutProps {
  education?: Education[];
  organizations?: Organization[];
  skills?: string[];
}

export default function About({ education = [], organizations = [], skills = [] }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-white/50 relative z-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Section Pendidikan - Universitas Pasundan */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-slate-900 border-b-4 border-blue-600 inline-block">
              Pendidikan
            </h2>
            {education.length > 0 ? (
              education.map((edu, i) => (
                <div key={i} className="mb-8 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-blue-600">{edu.school}</h3>
                  <p className="font-semibold text-slate-800">{edu.major}</p>
                  <p className="text-sm text-slate-500 mt-1">{edu.period}</p>
                  {edu.description && <p className="text-sm text-slate-600 mt-3">{edu.description}</p>}
                </div>
              ))
            ) : (
              <p className="text-slate-400 italic">Data pendidikan belum tersedia.</p>
            )}
          </div>

          {/* Section Organisasi - Techinnovation & BYPAS */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-slate-900 border-b-4 border-blue-600 inline-block">
              Organisasi
            </h2>
            <div className="space-y-6">
              {/* Optional chaining (?.) dan fallback [] memastikan tidak error jika data undefined */}
              {organizations && organizations.length > 0 ? (
                organizations.map((org, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-blue-200 transition-colors">
                    <h3 className="text-lg font-bold text-slate-900">{org.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-blue-600 font-medium text-sm">{org.role}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-xs text-slate-500">{org.period}</span>
                    </div>
                    <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                      {org.description}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-slate-400 italic">Data organisasi belum tersedia.</p>
              )}
            </div>
          </div>

        </div>

        {/* Section Skills Singkat */}
        {skills.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-8 text-center text-slate-800">Keahlian Utama</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, i) => (
                <span key={i} className="px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-medium shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}