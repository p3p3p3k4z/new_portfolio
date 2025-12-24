'use client';

import { useLanguage } from '@/context/LanguageContext';
import ProjectCard from '@/components/ui/ProjectCard';
import Link from 'next/link';

export default function ProjectsSection() {
  // 1. Obtenemos el contenido del contexto
  const { content } = useLanguage();
  
  // 2. Destructuramos: 'projects' (data) y 'sections' (textos de interfaz)
  const { projects, sections } = content;

  // 3. BLINDAJE Y FILTRADO
  const safeData = projects || [];
  
  // Filtramos los destacados (featured: true) y tomamos los primeros 6
  const featuredProjects = safeData.filter(p => p.featured).slice(0, 6);

  if (featuredProjects.length === 0) {
    return (
      <section id="projects" className="py-20 text-center text-gruvbox-gray">
        <p>No featured projects found.</p>
      </section>
    );
  }

  return (
    <section id="projects" className="scroll-mt-24">
      {/* Título de la Sección */}
      <div className="flex items-center gap-4 mb-12 animate-in slide-in-from-left-5 duration-700">
        <h2 className="text-3xl font-bold whitespace-nowrap flex items-center
          text-[var(--text-heading)]">
          <span className="font-mono text-2xl mr-3
            text-gruvbox-orange dark:text-gruvbox-orange-bright">
            01.
          </span>
          {/* CORRECCIÓN: Usamos sections.titles */}
          {sections.titles.projects}
        </h2>
        <div className="h-[1px] bg-[var(--border-color)] w-full opacity-50" />
      </div>

      {/* Grid de Proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {featuredProjects.map((project, index) => (
          <div 
            key={project.id || index} 
            className="animate-in fade-in zoom-in duration-500" 
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Botón "Explorar Proyectos" */}
      <div className="flex justify-center">
        <Link 
          href="/projects"
          className="px-8 py-3 border-2 rounded transition-all uppercase tracking-wide text-sm font-bold
            border-gruvbox-yellow text-gruvbox-yellow hover:bg-gruvbox-yellow hover:text-gruvbox-dark0
            dark:border-gruvbox-yellow-bright dark:text-gruvbox-yellow-bright dark:hover:bg-gruvbox-yellow-bright"
        >
          {/* CORRECCIÓN: Usamos el botón específico 'explore' definido en sections.ts */}
          {sections.buttons.explore} 
        </Link>
      </div>
    </section>
  );
}