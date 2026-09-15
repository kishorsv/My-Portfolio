import { motion } from 'framer-motion';
import { whatIBuildItems } from '../data/whatIBuild';
import { Cpu, Sparkles, Layers, Layout } from 'lucide-react';

const ICON_MAP = {
  cpu: Cpu,
  sparkles: Sparkles,
  layers: Layers,
  layout: Layout,
};

export function WhatIBuild() {
  return (
    <section id="focus" className="bg-bg py-20 md:py-32 relative overflow-hidden border-t border-stroke/50">
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
              What I Build
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-sans tracking-tight text-text-primary">
            AI & <span className="font-display italic text-[#89AACC]">product</span> architecture
          </h2>

          <p className="text-sm md:text-base text-muted max-w-xl mt-3 leading-relaxed">
            The core four verticals where I specialize in taking ambitious ideas from paper to real-world deployed software.
          </p>
        </motion.div>

        {/* 4 Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whatIBuildItems.map((item, idx) => {
            const Icon = ICON_MAP[item.iconName];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-3xl bg-surface border border-stroke p-8 flex flex-col justify-between overflow-hidden hover:border-white/20 transition-all duration-300"
              >
                {/* Ambient Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-50 group-hover:opacity-80 transition-opacity duration-500`}
                />
                <div className="absolute inset-0 halftone-overlay pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-bg border border-stroke flex items-center justify-center text-[#89AACC] group-hover:scale-110 transition-transform">
                      <Icon size={22} />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-bg/80 border border-stroke/70 text-muted">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display italic text-text-primary mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm font-medium text-[#89AACC] mb-3">
                    {item.shortDesc}
                  </p>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6 font-light">
                    {item.fullDesc}
                  </p>
                </div>

                <div className="relative z-10 flex flex-wrap gap-2 pt-4 border-t border-stroke/50">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-3 py-1 rounded-full bg-bg/80 border border-stroke/70 text-muted font-mono"
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
