'use client';

import Hero from '@/components/sections/Hero';
import ProjectsSection from '@/components/sections/ProjectsSection';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience'; 
import EducationSection from '@/components/sections/EducationSection';

export default function HomePage() {
  
  return (
    <div className="flex flex-col gap-32 pb-20">
      
      <Hero />

      <ProjectsSection />

      <Skills />

      <Experience />

      <EducationSection />

    </div>
  );
}