import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const SYSTEM_STATUSES = [
  'INITIALIZING INTERFACE',
  'LOADING DIGITAL EXPERIENCE',
  'BUILDING VISUAL SYSTEM',
  'CONNECTING COMPONENTS',
  'PREPARING INTERACTION',
  'ENTERING KISHOR SV',
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  alpha: number;
  color: string;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [phase, setPhase] = useState<'dot' | 'identity' | 'scan' | 'complete' | 'exit'>('dot');
  const [isFinished, setIsFinished] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });
  const animFrameRef = useRef<number | null>(null);
  const progressAnimRef = useRef<number | null>(null);

  // Mouse move handler for gentle depth deflection
  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current.targetX = e.clientX / window.innerWidth;
    mouseRef.current.targetY = e.clientY / window.innerHeight;
  }, []);

  // Choreographed Progress Counter (00 -> 100 over ~2.8 seconds)
  useEffect(() => {
    const startTime = performance.now();
    const duration = 2800; // 2.8s total duration

    const updateProgress = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);

      // Smooth custom ease-out curve
      const eased = 1 - Math.pow(1 - t, 2.6);
      const currentVal = Math.floor(eased * 100);

      setProgress(currentVal);

      // Sequence phase transitions based on progress
      if (t < 0.16) {
        setPhase('dot');
      } else if (t < 0.38) {
        setPhase('identity');
      } else if (t < 0.98) {
        setPhase('scan');
      } else {
        setPhase('complete');
      }

      if (t < 1) {
        progressAnimRef.current = requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        setPhase('complete');

        // Hold at 100% for 380ms before cinematic reveal
        const completeTimeout = setTimeout(() => {
          setPhase('exit');
          setIsFinished(true);

          const exitTimeout = setTimeout(() => {
            onComplete();
          }, 700);

          return () => clearTimeout(exitTimeout);
        }, 380);

        return () => clearTimeout(completeTimeout);
      }
    };

    progressAnimRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (progressAnimRef.current) cancelAnimationFrame(progressAnimRef.current);
    };
  }, [onComplete]);

  // System status cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % SYSTEM_STATUSES.length);
    }, 550);

    return () => clearInterval(interval);
  }, []);

  // Listen to mouse movement for organic parallax
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Generative Canvas Background: Particle & Neural Node System
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const isMobile = width < 768;
    const count = isMobile ? 24 : 52;
    const maxDist = isMobile ? 70 : 110;

    const colors = ['#7C5CFF', '#D8C39A', '#F4F1EA', '#FF8066'];

    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      baseRadius: Math.random() * 1.2 + 0.6,
      alpha: Math.random() * 0.4 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Lerp mouse pos
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const mouseOffsetX = (mouseRef.current.x - 0.5) * 14;
      const mouseOffsetY = (mouseRef.current.y - 0.5) * 14;

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.12;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(216, 195, 154, ${lineAlpha})`;
            ctx.lineWidth = 0.65;
            ctx.moveTo(particles[i].x + mouseOffsetX, particles[i].y + mouseOffsetY);
            ctx.lineTo(particles[j].x + mouseOffsetX, particles[j].y + mouseOffsetY);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x + mouseOffsetX, p.y + mouseOffsetY, p.baseRadius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const paddedCount = String(progress).padStart(2, '0');

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="loader-overlay"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: 'circle(150% at 50% 50%)',
            opacity: 0,
            transition: { duration: 0.7, ease: [0.77, 0, 0.175, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between p-6 sm:p-10 md:p-14 bg-[#0A0A0B] text-[#F4F1EA] select-none overflow-hidden"
          role="status"
          aria-label="Loading cinematic experience"
        >
          {/* Generative Interactive Canvas Background */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0 opacity-40 transition-opacity duration-1000"
          />

          {/* Vignette & Radial Atmosphere */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,11,0.85)_80%)] pointer-events-none z-0" />

          {/* Section 09: Micro-Typography Corners */}
          {/* Top Row: Top-Left & Top-Right */}
          <div className="relative z-10 flex items-center justify-between text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#92908B] border-b border-white/5 pb-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="flex items-center gap-2.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFF] animate-pulse" />
              <span className="text-[#F4F1EA] font-semibold">KSV</span>
              <span className="hidden sm:inline text-white/40">/ DIGITAL EXPERIENCE</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="flex items-center gap-2 text-white/60"
            >
              <span>PORTFOLIO</span>
              <span className="text-[#D8C39A]">2026</span>
            </motion.div>
          </div>

          {/* Section 03 & 04 & 05: Central Visual Stage */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto w-full max-w-4xl mx-auto py-8 text-center">
            {/* Initial Luminous Breathing Point (Phase 01: 0.0 - 0.5s) */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: phase === 'dot' ? [0, 1.4, 1] : 1,
                opacity: phase === 'dot' ? 1 : 0.4,
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative mb-6 flex items-center justify-center"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#F4F1EA] shadow-[0_0_16px_rgba(216,195,154,0.9)]" />
              <span className="absolute w-6 h-6 rounded-full bg-[#7C5CFF]/30 animate-ping pointer-events-none" />

              {/* Horizontal Line Extending Outward */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-36 sm:w-56 h-[1px] bg-gradient-to-r from-transparent via-[#D8C39A]/60 to-transparent pointer-events-none"
              />
            </motion.div>

            {/* Section 04: Kishor SV Editorial Identity Reveal */}
            <div className="relative overflow-hidden py-2 px-4">
              <motion.h1
                initial={{ opacity: 0, filter: 'blur(20px)', y: 24 }}
                animate={{
                  opacity: phase !== 'dot' ? 1 : 0,
                  filter: phase !== 'dot' ? 'blur(0px)' : 'blur(20px)',
                  y: phase !== 'dot' ? 0 : 24,
                }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none text-[#F4F1EA]"
              >
                <span className="font-sans font-extrabold tracking-tighter mr-2 sm:mr-4">
                  KISHOR
                </span>
                <span className="font-display italic text-[#D8C39A] font-normal">
                  SV
                </span>
              </motion.h1>

              {/* Section 05: Thin Digital Scan Beam Sweeping Horizontally */}
              {phase === 'scan' && (
                <motion.div
                  initial={{ x: '-120%', opacity: 0 }}
                  animate={{ x: '180%', opacity: [0, 0.9, 0] }}
                  transition={{ duration: 1.4, ease: 'easeInOut', repeat: 1 }}
                  className="absolute inset-y-0 w-24 sm:w-40 pointer-events-none bg-gradient-to-r from-transparent via-white/30 to-transparent mix-blend-overlay blur-sm"
                />
              )}
            </div>

            {/* Subtitle Telemetry */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: phase !== 'dot' ? 1 : 0, y: phase !== 'dot' ? 0 : 8 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.35em] text-[#92908B] mt-4 flex items-center gap-2"
            >
              <span>AI/ML ENGINEER</span>
              <span className="w-1 h-1 rounded-full bg-[#7C5CFF]" />
              <span>FULL-STACK ARCHITECT</span>
            </motion.p>
          </div>

          {/* Bottom Area: Progress Counter, Rotating Status & Progress Bar */}
          <div className="relative z-10 w-full flex flex-col gap-5 pt-4 border-t border-white/5">
            {/* Status & Counter Row */}
            <div className="flex items-end justify-between">
              {/* Bottom Left: Rotating System Status */}
              <div className="flex flex-col gap-1.5">
                <div className="text-[10px] font-mono text-[#D8C39A] tracking-widest uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6EE7B7] animate-pulse" />
                  <span>INITIALIZING EXPERIENCE</span>
                </div>

                <div className="h-4 overflow-hidden relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={SYSTEM_STATUSES[statusIndex]}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="text-[11px] font-mono text-[#92908B] uppercase tracking-wider"
                    >
                      {SYSTEM_STATUSES[statusIndex]}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Bottom Right: Monospace Percentage & Location */}
              <div className="flex flex-col items-end gap-1">
                <div className="text-3xl sm:text-4xl md:text-5xl font-mono font-medium text-[#F4F1EA] tabular-nums leading-none tracking-tight flex items-baseline gap-1">
                  <span>{paddedCount}</span>
                  <span className="text-xs text-[#92908B] font-light">%</span>
                </div>
                <div className="text-[10px] font-mono text-white/40 tracking-widest uppercase hidden sm:block">
                  BENGALURU, INDIA
                </div>
              </div>
            </div>

            {/* Section 10: Traveling Glow Progress Line */}
            <div className="relative w-full h-[1.5px] bg-white/10 rounded-full overflow-visible">
              {/* Progress Fill */}
              <div
                className="h-full signature-gradient rounded-full transition-all duration-75 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                {/* Traveling Glow Point at Leading Edge */}
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#F4F1EA] shadow-[0_0_10px_#D8C39A,0_0_18px_#7C5CFF]" />
              </div>
            </div>

            {/* Section 09: Micro Metadata Footer */}
            <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-[#92908B]/60 uppercase tracking-[0.2em]">
              <span>AI / FULL-STACK / CREATIVE TECHNOLOGY</span>
              <span>SYSTEM BOOT SEQUENCE</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

