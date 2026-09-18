import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useHLSVideo } from '../hooks/useHLSVideo';
import { personalInfo } from '../data/socials';
import { MagneticButton } from './MagneticButton';
import { AnimatePresence, motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const HLS_SOURCE = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

interface HeroProps {
  onExploreWork: () => void;
  onConnect?: () => void;
  onAbout?: () => void;
}

export function Hero({ onExploreWork, onAbout }: HeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const heroContentRef = useRef<HTMLDivElement | null>(null);
  const videoOverlayRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useHLSVideo({ src: HLS_SOURCE });

  const [roleIndex, setRoleIndex] = useState(0);

  // Masked vertical role rotation every 2.4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.rotatingRoles.length);
    }, 2400);

    return () => clearInterval(timer);
  }, []);

  // Entrance and ScrollTransition via GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      tl.fromTo(
        '.hero-reveal-name',
        { opacity: 0, y: 70, skewY: 2 },
        { opacity: 1, y: 0, skewY: 0, duration: 1.2, delay: 0.1 }
      );

      tl.fromTo(
        '.hero-fade-in',
        { opacity: 0, filter: 'blur(10px)', y: 24 },
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1, stagger: 0.1 },
        0.3
      );

      // Section 17 — Hero Scroll Transition
      if (heroContentRef.current && containerRef.current) {
        gsap.to(heroContentRef.current, {
          y: -100,
          scale: 0.84,
          opacity: 0.35,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }

      if (videoOverlayRef.current && containerRef.current) {
        gsap.to(videoOverlayRef.current, {
          backgroundColor: 'rgba(10, 10, 11, 0.92)',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const currentRole = personalInfo.rotatingRoles[roleIndex];

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen relative overflow-hidden flex flex-col justify-between pt-24 md:pt-32 pb-10 px-6 md:px-12 lg:px-20 select-none cinematic-vignette"
    >
      {/* Background Cinematic HLS Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-45 filter brightness-85 contrast-115"
          playsInline
          muted
          loop
          autoPlay
        />

        {/* Ambient Blurred Violet Glow (Opacity 0.06) */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] md:w-[900px] h-[550px] rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.08)_0%,transparent_70%)] pointer-events-none blur-3xl" />

        {/* Warm Champagne Glow (Opacity 0.025) */}
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(216,195,154,0.04)_0%,transparent_70%)] pointer-events-none blur-3xl" />

        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 technical-grid opacity-25 pointer-events-none" />

        {/* Dark Video Dimmer Overlay */}
        <div
          ref={videoOverlayRef}
          className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B]/80 via-[#0A0A0B]/50 to-[#0A0A0B] transition-colors duration-300"
        />
      </div>

      {/* Top Editorial Bar: Section 11 */}
      <div className="hero-fade-in relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.25em] text-[#92908B] border-b border-white/5 pb-4 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFF]" />
          <span className="text-[#F4F1EA] font-semibold">KSV®</span>
          <span className="hidden sm:inline-block text-[#92908B]/60">/ DIGITAL PORTFOLIO</span>
        </div>

        <div className="flex items-center gap-3">
          <span>BENGALURU</span>
          <span className="w-1 h-1 rounded-full bg-[#92908B]/40" />
          <span>INDIA</span>
          <span className="w-1 h-1 rounded-full bg-[#92908B]/40" />
          <span className="text-[#D8C39A]">2026</span>
        </div>
      </div>

      {/* Main Asymmetric Hero Composition */}
      <div
        ref={heroContentRef}
        className="relative z-10 my-auto max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center py-4 md:py-6"
      >
        {/* Left Column (7 cols): Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Main Name: Center-Left (KISHOR in Instrument Serif, SV in Inter) */}
          <div className="hero-reveal-name mb-4">
            <h1 className="leading-[0.88] tracking-tighter text-[#F4F1EA]">
              <span className="font-display italic text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] font-normal block pr-2">
                Kishor
              </span>
              <span className="font-sans font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] tracking-tight text-[#F4F1EA] block -mt-2 sm:-mt-4">
                SV
              </span>
            </h1>
          </div>

          {/* Identity Tag in IBM Plex Mono */}
          <div className="hero-fade-in inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-[0.2em] text-[#7C5CFF] uppercase backdrop-blur-md mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFF] animate-pulse" />
            <span>AI / FULL-STACK</span>
          </div>

          {/* Section 12 — Hero Main Statement: Mixed Typography Moment */}
          <div className="hero-fade-in max-w-2xl mb-8">
            <p className="text-2xl sm:text-3xl md:text-4xl text-[#F4F1EA] font-light leading-[1.25] tracking-tight">
              <span>I BUILD </span>
              <span className="font-display italic text-[#D8C39A] font-normal text-[1.12em] px-1">
                intelligent
              </span>
              <span> digital experiences.</span>
            </p>

            <p className="text-sm sm:text-base text-[#92908B] font-light mt-3 leading-relaxed">
              AI, interfaces, and full-stack systems — turned from ideas into working products.
            </p>
          </div>

          {/* Section 13 — Masked Vertical Role Animation */}
          <div className="hero-fade-in flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#92908B] mb-10">
            <span>CURRENTLY EXPLORING</span>
            <span className="w-8 h-px bg-white/15" />
            <div className="h-7 overflow-hidden relative inline-flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="font-mono font-semibold text-xs sm:text-sm text-[#F4F1EA] px-2.5 py-0.5 rounded bg-white/[0.06] border border-white/10 tracking-wider inline-block"
                >
                  {currentRole}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Section 14 — Hero CTAs */}
          <div className="hero-fade-in flex flex-wrap items-center gap-4">
            <MagneticButton onClick={onExploreWork} variant="primary">
              <span>EXPLORE MY WORK ?</span>
            </MagneticButton>

            <MagneticButton
              onClick={() => {
                if (onAbout) onAbout();
                else {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              variant="secondary"
            >
              <span>ABOUT ME</span>
            </MagneticButton>
          </div>
        </div>

        {/* Right Column (5 cols): Editorial Luxury Portrait Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
          <div className="hero-fade-in relative group w-full max-w-[310px] sm:max-w-[350px] lg:max-w-[370px]">
            {/* Ambient Radial Backlight */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#7C5CFF]/20 via-[#D8C39A]/15 to-transparent rounded-[36px] blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

            {/* Portrait Card Frame */}
            <div className="relative rounded-[28px] overflow-hidden border border-white/10 bg-[#121214]/80 backdrop-blur-xl shadow-2xl p-2.5 transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              <div className="relative aspect-[3/4] rounded-[20px] overflow-hidden bg-[#0A0A0B]">
                <img
                  src="/kishor.jpg"
                  alt="Kishor SV — AI/ML Engineer · Full-Stack Developer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03] filter contrast-[1.04] brightness-[0.98]"
                  loading="eager"
                />

                {/* Inner Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent opacity-75 pointer-events-none" />

                {/* Top Right Tag */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/65 border border-white/10 backdrop-blur-md text-[10px] font-mono tracking-widest text-[#D8C39A] uppercase">
                  AI / ML ENGINEER
                </div>

                {/* Top Left Coordinates */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[9px] font-mono tracking-wider text-[#92908B] uppercase">
                  12° 58' N, 77° 35' E
                </div>

                {/* Bottom Status Pill */}
                <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-black/80 border border-white/10 backdrop-blur-md flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#A6D7B8] animate-pulse" />
                    <span className="text-[#F4F1EA] text-[11px] font-medium tracking-wider">
                      AVAILABLE FOR ROLES
                    </span>
                  </div>
                  <span className="text-[#92908B] text-[10px] uppercase font-mono">
                    2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Scroll Indicator */}
      <div className="hero-fade-in relative z-10 flex items-center justify-between w-full max-w-7xl mx-auto pt-6 border-t border-white/5 text-[11px] font-mono text-[#92908B] uppercase tracking-[0.25em]">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFF] animate-ping" />
          <span>SCROLL ?</span>
        </div>

        <div className="flex items-center gap-3">
          <span>PORTFOLIO COLLECTION</span>
          <span className="w-12 h-px bg-white/20 hidden sm:block" />
          <span className="text-[#F4F1EA]">2026</span>
        </div>
      </div>
    </section>
  );
}
