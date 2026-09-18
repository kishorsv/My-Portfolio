import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionDivider } from './SectionDivider';

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
    domain: 'CORE LANGUAGE · ML RUNTIME',
    description: 'Foundation for neural architectures, asynchronous FastAPI microservices, and mathematical computation.',
  },
  {
    id: 'react',
    name: 'React 19',
    font: 'serif',
    size: 'giant',
    align: 'right',
    domain: 'UI ARCHITECTURE · REACTIVITY',
    description: 'Concurrent rendering, tactile interfaces, zero-layout-shift streaming, and state machines.',
  },
  {
    id: 'ai',
    name: 'AI AGENTS',
    font: 'sans',
    size: 'large',
    align: 'center',
    domain: 'AUTONOMOUS REASONING',
    description: 'Multi-agent orchestration, tool usage, hierarchical memory systems, and deterministic evaluation.',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    font: 'serif',
    size: 'giant',
    align: 'left',
    domain: 'TYPE CONTRACTS · SYSTEMS',
    description: 'Compile-time correctness, algebraic data types, and enterprise-grade full-stack consistency.',
  },
  {
    id: 'genai',
    name: 'GENERATIVE AI',
    font: 'sans',
    size: 'giant',
    align: 'center',
    domain: 'LLM WORKFLOWS & RAG',
    description: 'High-dimensional vector embeddings, semantic search spaces, prompt design, and model fine-tuning.',
  },
  {
    id: 'fullstack',
    name: 'Full-Stack',
    font: 'serif',
    size: 'large',
    align: 'right',
    domain: 'END-TO-END ENGINEERING',
    description: 'Bridging algorithmic AI backends with ultra-responsive, accessible client-side experiences.',
  },
  {
    id: 'tailwind',
    name: 'TAILWIND',
    font: 'sans',
    size: 'large',
    align: 'left',
    domain: 'DESIGN TOKEN SYSTEMS',
    description: 'Modern aesthetic control, fluid typographic clamp matrices, and dark luxury palettes.',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    font: 'serif',
    size: 'giant',
    align: 'right',
    domain: 'ASYNC SERVER RUNTIME',
    description: 'High-throughput WebSockets, microservices, and local-first SQLite file system bridges.',
  },
  {
    id: 'fastapi',
    name: 'FASTAPI',
    font: 'sans',
    size: 'medium',
    align: 'center',
    domain: 'HIGH-SPEED PYTHON APIS',
    description: 'Pydantic validation, async worker pools, and automated OpenAPI documentation.',
  },
  {
    id: 'vectordb',
    name: 'Vector Embeddings',
    font: 'serif',
    size: 'large',
    align: 'left',
    domain: 'SEMANTIC MEMORY',
    description: 'Cosine similarity indices, pgvector retrieval, and sub-50ms contextual RAG pipelines.',
  },
];

export function Skills() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeItem = WALL_ITEMS.find((item) => item.id === hoveredId);

  return (
    <section id="skills" className="bg-[#0A0A0B] py-32 md:py-44 relative overflow-hidden select-none">
      {/* Section Divider */}
      <SectionDivider number="04" label="INTERACTIVE TYPOGRAPHY WALL" />

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
                    opacity: isHovered ? 1 : isDimmed ? 0.2 : 0.75,
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
      </div>
    </section>
  );
}
