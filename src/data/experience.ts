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
      id: 'solana-latam',
      role: 'Desarrollador de Software / Integración Web3',
      company: 'Solana LATAM Hackathon (Huellazo)',
      date: 'Abr. 2026 - Jun. 2026',
      description: [
        'Diseñé y construí la arquitectura móvil para una plataforma de turismo sostenible que gamifica el impacto ecológico.',
        'Lideré la integración técnica entre el frontend móvil y la red descentralizada para la gestión de activos digitales.',
        'Desarrollé la comunicación mediante RPCs personalizados entre React Native y smart contracts en Rust, obteniendo un pase directo a la incubación oficial.'
      ],
      technologies: ['React Native', 'Solana SDK', 'Rust', 'Anchor', 'NFTs'],
      type: 'contest'
    },
    {
      id: 'clihc-2026',
      role: 'Diseñador UI/UX',
      company: 'CLIHC (RutaLibre)',
      date: 'Mayo 2026',
      description: [
        'Prototipado interactivo de una solución tecnológica centrada en las personas para mejorar la accesibilidad en el transporte público.',
        'Diseño de interfaces y experiencia de usuario (UI/UX) basándome en principios de interacción humano-computadora e inclusión social.',
        'Creación de flujos de navegación y componentes accesibles, obteniendo el 3er Lugar internacional en el hackathon del congreso.'
      ],
      technologies: ['Figma', 'Prototyping', 'Material 3', 'UI/UX Design', 'HCI'],
      type: 'contest'
    },
    {
      id: 'hackods-2026',
      role: 'Analista de Datos',
      company: 'HackODS UNAM',
      date: 'Mar. 2026 - Abril 2026',
      description: [
        'Diseño y desarrollo de un tablero (dashboard) analítico para visualizar la pérdida de biodiversidad forestal en Michoacán.',
        'Limpieza y procesamiento de conjuntos de datos públicos abiertos del INEGI/UNAM utilizando Python y Pandas.',
        'El proyecto fue seleccionado como Finalista Top 20 (de 77 equipos), visibilizando el impacto en el ODS 15.'
      ],
      technologies: ['Python', 'Pandas', 'Plotly', 'Quarto', 'Datos Abiertos'],
      type: 'contest'
    },
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
      role: 'Desarrollador Full Stack ',
      company: 'Bolt x MiniMax VIBE HACKERS (Top 5)',
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
      id: 'solana-latam',
      role: 'Software Developer / Web3 Integration',
      company: 'Solana LATAM Hackathon (Huellazo)',
      date: 'Apr 2026 - Jun 2026',
      description: [
        'Designed and built the mobile architecture for a sustainable tourism platform that gamifies ecological impact.',
        'Led the technical integration between the mobile frontend and the decentralized network for digital asset management.',
        'Developed communication via custom RPCs between React Native and Rust smart contracts, securing a direct pass to official incubation.'
      ],
      technologies: ['React Native', 'Solana SDK', 'Rust', 'Anchor', 'NFTs'],
      type: 'contest'
    },
    {
      id: 'clihc-2026',
      role: 'UI/UX Designer',
      company: 'CLIHC (RutaLibre)',
      date: 'May 2026',
      description: [
        'Interactive prototyping of a human-centered technological solution to improve accessibility in public transportation.',
        'User interface and experience (UI/UX) design based on human-computer interaction and social inclusion principles.',
        'Created accessible navigation flows and components, achieving 3rd Place internationally in the conference hackathon.'
      ],
      technologies: ['Figma', 'Prototyping', 'Material 3', 'UI/UX Design', 'HCI'],
      type: 'contest'
    },
    {
      id: 'hackods-2026',
      role: 'Data Analyst',
      company: 'HackODS UNAM (Raíz-Data)',
      date: 'Mar 2026 - Apr 2026',
      description: [
        'Designed and developed an analytical dashboard to visualize forest biodiversity loss in Michoacán.',
        'Cleaned and processed open public datasets from INEGI/UNAM using Python and Pandas.',
        'The project was selected as a Top 20 Finalist (out of 77 teams), highlighting its impact on SDG 15.'
      ],
      technologies: ['Python', 'Pandas', 'Plotly', 'Quarto', 'Open Data'],
      type: 'contest'
    },
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
      role: 'Full Stack Developer',
      company: 'Bolt x MiniMax VIBE HACKERS (Top 5)',
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
      technologies: ['Java', 'C', 'Linux', 'Web Development', 'Networks'],
      type: 'education'
    }
  ] as ExperienceItem[]
};