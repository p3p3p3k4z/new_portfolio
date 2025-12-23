import { getTranslations } from 'next-intl/server';
import ProjectCard from '@/components/ProjectCard';
import { Project } from '@/types/project';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
  // Unwrapping params for Next.js 15
  const { locale } = await params;
  
  // Use getTranslations for Server Components
  const t = await getTranslations('Index');

  const projects: Project[] = [
    {
      id: '1',
      title: 'Agenda AI',
      description: 'Full-stack application for personal schedule management with AI integration.',
      technologies: ['TypeScript', 'Next.js', 'Prisma', 'Gemini API'],
      imageUrl: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1000',
      githubUrl: '#'
    }
  ];

  return (
    <div className="py-20 space-y-32">
      <section className="animate-in fade-in slide-in-from-bottom-5 duration-1000">
        <h1 className="text-6xl md:text-8xl font-black text-gruvbox-yellow-bright tracking-tighter mb-6">
          {t('title')}
        </h1>
        <p className="text-xl md:text-2xl text-gruvbox-light2 max-w-3xl leading-relaxed font-medium">
          {t('about')}
        </p>
      </section>

      <section id="projects">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-gruvbox-light0 whitespace-nowrap">
            <span className="text-gruvbox-orange-bright font-mono text-2xl mr-2">01.</span>
            {t('projectsTitle')}
          </h2>
          <div className="h-[1px] bg-gruvbox-dark3 w-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}