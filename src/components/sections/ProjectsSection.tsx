'use client';

import { useLanguage } from '@/context/LanguageContext';
import { projectsData } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';
import Link from 'next/link';

export default function ProjectsSection() {
  const { t } = useLanguage();

  // 1. BLINDAJE DE DATOS
  // Si projectsData es undefined o null por alguna razón, usamos un array vacío para evitar el crash.
  const safeData = projectsData || [];

  // 2. FILTRADO
  // Filtramos los destacados y tomamos los primeros 6.
  const featuredProjects = safeData.filter(p => p.featured).slice(0, 6);

  // Si no hay proyectos, podemos mostrar un mensaje o simplemente no renderizar la grid
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
          {t('projects-title')}
        </h2>
        <div className="h-[1px] bg-[var(--border-color)] w-full opacity-50" />
      </div>

      {/* Grid de Proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {featuredProjects.map((project, index) => (
          // Importante: Asegurarse de que project.id exista
          <div 
            key={project.id || index} 
            className="animate-in fade-in zoom-in duration-500" 
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Aquí pasamos la prop 'project' que espera el componente Card */}
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
          {t('explore-projects')}
        </Link>
      </div>
    </section>
  );
}