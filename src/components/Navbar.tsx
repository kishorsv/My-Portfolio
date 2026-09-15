import { useState, useEffect } from 'react';
import { personalInfo } from '../data/socials';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export function Navbar({ onOpenResume, onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(() => (typeof window !== 'undefined' ? window.scrollY > 100 : false));
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 100);

      // Section spy
      const sections = ['home', 'work', 'explorations', 'about', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
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
    if (id === 'resume') {
      onOpenResume();
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Work', id: 'work' },
    { label: 'About', id: 'about' },
    { label: 'Resume', id: 'resume' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 md:pt-6 px-4 pointer-events-none flex justify-center">
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto transition-all duration-300 inline-flex items-center gap-2 md:gap-3 rounded-full backdrop-blur-md border border-white/10 bg-surface/90 px-2 py-1.5 md:px-3 md:py-2 ${
          isScrolled ? 'shadow-2xl shadow-black/80 border-white/15 bg-surface/95' : ''
        }`}
      >
        {/* KS Logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="group relative p-0.5 rounded-full focus:outline-none focus:ring-2 focus:ring-[#89AACC]"
          aria-label="Back to top"
        >
          <div className="w-9 h-9 rounded-full p-[1.5px] bg-gradient-to-tr from-[#89AACC] to-[#4E85BF] group-hover:bg-gradient-to-bl transition-all duration-300 group-hover:scale-110 flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-bg flex items-center justify-center">
              <span className="font-display italic text-text-primary text-sm font-semibold tracking-wider">
                {personalInfo.shortName}
              </span>
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3.5 py-1.5 text-xs font-medium tracking-wider uppercase rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-text-primary bg-stroke/60 font-semibold'
                    : 'text-muted hover:text-text-primary hover:bg-stroke/40'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Separator on desktop */}
        <div className="hidden md:block w-px h-4 bg-stroke" />

        {/* CTA Button */}
        <button
          onClick={onOpenContact}
          className="group relative inline-flex items-center justify-center rounded-full text-xs font-medium px-4 py-2 transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none"
        >
          {/* Animated gradient ring on hover */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-shift blur-[1px]" />
          <span className="relative z-10 rounded-full bg-surface px-3 py-1.5 text-text-primary border border-white/10 group-hover:border-transparent transition-all flex items-center gap-1.5 font-medium">
            Let's Talk
            <span className="text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </span>
        </button>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-8 h-8 rounded-full flex items-center justify-center text-muted hover:text-text-primary hover:bg-stroke/50 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden absolute top-20 left-4 right-4 rounded-2xl bg-surface/95 border border-white/10 backdrop-blur-xl p-4 shadow-2xl flex flex-col gap-2 z-50">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-text-primary hover:bg-stroke/50 transition-colors flex items-center justify-between"
            >
              <span>{item.label}</span>
              <span className="text-muted text-xs">↗</span>
            </button>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full mt-2 py-3 rounded-xl accent-gradient text-bg font-semibold text-center text-sm shadow-lg shadow-[#4E85BF]/20"
          >
            Let's Talk ↗
          </button>
        </div>
      )}
    </header>
  );
}
