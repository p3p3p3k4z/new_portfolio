// Datos estáticos (no cambian con el idioma)
export const profile = {
  name: "Mario Enrique Ramirez Gallardo",
  role: "Software Engineer",
  email: "ragm030119@gs.utm.mx",
  phone: "(+52) 951 119 6182",
  social: {
    github: "https://github.com/p3p3p3k4z",
    linkedin: "https://www.linkedin.com/in/mario-ramirez", 
    website: "https://p3p3p3k4z.github.io/Portafolio/"
  },
  links: {
    cv: "/Mario_Ramirez_CV.pdf", 
    image: "/images/profile.jpg"
  }
};

// Textos de Interfaz (Navbar, Hero, Títulos)
export const uiData = {
  es: {
    navbar: {
      projects: 'Proyectos',
      skills: 'Habilidades',
      about: 'Sobre mí',
      contact: 'Contacto',
    },
    hero: {
      greeting: '¡Hola, soy',
      role: profile.role, 
      description: 'Estudiante de Ingeniería en Computación con sólidas habilidades en Linux. Me especializo en desarrollo full-stack, DevOps y en crear soluciones eficientes y escalables.',
      ctaPrimary: 'Descargar CV',
      ctaSecondary: 'Ver Proyectos',
    },
    sectionTitles: {
      projects: '01. Proyectos Destacados',
      skills: '02. Habilidades Técnicas',
    },
    buttons: {
      viewMore: 'Ver más',
    }
  },
  en: {
    navbar: {
      projects: 'Projects',
      skills: 'Skills',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hello, I'm",
      role: profile.role,
      description: 'Computer Engineering student with solid Linux skills. I specialize in full-stack development, DevOps, and building efficient, scalable solutions.',
      ctaPrimary: 'Download CV',
      ctaSecondary: 'View Projects',
    },
    sectionTitles: {
      projects: '01. Featured Projects',
      skills: '02. Technical Skills',
    },
    buttons: {
      viewMore: 'View more',
    }
  }
};