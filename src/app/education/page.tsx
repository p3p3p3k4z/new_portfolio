'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Award } from 'lucide-react';

// Tipos para las categorías
type TabKey = 'utm' | 'alura' | 'datacamp' | 'nasa' | 'platzi' | 'others';

export default function EducationPage() {
  const { content } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabKey>('alura');

  // DATA
  const education = content?.education || {};
  const rawUi = content?.sections?.educationPage || {};
  const uiTabs = content?.sections?.education?.tabs || {};
  const ui = {
    title: rawUi.title || 'Certifications',
    subtitle: rawUi.subtitle || 'All my academic records',
    footer: rawUi.footer || 'End of list',
    viewCert: content?.sections?.education?.viewCert || 'View'
  };

  const activeData = education[activeTab] || [];

  // --- MAPEO A TUS VARIABLES CSS EXACTAS ---
  const TAB_COLORS: Record<TabKey, string> = {
    utm: 'var(--color-gruvbox-aqua)',
    alura: 'var(--color-gruvbox-blue)',
    datacamp: 'var(--color-gruvbox-green)',
    nasa: 'var(--color-gruvbox-purple)',
    platzi: 'var(--color-gruvbox-yellow)', 
    others: 'var(--color-gruvbox-orange)',
  };

  // Color actual para usar en bordes y textos dinámicos
  const activeColorVar = TAB_COLORS[activeTab];

  return (
    <main className="min-h-screen pt-12 pb-20 px-4 bg-[var(--bg-page)] text-[var(--text-main)]">
      <div className="container mx-auto max-w-7xl">
        
        {/* --- 1. BOTÓN cd .. --- */}
        <div className="mb-12 animate-in fade-in slide-in-from-left-4 duration-500">
            <Link 
                href="/#education" 
                className="group inline-flex items-center gap-4 font-mono font-bold transition-colors
                  text-4xl md:text-5xl 
                  text-gruvbox-gray hover:text-gruvbox-blue"
            >
                <ArrowLeft className="w-10 h-10 md:w-14 md:h-14 transition-transform group-hover:-translate-x-3" /> 
                <span>cd ..</span>
            </Link>
        </div>

        {/* --- 2. HEADER --- */}
        <header className="mb-12 border-b border-[var(--border-color)] pb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-3 text-[var(--text-heading)]">
            <span className="text-gruvbox-blue dark:text-gruvbox-blue-bright">~/</span> 
            {ui.title}
          </h1>
          <p className="text-lg opacity-70 text-[var(--text-main)] max-w-2xl">
            {ui.subtitle}
          </p>
        </header>

        {/* --- 3. TABS (PESTAÑAS) CORREGIDAS --- */}
        <div className="flex overflow-x-auto pb-4 gap-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500 scrollbar-hide">
          {Object.keys(education).map((key) => {
            const tabKey = key as TabKey;
            // Verificar si hay datos
            if (!education[tabKey] || education[tabKey].length === 0) return null;

            const isActive = activeTab === tabKey;
            const colorVar = TAB_COLORS[tabKey];

            return (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                // Estilos Dinámicos Directos
                style={{
                  backgroundColor: isActive ? colorVar : 'transparent',
                  borderColor: isActive ? colorVar : 'var(--border-color)',
                  color: isActive ? '#282828' : 'var(--text-main)', // #282828 es el gris oscuro de Gruvbox para buen contraste
                }}
                className={`px-6 py-2 rounded font-mono font-bold transition-all border-2 whitespace-nowrap
                  ${isActive 
                    ? 'shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] translate-x-[-2px] translate-y-[-2px]' 
                    : 'hover:opacity-80' // Hover simple ya que el color lo maneja el style si quisiéramos complicarlo más
                  }`}
                // Hack para hover color: en CSS puro es difícil con vars dinámicas inline, 
                // así que mantenemos el hover simple de opacidad o borde blanco por defecto.
              >
                {uiTabs[tabKey] || tabKey.toUpperCase()}
              </button>
            );
          })}
        </div>

        {/* --- 4. GRID DE CERTIFICADOS --- */}
        <div key={activeTab} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr animate-in fade-in zoom-in duration-300">
          
          {activeData.map((cert: any, index: number) => (
            <div 
              key={cert.id}
              className="group relative bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col"
              style={{ 
                animationDelay: `${index * 50}ms`,
                // Usamos variables CSS para controlar el hover color dinámicamente mediante style
                // (Requiere un pequeño truco: aplicamos el color al borde en hover usando style no es posible directamente sin eventos)
                // Solución: Usamos un borde transparente por defecto y confiamos en el borde estático o usamos un estilo inline para borderColor.
                // Para mantenerlo simple y funcional visualmente:
                borderColor: 'var(--border-color)' 
              }}
            >
              {/* Borde superior decorativo del color activo al hacer hover */}
              <div 
                className="absolute inset-x-0 top-0 h-1 transition-all duration-300 group-hover:h-1.5"
                style={{ backgroundColor: activeColorVar }} 
              />

              {/* Imagen */}
              <div className="relative h-48 w-full bg-gruvbox-bg overflow-hidden border-b border-[var(--border-color)]">
                <div className="absolute inset-0 flex items-center justify-center text-gruvbox-gray opacity-20">
                    <Award size={48} />
                </div>
                {cert.image && (
                   <Image
                     src={cert.image}
                     alt={cert.title}
                     fill
                     className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                   />
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {cert.link && (
                        <ExternalLink className="text-white drop-shadow-md" size={32} />
                    )}
                </div>
              </div>

              {/* Texto */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 
                  className="font-bold text-lg mb-2 text-[var(--text-heading)] leading-tight transition-colors"
                  // Truco: cambiar color al hover mediante style en el elemento padre es complejo,
                  // así que usamos style condicional o clase genérica. 
                  // Para este caso, dejaremos el título en el color heading normal para limpieza.
                >
                  {cert.title}
                </h3>
                
                <div className="mt-auto pt-4 flex justify-between items-center">
                   <span className="text-xs font-mono opacity-50">{cert.institution}</span>
                   
                   {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold transition-opacity opacity-80 hover:opacity-100"
                      style={{ color: activeColorVar }}
                    >
                      {ui.viewCert} <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

          {activeData.length === 0 && (
            <div className="col-span-full text-center py-12 opacity-50 font-mono">
              ~ Directory empty
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-20 text-center opacity-40 hover:opacity-100 transition-opacity duration-500">
            <code className="text-sm bg-black/20 px-4 py-2 rounded font-mono text-gruvbox-gray">
                {ui.footer} --cat {activeTab} --count {activeData.length}
            </code>
        </div>

      </div>
    </main>
  );
}