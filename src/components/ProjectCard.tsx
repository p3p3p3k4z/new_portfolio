// src/components/ProjectCard.tsx
import Image from 'next/image';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative bg-gruvbox-dark1 rounded-lg overflow-hidden border border-gruvbox-dark3 hover:border-gruvbox-aqua-bright transition-all duration-300 flex flex-col h-full shadow-lg">
      
      {/* Image Container with Blur Placeholder optimization */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={`${project.title} preview`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Overlay for better text contrast if needed */}
        <div className="absolute inset-0 bg-gruvbox-dark0/20 group-hover:bg-transparent transition-colors duration-300" />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        {/* Tech Tags - Translucent Aqua style */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="bg-gruvbox-aqua/10 backdrop-blur-sm text-gruvbox-aqua-bright text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-gruvbox-aqua/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-gruvbox-yellow-bright mb-2 group-hover:text-gruvbox-light0 transition-colors">
          {project.title}
        </h3>

        <p className="text-gruvbox-light2 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Action Button - Gruvbox Green style */}
        <a 
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-gruvbox-green-bright hover:bg-gruvbox-green text-gruvbox-dark0 font-black text-sm py-2.5 px-4 rounded transition-all duration-200 active:transform active:scale-95"
        >
          VIEW CASE STUDY
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </article>
  );
}