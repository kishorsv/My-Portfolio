import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const CYCLING_WORDS = ['Build', 'Create', 'Imagine'];

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Counter 000 -> 100 over 2700ms using requestAnimationFrame
  useEffect(() => {
    const duration = 2700;
    let startTime: number | null = null;
    let animationFrameId: number;

    const animateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing: slight cubic out for silky smooth feel
      const easedProgress = 1 - Math.pow(1 - progress, 2);
      const currentCount = Math.floor(easedProgress * 100);

      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCounter);
      } else {
        setCount(100);
        // Wait 400ms after reaching 100 before signaling complete
        const timer = setTimeout(() => {
          setIsFinished(true);
          const exitTimer = setTimeout(() => {
            onComplete();
          }, 600);
          return () => clearTimeout(exitTimer);
        }, 400);
        return () => clearTimeout(timer);
      }
    };

    animationFrameId = requestAnimationFrame(animateCounter);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [onComplete]);

  // Cycle through words every 900ms (3 words * 900ms = 2700ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % CYCLING_WORDS.length);
    }, 900);

    return () => clearInterval(interval);
  }, []);

  const paddedCount = String(count).padStart(3, '0');

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between p-6 md:p-12 lg:p-16 bg-bg text-text-primary select-none overflow-hidden"
          role="status"
          aria-label="Loading experience"
        >
          {/* Top Row */}
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-xs text-muted uppercase tracking-[0.3em] font-medium flex items-center gap-3"
            >
              <span className="w-2 h-2 rounded-full bg-[#89AACC] animate-pulse" />
              PORTFOLIO
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xs text-muted/70 tracking-widest font-mono hidden sm:block"
            >
              KISHOR SV • 2026
            </motion.div>
          </div>

          {/* Center Cycling Words */}
          <div className="flex flex-col items-center justify-center my-auto overflow-hidden py-12">
            <div className="h-20 md:h-28 flex items-center justify-center relative w-full">
              <AnimatePresence mode="wait">
                <motion.span
                  key={CYCLING_WORDS[wordIndex]}
                  initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -24, filter: 'blur(8px)' }}
                  transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                  className="absolute text-5xl md:text-7xl lg:text-8xl font-display italic text-text-primary tracking-tight"
                >
                  {CYCLING_WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted/60 mt-4">
              Intelligence in motion
            </p>
          </div>

          {/* Bottom Row: Counter & Progress */}
          <div className="w-full flex flex-col gap-6">
            <div className="flex items-end justify-between">
              <div className="text-xs text-muted/70 uppercase tracking-[0.2em] font-mono">
                INITIALIZING CORE SYSTEM
              </div>

              {/* Bottom right large counter */}
              <div className="text-6xl md:text-8xl lg:text-9xl font-display italic tabular-nums leading-none tracking-tighter text-text-primary">
                {paddedCount}
              </div>
            </div>

            {/* Bottom 3px progress bar with glow */}
            <div className="w-full h-[3px] bg-stroke/50 rounded-full overflow-hidden relative">
              <div
                className="h-full accent-gradient rounded-full transition-transform duration-75 ease-out origin-left"
                style={{
                  transform: `scaleX(${count / 100})`,
                  boxShadow: '0 0 8px rgba(137,170,204,0.35)',
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
