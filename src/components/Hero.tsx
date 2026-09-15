import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useHLSVideo } from '../hooks/useHLSVideo';
import { personalInfo } from '../data/socials';
import { MagneticButton } from './MagneticButton';
import { GithubIcon, LinkedinIcon } from './icons';
import { ArrowRight, Mail } from 'lucide-react';

const HLS_SOURCE = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

interface HeroProps {
  onExploreWork: () => void;
  onConnect: () => void;
}

export function Hero({ onExploreWork, onConnect }: HeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useHLSVideo({ src: HLS_SOURCE });

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.rotatingRoles.length);
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      tl.fromTo(
        '.name-reveal-title',
        { opacity: 0, y: 60, skewY: 2 },
        { opacity: 1, y: 0, skewY: 0, duration: 1.3, delay: 0.1 }
      );

      tl.fromTo(
        '.blur-in-element',
        { opacity: 0, filter: 'blur(12px)', y: 25 },
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1.1, stagger: 0.12 },
        0.35
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const currentRole = personalInfo.rotatingRoles[roleIndex];

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen relative overflow-hidden flex flex-col justify-between pt-28 md:pt-36 pb-12 px-6 md:px-12 lg:px-20 select-none cinematic-vignette"
    >
      {/* Background Cinematic HLS Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-50 filter brightness-90 contrast-110"
          playsInline
          muted
          loop
          autoPlay
        />

        {/* Technical grid backdrop */}
        <div className="absolute inset-0 technical-grid opacity-30 pointer-events-none" />

        {/* Subtle Radial Glow directly behind typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(78,133,191,0.12)_0%,transparent_70%)] pointer-events-none blur-2xl" />

        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/70 via-[#080808]/40 to-[#080808]" />
      </div>

      {/* Asymmetric Hero Content */}
      <div className="relative z-10 my-auto max-w-7xl mx-auto w-full flex flex-col items-start text-left pt-6">
        {/* Top Eyebrow & Metadata Line */}
        <div className="blur-in-element flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-[0.3em] text-muted mb-6 md:mb-8">
          <span className="text-[#89AACC] font-semibold">{personalInfo.eyebrow}</span>
          <span className="w-12 h-[1px] bg-white/20 hidden sm:inline-block" />
          <div className="flex items-center gap-2 text-[11px] text-muted/80">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>BENGALURU, INDIA</span>
          </div>
        </div>

        {/* Enormous Asymmetric Name: Kishor SV with Instrument Serif Italic */}
        <div className="name-reveal-title mb-6 md:mb-8">
          <h1 className="hero-clamp font-light tracking-tighter text-text-primary">
            Kishor{' '}
            <span className="font-display italic text-[#89AACC] font-normal inline-block ml-1">
              S V
            </span>
          </h1>
        </div>

        {/* Floating Technical Label & Extended Line */}
        <div className="blur-in-element flex items-center gap-4 w-full mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-text-primary tracking-wider uppercase backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#89AACC]" />
            <span>AI / FULL-STACK</span>
          </div>

          <div className="flex-1 h-[1px] bg-gradient-to-r from-white/20 via-white/5 to-transparent hidden md:block" />

          {/* Dynamic rotating role ticker */}
          <div className="text-xs sm:text-sm font-mono text-muted/90 flex items-center gap-2">
            <span>Specializing in</span>
            <span
              key={currentRole}
              className="animate-role-fade-in text-text-primary font-semibold text-xs sm:text-sm px-2 py-0.5 rounded bg-white/5 border border-white/10 font-mono"
            >
              {currentRole}
            </span>
          </div>
        </div>

        {/* Short Line Copy */}
        <p className="blur-in-element text-base sm:text-lg md:text-xl text-muted/90 max-w-2xl leading-relaxed mb-10 font-light">
          "{personalInfo.shortTagline}"
        </p>

        {/* Magnetic Button Action System */}
        <div className="blur-in-element flex flex-wrap items-center gap-4">
          {/* Primary Magnetic CTA */}
          <MagneticButton onClick={onExploreWork} variant="primary">
            <span>View Projects</span>
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </MagneticButton>

          {/* Secondary Magnetic Button: GitHub */}
          <MagneticButton
            href="https://github.com/kishorsv"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            <GithubIcon size={14} />
            <span>GitHub</span>
          </MagneticButton>

          {/* Secondary Magnetic Button: LinkedIn */}
          <MagneticButton
            href="https://linkedin.com/in/kishorsv"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            <LinkedinIcon size={14} className="text-[#89AACC]" />
            <span>LinkedIn</span>
          </MagneticButton>

          {/* Secondary Magnetic Button: Contact */}
          <MagneticButton onClick={onConnect} variant="secondary">
            <Mail size={14} className="text-[#89AACC]" />
            <span>Let's Talk</span>
          </MagneticButton>
        </div>
      </div>

      {/* Editorial Scroll Indicator at Bottom */}
      <div className="relative z-10 flex items-center justify-between w-full max-w-7xl mx-auto pt-8 border-t border-white/5 text-[11px] font-mono text-muted/70 uppercase tracking-[0.25em]">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#89AACC] animate-ping" />
          <span>SCROLL TO EXPLORE</span>
        </div>

        <div className="flex items-center gap-3">
          <span>PORTFOLIO COLLECTION</span>
          <span className="w-12 h-px bg-white/20 hidden sm:block" />
          <span className="text-text-primary">2026</span>
        </div>
      </div>
    </section>
  );
}
