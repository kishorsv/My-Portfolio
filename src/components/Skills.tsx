import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionDivider } from './SectionDivider';
import { skillCategories } from '../data/skills';


interface WallItem {
  id: string;
  name: string;
  font: 'sans' | 'serif';
  size: 'giant' | 'large' | 'medium';
  align: 'left' | 'center' | 'right';
  domain: string;
  description: string;
}

const WALL_ITEMS: WallItem[] = [
  {
    id: 'python',
    name: 'PYTHON',
    font: 'sans',
    size: 'giant',
    align: 'left',
    domain: 'CORE LANGUAGE · AI & ML RUNTIME',
    description: 'Advanced Pythonic idioms, mathematical computation, Data Structures & Algorithms, and AI application development.',
  },
  {
    id: 'genai',
    name: 'Generative AI',
    font: 'serif',
    size: 'giant',
    align: 'right',
    domain: 'INTELLIGENT SYSTEMS · PROMPT ENGINEERING',
    description: 'LLM applications, conversational workflows, Google AI Studio, prompt evaluations, and agentic pipelines.',
  },
  {
    id: 'react',
    name: 'REACT & TAILWIND',
    font: 'sans',
    size: 'large',
    align: 'center',
    domain: 'MODERN INTERFACE CRAFT',
    description: 'Responsive Web Design, CSS Flexbox, tactile micro-interactions, React 19 concurrent features, and mobile-first layouts.',
  },
  {
    id: 'typescript',
    name: 'TypeScript & JavaScript',
    font: 'serif',
    size: 'giant',
    align: 'left',
    domain: 'TYPE-SAFE CLIENT & SERVER',
    description: 'Strict type contracts, modern ECMAScript standards, asynchronous IO, and reliable full-stack software architectures.',
  },
  {
    id: 'backend',
    name: 'NODE.JS & EXPRESS',
    font: 'sans',
    size: 'large',
    align: 'right',
    domain: 'BACKEND ARCHITECTURES · REST APIS',
    description: 'RESTful API routing, authentication pipelines, MongoDB object modeling, and relational SQL queries.',
  },
  {
    id: 'ai-apis',
    name: 'AI APIs & Google Studio',
    font: 'serif',
    size: 'large',
    align: 'center',
    domain: 'CLOUD AI & INFERENCE RUNTIMES',
    description: 'Integrating frontier generative models, computer vision pose estimation, and structured JSON generation pipelines.',
  },
  {
    id: 'cpp-java',
    name: 'C++ · JAVA · DSA',
    font: 'sans',
    size: 'medium',
    align: 'left',
    domain: 'ALGORITHMIC RIGOR & COMPUTING',
    description: 'Time & space complexity analysis, tree/graph traversals, memory mechanics, and competitive problem solving.',
  },
  {
    id: 'cloud-tools',
    name: 'Git · Docker · AWS · CI/CD',
    font: 'serif',
    size: 'medium',
    align: 'right',
    domain: 'DEVELOPER WORKFLOWS & CLOUD',
    description: 'Version control workflows, containerization with Docker, AWS cloud fundamentals, and automated Vercel CI/CD pipelines.',
  },
];

export function Skills() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeItem = WALL_ITEMS.find((item) => item.id === hoveredId);

  return (
    <section id="skills" className="bg-[#0A0A0B] py-32 md:py-44 relative overflow-hidden select-none">
      {/* Section Divider */}
      <SectionDivider number="04" label="INTERACTIVE TYPOGRAPHY WALL & STACK" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 lg:px-20 pt-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D8C39A] mb-3 block">
              CAPABILITY MATRIX
            </span>
            <h2 className="heading-clamp font-light tracking-tight text-[#F4F1EA]">
              The <span className="font-display italic text-[#D8C39A]">technical</span> poster.
            </h2>
          </div>

          <div className="text-xs font-mono text-[#92908B] tracking-wider uppercase">
            HOVER OVER WORDS TO INSPECT RUNTIMES
          </div>
        </div>

        {/* Section 31 — Giant Interactive Typography Wall (No badges/pills) */}
        <div className="relative border-y border-white/10 py-16 sm:py-20 flex flex-col gap-6 sm:gap-8">
          {WALL_ITEMS.map((item) => {
            const isHovered = hoveredId === item.id;
            const isDimmed = hoveredId !== null && !isHovered;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`w-full flex transition-all duration-300 cursor-pointer ${
                  item.align === 'left'
                    ? 'justify-start'
                    : item.align === 'center'
                    ? 'justify-center'
                    : 'justify-end'
                }`}
                data-cursor="link"
              >
                <motion.span
                  animate={{
                    opacity: isDimmed ? 0.22 : 1,
                    scale: isHovered ? 1.03 : 1,
                    y: isHovered ? -2 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`inline-block tracking-tighter transition-colors duration-300 ${
                    item.font === 'serif' ? 'font-display italic' : 'font-sans font-bold'
                  } ${
                    item.size === 'giant'
                      ? 'text-4xl sm:text-6xl md:text-7xl lg:text-8xl'
                      : item.size === 'large'
                      ? 'text-3xl sm:text-5xl md:text-6xl'
                      : 'text-2xl sm:text-4xl md:text-5xl'
                  } ${
                    isHovered
                      ? 'text-[#F4F1EA] drop-shadow-[0_0_24px_rgba(216,195,154,0.3)]'
                      : 'text-[#92908B]'
                  }`}
                >
                  {item.name}
                </motion.span>
              </div>
            );
          })}

          {/* Floating Sticky Technical Detail HUD at Bottom */}
          <div className="min-h-[72px] mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
            <AnimatePresence mode="wait">
              {activeItem ? (
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#7C5CFF] animate-pulse" />
                    <span className="text-[#D8C39A] font-semibold tracking-widest uppercase">
                      {activeItem.domain}
                    </span>
                  </div>
                  <div className="text-sm text-[#F4F1EA] font-light max-w-xl">
                    {activeItem.description}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-xs font-mono text-[#92908B]/60 tracking-widest uppercase flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <span>EXPLORE STACK BY HOVERING ABOVE</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Complete Structured Skill Matrix */}
        <div className="mt-20 pt-12">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#7C5CFF] mb-1 block">
                COMPREHENSIVE COMPETENCIES
              </span>
              <h3 className="text-2xl font-light text-[#F4F1EA]">
                Engineering <span className="font-display italic text-[#D8C39A]">Taxonomy</span>
              </h3>
            </div>
            <span className="text-xs font-mono text-[#92908B]">
              VERIFIED PRACTICAL CAPABILITIES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.categoryKey}
                className="p-6 rounded-3xl border border-white/10 bg-[#121214]/50 backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-mono uppercase tracking-wider text-[#D8C39A] font-semibold">
                      {category.title}
                    </h4>
                    <span className="text-[10px] font-mono text-[#92908B] uppercase">
                      {category.skills.length} skills
                    </span>
                  </div>

                  <p className="text-xs text-[#92908B] leading-relaxed mb-6 font-light">
                    {category.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-2.5 py-1 rounded-full bg-black/40 border border-white/10 text-xs font-mono text-[#F4F1EA]/90"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
