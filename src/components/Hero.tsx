import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useHLSVideo } from '../hooks/useHLSVideo';
import { personalInfo } from '../data/socials';

const HLS_SOURCE = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

interface HeroProps {
  onExploreWork: () => void;
  onConnect: () => void;
}

export function Hero({ onExploreWork, onConnect }: HeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useHLSVideo({ src: HLS_SOURCE });

  const [roleIndex, setRoleIndex] = useState(0);

  // Rotating roles every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.rotatingRoles.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  // GSAP Hero Entrance Timeline
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      tl.fromTo(
        '.name-reveal',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
      );

      tl.fromTo(
        '.blur-in',
        { opacity: 0, filter: 'blur(10px)', y: 20 },
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1, stagger: 0.1 },
        0.3
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const currentRole = personalInfo.rotatingRoles[roleIndex];

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen relative overflow-hidden flex flex-col justify-between items-center pt-28 md:pt-36 pb-12 px-6 md:px-12 text-center select-none"
    >
      {/* Background HLS Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-60 filter brightness-90 contrast-110"
          playsInline
          muted
          loop
          autoPlay
        />
        {/* Dark overlay for perfect contrast */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px]" />
        {/* Bottom smooth fade to section background */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
      </div>

      {/* Hero Content (Centered) */}
      <div className="relative z-10 my-auto flex flex-col items-center max-w-4xl mx-auto w-full">
        {/* Eyebrow */}
        <div className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-6 md:mb-8 font-medium flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#89AACC]" />
          {personalInfo.eyebrow}
        </div>

        {/* Main Name */}
        <h1 className="name-reveal text-7xl sm:text-8xl md:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6 md:mb-8 hover:tracking-normal transition-all duration-500">
          {personalInfo.name}
        </h1>

        {/* Role Rotating Ticker */}
        <div className="blur-in text-base sm:text-lg md:text-xl text-text-primary/90 font-light mb-5 max-w-2xl px-4 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1">
          <span>An</span>
          <span
            key={currentRole}
            className="animate-role-fade-in font-display italic text-[#89AACC] font-medium text-lg sm:text-xl md:text-2xl px-1 border-b border-[#4E85BF]/40 inline-block"
          >
            {currentRole}
          </span>
          <span>builds intelligent experiences in Bengaluru.</span>
        </div>

        {/* Description */}
        <p className="blur-in text-sm md:text-base text-muted max-w-md mx-auto leading-relaxed mb-10 px-4">
          {personalInfo.heroStatement}
        </p>

        {/* CTA Buttons */}
        <div className="blur-in flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
          <button
            onClick={onExploreWork}
            className="w-full sm:w-auto rounded-full px-8 py-3.5 text-sm font-medium bg-text-primary text-bg hover:scale-105 active:scale-95 transition-transform duration-200 shadow-xl shadow-white/5 flex items-center justify-center gap-2"
          >
            <span>View Projects</span>
            <span className="text-xs">↗</span>
          </button>

          <button
            onClick={onConnect}
            className="group relative w-full sm:w-auto rounded-full p-[1.5px] hover:scale-105 active:scale-95 transition-transform duration-200"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-shift" />
            <span className="relative block w-full rounded-full border-2 border-stroke bg-bg px-7 py-3 text-sm font-medium text-text-primary group-hover:border-transparent transition-colors flex items-center justify-center gap-2">
              <span>Let's Connect</span>
              <span className="text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator (Bottom Center) */}
      <div className="relative z-10 flex flex-col items-center gap-3 mt-8">
        <span className="text-[11px] text-muted uppercase tracking-[0.2em] font-medium">
          SCROLL
        </span>
        <div className="w-px h-10 bg-stroke relative overflow-hidden">
          <div className="w-full h-1/2 accent-gradient animate-scroll-down absolute left-0" />
        </div>
      </div>
    </section>
  );
}
