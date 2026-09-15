import { motion } from 'framer-motion';
import { personalInfo } from '../data/socials';
import { SectionDivider } from './SectionDivider';
import { MagneticButton } from './MagneticButton';
import { FileText, Download, CheckCircle2, Eye, ArrowRight } from 'lucide-react';

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
    <section id="resume" className="bg-[#080808] py-24 md:py-36 relative overflow-hidden">
      {/* Editorial Section Divider */}
      <SectionDivider number="10" label="CURRICULUM VITAE" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-8">
        {/* Banner Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[36px] border border-white/10 p-8 sm:p-12 md:p-16 overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-10"
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#142332]/30 via-[#0e1722]/20 to-[#080d14]/30 pointer-events-none" />
          <div className="absolute inset-0 halftone-overlay pointer-events-none" />

          {/* Left: Headline & Information */}
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#89AACC] mb-4 block">
              Formal Qualifications
            </span>

            <h2 className="heading-clamp font-light tracking-tight text-text-primary mb-4 leading-tight">
              Looking for full details?{' '}
              <span className="font-display italic text-[#89AACC]">Inspect the resume.</span>
            </h2>

            <p className="text-sm sm:text-base text-muted/90 leading-relaxed mb-8 font-light">
              Comprehensive overview mapping coursework, software engineering proficiencies, agentic projects, and verified credentials in one structured document.
            </p>

            {/* Resume Structure Summary Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {resumeSections.map((sec) => (
                <div
                  key={sec.title}
                  className="flex items-start gap-2.5 text-xs text-muted/90 p-3 rounded-2xl bg-black/40 border border-white/10 font-mono"
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
            <MagneticButton onClick={onOpenResume} variant="primary">
              <Eye size={15} />
              <span>Inspect Resume</span>
              <ArrowRight size={14} />
            </MagneticButton>

            {/* Download PDF via mailto or direct request */}
            <MagneticButton
              href={`mailto:${personalInfo.email}?subject=Resume Request - Kishor S V`}
              variant="secondary"
            >
              <Download size={14} className="text-[#89AACC]" />
              <span>Download PDF</span>
            </MagneticButton>

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
