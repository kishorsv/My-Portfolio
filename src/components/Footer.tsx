import { personalInfo } from '../data/socials';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-[#0A0A0B] border-t border-white/10 py-12 px-6 md:px-12 lg:px-20 text-[#F4F1EA] select-none">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-10">
        {/* Main 3-Column Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-start md:items-center justify-between gap-8">
          {/* Left: Identity */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] font-semibold text-[#F4F1EA]">
              KISHOR SV
            </h4>
            <p className="text-[11px] font-mono text-[#92908B] uppercase tracking-widest mt-1">
              AI/ML ENGINEER & FULL-STACK DEVELOPER
            </p>
            <p className="text-[10px] font-mono text-white/40 uppercase tracking-wider mt-0.5">
              MRIT · 2ND YEAR B.E. (AI-FOCUSED)
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex flex-wrap items-center justify-start md:justify-center gap-6 text-xs uppercase tracking-widest font-mono">
            {personalInfo.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#92908B] hover:text-[#F4F1EA] transition-colors flex items-center gap-1 group"
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

          {/* Right: Location, Phone & Year */}
          <div className="text-left md:text-right font-mono text-xs text-[#92908B] tracking-widest uppercase">
            <div>BENGALURU, KARNATAKA</div>
            <a
              href="tel:9686084891"
              className="text-[#F4F1EA]/80 hover:text-[#D8C39A] transition-colors block mt-1 tracking-wider normal-case"
            >
              +91 9686084891
            </a>
            <div className="text-[#D8C39A] mt-0.5">2026</div>
          </div>
        </div>

        {/* Bottom Line: Copyright */}
        <div className="pt-8 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#92908B]/60 tracking-widest uppercase">
          <div>© 2026 KISHOR SV · ALL RIGHTS RESERVED</div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6EE7B7]" />
            <span>SYSTEM ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
