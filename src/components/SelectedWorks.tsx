import { useState } from 'react';
import { motion } from 'framer-motion';
import { featuredProjects, type FeaturedProject } from '../data/projects';
import { SectionDivider } from './SectionDivider';
import { ArrowUpRight, Globe, Terminal } from 'lucide-react';
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

  return (
    <section id="projects" className="bg-[#0A0A0B] py-28 md:py-40 relative overflow-hidden">
      {/* Section Divider */}
      <SectionDivider number="03" label="ART-DIRECTED PROJECT GALLERY" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 lg:px-20 pt-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D8C39A] mb-3 block">
              CASE STUDIES & PRODUCTION BUILDS
            </span>
            <h2 className="heading-clamp font-light tracking-tight text-[#F4F1EA]">
              Featured <span className="font-display italic text-[#D8C39A]">works.</span>
            </h2>
            <p className="text-base text-[#92908B] max-w-lg mt-3 leading-relaxed font-light">
              Each system engineered from foundational problems into living products with measurable impact.
            </p>
          </div>

          <a
            href="https://github.com/kishorsv?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-white/30 text-xs font-mono text-[#F4F1EA] transition-colors group self-start md:self-auto"
            data-cursor="link"
          >
            <span>ALL REPOSITORIES</span>
            <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
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

                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center gap-2 text-xs font-mono text-[#F4F1EA] group-hover:text-[#D8C39A] transition-colors">
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

              {/* Right Visual (Occupying ~75% of visual focus) */}
              <div className="lg:col-span-7 relative">
                <motion.div
                  animate={{ scale: p1Hover ? 1.04 : 1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl border border-white/15 bg-black/60 p-5 shadow-2xl overflow-hidden backdrop-blur-md"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 text-xs font-mono text-[#92908B]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF8066]/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D8C39A]/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#A6D7B8]/70" />
                      <span className="ml-2 text-[10px] text-white/50">multi_agent_graph_evaluator.py</span>
                    </div>
                    <span className="text-[#A6D7B8] text-[10px]">? 50K NODES ACTIVE</span>
                  </div>

                  {/* Simulated Code / Pipeline Matrix */}
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between">
                      <span className="text-[#92908B]">Prerequisite Auditing:</span>
                      <span className="text-[#D8C39A] font-semibold">Graph-Traversal Validated</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between">
                      <span className="text-[#92908B]">Milestone Synthesis:</span>
                      <span className="text-[#7C5CFF] font-semibold">Weekly Adaptive Cohort (80% faster)</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between">
                      <span className="text-[#92908B]">Interview Feedback Engine:</span>
                      <span className="text-[#A6D7B8] font-semibold">Deterministic Rubric Active</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            PROJECT 02: AQENIX CHAT AI
            Asymmetric: Image on right, text on left with thin vertical line.
            Metadata: 02, AI SYSTEM, CONVERSATIONAL.
            Tiny violet accent. Radius: 24px.
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
              p2Hover ? 'border-[#7C5CFF]/60 shadow-[0_24px_80px_rgba(124,92,255,0.15)]' : 'border-white/10'
            }`}
          >
            {/* Giant 02 */}
            <div
              className={`absolute right-8 -bottom-8 pointer-events-none select-none font-display italic text-[14rem] sm:text-[18rem] leading-none z-0 transition-opacity duration-700 ${
                p2Hover ? 'opacity-10 text-[#7C5CFF]' : 'opacity-[0.035] text-white'
              }`}
            >
              02
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column with Thin Vertical Line */}
              <div className="lg:col-span-5 flex items-stretch gap-6">
                {/* Thin vertical accent line */}
                <div className="w-[2px] bg-gradient-to-b from-[#7C5CFF] via-white/20 to-transparent self-stretch flex-shrink-0" />

                <div className="flex flex-col justify-center">
                  <div className="flex flex-col text-xs font-mono text-[#92908B] tracking-widest uppercase mb-3 space-y-1">
                    <span className="text-[#7C5CFF] font-semibold">02 / CONVERSATIONAL AI</span>
                    <span className="text-[11px] text-white/40">AI SYSTEM · REAL-TIME STREAMING</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-light text-[#F4F1EA] tracking-tight mb-4">
                    AQENIX{' '}
                    <span className="font-display italic text-[#F4F1EA]">
                      Chat AI
                    </span>
                  </h3>

                  <p className="text-sm text-[#92908B] font-light leading-relaxed mb-6">
                    {p2.tagline}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-mono text-[#D8C39A]">
                    <span>SUB-40MS TTFT</span>
                    <span>•</span>
                    <span>ZERO LAYOUT SHIFT</span>
                  </div>
                </div>
              </div>

              {/* Right Visual: Streaming Terminal Fragment */}
              <div className="lg:col-span-7">
                <motion.div
                  animate={{ scale: p2Hover ? 1.04 : 1 }}
                  transition={{ duration: 0.6 }}
                  className="rounded-xl border border-white/10 bg-black/70 p-5 font-mono text-xs shadow-xl"
                >
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-[11px] text-[#92908B]">
                    <div className="flex items-center gap-2">
                      <Terminal size={14} className="text-[#7C5CFF]" />
                      <span>edge_stream_worker.ts</span>
                    </div>
                    <span className="text-[#A6D7B8]">38.2ms latency</span>
                  </div>
                  <pre className="text-xs text-[#F4F1EA]/90 leading-relaxed overflow-x-auto">
                    <span className="text-[#7C5CFF]">const</span> stream = <span className="text-[#D8C39A]">await</span> edgeRuntime.hydrate(&#123;{'\n'}
                    {'  '}memory: <span className="text-[#A6D7B8]">'hierarchical_compaction'</span>,{'\n'}
                    {'  '}sandbox: <span className="text-[#A6D7B8]">'virtualized_execution'</span>,{'\n'}
                    &#125;);
                  </pre>
                </motion.div>
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
                  <span>03 / GEO-SPATIAL PLATFORM</span>
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

                <div className="flex flex-wrap gap-2 text-xs font-mono text-[#F4F1EA]/80">
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">14,000+ DESKS INDEXED</span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">65MS QUERY LATENCY</span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">KANNADA + ENGLISH</span>
                </div>
              </div>

              {/* Map grid visual cue */}
              <div className="w-full lg:w-72 p-4 rounded-xl border border-white/10 bg-black/60 font-mono text-[11px] text-[#92908B] space-y-2">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="flex items-center gap-1.5 text-[#D8C39A]">
                    <Globe size={13} />
                    <span>SPATIAL DESK NODE</span>
                  </span>
                  <span>ONLINE PWA</span>
                </div>
                <div>Bengaluru Municipal Cluster</div>
                <div className="text-[10px] text-white/40">Lat: 12.9716° | Lon: 77.5946°</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            PROJECT 04: LINGUABRIDGE
            Human visual style, warm ivory typography, subtle coral accent.
            Radius: 8px (Editorial).
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
            className={`group relative rounded-[8px] overflow-hidden border p-8 sm:p-12 transition-all duration-700 bg-[#121214]/90 backdrop-blur-xl ${
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
                  <span>04 / INDIC NLP TRANSFORMER</span>
                  <span>•</span>
                  <span>HUMAN LANGUAGE</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-light text-[#F4F1EA] tracking-tight mb-3">
                  Lingua{' '}
                  <span className="font-display italic text-[#FF8066]">
                    Bridge
                  </span>
                </h3>

                <p className="text-sm sm:text-base text-[#92908B] font-light leading-relaxed mb-6">
                  {p4.tagline}
                </p>

                <div className="text-xs font-mono text-[#FF8066] flex items-center gap-2">
                  <span>+7.4 BLEU SCORE GAIN OVER GENERIC BASELINES</span>
                </div>
              </div>

              <div className="lg:col-span-6 p-6 rounded border border-[#FF8066]/20 bg-black/50 font-mono text-xs text-[#F4F1EA]">
                <div className="text-[#92908B] text-[10px] uppercase tracking-widest mb-3">
                  VERNACULAR DIALECT TRANSLITERATION MATRIX
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-[#F4F1EA]">????? ???? (Regional Source)</span>
                  <span className="text-[#FF8066]">Phonetic Aligned</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-[#D8C39A]">Preserved Idiomatic English</span>
                  <span className="text-[#A6D7B8]">High Fidelity</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            PROJECT 05: LIFEOS
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
                  <span>05 / LOCAL OPERATING SYSTEM</span>
                  <span>•</span>
                  <span>SYSTEM ENVIRONMENT</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-light text-[#F4F1EA] tracking-tight mb-3">
                  Life{' '}
                  <span className="font-display italic text-[#7C5CFF]">
                    OS
                  </span>
                </h3>

                <p className="text-sm sm:text-base text-[#92908B] font-light leading-relaxed mb-6">
                  {p5.tagline}
                </p>

                <div className="flex items-center gap-2 text-xs font-mono text-[#A6D7B8]">
                  <span>100% LOCAL-FIRST</span>
                  <span>•</span>
                  <span>0MS INPUT LATENCY</span>
                </div>
              </div>

              {/* Floating UI fragments for OS feel */}
              <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md">
                  <div className="text-[10px] font-mono text-[#7C5CFF] uppercase mb-1">Circadian Block</div>
                  <div className="text-xl font-mono text-[#F4F1EA]">01:45:00</div>
                  <div className="text-[10px] text-[#92908B]">Deep Engineering Sprint</div>
                </div>

                <div className="p-4 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md">
                  <div className="text-[10px] font-mono text-[#D8C39A] uppercase mb-1">Thought Graph</div>
                  <div className="text-xl font-mono text-[#F4F1EA]">142 Nodes</div>
                  <div className="text-[10px] text-[#92908B]">Bidirectional Markdown</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
