import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { FeaturedProject } from '../data/projects';
import { X, ExternalLink, AlertCircle, CheckCircle2, TrendingUp, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: FeaturedProject | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#121214] border border-white/20 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-[#F4F1EA] custom-scrollbar"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#0A0A0B] border border-white/15 flex items-center justify-center text-[#92908B] hover:text-white hover:border-white/30 transition-all"
            aria-label="Close project modal"
          >
            <X size={18} />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-display italic text-2xl text-[#D8C39A] font-bold">
              {project.number}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#92908B] font-mono font-medium">
              {project.badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display italic text-[#F4F1EA] mb-3 leading-tight">
            {project.name}
          </h2>

          <p className="text-base text-[#92908B] leading-relaxed mb-6 font-light">
            {project.tagline}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-white/10">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full bg-[#0A0A0B] border border-white/10 text-[#F4F1EA]/80 font-mono"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Detailed Problem -> Solution -> Result Breakdown */}
          <div className="space-y-6 mb-8">
            {/* Problem */}
            <div className="p-5 rounded-2xl bg-[#0A0A0B]/60 border border-[#FF8066]/30">
              <div className="flex items-center gap-2 text-[#FF8066] font-mono text-xs uppercase tracking-wider font-semibold mb-2">
                <AlertCircle size={15} />
                <span>The Core Problem</span>
              </div>
              <p className="text-sm text-[#F4F1EA]/90 leading-relaxed font-light">
                {project.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="p-5 rounded-2xl bg-[#0A0A0B]/60 border border-[#7C5CFF]/30">
              <div className="flex items-center gap-2 text-[#7C5CFF] font-mono text-xs uppercase tracking-wider font-semibold mb-2">
                <CheckCircle2 size={15} />
                <span>Engineered Solution</span>
              </div>
              <p className="text-sm text-[#F4F1EA]/90 leading-relaxed font-light">
                {project.solution}
              </p>
            </div>

            {/* Result */}
            <div className="p-5 rounded-2xl bg-[#0A0A0B]/60 border border-[#A6D7B8]/30">
              <div className="flex items-center gap-2 text-[#A6D7B8] font-mono text-xs uppercase tracking-wider font-semibold mb-2">
                <TrendingUp size={15} />
                <span>Measurable Result</span>
              </div>
              <p className="text-sm text-[#F4F1EA]/90 leading-relaxed font-light">
                {project.result}
              </p>
            </div>
          </div>



          {/* Action Links */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-mono text-[#92908B] flex items-center gap-1.5">
              <Layers size={13} className="text-[#D8C39A]" />
              Production Verified Codebase
            </span>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-[#0A0A0B] hover:border-white/30 text-xs font-mono text-[#F4F1EA] transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>Repository</span>
                </a>
              )}

              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full signature-gradient text-[#0A0A0B] text-xs font-mono font-semibold hover:opacity-95 transition-opacity"
                >
                  <ExternalLink size={14} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
