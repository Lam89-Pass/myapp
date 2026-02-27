import { PortfolioService } from "@/backend/core/services/PortfolioService";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Kegiatan from "@/components/sections/kegiatan";
import Articles from "@/components/sections/Articles"; 
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const activityImages = PortfolioService.getActivityImages();
  
  const articles = PortfolioService.getArticles(); 

  return (
    <main className="relative">
      <div className="relative z-10">
        <Hero contact={PortfolioService.getContact()} />
        
        <About 
          education={PortfolioService.getEducation()} 
          organizations={PortfolioService.getExperience()} 
          skills={PortfolioService.getSkills()} 
        />
        
        <Kegiatan images={activityImages} />
        
        <Projects projects={PortfolioService.getProjects()} />

        <Articles articles={articles} />
        
<Contact contact={PortfolioService.getContact()} />

      </div>
    </main>
  );
}