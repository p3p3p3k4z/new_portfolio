'use client';
import { useState, useRef } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';

interface CodeBlockProps {
  children: any;
  [key: string]: any;
}

export default function CodeBlock({ children, ...props }: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  // Extraer lenguaje
  const language = children?.props?.className?.replace('language-', '') || 'text';

  const copyToClipboard = async () => {
    if (preRef.current) {
      const codeText = preRef.current.textContent || '';
      await navigator.clipboard.writeText(codeText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="
      my-6 
      rounded-lg 
      overflow-hidden 
      shadow-md 
      group 
      border 
      transition-colors duration-300
      /* TEMA CLARO (Default): Fondo crema, borde suave */
      bg-[#fbf1c7] 
      border-[#d5c4a1]
      /* TEMA OSCURO (Dark): Fondo gris duro, borde oscuro */
      dark:bg-[#1d2021] 
      dark:border-[#3c3836]
    ">
      
      {/* HEADER DE LA TERMINAL */}
      <div className="
        flex items-center justify-between px-4 py-2 border-b 
        transition-colors duration-300
        /* CLARO: Fondo un poco más oscuro que el body */
        bg-[#ebdbb2] 
        border-[#d5c4a1]
        /* OSCURO: Fondo del layout */
        dark:bg-[#282828] 
        dark:border-[#3c3836]
      ">
        <div className="flex items-center gap-2">
          {/* Botones de ventana (Semáforo) */}
          <div className="flex gap-1.5 mr-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#cc241d] dark:bg-[#fb4934] opacity-80"></div> {/* Red */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#d79921] dark:bg-[#fabd2f] opacity-80"></div> {/* Yellow */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#98971a] dark:bg-[#b8bb26] opacity-80"></div> {/* Green */}
          </div>
          <span className="
            text-xs font-mono font-bold uppercase select-none flex items-center gap-1
            text-[#504945] dark:text-[#a89984]
          ">
             <Terminal size={12} /> {language}
          </span>
        </div>

        {/* Botón Copiar */}
        <button
          onClick={copyToClipboard}
          className="
            relative p-1.5 rounded transition-all
            hover:bg-[#d5c4a1] dark:hover:bg-[#3c3836]
            text-[#504945] dark:text-[#a89984]
            hover:text-[#282828] dark:hover:text-[#ebdbb2]
          "
          aria-label="Copiar código"
        >
          {isCopied ? (
            <Check size={16} className="text-[#98971a] dark:text-[#b8bb26] animate-in zoom-in duration-300" />
          ) : (
            <Copy size={16} />
          )}
        </button>
      </div>

      {/* ÁREA DE CÓDIGO */}
      <div className="relative overflow-x-auto">
        <pre
          ref={preRef}
          {...props}
          className="
            p-4 m-0 overflow-x-auto font-mono text-sm leading-relaxed 
            transition-colors duration-300
            selection:bg-[#d79921]/30
            /* CLARO: Texto oscuro sobre fondo claro */
            text-[#3c3836] 
            bg-[#fbf1c7]
            /* OSCURO: Texto claro sobre fondo oscuro */
            dark:text-[#ebdbb2] 
            dark:bg-[#1d2021]
          "
        >
          {children}
        </pre>
      </div>
    </div>
  );
}