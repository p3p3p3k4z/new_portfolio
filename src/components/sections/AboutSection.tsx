'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Terminal, Code, Cpu } from 'lucide-react';
import TerminalWindow from '@/components/ui/TerminalWindow';

export default function AboutSection() {
  const { content } = useLanguage();
  
  const about = content?.about || { title: 'About', description: [], systemInfo: {} };
  const info = about.systemInfo || {};

  return (
    <section id="about" className="py-24 section-padding bg-[var(--bg-page)] overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* TÍTULO */}
        <div className="flex items-center gap-4 mb-16 animate-in slide-in-from-left-5 duration-700">
          <h2 className="text-3xl font-bold whitespace-nowrap text-[var(--text-heading)]">
             {about.title}
          </h2>
          <div className="h-[1px] bg-[var(--border-color)] w-full opacity-50" />
        </div>

        {/* AJUSTE DE LAYOUT:
            - Aumentamos el gap a lg:gap-24 para separar más las columnas y mover el texto a la izquierda.
            - Cambiamos items-center a items-start para una alineación superior más limpia.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* COLUMNA IZQUIERDA: TEXTO */}
          <div className="space-y-8 text-lg text-[var(--text-main)] leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700">
            {about.description && about.description.map((paragraph: string, index: number) => (
              <p key={index} 
                 className="opacity-90"
                 dangerouslySetInnerHTML={{ 
                   __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<span class="text-gruvbox-orange font-bold">$1</span>') 
                 }} 
              />
            ))}

            {/* Badges con transición de color */}
            <div className="pt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-card)] border border-[var(--border-color)] rounded text-sm font-mono text-gruvbox-yellow transition-colors duration-300">
                <Terminal size={16} /> Linux
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-card)] border border-[var(--border-color)] rounded text-sm font-mono text-gruvbox-blue transition-colors duration-300">
                <Code size={16} /> Full-Stack
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-card)] border border-[var(--border-color)] rounded text-sm font-mono text-gruvbox-purple transition-colors duration-300">
                <Cpu size={16} /> ML & DevOps
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: USAMOS EL NUEVO COMPONENTE REUTILIZABLE */}
          <TerminalWindow data={info} />

        </div>
      </div>
    </section>
  );
}