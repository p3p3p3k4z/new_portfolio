'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

// Diccionario unificado (Basado en tu código JS anterior)
export const translations = {
  es: {
    'title': 'Mi Portafolio ^^',
    'nav-projects': 'Proyectos',
    'nav-skills': 'Habilidades',
    'nav-about': 'Sobre mí',
    'nav-contact': 'Contacto',
    'hero-title': '¡Hola, soy Mario Ramírez!',
    'hero-subtitle': 'Ingeniero de Software',
    'hero-description': 'Estudiante de Ingeniería en Computación con sólidas habilidades en Linux, me he centrado en el desarrollo web full-stack...',
    'projects-title': '01. Proyectos Destacados',
    'skills-title': '02. Habilidades Técnicas',
    'view-more': 'Ver más',
    'explore-projects': 'Explorar Proyectos'
  },
  en: {
    'title': 'My Portfolio ^^',
    'nav-projects': 'Projects',
    'nav-skills': 'Skills',
    'nav-about': 'About',
    'nav-contact': 'Contact',
    'hero-title': "Hello, I'm Mario Ramírez!",
    'hero-subtitle': 'Software Engineer',
    'hero-description': 'Computer Engineering student with solid skills in Linux, I have focused on full-stack web development...',
    'projects-title': '01. Featured Projects',
    'skills-title': '02. Technical Skills',
    'view-more': 'View more',
    'explore-projects': 'Explore Projects'
  }
};

type Language = 'en' | 'es';

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Language>('en');

  // Cargar preferencia guardada o detectar zona
  useEffect(() => {
    const saved = localStorage.getItem('selectedLanguage') as Language;
    if (saved) {
      setLangState(saved);
    } else {
      // Detección por zona del navegador
      const browserLang = navigator.language.startsWith('es') ? 'es' : 'en';
      setLangState(browserLang);
    }
  }, []);

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem('selectedLanguage', l);
  };

  const t = (key: string) => {
    // @ts-ignore
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};