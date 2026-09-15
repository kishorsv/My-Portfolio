import { motion } from 'framer-motion';
import { achievements } from '../data/achievements';
import { SectionDivider } from './SectionDivider';
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
    <section id="achievements" className="bg-[#080808] py-24 md:py-36 relative overflow-hidden">
      {/* Editorial Section Divider */}
      <SectionDivider number="08" label="HONORS & MILESTONES" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#89AACC] mb-3 block">
            Milestones & Recognition
          </span>
          <h2 className="heading-clamp font-light tracking-tight text-text-primary">
            Key <span className="font-display italic text-[#89AACC]">achievements</span>
          </h2>
          <p className="text-sm md:text-base text-muted max-w-xl mt-3 leading-relaxed font-light">
            Verified milestones across athletic competition, civic hackathon sprints, technical workshops, and open-source contributions.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {achievements.map((item, idx) => {
            const Icon = CATEGORY_ICONS[item.category as keyof typeof CATEGORY_ICONS] || Trophy;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 sm:p-10 rounded-3xl border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between group"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#89AACC] group-hover:scale-110 transition-transform">
                      <Icon size={22} />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-text-primary/90">
                        {item.badge}
                      </span>
                      <span className="text-xs font-mono text-muted/70">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display italic text-text-primary mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs font-mono text-[#89AACC] mb-4">
                    {item.organization}
                  </p>

                  <p className="text-xs sm:text-sm text-muted/90 leading-relaxed font-light">
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
