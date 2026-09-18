import { motion } from 'framer-motion';

interface SectionDividerProps {
  number: string;
  label: string;
  className?: string;
}

export function SectionDivider({ number, label, className = '' }: SectionDividerProps) {
  return (
    <div className={`max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 my-8 select-none ${className}`}>
      <div className="flex items-center gap-4 text-muted/60 font-mono text-[11px] uppercase tracking-[0.25em]">
        {/* Tiny Number */}
        <span className="text-[#D8C39A] font-semibold">{number}</span>

        {/* Animated Horizontal Thin Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 h-[1px] bg-gradient-to-r from-white/25 via-white/10 to-transparent origin-left"
        />

        {/* Micro Label */}
        <span className="tracking-[0.3em] font-medium text-[#92908B]">{label}</span>
      </div>
    </div>
  );
}
