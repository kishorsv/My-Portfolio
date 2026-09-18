import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useHLSVideo } from '../hooks/useHLSVideo';
import { personalInfo } from '../data/socials';
import { Mail, Copy, Check } from 'lucide-react';

const HLS_SOURCE = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

export function Contact() {
  const videoRef = useHLSVideo({ src: HLS_SOURCE });
  const circleButtonRef = useRef<HTMLDivElement | null>(null);
  const [copied, setCopied] = useState(false);
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleMouseMoveBtn = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!circleButtonRef.current) return;
    const rect = circleButtonRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setBtnPos({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeaveBtn = () => {
    setBtnPos({ x: 0, y: 0 });
    setIsBtnHovered(false);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 lg:px-20 overflow-hidden select-none cinematic-vignette"
    >
      {/* Section 40 — Background HLS Video with rgba(0,0,0,0.62) & Violet Ambient Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-y-[-1] filter brightness-90 contrast-110"
          playsInline
          muted
          loop
          autoPlay
        />
        {/* Dark overlay: rgba(0,0,0,0.62) */}
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[0.5px]" />

        {/* Violet ambient glow */}
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.09)_0%,transparent_70%)] blur-3xl pointer-events-none" />

        {/* Top & Bottom gentle fade into Obsidian */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-transparent to-[#0A0A0B]" />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto w-full my-auto py-12 flex flex-col items-center text-center">
        {/* Eyebrow in IBM Plex Mono */}
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-[#D8C39A] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#A6D7B8] animate-pulse" />
          <span>INITIALIZE CONTACT · 2026</span>
        </div>

        {/* Section 40 — Heading: LET'S BUILD SOMETHING REAL. */}
        <h2 className="hero-clamp font-light tracking-tight text-[#F4F1EA] max-w-4xl leading-[0.92] mb-16">
          <span className="block font-sans font-bold">LET'S BUILD</span>
          <span className="block text-white/40 my-2">SOMETHING</span>
          <span className="font-display italic text-[#D8C39A] font-normal block text-[1.12em]">
            REAL.
          </span>
        </h2>

        {/* Section 41 — Oversized Circular Magnetic Button */}
        <motion.div
          ref={circleButtonRef}
          onMouseMove={handleMouseMoveBtn}
          onMouseEnter={() => setIsBtnHovered(true)}
          onMouseLeave={handleMouseLeaveBtn}
          animate={{ x: btnPos.x, y: btnPos.y }}
          transition={{ type: 'spring', stiffness: 220, damping: 20, mass: 0.15 }}
          className="relative inline-block mb-16"
        >
          <a
            href={`mailto:${personalInfo.email}?subject=Project Collaboration - Kishor SV`}
            className="group relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full flex flex-col items-center justify-center p-2 focus:outline-none"
            data-cursor="project"
          >
            {/* Signature Gradient Ring Revealed on Hover */}
            <span
              className={`absolute inset-0 rounded-full signature-gradient transition-all duration-500 blur-sm ${
                isBtnHovered ? 'opacity-100 scale-105' : 'opacity-20 scale-100'
              }`}
            />

            {/* Inner Circle Body */}
            <div
              className={`relative z-10 w-full h-full rounded-full bg-[#121214] border border-white/20 flex flex-col items-center justify-center text-center p-6 transition-all duration-500 ${
                isBtnHovered ? 'border-white/50 scale-[0.98] bg-[#0A0A0B]' : 'border-white/20'
              }`}
            >
              <span className="text-xs sm:text-sm font-mono tracking-widest text-[#F4F1EA] uppercase font-semibold leading-tight mb-2 group-hover:-translate-y-1 transition-transform">
                START A<br />CONVERSATION
              </span>
              <span className="text-2xl sm:text-3xl text-[#D8C39A] group-hover:rotate-45 group-hover:scale-125 transition-transform duration-300">
                ?
              </span>
            </div>
          </a>
        </motion.div>

        {/* Quick Email Copy Action */}
        <div className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
          <Mail size={14} className="text-[#D8C39A]" />
          <span className="font-mono text-xs sm:text-sm text-[#F4F1EA]/90 tracking-wide">
            {personalInfo.email}
          </span>
          <button
            onClick={handleCopyEmail}
            className="p-1 rounded text-[#92908B] hover:text-white transition-colors"
            aria-label="Copy email address"
          >
            {copied ? <Check size={14} className="text-[#A6D7B8]" /> : <Copy size={14} />}
          </button>
        </div>
      </div>
    </section>
  );
}
