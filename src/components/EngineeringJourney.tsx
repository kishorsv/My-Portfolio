import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { engineeringJourney } from '../data/journey';
import { SectionDivider } from './SectionDivider';
import { Compass, CheckCircle2 } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export function EngineeringJourney() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (lineRef.current && sectionRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              end: 'bottom 80%',
              scrub: 1,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="bg-[#080808] py-24 md:py-36 relative overflow-hidden"
    >
      {/* Editorial Section Divider */}
      <SectionDivider number="05" label="ENGINEERING TIMELINE" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-8">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#89AACC] mb-3 block">
            Milestone Roadmap
          </span>
          <h2 className="heading-clamp font-light tracking-tight text-text-primary">
            My engineering <span className="font-display italic text-[#89AACC]">journey</span>
          </h2>
          <p className="text-sm md:text-base text-muted max-w-xl mt-3 leading-relaxed font-light">
            An honest narrative of disciplined growth: from core computing algorithms to full-stack products and generative AI systems.
          </p>
        </div>

        {/* Vertical Editorial Timeline with GSAP Animated Line */}
        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
          {/* Animated Glowing Fill Line */}
          <div
            ref={lineRef}
            className="absolute left-[-1px] top-0 w-[2px] h-full bg-gradient-to-b from-[#89AACC] via-[#4E85BF] to-transparent origin-top pointer-events-none"
          />

          {engineeringJourney.map((milestone, idx) => (
            <div
              key={idx}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#080808] border-2 border-[#89AACC] flex items-center justify-center group-hover:scale-125 transition-transform">
                <div className="w-1.5 h-1.5 rounded-full bg-[#89AACC]" />
              </div>

              {/* Milestone Card */}
              <div
                className="p-7 sm:p-8 rounded-3xl border border-white/10 hover:border-white/25 transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono text-[#89AACC] px-3 py-1 rounded-full bg-white/5 border border-white/10">
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
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 text-xs text-text-primary/90 flex items-start gap-2.5 mb-4 font-light">
                  <CheckCircle2 size={15} className="text-[#89AACC] shrink-0 mt-0.5" />
                  <span>{milestone.highlight}</span>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {milestone.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
