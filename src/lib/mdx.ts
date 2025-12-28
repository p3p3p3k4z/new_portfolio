import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Definimos dónde se guardarán tus artículos
const postsDirectory = path.join(process.cwd(), 'src/content');

export interface BlogPost {
  slug: string;
  meta: {
    title: string;
    date: string;
    description: string;
    tags?: string[];
    image?: string;
  };
  content: string; // El contenido raw
}

// 1. Obtener todos los slugs (nombres de archivo)
export function getPostSlugs() {
  // Asegurarnos de que la carpeta exista
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory);
}

// 2. Obtener un post por su slug
export function getPostBySlug(slug: string): BlogPost | null {
  if (!slug) return null;

  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: realSlug,
      meta: data as BlogPost['meta'],
      content,
    };
  } catch (err) {
    return null;
  }
}

// 3. Obtener todos los posts ordenados por fecha
export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    // Ordenar por fecha descendente
    .sort((post1, post2) => (post1.meta.date > post2.meta.date ? -1 : 1));
  
  return posts;
}