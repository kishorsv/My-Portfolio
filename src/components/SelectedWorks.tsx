import { useState } from 'react';
import { motion } from 'framer-motion';
import { featuredProjects, allProjects, type FeaturedProject } from '../data/projects';
import { SectionDivider } from './SectionDivider';
import { ArrowUpRight, ExternalLink, Globe, HeartPulse, Eye } from 'lucide-react';
import { GithubIcon } from './icons';

interface SelectedWorksProps {
  onSelectProject: (project: FeaturedProject) => void;
}

export function SelectedWorks({ onSelectProject }: SelectedWorksProps) {
  const [p1Hover, setP1Hover] = useState(false);
  const [p2Hover, setP2Hover] = useState(false);
  const [p3Hover, setP3Hover] = useState(false);
  const [p4Hover, setP4Hover] = useState(false);
  const [p5Hover, setP5Hover] = useState(false);

  const [p1Tilt, setP1Tilt] = useState({ rx: 0, ry: 0 });
  const [p2Tilt, setP2Tilt] = useState({ rx: 0, ry: 0 });
  const [p3Tilt, setP3Tilt] = useState({ rx: 0, ry: 0 });
  const [p4Tilt, setP4Tilt] = useState({ rx: 0, ry: 0 });
  const [p5Tilt, setP5Tilt] = useState({ rx: 0, ry: 0 });

  const calculateTilt = (e: React.MouseEvent<HTMLDivElement>, setter: (t: { rx: number; ry: number }) => void) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setter({
      rx: (y / (rect.height / 2)) * -2,
      ry: (x / (rect.width / 2)) * 3,
    });
  };

  const p1 = featuredProjects[0];
  const p2 = featuredProjects[1];
  const p3 = featuredProjects[2];
  const p4 = featuredProjects[3];
  const p5 = featuredProjects[4];

  const additionalProjects = allProjects.slice(5);

  return (
    <section id="projects" className="bg-[#0A0A0B] py-28 md:py-40 relative overflow-hidden">
      {/* Section Divider */}
      <SectionDivider number="03" label="ART-DIRECTED PROJECT GALLERY" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 lg:px-20 pt-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D8C39A] mb-3 block">
              FEATURED ENGINEERING SYSTEMS
            </span>
            <h2 className="heading-clamp font-light tracking-tight text-[#F4F1EA]">
              Selected{' '}
              <span className="font-display italic text-[#D8C39A]">
                Works.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm font-mono text-[#92908B] leading-relaxed">
            Every project represents a verified end-to-end system: problem research, interface design, AI engineering, testing, and production deployment.
          </p>
        </div>

        {/* =========================================================
            PROJECT 01: AQENIX AI CAREER OS
            Visual occupies ~75% width, title overlaps visual, giant 01 behind.
            Radius: 36px
        ========================================================= */}
        <div
          className="mb-24 perspective-1200 cursor-pointer"
          onMouseMove={(e) => calculateTilt(e, setP1Tilt)}
          onMouseEnter={() => setP1Hover(true)}
          onMouseLeave={() => {
            setP1Hover(false);
            setP1Tilt({ rx: 0, ry: 0 });
          }}
          onClick={() => onSelectProject(p1)}
          data-cursor="project"
        >
          <motion.div
            animate={{ rotateX: p1Tilt.rx, rotateY: p1Tilt.ry }}
            transition={{ type: 'spring', damping: 22, stiffness: 220 }}
            className={`group relative rounded-[36px] overflow-hidden border p-8 sm:p-12 md:p-16 transition-all duration-700 bg-[#121214]/90 backdrop-blur-xl ${
              p1Hover ? 'border-[#7C5CFF]/60 shadow-[0_24px_80px_rgba(124,92,255,0.18)]' : 'border-white/10'
            }`}
          >
            {/* Giant Instrument Serif Italic 01 behind */}
            <div
              className={`absolute right-6 -bottom-10 pointer-events-none select-none font-display italic text-[16rem] sm:text-[22rem] leading-none z-0 transition-opacity duration-700 ${
                p1Hover ? 'opacity-10 text-[#7C5CFF]' : 'opacity-[0.035] text-white'
              }`}
            >
              01
            </div>

            {/* Ambient Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A122E]/80 via-[#121214] to-[#0A0A0B] pointer-events-none z-0" />

            {/* Top Metadata in IBM Plex Mono */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3 text-xs font-mono text-[#92908B] tracking-widest uppercase">
                <span className="text-[#7C5CFF] font-semibold">01 / FEATURE BUILD</span>
                <span>•</span>
                <span>{p1.category}</span>
              </div>
              <span className="px-3.5 py-1 rounded-full bg-[#7C5CFF]/15 border border-[#7C5CFF]/30 text-[10px] font-mono text-[#D8C39A] uppercase tracking-wider">
                {p1.badge}
              </span>
            </div>

            {/* 75% Width Visual & Overlapping Title */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F4F1EA] tracking-tight leading-[1.08] mb-4">
                  AQENIX{' '}
                  <span className="font-display italic text-[#D8C39A] block">
                    Career OS
                  </span>
                </h3>

                <p className="text-sm sm:text-base text-[#92908B] font-light leading-relaxed mb-6">
                  {p1.tagline}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {p1.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-[11px] font-mono text-[#F4F1EA]/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  {p1.liveDemoUrl && (
                    <a
                      href={p1.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full signature-gradient text-[#0A0A0B] text-xs font-mono font-semibold hover:opacity-95 transition-opacity"
                    >
                      <ExternalLink size={13} />
                      <span>LIVE PROJECT</span>
                    </a>
                  )}

                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F4F1EA] group-hover:text-[#D8C39A] transition-colors">
                    <span>EXPLORE DEEP DIVE</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>

                  {p1.githubUrl && (
                    <a
                      href={p1.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-full border border-white/10 hover:border-white/30 text-[#92908B] hover:text-white transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Visual */}
              <div className="lg:col-span-7 relative">
                <motion.div
                  animate={{ scale: p1Hover ? 1.03 : 1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl border border-white/15 bg-black/60 p-5 shadow-2xl overflow-hidden backdrop-blur-md"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 text-xs font-mono text-[#92908B]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF8066]/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D8C39A]/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#6EE7B7]/70" />
                      <span className="ml-2 text-[10px] text-white/50">career_os_agent_matrix.ts</span>
                    </div>
                    <span className="text-[#7C5CFF]">AI EVALUATOR: ONLINE</span>
                  </div>

                  {/* Simulated Metric Matrix */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-[10px] font-mono text-[#92908B] uppercase">Goal Traversal</div>
                      <div className="text-xl font-mono text-[#F4F1EA] font-semibold mt-1">Adaptive</div>
                      <div className="text-[10px] text-[#D8C39A]">Milestone Sync</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-[10px] font-mono text-[#92908B] uppercase">AI Mentor</div>
                      <div className="text-xl font-mono text-[#7C5CFF] font-semibold mt-1">Active</div>
                      <div className="text-[10px] text-[#7C5CFF]">Conversational</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 col-span-2 sm:col-span-1">
                      <div className="text-[10px] font-mono text-[#92908B] uppercase">Deployment</div>
                      <div className="text-xl font-mono text-[#6EE7B7] font-semibold mt-1">Vercel</div>
                      <div className="text-[10px] text-white/40">Production Edge</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#121214] border border-white/10 font-mono text-[11px] text-[#92908B] space-y-1">
                    <div className="text-[#D8C39A]">&gt; aqenix-ai-career-operating-system.vercel.app</div>
                    <div className="text-white/60">Evaluating candidate skill graph & roadmap velocity...</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            PROJECT 02: HEALTH GUIDE AI
            Asymmetric: Image on right, text on left with thin vertical line.
            Metadata: 02, AI SYSTEM, CONVERSATIONAL.
            Tiny teal accent. Radius: 24px.
        ========================================================= */}
        <div
          className="mb-24 perspective-1200 cursor-pointer"
          onMouseMove={(e) => calculateTilt(e, setP2Tilt)}
          onMouseEnter={() => setP2Hover(true)}
          onMouseLeave={() => {
            setP2Hover(false);
            setP2Tilt({ rx: 0, ry: 0 });
          }}
          onClick={() => onSelectProject(p2)}
          data-cursor="project"
        >
          <motion.div
            animate={{ rotateX: p2Tilt.rx, rotateY: p2Tilt.ry }}
            transition={{ type: 'spring', damping: 22, stiffness: 220 }}
            className={`group relative rounded-[24px] overflow-hidden border p-8 sm:p-12 transition-all duration-700 bg-[#121214]/90 backdrop-blur-xl ${
              p2Hover ? 'border-[#6EE7B7]/60 shadow-[0_24px_80px_rgba(110,231,183,0.15)]' : 'border-white/10'
            }`}
          >
            {/* Giant 02 */}
            <div
              className={`absolute right-8 -bottom-8 pointer-events-none select-none font-display italic text-[14rem] sm:text-[18rem] leading-none z-0 transition-opacity duration-700 ${
                p2Hover ? 'opacity-10 text-[#6EE7B7]' : 'opacity-[0.035] text-white'
              }`}
            >
              02
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column with Thin Vertical Line */}
              <div className="lg:col-span-5 flex items-stretch gap-6">
                <div className="w-[2px] bg-gradient-to-b from-[#6EE7B7] via-white/20 to-transparent self-stretch flex-shrink-0" />

                <div className="flex flex-col justify-center">
                  <div className="flex flex-col text-xs font-mono text-[#92908B] tracking-widest uppercase mb-3 space-y-1">
                    <span className="text-[#6EE7B7] font-semibold">02 / CONVERSATIONAL WELLNESS</span>
                    <span className="text-[11px] text-white/40">{p2.category}</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-light text-[#F4F1EA] tracking-tight mb-4">
                    Health Guide{' '}
                    <span className="font-display italic text-[#6EE7B7]">
                      AI
                    </span>
                  </h3>

                  <p className="text-sm text-[#92908B] font-light leading-relaxed mb-6">
                    {p2.tagline}
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    {p2.liveDemoUrl && (
                      <a
                        href={p2.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6EE7B7] text-[#0A0A0B] text-xs font-mono font-semibold hover:opacity-90 transition-opacity"
                      >
                        <ExternalLink size={13} />
                        <span>LIVE PROJECT</span>
                      </a>
                    )}
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-[#D8C39A]">
                      <span>DEEP DIVE</span>
                      <ArrowUpRight size={13} />
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Visual: Conversational Engine Fragment */}
              <div className="lg:col-span-7">
                <div className="rounded-xl border border-white/10 bg-black/80 p-5 font-mono text-xs shadow-2xl">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-[#92908B]">
                    <span className="flex items-center gap-2">
                      <HeartPulse size={14} className="text-[#6EE7B7]" />
                      <span>health-guide-ai-66.lovable.app</span>
                    </span>
                    <span className="text-[10px] text-[#6EE7B7] bg-[#6EE7B7]/10 px-2 py-0.5 rounded border border-[#6EE7B7]/20">
                      WELLNESS ENGINE
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-[#F4F1EA]/90">
                      <div className="text-[10px] text-[#92908B] mb-1">USER QUERY:</div>
                      "How can I maintain healthy posture and energy during long programming sprints?"
                    </div>
                    <div className="p-3 rounded-lg bg-[#6EE7B7]/5 border border-[#6EE7B7]/20 text-[#6EE7B7]">
                      <div className="text-[10px] text-[#6EE7B7]/70 mb-1">AI HEALTH GUIDE:</div>
                      "Integrate 20-20-20 visual pauses, 90° elbow ergonomic alignment, and hydration rhythm pacing. Structured wellness guardrails active."
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            PROJECT 03: CIVICFIND INDIA
            Wide horizontal composition, subtle map coordinates & elements,
            champagne highlight. Radius: 24px.
        ========================================================= */}
        <div
          className="mb-24 perspective-1200 cursor-pointer"
          onMouseMove={(e) => calculateTilt(e, setP3Tilt)}
          onMouseEnter={() => setP3Hover(true)}
          onMouseLeave={() => {
            setP3Hover(false);
            setP3Tilt({ rx: 0, ry: 0 });
          }}
          onClick={() => onSelectProject(p3)}
          data-cursor="project"
        >
          <motion.div
            animate={{ rotateX: p3Tilt.rx, rotateY: p3Tilt.ry }}
            transition={{ type: 'spring', damping: 22, stiffness: 220 }}
            className={`group relative rounded-[24px] overflow-hidden border p-8 sm:p-12 transition-all duration-700 bg-[#121214]/90 backdrop-blur-xl ${
              p3Hover ? 'border-[#D8C39A]/60 shadow-[0_24px_80px_rgba(216,195,154,0.15)]' : 'border-white/10'
            }`}
          >
            {/* Giant 03 */}
            <div
              className={`absolute right-8 -bottom-8 pointer-events-none select-none font-display italic text-[14rem] sm:text-[18rem] leading-none z-0 transition-opacity duration-700 ${
                p3Hover ? 'opacity-10 text-[#D8C39A]' : 'opacity-[0.035] text-white'
              }`}
            >
              03
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-xl">
                <div className="flex items-center gap-3 text-xs font-mono text-[#D8C39A] tracking-widest uppercase mb-3">
                  <span>03 / GEO-SPATIAL CIVIC TECH</span>
                  <span>•</span>
                  <span>12° 58' N, 77° 35' E</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-light text-[#F4F1EA] tracking-tight mb-3">
                  CivicFind{' '}
                  <span className="font-display italic text-[#D8C39A]">
                    India
                  </span>
                </h3>

                <p className="text-sm sm:text-base text-[#92908B] font-light leading-relaxed mb-6">
                  {p3.tagline}
                </p>

                <div className="flex flex-wrap gap-2 text-xs font-mono text-[#F4F1EA]/80 mb-6">
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">LEAFLET & OPENSTREETMAP</span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">GOVERNMENT DESKS</span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">INTERACTIVE ROUTING</span>
                </div>

                <div className="flex items-center gap-4">
                  {p3.liveDemoUrl && (
                    <a
                      href={p3.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D8C39A] text-[#0A0A0B] text-xs font-mono font-semibold hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink size={13} />
                      <span>LIVE PROJECT</span>
                    </a>
                  )}
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-[#F4F1EA] group-hover:text-[#D8C39A]">
                    <span>EXPLORE DEEP DIVE</span>
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>

              {/* Map grid visual cue */}
              <div className="w-full lg:w-80 p-5 rounded-2xl border border-white/10 bg-black/60 font-mono text-[11px] text-[#92908B] space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="flex items-center gap-1.5 text-[#D8C39A]">
                    <Globe size={13} />
                    <span>SPATIAL CIVIC INDEX</span>
                  </span>
                  <span className="text-[#6EE7B7]">ONLINE</span>
                </div>
                <div>government-office-finder.vercel.app</div>
                <div className="text-[10px] text-white/40">Karnataka Municipal Clusters & Public Desks</div>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-[#D8C39A]">
                  <span>PINPOINT VERIFIED</span>
                  <span>MAP ENGINE READY</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            PROJECT 04: POSTURE GUARDIAN AI
            Radius: 24px (Editorial).
        ========================================================= */}
        <div
          className="mb-24 perspective-1200 cursor-pointer"
          onMouseMove={(e) => calculateTilt(e, setP4Tilt)}
          onMouseEnter={() => setP4Hover(true)}
          onMouseLeave={() => {
            setP4Hover(false);
            setP4Tilt({ rx: 0, ry: 0 });
          }}
          onClick={() => onSelectProject(p4)}
          data-cursor="project"
        >
          <motion.div
            animate={{ rotateX: p4Tilt.rx, rotateY: p4Tilt.ry }}
            transition={{ type: 'spring', damping: 22, stiffness: 220 }}
            className={`group relative rounded-[24px] overflow-hidden border p-8 sm:p-12 transition-all duration-700 bg-[#121214]/90 backdrop-blur-xl ${
              p4Hover ? 'border-[#FF8066]/60 shadow-[0_24px_80px_rgba(255,128,102,0.15)]' : 'border-white/10'
            }`}
          >
            {/* Giant 04 */}
            <div
              className={`absolute right-8 -bottom-8 pointer-events-none select-none font-display italic text-[14rem] sm:text-[18rem] leading-none z-0 transition-opacity duration-700 ${
                p4Hover ? 'opacity-10 text-[#FF8066]' : 'opacity-[0.035] text-white'
              }`}
            >
              04
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6">
                <div className="flex items-center gap-3 text-xs font-mono text-[#FF8066] tracking-widest uppercase mb-3">
                  <span>04 / COMPUTER VISION & AI</span>
                  <span>•</span>
                  <span>REAL-TIME POSE</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-light text-[#F4F1EA] tracking-tight mb-3">
                  Posture Guardian{' '}
                  <span className="font-display italic text-[#FF8066]">
                    AI
                  </span>
                </h3>

                <p className="text-sm sm:text-base text-[#92908B] font-light leading-relaxed mb-6">
                  {p4.tagline}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  {p4.liveDemoUrl && (
                    <a
                      href={p4.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF8066] text-[#0A0A0B] text-xs font-mono font-semibold hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink size={13} />
                      <span>LIVE PROJECT</span>
                    </a>
                  )}
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-[#F4F1EA] group-hover:text-[#FF8066]">
                    <span>EXPLORE DEEP DIVE</span>
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 p-6 rounded-2xl border border-[#FF8066]/20 bg-black/50 font-mono text-xs text-[#F4F1EA]">
                <div className="flex items-center justify-between text-[#92908B] text-[10px] uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1.5 text-[#FF8066]">
                    <Eye size={13} />
                    <span>ON-DEVICE VISION MATRIX</span>
                  </span>
                  <span>100% PRIVATE WASM</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-[#F4F1EA]">Cervical Spine Angle</span>
                  <span className="text-[#6EE7B7]">Optimal (~14°)</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-[#F4F1EA]">Shoulder Horizontal Plane</span>
                  <span className="text-[#D8C39A]">Balanced</span>
                </div>
                <div className="flex items-center justify-between py-2 text-[10px] text-white/40">
                  <span>posture-guardian-ai.vercel.app</span>
                  <span>Edge AI Feedback</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            PROJECT 05: AQENIX FIT AI
            Dark immersive composition, floating UI fragments, OS feel,
            subtle violet glow. Radius: 36px.
        ========================================================= */}
        <div
          className="perspective-1200 cursor-pointer"
          onMouseMove={(e) => calculateTilt(e, setP5Tilt)}
          onMouseEnter={() => setP5Hover(true)}
          onMouseLeave={() => {
            setP5Hover(false);
            setP5Tilt({ rx: 0, ry: 0 });
          }}
          onClick={() => onSelectProject(p5)}
          data-cursor="project"
        >
          <motion.div
            animate={{ rotateX: p5Tilt.rx, rotateY: p5Tilt.ry }}
            transition={{ type: 'spring', damping: 22, stiffness: 220 }}
            className={`group relative rounded-[36px] overflow-hidden border p-8 sm:p-12 transition-all duration-700 bg-[#121214]/90 backdrop-blur-xl ${
              p5Hover ? 'border-[#7C5CFF]/60 shadow-[0_24px_80px_rgba(124,92,255,0.18)]' : 'border-white/10'
            }`}
          >
            {/* Giant 05 */}
            <div
              className={`absolute right-8 -bottom-8 pointer-events-none select-none font-display italic text-[14rem] sm:text-[18rem] leading-none z-0 transition-opacity duration-700 ${
                p5Hover ? 'opacity-10 text-[#7C5CFF]' : 'opacity-[0.035] text-white'
              }`}
            >
              05
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 text-xs font-mono text-[#7C5CFF] tracking-widest uppercase mb-3">
                  <span>05 / FITNESS INTELLIGENCE</span>
                  <span>•</span>
                  <span>AI ASSISTANT</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-light text-[#F4F1EA] tracking-tight mb-3">
                  AQENIX{' '}
                  <span className="font-display italic text-[#7C5CFF]">
                    Fit AI
                  </span>
                </h3>

                <p className="text-sm sm:text-base text-[#92908B] font-light leading-relaxed mb-6">
                  {p5.tagline}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  {p5.liveDemoUrl && (
                    <a
                      href={p5.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full signature-gradient text-[#0A0A0B] text-xs font-mono font-semibold hover:opacity-95 transition-opacity"
                    >
                      <ExternalLink size={13} />
                      <span>LIVE PROJECT</span>
                    </a>
                  )}
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-[#D8C39A]">
                    <span>EXPLORE DEEP DIVE</span>
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>

              {/* Right Visual */}
              <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md">
                  <div className="text-[10px] font-mono text-[#7C5CFF] uppercase mb-1">Adaptive Workout</div>
                  <div className="text-xl font-mono text-[#F4F1EA]">Dynamic AI</div>
                  <div className="text-[10px] text-[#92908B]">Personalized Sprints</div>
                </div>

                <div className="p-4 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md">
                  <div className="text-[10px] font-mono text-[#D8C39A] uppercase mb-1">Nutrition Tracker</div>
                  <div className="text-xl font-mono text-[#F4F1EA]">Smart Guidance</div>
                  <div className="text-[10px] text-[#92908B]">Progress Calibration</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            ADDITIONAL PROJECTS & CONCEPTS DIRECTORY
        ========================================================= */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#7C5CFF] mb-1 block">
                EXPANDED PORTFOLIO
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-[#F4F1EA]">
                More Projects &{' '}
                <span className="font-display italic text-[#D8C39A]">Concepts</span>
              </h3>
            </div>
            <span className="text-xs font-mono text-[#92908B]">
              CLICK ANY ITEM FOR DEEP DIVE / LIVE LAUNCH
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => onSelectProject(proj)}
                className="group p-6 rounded-3xl border border-white/10 bg-[#121214]/60 hover:bg-[#121214] hover:border-white/25 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#92908B] mb-4">
                    <span className="text-[#D8C39A] font-medium">{proj.number}</span>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10">
                      {proj.badge}
                    </span>
                  </div>

                  <h4 className="text-lg font-medium text-[#F4F1EA] mb-2 group-hover:text-[#D8C39A] transition-colors">
                    {proj.name}
                  </h4>

                  <p className="text-xs text-[#92908B] leading-relaxed mb-4">
                    {proj.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <div className="flex gap-1.5 flex-wrap">
                    {proj.tech.slice(0, 2).map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/70">
                        {t}
                      </span>
                    ))}
                  </div>

                  {proj.liveDemoUrl ? (
                    <a
                      href={proj.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[#6EE7B7] hover:underline flex items-center gap-1"
                    >
                      <span>Launch</span>
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <span className="text-[#7C5CFF] flex items-center gap-1">
                      <span>Concept</span>
                      <ArrowUpRight size={12} />
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
