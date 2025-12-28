'use client';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { 
  Menu, X, Terminal, Sun, Moon, Languages, 
  Code2, Briefcase, User, BookOpen, Download,
  GraduationCap, Mail 
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  const { content, lang, setLang } = useLanguage();
  const { sections, hero } = content;
  const { navbar } = sections;

  useEffect(() => setMounted(true), []);

  const navLinks = [
    { 
      name: navbar.projects, 
      href: '#projects', 
      icon: Code2, 
      desktopClass: 'hover:bg-gruvbox-green-bright border-gruvbox-green',
      mobileClass: 'border-gruvbox-green text-gruvbox-green'
    },
    { 
      name: navbar.skills, 
      href: '#skills', 
      icon: Terminal, 
      desktopClass: 'hover:bg-gruvbox-yellow-bright border-gruvbox-yellow',
      mobileClass: 'border-gruvbox-yellow text-gruvbox-yellow'
    },
    { 
      name: navbar.experience, 
      href: '#experience', 
      icon: Briefcase, 
      desktopClass: 'hover:bg-gruvbox-blue-bright border-gruvbox-blue',
      mobileClass: 'border-gruvbox-blue text-gruvbox-blue'
    },
    { 
      name: navbar.education || (lang === 'en' ? 'Education' : 'Educación'), 
      href: '#education', 
      icon: GraduationCap, 
      desktopClass: 'hover:bg-gruvbox-orange-bright border-gruvbox-orange',
      mobileClass: 'border-gruvbox-orange text-gruvbox-orange'
    },
    { 
      name: navbar.about, 
      href: '#about', 
      icon: User, 
      desktopClass: 'hover:bg-gruvbox-aqua-bright border-gruvbox-aqua',
      mobileClass: 'border-gruvbox-aqua text-gruvbox-aqua'
    },
    { 
      name: navbar.contact || (lang === 'en' ? 'Contact' : 'Contacto'), 
      href: '#contact', 
      icon: Mail, 
      desktopClass: 'hover:bg-gruvbox-gray-light border-gruvbox-gray',
      mobileClass: 'border-gruvbox-gray text-gruvbox-gray'
    },
    { 
      name: navbar.blog, 
      href: '/blog', 
      icon: BookOpen, 
      desktopClass: 'hover:bg-gruvbox-purple-bright border-gruvbox-purple',
      mobileClass: 'border-gruvbox-purple text-gruvbox-purple'
    },
    { 
      name: 'CV', 
      href: '/cv', 
      icon: Download, 
      desktopClass: 'hover:bg-gruvbox-red-bright border-gruvbox-red',
      mobileClass: 'border-gruvbox-red text-gruvbox-red'
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

          {/* Escritorio (Hidden on Mobile) */}
          <div className="hidden xl:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                //target={link.name === 'CV' ? '_blank' : undefined}
                className={`flex items-center gap-2 px-3 py-1.5 border-b-2 text-[11px] font-black uppercase tracking-tighter transition-all 
                bg-[var(--bg-card)] text-[var(--text-main)] hover:text-gruvbox-dark0 
                ${link.desktopClass}`}
              >
                <link.icon size={14} />
                {link.name}
              </Link>
            ))}

            <div className="h-6 w-[1px] bg-[var(--border-color)] mx-2" />

            {/* Controles Desktop */}
            <button 
              onClick={handleLanguageToggle}
              className="flex items-center gap-2 px-3 py-1.5 border border-gruvbox-orange text-gruvbox-orange-bright text-[10px] font-bold rounded hover:bg-gruvbox-orange-bright hover:text-gruvbox-dark0 transition-all uppercase bg-[var(--bg-card)]"
            >
              <Languages size={14} />
              {lang === 'en' ? 'EN' : 'ES'}
            </button>

            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-gruvbox-yellow-bright hover:bg-[var(--bg-card)] rounded-md transition-colors"
              aria-label="Toggle Theme"
            >
              {mounted && (theme === 'dark' ? <Sun size={18} /> : <Moon size={18} className="text-gruvbox-dark0" />)}
            </button>
          </div>

          {/* Botón Hamburguesa Móvil */}
          <div className="xl:hidden flex items-center gap-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--text-main)] p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Overlay */}
      {isOpen && (
        <div className="xl:hidden border-b p-4 space-y-3 shadow-2xl animate-in slide-in-from-top-5
          bg-[var(--bg-page)] border-[var(--border-color)] h-[calc(100vh-64px)] overflow-y-auto"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              //target={link.name === 'CV' ? '_blank' : undefined}
              className={`flex items-center gap-4 px-4 py-4 border-l-4 font-bold text-lg transition-all active:scale-95
                bg-[var(--bg-card)] hover:brightness-110
                ${link.mobileClass}`}
            >
              <link.icon size={20} />
              {link.name}
            </Link>
          ))}
          
          {/* Footer del Menú Móvil */}
          <div className="pt-6 mt-4 border-t border-[var(--border-color)] grid grid-cols-2 gap-4 pb-10">
            <button 
              onClick={handleLanguageToggle}
              className="flex justify-center items-center gap-2 py-3 border border-gruvbox-orange text-gruvbox-orange-bright rounded-lg font-bold uppercase text-xs hover:bg-gruvbox-orange/10 transition-colors"
            >
              <Languages size={18} /> 
              {lang === 'en' ? 'Español' : 'English'}
            </button>

            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="flex justify-center items-center gap-2 py-3 border border-gruvbox-yellow text-gruvbox-yellow-bright rounded-lg font-bold uppercase text-xs hover:bg-gruvbox-yellow/10 transition-colors"
            >
              {mounted && (theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />)}
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}