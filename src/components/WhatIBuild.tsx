import { motion } from 'framer-motion';
import { whatIBuildItems } from '../data/whatIBuild';
import { SectionDivider } from './SectionDivider';
import { Cpu, Sparkles, Layers, Layout } from 'lucide-react';

const ICON_MAP = {
  cpu: Cpu,
  sparkles: Sparkles,
  layers: Layers,
  layout: Layout,
};

export function WhatIBuild() {
  return (
    <section id="focus" className="bg-[#080808] py-24 md:py-36 relative overflow-hidden">
      {/* Editorial Section Divider */}
      <SectionDivider number="04" label="CAPABILITY MATRIX" />

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
            What I Build
          </span>
          <h2 className="heading-clamp font-light tracking-tight text-text-primary">
            AI & <span className="font-display italic text-[#89AACC]">product</span> architecture
          </h2>
          <p className="text-sm md:text-base text-muted max-w-xl mt-3 leading-relaxed font-light">
            The four architectural verticals where I transform raw engineering concepts into production software.
          </p>
        </motion.div>

        {/* Asymmetrical 4-Quadrant Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {whatIBuildItems.map((item, idx) => {
            const Icon = ICON_MAP[item.iconName];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative rounded-3xl p-8 sm:p-10 border border-white/10 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-white/25"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                {/* Background ambient gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-30 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none`}
                />
                <div className="absolute inset-0 halftone-overlay pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#89AACC] group-hover:scale-110 transition-transform">
                      <Icon size={22} />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display italic text-text-primary mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm font-medium text-[#89AACC] mb-3">
                    {item.shortDesc}
                  </p>

                  <p className="text-xs sm:text-sm text-muted/90 leading-relaxed font-light mb-6">
                    {item.fullDesc}
                  </p>
                </div>

                <div className="relative z-10 flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted font-mono"
                    >
                      {tag}
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
