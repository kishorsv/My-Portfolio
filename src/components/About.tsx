import { motion } from 'framer-motion';
import { SectionDivider } from './SectionDivider';
import { CheckCircle2, Sparkles } from 'lucide-react';

export function About() {
  const narrativePillars = [
    {
      num: '01',
      title: 'Engineering Rigor',
      desc: '2nd-year engineering foundation in Bengaluru. Grounding high-level AI concepts in systems design, algorithms, and computational efficiency.',
      badge: 'B.E. 2nd Year',
    },
    {
      num: '02',
      title: 'Applied Generative AI',
      desc: 'Architecting multi-agent pipelines, vector search spaces, and deterministic constraints around LLM models to solve non-trivial production challenges.',
      badge: 'Core Focus',
    },
    {
      num: '03',
      title: 'Full-Stack Systems',
      desc: 'Building responsive, low-latency interfaces with React 19, TypeScript, and high-throughput Python backends with real-time streaming.',
      badge: 'Production Systems',
    },
  ];

  return (
    <section id="about" className="bg-[#0A0A0B] py-28 md:py-40 relative overflow-hidden">
      {/* Section Divider */}
      <SectionDivider number="02" label="ABOUT & PHILOSOPHY" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 lg:px-20 pt-10">
        {/* Section 30 — Enormous Editorial Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 md:mb-32 max-w-5xl"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-[#7C5CFF] mb-8">
            <Sparkles size={13} />
            <span>IDENTITY STATEMENT</span>
          </div>

          <h2 className="heading-clamp font-light tracking-tight text-[#F4F1EA] leading-[0.98]">
            <span className="block text-2xl sm:text-3xl md:text-4xl text-[#92908B] font-mono tracking-widest uppercase mb-3">
              I'M AN
            </span>
            <span className="block font-semibold">AI/ML ENGINEERING STUDENT</span>
            <span className="block text-3xl sm:text-4xl md:text-5xl text-[#92908B] font-light my-2">
              BUILDING
            </span>
            <span className="font-display italic text-[#D8C39A] font-normal block text-[1.12em] tracking-normal">
              REAL DIGITAL PRODUCTS.
            </span>
          </h2>

          <p className="mt-10 text-base sm:text-lg md:text-xl text-[#92908B] max-w-2xl font-light leading-relaxed">
            Based in Bengaluru, India. I combine continuous daily engineering experimentation, mathematical rigor, and modern interface craft to turn ideas into working, reliable products.
          </p>

          {/* Editorial Author Byline */}
          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10 max-w-md">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#D8C39A]/30 bg-white/5 flex-shrink-0">
              <img
                src="/kishor.jpg"
                alt="Kishor SV"
                className="w-full h-full object-cover object-top filter contrast-[1.04]"
              />
            </div>
            <div>
              <div className="text-sm font-medium text-[#F4F1EA] tracking-wide">KISHOR SV</div>
              <div className="text-xs font-mono text-[#92908B]">AI/ML Engineer · Full-Stack Developer • Bengaluru</div>
            </div>
          </div>
        </motion.div>

        {/* Asymmetrical 3-Column Narrative Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {narrativePillars.map((pillar, idx) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              className="group relative rounded-3xl p-8 border border-white/10 bg-[#121214]/60 backdrop-blur-md hover:border-white/25 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display italic text-3xl text-white/20 font-bold group-hover:text-[#D8C39A] transition-colors">
                    {pillar.num}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#92908B]">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-xl font-medium text-[#F4F1EA] mb-3 leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#92908B] font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-[#7C5CFF]">
                <CheckCircle2 size={13} />
                <span>ACTIVE COMMITMENT</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
