export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  date: string;
  description: string[];
  technologies: string[];
  type: 'work' | 'contest' | 'education'; 
  link?: string;
}

export const experienceData = {
  es: [
    {
      id: 'teteocan-tech',
      role: 'Ingeniero de Software Jr.',
      company: 'Teteocan Technologies',
      date: 'Abr. 2025 - Sept. 2025',
      description: [
        'Lideré el desarrollo y arquitectura del proyecto "Legado", creando una base sólida para soluciones empresariales.',
        'Evolucioné el producto hacia "OpenLegado", liberando una versión Open Source del sistema.',
        'Desarrollé agentes de Inteligencia Artificial y automatizaciones para optimización de procesos en clientes globales.',
        'Implementación full-stack de aplicaciones web y móviles enfocadas en inteligencia de datos.'
      ],
      technologies: ['React', 'Flutter', 'AI Agents', 'Data Intelligence', 'Open Source'],
      type: 'work'
    },
    {
      id: 'bolt-minimax',
      role: 'Desarrollador Full Stack (Individual)',
      company: 'Bolt x MiniMax VIBE HACKERS',
      date: '2025',
      description: [
        'Desarrollo en solitario de "Polli Vision", una plataforma para diagnóstico e identificación de polinizadores en México.',
        'Implementación exitosa de un MVP funcional en un hackathon de 48 horas.',
        'Integración de tecnologías de visión para el reconocimiento de especies.'
      ],
      technologies: ['MiniMax API', 'Vite.js', 'Rapid Prototyping'],
      type: 'contest'
    },
    {
      id: 'nasa-ani-ita',
      role: 'Team Lead & Frontend Dev',
      company: 'NASA Space Apps Challenge 2025',
      date: '2025',
      description: [
        'Lideré el equipo "Añi Ita", gestionando la ideación, investigación, organización del proyecto y el control de versiones (Git).',
        'Desarrollo Frontend de la plataforma web, enfocándome en la interfaz visual para la conservación de polinizadores.',
        'Implementación de la arquitectura del sitio y despliegue de servicios mediante contenedores Docker.'
      ],
      technologies: ['React', 'Git', 'Team Coordination', 'Frontend', 'Docker'],
      type: 'contest'
    },
    {
      id: 'nocountry-g9',
      role: 'Frontend Developer (Top 4)',
      company: 'NoCountry x Alura Hackathon',
      date: '2024',
      description: [
        'Obtención del 4to lugar desarrollando una plataforma de gestión de empleo (Grupo 09).',
        'Colaboración ágil en equipo remoto para entregar un producto funcional en tiempo récord.',
        'Implementación de interfaces de usuario modernas y flujos de trabajo eficientes.'
      ],
      technologies: ['React', 'Git', 'Teamwork', 'Agile'],
      type: 'contest'
    },
    {
      id: 'nasa-cozobi',
      role: 'Full Stack Dev & UI/UX (Ganador Local)',
      company: 'NASA Space Apps Challenge 2024',
      date: '2024',
      description: [
        'Ganadores del 4to lugar a nivel local con el proyecto "Cozobi".',
        'Diseño de interfaces (UI/UX) utilizando Figma, priorizando una experiencia de usuario simple y efectiva.',
        'Participación activa en la planeación estratégica y desarrollo web de la solución.'
      ],
      technologies: ['Figma', 'UI/UX', 'Web Dev', 'Ideation'],
      type: 'contest'
    },
    {
      id: 'utm-degree',
      role: 'Estudiante de Ingeniería en Computación',
      company: 'Universidad Tecnológica de la Mixteca',
      date: '2022 - 2027 (En curso)',
      description: [
        'Cursando el 8vo semestre, orientando mi formación hacia fundamentos de Inteligencia Artificial y Machine Learning.',
        'Desarrollo continuo de habilidades Full Stack (Frontend y Backend), bases de datos y algoritmia.',
        'Manejo fluido de entornos Linux, complementado con un aprendizaje progresivo en DevOps y contenedores.'
      ],
      technologies: ['Java', 'C', 'Python', 'Linux', 'Web Development', 'Networks'],
      type: 'education'
    }
  ] as ExperienceItem[],

  en: [
    {
      id: 'teteocan-tech',
      role: 'Software Engineer Jr.',
      company: 'Teteocan Technologies',
      date: 'Apr 2025 - Sept 2025',
      description: [
        'Led the development and architecture of the "Legado" project, creating a solid foundation for enterprise solutions.',
        'Evolved the product into "OpenLegado", releasing an Open Source version of the system.',
        'Developed AI Agents and automations for process optimization for global clients.',
        'Full-stack implementation of web and mobile applications focused on data intelligence.'
      ],
      technologies: ['React', 'Flutter', 'AI Agents', 'Data Intelligence', 'Open Source'],
      type: 'work'
    },
    {
      id: 'bolt-minimax',
      role: 'Full Stack Developer (Solo)',
      company: 'Bolt x MiniMax VIBE HACKERS',
      date: '2025',
      description: [
        'Solo development of "Polli Vision", a platform for diagnosing and identifying pollinators in Mexico.',
        'Successfully deployed a functional MVP within a 48-hour hackathon.',
        'Integrated vision technologies for species recognition.'
      ],
      technologies: ['MiniMax API', 'Vite.js', 'Rapid Prototyping'],
      type: 'contest'
    },
    {
      id: 'nasa-ani-ita',
      role: 'Team Lead & Frontend Dev',
      company: 'NASA Space Apps Challenge 2025',
      date: '2025',
      description: [
        'Led the "Añi Ita" team, managing ideation, research, organization, and version control (Git) of the project.',
        'Frontend development of the web platform, focusing on the visual interface for pollinator conservation.',
        'Implementation of site architecture and service deployment using Docker containers.'
      ],
      technologies: ['React', 'Git', 'Team Coordination', 'Frontend', 'Docker'],
      type: 'contest'
    },
    {
      id: 'nocountry-g9',
      role: 'Frontend Developer (Top 4)',
      company: 'NoCountry x Alura Hackathon',
      date: '2024',
      description: [
        'Achieved 4th place developing a job management platform (Group 09).',
        'Agile remote collaboration to deliver a functional product in record time.',
        'Implementation of modern user interfaces and efficient workflows.'
      ],
      technologies: ['React', 'Git', 'Teamwork', 'Agile'],
      type: 'contest'
    },
    {
      id: 'nasa-cozobi',
      role: 'Full Stack Dev & UI/UX (Local Winner)',
      company: 'NASA Space Apps Challenge 2024',
      date: '2024',
      description: [
        'Local 4th Place Winners with the "Cozobi" project.',
        'Designed UI/UX interfaces using Figma, prioritizing a simple and effective user experience.',
        'Active participation in strategic planning and web development of the solution.'
      ],
      technologies: ['Figma', 'UI/UX', 'Web Dev', 'Ideation'],
      type: 'contest'
    },
    {
      id: 'utm-degree',
      role: 'Computer Engineering Student',
      company: 'Universidad Tecnológica de la Mixteca',
      date: '2022 - 2027 (Current)',
      description: [
        '8th-semester student, orienting my academic path towards Artificial Intelligence and Machine Learning fundamentals.',
        'Continuous skill development in Full Stack (Frontend & Backend), databases, and algorithms.',
        'Proficient in Linux environments, complemented by progressive learning in DevOps and containerization.'
      ],
      technologies: ['Java', 'C', 'Linux', 'Linux', 'Web Development', 'Networks'],
      type: 'education'
    }
  ] as ExperienceItem[]
};