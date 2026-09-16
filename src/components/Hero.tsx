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

      {/* Asymmetric Hero Content: 2-Column Editorial Grid on Desktop */}
      <div className="relative z-10 my-auto max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center pt-4 md:pt-6">
        {/* Left Column (7 cols): Typography, Dynamic Role, Tagline, CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
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

            <div className="flex-1 h-[1px] bg-gradient-to-r from-white/20 via-white/5 to-transparent hidden sm:block" />

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
          <p className="blur-in-element text-base sm:text-lg text-muted/90 max-w-2xl leading-relaxed mb-8 font-light">
            "{personalInfo.shortTagline}"
          </p>

          {/* Magnetic Button Action System */}
          <div className="blur-in-element flex flex-wrap items-center gap-3.5 sm:gap-4">
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

        {/* Right Column (5 cols): Cinematic Editorial Portrait Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
          <div className="blur-in-element relative group w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[380px]">
            {/* Ambient Radial Backlight */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#4E85BF]/25 via-[#89AACC]/20 to-transparent rounded-[36px] blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

            {/* Main Portrait Card Frame */}
            <div className="relative rounded-[28px] overflow-hidden border border-white/10 bg-[#0d0d0d]/80 backdrop-blur-xl shadow-2xl p-2.5 transition-all duration-500 group-hover:border-white/25 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-[20px] overflow-hidden bg-[#080808]">
                <img
                  src="/kishor.jpg"
                  alt="Kishor S V — AI/ML Engineer & Full-Stack Developer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03] filter contrast-[1.04] brightness-[0.98]"
                  loading="eager"
                />

                {/* Subtle dark vignette gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-70 pointer-events-none" />

                {/* Floating Top Badge: AI / ML Engineer */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/65 border border-white/10 backdrop-blur-md text-[10px] font-mono tracking-widest text-[#89AACC] uppercase">
                  AI / ML ENGINEER
                </div>

                {/* Coordinates Mark */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[9px] font-mono tracking-wider text-muted uppercase">
                  12° 58' N, 77° 35' E
                </div>

                {/* Bottom Overlay Info Card */}
                <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-black/75 border border-white/10 backdrop-blur-md flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-white text-[11px] font-medium tracking-wide">
                      AVAILABLE FOR ROLES
                    </span>
                  </div>
                  <span className="text-white/40 text-[10px] uppercase font-mono">
                    2026
                  </span>
                </div>
              </div>
            </div>
          </div>
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
