import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionDivider } from './SectionDivider';
import { Sparkles, Terminal, Activity, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Explorations() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const bgLayerRef = useRef<HTMLDivElement | null>(null);
  const midLayerRef = useRef<HTMLDivElement | null>(null);
  const fgLayerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 35 — 3 Parallax Speeds via ScrollTrigger
      // Background: 0.25x
      if (bgLayerRef.current && sectionRef.current) {
        gsap.to(bgLayerRef.current, {
          y: -80,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Middle: 0.65x
      if (midLayerRef.current && sectionRef.current) {
        gsap.to(midLayerRef.current, {
          y: -180,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Foreground: 1.1x
      if (fgLayerRef.current && sectionRef.current) {
        gsap.to(fgLayerRef.current, {
          y: -300,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experiments"
      ref={sectionRef}
      className="bg-[#0A0A0B] py-36 md:py-48 relative overflow-hidden select-none"
    >
      {/* Section Divider */}
      <SectionDivider number="06" label="CREATIVE LABORATORY & PROTOTYPES" />

      {/* Parallax Background Layer (0.25x) */}
      <div
        ref={bgLayerRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-40 flex items-center justify-between px-8"
      >
        <div className="w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.06)_0%,transparent_70%)] blur-3xl" />
        <div className="w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(216,195,154,0.04)_0%,transparent_70%)] blur-3xl" />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 pt-10">
        {/* Section 34 — Center Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-[#7C5CFF] mb-4">
            <Sparkles size={13} />
            <span>CREATIVE LAB</span>
          </div>

          <h2 className="heading-clamp font-light tracking-tight text-[#F4F1EA] leading-[0.95]">
            <span className="block font-sans font-bold">VISUAL</span>
            <span className="font-display italic text-[#D8C39A] font-normal block text-[1.15em]">
              playground.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#92908B] font-light mt-4 leading-relaxed">
            Unconstrained algorithmic sketches, shader experiments, and interface micro-interactions built during deep work sprints.
          </p>
        </div>

        {/* Section 35 — 3-Speed Parallax Floating Compositions */}
        <div className="relative min-h-[550px] sm:min-h-[650px] md:min-h-[750px] w-full">
          {/* Middle Parallax Card (0.65x) - Left Top */}
          <div
            ref={midLayerRef}
            className="absolute top-4 left-0 sm:left-4 md:left-8 w-64 sm:w-80 p-6 rounded-3xl border border-white/10 bg-[#121214]/80 backdrop-blur-xl shadow-2xl rotate-[-3deg] transition-transform duration-500 hover:rotate-0 hover:border-white/25 hover:z-20 cursor-pointer"
            data-cursor="image"
          >
            <div className="flex items-center justify-between text-[10px] font-mono text-[#92908B] uppercase mb-4">
              <span className="flex items-center gap-1.5 text-[#7C5CFF]">
                <Activity size={12} />
                <span>EXP / 01</span>
              </span>
              <span>AUDIO FFT</span>
            </div>
            <h4 className="text-lg font-medium text-[#F4F1EA] mb-2">Kinetic Serif Wave</h4>
            <p className="text-xs text-[#92908B] font-light leading-relaxed mb-4">
              Real-time variable serif optical axis morphing driven by microphone frequency spectrums.
            </p>
            <div className="h-20 rounded-xl bg-black/60 border border-white/5 flex items-center justify-center font-mono text-[10px] text-[#7C5CFF]">
              Hz: 44.1kHz • BINS: 1024
            </div>
          </div>

          {/* Foreground Parallax Card (1.1x) - Center Right */}
          <div
            ref={fgLayerRef}
            className="absolute top-24 sm:top-28 right-0 sm:right-6 md:right-12 w-72 sm:w-96 p-7 rounded-[32px] border border-white/10 bg-[#121214]/90 backdrop-blur-2xl shadow-2xl rotate-[3deg] transition-transform duration-500 hover:rotate-0 hover:border-[#D8C39A]/40 hover:z-30 cursor-pointer"
            data-cursor="image"
          >
            <div className="flex items-center justify-between text-[10px] font-mono text-[#92908B] uppercase mb-4">
              <span className="flex items-center gap-1.5 text-[#D8C39A]">
                <Terminal size={12} />
                <span>EXP / 02</span>
              </span>
              <span>LOCAL RUNTIME</span>
            </div>
            <h4 className="text-xl font-medium text-[#F4F1EA] mb-2">Latent Space Manifold</h4>
            <p className="text-xs text-[#92908B] font-light leading-relaxed mb-4">
              High-dimensional t-SNE projection clustering 10,000 token embeddings in real-time WebGL.
            </p>
            <div className="h-24 rounded-2xl bg-black/70 border border-white/10 flex items-center justify-between px-4 font-mono text-[11px]">
              <span className="text-[#92908B]">Clusters: 16</span>
              <span className="text-[#A6D7B8]">60.0 FPS</span>
            </div>
          </div>

          {/* Middle Parallax Card (0.65x) - Bottom Center */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-64 sm:w-88 p-6 rounded-2xl border border-white/10 bg-[#121214]/85 backdrop-blur-xl shadow-2xl rotate-[-1deg] hover:rotate-0 transition-transform cursor-pointer">
            <div className="flex items-center justify-between text-[10px] font-mono text-[#92908B] uppercase mb-3">
              <span className="flex items-center gap-1.5 text-[#FF8066]">
                <Layers size={12} />
                <span>EXP / 03</span>
              </span>
              <span>LOCAL FIRST</span>
            </div>
            <h4 className="text-base font-medium text-[#F4F1EA] mb-1">Bidirectional Note Lattice</h4>
            <p className="text-xs text-[#92908B] font-light">
              Cyclic graph rendering with force-directed physics for personal knowledge graphs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
