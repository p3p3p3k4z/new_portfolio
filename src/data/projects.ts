export interface Project {
  id: string;
  title: string;
  description: string; 
  technologies: string[];
  imageUrl?: string;
  githubUrl: string;
  featured: boolean;
}

const URLS = {
  agenda: {
    repo: 'https://github.com/p3p3p3k4z/Agenda-AI.git',
    img: 'https://github.com/p3p3p3k4z/Agenda-AI/raw/main/public/preview.png'
  },
  quiz: {
    repo: 'https://github.com/p3p3p3k4z/quiz-app',
    img: 'https://github.com/p3p3p3k4z/quiz-app/raw/main/public/preview3.png'
  },
  todo: {
    repo: 'https://github.com/p3p3p3k4z/todo-list.git',
    img: 'https://github.com/p3p3p3k4z/todo-list/raw/main/data/img/TAREAS.png'
  },
  algo: {
    repo: 'https://github.com/p3p3p3k4z/Proyecto-Ordenamientos.git',
    img: 'https://github.com/p3p3p3k4z/Proyecto-Ordenamientos/raw/main/preview/ventana_grafica.png'
  },
  procesador: {
    repo: 'https://github.com/p3p3p3k4z/Procesador.git',
    img: 'https://github.com/p3p3p3k4z/Procesador/raw/instruccion_I_v2/captura_top.png'
  },
  linux: {
    repo: 'https://github.com/p3p3p3k4z/script_Linux.git',
    img: 'https://github.com/p3p3p3k4z/script_Linux/raw/main/inicio.png'
  },
  cozobi: {
    repo: 'https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/nahual-code/?tab=project',
    img: undefined 
  },
  pettiapp: {
    repo: 'https://github.com/p3p3p3k4z/PettiApp.git',
    img: 'https://github.com/p3p3p3k4z/PettiApp/raw/main/info_proyecto/capturas/inicio.png'
  },
  tienda: {
    repo: 'https://github.com/p3p3p3k4z/tiendita.git',
    img: 'https://github.com/p3p3p3k4z/tiendita/raw/main/web/public/preview.png'
  },
  minishell: {
    repo: 'https://github.com/p3p3p3k4z/mini-Shell.git',
    img: 'https://github.com/p3p3p3k4z/mini-Shell/blob/main/preview1.png?raw=true'
  },
  openlegado: {
    repo: 'https://github.com/p3p3p3k4z/OpenLegado',
    img: 'https://github.com/p3p3p3k4z/OpenLegado/raw/master/assets/preview1.jpg'
  },
  aniita: {
    repo: 'https://github.com/p3p3p3k4z/a-u-ita',
    img: undefined 
  },
  bomber: {
    repo: 'https://github.com/p3p3p3k4z/Bomber-Clay',
    img: 'https://github.com/p3p3p3k4z/Bomber-Clay/raw/main/assets/intro_bg.png'
  },
  haskellCat: {
    repo: 'https://github.com/p3p3p3k4z/Haskell-ML-Cat',
    img: 'https://github.com/p3p3p3k4z/Haskell-ML-Cat/raw/main/preview/webcam.png'
  },
};

export const projectsData = {
  es: [
    {
      id: 'agenda-ai',
      title: 'Agenda AI',
      description: 'Aplicación web full-stack para la gestión de agendas personales, incorporando funcionalidades de inteligencia artificial para optimizar la interacción y la organización del usuario.',
      technologies: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Prisma', 'Redux', 'Docker', 'Gemini API'],
      imageUrl: URLS.agenda.img, 
      githubUrl: URLS.agenda.repo,
      featured: true
    },
    {
      id: 'quiz-app',
      title: 'Quiz App',
      description: 'Plataforma full-stack que usa IA para generar quizzes y feedback. Gestiona el rendimiento de alumnos y el seguimiento de profesores.',
      technologies: ['HTML', 'CSS', 'Typescript', 'Node.js', 'Express.js', 'Docker', 'AI API'],
      imageUrl: URLS.quiz.img,
      githubUrl: URLS.quiz.repo,
      featured: false
    },
    {
      id: 'todo-list',
      title: 'Todo List',
      description: 'Gestión de tareas a través de consola, API con FastAPI e interfaz web con Flask. Las tareas se organizan en diferentes baúles (JSON).',
      technologies: ['Python', 'FastAPI', 'Flask'],
      imageUrl: URLS.todo.img,
      githubUrl: URLS.todo.repo,
      featured: false
    },
    {
      id: 'analisis-algoritmos',
      title: 'Análisis de Algoritmos',
      description: 'Herramienta en Python para analizar el rendimiento de algoritmos de ordenamiento con visualización en tiempo real y gráficos comparativos.',
      technologies: ['Python', 'Pygame', 'Matplotlib'],
      imageUrl: URLS.algo.img,
      githubUrl: URLS.algo.repo,
      featured: true
    },
    {
      id: 'procesador',
      title: 'Procesador VHDL',
      description: 'Procesador de un ciclo diseñado para la materia de Arquitectura de Computadoras, capaz de ejecutar pequeños programas.',
      technologies: ['VHDL', 'Digital Logic Design'],
      imageUrl: URLS.procesador.img,
      githubUrl: URLS.procesador.repo,
      featured: true
    },
    {
      id: 'script-linux',
      title: 'Script Linux',
      description: 'Asistente automatizado en Bash para la instalación y gestión de paquetes en sistemas Linux, optimizando entornos de desarrollo.',
      technologies: ['Bash', 'Linux'],
      imageUrl: URLS.linux.img,
      githubUrl: URLS.linux.repo,
      featured: false
    },
    {
      id: 'cozobi',
      title: 'Cozobi',
      description: 'App web con datos geoespaciales para mejorar la planificación agrícola. Proyecto ganador del NASA Space Apps Challenge.',
      technologies: ['HTML', 'JS', 'Python', 'Geo APIs'],
      imageUrl: URLS.cozobi.img,
      githubUrl: URLS.cozobi.repo,
      featured: false
    },
    {
      id: 'pettiapp',
      title: 'PettiApp',
      description: 'Aplicación web para la gestión eficiente de una cafetería, permitiendo administrar inventarios y optimizar insumos.',
      technologies: ['PHP', 'MySQL', 'JS', 'HTML/CSS'],
      imageUrl: URLS.pettiapp.img,
      githubUrl: URLS.pettiapp.repo,
      featured: false
    },
    {
      id: 'tienda-peluches',
      title: 'Tienda de Peluches',
      description: 'Mini tienda de peluches online con funcionalidades básicas de e-commerce, contenerizada con Docker.',
      technologies: ['React', 'Node.js', 'Express', 'Docker'],
      imageUrl: URLS.tienda.img,
      githubUrl: URLS.tienda.repo,
      featured: false
    },
    {
      id: 'minishell',
      title: 'MiniShell',
      description: 'Shell desarrollado en C que explora el manejo de procesos y tuberías. Implementa una arquitectura cliente-servidor mediante sockets para monitorear comandos y detectar actividad sensible en tiempo real.',
      technologies: ['C', 'Linux', 'Sockets', 'Pipes', 'GCC'],
      imageUrl: URLS.minishell.img,
      githubUrl: URLS.minishell.repo,
      featured: false
    },
    {
      id: 'open-legado',
      title: 'OpenLegado',
      description: 'Aplicación móvil Open Source en Flutter que conecta viajeros con la cultura mexicana. Incluye autenticación, gestión de reservas, reseñas y un diseño UI/UX moderno bajo licencia MIT.',
      technologies: ['Flutter', 'Dart', 'Mobile Dev', 'UI/UX'],
      imageUrl: URLS.openlegado.img,
      githubUrl: URLS.openlegado.repo,
      featured: true
    },
    {
      id: 'aniita',
      title: 'Añi Ita (Soul of the Flower)',
      description: 'Plan maestro nacional para regenerar paisajes agrícolas mediante "Islas de Polinizadores". Integra datos de la NASA, IA predictiva y realidad virtual para monitorear la floración y restaurar la biodiversidad.',
      technologies: ['NASA Data', 'AI/ML', 'Three.js/VR', 'Python', 'React', 'Geospatial'],
      imageUrl: URLS.aniita.img,
      githubUrl: URLS.aniita.repo,
      featured: true
    },
    {
      id: 'bomber-clay',
      title: 'Bomber-Clay',
      description: 'Videojuego arcade multijugador inspirado en Bomberman. Desarrollado con Sockets TCP/IP crudos para comunicación en tiempo real. Incluye modo LAN, niveles procedurales, jefes finales y enemigos con heurísticas de persecución.',
      technologies: ['Python', 'Pygame', 'Sockets TCP/IP', 'Multiplayer'],
      imageUrl: URLS.bomber.img,
      githubUrl: URLS.bomber.repo,
      featured: false
    },
    {
      id: 'haskell-ml-cat',
      title: 'Haskell ML Cat',
      description: 'Sistema híbrido de benchmarking para visión por computadora. Compara un modelo clásico (KNN en Haskell puro) contra Deep Learning (ResNet-18 con Hasktorch), orquestado por una interfaz gráfica en Python (Pygame) mediante IPC.',
      technologies: ['Haskell', 'Python', 'Pygame', 'Hasktorch', 'IPC'],
      imageUrl: URLS.haskellCat.img,
      githubUrl: URLS.haskellCat.repo,
      featured: true
    },
  ],
  
  en: [
    {
      id: 'agenda-ai',
      title: 'Agenda AI',
      description: 'Full-stack web application for personal agenda management, incorporating AI functionalities to optimize user organization.',
      technologies: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Prisma', 'Redux', 'Docker', 'Gemini API'],
      imageUrl: URLS.agenda.img, 
      githubUrl: URLS.agenda.repo,
      featured: true
    },
    {
      id: 'quiz-app',
      title: 'Quiz App',
      description: 'Full-stack platform utilizing AI to generate quizzes and feedback. Manages student performance and teacher tracking.',
      technologies: ['HTML', 'CSS', 'Typescript', 'Node.js', 'Express.js', 'Docker', 'AI API'],
      imageUrl: URLS.quiz.img,
      githubUrl: URLS.quiz.repo,
      featured: false
    },
    {
      id: 'todo-list',
      title: 'Todo List',
      description: 'Task management via console, FastAPI web API, and Flask web interface. Tasks are organized in JSON vaults.',
      technologies: ['Python', 'FastAPI', 'Flask'],
      imageUrl: URLS.todo.img,
      githubUrl: URLS.todo.repo,
      featured: false
    },
    {
      id: 'analisis-algoritmos',
      title: 'Algorithm Analysis',
      description: 'Python tool to analyze sorting algorithm performance with real-time visualization and comparative graphs.',
      technologies: ['Python', 'Pygame', 'Matplotlib'],
      imageUrl: URLS.algo.img,
      githubUrl: URLS.algo.repo,
      featured: true
    },
    {
      id: 'procesador',
      title: 'VHDL Processor',
      description: 'Single-cycle processor designed for Computer Architecture course, capable of running small programs.',
      technologies: ['VHDL', 'Digital Logic Design'],
      imageUrl: URLS.procesador.img,
      githubUrl: URLS.procesador.repo,
      featured: true
    },
    {
      id: 'script-linux',
      title: 'Linux Script',
      description: 'Automated Bash assistant for installing and managing packages on Linux systems, optimizing dev environment setup.',
      technologies: ['Bash', 'Linux'],
      imageUrl: URLS.linux.img,
      githubUrl: URLS.linux.repo,
      featured: true
    },
    {
      id: 'cozobi',
      title: 'Cozobi',
      description: 'Web app integrating geospatial data for agricultural planning. NASA Space Apps Challenge project.',
      technologies: ['HTML', 'JS', 'Python', 'Geo APIs'],
      imageUrl: URLS.cozobi.img,
      githubUrl: URLS.cozobi.repo,
      featured: false
    },
    {
      id: 'pettiapp',
      title: 'PettiApp',
      description: 'Web application for efficient cafeteria management, allowing inventory administration and supply optimization.',
      technologies: ['PHP', 'MySQL', 'JS', 'HTML/CSS'],
      imageUrl: URLS.pettiapp.img,
      githubUrl: URLS.pettiapp.repo,
      featured: false
    },
    {
      id: 'tienda-peluches',
      title: 'Plushie Store',
      description: 'Mini online plushie store with basic e-commerce functionalities, containerized with Docker.',
      technologies: ['React', 'Node.js', 'Express', 'Docker'],
      imageUrl: URLS.tienda.img,
      githubUrl: URLS.tienda.repo,
      featured: false
    },
    {
      id: 'minishell',
      title: 'MiniShell',
      description: 'C-based shell exploring process and pipe management. Implements a client-server architecture using sockets to monitor commands and detect sensitive activity in real-time.',
      technologies: ['C', 'Linux', 'Sockets', 'Pipes', 'GCC'],
      imageUrl: URLS.minishell.img,
      githubUrl: URLS.minishell.repo,
      featured: false
    },
    {
      id: 'open-legado',
      title: 'OpenLegado',
      description: 'Open Source Flutter mobile app connecting travelers with Mexican culture. Includes authentication, bookings, reviews, and a modern UI/UX design released under MIT license.',
      technologies: ['Flutter', 'Dart', 'Mobile Dev', 'UI/UX'],
      imageUrl: URLS.openlegado.img,
      githubUrl: URLS.openlegado.repo,
      featured: true
    },
    {
      id: 'aniita',
      title: 'Añi Ita (Soul of the Flower)',
      description: 'National master plan to regenerate agricultural landscapes via "Pollinator Islands". Integrates NASA data, predictive AI, and VR to monitor flowering events and restore biodiversity.',
      technologies: ['NASA Data', 'AI/ML', 'Three.js/VR', 'Python', 'React', 'Geospatial'],
      imageUrl: URLS.aniita.img,
      githubUrl: URLS.aniita.repo,
      featured: true
    },
    {
      id: 'bomber-clay',
      title: 'Bomber-Clay',
      description: 'Multiplayer arcade game inspired by Bomberman. Developed using raw TCP/IP Sockets for real-time communication. Features LAN mode, procedural levels, boss battles, and enemies with pursuit heuristics.',
      technologies: ['Python', 'Pygame', 'Sockets TCP/IP', 'Multiplayer'],
      imageUrl: URLS.bomber.img,
      githubUrl: URLS.bomber.repo,
      featured: false
    },
    {
      id: 'haskell-ml-cat',
      title: 'Haskell ML Cat',
      description: 'Hybrid benchmarking system for computer vision. Compares a classical model (KNN in pure Haskell) vs Deep Learning (ResNet-18 with Hasktorch), orchestrated by a Python (Pygame) GUI via IPC.',
      technologies: ['Haskell', 'Python', 'Pygame', 'Hasktorch', 'IPC'],
      imageUrl: URLS.haskellCat.img,
      githubUrl: URLS.haskellCat.repo,
      featured: true
    },
  ]
};