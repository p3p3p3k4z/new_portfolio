import Link from 'next/link';
import { getPostBySlug } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, Hash, Share2 } from 'lucide-react';

// === PLUGINS ===
// remarkUnwrapImages: Evita el error de hidratación (<div> dentro de <p>) sacando las imgs de los párrafos.
import remarkUnwrapImages from 'remark-unwrap-images';
// remarkGfm: Habilita sintaxis avanzada de Markdown como Tablas, Strikethrough, etc.
import remarkGfm from 'remark-gfm';

import Callout from '@/components/mdx/Callout';
import CustomImage from '@/components/mdx/CustomImage';
import CodeBlock from '@/components/mdx/CodeBlock';
import Kbd from '@/components/mdx/Kbd';
// Importamos los componentes atómicos para construir la tabla
import { Table, Thead, Th, Tr, Td } from '@/components/mdx/TableComponents';

// === MAPEO MDX ===
// Aquí interceptamos las etiquetas HTML estándar que genera Markdown
// y las sustituimos por nuestros componentes de React estilizados.
const components = {
  Callout, // Componente explícito <Callout />
  img: (props: any) => <CustomImage {...props} />, // ![alt](src) -> CustomImage (Polaroid style)
  pre: (props: any) => <CodeBlock {...props} />,   // ```code``` -> CodeBlock (Terminal con copy)
  kbd: (props: any) => <Kbd {...props} />,         // <kbd> -> Kbd (Estilo tecla física)
  
  // Mapeo completo de tablas para que usen nuestros estilos Gruvbox y sean responsivas
  table: (props: any) => <Table {...props} />,
  thead: (props: any) => <Thead {...props} />,
  th: (props: any) => <Th {...props} />,
  tr: (props: any) => <Tr {...props} />,
  td: (props: any) => <Td {...props} />,
};

// Next.js 15 maneja params como una Promesa
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPost({ params }: Props) {
  // 1. Resolvemos la promesa de los parámetros (Vital en Next 15)
  const { slug } = await params;
  
  // 2. Buscamos el contenido en el sistema de archivos
  const post = getPostBySlug(slug);

  // 3. Si el slug no existe en la carpeta content/, lanzamos 404
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[var(--bg-page)] pt-24 pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      
      {/* Botón flotante "Atrás" exclusivo para móviles (z-index alto para sobreponerse) */}
      <Link href="/blog" className="fixed bottom-6 right-6 z-50 lg:hidden bg-[#282828] border border-[#928374] p-3 rounded-full shadow-lg text-[#d65d0e] active:scale-95">
        <ArrowLeft size={24} />
      </Link>

      {/* === LAYOUT GRID === 
          Desktop: 1 columna flexible (artículo) + 260px fijos (sidebar)
          Gap-12: Separación generosa entre contenido y barra lateral
      */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12">
        
        {/* === COLUMNA PRINCIPAL (ARTÍCULO) === 
            min-w-0: TRUCO CSS CRÍTICO. En Grid, si un hijo (como un bloque de código) 
            es más ancho que la columna, el grid explota. Esto fuerza al hijo a encogerse/hacer scroll.
        */}
        <article className="min-w-0 w-full">
          
          {/* Navegación tipo terminal (Solo Desktop) */}
          <div className="hidden lg:block mb-6">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-[#928374] hover:text-[#d65d0e] font-mono text-xs transition-colors group"
            >
              <span className="text-[#98971a] opacity-50">$</span>
              <span className="group-hover:underline decoration-2 underline-offset-4">cd ..</span>
            </Link>
          </div>

          {/* Header del Artículo */}
          <header className="mb-8 pb-8 border-b-2 border-dotted border-[var(--border-color)]">
             <div className="flex flex-wrap gap-2 mb-4">
                {post.meta.tags?.map(tag => (
                   <span key={tag} className="px-2 py-0.5 bg-[#458588]/10 text-[#458588] text-[10px] font-bold uppercase tracking-wider rounded border border-[#458588]/20">
                     {tag}
                   </span>
                ))}
             </div>
             
             {/* break-words: Asegura que títulos muy largos no generen scroll horizontal */}
             <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--text-heading)] mb-6 leading-tight break-words">
               {post.meta.title}
             </h1>

             {post.meta.image && (
                <div className="w-full h-auto aspect-video relative rounded-lg overflow-hidden border border-[var(--border-color)] mb-6 shadow-sm">
                   <img 
                      src={post.meta.image} 
                      alt="Cover" 
                      className="w-full h-full object-cover"
                   />
                </div>
             )}
          </header>

          {/* === CUERPO DEL CONTENIDO (Tailwind Typography) === 
              prose-invert: Ajusta colores para modo oscuro automáticamente.
              max-w-none: Importante. Por defecto 'prose' limita el ancho a 65ch. Lo quitamos para que el Grid controle el ancho.
          */}
          <div className="prose prose-lg prose-invert max-w-none break-words
            /* Personalización de colores Gruvbox para elementos tipográficos */
            prose-headings:text-[var(--text-heading)] prose-headings:font-bold prose-headings:tracking-tight
            prose-h1:text-3xl prose-h1:text-[#d65d0e]
            prose-h2:text-2xl prose-h2:text-[#fabd2f] prose-h2:mt-12 prose-h2:border-b prose-h2:border-[#928374]/20 prose-h2:pb-2
            prose-h3:text-xl prose-h3:text-[#b8bb26] prose-h3:mt-8
            prose-p:text-[var(--text-main)] prose-p:leading-8 prose-p:font-normal prose-p:opacity-90 prose-p:my-5
            prose-strong:text-[#fe8019] prose-strong:font-bold
            prose-ul:list-disc prose-ul:pl-5 prose-li:marker:text-[#d79921] prose-li:my-1
            prose-a:text-[#83a598] prose-a:font-medium prose-a:no-underline hover:prose-a:text-[#458588] hover:prose-a:underline hover:prose-a:decoration-2
            
            /* Estilos para Blockquotes (Citas) */
            prose-blockquote:border-l-4 prose-blockquote:border-[#d65d0e] prose-blockquote:bg-[var(--bg-card)] prose-blockquote:px-5 prose-blockquote:py-2 prose-blockquote:not-italic prose-blockquote:text-sm prose-blockquote:text-opacity-80
            
            /* Código Inline (el que va dentro de frases) */
            prose-code:text-[#8ec07c] prose-code:font-mono prose-code:text-sm prose-code:bg-[#1d2021] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:hidden prose-code:after:hidden
            
            /* Reset para Bloques de Código (Pre): Quitamos estilos de prose porque CodeBlock se encarga */
            prose-pre:max-w-full prose-pre:overflow-x-auto
          ">
            <MDXRemote 
              source={post.content} 
              components={components}
              options={{
                mdxOptions: {
                  // Inyectamos los plugins necesarios para la transformación del Markdown
                  remarkPlugins: [remarkUnwrapImages, remarkGfm],
                }
              }} 
            />
          </div>
        </article>

        {/* === SIDEBAR (Barra Lateral) === */}
        <aside className="hidden lg:block h-full">
           {/* sticky top-24: Hace que la sidebar te siga mientras haces scroll */}
           <div className="sticky top-24 space-y-6">
              
              {/* Tarjeta de Metadata */}
              <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg p-5 shadow-sm">
                 <h3 className="text-[10px] font-mono font-bold text-[#928374] uppercase mb-4 tracking-widest border-b border-[var(--border-color)] pb-2">
                    Metadata
                 </h3>
                 <div className="space-y-3 text-xs">
                    <div className="flex justify-between items-center">
                       <span className="flex items-center gap-2 text-[#928374]">
                          <Calendar size={14} /> Fecha
                       </span>
                       <span className="font-mono text-[var(--text-main)]">{post.meta.date}</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="flex items-center gap-2 text-[#928374]">
                          <Clock size={14} /> Tiempo
                       </span>
                       <span className="font-mono text-[var(--text-main)]">~5 min</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="flex items-center gap-2 text-[#928374]">
                          <Hash size={14} /> Tipo
                       </span>
                       <span className="font-mono text-[#b16286]">Tech / Note</span>
                    </div>
                 </div>
                 {/* Botón decorativo de compartir */}
                 <div className="mt-5 pt-4 border-t border-[var(--border-color)]">
                    <button className="w-full flex items-center justify-center gap-2 py-2 text-[10px] font-bold uppercase tracking-wider text-[#689d6a] border border-[#689d6a] rounded hover:bg-[#689d6a] hover:text-[#1d2021] transition-all">
                       <Share2 size={12} /> Compartir
                    </button>
                 </div>
              </div>

              {/* Decoración: Simula un grafo de conocimiento tipo Obsidian */}
              <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg p-5 opacity-60 hover:opacity-100 transition-opacity">
                 <h3 className="text-[10px] font-mono font-bold text-[#928374] uppercase mb-3 tracking-widest">
                    Conexiones
                 </h3>
                 <div className="flex flex-col gap-2">
                    <span className="text-xs text-[var(--text-main)] hover:text-[#98971a] cursor-pointer hover:underline decoration-dotted flex items-center gap-1">
                       <span className="text-[#928374] opacity-50">[[</span>Linux Kernel<span className="text-[#928374] opacity-50">]]</span>
                    </span>
                    <span className="text-xs text-[var(--text-main)] hover:text-[#98971a] cursor-pointer hover:underline decoration-dotted flex items-center gap-1">
                       <span className="text-[#928374] opacity-50">[[</span>Terminal<span className="text-[#928374] opacity-50">]]</span>
                    </span>
                 </div>
              </div>
           </div>
        </aside>

      </div>
    </main>
  );
}