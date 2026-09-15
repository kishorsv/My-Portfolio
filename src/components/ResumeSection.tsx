import { motion } from 'framer-motion';
import { personalInfo } from '../data/socials';
import { FileText, Download, CheckCircle2, Eye } from 'lucide-react';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export function ResumeSection({ onOpenResume }: ResumeSectionProps) {
  const resumeSections = [
    { title: 'Education', desc: 'B.E. in Artificial Intelligence & Machine Learning (2nd Year)' },
    { title: 'Skills', desc: 'Python, TypeScript, React, LangChain, FastAPI, SQL, Git' },
    { title: 'Projects', desc: 'AQENIX AI Career OS, Chat AI, Posture Guardian, CivicFind' },
    { title: 'Certifications', desc: 'NxtWave CCBP 4.0, Google Cloud GenAI, Microsoft, Kaggle' },
    { title: 'Achievements', desc: 'State-level sports representation, Hackathon finalist, workshops' },
    { title: 'Links', desc: 'GitHub (@kishorsv), LinkedIn, portfolio & verified credentials' },
  ];

  return (
    <section id="resume" className="bg-bg py-20 md:py-32 relative overflow-hidden border-t border-stroke/50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Banner Box */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl bg-surface border border-stroke p-8 sm:p-12 md:p-16 overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-10"
        >
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#142332]/40 via-[#0e1722]/30 to-[#080d14]/40 pointer-events-none" />
          <div className="absolute inset-0 halftone-overlay pointer-events-none" />

          {/* Left: Headline & Information */}
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#89AACC]" />
              <span className="text-xs uppercase tracking-[0.3em] text-muted font-medium">
                Curriculum Vitae
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans tracking-tight text-text-primary mb-4 leading-tight">
              Looking for full details?{' '}
              <span className="font-display italic text-[#89AACC]">Inspect the resume.</span>
            </h2>

            <p className="text-sm sm:text-base text-muted leading-relaxed mb-8 font-light">
              Comprehensive overview mapping coursework, software engineering proficiencies, agentic projects, and verified credentials in one structured document.
            </p>

            {/* Resume Structure Summary Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {resumeSections.map((sec) => (
                <div
                  key={sec.title}
                  className="flex items-start gap-2.5 text-xs text-muted/90 p-2.5 rounded-xl bg-bg/60 border border-stroke/60 font-mono"
                >
                  <CheckCircle2 size={14} className="text-[#89AACC] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-text-primary font-semibold block">{sec.title}</span>
                    <span className="text-[11px] text-muted/80">{sec.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Actions */}
          <div className="relative z-10 flex flex-col items-center sm:items-start lg:items-end gap-4 shrink-0">
            {/* Primary Action Button */}
            <button
              onClick={onOpenResume}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full accent-gradient text-bg font-semibold text-sm hover:opacity-90 transition-all shadow-xl shadow-[#4E85BF]/20 hover:scale-105 active:scale-95"
            >
              <Eye size={16} />
              <span>Preview & Inspect Resume</span>
              <span>→</span>
            </button>

            {/* Download PDF via mailto or direct request */}
            <a
              href={`mailto:${personalInfo.email}?subject=Resume Request - Kishor S V`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-stroke bg-bg/80 hover:border-white/30 text-xs font-mono text-text-primary hover:bg-surface transition-colors"
            >
              <Download size={14} className="text-[#89AACC]" />
              <span>Download Resume PDF</span>
            </a>

            <div className="text-[11px] font-mono text-muted/70 flex items-center gap-1.5 mt-2">
              <FileText size={12} />
              <span>Updated for 2026 Opportunities</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
