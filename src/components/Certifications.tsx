import { useState } from 'react';
import { motion } from 'framer-motion';
import { certifications, type Certificate } from '../data/certifications';
import { CertificateModal } from './CertificateModal';
import { Award, ArrowUpRight, ShieldCheck } from 'lucide-react';

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certifications" className="bg-bg py-20 md:py-32 relative overflow-hidden border-t border-stroke/50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#89AACC]" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted font-medium">
              Certifications 🎓
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-sans tracking-tight text-text-primary">
            Verified <span className="font-display italic text-[#89AACC]">credentials</span>
          </h2>

          <p className="text-sm md:text-base text-muted max-w-xl mt-3 leading-relaxed">
            Rigorous technical programs and specialization credentials earned across generative AI, machine learning, and full-stack software development.
          </p>
        </motion.div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl bg-surface border border-stroke hover:border-white/20 p-6 flex flex-col justify-between overflow-hidden transition-all duration-300"
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-50 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none`}
              />
              <div className="absolute inset-0 halftone-overlay pointer-events-none" />

              <div className="relative z-10">
                {/* Certificate Image / Visual Icon */}
                <div className="w-full aspect-[16/9] rounded-2xl bg-bg/80 border border-stroke flex flex-col items-center justify-center p-4 mb-5 relative overflow-hidden group-hover:border-[#89AACC]/40 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-surface border border-stroke flex items-center justify-center text-[#89AACC] mb-2 shadow-sm">
                    <Award size={24} />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted/80">
                    {cert.category}
                  </span>
                  <div className="absolute top-2 right-2 flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <ShieldCheck size={10} />
                    Verified
                  </div>
                </div>

                {/* Certificate Name */}
                <h3 className="text-lg font-display italic text-text-primary leading-snug mb-2 group-hover:text-[#89AACC] transition-colors">
                  {cert.name}
                </h3>

                {/* Issuer */}
                <p className="text-xs text-muted font-mono mb-4">
                  Issuer: <span className="text-text-primary/90">{cert.issuer}</span>
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] px-2.5 py-0.5 rounded-full bg-bg/80 border border-stroke/70 text-muted font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-bg/50 text-muted/60 font-mono">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* View Certificate Button */}
              <div className="relative z-10 pt-4 border-t border-stroke/60 flex items-center justify-between">
                <span className="text-xs font-mono text-muted/80">
                  {cert.issueDate}
                </span>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-stroke bg-bg hover:border-white/30 text-xs font-mono text-text-primary transition-colors group/btn"
                >
                  <span>View Certificate</span>
                  <ArrowUpRight size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
