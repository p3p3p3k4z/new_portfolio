'use client';

import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { Folder, Github, ArrowRight } from 'lucide-react';

// Si tienes una interfaz definida impórtala, si no, usa 'any' para evitar conflictos rápidos
export default function ProjectCard({ project }: { project: any }) {
  const { content } = useLanguage();
  
  // Accedemos a los textos de UI definidos en tu sectionsData
  // "viewMore": "Ver más" / "View more"
  const buttonText = content.sections.buttons.viewMore; 

  if (!project) return null;

  return (
    <div className="group relative flex flex-col h-full rounded-lg overflow-hidden border transition-all duration-500
      border-[var(--border-color)]
      hover:border-gruvbox-orange dark:hover:border-gruvbox-orange-bright
      hover:shadow-xl hover:-translate-y-1"
    >
      
      {/* 1. IMAGEN DE FONDO */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {project.imageUrl && (
          <Image 
            src={project.imageUrl} 
            alt={project.title || 'Project'}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-opacity duration-500"
          />
        )}
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-gruvbox-dark0/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* 2. FONDO SÓLIDO (Capa base para que no se vea transparente) */}
      <div className="absolute inset-0 z-10 transition-opacity duration-500 group-hover:opacity-0 bg-[var(--bg-card)]" />

      {/* 3. CONTENIDO */}
      <div className="relative z-20 flex flex-col h-full">
        
        {/* HEADER */}
        <div className="px-4 py-3 flex items-center justify-between border-b transition-colors duration-300
          border-[var(--border-color)] 
          bg-[var(--bg-page)] group-hover:bg-transparent group-hover:border-white/10"
        >
          <div className="flex items-center gap-2">
            <Folder size={16} className="text-gruvbox-blue dark:text-gruvbox-blue-bright group-hover:text-gruvbox-aqua-bright" />
            <span className="font-mono text-xs opacity-80 truncate max-w-[150px] 
              text-[var(--text-main)] group-hover:text-gruvbox-light1">
              ~/projects/{project.id}
            </span>
          </div>
          
          {/* Decoración tipo terminal */}
          <div className="flex gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
            <div className="w-2.5 h-2.5 rounded-full bg-gruvbox-red" />
            <div className="w-2.5 h-2.5 rounded-full bg-gruvbox-yellow" />
            <div className="w-2.5 h-2.5 rounded-full bg-gruvbox-green" />
          </div>
        </div>

        {/* BODY */}
        <div className="p-6 flex flex-col flex-grow">
          
          <h3 className="text-xl font-bold mb-3 transition-colors duration-300
            text-[var(--text-heading)] group-hover:text-gruvbox-light0">
            {project.title}
          </h3>

          <p className="text-sm mb-6 flex-grow line-clamp-3 leading-relaxed transition-colors duration-300
            text-[var(--text-main)] group-hover:text-gruvbox-light1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies?.slice(0, 4).map((tech: string) => (
              <span key={tech} className="px-2 py-1 text-[10px] font-mono font-bold rounded border transition-colors
                  text-gruvbox-blue bg-gruvbox-blue/10 border-gruvbox-blue/20
                  dark:text-gruvbox-blue-bright dark:bg-gruvbox-blue/10 dark:border-gruvbox-blue/20
                  group-hover:text-gruvbox-aqua-bright group-hover:bg-gruvbox-aqua-bright/10 group-hover:border-gruvbox-aqua-bright/30">
                {tech}
              </span>
            ))}
          </div>

          {/* FOOTER */}
          <div className="pt-4 mt-auto border-t flex items-center justify-between transition-colors duration-300
            border-[var(--border-color)] group-hover:border-white/20">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className="transition-colors text-[var(--text-main)] hover:text-[var(--text-heading)]
                group-hover:text-gruvbox-light1 group-hover:hover:text-white">
              <Github size={20} />
            </a>
            {/*
            <Link href={`/projects/${project.id}`}
              className="flex items-center gap-2 text-sm font-bold transition-colors group/link
                text-gruvbox-red dark:text-gruvbox-red-bright group-hover:text-gruvbox-orange-bright">
              {buttonText} 
              <ArrowRight size={16} className="transform group-hover/link:translate-x-1 transition-transform" />
            </Link>   */}
          </div>
        </div>
      </div>
    </div>
  );
}