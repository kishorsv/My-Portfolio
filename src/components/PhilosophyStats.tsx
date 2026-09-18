import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

function CountUp({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTimestamp: number | null = null;
    let animId: number;

    const step = (ts: number) => {
      if (!startTimestamp) startTimestamp = ts;
      const progress = Math.min((ts - startTimestamp) / 1600, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setVal(Math.floor(ease * end));
      if (progress < 1) animId = requestAnimationFrame(step);
      else setVal(end);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [started, end]);

  return (
    <span ref={ref} className="tabular-nums">
      {val}{suffix}
    </span>
  );
}

export function PhilosophyStats() {
  return (
    <section className="bg-[#0A0A0B] py-36 md:py-48 relative overflow-hidden select-none">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section 39 — Large Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto mb-32 sm:mb-44"
        >
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-[#D8C39A] mb-8">
            ETHOS
          </div>

          <h3 className="heading-clamp font-light tracking-tight text-[#F4F1EA] leading-[1.05]">
            <span className="block">GOOD TECHNOLOGY</span>
            <span className="block my-2">
              SHOULD{' '}
              <span className="font-display italic text-[#D8C39A] font-normal text-[1.12em] px-2">
                FEEL
              </span>
            </span>
            <span className="block font-medium">SIMPLE.</span>
          </h3>
        </motion.div>

        {/* Section 38 — Giant Numbers (No cards!) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 pt-16 border-t border-white/10 text-center md:text-left">
          {/* Stat 1 */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-6xl sm:text-7xl lg:text-8xl font-display italic text-[#F4F1EA] tracking-tighter mb-2">
              <CountUp end={20} suffix="+" />
            </div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#92908B]">
              EXPERIMENTS
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-6xl sm:text-7xl lg:text-8xl font-display italic text-[#D8C39A] tracking-tighter mb-2">
              <CountUp end={15} suffix="+" />
            </div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#92908B]">
              PROJECTS
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-6xl sm:text-7xl lg:text-8xl font-display italic text-[#7C5CFF] tracking-tighter mb-2">
              8
            </div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#92908B]">
              IDEAS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
