import React from 'react';

// Definimos la interfaz de los datos que espera la terminal
export interface SystemInfo {
  user?: string;
  role?: string;
  education?: string;
  certs?: string;
  contests?: string;
  learning?: string;
  editor?: string;
  languages?: string;
}

interface TerminalWindowProps {
  data: SystemInfo;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({ data }) => {
  // Valores por defecto para evitar errores si falta algún dato
  const info = {
    user: data.user || 'user@host',
    role: data.role || '-',
    education: data.education || '-',
    certs: data.certs || '-',
    contests: data.contests || '-',
    learning: data.learning || '-',
    editor: data.editor || '-',
    languages: data.languages || '-',
  };

  return (
    <div className="relative animate-in zoom-in duration-700 delay-200">
      
      {/* Ventana Terminal - Usamos variables de tema para fondo y borde */}
      <div className="relative bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg shadow-2xl overflow-hidden font-mono text-sm md:text-base transition-colors duration-300">
        
        {/* Barra de título - Usamos variables de tema */}
        <div className="bg-[var(--bg-page)] px-4 py-2 flex items-center justify-between border-b border-[var(--border-color)] transition-colors duration-300">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-gruvbox-red"></div>
            <div className="w-3 h-3 rounded-full bg-gruvbox-yellow"></div>
            <div className="w-3 h-3 rounded-full bg-gruvbox-green"></div>
          </div>
          {/* Color de texto adaptable */}
          <div className="text-[var(--text-main)] opacity-70 text-xs">{info.user}:~</div>
        </div>

        {/* Contenido - Color de texto adaptable */}
        <div className="p-6 text-[var(--text-main)] transition-colors duration-300">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            
            {/* ASCII ART Tux */}
            <div className="hidden sm:block text-gruvbox-red leading-tight select-none opacity-80 pt-2">
              <pre>{`
    .--.
   |o_o |
   |:_/ |
  //   \\ \\
 (|     | )
/'\\_   _/\`\\
\\___)=(___/
              `}</pre>
            </div>

            {/* INFO TÉCNICA */}
            <div className="space-y-3 flex-1 w-full">
              <div>
                <span className="text-gruvbox-green font-bold">{info.user}</span>
                <div className="text-[var(--text-main)] opacity-30">-------------------------</div>
              </div>
              
              <div className="grid grid-cols-[90px_1fr] gap-x-2 gap-y-1">
                  <span className="text-gruvbox-yellow font-bold">Role:</span> 
                  <span className="truncate">{info.role}</span>
                  
                  <span className="text-gruvbox-blue font-bold">Edu:</span> 
                  <span className="truncate">{info.education}</span>
                  
                  <span className="text-gruvbox-purple font-bold">Certs:</span> 
                  <span className="truncate">{info.certs}</span>
                  
                  <span className="text-gruvbox-red font-bold">Awards:</span> 
                  <span className="truncate">{info.contests}</span>
                  
                  <span className="text-gruvbox-orange font-bold">Focus:</span> 
                  <span className="truncate">{info.learning}</span>

                  <span className="text-gruvbox-aqua font-bold">Editor:</span> 
                  <span className="truncate">{info.editor}</span>

                  <span className="text-gruvbox-green font-bold">Lang:</span> 
                  <span className="truncate">{info.languages}</span>
              </div>
              
              {/* Bloques de color */}
              <div className="pt-4 flex gap-2">
                <span className="w-3 h-3 bg-gruvbox-red"></span>
                <span className="w-3 h-3 bg-gruvbox-green"></span>
                <span className="w-3 h-3 bg-gruvbox-yellow"></span>
                <span className="w-3 h-3 bg-gruvbox-blue"></span>
                <span className="w-3 h-3 bg-gruvbox-purple"></span>
                <span className="w-3 h-3 bg-gruvbox-aqua"></span>
              </div>
            </div>
          </div>

          {/* Línea de comando final */}
          <div className="pt-6 flex items-center gap-2">
            <span className="text-gruvbox-green">➜</span>
            <span className="text-gruvbox-blue">~</span>
            <span className="text-[var(--text-main)]">neofetch</span>
            <span className="animate-pulse w-2 h-4 bg-[var(--text-main)] opacity-70"></span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TerminalWindow;