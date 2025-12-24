export interface Project {
  id: string;
  title: string;
  description: string; 
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  featured: boolean;
}

const images = {
    agenda: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000',
    quiz: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000'
};

export const projectsData = {
  es: [
    {
      id: 'agenda-ai',
      title: 'Agenda AI',
      description: 'Asistente personal inteligente que ayuda a organizar tareas...',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Gemini AI'],
      imageUrl: images.agenda, 
      githubUrl: '#',
      featured: true
    },
    {
      id: 'quiz-app',
      title: 'Quiz App',
      description: 'Plataforma interactiva de preguntas y respuestas...',
      technologies: ['React', 'FastAPI', 'PostgreSQL'],
      imageUrl: images.quiz,
      githubUrl: '#',
      featured: true
    }
  ],
  en: [
    {
      id: 'agenda-ai',
      title: 'Agenda AI',
      description: 'Intelligent personal assistant helping organize tasks...',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Gemini AI'],
      imageUrl: images.agenda, 
      githubUrl: '#',
      featured: true
    },
    {
      id: 'quiz-app',
      title: 'Quiz App',
      description: 'Interactive Q&A platform...',
      technologies: ['React', 'FastAPI', 'PostgreSQL'],
      imageUrl: images.quiz,
      githubUrl: '#',
      featured: true
    }
  ]
};