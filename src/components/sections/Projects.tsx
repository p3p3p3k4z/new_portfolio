import { getTranslations } from 'next-intl/server';
import ProjectCard from '../ui/ProjectCard';
import { Project } from '@/types/project';

export default async function Projects() {
  const t = await getTranslations('Index');

  const projects: Project[] = [
    {
      id: '1',
      title: 'Agenda AI',
      description: 'Full-stack application for schedule management with AI.',
      technologies: ['TypeScript', 'Next.js', 'Prisma'],
      imageUrl: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1000',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-gruvbox-light0 whitespace-nowrap">
          <span className="text-gruvbox-orange-bright font-mono text-2xl mr-2">01.</span>
          {t('projectsTitle')}
        </h2>
        <div className="h-[1px] bg-gruvbox-dark3 w-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  );
}