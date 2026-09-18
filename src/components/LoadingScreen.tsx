import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const CYCLING_WORDS = ['OBSERVE', 'BUILD', 'CREATE'];

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Counter 000 -> 100 over 2200ms using requestAnimationFrame
  useEffect(() => {
    const duration = 2200;
    let startTime: number | null = null;
    let animationFrameId: number;

    const animateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easedProgress = 1 - Math.pow(1 - progress, 2.4);
      const currentCount = Math.floor(easedProgress * 100);

      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCounter);
      } else {
        setCount(100);
        const timer = setTimeout(() => {
          setIsFinished(true);
          const exitTimer = setTimeout(() => {
            onComplete();
          }, 700);
          return () => clearTimeout(exitTimer);
        }, 300);
        return () => clearTimeout(timer);
      }
    };

    animationFrameId = requestAnimationFrame(animateCounter);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [onComplete]);

  // Cycle through OBSERVE -> BUILD -> CREATE
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % CYCLING_WORDS.length);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  const paddedCount = String(count).padStart(3, '0');

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="loader"
          initial={{ clipPath: 'inset(0% 0 0% 0)' }}
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between p-6 md:p-12 lg:p-16 bg-[#0A0A0B] text-[#F4F1EA] select-none overflow-hidden"
          role="status"
          aria-label="Loading experience"
        >
          {/* Top Row */}
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-xs font-mono uppercase tracking-[0.3em] text-[#92908B] flex items-center gap-3"
            >
              <span className="w-2 h-2 rounded-full bg-[#7C5CFF] animate-pulse" />
              <span>KSV® / SYSTEM 2026</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xs font-mono text-[#92908B]/80 tracking-widest hidden sm:block"
            >
              BENGALURU, INDIA
            </motion.div>
          </div>

          {/* Center Cycling Words */}
          <div className="flex flex-col items-center justify-center my-auto overflow-hidden py-12">
            <div className="h-24 md:h-32 flex items-center justify-center relative w-full">
              <AnimatePresence mode="wait">
                <motion.span
                  key={CYCLING_WORDS[wordIndex]}
                  initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute text-5xl md:text-7xl lg:text-9xl font-display italic text-[#F4F1EA] tracking-tight"
                >
                  {CYCLING_WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
            <p className="text-xs font-mono uppercase tracking-[0.35em] text-[#92908B] mt-4">
              INTELLIGENT DIGITAL EXPERIENCES
            </p>
          </div>

          {/* Bottom Row: Counter & Progress */}
          <div className="w-full flex flex-col gap-6">
            <div className="flex items-end justify-between">
              <div className="text-xs font-mono text-[#92908B] uppercase tracking-[0.25em]">
                PHASE 01 / INITIALIZING CORE
              </div>

              {/* Bottom right large counter */}
              <div className="text-6xl md:text-8xl lg:text-9xl font-display italic tabular-nums leading-none tracking-tighter text-[#F4F1EA]">
                {paddedCount}
              </div>
            </div>

            {/* Bottom 2px progress bar with signature gradient */}
            <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <div
                className="h-full signature-gradient rounded-full transition-transform duration-75 ease-out origin-left"
                style={{
                  transform: `scaleX(${count / 100})`,
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
