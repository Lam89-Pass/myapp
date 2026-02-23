import Card from "../ui/Card";

interface ProjectsProps {
  projects: any[];
}

export default function Projects({ projects = [] }: ProjectsProps) {
  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Proyek <span className="text-blue-600">Terpilih</span>
            </h2>
            <p className="text-lg text-slate-500 mt-4">
              Eksplorasi saya dalam membangun ekosistem di KDS Studio hingga solusi cerdas untuk pertanian.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-sm font-bold text-slate-300 tracking-[0.2em] uppercase">Development Showcase</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.length > 0 ? projects.map((project) => (
            <Card 
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.techStack}
              category={project.category}
              link={project.link}
            />
          )) : (
            <p className="text-slate-400 italic">Belum ada proyek yang dimuat.</p>
          )}
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10 translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
}