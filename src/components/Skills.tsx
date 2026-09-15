import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { Terminal, BrainCircuit, Layout, Server, Wrench } from 'lucide-react';

const CATEGORY_ICONS = {
  programming: Terminal,
  'ai-genai': BrainCircuit,
  frontend: Layout,
  backend: Server,
  tools: Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="bg-bg py-20 md:py-28 relative overflow-hidden border-t border-stroke/50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#89AACC]" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted font-medium">
              Technical Stack
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-sans tracking-tight text-text-primary">
            Core <span className="font-display italic text-[#89AACC]">skills</span> & toolset
          </h2>

          <p className="text-sm md:text-base text-muted max-w-lg mt-3 leading-relaxed">
            The programming languages, AI frameworks, and development tools I leverage to engineer functional products.
          </p>
        </motion.div>

        {/* 5 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = CATEGORY_ICONS[cat.categoryKey as keyof typeof CATEGORY_ICONS] || Terminal;
            return (
              <motion.div
                key={cat.categoryKey}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 sm:p-7 rounded-3xl bg-surface/50 border border-stroke hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-bg border border-stroke flex items-center justify-center text-[#89AACC] group-hover:scale-110 transition-transform">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-text-primary">
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-muted mb-5 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-stroke/50">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="text-xs px-3 py-1.5 rounded-full bg-bg border border-stroke/80 text-text-primary/90 font-mono tracking-tight hover:border-[#89AACC]/60 transition-colors"
                    >
                      {skill.name}
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
