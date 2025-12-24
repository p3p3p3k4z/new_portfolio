'use client';

import Hero from '@/components/sections/Hero';
import ProjectsSection from '@/components/sections/ProjectsSection';
import Skills from '@/components/sections/Skills'; // <--- Importamos
import { useLanguage } from '@/context/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-32 pb-20">
      {/* 1. SECCIÓN HERO */}
      <Hero />

      {/* 2. SECCIÓN PROYECTOS */}
      <ProjectsSection />

      {/* 3. SECCIÓN SKILLS (Ahora ya real) */}
      <Skills />

      {/* Próximamente: Experience, About, etc. */}
    </div>
  );
}