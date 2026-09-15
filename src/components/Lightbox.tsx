import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ExplorationItem } from '../data/explorations';
import { X, Sparkles, Tag } from 'lucide-react';

interface LightboxProps {
  item: ExplorationItem | null;
  onClose: () => void;
}

export function Lightbox({ item, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 md:p-12">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-xl bg-surface border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-bg/80 border border-stroke flex items-center justify-center text-muted hover:text-text-primary hover:border-white/30 transition-all"
            aria-label="Close Lightbox"
          >
            <X size={18} />
          </button>

          {/* Stylized Visual Preview Frame */}
          <div className={`w-full aspect-square rounded-2xl bg-gradient-to-br ${item.gradient} border border-stroke/60 relative overflow-hidden flex items-center justify-center mb-6 shadow-inner`}>
            {/* Halftone texture */}
            <div className="absolute inset-0 halftone-overlay pointer-events-none" />

            {/* Generative shapes & patterns based on exploration item */}
            <div className="relative z-10 text-center p-8 flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-2xl">
                <Sparkles size={36} className="text-[#89AACC] animate-pulse" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display italic text-text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-muted/80 max-w-xs font-mono">
                {item.subtitle}
              </p>
            </div>

            <div className="absolute bottom-3 left-4 text-[10px] font-mono text-muted/50 uppercase tracking-widest">
              Interactive Shader Output • 60 FPS
            </div>
          </div>

          {/* Description & Details */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#89AACC] font-mono font-medium">
                {item.category}
              </span>
            </div>

            <p className="text-sm text-muted leading-relaxed mb-5">
              {item.aspectDesc}
            </p>

            <div className="flex flex-wrap gap-2 pt-3 border-t border-stroke/70">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-bg border border-stroke text-muted font-mono"
                >
                  <Tag size={10} className="text-[#89AACC]" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
