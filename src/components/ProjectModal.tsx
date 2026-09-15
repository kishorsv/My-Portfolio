import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../data/projects';
import { X, ExternalLink, CheckCircle2, Cpu, BarChart3, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
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
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface border border-white/15 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-text-primary custom-scrollbar"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-bg/80 border border-stroke flex items-center justify-center text-muted hover:text-text-primary hover:border-white/30 transition-all"
            aria-label="Close project modal"
          >
            <X size={18} />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-display italic text-2xl text-[#89AACC] font-bold">
              {project.number}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-stroke" />
            <span className="text-xs uppercase tracking-[0.25em] text-muted font-medium">
              {project.category}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display italic text-text-primary mb-4 leading-tight">
            {project.title}
          </h2>

          <p className="text-sm sm:text-base text-muted leading-relaxed mb-8">
            {project.fullDescription}
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 rounded-2xl bg-bg/60 border border-stroke mb-8">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-xs text-muted font-mono uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <BarChart3 size={12} className="text-[#89AACC]" />
                  {metric.label}
                </span>
                <span className="text-lg sm:text-2xl font-display italic font-semibold text-text-primary">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Architecture Breakdown */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-text-primary/80 mb-3 flex items-center gap-2">
              <Cpu size={14} className="text-[#89AACC]" />
              System Architecture & Stack
            </h4>
            <div className="space-y-2">
              {project.architecture.map((arch, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-bg/40 border border-stroke/60 text-xs sm:text-sm text-muted font-mono flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4E85BF]" />
                  {arch}
                </div>
              ))}
            </div>
          </div>

          {/* Core Features */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-text-primary/80 mb-3 flex items-center gap-2">
              <Layers size={14} className="text-[#89AACC]" />
              Key Features & Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-muted/90 p-2.5 rounded-xl bg-bg/20 border border-stroke/40"
                >
                  <CheckCircle2 size={15} className="text-[#89AACC] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-stroke/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-3 py-1 rounded-full bg-bg border border-stroke text-muted font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stroke bg-bg hover:border-white/30 text-xs font-medium text-text-primary transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>Repository</span>
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full accent-gradient text-bg text-xs font-semibold hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={14} />
                  <span>Live Project</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
