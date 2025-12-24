import { getTranslations } from 'next-intl/server';
import { Code2, Terminal, Cpu, Globe } from 'lucide-react';

export default async function Skills() {
  const t = await getTranslations('Index');

  const categories = [
    {
      title: 'Frontend',
      color: 'text-gruvbox-aqua-bright',
      skills: ['React', 'Next.js', 'Tailwind', 'TypeScript']
    },
    {
      title: 'Backend',
      color: 'text-gruvbox-green-bright',
      skills: ['Python', 'PostgreSQL', 'Node.js', 'API Design']
    },
    {
      title: 'Systems & DevOps',
      color: 'text-gruvbox-orange-bright',
      skills: ['Linux Arch/Debian', 'Docker', 'Bash Scripting', 'Git']
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl font-bold text-gruvbox-light0">
          <span className="text-gruvbox-yellow-bright font-mono mr-2">02.</span>
          {t('techTitle')}
        </h2>
        <div className="h-[1px] bg-gruvbox-dark3 flex-grow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <div key={cat.title} className="bg-gruvbox-dark1 p-8 rounded-lg border border-gruvbox-dark3 hover:border-gruvbox-dark4 transition-all group">
            <h3 className={`text-xl font-bold mb-6 flex items-center gap-3 ${cat.color}`}>
              <Terminal size={20} />
              {cat.title}
            </h3>
            <ul className="space-y-3">
              {cat.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-gruvbox-light2 font-mono text-sm">
                  <span className="text-gruvbox-gray">›</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}