import { personalInfo } from '../data/socials';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-bg border-t border-stroke/70 py-8 px-6 md:px-12 lg:px-16 text-text-primary">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Social Links */}
        <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-widest font-mono">
          {personalInfo.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-text-primary transition-colors flex items-center gap-1 group"
            >
              <span>{social.name}</span>
              <ArrowUpRight
                size={12}
                className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </a>
          ))}
        </div>

        {/* Center: Copyright */}
        <div className="text-xs text-muted/80 font-mono tracking-wider text-center sm:text-left">
          © {currentYear} {personalInfo.name} • All rights reserved
        </div>

        {/* Right: Green pulsing indicator + Open to opportunities */}
        <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface border border-stroke text-xs font-mono text-text-primary/90">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="tracking-tight text-[11px]">Open to opportunities</span>
        </div>
      </div>
    </footer>
  );
}
