import { useState, useEffect } from 'react';
import { personalInfo } from '../data/socials';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenResume?: () => void;
  onOpenContact?: () => void;
}

export function Navbar({ onOpenResume, onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(() => (typeof window !== 'undefined' ? window.scrollY > 60 : false));
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 60);

      const sections = ['home', 'about', 'skills', 'projects', 'experiments', 'journey', 'journal', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'contact' && onOpenContact) {
      onOpenContact();
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'WORK', id: 'projects' },
    { label: 'ABOUT', id: 'about' },
    { label: 'EXPERIMENTS', id: 'experiments' },
    { label: 'JOURNAL', id: 'journal' },
    { label: 'CONTACT', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 md:pt-6 px-4 pointer-events-none flex justify-center transition-all duration-300">
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto transition-all duration-500 ease-out inline-flex items-center gap-2 md:gap-3 rounded-full border ${
          isScrolled
            ? 'scale-[0.94] py-1.5 px-3 md:px-4 shadow-[0_12px_36px_rgba(0,0,0,0.7)] backdrop-blur-[32px]'
            : 'scale-100 py-2 px-4 md:px-5 shadow-[0_4px_24px_rgba(0,0,0,0.4)] backdrop-blur-[24px]'
        }`}
        style={{
          background: 'rgba(15, 15, 16, 0.72)',
          borderColor: 'rgba(255, 255, 255, 0.10)',
        }}
      >
        {/* KS Logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="group relative p-0.5 rounded-full focus:outline-none focus-visible:ring-1 focus-visible:ring-[#7C5CFF]"
          aria-label="Back to top"
          data-cursor="link"
        >
          <div className="w-8 h-8 rounded-full p-[1px] bg-gradient-to-tr from-[#7C5CFF] to-[#D8C39A] group-hover:rotate-6 group-hover:scale-105 transition-all duration-300 flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-[#0A0A0B] flex items-center justify-center">
              <span className="font-display italic text-[#F4F1EA] text-xs font-semibold tracking-wider">
                {personalInfo.shortName}
              </span>
            </div>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.18em] rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-[#F4F1EA] bg-white/10 font-semibold'
                    : 'text-[#92908B] hover:text-[#F4F1EA] hover:bg-white/5'
                }`}
                data-cursor="link"
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Right Action: Resume & Mobile Hamburger */}
        <div className="flex items-center gap-2">
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="hidden lg:inline-flex items-center px-3 py-1 text-[11px] font-mono uppercase tracking-wider rounded-full border border-white/10 text-[#D8C39A] hover:border-white/25 hover:bg-white/5 transition-colors"
              data-cursor="link"
            >
              CV ?
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-[#92908B] hover:text-[#F4F1EA] focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile Glass Dropdown */}
      {mobileMenuOpen && (
        <div
          className="pointer-events-auto md:hidden absolute top-20 left-4 right-4 rounded-3xl p-5 border border-white/10 shadow-2xl flex flex-col gap-2 transition-all duration-300"
          style={{
            background: 'rgba(15, 15, 16, 0.95)',
            backdropFilter: 'blur(30px)',
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left px-4 py-3 rounded-xl text-xs font-mono uppercase tracking-widest text-[#F4F1EA] hover:bg-white/5 flex items-center justify-between"
            >
              <span>{item.label}</span>
              <span className="text-[#92908B] text-[10px]">?</span>
            </button>
          ))}

          {onOpenResume && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="mt-2 text-center py-2.5 rounded-xl text-xs font-mono uppercase tracking-widest text-[#D8C39A] border border-[#D8C39A]/30 bg-[#D8C39A]/10"
            >
              INSPECT RESUME ?
            </button>
          )}
        </div>
      )}
    </header>
  );
}
