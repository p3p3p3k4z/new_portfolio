'use client';

import Hero from '@/components/sections/Hero';
import ProjectsSection from '@/components/sections/ProjectsSection'; // <--- Importamos
import { useLanguage } from '@/context/LanguageContext';

// Imports futuros...
// import Skills from '@/components/sections/Skills';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-32 pb-20">
      {/* 1. SECCIÓN HERO */}
      <Hero />

      {/* 2. SECCIÓN PROYECTOS */}
      <ProjectsSection />

      {/* 3. SECCIÓN SKILLS (Placeholder por ahora) */}
      <section id="skills" className="scroll-mt-24">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-[var(--text-heading)] whitespace-nowrap">
            <span className="text-gruvbox-orange-bright font-mono text-2xl mr-2">02.</span>
            {t('skills-title')}
          </h2>
          <div className="h-[1px] bg-[var(--border-color)] w-full" />
        </div>
        <div className="p-10 border-2 border-dashed border-[var(--border-color)] rounded-lg text-center text-[var(--text-muted)] font-mono">
             [ Skills Section Pending ]
        </div>
      </section>

      {/* Próximamente: AboutMe, Education, Contact */}
    </div>
  );
}