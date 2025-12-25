'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Briefcase, Award, GraduationCap, Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';

export default function ExperiencePage() {
  const { content } = useLanguage();
  const { experience } = content;
  const { titles } = content.sections;

  const getIcon = (type: string) => {
    if (type === 'education') return <GraduationCap size={24} />;
    if (type === 'contest') return <Award size={24} />;
    return <Briefcase size={24} />;
  };

  // --- NUEVA FUNCIÓN PARA COLORES (Igual que en el Home) ---
  const getIconStyle = (type: string) => {
    switch (type) {
      case 'education':
        return 'border-gruvbox-purple dark:border-gruvbox-purple-bright text-gruvbox-purple dark:text-gruvbox-purple-bright';
      case 'contest':
        return 'border-gruvbox-yellow dark:border-gruvbox-yellow-bright text-gruvbox-yellow dark:text-gruvbox-yellow-bright';
      default: // work
        return 'border-gruvbox-blue dark:border-gruvbox-blue-bright text-gruvbox-blue dark:text-gruvbox-blue-bright';
    }
  };

  return (
    <main className="min-h-screen bg-[var(--bg-page)]">
      <Navbar />
      
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
            <Link 
                href="/" 
                className="group inline-flex items-center gap-4 font-mono font-bold transition-colors
                  text-4xl md:text-5xl 
                  text-gruvbox-gray hover:text-gruvbox-green"
            >
                <ArrowLeft className="w-10 h-10 md:w-14 md:h-14 transition-transform group-hover:-translate-x-3" /> 
                <span>cd ..</span>
            </Link>
        </div>

        <header className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-heading)]">
            <span className="text-gruvbox-green dark:text-gruvbox-green-bright">~/</span> 
            {titles.experience}
          </h1>
          {/* La barra amarilla decorativa */}
          <div className="h-1 w-20 bg-gruvbox-green mt-8 rounded-full" />
        </header>

        <div className="space-y-12 relative">
          
          <div className="absolute left-[27px] top-2 bottom-0 w-[2px] bg-[var(--border-color)] opacity-30 md:left-[27px]" />

          {experience.map((item, index) => (
            <div 
              key={item.id} 
              className="relative pl-20 md:pl-24 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute left-0 top-0 flex-shrink-0 mt-1">
                {/* AQUI APLICAMOS LA NUEVA CLASE */}
                <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center bg-[var(--bg-page)] z-10 relative shadow-sm
                   ${getIconStyle(item.type)}`}
                >
                  {getIcon(item.type)}
                </div>
              </div>

              <div className="bg-[var(--bg-card)] p-6 md:p-8 rounded-lg border border-[var(--border-color)] hover:border-gruvbox-green/50 transition-colors shadow-sm">
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--text-heading)]">
                      {item.role}
                    </h3>
                    <h4 className="text-xl font-mono text-gruvbox-green dark:text-gruvbox-green-bright">
                      @ {item.company}
                    </h4>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm font-mono text-[var(--text-main)] opacity-80 bg-[var(--bg-page)] px-4 py-1.5 rounded-full border border-[var(--border-color)] w-fit">
                    <Calendar size={16} />
                    {item.date}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {item.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-3 text-[var(--text-main)]">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gruvbox-gray flex-shrink-0" />
                      <span className="leading-relaxed text-lg">{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-[var(--border-color)]">
                    {item.technologies.map((tech) => (
                    <span 
                        key={tech} 
                        className="px-3 py-1 text-xs font-mono font-bold rounded bg-[var(--bg-page)] text-[var(--text-main)] border border-[var(--border-color)]"
                    >
                        {tech}
                    </span>
                    ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}