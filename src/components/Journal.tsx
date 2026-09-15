import { motion } from 'framer-motion';
import { journalArticles, type JournalArticle } from '../data/journal';
import { ArrowUpRight, BookOpen } from 'lucide-react';

interface JournalProps {
  onSelectArticle: (article: JournalArticle) => void;
}

export function Journal({ onSelectArticle }: JournalProps) {
  return (
    <section className="bg-bg py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12 md:mb-16"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#89AACC]" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted font-medium">
              Journal & Notes
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-sans tracking-tight text-text-primary">
            Recent <span className="font-display italic text-[#89AACC]">thoughts</span>
          </h2>

          <p className="text-sm md:text-base text-muted max-w-lg mt-4 leading-relaxed">
            Notes on AI, development, design, learning, and building useful technology.
          </p>
        </motion.div>

        {/* 4 Thought Entries */}
        <div className="flex flex-col gap-4">
          {journalArticles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => onSelectArticle(article)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectArticle(article);
                }
              }}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 p-4 md:p-5 bg-surface/30 border border-stroke rounded-3xl sm:rounded-[40px] hover:bg-surface hover:border-white/20 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#89AACC]"
            >
              {/* Left: Thumbnail Icon & Titles */}
              <div className="flex items-center gap-4 sm:gap-6">
                {/* Thumbnail Icon */}
                <div className="w-12 h-12 rounded-2xl sm:rounded-full bg-bg border border-stroke flex items-center justify-center text-muted group-hover:text-[#89AACC] group-hover:border-[#89AACC]/40 transition-colors shrink-0">
                  <BookOpen size={18} />
                </div>

                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-display italic text-text-primary group-hover:text-[#89AACC] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted line-clamp-1 mt-0.5">
                    {article.subtitle}
                  </p>
                </div>
              </div>

              {/* Right: Date, Reading Time, and Arrow */}
              <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-8 shrink-0 pl-16 sm:pl-0">
                <div className="flex items-center gap-3 text-xs text-muted/80 font-mono">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <div className="w-9 h-9 rounded-full border border-stroke bg-bg/60 flex items-center justify-center text-muted group-hover:text-text-primary group-hover:border-white/30 group-hover:scale-110 group-hover:bg-[#89AACC]/10 transition-all duration-300">
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
