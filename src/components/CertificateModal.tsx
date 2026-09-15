import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Certificate } from '../data/certifications';
import { X, ExternalLink, Award, CheckCircle2, ShieldCheck } from 'lucide-react';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 md:p-10">
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
          className="relative z-10 w-full max-w-xl bg-surface border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl text-text-primary overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-bg/80 border border-stroke flex items-center justify-center text-muted hover:text-text-primary hover:border-white/30 transition-all"
            aria-label="Close certificate modal"
          >
            <X size={18} />
          </button>

          {/* Certificate Stylized Card Preview */}
          <div className={`w-full p-8 rounded-2xl bg-gradient-to-br ${certificate.gradient} border border-stroke mb-6 relative overflow-hidden text-center`}>
            <div className="absolute inset-0 halftone-overlay pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#89AACC] mb-4 shadow-lg">
                <Award size={32} />
              </div>

              <span className="text-[11px] uppercase tracking-[0.25em] text-[#89AACC] font-mono mb-2">
                Certificate of Completion
              </span>

              <h3 className="text-xl sm:text-2xl font-display italic text-text-primary mb-2">
                {certificate.name}
              </h3>

              <p className="text-xs text-muted font-mono">
                Issued by {certificate.issuer}
              </p>
            </div>
          </div>

          {/* Verification Details */}
          <div className="space-y-4 mb-6">
            <div className="p-4 rounded-xl bg-bg/60 border border-stroke/70 flex items-center justify-between text-xs font-mono">
              <span className="text-muted">Credential ID</span>
              <span className="text-text-primary font-semibold">{certificate.credentialId}</span>
            </div>

            <div className="p-4 rounded-xl bg-bg/60 border border-stroke/70 flex items-center justify-between text-xs font-mono">
              <span className="text-muted">Verification Status</span>
              <span className="text-emerald-400 flex items-center gap-1.5 font-semibold">
                <ShieldCheck size={14} />
                Verified & Active
              </span>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-muted block mb-2">
                Curriculum Competencies
              </span>
              <div className="flex flex-wrap gap-2">
                {certificate.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 rounded-full bg-bg border border-stroke text-muted font-mono flex items-center gap-1.5"
                  >
                    <CheckCircle2 size={11} className="text-[#89AACC]" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Verification Link */}
          <div className="pt-4 border-t border-stroke flex items-center justify-between">
            <span className="text-xs text-muted font-mono">
              Official Issuer Portal
            </span>
            <a
              href={certificate.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full accent-gradient text-bg text-xs font-semibold hover:opacity-90 transition-opacity"
            >
              <span>Verify on Official Portal</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
