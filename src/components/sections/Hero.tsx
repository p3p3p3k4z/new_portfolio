'use client';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-[80vh] flex items-center py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        
        {/* Lado Izquierdo: Información Personal */}
        <div className="space-y-6 animate-in fade-in slide-in-from-left-5 duration-1000">
          <div className="space-y-2">
            <p className="font-mono text-gruvbox-aqua-bright text-lg flex items-center gap-2">
              <span className="text-gruvbox-gray">$</span> whoami
            </p>
            
            {/* Nombre en grande con estilo Gruvbox */}
            <h1 className="text-7xl md:text-8xl font-black text-gruvbox-light0 tracking-tighter leading-none">
              Mario <span className="text-gruvbox-yellow-bright">Dev</span>
            </h1>

            {/* Subtítulos / Roles - Estilo Terminal */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-gruvbox-orange-bright text-sm md:text-base border-l-2 border-gruvbox-dark3 pl-4 mt-4">
              <span>Computer Engineer</span>
              <span className="text-gruvbox-dark3">|</span>
              <span>Linux Enthusiast</span>
              <span className="text-gruvbox-dark3">|</span>
              <span>DevOps Jr</span>
              <span className="text-gruvbox-dark3">|</span>
              <span>Full Stack Developer</span>
            </div>
          </div>

          {/* Descripción traducida */}
          <p className="text-xl text-gruvbox-light2 max-w-xl leading-relaxed">
            {t('hero-description')}
          </p>

          {/* Botón de acción */}
          <div className="pt-4">
            <a 
              href="#projects" 
              className="group relative inline-flex items-center justify-center px-8 py-3 font-black text-gruvbox-dark0 transition-all duration-200 bg-gruvbox-green-bright rounded-md hover:bg-gruvbox-green focus:outline-none"
            >
              {t('explore-projects')}
            </a>
          </div>
        </div>

        {/* Lado Derecho: Tu GIF de Tux */}
        <div className="hidden lg:flex justify-center items-center animate-in fade-in zoom-in duration-1000">
          <div className="relative w-80 h-80 group">
            {/* Efecto de resplandor sutil detrás del GIF */}
            <div className="absolute -inset-1 bg-gruvbox-aqua-bright/20 rounded-full blur-2xl group-hover:bg-gruvbox-yellow-bright/20 transition duration-1000"></div>
            
            <img 
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJqZ3R5Z3R5Z3R5Z3R5Z3R5Z3R5Z3R5Z3R5Z3R5Z3R5JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/LMDye0ZSZmG6A/giphy.gif" 
              alt="Tux Linux"
              className="relative w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
}