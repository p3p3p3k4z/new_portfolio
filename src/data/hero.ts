import { profile } from './profile';

export const heroData = {
  es: {
    greeting: 'Hola Mundo, soy ...',
    role: profile.role, 
    rolesTypewriter: [
      'Ingeniero en Computación',
      'Entusiasta de Linux',
      'Desarrollador Full Stack',
      'DevOps Jr',
      'Contribuidor Open Source'
    ],
    description: 'Estudiante de Ingeniería en Computación con sólidas habilidades en Linux. Me especializo en desarrollo full-stack, DevOps y en crear soluciones eficientes y escalables.',
    ctaPrimary: 'Ver CV',
    ctaSecondary: 'Ver Proyectos'
  },
  en: {
    greeting: "Hello World, I'm ...",
    role: profile.role,
    rolesTypewriter: [
      'Computer Engineer',
      'Linux Enthusiast',
      'Full Stack Developer',
      'DevOps Jr',
      'Open Source Contributor'
    ],
    description: 'Computer Engineering student with solid Linux skills. I specialize in full-stack development, DevOps, and building efficient, scalable solutions.',
    ctaPrimary: 'View CV',
    ctaSecondary: 'View Projects'
  }
};