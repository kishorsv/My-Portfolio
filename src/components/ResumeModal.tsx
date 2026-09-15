import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/socials';
import { X, Download, GraduationCap, Code, Briefcase, MapPin } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Body */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-3xl max-h-[88vh] overflow-y-auto bg-surface border border-white/20 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-text-primary custom-scrollbar"
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-stroke">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#89AACC]" />
              <span className="text-xs uppercase tracking-[0.25em] text-muted font-mono">
                Curriculum Vitae • Kishor SV
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`mailto:${personalInfo.email}?subject=Resume Request - Kishor SV`}
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-stroke bg-bg/60 text-xs font-mono text-text-primary hover:border-white/30 transition-colors"
              >
                <Download size={13} />
                <span>Request PDF</span>
              </a>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-bg/80 border border-stroke flex items-center justify-center text-muted hover:text-text-primary hover:border-white/30 transition-all"
                aria-label="Close resume"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Profile Header */}
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-display italic text-text-primary mb-1">
              {personalInfo.name}
            </h2>
            <p className="text-sm font-mono text-[#89AACC] mb-2">
              {personalInfo.primaryRole}
            </p>
            <div className="flex items-center gap-4 text-xs text-muted font-mono">
              <span className="flex items-center gap-1">
                <MapPin size={12} />
                {personalInfo.location}
              </span>
              <span>•</span>
              <span>{personalInfo.email}</span>
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#89AACC] mb-4 flex items-center gap-2">
              <GraduationCap size={15} />
              Education
            </h3>
            <div className="p-4 rounded-2xl bg-bg/50 border border-stroke/70">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <span className="text-sm font-semibold text-text-primary">
                  B.E. in Artificial Intelligence & Machine Learning
                </span>
                <span className="text-xs font-mono text-muted">2022 — 2026</span>
              </div>
              <p className="text-xs text-muted mb-2">Bengaluru, Karnataka, India</p>
              <p className="text-xs text-muted/80 leading-relaxed">
                Specializing in Deep Learning, Natural Language Processing, Autonomous Systems, and Full-Stack Web Development.
              </p>
            </div>
          </div>

          {/* Technical Competencies */}
          <div className="mb-8">
            <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#89AACC] mb-4 flex items-center gap-2">
              <Code size={15} />
              Core Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-bg/40 border border-stroke/60">
                <span className="font-semibold text-text-primary block mb-1">AI & Machine Learning</span>
                <span className="text-muted font-mono">LangChain, PyTorch, vLLM, Vector DBs (Pinecone, pgvector), MediaPipe, OpenCV, Hugging Face</span>
              </div>
              <div className="p-3.5 rounded-xl bg-bg/40 border border-stroke/60">
                <span className="font-semibold text-text-primary block mb-1">Full-Stack & Languages</span>
                <span className="text-muted font-mono">TypeScript, Python, JavaScript, C++, React, Next.js, FastAPI, Node.js, Tailwind CSS</span>
              </div>
              <div className="p-3.5 rounded-xl bg-bg/40 border border-stroke/60">
                <span className="font-semibold text-text-primary block mb-1">Data & Storage</span>
                <span className="text-muted font-mono">PostgreSQL, Redis, SQLite, IndexedDB, GeoJSON, PostGIS</span>
              </div>
              <div className="p-3.5 rounded-xl bg-bg/40 border border-stroke/60">
                <span className="font-semibold text-text-primary block mb-1">DevOps & Animation</span>
                <span className="text-muted font-mono">Docker, Git, WebSockets, GSAP, Framer Motion, HLS.js, Linux</span>
              </div>
            </div>
          </div>

          {/* Key Builds Summary */}
          <div className="mb-6">
            <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#89AACC] mb-4 flex items-center gap-2">
              <Briefcase size={15} />
              Selected Engineering Highlights
            </h3>
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-bg/30 border border-stroke/50 text-xs">
                <div className="flex items-center justify-between text-text-primary font-medium mb-1">
                  <span>AQENIX AI Career OS</span>
                  <span className="font-mono text-muted text-[11px]">Lead Developer</span>
                </div>
                <p className="text-muted text-[11px] leading-relaxed">
                  Architected multi-agent recommendation graph parsing resume embeddings against 50k+ market nodes with sub-500ms response time.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-bg/30 border border-stroke/50 text-xs">
                <div className="flex items-center justify-between text-text-primary font-medium mb-1">
                  <span>Posture Guardian AI</span>
                  <span className="font-mono text-muted text-[11px]">Computer Vision</span>
                </div>
                <p className="text-muted text-[11px] leading-relaxed">
                  Engineered privacy-preserving client-side pose estimation tracking 33 skeletal points at 60 FPS in-browser with zero remote telemetry.
                </p>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-4 border-t border-stroke/60 flex items-center justify-between text-[11px] font-mono text-muted">
            <span>Available for Full-time Roles & High-Impact AI Projects</span>
            <span className="text-[#89AACC]">Bengaluru, India / Remote</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
