import { motion } from 'framer-motion';
import { achievements } from '../data/achievements';
import { Trophy, Medal, Lightbulb, Users, GitBranch } from 'lucide-react';

const CATEGORY_ICONS = {
  Sports: Medal,
  Hackathon: Trophy,
  'College Events': Users,
  'Open Source': GitBranch,
  Engineering: Lightbulb,
};

export function Achievements() {
  return (
    <section id="achievements" className="bg-bg py-20 md:py-32 relative overflow-hidden border-t border-stroke/50">
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
              Milestones & Recognition
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-sans tracking-tight text-text-primary">
            Key <span className="font-display italic text-[#89AACC]">achievements</span>
          </h2>

          <p className="text-sm md:text-base text-muted max-w-xl mt-3 leading-relaxed">
            Factual milestones across competitive athletics, hackathon sprints, technical workshops, and open-source contributions.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, idx) => {
            const Icon = CATEGORY_ICONS[item.category as keyof typeof CATEGORY_ICONS] || Trophy;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-3xl bg-surface/50 border border-stroke hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-bg border border-stroke flex items-center justify-center text-[#89AACC] group-hover:scale-110 transition-transform">
                      <Icon size={20} />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-0.5 rounded-full bg-bg border border-stroke text-text-primary/90">
                        {item.badge}
                      </span>
                      <span className="text-xs font-mono text-muted/70">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display italic text-text-primary mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs font-mono text-[#89AACC] mb-3">
                    {item.organization}
                  </p>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed font-light">
                    {item.description}
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
