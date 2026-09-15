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
          {/* Animated Gradient Traveling Border */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#89AACC] via-[#4E85BF] to-[#89AACC] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-shift blur-[0.5px]" />
          
          {/* Inner Button Pill with Subtle Depth & Highlight */}
          <span className="relative z-10 inline-flex items-center gap-2 rounded-full bg-text-primary px-7 py-3.5 text-xs sm:text-sm font-semibold text-bg shadow-xl transition-all group-hover:bg-white group-hover:shadow-[0_0_20px_rgba(137,170,204,0.3)]">
            {children}
          </span>
        </div>
      ) : (
        <div
          className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/15 bg-transparent px-7 py-3.5 text-xs sm:text-sm font-medium text-text-primary transition-all duration-300 hover:border-white/40 hover:scale-[1.03] active:scale-[0.98] ${className}`}
        >
          {/* Background Sweep on Hover */}
          <span className="absolute inset-0 translate-y-full rounded-full bg-white/10 transition-transform duration-300 ease-out group-hover:translate-y-0" />
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
