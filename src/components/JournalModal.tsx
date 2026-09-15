import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { JournalArticle } from '../data/journal';
import { X, Calendar, Clock, Bookmark, Lightbulb } from 'lucide-react';

interface JournalModalProps {
  article: JournalArticle | null;
  onClose: () => void;
}

export function JournalModal({ article, onClose }: JournalModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.article
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-surface border border-white/15 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-text-primary"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-bg/80 border border-stroke flex items-center justify-center text-muted hover:text-text-primary hover:border-white/30 transition-all"
            aria-label="Close article modal"
          >
            <X size={18} />
          </button>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted font-mono mb-4">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-bg border border-stroke text-[#89AACC]">
              <Bookmark size={12} />
              {article.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {article.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {article.readTime}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display italic text-text-primary mb-4 leading-tight">
            {article.title}
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-muted/90 font-medium leading-relaxed mb-6 pb-6 border-b border-stroke">
            {article.subtitle}
          </p>

          {/* Content paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-muted leading-relaxed mb-8">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Key Takeaways */}
          <div className="p-5 rounded-2xl bg-bg/60 border border-stroke">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#89AACC] mb-3 flex items-center gap-2">
              <Lightbulb size={14} />
              Key Takeaways
            </h4>
            <ul className="space-y-2">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-text-primary/90 flex items-start gap-2">
                  <span className="text-[#89AACC] font-bold">•</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      </div>
    </AnimatePresence>
  );
}
