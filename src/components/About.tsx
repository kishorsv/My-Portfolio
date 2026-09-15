import { motion } from 'framer-motion';
import { personalInfo } from '../data/socials';
import { SectionDivider } from './SectionDivider';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export function About() {
  const narrativePillars = [
    {
      num: '01',
      title: '2nd-Year Engineering Foundation',
      desc: 'Grounding high-level AI concepts in rigorous Data Structures & Algorithms, Systems Architecture, and Operating Principles in Bengaluru.',
      badge: 'Academics',
    },
    {
      num: '02',
      title: 'Applied Generative AI',
      desc: 'Building agentic pipelines, RAG with high-dimensional vector spaces, and deterministic guardrails around probabilistic models.',
      badge: 'Core Focus',
    },
    {
      num: '03',
      title: 'Full-Stack Engineering',
      desc: 'Creating end-to-end digital products with React 19, TypeScript, FastAPI, and scalable databases with zero layout-shift streaming.',
      badge: 'Production Systems',
    },
  ];

  return (
    <section id="about" className="bg-[#080808] py-24 md:py-36 relative overflow-hidden">
      {/* Editorial Section Divider */}
      <SectionDivider number="01" label="ABOUT & PHILOSOPHY" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-8">
        {/* Huge Editorial Statement with Inter + Instrument Serif Contrast */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-28 max-w-5xl"
        >
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#89AACC] mb-6 flex items-center gap-2">
            <Sparkles size={14} />
            <span>Core Engineering Philosophy</span>
          </p>

          <h2 className="editorial-clamp font-light tracking-tight text-text-primary leading-[1.08]">
            I BUILD{' '}
            <span className="font-display italic text-[#89AACC] font-normal text-[1.12em] tracking-normal inline-block pr-2">
              intelligent
            </span>{' '}
            digital experiences that make{' '}
            <span className="font-display italic text-white font-normal underline decoration-white/20 underline-offset-8">
              complex technology
            </span>{' '}
            feel effortless.
          </h2>

          <p className="mt-8 text-base sm:text-lg md:text-xl text-muted/90 max-w-2xl font-light leading-relaxed">
            {personalInfo.aboutMe.philosophy} Combining continuous daily experimentation, software craft, and mathematical discipline to build dependable software.
          </p>
        </motion.div>

        {/* Asymmetrical 3-Column Narrative Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {narrativePillars.map((pillar, idx) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              className="group relative rounded-3xl p-8 border border-white/10 bg-white/[0.02] backdrop-blur-md hover:border-white/25 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display italic text-3xl text-white/30 font-bold group-hover:text-[#89AACC] transition-colors">
                    {pillar.num}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-xl font-medium text-text-primary mb-3 leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-muted/90 font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-[#89AACC]">
                <CheckCircle2 size={13} />
                <span>Active Commitment</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
