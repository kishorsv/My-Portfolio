import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export type CursorMode = 'default' | 'project' | 'link' | 'image' | 'hidden';

export function CustomCursor() {
  const [mode, setMode] = useState<CursorMode>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch] = useState(() => (typeof window !== 'undefined' ? !window.matchMedia('(pointer: fine)').matches : true));

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (isTouch) return;
    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check hovered element for data-cursor attribute
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const cursorType = cursorTarget.getAttribute('data-cursor') as CursorMode;
        setMode(cursorType || 'default');
      } else if (target.closest('a, button, [role="button"]')) {
        setMode('link');
      } else {
        setMode('default');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [mouseX, mouseY, isVisible, isTouch]);

  if (isTouch || !isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center font-mono text-[10px] uppercase tracking-widest font-semibold text-bg select-none"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      {/* Dynamic Cursor Body */}
      <motion.div
        animate={{
          width: mode === 'project' ? 68 : mode === 'link' ? 36 : mode === 'image' ? 56 : 10,
          height: mode === 'project' ? 26 : mode === 'link' ? 36 : mode === 'image' ? 56 : 10,
          borderRadius: 9999,
          backgroundColor: mode === 'image' ? 'rgba(137, 170, 204, 0.25)' : '#f5f5f5',
          backdropFilter: mode === 'image' ? 'blur(4px)' : 'none',
          boxShadow: mode === 'default' ? '0 0 12px rgba(137, 170, 204, 0.6)' : '0 4px 20px rgba(0, 0, 0, 0.4)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
        className="flex items-center justify-center overflow-hidden"
      >
        {mode === 'project' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-[10px] text-bg font-bold tracking-wider"
          >
            VIEW
          </motion.span>
        )}

        {mode === 'link' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-sm text-bg font-bold"
          >
            ↗
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
