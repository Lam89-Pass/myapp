import { contactData } from "../../data/contact";
import { projectsData } from "../../data/projects";
import { aboutData } from "../../data/aboutData"; 
import { articlesData } from "../../data/articles";
import fs from 'fs';
import path from 'path';

export class PortfolioService {
  
  static getContact() {
    return contactData;
  }

  static getProjects() {
    return projectsData;
  }

  static getEducation() {
    return aboutData.education;
  }

  static getExperience() {
    return aboutData.experience;
  }

  static getSkills() {
    return aboutData.skills;
  }

  static getProfileText() {
    return aboutData.profileText;
  }

  static getArticles() {
    return articlesData;
  }

  static getActivityImages() {
    try {
      const animatedDirPath = path.join(process.cwd(), 'public', 'animated');
      if (!fs.existsSync(animatedDirPath)) return [];
      
      const files = fs.readdirSync(animatedDirPath);
      return files.filter(file => /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(file));
    } catch (error) {
      console.error("Gagal scan folder animated:", error);
      return [];
    }
  }
}