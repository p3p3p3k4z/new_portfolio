'use client';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { 
  Menu, X, Terminal, Sun, Moon, Languages, 
  Code2, Briefcase, User, BookOpen, Download 
} from 'lucide-react';
import { profile } from '@/data/hero'; // Importamos datos estáticos (CV links)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  // 1. OBTENEMOS 'content' y 'lang' DEL NUEVO CONTEXTO
  const { content, lang, setLang } = useLanguage();
  const { navbar } = content.ui; // Extraemos textos del navbar

  useEffect(() => setMounted(true), []);

  // 2. DEFINIMOS LOS LINKS USANDO EL CONTENIDO DINÁMICO
  const navLinks = [
    { 
      name: navbar.projects, // 'Proyectos' o 'Projects'
      href: '#projects', 
      icon: Code2, 
      color: 'hover:bg-gruvbox-green-bright border-gruvbox-green' 
    },
    { 
      name: navbar.skills, // 'Habilidades' o 'Skills'
      href: '#skills', 
      icon: Terminal, 
      color: 'hover:bg-gruvbox-yellow-bright border-gruvbox-yellow' 
    },
    // Si tienes traducciones para Experience/Blog agrégalas a uiData en data/general.ts
    // Por ahora los dejamos fijos o puedes agregarlos
    { 
      name: 'Experience', 
      href: '#experience', 
      icon: Briefcase, 
      color: 'hover:bg-gruvbox-blue-bright border-gruvbox-blue' 
    },
    { 
      name: 'Blog', 
      href: '/blog', 
      icon: BookOpen, 
      color: 'hover:bg-gruvbox-purple-bright border-gruvbox-purple' 
    },
    { 
      name: navbar.about, // 'Sobre mí' o 'About'
      href: '#about', 
      icon: User, 
      color: 'hover:bg-gruvbox-aqua-bright border-gruvbox-aqua' 
    },
    { 
      name: 'CV', 
      // Usamos el link del PDF estático o dinámico según idioma
      href: lang === 'es' ? '/newcv.pdf' : '/micv_ingles.pdf', 
      icon: Download, 
      color: 'hover:bg-gruvbox-red-bright border-gruvbox-red' 
    },
  ];

  const handleLanguageToggle = () => {
    setLang(lang === 'en' ? 'es' : 'en');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300
      bg-[var(--bg-page)]/95 border-[var(--border-color)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="font-mono text-lg font-bold group flex items-center gap-1"
          >
            <span className="text-gruvbox-green">m4r10@dev</span>
            <span className="text-[var(--text-main)]">:</span>
            <span className="text-gruvbox-blue">~</span>
            <span className="text-[var(--text-main)]">$</span>
            <span className="w-2 h-4 bg-gruvbox-gray opacity-50 animate-pulse ml-1"></span>
          </Link>

          {/* Escritorio */}
          <div className="hidden xl:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`flex items-center gap-2 px-3 py-1.5 border-b-2 text-[11px] font-black uppercase tracking-tighter transition-all 
                bg-[var(--bg-card)] text-[var(--text-main)] hover:text-gruvbox-dark0 
                ${link.color}`}
              >
                <link.icon size={14} />
                {link.name}
              </Link>
            ))}

            <div className="h-6 w-[1px] bg-[var(--border-color)] mx-2" />

            {/* Switch Idioma */}
            <button 
              onClick={handleLanguageToggle}
              className="flex items-center gap-2 px-3 py-1.5 border border-gruvbox-orange text-gruvbox-orange-bright text-[10px] font-bold rounded hover:bg-gruvbox-orange-bright hover:text-gruvbox-dark0 transition-all uppercase
              bg-[var(--bg-card)]"
            >
              <Languages size={14} />
              {lang === 'en' ? 'EN' : 'ES'}
            </button>

            {/* Switch Tema */}
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-gruvbox-yellow-bright hover:bg-[var(--bg-card)] rounded-md transition-colors"
              aria-label="Toggle Theme"
            >
              {mounted && (theme === 'dark' ? <Sun size={18} /> : <Moon size={18} className="text-gruvbox-dark0" />)}
            </button>
          </div>

          {/* Móvil */}
          <div className="xl:hidden flex items-center gap-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--text-main)] p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Overlay */}
      {isOpen && (
        <div className="xl:hidden border-b p-4 space-y-2
          bg-[var(--bg-page)] border-[var(--border-color)]"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-4 px-4 py-3 border-l-4 font-bold text-[var(--text-main)] ${link.color.replace('hover:', 'bg-')}/10`}
            >
              <link.icon size={18} />
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-[var(--border-color)]">
            <button 
              onClick={handleLanguageToggle}
              className="w-full flex justify-center items-center gap-2 py-3 border border-gruvbox-orange text-gruvbox-orange-bright rounded font-bold uppercase text-xs"
            >
              <Languages size={18} /> 
              {lang === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}