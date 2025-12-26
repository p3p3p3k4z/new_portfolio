'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext'; 

export default function Skills() {
  const { content, lang } = useLanguage(); 
  const categories = content.skills;

  return (
    <section id="skills" className="py-16 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white">
          {lang === 'es' ? "Habilidades Técnicas" : "Technical Skills"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800/40 rounded-xl p-6 border border-gray-100 dark:border-gray-700 hover:border-blue-500/30 transition-colors duration-300"
            >
              <h3 className="text-lg font-bold mb-6 text-gray-800 dark:text-gray-200 border-b border-gray-100 dark:border-gray-700 pb-2">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-gray-700/50 rounded-md border border-gray-200 dark:border-gray-600"
                  >
                    {/* CAMBIO AQUÍ: Eliminada la lógica de invertDark */}
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-5 h-5 object-contain" 
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}