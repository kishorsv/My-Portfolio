import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionDivider } from './SectionDivider';
import { Sparkles } from 'lucide-react';

interface TechItem {
  name: string;
  category: 'AI' | 'GENAI' | 'FRONTEND' | 'BACKEND' | 'LANGUAGES' | 'TOOLS';
  scale: 'lg' | 'md' | 'sm';
  detail: string;
}

const TECH_CLOUD: TechItem[] = [
  { name: 'Python', category: 'LANGUAGES', scale: 'lg', detail: 'Primary language for AI/ML pipelines, algorithms, and backend services.' },
  { name: 'Generative AI', category: 'GENAI', scale: 'lg', detail: 'LLMs, semantic prompting, attention mechanisms, and multi-agent coordination.' },
  { name: 'React 19', category: 'FRONTEND', scale: 'lg', detail: 'Component architecture, concurrent rendering, and tactile reactive interfaces.' },
  { name: 'LangChain', category: 'GENAI', scale: 'md', detail: 'Chaining agents, structured tools, memory stores, and vector indices.' },
  { name: 'TypeScript', category: 'LANGUAGES', scale: 'lg', detail: 'Strict type contracts ensuring reliable full-stack software systems.' },
  { name: 'FastAPI', category: 'BACKEND', scale: 'md', detail: 'High-performance async Python APIs with automatic OpenAPI schemas.' },
  { name: 'Tailwind CSS', category: 'FRONTEND', scale: 'md', detail: 'Utility-first styling, design token systems, and fluid responsive layouts.' },
  { name: 'Node.js', category: 'BACKEND', scale: 'md', detail: 'Runtime environment for microservices, WebSockets, and build tooling.' },
  { name: 'MediaPipe', category: 'AI', scale: 'md', detail: 'Edge computer vision and real-time client-side skeletal tracking.' },
  { name: 'Vector DBs', category: 'GENAI', scale: 'md', detail: 'High-dimensional embedding similarity search (pgvector & Pinecone).' },
  { name: 'Next.js', category: 'FRONTEND', scale: 'sm', detail: 'Server-side rendering, routing, and hybrid static web applications.' },
  { name: 'PostgreSQL', category: 'BACKEND', scale: 'sm', detail: 'Relational data modeling, ACID transactions, and spatial extensions.' },
  { name: 'vLLM', category: 'GENAI', scale: 'sm', detail: 'High-throughput PagedAttention edge inference deployment.' },
  { name: 'Git & GitHub', category: 'TOOLS', scale: 'md', detail: 'Version control, branch workflows, pull requests, and CI/CD actions.' },
  { name: 'DSA', category: 'LANGUAGES', scale: 'md', detail: 'Algorithmic problem solving: trees, graphs, dynamic programming.' },
  { name: 'WebSockets', category: 'BACKEND', scale: 'sm', detail: 'Bi-directional low-latency full-duplex communication protocols.' },
  { name: 'Framer Motion', category: 'FRONTEND', scale: 'sm', detail: 'Spring physics, layout animations, and gesture micro-interactions.' },
  { name: 'Docker', category: 'TOOLS', scale: 'sm', detail: 'Containerizing services for reproducible cloud and local deployments.' },
  { name: 'REST APIs', category: 'BACKEND', scale: 'sm', detail: 'Standardized stateless API endpoints with JWT authentication.' },
  { name: 'Vercel', category: 'TOOLS', scale: 'sm', detail: 'Continuous edge delivery and preview environments for modern web.' },
];

const CATEGORIES = ['ALL', 'AI', 'GENAI', 'FRONTEND', 'BACKEND', 'LANGUAGES', 'TOOLS'] as const;

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>('ALL');
  const [hoveredTech, setHoveredTech] = useState<TechItem | null>(null);

  const filteredTech = activeCategory === 'ALL'
    ? TECH_CLOUD
    : TECH_CLOUD.filter((t) => t.category === activeCategory);

  return (
    <section id="skills" className="bg-[#080808] py-24 md:py-36 relative overflow-hidden">
      {/* Editorial Section Divider */}
      <SectionDivider number="02" label="TECHNICAL CLOUD & MATRIX" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#89AACC] mb-3 block">
              Skill Constellation
            </span>
            <h2 className="heading-clamp font-light tracking-tight text-text-primary">
              The <span className="font-display italic text-[#89AACC]">technology</span> cloud
            </h2>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 text-[11px] font-mono uppercase tracking-wider rounded-full transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-text-primary text-bg font-semibold shadow-md'
                    : 'text-muted hover:text-text-primary hover:bg-white/5'
                }`}
                data-cursor="link"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Technology Cloud Area */}
        <div className="relative min-h-[380px] p-8 md:p-14 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md flex flex-wrap items-center justify-center gap-x-6 gap-y-5 select-none transition-all">
          {filteredTech.map((tech) => {
            const isHovered = hoveredTech?.name === tech.name;
            const hasHover = hoveredTech !== null;
            const isDimmed = hasHover && !isHovered;

            return (
              <motion.div
                key={tech.name}
                onMouseEnter={() => setHoveredTech(tech)}
                onMouseLeave={() => setHoveredTech(null)}
                layout
                className={`cursor-pointer transition-all duration-300 relative px-4 py-2 rounded-2xl border ${
                  isHovered
                    ? 'border-[#89AACC] bg-white/10 shadow-[0_0_24px_rgba(137,170,204,0.35)] scale-110 z-20'
                    : isDimmed
                    ? 'border-transparent text-muted/30 opacity-30 blur-[0.3px] scale-95'
                    : 'border-white/5 bg-white/[0.02] text-text-primary hover:border-white/20'
                }`}
                data-cursor="link"
              >
                <span
                  className={`font-mono tracking-tight font-medium ${
                    tech.scale === 'lg'
                      ? 'text-2xl sm:text-3xl md:text-4xl text-text-primary'
                      : tech.scale === 'md'
                      ? 'text-lg sm:text-xl md:text-2xl text-text-primary/90'
                      : 'text-sm sm:text-base text-muted/90'
                  }`}
                >
                  {tech.name}
                </span>

                {/* Subtle category dot */}
                <span className="w-1.5 h-1.5 rounded-full bg-[#89AACC] ml-2 inline-block opacity-60" />
              </motion.div>
            );
          })}

          {/* Floating Spotlight Detail Card for Hovered Tech */}
          <div className="w-full mt-8 pt-6 border-t border-white/10 flex items-center justify-between min-h-[50px]">
            <AnimatePresence mode="wait">
              {hoveredTech ? (
                <motion.div
                  key={hoveredTech.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-2"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-[#89AACC] px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      {hoveredTech.category}
                    </span>
                    <span className="text-sm sm:text-base text-text-primary font-medium">
                      {hoveredTech.name}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted font-light max-w-xl">
                    {hoveredTech.detail}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="empty-hint"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-xs font-mono text-muted/60 flex items-center gap-2"
                >
                  <Sparkles size={12} className="text-[#89AACC]" />
                  <span>Hover over any technology node to inspect architectural role and capabilities</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
