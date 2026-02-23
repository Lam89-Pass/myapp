import { contactData } from "../../data/contact";
import { educationData } from "../../data/education";
import { experienceData } from "../../data/experience";
import { projectsData } from "../../data/projects"; // Sesuaikan nama variabel exportnya
import { skillsData } from "../../data/skills";

export class PortfolioService {
  public getContact() {
    return contactData;
  }

  public getEducation() {
    return educationData;
  }

  public getExperience() {
    return experienceData;
  }

  public getProjects() {
    return projectsData;
  }

  public getSkills() {
    return skillsData;
  }

  // Khusus buat metadata SEO di layout.tsx
  public getMetadata() {
    return {
      title: `${contactData.name} | Portfolio Teknik Informatika UNPAS`,
      description: contactData.bio,
      keywords: ["Muhamad Nur Salam", "Muhamad Nur Salam UNPAS", "KDS Studio", "AgriSmart"]
    };
  }
}