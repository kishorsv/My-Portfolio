import { useState, useEffect } from 'react';
import { personalInfo } from '../data/socials';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export function Navbar({ onOpenResume, onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(() => (typeof window !== 'undefined' ? window.scrollY > 80 : false));
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 80);

      const sections = ['home', 'about', 'skills', 'projects', 'focus', 'journey', 'certifications', 'achievements', 'education', 'contact'];
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
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Journey', id: 'journey' },
    { label: 'Credentials', id: 'certifications' },
    { label: 'Resume', id: 'resume' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 md:pt-6 px-4 pointer-events-none flex justify-center transition-all duration-300">
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto transition-all duration-500 ease-out inline-flex items-center gap-2 md:gap-3 rounded-full px-3 py-1.5 md:px-4 md:py-2 border ${
          isScrolled
            ? 'scale-[0.96] shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
            : 'scale-100 shadow-[0_4px_24px_rgba(0,0,0,0.3)]'
        }`}
        style={{
          background: 'rgba(255, 255, 255, 0.035)',
          backdropFilter: 'blur(20px)',
          borderColor: 'rgba(255, 255, 255, 0.08)',
        }}
      >
        {/* KS Logo with slight rotation & gradient ring on hover */}
        <button
          onClick={() => scrollToSection('home')}
          className="group relative p-0.5 rounded-full focus:outline-none"
          aria-label="Back to top"
          data-cursor="link"
        >
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-full p-[1.5px] bg-gradient-to-tr from-[#89AACC] to-[#4E85BF] group-hover:rotate-6 group-hover:scale-108 transition-all duration-300 flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-[#080808] flex items-center justify-center">
              <span className="font-display italic text-text-primary text-xs md:text-sm font-semibold tracking-wider">
                {personalInfo.shortName}
              </span>
            </div>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-text-primary bg-white/10 font-semibold shadow-inner'
                    : 'text-muted hover:text-text-primary hover:bg-white/5'
                }`}
                data-cursor="link"
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Separator */}
        <div className="hidden lg:block w-px h-4 bg-white/10" />

        {/* Contact Action */}
        <button
          onClick={onOpenContact}
          className="group relative inline-flex items-center justify-center rounded-full text-xs font-mono tracking-wider uppercase px-4 py-1.5 transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none"
          data-cursor="link"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-shift blur-[1px]" />
          <span className="relative z-10 rounded-full bg-white/10 px-3.5 py-1 text-text-primary border border-white/15 group-hover:border-transparent transition-all flex items-center gap-1.5 font-medium">
            Contact
            <span className="text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </span>
        </button>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-8 h-8 rounded-full flex items-center justify-center text-muted hover:text-text-primary hover:bg-white/5 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="pointer-events-auto lg:hidden absolute top-20 left-4 right-4 rounded-3xl p-5 shadow-2xl flex flex-col gap-2 z-50 border"
          style={{
            background: 'rgba(12, 12, 12, 0.95)',
            backdropFilter: 'blur(24px)',
            borderColor: 'rgba(255, 255, 255, 0.1)',
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="w-full text-left px-4 py-3 rounded-2xl text-sm font-mono uppercase tracking-wider text-text-primary hover:bg-white/5 transition-colors flex items-center justify-between"
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
            className="w-full mt-2 py-3 rounded-2xl accent-gradient text-bg font-semibold text-center text-sm shadow-lg shadow-[#4E85BF]/20"
          >
            Contact ↗
          </button>
        </div>
      )}
    </header>
  );
}
