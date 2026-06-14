'use client';

import { useLanguage } from '@/context/LanguageContext';
import ProjectCard from '@/components/ui/ProjectCard';
import BackButton from '@/components/ui/BackButton';

export default function AllProjectsPage() {
  const { content } = useLanguage();
  
  // 1. DATA: Proyectos
  // Si content.projects no existe, usamos un array vacío []
  const projects = content?.projects || [];

  // 2. DATA: Textos 
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
        
        {/* ENCABEZADO Y BOTÓN */}
        <header className="mb-16 flex flex-col md:flex-row md:items-start gap-6 lg:gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <div className="pt-2">
            <BackButton href="/#projects" label="cd .." />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-heading)]">
              <span className="text-gruvbox-orange dark:text-gruvbox-orange-bright">~/</span> 
              {ui.title}
            </h1>
            <p className="text-xl max-w-2xl opacity-80 text-[var(--text-main)]">
              {ui.subtitle}
            </p>
            <div className="h-1 w-20 bg-gruvbox-yellow mt-6 rounded-full" />
          </div>
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