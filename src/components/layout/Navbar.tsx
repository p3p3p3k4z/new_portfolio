'use client';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  Terminal, 
  Sun, 
  Moon, 
  Languages, 
  Code2, 
  Briefcase, 
  User, 
  BookOpen, 
  Download 
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  // Extraemos el estado global de idioma
  const { lang, setLang, t } = useLanguage();

  // Evitar errores de hidratación para componentes que dependen del cliente (Theme)
  useEffect(() => setMounted(true), []);

  // Configuración de los botones con la paleta Gruvbox
  const navLinks = [
    { name: t('nav-projects'), href: '#projects', icon: Code2, color: 'hover:bg-gruvbox-green-bright border-gruvbox-green' },
    { name: t('nav-skills'), href: '#skills', icon: Terminal, color: 'hover:bg-gruvbox-yellow-bright border-gruvbox-yellow' },
    { name: 'Experience', href: '#experience', icon: Briefcase, color: 'hover:bg-gruvbox-blue-bright border-gruvbox-blue' },
    { name: 'Blog', href: '/blog', icon: BookOpen, color: 'hover:bg-gruvbox-purple-bright border-gruvbox-purple' },
    { name: t('nav-about'), href: '#about', icon: User, color: 'hover:bg-gruvbox-aqua-bright border-gruvbox-aqua' },
    { 
      name: 'CV', 
      href: lang === 'es' ? '/newcv.pdf' : '/micv_ingles.pdf', 
      icon: Download, 
      color: 'hover:bg-gruvbox-red-bright border-gruvbox-red' 
    },
  ];

  const handleLanguageToggle = () => {
    setLang(lang === 'en' ? 'es' : 'en');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gruvbox-dark0/95 backdrop-blur-md border-b border-gruvbox-dark3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo con Icono de Terminal */}
          <Link href="/" className="p-2 bg-gruvbox-dark2 rounded-lg hover:border-gruvbox-aqua-bright transition-all border border-transparent flex items-center justify-center">
            <Terminal className="text-gruvbox-aqua-bright w-6 h-6" />
          </Link>

          {/* Navegación para Escritorio */}
          <div className="hidden xl:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`flex items-center gap-2 px-3 py-1.5 border-b-2 bg-gruvbox-dark1 text-gruvbox-light1 text-[11px] font-black uppercase tracking-tighter transition-all hover:text-gruvbox-dark0 ${link.color}`}
              >
                <link.icon size={14} />
                {link.name}
              </Link>
            ))}

            <div className="h-6 w-[1px] bg-gruvbox-dark3 mx-2" />

            {/* Switch de Idioma con Estado Global */}
            <button 
              onClick={handleLanguageToggle}
              className="flex items-center gap-2 px-3 py-1.5 bg-gruvbox-dark2 border border-gruvbox-orange text-gruvbox-orange-bright text-[10px] font-bold rounded hover:bg-gruvbox-orange-bright hover:text-gruvbox-dark0 transition-all uppercase"
            >
              <Languages size={14} />
              {lang === 'en' ? 'EN' : 'ES'}
            </button>

            {/* Switch de Tema */}
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-gruvbox-yellow-bright hover:bg-gruvbox-dark2 rounded-md transition-colors"
            >
              {mounted && (theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />)}
            </button>
          </div>

          {/* Botón para Menú Móvil */}
          <div className="xl:hidden flex items-center gap-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gruvbox-light1 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil (Overlay) */}
      {isOpen && (
        <div className="xl:hidden bg-gruvbox-dark1 border-b border-gruvbox-dark3 p-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-4 px-4 py-3 border-l-4 font-bold text-gruvbox-light1 ${link.color.replace('hover:', 'bg-')}/10`}
            >
              <link.icon size={18} />
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gruvbox-dark3">
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