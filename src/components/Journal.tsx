import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { journalArticles, type JournalArticle } from '../data/journal';
import { SectionDivider } from './SectionDivider';
import { ArrowUpRight } from 'lucide-react';

interface JournalProps {
  onSelectArticle: (article: JournalArticle) => void;
}

export function Journal({ onSelectArticle }: JournalProps) {
  const [hoveredArticle, setHoveredArticle] = useState<JournalArticle | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="journal"
      onMouseMove={handleMouseMove}
      className="bg-[#0A0A0B] py-32 md:py-44 relative overflow-hidden select-none"
    >
      {/* Section Divider */}
      <SectionDivider number="07" label="EDITORIAL JOURNAL & ESSAYS" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 lg:px-20 pt-8">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D8C39A] mb-3 block">
            ESSAYS & WRITTEN ARCHITECTURE
          </span>
          <h2 className="heading-clamp font-light tracking-tight text-[#F4F1EA]">
            Engineering <span className="font-display italic text-[#D8C39A]">journal.</span>
          </h2>
        </div>

        {/* Section 33 — Editorial Article List */}
        <div className="border-t border-white/10">
          {journalArticles.map((article, idx) => {
            const num = String(idx + 1).padStart(2, '0');
            const isHovered = hoveredArticle?.id === article.id;

            return (
              <div
                key={article.id}
                onClick={() => onSelectArticle(article)}
                onMouseEnter={() => setHoveredArticle(article)}
                onMouseLeave={() => setHoveredArticle(null)}
                className={`group relative py-8 sm:py-10 border-b transition-all duration-300 cursor-pointer ${
                  isHovered ? 'border-[#D8C39A]/60 bg-white/[0.02]' : 'border-white/10'
                }`}
                data-cursor="link"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  {/* Left: Number + Title Structure */}
                  <div className="flex items-start md:items-center gap-6 sm:gap-10">
                    <span className="font-mono text-xs text-[#92908B] tracking-widest pt-1 md:pt-0">
                      {num}
                    </span>

                    <h3
                      className={`text-2xl sm:text-3xl md:text-4xl font-light tracking-tight transition-all duration-300 ${
                        isHovered
                          ? 'text-[#F4F1EA] translate-x-3 font-medium'
                          : 'text-[#F4F1EA]/80'
                      }`}
                    >
                      {article.title}
                    </h3>
                  </div>

                  {/* Right: Metadata + Arrow Reveal */}
                  <div className="flex items-center gap-8 text-xs font-mono text-[#92908B] tracking-wider uppercase ml-12 md:ml-0">
                    <span>{article.category} / {article.readTime}</span>
                    <span>2026</span>

                    <span
                      className={`p-2 rounded-full border transition-all duration-300 ${
                        isHovered
                          ? 'border-[#D8C39A] text-[#D8C39A] translate-x-1 -translate-y-1'
                          : 'border-white/10 text-white/40'
                      }`}
                    >
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Hover Floating Thumbnail Preview */}
        <AnimatePresence>
          {hoveredArticle && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="fixed pointer-events-none z-50 hidden lg:block w-64 rounded-2xl overflow-hidden border border-white/20 bg-black/90 p-3 shadow-2xl backdrop-blur-xl"
              style={{
                left: mousePos.x + 30,
                top: mousePos.y - 80,
              }}
            >
              <div className="h-28 rounded-xl bg-gradient-to-tr from-[#1A122E] via-[#121214] to-[#0A0A0B] p-4 flex flex-col justify-between border border-white/10">
                <span className="text-[10px] font-mono text-[#D8C39A] uppercase">
                  {hoveredArticle.category}
                </span>
                <p className="text-xs text-[#F4F1EA] line-clamp-2">
                  {hoveredArticle.subtitle}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
