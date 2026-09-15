import { motion } from 'framer-motion';
import { journalArticles, type JournalArticle } from '../data/journal';
import { SectionDivider } from './SectionDivider';
import { ArrowUpRight } from 'lucide-react';

interface JournalProps {
  onSelectArticle: (article: JournalArticle) => void;
}

export function Journal({ onSelectArticle }: JournalProps) {
  return (
    <section className="bg-[#080808] py-24 md:py-36 relative overflow-hidden">
      {/* Editorial Section Divider */}
      <SectionDivider number="06" label="EDITORIAL JOURNAL & ESSAYS" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#89AACC] mb-3 block">
            Recent Thoughts & Articles
          </span>
          <h2 className="heading-clamp font-light tracking-tight text-text-primary">
            Engineering <span className="font-display italic text-[#89AACC]">journal</span>
          </h2>
          <p className="text-sm md:text-base text-muted max-w-xl mt-3 leading-relaxed font-light">
            Notes on applied machine learning, client-side inference, tactile UI ergonomics, and product development.
          </p>
        </motion.div>

        {/* Large Horizontal Editorial Rows */}
        <div className="border-t border-white/10">
          {journalArticles.map((article, idx) => {
            const num = String(idx + 1).padStart(2, '0');

            return (
              <motion.div
                key={article.id}
                onClick={() => onSelectArticle(article)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative border-b border-white/10 py-7 md:py-9 transition-all duration-300 hover:bg-white/[0.02] cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 px-4 md:px-6 rounded-2xl"
                data-cursor="link"
              >
                {/* Left: Number + Title */}
                <div className="flex items-start md:items-center gap-6 md:gap-10">
                  <span className="font-mono text-xs text-muted/60 tracking-wider pt-1 md:pt-0">
                    {num}
                  </span>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display italic text-text-primary group-hover:text-[#89AACC] group-hover:translate-x-1.5 transition-all duration-300 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted font-light mt-1 line-clamp-1 max-w-xl">
                      {article.subtitle}
                    </p>
                  </div>
                </div>

                {/* Right: Metadata + Arrow */}
                <div className="flex items-center justify-between md:justify-end gap-6 shrink-0 pl-10 md:pl-0">
                  <div className="flex items-center gap-3 text-xs font-mono text-muted/80">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#89AACC]">
                      {article.category}
                    </span>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <div className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-muted group-hover:text-text-primary group-hover:border-white/30 group-hover:scale-110 group-hover:rotate-45 transition-all duration-300">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
