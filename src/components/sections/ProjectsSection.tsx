'use client';

import { useLanguage } from '@/context/LanguageContext';
import ProjectCard from '@/components/ui/ProjectCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ProjectsSection() {
  const { content } = useLanguage();
  
  // 1. Data de proyectos (Array puro)
  const projects = content.projects || [];
  
  // 2. Extraemos los textos de la UI desde 'sections'
  const { titles, buttons } = content.sections;

  // 3. Filtramos destacados
  const featuredProjects = projects
    .filter((p: any) => p.featured === true)
    .slice(0, 6);

  return (
    <section id="projects" className="py-24 scroll-mt-24">
      <div className="container mx-auto px-4">
        
        {/* HEADER DE LA SECCIÓN */}
        <div className="flex items-center gap-4 mb-12 animate-in slide-in-from-left-5 duration-700 fade-in">
          {/* Renderizamos el título tal cual viene en la data (Ej: "01. Proyectos Destacados") */}
          <h2 className="text-3xl font-bold whitespace-nowrap text-[var(--text-heading)]">
            <span className="text-gruvbox-orange dark:text-gruvbox-orange-bright mr-2">
               {/* Opcional: Si quieres forzar el color naranja al inicio, podrías partir el string, 
                   pero por ahora lo mostramos completo para respetar tu data */}
            </span>
            {titles.projects}
          </h2>
          <div className="h-[1px] bg-[var(--border-color)] w-full opacity-50" />
        </div>

        {/* GRID DE PROYECTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 auto-rows-fr">
          {featuredProjects.map((project: any, index: number) => (
            <div 
              key={project.id} 
              className="animate-in fade-in zoom-in duration-500 h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* BOTÓN EXPLORAR */}
        <div className="flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <Link 
            href="/projects"
            className="group flex items-center gap-3 px-8 py-3 rounded border-2 transition-all duration-300 uppercase tracking-wide text-sm font-bold
              border-gruvbox-yellow text-gruvbox-yellow 
              hover:bg-gruvbox-yellow hover:text-gruvbox-dark0
              dark:border-gruvbox-yellow-bright dark:text-gruvbox-yellow-bright dark:hover:bg-gruvbox-yellow-bright"
          >
            {/* Usamos 'buttons.explore' ('Explorar Proyectos' / 'Explore Projects') */}
            {buttons.explore}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}