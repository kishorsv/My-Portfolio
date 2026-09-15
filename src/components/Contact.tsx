import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useHLSVideo } from '../hooks/useHLSVideo';
import { personalInfo } from '../data/socials';
import { GithubIcon, LinkedinIcon } from './icons';
import { Mail, Copy, Check, ArrowUpRight, Globe } from 'lucide-react';

const HLS_SOURCE = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

export function Contact() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useHLSVideo({ src: HLS_SOURCE });

  const [copied, setCopied] = useState(false);

  // GSAP Infinite Horizontal Marquee
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const ctx = gsap.context(() => {
      gsap.to(marquee, {
        xPercent: -50,
        duration: 45,
        ease: 'none',
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const marqueeText = Array(10).fill('AI • DESIGN • CODE • CREATE • BUILD • ').join('');

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-16 overflow-hidden select-none cinematic-vignette"
    >
      {/* Background HLS Video Flipped Vertically */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-45 scale-y-[-1] filter brightness-90 contrast-110"
          playsInline
          muted
          loop
          autoPlay
        />
        {/* Dark overlay & Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#080808]/75 to-[#080808]" />
      </div>

      {/* GSAP Horizontal Marquee at top of section */}
      <div className="relative z-10 w-full overflow-hidden whitespace-nowrap py-6 border-y border-white/10 mb-12">
        <div
          ref={marqueeRef}
          className="inline-block font-mono text-4xl sm:text-5xl md:text-7xl text-white/10 tracking-[0.2em] uppercase select-none hover:text-white/20 transition-colors"
        >
          {marqueeText}
        </div>
      </div>

      {/* Main Final Scene Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center my-auto flex flex-col items-center">
        {/* Available Badge with pulsing green dot */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-text-primary mb-8 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>AVAILABLE FOR SELECT PROJECTS & INTERNSHIPS</span>
        </div>

        {/* Enormous Final Scene Heading */}
        <h2 className="heading-clamp font-light text-text-primary mb-8 tracking-tighter leading-[0.92]">
          Let's build
          <br />
          <span className="font-display italic text-[#89AACC] font-normal">
            something meaningful.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-muted/90 max-w-xl mb-12 leading-relaxed font-light">
          Whether you're looking for an ambitious engineering intern, an AI/ML collaborator, or want to architect high-impact software products together.
        </p>

        {/* Oversized Email CTA Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
          <a
            href={`mailto:${personalInfo.email}`}
            className="group relative inline-flex items-center justify-center rounded-full p-[2px] transition-transform duration-300 hover:scale-105 active:scale-95 shadow-2xl shadow-[#4E85BF]/20"
            data-cursor="link"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#89AACC] via-[#4E85BF] to-[#89AACC] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-shift blur-[1px]" />
            <span className="relative z-10 inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#080808] border border-white/15 text-sm sm:text-base font-mono text-text-primary group-hover:border-transparent transition-all shadow-xl">
              <Mail size={18} className="text-[#89AACC]" />
              <span>{personalInfo.email}</span>
              <ArrowUpRight size={18} className="text-muted group-hover:text-text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>

          {/* Copy button */}
          <button
            onClick={handleCopyEmail}
            className="p-5 rounded-full border border-white/15 bg-[#080808]/80 hover:border-white/40 text-muted hover:text-text-primary transition-all duration-200"
            title="Copy email to clipboard"
            aria-label="Copy email"
            data-cursor="link"
          >
            {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
          </button>
        </div>

        {copied && (
          <span className="text-xs text-emerald-400 font-mono mb-6 animate-fade-in">
            Email copied to clipboard!
          </span>
        )}

        {/* Social Channel Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-6 border-t border-white/10 max-w-lg w-full">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-muted hover:text-text-primary hover:border-white/30 transition-colors"
            data-cursor="link"
          >
            <Mail size={12} className="text-[#89AACC]" />
            <span>Email</span>
          </a>

          <a
            href="https://linkedin.com/in/kishorsv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-muted hover:text-text-primary hover:border-white/30 transition-colors"
            data-cursor="link"
          >
            <LinkedinIcon size={12} className="text-[#89AACC]" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/kishorsv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-muted hover:text-text-primary hover:border-white/30 transition-colors"
            data-cursor="link"
          >
            <GithubIcon size={12} />
            <span>GitHub</span>
          </a>

          <a
            href="https://x.com/kishorsv_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-muted hover:text-text-primary hover:border-white/30 transition-colors"
            data-cursor="link"
          >
            <span>𝕏</span>
            <span>Twitter</span>
          </a>

          <a
            href="#home"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-muted hover:text-text-primary hover:border-white/30 transition-colors"
            data-cursor="link"
          >
            <Globe size={12} className="text-[#89AACC]" />
            <span>Portfolio</span>
          </a>
        </div>
      </div>

      <div className="h-4" />
    </section>
  );
}
