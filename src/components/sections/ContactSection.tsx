'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { profile } from '@/data/profile';
import { Mail, Github, Linkedin, Copy, Check, Phone } from 'lucide-react';

export default function ContactSection() {
  const { content } = useLanguage();
  const contact = content?.contact || { heading: 'Contact' };
  
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Helper simple para limpiar URLs y mostrar solo el usuario
  // Ejemplo: https://github.com/p3p3p3k4z -> p3p3p3k4z
  const getHandle = (url: string) => {
    return url.replace(/\/$/, '').split('/').pop();
  };

  return (
    <section id="contact" className="py-24 section-padding bg-[var(--bg-page)]">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* ENCABEZADO FORMAL */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-heading)] mb-6">
            {contact.heading}
          </h2>
          <p className="text-lg text-[var(--text-main)] opacity-80 max-w-2xl mx-auto leading-relaxed">
            {contact.description}
          </p>
        </div>

        {/* --- TARJETA DE CONTACTO (CENTRAL) --- */}
        <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-8 md:p-12 shadow-lg max-w-2xl mx-auto animate-in zoom-in duration-500 delay-100 relative overflow-hidden group">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-gruvbox-blue opacity-5 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity group-hover:opacity-10" />
          
          <div className="flex flex-col items-center text-center relative z-10">
            <div className="w-14 h-14 bg-[var(--bg-page)] border border-[var(--border-color)] rounded-full flex items-center justify-center mb-6 text-gruvbox-blue">
              <Mail size={28} />
            </div>

            <h3 className="text-sm font-mono text-gruvbox-gray mb-3 uppercase tracking-wider font-bold">
              {contact.mailLabel}
            </h3>
            
            <p className="text-xl md:text-2xl font-bold text-[var(--text-heading)] mb-8 break-all select-all">
              {profile.email}
            </p>

            <div className="flex flex-wrap justify-center gap-4 w-full">
              {/* Botón Principal */}
              <a 
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 px-8 py-3 bg-gruvbox-blue text-gruvbox-dark0 font-bold rounded hover:bg-gruvbox-blue-bright transition-all shadow-md active:scale-95"
              >
                <Mail size={18} />
                {contact.btnSend}
              </a>

              {/* Botón Copiar */}
              <button 
                onClick={handleCopy}
                className="flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-[var(--border-color)] text-[var(--text-main)] font-bold rounded hover:border-gruvbox-green hover:text-gruvbox-green transition-all active:scale-95"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
                {copied ? contact.copied : contact.btnCopy}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <p className="text-sm font-mono text-gruvbox-gray mb-8 uppercase tracking-widest text-[10px]">
            {contact.socialTitle}
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 items-center flex-wrap">
             
             {/* GitHub */}
             {profile.social.github && (
               <a href={profile.social.github} target="_blank" rel="noopener noreferrer" 
                  className="group flex items-center gap-3 px-5 py-3 rounded-lg border border-transparent hover:border-[var(--border-color)] hover:bg-[var(--bg-card)] transition-all duration-300"
                  title="GitHub Profile">
                 <div className="text-[var(--text-main)] group-hover:text-gruvbox-orange transition-colors">
                    <Github size={24} />
                 </div>
                 <span className="font-mono text-sm font-bold text-[var(--text-main)] group-hover:text-gruvbox-orange">
                    {getHandle(profile.social.github)}
                 </span>
               </a>
             )}
             
             {/* LinkedIn */}
             {profile.social.linkedin && (
               <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" 
                  className="group flex items-center gap-3 px-5 py-3 rounded-lg border border-transparent hover:border-[var(--border-color)] hover:bg-[var(--bg-card)] transition-all duration-300"
                  title="LinkedIn Profile">
                 <div className="text-[var(--text-main)] group-hover:text-gruvbox-blue transition-colors">
                    <Linkedin size={24} />
                 </div>
                 <span className="font-mono text-sm font-bold text-[var(--text-main)] group-hover:text-gruvbox-blue">
                    {getHandle(profile.social.linkedin)}
                 </span>
               </a>
             )}

             {/* Teléfono */}
             {profile.phone && (
               <a 
                  href={`tel:${profile.phone}`} 
                  className="group flex items-center gap-3 px-5 py-3 rounded-lg border border-transparent hover:border-[var(--border-color)] hover:bg-[var(--bg-card)] transition-all duration-300"
                  title="Llamar"
               >
                 <div className="text-[var(--text-main)] group-hover:text-gruvbox-green transition-colors">
                    <Phone size={24} />
                 </div>
                 <span className="font-mono text-sm font-bold text-[var(--text-main)] group-hover:text-gruvbox-green">
                    {profile.phone}
                 </span>
               </a>
             )}
          </div>
        </div>

      </div>
    </section>
  );
}