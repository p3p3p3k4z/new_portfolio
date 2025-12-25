'use client';

import { useLanguage } from '@/context/LanguageContext';
import ProjectCard from '@/components/ui/ProjectCard';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AllProjectsPage() {
  const { content } = useLanguage();
  
  // 1. DATA: Proyectos
  // Si content.projects no existe, usamos un array vacío []
  const projects = content?.projects || [];

  // 2. DATA: Textos (AQUÍ ESTÁ LA SOLUCIÓN DEL ERROR)
  // Usamos '?.' para preguntar suavemente si existe. 
  // Si 'projectsPage' es undefined, asignamos un objeto vacío {} para que no rompa abajo.
  const rawUi = content?.sections?.projectsPage || {};

  // 3. FALLBACKS (Textos de respaldo)
  // Si la traducción específica falla, se mostrará el texto en inglés entre comillas
  const ui = {
    title: rawUi.title || 'All Projects',
    subtitle: rawUi.subtitle || 'Complete collection of my works',
    back: rawUi.back || 'Back to Home',
    footer: rawUi.footer || 'End of list'
  };

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 bg-[var(--bg-page)] text-[var(--text-main)]">
      <div className="container mx-auto max-w-7xl">
        
        {/* --- TU BOTÓN cd .. --- */}
        <div className="mb-12 animate-in fade-in slide-in-from-left-4 duration-500">
            <Link 
                href="/" 
                className="group inline-flex items-center gap-4 font-mono font-bold transition-colors
                  text-4xl md:text-5xl 
                  text-gruvbox-gray hover:text-gruvbox-orange
                  dark:hover:text-gruvbox-orange-bright"
            >
                <ArrowLeft className="w-10 h-10 md:w-14 md:h-14 transition-transform group-hover:-translate-x-3" /> 
                <span>cd ..</span>
            </Link>
        </div>

        {/* ENCABEZADO */}
        <header className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-heading)]">
            <span className="text-gruvbox-orange dark:text-gruvbox-orange-bright">~/</span> 
            {ui.title}
          </h1>
          <p className="text-xl max-w-2xl opacity-80 text-[var(--text-main)]">
            {ui.subtitle}
          </p>
          <div className="h-1 w-20 bg-gruvbox-yellow mt-8 rounded-full" />
        </header>

        {/* GRID DE PROYECTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {projects.map((project: any, index: number) => (
            <div 
              key={project.id || index}
              className="animate-in fade-in zoom-in duration-500 h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-20 text-center opacity-60 text-sm font-mono animate-in fade-in duration-700 delay-500 text-gruvbox-gray">
          <p>{ui.footer} -- {projects.length}</p>
        </div>

      </div>
    </main>
  );
}