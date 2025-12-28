'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Download, ExternalLink, FileText, Calendar, HardDrive, ArrowLeft, Maximize2 } from 'lucide-react';

export default function CVPage() {
  const { content } = useLanguage();
  const { cv } = content;

  return (
    <main className="min-h-screen bg-[var(--bg-page)] pt-24 pb-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-8 animate-in fade-in slide-in-from-left-4 duration-500">
            <Link 
                href="/" 
                className="group inline-flex items-center gap-4 font-mono font-bold transition-colors
                  text-xl md:text-2xl 
                  text-gruvbox-gray hover:text-gruvbox-green
                  dark:hover:text-gruvbox-green-bright"
            >
                <ArrowLeft className="w-8 h-8 md:w-8 md:h-8 transition-transform group-hover:-translate-x-3" /> 
                <span>cd ..</span>
            </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* --- COLUMNA IZQUIERDA: INFO Y ACCIONES --- */}
          <div className="lg:col-span-4 space-y-8 animate-in slide-in-from-left-4 duration-700">
            
            {/* Encabezado */}
            <div>
              <h1 className="text-4xl font-bold text-[var(--text-heading)] mb-2">
                {cv.title}
              </h1>
              <p className="text-lg text-[var(--text-main)] opacity-70">
                {cv.subtitle}
              </p>
            </div>

            {/* Caja de Metadata (Estilo Archivo de Sistema) */}
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[var(--border-color)]">
                <FileText className="text-gruvbox-blue" size={24} />
                <span className="font-mono text-sm font-bold text-[var(--text-main)] truncate">
                  {cv.fileName}
                </span>
              </div>
              
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-gruvbox-gray flex items-center gap-2">
                    <Calendar size={14} /> Updated:
                  </span>
                  <span className="text-[var(--text-main)]">{cv.info.updated}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gruvbox-gray flex items-center gap-2">
                    <HardDrive size={14} /> Size:
                  </span>
                  <span className="text-[var(--text-main)]">{cv.info.size}</span>
                </div>
                 <div className="flex justify-between">
                  <span className="text-gruvbox-gray flex items-center gap-2">
                    <FileText size={14} /> Type:
                  </span>
                  <span className="text-gruvbox-purple">PDF Document</span>
                </div>
              </div>
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-col gap-3">
              <a 
                href={cv.file} 
                download={cv.fileName}
                className="flex items-center justify-center gap-2 w-full py-4 bg-gruvbox-green text-gruvbox-dark0 font-bold rounded hover:bg-gruvbox-green-bright transition-all shadow-md active:scale-95"
              >
                <Download size={20} />
                {cv.downloadBtn}
              </a>
              
              <a 
                href={cv.file} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] font-bold rounded hover:border-gruvbox-blue hover:text-gruvbox-blue transition-all active:scale-95"
              >
                <ExternalLink size={20} />
                {cv.openBtn}
              </a>
            </div>

            <p className="text-sm text-[var(--text-main)] opacity-60 leading-relaxed">
              {cv.description}
            </p>
          </div>

          {/* --- COLUMNA DERECHA: VISUALIZADOR PDF (Ventana) --- */}
          <div className="lg:col-span-8 h-[600px] lg:h-[800px] animate-in zoom-in duration-500 delay-100">
            
            {/* Marco de Ventana */}
            <div className="h-full w-full bg-[#282828] border border-gruvbox-gray/50 rounded-lg shadow-2xl overflow-hidden flex flex-col">
              
              {/* Barra de Título de la Ventana */}
              <div className="bg-[#1d2021] px-4 py-2 flex items-center justify-between border-b border-gruvbox-gray/30 shrink-0">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-gruvbox-red hover:bg-red-400 cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-gruvbox-yellow hover:bg-yellow-400 cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-gruvbox-green hover:bg-green-400 cursor-pointer"></div>
                </div>
                <div className="text-gruvbox-gray text-xs font-mono opacity-80 select-none">
                  pdf_viewer — {cv.fileName}
                </div>
                <div className="w-4 flex justify-end">
                   <Maximize2 size={12} className="text-gruvbox-gray opacity-50" />
                </div>
              </div>

              {/* El PDF Viewer */}
              <div className="flex-1 bg-white relative w-full h-full">
                <object
                  data={cv.file}
                  type="application/pdf"
                  className="w-full h-full"
                >
                  {/* Este contenido SOLO se muestra si el navegador no puede mostrar el PDF */}
                  <div className="flex flex-col items-center justify-center h-full space-y-4 p-8 text-center text-gruvbox-dark0">
                     <p>Tu navegador no puede previsualizar este PDF.</p>
                     <a href={cv.file} download className="text-gruvbox-blue underline font-bold">
                       Descárgalo aquí
                     </a>
                  </div>
                </object>
              </div>
              
              {/* Barra de Estado Inferior (Estilo Vim) */}
              <div className="bg-[#1d2021] px-4 py-1 flex justify-between items-center text-[10px] font-mono text-gruvbox-fg border-t border-gruvbox-gray/30 shrink-0">
                 <span className="text-gruvbox-yellow">READ ONLY</span>
                 <span className="text-gruvbox-aqua">100%</span>
                 <span className="text-gruvbox-gray">Document Loaded</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}