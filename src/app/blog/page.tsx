import Link from 'next/link';
import Image from 'next/image'; // Importamos Image de Next.js
import { getAllPosts } from '@/lib/mdx';
import { Calendar, Tag, ArrowRight, Search } from 'lucide-react';
import BackButton from '@/components/ui/BackButton';

export const metadata = {
  title: 'Blog | Mario Ramírez',
  description: 'Artículos sobre Linux, Desarrollo Web y DevOps.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-[var(--bg-page)] pt-20 pb-15 px-1 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* === HEADER === */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex flex-col md:flex-row md:items-start gap-6 lg:gap-8 w-full">
            <div className="pt-2">
              <BackButton href="/" label="cd .." />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-heading)] mb-4">
                <span className="text-gruvbox-purple">~/</span>blog
              </h1>
              <p className="text-lg text-[var(--text-main)] opacity-70 max-w-2xl">
                Bitácora de desarrollo. Aquí comparto mis experiencias con Linux,
                soluciones a problemas oscuros y guías de DevOps.
              </p>
            </div>
          </div>
          
          {/* Barra de búsqueda decorativa (funcionalidad futura) */}
          <div className="w-full md:w-auto">
             <div className="flex items-center bg-[var(--bg-card)] px-4 py-3 border-2 border-[var(--border-color)] w-full md:w-72">
                <Search size={18} className="text-gruvbox-gray mr-3" />
                <input 
                  type="text" 
                  placeholder="grep 'linux'..." 
                  className="bg-transparent border-none outline-none text-sm w-full text-[var(--text-main)] placeholder-gruvbox-gray font-mono"
                  disabled
                />
             </div>
          </div>
        </div>

        {/* === GRID DE ARTÍCULOS === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl overflow-hidden hover:border-gruvbox-orange/50 hover:shadow-2xl hover:shadow-gruvbox-orange/5 transition-all duration-300 animate-in fade-in slide-in-from-bottom-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* IMAGEN DE PORTADA */}
              <div className="relative h-48 w-full overflow-hidden bg-gruvbox-bg">
                {post.meta.image ? (
                   /* Usamos <img> normal si es URL externa o <Image> si es local. 
                      Para simplificar con links externos en MDX, uso <img> con object-cover */
                   <img 
                     src={post.meta.image} 
                     alt={post.meta.title}
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                   />
                ) : (
                  // Fallback si no hay imagen: Un patrón o color sólido
                  <div className="w-full h-full flex items-center justify-center bg-gruvbox-dark0 relative">
                     <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fabd2f_1px,transparent_1px)] [background-size:16px_16px]"></div>
                     <span className="text-4xl opacity-20 font-black text-gruvbox-yellow">
                        ./LOG
                     </span>
                  </div>
                )}
                
                {/* Overlay fecha */}
                <div className="absolute top-4 right-4 bg-gruvbox-yellow border-2 border-[var(--border-color)] px-3 py-1 text-xs font-mono font-bold text-gruvbox-dark0 shadow-[4px_4px_0_0_var(--border-color)]">
                   {post.meta.date}
                </div>
              </div>

              {/* CONTENIDO DE LA TARJETA */}
              <div className="flex-1 p-6 flex flex-col">
                {/* Tags */}
                <div className="flex gap-2 flex-wrap mb-3">
                  {post.meta.tags?.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[10px] font-mono font-bold uppercase tracking-wider text-gruvbox-blue">
                      #{tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-xl font-bold text-[var(--text-heading)] mb-3 leading-snug group-hover:text-gruvbox-orange transition-colors line-clamp-2">
                  {post.meta.title}
                </h2>

                <p className="text-sm text-[var(--text-main)] opacity-70 mb-6 line-clamp-3 flex-1 leading-relaxed">
                  {post.meta.description}
                </p>

                <div className="flex items-center text-sm font-bold text-gruvbox-green mt-auto group/btn">
                  <span className="group-hover/btn:underline decoration-2 underline-offset-4">Leer artículo</span>
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
            <div className="text-center py-32 border-2 border-dashed border-[var(--border-color)] rounded-xl opacity-50 font-mono">
              <p className="text-xl mb-2">Directorios vacíos...</p>
              <p className="text-sm">Ejecuta <span className="text-gruvbox-yellow">touch nuevo_post.mdx</span> para empezar.</p>
            </div>
        )}

      </div>
    </main>
  );
}