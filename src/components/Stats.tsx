import { useEffect, useState, useRef } from 'react';
import { personalInfo } from '../data/socials';

interface CountUpNumberProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function CountUpNumber({ end, suffix = '', duration = 1600 }: CountUpNumberProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out quartic
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(ease * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="bg-bg py-16 md:py-20 border-y border-stroke/60">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center md:items-start text-center md:text-left relative"
            >
              {/* Stat number with Instrument Serif Italic */}
              <div className="text-5xl sm:text-6xl md:text-7xl font-display italic text-text-primary tracking-tight mb-2">
                <CountUpNumber end={stat.value} suffix={stat.suffix} />
              </div>

              {/* Stat label */}
              <div className="text-xs uppercase tracking-[0.2em] text-muted font-mono font-medium">
                {stat.label}
              </div>

              {/* Vertical divider on desktop */}
              {idx < personalInfo.stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-stroke/60" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
