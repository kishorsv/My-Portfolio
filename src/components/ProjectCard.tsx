import { useState, useRef } from 'react';
import type { Project } from '../data/projects';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
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
      onClick={() => onSelect(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
      className={`group relative ${project.colSpan} min-h-[380px] md:min-h-[440px] rounded-3xl bg-surface border border-stroke overflow-hidden cursor-pointer transition-all duration-500 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-[#89AACC] flex flex-col justify-between p-6 sm:p-8`}
    >
      {/* Dynamic Ambient Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.previewGradient} transition-transform duration-700 ease-out group-hover:scale-105`}
      />

      {/* Stylized generative UI graphic background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-500">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 300"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id={`grad-${project.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#89AACC" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#4E85BF" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 C150,150 250,50 400,120 L400,300 L0,300 Z"
            fill={`url(#grad-${project.id})`}
          />
          <circle cx="320" cy="80" r="60" stroke="#89AACC" strokeWidth="0.5" fill="none" opacity="0.4" />
          <circle cx="320" cy="80" r="90" stroke="#89AACC" strokeWidth="0.5" strokeDasharray="4 4" fill="none" opacity="0.2" />
        </svg>
      </div>

      {/* Halftone 4px x 4px Overlay (20% opacity) */}
      <div className="absolute inset-0 halftone-overlay pointer-events-none" />

      {/* Subtle radial flashlight effect based on mouse position */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(137, 170, 204, 0.12), transparent 80%)`,
          }}
        />
      )}

      {/* Dark overlay on hover + backdrop blur */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 group-hover:backdrop-blur-[2px] transition-all duration-500 pointer-events-none" />

      {/* Top Bar: Number & Category */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <span className="font-display italic text-2xl text-text-primary/70 font-semibold tracking-wider">
            {project.number}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-stroke" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted font-medium">
            {project.category}
          </span>
        </div>

        {/* Top-right subtle link badge */}
        <div className="w-8 h-8 rounded-full border border-stroke/60 bg-bg/50 flex items-center justify-center text-muted group-hover:text-text-primary group-hover:border-white/30 group-hover:scale-110 transition-all duration-300">
          <ArrowUpRight size={15} />
        </div>
      </div>

      {/* Middle/Bottom: Project Title, Description & Tags */}
      <div className="relative z-10 mt-auto transition-transform duration-500 ease-out group-hover:-translate-y-2">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display italic text-text-primary mb-3 leading-tight tracking-tight">
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm text-muted line-clamp-2 max-w-xl leading-relaxed mb-4">
          {project.shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-[10px] sm:text-[11px] px-2.5 py-1 rounded-full bg-bg/70 border border-stroke/60 text-muted/90 font-mono tracking-tight"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-[10px] px-2 py-1 rounded-full bg-bg/50 text-muted/70 font-mono">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Hover Action Pill: "View — Project Name" */}
        <div className="pt-1 flex items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium text-text-primary border border-white/15 bg-bg/90 backdrop-blur-md opacity-90 group-hover:opacity-100 group-hover:border-[#89AACC]/60 transition-all duration-300 shadow-md">
            <span>View — {project.title}</span>
            <span className="text-[#89AACC] group-hover:translate-x-0.5 transition-transform duration-200">
              →
            </span>
          </div>
        </div>
      </div>

      {/* Animated Gradient Border on Hover */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-[#89AACC] via-[#4E85BF] to-[#89AACC] animate-gradient-shift [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude]" />
      </div>
    </div>
  );
}
