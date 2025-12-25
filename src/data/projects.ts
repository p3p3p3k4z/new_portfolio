export interface Project {
  id: string;
  title: string;
  description: string; 
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  featured: boolean;
}

// 1. Centralizamos las imágenes reales de tus repositorios
const images = {
    agenda: 'https://github.com/p3p3p3k4z/Agenda-AI/raw/main/public/preview.png',
    quiz: 'https://github.com/p3p3p3k4z/quiz-app/raw/main/public/preview3.png',
    todo: 'https://github.com/p3p3p3k4z/todo-list/raw/main/data/img/TAREAS.png',
    algo: 'https://github.com/p3p3p3k4z/Proyecto-Ordenamientos/raw/main/preview/ventana_grafica.png',
    procesador: 'https://github.com/p3p3p3k4z/Procesador/raw/instruccion_I_v2/captura_top.png',
    linux: 'https://github.com/p3p3p3k4z/script_Linux/raw/main/inicio.png',
    cozobi: 'https://f1oxyz.github.io/cozobi.github.io/assets/img/portfolio/logo%20copy.png',
    pettiapp: 'https://github.com/p3p3p3k4z/PettiApp/raw/main/info_proyecto/capturas/inicio.png',
    tienda: 'https://github.com/p3p3p3k4z/tiendita/raw/main/web/public/preview.png'
};

export const projectsData = {
  // 2. Data en Español
  es: [
    {
      id: 'agenda-ai',
      title: 'Agenda AI',
      description: 'Aplicación web full-stack para la gestión de agendas personales, incorporando funcionalidades de inteligencia artificial para optimizar la interacción y la organización del usuario.',
      technologies: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Prisma', 'Redux', 'Docker', 'Gemini API'],
      imageUrl: images.agenda, 
      githubUrl: 'https://github.com/p3p3p3k4z/Agenda-AI.git',
      featured: true
    },
    {
      id: 'quiz-app',
      title: 'Quiz App',
      description: 'Plataforma full-stack que usa IA para generar quizzes y feedback. Gestiona el rendimiento de alumnos y el seguimiento de profesores.',
      technologies: ['HTML', 'CSS', 'Typescript', 'Node.js', 'Express.js', 'Docker', 'AI API'],
      imageUrl: images.quiz,
      githubUrl: 'https://github.com/p3p3p3k4z/quiz-app',
      featured: true
    },
    {
      id: 'todo-list',
      title: 'Todo List',
      description: 'Gestión de tareas a través de consola, API con FastAPI e interfaz web con Flask. Las tareas se organizan en diferentes baúles (JSON).',
      technologies: ['Python', 'FastAPI', 'Flask'],
      imageUrl: images.todo,
      githubUrl: 'https://github.com/p3p3p3k4z/todo-list.git',
      featured: true
    },
    {
      id: 'analisis-algoritmos',
      title: 'Análisis de Algoritmos',
      description: 'Herramienta en Python para analizar el rendimiento de algoritmos de ordenamiento con visualización en tiempo real y gráficos comparativos.',
      technologies: ['Python', 'Pygame', 'Matplotlib'],
      imageUrl: images.algo,
      githubUrl: 'https://github.com/p3p3p3k4z/Proyecto-Ordenamientos.git',
      featured: true
    },
    {
      id: 'procesador',
      title: 'Procesador VHDL',
      description: 'Procesador de un ciclo diseñado para la materia de Arquitectura de Computadoras, capaz de ejecutar pequeños programas.',
      technologies: ['VHDL', 'Digital Logic Design'],
      imageUrl: images.procesador,
      githubUrl: 'https://github.com/p3p3p3k4z/Procesador.git',
      featured: true
    },
    {
      id: 'script-linux',
      title: 'Script Linux',
      description: 'Asistente automatizado en Bash para la instalación y gestión de paquetes en sistemas Linux, optimizando entornos de desarrollo.',
      technologies: ['Bash', 'Linux'],
      imageUrl: images.linux,
      githubUrl: 'https://github.com/p3p3p3k4z/script_Linux.git',
      featured: true
    },
    {
      id: 'cozobi',
      title: 'Cozobi',
      description: 'App web con datos geoespaciales para mejorar la planificación agrícola. Proyecto ganador del NASA Space Apps Challenge.',
      technologies: ['HTML', 'JS', 'Python', 'Geo APIs'],
      imageUrl: images.cozobi,
      githubUrl: 'https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/nahual-code/?tab=project',
      featured: false
    },
    {
      id: 'pettiapp',
      title: 'PettiApp',
      description: 'Aplicación web para la gestión eficiente de una cafetería, permitiendo administrar inventarios y optimizar insumos.',
      technologies: ['PHP', 'MySQL', 'JS', 'HTML/CSS'],
      imageUrl: images.pettiapp,
      githubUrl: 'https://github.com/p3p3p3k4z/PettiApp.git',
      featured: false
    },
    {
      id: 'tienda-peluches',
      title: 'Tienda de Peluches',
      description: 'Mini tienda de peluches online con funcionalidades básicas de e-commerce, contenerizada con Docker.',
      technologies: ['React', 'Node.js', 'Express', 'Docker'],
      imageUrl: images.tienda,
      githubUrl: 'https://github.com/p3p3p3k4z/tiendita.git',
      featured: false
    }
  ],
  
  // 3. Data en Inglés
  en: [
    {
      id: 'agenda-ai',
      title: 'Agenda AI',
      description: 'Full-stack web application for personal agenda management, incorporating AI functionalities to optimize user organization.',
      technologies: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Prisma', 'Redux', 'Docker', 'Gemini API'],
      imageUrl: images.agenda, 
      githubUrl: 'https://github.com/p3p3p3k4z/Agenda-AI.git',
      featured: true
    },
    {
      id: 'quiz-app',
      title: 'Quiz App',
      description: 'Full-stack platform utilizing AI to generate quizzes and feedback. Manages student performance and teacher tracking.',
      technologies: ['HTML', 'CSS', 'Typescript', 'Node.js', 'Express.js', 'Docker', 'AI API'],
      imageUrl: images.quiz,
      githubUrl: 'https://github.com/p3p3p3k4z/quiz-app',
      featured: true
    },
    {
      id: 'todo-list',
      title: 'Todo List',
      description: 'Task management via console, FastAPI web API, and Flask web interface. Tasks are organized in JSON vaults.',
      technologies: ['Python', 'FastAPI', 'Flask'],
      imageUrl: images.todo,
      githubUrl: 'https://github.com/p3p3p3k4z/todo-list.git',
      featured: true
    },
    {
      id: 'analisis-algoritmos',
      title: 'Algorithm Analysis',
      description: 'Python tool to analyze sorting algorithm performance with real-time visualization and comparative graphs.',
      technologies: ['Python', 'Pygame', 'Matplotlib'],
      imageUrl: images.algo,
      githubUrl: 'https://github.com/p3p3p3k4z/Proyecto-Ordenamientos.git',
      featured: true
    },
    {
      id: 'procesador',
      title: 'VHDL Processor',
      description: 'Single-cycle processor designed for Computer Architecture course, capable of running small programs.',
      technologies: ['VHDL', 'Digital Logic Design'],
      imageUrl: images.procesador,
      githubUrl: 'https://github.com/p3p3p3k4z/Procesador.git',
      featured: true
    },
    {
      id: 'script-linux',
      title: 'Linux Script',
      description: 'Automated Bash assistant for installing and managing packages on Linux systems, optimizing dev environment setup.',
      technologies: ['Bash', 'Linux'],
      imageUrl: images.linux,
      githubUrl: 'https://github.com/p3p3p3k4z/script_Linux.git',
      featured: true
    },
    {
      id: 'cozobi',
      title: 'Cozobi',
      description: 'Web app integrating geospatial data for agricultural planning. NASA Space Apps Challenge project.',
      technologies: ['HTML', 'JS', 'Python', 'Geo APIs'],
      imageUrl: images.cozobi,
      githubUrl: 'https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/nahual-code/?tab=project',
      featured: false
    },
    {
      id: 'pettiapp',
      title: 'PettiApp',
      description: 'Web application for efficient cafeteria management, allowing inventory administration and supply optimization.',
      technologies: ['PHP', 'MySQL', 'JS', 'HTML/CSS'],
      imageUrl: images.pettiapp,
      githubUrl: 'https://github.com/p3p3p3k4z/PettiApp.git',
      featured: false
    },
    {
      id: 'tienda-peluches',
      title: 'Plushie Store',
      description: 'Mini online plushie store with basic e-commerce functionalities, containerized with Docker.',
      technologies: ['React', 'Node.js', 'Express', 'Docker'],
      imageUrl: images.tienda,
      githubUrl: 'https://github.com/p3p3p3k4z/tiendita.git',
      featured: false
    }
  ]
};