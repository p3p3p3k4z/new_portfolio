'use client';

import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import { Award, ArrowRight, ExternalLink } from 'lucide-react';

export default function EducationSection() {
  const { content } = useLanguage();
  
  // 1. DATA BLINDADA
  const education = content?.education || {};
  const ui = content?.sections?.education || { viewAll: 'View All', viewCert: 'View' };
  const title = content?.sections?.titles?.education || 'Education';

  // 2. Lógica: Aplanar todo en un solo array y filtrar los Featured
  // Unimos todos los arrays de categorías en uno solo
  const allCerts = [
    ...(education.utm || []),
    ...(education.alura || []),
    ...(education.nasa || []),
    ...(education.datacamp || []),
    ...(education.platzi || []),
    ...(education.others || [])
  ];

  // Filtramos: Solo featured=true y tomamos los primeros 3
  const featuredCerts = allCerts
    .filter((cert: any) => cert.featured === true)
    .slice(0, 3);

  return (
    <section id="education" className="py-24 section-padding scroll-mt-24 bg-[var(--bg-page)]">
      <div className="container mx-auto px-4">
        
        {/* TÍTULO */}
        <div className="flex items-center gap-4 mb-12 animate-in slide-in-from-left-5 duration-700">
          <h2 className="text-3xl font-bold whitespace-nowrap text-[var(--text-heading)]">
             {title}
          </h2>
          <div className="h-[1px] bg-[var(--border-color)] w-full opacity-50" />
        </div>

        {/* GRID DE 3 DESTACADOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredCerts.map((cert: any, index: number) => (
            <div 
              key={cert.id}
              className="group relative bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg overflow-hidden hover:border-gruvbox-blue transition-all duration-300 hover:shadow-lg flex flex-col"
            >
              {/* Imagen */}
              <div className="relative h-48 w-full bg-gruvbox-bg overflow-hidden border-b border-[var(--border-color)]">
                <div className="absolute inset-0 flex items-center justify-center text-gruvbox-gray opacity-20">
                    <Award size={48} />
                </div>
                {cert.image && (
                   <Image
                     src={cert.image}
                     alt={cert.title}
                     fill
                     className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                   />
                )}
                {/* Etiqueta de Institución flotante */}
                <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm font-mono border border-white/10">
                    {cert.institution}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-lg mb-2 text-[var(--text-heading)] leading-tight group-hover:text-gruvbox-blue transition-colors">
                  {cert.title}
                </h3>
                
                {/* Link (Si tiene) */}
                <div className="mt-auto pt-4">
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-gruvbox-green hover:text-gruvbox-green-bright">
                      {ui.viewCert} <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTÓN VER TODOS (Lleva a la nueva página) */}
        <div className="flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Link 
            href="/education"
            className="group flex items-center gap-3 px-8 py-3 rounded border-2 transition-all duration-300 uppercase tracking-wide text-sm font-bold
              border-gruvbox-blue text-gruvbox-blue
              hover:bg-gruvbox-blue hover:text-gruvbox-dark0
              dark:border-gruvbox-blue-bright dark:text-gruvbox-blue-bright dark:hover:bg-gruvbox-blue-bright"
          >
            {ui.viewAll}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}