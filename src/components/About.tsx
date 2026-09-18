import { motion } from 'framer-motion';
import { SectionDivider } from './SectionDivider';
import { CheckCircle2, Sparkles, MapPin, GraduationCap, Compass, Palette } from 'lucide-react';

export function About() {
  const narrativePillars = [
    {
      num: '01',
      title: 'Engineering Rigor & Foundations',
      desc: '2nd-year B.E. student focused on Artificial Intelligence at Mysore Royal Institute of Technology (MRIT). Roots in Shankanahalli village, Karnataka, instilling an enduring work ethic and obsession with practical systems building.',
      badge: 'MRIT · 2nd Year B.E.',
    },
    {
      num: '02',
      title: 'Generative AI & Real Products',
      desc: 'Developing intelligent applications, conversational agents, computer vision systems, and modern web applications that turn ideas into working digital products that solve real human friction.',
      badge: 'GenAI & Applied AI',
    },
    {
      num: '03',
      title: 'Concept to Working Solution',
      desc: 'Executing the disciplined 8-step engineering lifecycle: Problem → Research → Idea → UI/UX → Development → AI Integration → Testing → Deployment. Relentlessly iterating with a Learn → Build → Test → Improve → Deploy mindset.',
      badge: 'Full-Stack Lifecycle',
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
          className="mb-20 md:mb-28 max-w-5xl"
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

          <p className="mt-10 text-base sm:text-lg md:text-xl text-[#92908B] max-w-3xl font-light leading-relaxed">
            I am <span className="text-[#F4F1EA] font-medium">Kishor SV</span>, an engineering student at <span className="text-[#D8C39A]">Mysore Royal Institute of Technology (MRIT)</span> with roots in <span className="text-[#F4F1EA]">Shankanahalli village, Karnataka</span>. I enjoy transforming ideas into working digital products — from understanding a problem and designing the UI/UX to developing the application, integrating AI, testing, and deploying the final product.
          </p>

          {/* Editorial Author Byline */}
          <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-white/10 max-w-2xl">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#D8C39A]/30 bg-white/5 flex-shrink-0">
              <img
                src="/kishor.jpg"
                alt="Kishor SV"
                className="w-full h-full object-cover object-top filter contrast-[1.04]"
              />
            </div>
            <div>
              <div className="text-sm font-medium text-[#F4F1EA] tracking-wide">KISHOR SV</div>
              <div className="text-xs font-mono text-[#92908B] flex items-center gap-2 mt-0.5">
                <GraduationCap size={12} className="text-[#7C5CFF]" />
                <span>MRIT · 2nd Year B.E. (AI-Focused)</span>
                <span>·</span>
                <MapPin size={12} className="text-[#D8C39A]" />
                <span>Shankanahalli, Karnataka, India</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Asymmetrical 3-Column Narrative Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
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

        {/* Development Philosophy & Personal Facets Sub-Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl p-8 md:p-10 border border-white/10 bg-[#121214]/40 backdrop-blur-md grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D8C39A] mb-3">
              <Compass size={14} />
              <span>DEVELOPMENT PHILOSOPHY</span>
            </div>
            <h4 className="text-lg md:text-xl font-light text-[#F4F1EA] mb-4">
              Concept → Design → Development → Working Project
            </h4>
            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 font-mono text-xs text-[#92908B] leading-relaxed">
              <span className="text-[#D8C39A]">Process:</span> Problem → Research → Idea → UI/UX → Development → AI Integration → Testing → Deployment
            </div>
            <div className="mt-4 flex items-center gap-3 text-xs font-mono text-[#92908B]">
              <span className="text-[#7C5CFF]">Formula:</span>
              <span>Learn → Build → Test → Improve → Deploy</span>
            </div>
          </div>

          <div className="border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF8066] mb-3">
                <Palette size={14} />
                <span>BEYOND THE CODEBASE</span>
              </div>
              <p className="text-xs sm:text-sm text-[#92908B] leading-relaxed mb-4">
                Outside engineering, I channel energy into competitive sports and creative expression:
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#F4F1EA]">
                  🏃 Athletics & Running
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#F4F1EA]">
                  🏐 Volleyball
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#F4F1EA]">
                  🎨 Drawing & Painting
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#F4F1EA]">
                  ✍️ Storytelling & Blogging
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#92908B]">
              <span>IMPACT FOCUS:</span>
              <span className="text-[#6EE7B7]">Severe Weather Nowcasting · Vernacular AI</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
