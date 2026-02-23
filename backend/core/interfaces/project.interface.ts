export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  link?: string;
  category: "Web" | "Game" | "Cybersecurity";
}