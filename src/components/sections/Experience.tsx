'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Briefcase, Award, GraduationCap, ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function Experience() {
  const { content } = useLanguage();
  const { experience, sections } = content;
  const { titles, buttons } = sections;

  const FEATURED_IDS = [
    'teteocan-tech',  
    'nasa-ani-ita',   
    'utm-degree'      
  ];

  // Filtramos la data completa buscando solo los items que coincidan con tus IDs destacados
  const previewExperience = (experience || []).filter(item => 
    FEATURED_IDS.includes(item.id)
  );

  const getIcon = (type: string) => {
    if (type === 'education') return <GraduationCap size={24} />;
    if (type === 'contest') return <Award size={24} />;
    return <Briefcase size={24} />;
  };

  const getIconStyle = (type: string) => {
    switch (type) {
      case 'education':
        return 'border-gruvbox-purple dark:border-gruvbox-purple-bright text-gruvbox-purple dark:text-gruvbox-purple-bright';
      case 'contest':
        return 'border-gruvbox-yellow dark:border-gruvbox-yellow-bright text-gruvbox-yellow dark:text-gruvbox-yellow-bright';
      default:
        return 'border-gruvbox-blue dark:border-gruvbox-blue-bright text-gruvbox-blue dark:text-gruvbox-blue-bright';
    }
  };

  return (
    <section id="experience" className="py-20 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TÍTULO */}
        <div className="flex items-center gap-4 mb-16 animate-in slide-in-from-left-5 duration-700">
          <h2 className="text-3xl font-bold whitespace-nowrap flex items-center text-[var(--text-heading)]">
            {titles.experience}
          </h2>
          <div className="h-[1px] bg-[var(--border-color)] w-full opacity-50" />
        </div>

        {/* TIMELINE (PREVIEW) */}
        <div className="space-y-12 relative">
          
          <div className="absolute left-[27px] top-2 bottom-0 w-[2px] bg-[var(--border-color)] opacity-30 md:left-[27px]" />

          {previewExperience.map((item, index) => (
            <div 
              key={item.id} 
              className="relative pl-20 md:pl-24 animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              
              {/* ICONO */}
              <div className="absolute left-0 top-0 flex-shrink-0 mt-1">
                <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center bg-[var(--bg-page)] z-10 relative shadow-sm
                   ${getIconStyle(item.type)}`}
                >
                  {getIcon(item.type)}
                </div>
              </div>

              {/* CARD */}
              <div className="bg-[var(--bg-card)] p-6 rounded-lg border border-[var(--border-color)] hover:border-gruvbox-blue/50 transition-colors shadow-sm group">
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-1">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-heading)] group-hover:text-gruvbox-blue dark:group-hover:text-gruvbox-blue-bright transition-colors">
                      {item.role}
                    </h3>
                    <h4 className="text-lg font-mono text-gruvbox-green dark:text-gruvbox-green-bright">
                      @ {item.company}
                    </h4>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-main)] opacity-80 bg-[var(--bg-page)] px-3 py-1 rounded-full border border-[var(--border-color)] w-fit mt-2 md:mt-0">
                    <Calendar size={14} />
                    {item.date}
                  </div>
                </div>

                <ul className="space-y-2 mb-4 mt-4">
                  {/* Seguimos limitando a 2 puntos para que el preview no sea enorme */}
                  {item.description.slice(0, 2).map((desc, i) => ( 
                    <li key={i} className="flex items-start gap-3 text-[var(--text-main)] text-sm">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gruvbox-gray flex-shrink-0" />
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* BOTÓN VER TODO */}
        <div className="mt-12 flex justify-center">
            <Link 
              href="/experience"
              className="group flex items-center gap-2 px-8 py-3 border-2 rounded transition-all uppercase tracking-wide text-sm font-bold
                border-gruvbox-blue text-gruvbox-blue hover:bg-gruvbox-blue hover:text-gruvbox-dark0
                dark:border-gruvbox-blue-bright dark:text-gruvbox-blue-bright dark:hover:bg-gruvbox-blue-bright"
            >
              {buttons.viewAllExperience}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </Link>
        </div>

      </div>
    </section>
  );
}