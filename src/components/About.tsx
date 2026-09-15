import { motion } from 'framer-motion';
import { personalInfo } from '../data/socials';
import { MapPin, Sparkles, Terminal, Code2 } from 'lucide-react';

export function About() {
  const techPillars = [
    {
      icon: Sparkles,
      title: 'AI & Generative Intelligence',
      skills: ['LangChain', 'FastAPI', 'Vector Embeddings', 'RAG', 'vLLM', 'PyTorch', 'Prompt Harnesses'],
    },
    {
      icon: Code2,
      title: 'Full-Stack Systems',
      skills: ['React 19', 'TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Redis'],
    },
    {
      icon: Terminal,
      title: 'Foundations & Tooling',
      skills: ['Python', 'DSA', 'Docker', 'Git', 'Linux / Bash', 'System Architecture', 'CI/CD'],
    },
  ];

  return (
    <section id="about" className="bg-bg py-24 md:py-36 relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-px bg-[#89AACC]" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted font-medium">
            Philosophy & Craft
          </span>
        </motion.div>

        {/* Large Editorial Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-sans font-light tracking-tight text-text-primary leading-[1.15] max-w-4xl">
            I like turning{' '}
            <span className="font-display italic text-[#89AACC] font-normal">
              complex ideas
            </span>{' '}
            into simple, useful digital experiences.
          </h2>

          <p className="mt-8 text-base sm:text-lg md:text-xl text-muted max-w-2xl leading-relaxed font-light">
            {personalInfo.aboutEditorial.subtext}
          </p>

          <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest text-muted/80 font-mono">
            <MapPin size={14} className="text-[#89AACC]" />
            <span>Based in {personalInfo.location}</span>
          </div>
        </motion.div>

        {/* Core Pillars / Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-6 sm:p-8 rounded-3xl bg-surface/40 border border-stroke hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-bg border border-stroke flex items-center justify-center text-[#89AACC] mb-6">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-sans font-medium text-text-primary mb-3">
                    {pillar.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {pillar.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-bg/80 border border-stroke text-muted font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
