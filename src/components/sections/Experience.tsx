import { getTranslations } from 'next-intl/server';

export default async function Experience() {
  const t = await getTranslations('Index');

  const jobs = [
    {
      company: 'Freelance / Personal Projects',
      role: 'Full Stack Developer',
      period: '2023 - Present',
      color: 'border-gruvbox-aqua'
    },
    {
      company: 'University Lab',
      role: 'Linux Systems Assistant',
      period: '2022 - 2023',
      color: 'border-gruvbox-purple'
    }
  ];

  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
        <span className="text-gruvbox-orange-bright font-mono">03.</span>
        {t('experienceTitle' as any)} 
      </h2>

      <div className="space-y-8">
        {jobs.map((job) => (
          <div key={job.company} className={`p-6 bg-gruvbox-dark1 border-l-4 ${job.color} rounded-r-lg`}>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-gruvbox-light0">{job.role}</h3>
              <span className="text-gruvbox-gray font-mono text-sm">{job.period}</span>
            </div>
            <p className="text-gruvbox-yellow-bright font-medium">{job.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}