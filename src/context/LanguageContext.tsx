'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

import { skillsData } from '@/data/skills';
import { projectsData } from '@/data/projects';
import { experienceData } from '@/data/experience';
import { heroData } from '@/data/hero';      
import { sectionsData } from '@/data/sections'; 
import { educationData } from '@/data/education';
import { aboutData } from '@/data/about';
import { contactData } from '@/data/contact';

type Language = 'es' | 'en';

// ESTRUCTURA DEL CONTENIDO
interface ContentType {
  skills: typeof skillsData.es;
  projects: typeof projectsData.es;
  experience: typeof experienceData.es;
  hero: typeof heroData.es;         
  sections: typeof sectionsData.es;
  education: typeof educationData.es;
  about: typeof aboutData.es;
  contact: typeof contactData.es;
}

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  content: ContentType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Language>('es');

  //CONSTRUIMOS EL OBJETO 'content'
  const content: ContentType = {
    skills: skillsData[lang],
    projects: projectsData[lang],
    experience: experienceData[lang],
    hero: heroData[lang],
    sections: sectionsData[lang],
    education: educationData[lang],
    about: aboutData[lang],
    contact: contactData[lang],
  };

  useEffect(() => {
    const saved = localStorage.getItem('selectedLanguage') as Language;
    if (saved && (saved === 'es' || saved === 'en')) {
      setLangState(saved);
    }
  }, []);

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem('selectedLanguage', l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, content }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};