import { motion } from 'framer-motion';
import { SectionDivider } from './SectionDivider';

interface TimelineNode {
  year: string;
  phase: string;
  focus: string;
  details: string;
  isCurrent?: boolean;
}

const TIMELINE_NODES: TimelineNode[] = [
  {
    year: 'PHASE 01',
    phase: 'AI/ML & GENAI',
    focus: 'Generative AI · AI APIs · Prompt Engineering',
    details: 'Immersive exploration of Generative AI, LLM orchestration, Google Skills Boost, Kaggle machine learning certifications, and intelligent conversational architectures.',
  },
  {
    year: 'PHASE 02',
    phase: 'PYTHON & DSA',
    focus: 'Advanced Python · Algorithmic Rigor · DSA',
    details: 'Deep mathematical foundations, time/space complexity optimization, data structures, and algorithmic logic solving real computational bottlenecks.',
  },
  {
    year: 'PHASE 03',
    phase: 'FULL-STACK & UI/UX',
    focus: 'React · Tailwind · Node.js · Responsive UX',
    details: 'Mastery through NxtWave CCBP 4.0 Academy, component design systems, modern CSS Flexbox, REST APIs, MongoDB, SQL, and tactile user interface engineering.',
  },
  {
    year: 'CURRENT',
    phase: 'PRODUCTION BUILDS',
    focus: 'Vercel Deployments · 10+ Projects · Systems',
    details: 'Shipping real-world software from concept to deployment: AQENIX Career OS, Health Guide AI, CivicFind India, Posture Guardian AI, and AQENIX Fit AI.',
    isCurrent: true,
  },
];

export function ExperienceTimeline() {
  return (
    <section id="journey" className="bg-[#0A0A0B] py-28 md:py-36 relative overflow-hidden">
      {/* Section Divider */}
      <SectionDivider number="05" label="ENGINEERING TIMELINE" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 lg:px-20 pt-8">
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D8C39A] mb-3 block">
            CHRONOLOGICAL TRAJECTORY
          </span>
          <h2 className="heading-clamp font-light tracking-tight text-[#F4F1EA]">
            Engineering <span className="font-display italic text-[#D8C39A]">evolution.</span>
          </h2>
        </div>

        {/* Section 32 — Horizontal Timeline */}
        <div className="relative pt-8">
          {/* Thin Horizontal Connecting Line */}
          <div className="hidden md:block absolute top-[52px] left-0 right-0 h-[1px] bg-gradient-to-r from-white/10 via-white/20 to-white/10 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {TIMELINE_NODES.map((node, idx) => (
              <motion.div
                key={node.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="flex flex-col"
              >
                {/* Year Badge & Indicator Node */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      node.isCurrent
                        ? 'border-[#D8C39A] bg-[#D8C39A] shadow-[0_0_16px_rgba(216,195,154,0.6)]'
                        : 'border-white/30 bg-[#0A0A0B]'
                    }`}
                  >
                    {node.isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0B]" />}
                  </div>

                  <span
                    className={`text-3xl sm:text-4xl font-display italic ${
                      node.isCurrent ? 'text-[#D8C39A]' : 'text-white/40'
                    }`}
                  >
                    {node.year}
                  </span>
                </div>

                {/* Phase Title */}
                <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#F4F1EA] font-semibold mb-2">
                  {node.phase}
                </div>

                {/* Focus Line */}
                <div className="text-sm font-mono text-[#7C5CFF] mb-3">
                  {node.focus}
                </div>

                {/* Factual Narrative Details */}
                <p className="text-xs sm:text-sm text-[#92908B] font-light leading-relaxed">
                  {node.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
