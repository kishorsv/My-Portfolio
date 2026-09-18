import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  target?: string;
  rel?: string;
}

export function MagneticButton({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    // Maximum 8px magnetic pull
    setPosition({
      x: middleX * 0.15,
      y: middleY * 0.15,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const buttonContent = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 250, damping: 18, mass: 0.1 }}
      className="inline-block"
    >
      {variant === 'primary' ? (
        <div
          className={`group relative inline-flex items-center justify-center rounded-full p-[1.5px] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] ${className}`}
        >
          {/* Animated Signature Gradient Border on Hover */}
          <span className="absolute inset-0 rounded-full signature-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[0.5px]" />
          
          {/* Inner Button Pill: Ivory background, dark text */}
          <span className="relative z-10 inline-flex items-center gap-2 rounded-full bg-[#F4F1EA] px-7 py-3.5 text-xs sm:text-sm font-semibold text-[#0A0A0B] shadow-xl transition-all group-hover:bg-[#FFFFFF] group-hover:shadow-[0_0_24px_rgba(124,92,255,0.25)] font-mono uppercase tracking-wider">
            {children}
          </span>
        </div>
      ) : (
        <div
          className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/15 bg-transparent px-7 py-3.5 text-xs sm:text-sm font-medium text-[#F4F1EA] transition-all duration-300 hover:border-white/40 hover:scale-[1.03] active:scale-[0.98] font-mono uppercase tracking-wider ${className}`}
        >
          {/* Background Sweep on Hover: Soft Ivory */}
          <span className="absolute inset-0 translate-y-full rounded-full bg-[#F4F1EA]/10 transition-transform duration-300 ease-out group-hover:translate-y-0" />
          <span className="relative z-10 inline-flex items-center gap-2">
            {children}
          </span>
        </div>
      )}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className="inline-block">
        {buttonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} type="button" className="inline-block focus:outline-none">
      {buttonContent}
    </button>
  );
}
