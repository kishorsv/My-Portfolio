import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import type { FeaturedProject } from '../data/projects';
import { GithubIcon } from './icons';
import { ArrowUpRight, ExternalLink, AlertCircle, CheckCircle2, TrendingUp } from 'lucide-react';

interface ProjectCardProps {
  project: FeaturedProject;
  onOpenCaseStudy: (project: FeaturedProject) => void;
  isLarge?: boolean;
}

export function ProjectCard({ project, onOpenCaseStudy, isLarge = false }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y });

    // Subtle 3D tilt calculation (max 3-4 deg)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 4;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className="w-full h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.2 }}
        className={`group relative w-full h-full overflow-hidden border border-white/10 p-7 sm:p-9 md:p-10 flex flex-col justify-between transition-all duration-500 hover:border-white/30 hover:shadow-2xl ${
          isLarge ? 'rounded-[36px] min-h-[460px]' : 'rounded-[28px] min-h-[400px]'
        }`}
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(16px)',
        }}
        data-cursor="project"
      >
        {/* Giant low-opacity background number: 01 in Instrument Serif Italic */}
        <div className="absolute right-4 -bottom-6 pointer-events-none select-none font-display italic text-9xl sm:text-[14rem] text-white/[0.04] leading-none z-0">
          {project.number}
        </div>

        {/* Dynamic ambient color gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.previewGradient} opacity-40 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none z-0`}
        />

        {/* Halftone texture overlay */}
        <div className="absolute inset-0 halftone-overlay pointer-events-none z-0" />

        {/* Mouse radial flashlight */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
            style={{
              background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(137, 170, 204, 0.15), transparent 70%)`,
            }}
          />
        )}

        {/* Top-Bar Art Direction: 01 / AI (Top-Left) and 2026 (Top-Right) */}
        <div className="relative z-10 flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#89AACC] font-semibold">
              {project.number} / {project.badge}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-muted/60 tracking-wider">
              2026
            </span>
            <button
              onClick={() => onOpenCaseStudy(project)}
              className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-muted group-hover:text-text-primary group-hover:border-white/30 group-hover:rotate-45 transition-all duration-300"
              aria-label="View Project Case Study"
              data-cursor="link"
            >
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        {/* Project Title & Tagline with Layered Slide on Hover */}
        <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display italic text-text-primary mb-2 leading-tight tracking-tight">
            {project.name}
          </h3>

          <p className="text-sm text-muted max-w-xl font-light leading-relaxed mb-4">
            {project.tagline}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-muted font-mono"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Structured Proof Box: Problem -> Solution -> Result */}
        <div className="relative z-10 space-y-3 my-2 p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md">
          <div className="text-xs leading-relaxed">
            <div className="flex items-center gap-1.5 text-amber-300 font-mono uppercase tracking-wider text-[10px] font-semibold mb-1">
              <AlertCircle size={12} />
              <span>Problem</span>
            </div>
            <p className="text-muted/90 pl-3.5 border-l border-amber-300/30 text-[11px] sm:text-xs font-light">
              {project.problem}
            </p>
          </div>

          <div className="text-xs leading-relaxed">
            <div className="flex items-center gap-1.5 text-[#89AACC] font-mono uppercase tracking-wider text-[10px] font-semibold mb-1">
              <CheckCircle2 size={12} />
              <span>Solution</span>
            </div>
            <p className="text-muted/90 pl-3.5 border-l border-[#89AACC]/40 text-[11px] sm:text-xs font-light">
              {project.solution}
            </p>
          </div>

          <div className="text-xs leading-relaxed">
            <div className="flex items-center gap-1.5 text-emerald-400 font-mono uppercase tracking-wider text-[10px] font-semibold mb-1">
              <TrendingUp size={12} />
              <span>Result & Utility</span>
            </div>
            <p className="text-muted/90 pl-3.5 border-l border-emerald-400/40 text-[11px] sm:text-xs font-light">
              {project.result}
            </p>
          </div>
        </div>

        {/* Card Footer: Live Demo · GitHub · Case Study */}
        <div className="relative z-10 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 mt-4">
          <div className="flex items-center gap-2">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full accent-gradient text-bg text-xs font-semibold hover:opacity-90 transition-opacity shadow-sm"
                data-cursor="link"
              >
                <ExternalLink size={13} />
                <span>Live Demo</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-white/15 bg-white/5 hover:border-white/30 text-xs font-medium text-text-primary transition-colors"
                data-cursor="link"
              >
                <GithubIcon size={13} />
                <span>GitHub</span>
              </a>
            )}
          </div>

          <button
            onClick={() => onOpenCaseStudy(project)}
            className="text-xs font-mono text-muted hover:text-text-primary underline underline-offset-4 decoration-white/20 hover:decoration-[#89AACC] transition-colors"
            data-cursor="link"
          >
            Case Study Breakdown →
          </button>
        </div>

        {/* Light-Traveling Gradient Border */}
        <div className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-[inherit] p-[1px] bg-gradient-to-r from-[#89AACC] via-[#4E85BF] to-[#89AACC] animate-gradient-shift [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude]" />
        </div>
      </motion.div>
    </div>
  );
}
