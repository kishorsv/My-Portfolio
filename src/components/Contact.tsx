import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useHLSVideo } from '../hooks/useHLSVideo';
import { personalInfo } from '../data/socials';
import { Mail, Copy, Check, ArrowUpRight, Globe } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';

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
        duration: 40,
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

  const marqueeText = Array(10).fill('BUILDING THE FUTURE • ').join('');

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-16 overflow-hidden select-none border-t border-stroke/50"
    >
      {/* Background HLS Video Flipped Vertically */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-y-[-1] filter brightness-90 contrast-110"
          playsInline
          muted
          loop
          autoPlay
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[1px]" />
        {/* Top fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-bg to-transparent pointer-events-none" />
      </div>

      {/* GSAP Horizontal Marquee at top of section */}
      <div className="relative z-10 w-full overflow-hidden whitespace-nowrap py-6 border-y border-white/10 mb-12">
        <div
          ref={marqueeRef}
          className="inline-block font-display italic text-5xl sm:text-6xl md:text-8xl text-text-primary/20 tracking-wider uppercase select-none hover:text-text-primary/40 transition-colors"
        >
          {marqueeText}
        </div>
      </div>

      {/* Main Contact Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center my-auto flex flex-col items-center">
        <div className="text-xs text-muted uppercase tracking-[0.3em] mb-6 font-medium flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#89AACC] animate-pulse" />
          Get In Touch
        </div>

        {/* Exact Heading: Let's build something meaningful. */}
        <h2 className="text-5xl sm:text-6xl md:text-8xl font-display italic leading-[1] text-text-primary mb-8 tracking-tight">
          Let's build
          <br />
          <span className="text-[#89AACC]">something meaningful.</span>
        </h2>

        <p className="text-sm sm:text-base text-muted max-w-xl mb-10 leading-relaxed font-light">
          Whether you're looking for an ambitious engineering intern, an AI/ML collaborator, or want to build high-impact software, my inbox is always open.
        </p>

        {/* Email CTA Button with Animated Gradient Border on Hover */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <a
            href={`mailto:${personalInfo.email}`}
            className="group relative inline-flex items-center justify-center rounded-full p-[2px] transition-transform duration-300 hover:scale-105 active:scale-95 shadow-2xl shadow-[#4E85BF]/20"
          >
            {/* Animated accent gradient border */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#89AACC] via-[#4E85BF] to-[#89AACC] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-shift blur-[1px]" />
            <span className="relative z-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-bg border border-stroke text-sm sm:text-base font-mono text-text-primary group-hover:border-transparent transition-all">
              <Mail size={16} className="text-[#89AACC]" />
              <span>{personalInfo.email}</span>
              <ArrowUpRight size={16} className="text-muted group-hover:text-text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>

          {/* Copy button */}
          <button
            onClick={handleCopyEmail}
            className="p-4 rounded-full border border-stroke bg-bg/80 hover:border-white/30 text-muted hover:text-text-primary transition-all duration-200"
            title="Copy email to clipboard"
            aria-label="Copy email"
          >
            {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
          </button>
        </div>

        {copied && (
          <span className="text-xs text-emerald-400 font-mono mb-6 animate-fade-in">
            Email copied to clipboard!
          </span>
        )}

        {/* Channel Links: Email · LinkedIn · GitHub · X · Portfolio */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-stroke/50 max-w-lg w-full">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface border border-stroke text-xs font-mono text-muted hover:text-text-primary hover:border-white/30 transition-colors"
          >
            <Mail size={12} className="text-[#89AACC]" />
            <span>Email</span>
          </a>

          <a
            href="https://linkedin.com/in/kishorsv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface border border-stroke text-xs font-mono text-muted hover:text-text-primary hover:border-white/30 transition-colors"
          >
            <LinkedinIcon size={12} className="text-[#89AACC]" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/kishorsv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface border border-stroke text-xs font-mono text-muted hover:text-text-primary hover:border-white/30 transition-colors"
          >
            <GithubIcon size={12} />
            <span>GitHub</span>
          </a>

          <a
            href="https://x.com/kishorsv_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface border border-stroke text-xs font-mono text-muted hover:text-text-primary hover:border-white/30 transition-colors"
          >
            <span>𝕏</span>
            <span>Twitter</span>
          </a>

          <a
            href="#home"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface border border-stroke text-xs font-mono text-muted hover:text-text-primary hover:border-white/30 transition-colors"
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
