'use client';
import { useLanguage } from '@/context/LanguageContext';
import Typewriter from '@/components/ui/Typewriter';
import { Github, Linkedin, Mail, FileText, Terminal } from 'lucide-react';
// Importamos los datos estáticos (links, email) directamente
import { profile } from '@/data/hero';

export default function Hero() {
  // Obtenemos el contenido traducido (ui) y el idioma actual (lang)
  const { content, lang } = useLanguage();
  const { hero } = content.ui;

  // Roles dinámicos según el idioma para la animación
  const roles = lang === 'es' ? [
    'Ingeniero de Software',
    'Entusiasta de Linux',
    'Desarrollador Full Stack',
    'DevOps Jr',
    'Contribuidor Open Source'
  ] : [
    'Software Engineer',
    'Linux Enthusiast',
    'Full Stack Developer',
    'DevOps Jr',
    'Open Source Contributor'
  ];

  // Clase base para botones (Mantenida intacta)
  const buttonBaseClass = "flex items-center gap-2 px-6 py-3 rounded transition-all group text-[var(--text-main)] border shadow-sm hover:-translate-y-0.5 " +
    "bg-[var(--bg-card)] border-[var(--border-color)]";

  return (
    <section className="min-h-[85vh] flex items-center justify-center py-20 relative overflow-hidden bg-transparent">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
        
        {/* === LADO IZQUIERDO: TEXTO === */}
        <div className="space-y-8 animate-in fade-in slide-in-from-left-5 duration-1000 order-2 lg:order-1 text-center lg:text-left">
          
          <div className="space-y-4">
            {/* Comando echo */}
            <p className="font-mono text-gruvbox-green-bright text-lg flex items-center justify-center lg:justify-start gap-2">
              <Terminal size={18} />
              <span className="text-gruvbox-gray">echo</span> 
              <span>&quot;{hero.greeting} World!&quot;</span>
            </p>
            
            {/* NOMBRE COMPLETO (Usamos profile.name para consistencia) */}
            <h1 className="text-5xl md:text-7xl font-black text-[var(--text-heading)] tracking-tight leading-tight">
              Mario Enrique <br />
              <span className="text-gruvbox-green dark:text-gruvbox-green-bright">Ramírez Gallardo</span>
            </h1>

            {/* ANIMACIÓN DE TÍTULOS */}
            <div className="text-2xl md:text-3xl font-mono text-gruvbox-gray h-10 flex justify-center lg:justify-start items-center gap-2">
              <span>$</span>
              <div className="text-gruvbox-yellow dark:text-gruvbox-yellow-bright">
                <Typewriter 
                  words={roles} 
                  typingSpeed={100} 
                  deletingSpeed={50} 
                  pauseTime={2000} 
                />
              </div>
            </div>
          </div>

          {/* DESCRIPCIÓN (Viene del Contexto) */}
          <p className="text-lg text-[var(--text-main)] max-w-xl leading-relaxed mx-auto lg:mx-0">
            {hero.description}
          </p>

          {/* === BOTONES DE REDES SOCIALES === */}
          <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
            
            {/* GitHub */}
            <a 
              href={profile.social.github} // Usa el link de data/general
              target="_blank" 
              rel="noopener noreferrer"
              className={`${buttonBaseClass} hover:border-gruvbox-dark0 dark:hover:border-gruvbox-light1 hover:bg-gruvbox-light1/50 dark:hover:bg-gruvbox-dark2`}
            >
              <Github className="group-hover:scale-110 transition-transform" size={20} />
              <span className="font-bold">GitHub</span>
            </a>

            {/* LinkedIn */}
            <a 
              href={profile.social.linkedin} // Usa el link de data/general
              target="_blank" 
              rel="noopener noreferrer"
              className={`${buttonBaseClass} hover:border-gruvbox-blue hover:text-gruvbox-blue hover:bg-gruvbox-blue/10`}
            >
              <Linkedin className="group-hover:scale-110 transition-transform" size={20} />
              <span className="font-bold">LinkedIn</span>
            </a>

            {/* Email */}
            <a 
              href={`mailto:${profile.email}`} // Usa el email de data/general
              className={`${buttonBaseClass} hover:border-gruvbox-red hover:text-gruvbox-red hover:bg-gruvbox-red/10`}
            >
              <Mail className="group-hover:scale-110 transition-transform" size={20} />
              <span className="font-bold">Email</span>
            </a>

            {/* CV (Mantenemos tu lógica de doble archivo según idioma) */}
            <a 
              href={lang === 'es' ? '/newcv.pdf' : '/micv_ingles.pdf'} 
              target="_blank"
              className={`${buttonBaseClass} hover:border-gruvbox-green hover:text-gruvbox-green hover:bg-gruvbox-green/10`}
            >
              <FileText className="group-hover:scale-110 transition-transform" size={20} />
              <span className="font-bold">{hero.ctaPrimary || "CV"}</span>
            </a>

          </div>
        </div>

        {/* === LADO DERECHO: GIF === */}
        <div className="order-1 lg:order-2 flex justify-center items-center animate-in fade-in zoom-in duration-1000 delay-200">
          <div className="relative w-72 h-72 md:w-96 md:h-96 group">
            <img 
              src="https://media.tenor.com/X6oLkn9sBewAAAAj/sparklepandalana-penguin.gif" 
              alt="Tux Linux"
              className="w-full h-full object-contain transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
}