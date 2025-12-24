export interface Project {
  id: string;
  title: string;
  descriptionKey: string; 
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  featured: boolean; 
}

export const projectsData: Project[] = [
  {
    id: 'agenda-ai',
    title: 'Agenda AI',
    descriptionKey: 'proj1-desc',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Gemini AI'],
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000', 
    githubUrl: '#',
    featured: true
  },
  {
    id: 'quiz-app',
    title: 'Quiz App',
    descriptionKey: 'proj2-desc',
    technologies: ['React', 'FastAPI', 'PostgreSQL'],
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000',
    githubUrl: '#',
    featured: true
  }
];