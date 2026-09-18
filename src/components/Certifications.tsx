import { useState } from 'react';
import { motion } from 'framer-motion';
import { certifications, type Certificate } from '../data/certifications';
import { CertificateModal } from './CertificateModal';
import { SectionDivider } from './SectionDivider';
import { Award, ArrowUpRight, ShieldCheck } from 'lucide-react';

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certifications" className="bg-[#0A0A0B] py-28 md:py-36 relative overflow-hidden">
      {/* Editorial Section Divider */}
      <SectionDivider number="08" label="VERIFIED CREDENTIALS" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 lg:px-20 pt-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D8C39A] mb-3 block">
            Certifications 🎓
          </span>
          <h2 className="heading-clamp font-light tracking-tight text-[#F4F1EA]">
            Verified <span className="font-display italic text-[#D8C39A]">credentials.</span>
          </h2>
          <p className="text-sm md:text-base text-[#92908B] max-w-xl mt-3 leading-relaxed font-light">
            Curriculum programs completed across generative AI, machine learning pipelines, and full-stack software development.
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
              className="group relative rounded-3xl border border-white/10 hover:border-white/25 p-7 flex flex-col justify-between overflow-hidden transition-all duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(16px)',
              }}
              data-cursor="link"
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none`}
              />
              <div className="absolute inset-0 halftone-overlay pointer-events-none" />

              <div className="relative z-10">
                <div className="w-full aspect-[16/9] rounded-2xl bg-black/40 border border-white/10 flex flex-col items-center justify-center p-4 mb-6 relative overflow-hidden group-hover:border-[#89AACC]/40 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#89AACC] mb-2 shadow-sm">
                    <Award size={24} />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted/80">
                    {cert.category}
                  </span>
                  <div className="absolute top-3 right-3 flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <ShieldCheck size={10} />
                    Verified
                  </div>
                </div>

                <h3 className="text-xl font-display italic text-text-primary leading-snug mb-2 group-hover:text-[#89AACC] transition-colors">
                  {cert.name}
                </h3>

                <p className="text-xs text-muted font-mono mb-4 font-light">
                  Issuer: <span className="text-text-primary/90">{cert.issuer}</span>
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-muted font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-muted/60 font-mono">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-muted/80">
                  {cert.issueDate}
                </span>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 hover:border-white/30 text-xs font-mono text-text-primary transition-colors group/btn"
                >
                  <span>View Details</span>
                  <ArrowUpRight size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
