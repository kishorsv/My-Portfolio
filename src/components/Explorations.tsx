import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { explorations, type ExplorationItem } from '../data/explorations';
import { Lightbox } from './Lightbox';
import { Sparkles, Eye } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export function Explorations() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const centerContentRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedItem, setSelectedItem] = useState<ExplorationItem | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Pin center content block
      if (centerContentRef.current && sectionRef.current) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: centerContentRef.current,
          pinSpacing: false,
        });
      }

      // Parallax movement for each card
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        const item = explorations[index];
        const movement = (item?.speed || 0.2) * 400; // Parallax distance

        gsap.fromTo(
          card,
          { y: movement / 2 },
          {
            y: -movement / 2,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      id="explorations"
      ref={sectionRef}
      className="relative min-h-[220vh] md:min-h-[300vh] bg-bg py-24 px-6 md:px-12 overflow-hidden"
    >
      {/* Pinned Center Layer */}
      <div
        ref={centerContentRef}
        className="w-full flex items-center justify-center pointer-events-none z-10 py-12"
        style={{ minHeight: '80vh' }}
      >
        <div className="max-w-md text-center pointer-events-auto backdrop-blur-md bg-bg/75 p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#89AACC] animate-pulse" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted font-medium">
              Explorations
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-sans tracking-tight text-text-primary mb-4">
            Visual <span className="font-display italic text-[#89AACC]">playground</span>
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
            Experiments, interfaces, ideas, and visual explorations created while learning and building.
          </p>

          {/* Button */}
          <a
            href="https://github.com/kishorsv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold accent-gradient text-bg hover:opacity-90 transition-opacity shadow-lg shadow-[#4E85BF]/20"
          >
            <span>Explore more</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      {/* Parallax Gallery: Two Columns with alternating speed and rotation */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-36 relative z-20 pt-16">
        {explorations.map((item, idx) => {
          const isLeftCol = idx % 2 === 0;

          return (
            <div
              key={item.id}
              className={`flex justify-center ${isLeftCol ? 'md:justify-start' : 'md:justify-end'}`}
            >
              <div
                ref={(el) => {
                  cardsRef.current[idx] = el;
                }}
                onClick={() => setSelectedItem(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedItem(item);
                  }
                }}
                style={{
                  transform: prefersReducedMotion ? 'none' : `rotate(${item.rotation}deg)`,
                }}
                className="group relative w-full aspect-square max-w-[320px] rounded-3xl bg-surface border border-stroke p-6 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:border-[#89AACC]/60 hover:shadow-2xl hover:shadow-[#4E85BF]/15 focus:outline-none focus:ring-2 focus:ring-[#89AACC]"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-500 group-hover:scale-110`}
                />

                {/* Halftone texture */}
                <div className="absolute inset-0 halftone-overlay pointer-events-none" />

                {/* Center visual icon/shape */}
                <div className="relative z-10 my-auto flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles size={28} className="text-[#89AACC]" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.25em] text-muted/80 font-mono">
                    {item.category}
                  </span>
                </div>

                {/* Card Bottom: Title and view pill */}
                <div className="relative z-10 flex items-end justify-between">
                  <div>
                    <h3 className="text-lg font-display italic text-text-primary leading-tight group-hover:text-[#89AACC] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-muted line-clamp-1 mt-0.5 font-mono">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-bg/80 border border-stroke flex items-center justify-center text-muted group-hover:text-text-primary group-hover:border-white/30 transition-all shrink-0">
                    <Eye size={14} />
                  </div>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                  <span className="px-4 py-1.5 rounded-full text-xs font-mono text-text-primary bg-bg/90 border border-[#89AACC]/50 shadow-lg">
                    Click to Inspect
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}
