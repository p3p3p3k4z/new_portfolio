'use client';

import { useState, useMemo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import { ExternalLink, Award } from 'lucide-react';
import BackButton from '@/components/ui/BackButton';

// Tipos para las categorías
type TabKey = 'all' | 'utm' | 'alura' | 'datacamp' | 'nasa' | 'platzi' | 'hackods' | 'codigo_facilito' | 'waylearn' | 'others';

export default function EducationPage() {
  const { content } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabKey>('all');

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

  // --- MAPEO A TUS VARIABLES CSS EXACTAS ---
  const TAB_COLORS: Record<TabKey, string> = {
    all: 'var(--color-gruvbox-red)',
    utm: 'var(--color-gruvbox-aqua)',
    alura: 'var(--color-gruvbox-blue)',
    datacamp: 'var(--color-gruvbox-green)',
    nasa: 'var(--color-gruvbox-purple)',
    platzi: 'var(--color-gruvbox-yellow)',
    unam: 'var(--color-gruvbox-orange)',
    codigo_facilito: 'var(--color-gruvbox-aqua)',
    waylearn: 'var(--color-gruvbox-purple)',
    others: 'var(--color-gruvbox-gray)',
  };

  // Color actual para usar en bordes y textos dinámicos
  const activeColorVar = TAB_COLORS[activeTab];

  // Logic to calculate active data
  const activeData = useMemo(() => {
    if (activeTab !== 'all') {
      return education[activeTab] || [];
    }

    // "All" tab logic: gather all certs, featured first, then randomized others
    const allCerts = Object.keys(education).reduce((acc: any[], key) => {
      return acc.concat(education[key as keyof typeof education] || []);
    }, []);

    const featuredCerts = allCerts.filter(cert => cert.featured);
    
    // Sort featured by exact requested order
    const requestedOrder = ['oth-2', 'utm-4', 'dc-8', 'alura-8', 'dc-1', 'oth-1'];
    featuredCerts.sort((a, b) => {
      const indexA = requestedOrder.indexOf(a.id);
      const indexB = requestedOrder.indexOf(b.id);
      if (indexA === -1 && indexB === -1) return 0;
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });

    const otherCerts = allCerts.filter(cert => !cert.featured);

    // Shuffle non-featured
    const shuffledOthers = [...otherCerts].sort(() => Math.random() - 0.5);

    return [...featuredCerts, ...shuffledOthers];
  }, [activeTab, education]);

  // Available tabs (All + keys that exist in data and have items)
  const availableTabs = useMemo(() => {
    const tabs: TabKey[] = ['all'];
    const keys = Object.keys(education);
    for (const key of keys) {
      if (education[key as keyof typeof education] && (education[key as keyof typeof education] as any[]).length > 0) {
        tabs.push(key as TabKey);
      }
    }
    return tabs;
  }, [education]);

  return (
    <main className="min-h-screen pt-12 pb-20 px-4 bg-[var(--bg-page)] text-[var(--text-main)]">
      <div className="container mx-auto max-w-7xl">
        
        <header className="mb-12 border-b border-[var(--border-color)] pb-8 flex flex-col md:flex-row md:items-start gap-6 lg:gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <div className="pt-2">
            <BackButton href="/#education" label="cd .." />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-3 text-[var(--text-heading)]">
              <span className="text-gruvbox-blue dark:text-gruvbox-blue-bright">~/</span> 
              {ui.title}
            </h1>
            <p className="text-lg opacity-70 text-[var(--text-main)] max-w-2xl">
              {ui.subtitle}
            </p>
          </div>
        </header>

        {/* --- 3. TABS (PESTAÑAS) --- */}
        <div className="flex overflow-x-auto pb-4 gap-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500 scrollbar-hide">
          {availableTabs.map((tabKey) => {
            const isActive = activeTab === tabKey;
            const colorVar = TAB_COLORS[tabKey];
            const tabName = tabKey === 'all' ? 'All' : ((uiTabs as any)[tabKey] || tabKey.toUpperCase());

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
                    : 'hover:opacity-80'
                  }`}
              >
                {tabName}
              </button>
            );
          })}
        </div>

        {/* --- 4. GRID DE CERTIFICADOS --- */}
        <div key={activeTab} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr animate-in fade-in zoom-in duration-300">
          
          {activeData.map((cert: any, index: number) => (
            <div 
              key={cert.id + '-' + index}
              className="group relative bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col"
              style={{ 
                animationDelay: `${index * 50}ms`,
                borderColor: 'var(--border-color)' 
              }}
            >
              {/* Borde superior decorativo del color activo al hacer hover */}
              <div 
                className="absolute inset-x-0 top-0 h-1 transition-all duration-300 group-hover:h-1.5"
                style={{ backgroundColor: activeColorVar }} 
              />

              {/* Imagen */}
              <div className="relative h-65 w-full bg-gruvbox-bg overflow-hidden border-b border-[var(--border-color)]">
                <div className="absolute inset-0 flex items-center justify-center text-gruvbox-gray opacity-20">
                    <Award size={65} />
                </div>
                {cert.image && (
                   <Image
                     src={cert.image}
                     alt={cert.title}
                     fill
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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