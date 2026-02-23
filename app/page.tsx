import { PortfolioService } from "@/backend/core/services/PortfolioService";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Kegiatan from "@/components/sections/kegiatan";
import Contact from "@/components/sections/Contact";

export default function Home() {
  // Inisialisasi Service untuk ambil data dari backend/data/
  const service = new PortfolioService();
  
  return (
    <main className="relative">
      {/* Wrapper tambahan untuk background biar konten lebih pop-up */}
      <div className="relative z-10">
        <Hero 
          contact={service.getContact()} 
        />
        
<About 
  education={service.getEducation()} 
  organizations={service.getExperience()} // Pastikan ini mengambil data dari experience.ts yang berisi Techinnovation/BYPAS
  skills={service.getSkills()} 
/>
        
        <Kegiatan 
          experiences={service.getExperience()} 
        />
        
        <Projects 
          projects={service.getProjects()} 
        />
        
        <Contact />
      </div>
    </main>
  );
}