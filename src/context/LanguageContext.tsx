'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

// Importamos los datos de los 3 archivos
import { skillsData } from '@/data/skills';
import { projectsData } from '@/data/projects';
import { uiData } from '@/data/hero';

type Language = 'es' | 'en';

// Definimos la forma final del objeto 'content'
interface ContentType {
  skills: typeof skillsData.es;
  projects: typeof projectsData.es;
  ui: typeof uiData.es;
}

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  content: ContentType; // Aquí vive toda la data lista para usar
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Language>('es');

  // Construimos el objeto de contenido dinámicamente
  const content: ContentType = {
    skills: skillsData[lang],
    projects: projectsData[lang],
    ui: uiData[lang],
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