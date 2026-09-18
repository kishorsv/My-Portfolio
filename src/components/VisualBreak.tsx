import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function VisualBreak() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (containerRef.current && textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0.15, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              end: 'center center',
              scrub: 1,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-[85vh] sm:min-h-screen bg-[#070708] flex items-center justify-center relative overflow-hidden select-none px-6"
    >
      {/* Background ultra-subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_0%,transparent_70%)] pointer-events-none" />

      {/* Section 37 — Pure Full-Screen Typography Break */}
      <h2
        ref={textRef}
        className="hero-clamp font-light tracking-tighter text-center leading-[0.88] text-[#F4F1EA]"
      >
        <span className="block font-sans font-extrabold text-[#F4F1EA]">MAKE</span>
        <span className="block font-sans text-white/40 my-2">IT</span>
        <span className="block font-display italic text-[#D8C39A] font-normal text-[1.1em]">
          USEFUL.
        </span>
      </h2>
    </section>
  );
}
