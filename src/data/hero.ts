import { profile } from './profile';

export const heroData = {
  es: {
    greeting: '¡Hola, soy',
    role: profile.role, // Rol principal estático
    // ROLES DINÁMICOS PARA LA ANIMACIÓN
    rolesTypewriter: [
      'Ingeniero de Software',
      'Entusiasta de Linux',
      'Desarrollador Full Stack',
      'DevOps Jr',
      'Contribuidor Open Source'
    ],
    description: 'Estudiante de Ingeniería en Computación con sólidas habilidades en Linux. Me especializo en desarrollo full-stack, DevOps y en crear soluciones eficientes y escalables.',
    ctaPrimary: 'Descargar CV',
    ctaSecondary: 'Ver Proyectos',
    // RUTA DEL CV EN ESPAÑOL
    cvFile: '/newcv.pdf' 
  },
  en: {
    greeting: "Hello, I'm",
    role: profile.role,
    // ROLES DINÁMICOS EN INGLÉS
    rolesTypewriter: [
      'Software Engineer',
      'Linux Enthusiast',
      'Full Stack Developer',
      'DevOps Jr',
      'Open Source Contributor'
    ],
    description: 'Computer Engineering student with solid Linux skills. I specialize in full-stack development, DevOps, and building efficient, scalable solutions.',
    ctaPrimary: 'Download CV',
    ctaSecondary: 'View Projects',
    // RUTA DEL CV EN INGLÉS
    cvFile: '/micv_ingles.pdf'
  }
};