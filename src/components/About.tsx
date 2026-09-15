import { motion } from 'framer-motion';
import { personalInfo } from '../data/socials';
import { Sparkles, Code2, Rocket, Target, MapPin } from 'lucide-react';

export function About() {
  const pillars = [
    {
      icon: Sparkles,
      title: '2nd-Year Engineering Student',
      tag: 'Academic Foundation',
      description:
        'Currently pursuing a Bachelor of Engineering with a rigorous focus on Artificial Intelligence and Machine Learning in Bengaluru, India.',
    },
    {
      icon: Code2,
      title: 'AI/ML + Full-Stack Synergy',
      tag: 'Technical Focus',
      description:
        'Bridging the gap between cutting-edge AI research and practical web applications—pairing model inference with modern React and FastAPI architectures.',
    },
    {
      icon: Target,
      title: 'Generative AI & Agentic Workflows',
      tag: 'Core Passion',
      description:
        'Deeply fascinated by LLM reasoning loops, vector memory retrieval (RAG), autonomous agents, and deterministic guardrails for probabilistic systems.',
    },
    {
      icon: Rocket,
      title: 'Aspiring Professional AI Engineer',
      tag: 'Long-Term Vision',
      description:
        'Driven to build high-scale, dependable digital products that solve real-world problems. Committed to continuous daily learning and disciplined shipping.',
    },
  ];

  return (
    <section id="about" className="bg-bg py-24 md:py-32 relative overflow-hidden border-t border-stroke/50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-px bg-[#89AACC]" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted font-medium">
            About Me
          </span>
        </motion.div>

        {/* Lead Editorial Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-light tracking-tight text-text-primary leading-[1.15] max-w-4xl">
            A 2nd-year engineer passionate about turning{' '}
            <span className="font-display italic text-[#89AACC] font-normal">
              generative AI concepts
            </span>{' '}
            into dependable, working digital solutions.
          </h2>

          <p className="mt-6 text-base sm:text-lg text-muted max-w-2xl leading-relaxed font-light">
            I don't just study algorithms in textbooks—I test their limits by building functional software. My journey combines rigorous computer science fundamentals with modern full-stack web engineering and real-time AI agents.
          </p>

          <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-widest text-muted/80 font-mono">
            <MapPin size={14} className="text-[#89AACC]" />
            <span>{personalInfo.location} • Available for internships & high-impact projects</span>
          </div>
        </motion.div>

        {/* 4 Thematic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-3xl bg-surface/40 border border-stroke hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-bg border border-stroke flex items-center justify-center text-[#89AACC] group-hover:scale-110 transition-transform">
                      <Icon size={20} />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-bg border border-stroke/70 text-muted">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-sans font-medium text-text-primary mb-2.5">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
