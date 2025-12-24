'use client';

import Hero from '@/components/sections/Hero';
import ProjectsSection from '@/components/sections/ProjectsSection';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience'; // 1. Importamos el componente

export default function HomePage() {
  // Ya no necesitamos 'useLanguage' aquí porque cada sección se encarga de sus datos.
  
  return (
    <div className="flex flex-col gap-32 pb-20">
      
      {/* 1. HERO (Bienvenida) */}
      <Hero />

      {/* 2. PROYECTOS (01.) */}
      <ProjectsSection />

      {/* 3. SKILLS (02.) */}
      <Skills />

      {/* 4. EXPERIENCIA (03.) - Versión Preview (Primeros 3 items) */}
      <Experience />

    </div>
  );
}