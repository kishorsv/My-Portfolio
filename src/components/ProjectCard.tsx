import { useState, useRef } from 'react';
import type { FeaturedProject } from '../data/projects';
import { ArrowUpRight, ExternalLink, AlertCircle, CheckCircle2, TrendingUp } from 'lucide-react';
import { GithubIcon } from './icons';

interface ProjectCardProps {
  project: FeaturedProject;
  onOpenCaseStudy: (project: FeaturedProject) => void;
}

export function ProjectCard({ project, onOpenCaseStudy }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-3xl bg-surface border border-stroke overflow-hidden transition-all duration-300 hover:border-white/20 p-6 sm:p-8 flex flex-col justify-between"
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.previewGradient} opacity-70 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none`}
      />

      {/* Halftone Overlay */}
      <div className="absolute inset-0 halftone-overlay pointer-events-none" />

      {/* Radial flashlight */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(137, 170, 204, 0.12), transparent 70%)`,
          }}
        />
      )}

      {/* Card Header: Number, Name, 1-Line Explanation */}
      <div className="relative z-10 mb-6">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2.5">
            <span className="font-display italic text-2xl text-text-primary/70 font-semibold">
              {project.number}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-stroke" />
            <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-bg border border-stroke text-[#89AACC]">
              {project.badge}
            </span>
          </div>

          <button
            onClick={() => onOpenCaseStudy(project)}
            className="text-xs text-muted hover:text-text-primary font-mono flex items-center gap-1 group/btn"
          >
            <span>Case Study</span>
            <ArrowUpRight size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        <h3 className="text-2xl sm:text-3xl font-display italic text-text-primary leading-tight mb-2">
          {project.name}
        </h3>

        <p className="text-sm text-text-primary/80 font-light leading-relaxed">
          {project.tagline}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2.5 py-0.5 rounded-full bg-bg/80 border border-stroke/70 text-muted font-mono"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Structured Proof: Problem -> Solution -> Result */}
      <div className="relative z-10 space-y-3.5 my-4 p-4 sm:p-5 rounded-2xl bg-bg/60 border border-stroke/70">
        {/* Problem */}
        <div className="text-xs leading-relaxed">
          <div className="flex items-center gap-1.5 text-amber-300/90 font-mono uppercase tracking-wider text-[10px] font-semibold mb-1">
            <AlertCircle size={12} />
            <span>Problem</span>
          </div>
          <p className="text-muted/90 pl-4 border-l border-amber-300/20">
            {project.problem}
          </p>
        </div>

        {/* Solution */}
        <div className="text-xs leading-relaxed">
          <div className="flex items-center gap-1.5 text-[#89AACC] font-mono uppercase tracking-wider text-[10px] font-semibold mb-1">
            <CheckCircle2 size={12} />
            <span>Solution</span>
          </div>
          <p className="text-muted/90 pl-4 border-l border-[#89AACC]/30">
            {project.solution}
          </p>
        </div>

        {/* Result */}
        <div className="text-xs leading-relaxed">
          <div className="flex items-center gap-1.5 text-emerald-400 font-mono uppercase tracking-wider text-[10px] font-semibold mb-1">
            <TrendingUp size={12} />
            <span>Result & Utility</span>
          </div>
          <p className="text-muted/90 pl-4 border-l border-emerald-400/30">
            {project.result}
          </p>
        </div>
      </div>

      {/* Action Links: Live Demo · GitHub · Case Study */}
      <div className="relative z-10 pt-4 border-t border-stroke/60 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full accent-gradient text-bg text-xs font-semibold hover:opacity-90 transition-opacity shadow-sm"
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
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-stroke bg-bg/80 hover:border-white/30 text-xs font-medium text-text-primary transition-colors"
            >
              <GithubIcon size={13} />
              <span>GitHub</span>
            </a>
          )}
        </div>

        <button
          onClick={() => onOpenCaseStudy(project)}
          className="text-xs font-mono text-muted hover:text-text-primary underline underline-offset-4 decoration-stroke hover:decoration-[#89AACC] transition-colors"
        >
          View Breakdown →
        </button>
      </div>

      {/* Hover animated border ring */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-[#89AACC] via-[#4E85BF] to-[#89AACC] animate-gradient-shift [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude]" />
      </div>
    </div>
  );
}
