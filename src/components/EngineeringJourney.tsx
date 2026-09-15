import { motion } from 'framer-motion';
import { engineeringJourney } from '../data/journey';
import { Compass, CheckCircle2 } from 'lucide-react';

export function EngineeringJourney() {
  return (
    <section id="journey" className="bg-bg py-20 md:py-32 relative overflow-hidden border-t border-stroke/50">
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
              Learning Journey
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-sans tracking-tight text-text-primary">
            My engineering <span className="font-display italic text-[#89AACC]">journey</span>
          </h2>

          <p className="text-sm md:text-base text-muted max-w-xl mt-3 leading-relaxed">
            An honest, milestone-driven view of my technical evolution—from foundational programming and intensive academy training to building AI systems.
          </p>
        </motion.div>

        {/* Timeline Stack */}
        <div className="relative border-l border-stroke/80 ml-4 md:ml-6 space-y-10">
          {engineeringJourney.map((milestone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-bg border-2 border-[#89AACC] flex items-center justify-center group-hover:scale-125 transition-transform">
                <div className="w-1.5 h-1.5 rounded-full bg-[#89AACC]" />
              </div>

              {/* Milestone Box */}
              <div className="p-6 sm:p-8 rounded-3xl bg-surface/50 border border-stroke hover:border-white/20 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono text-[#89AACC] px-3 py-1 rounded-full bg-bg border border-stroke">
                      {milestone.period}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-muted">
                      {milestone.stage}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-muted/70 font-mono">
                    <Compass size={13} className="text-[#89AACC]" />
                    <span>Bengaluru, India</span>
                  </div>
                </div>

                <h3 className="text-2xl font-display italic text-text-primary mb-3">
                  {milestone.title}
                </h3>

                <p className="text-xs sm:text-sm text-muted leading-relaxed mb-4 font-light">
                  {milestone.description}
                </p>

                {/* Highlight banner */}
                <div className="p-3.5 rounded-xl bg-bg/60 border border-stroke/60 text-xs text-text-primary/90 flex items-start gap-2.5 mb-4 font-light">
                  <CheckCircle2 size={15} className="text-[#89AACC] shrink-0 mt-0.5" />
                  <span>{milestone.highlight}</span>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-stroke/40">
                  {milestone.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-bg border border-stroke/60 text-muted font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
