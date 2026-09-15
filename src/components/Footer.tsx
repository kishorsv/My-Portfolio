import { personalInfo } from '../data/socials';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-[#080808] border-t border-white/10 py-10 px-6 md:px-12 lg:px-20 text-text-primary select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
        {/* Left: Identity */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-[0.25em] font-semibold text-text-primary">
            {personalInfo.name}
          </h4>
          <p className="text-[11px] font-mono text-muted/80 uppercase tracking-widest mt-0.5">
            AI / FULL-STACK DEVELOPER
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-widest font-mono">
          {personalInfo.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-text-primary transition-colors flex items-center gap-1 group"
              data-cursor="link"
            >
              <span>{social.name}</span>
              <ArrowUpRight
                size={11}
                className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </a>
          ))}
        </div>

        {/* Right: Copyright & Metadata */}
        <div className="text-right">
          <div className="text-xs font-mono text-muted tracking-wider">
            © {currentYear} • ALL RIGHTS RESERVED
          </div>
          <div className="text-[10px] font-mono text-muted/50 tracking-widest uppercase mt-0.5">
            DESIGNED & CRAFTED IN BENGALURU
          </div>
        </div>
      </div>
    </footer>
  );
}
