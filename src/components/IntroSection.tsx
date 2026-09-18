import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function IntroSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (lineRef.current && sectionRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              end: 'bottom 50%',
              scrub: 1,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0A0A0B] py-36 sm:py-48 md:py-56 px-6 md:px-12 lg:px-20 relative overflow-hidden flex flex-col justify-center items-center text-center"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
        {/* Technical section marker */}
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-[#92908B] mb-12">
          <span className="text-[#D8C39A]">01</span>
          <span className="w-8 h-px bg-white/20" />
          <span>PHILOSOPHICAL ANCHOR</span>
        </div>

        {/* Section 18 — Huge Statement */}
        <h2 className="heading-clamp font-light tracking-tight text-[#F4F1EA] max-w-4xl leading-[1.02]">
          <span className="block">I TURN</span>
          <span className="relative inline-block font-display italic text-[#D8C39A] font-normal my-2">
            COMPLEX TECHNOLOGY
            {/* Animated thin champagne line underneath */}
            <span
              ref={lineRef}
              className="absolute left-0 right-0 -bottom-2 h-[2px] bg-[#D8C39A] origin-left shadow-[0_0_12px_rgba(216,195,154,0.4)]"
            />
          </span>
          <span className="block">INTO SIMPLE</span>
          <span className="block font-medium">EXPERIENCES.</span>
        </h2>
      </div>
    </section>
  );
}
