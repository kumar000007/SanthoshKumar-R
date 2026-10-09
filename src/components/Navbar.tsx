import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileDown, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'data-science', 'full-stack', 'experience', 'certifications', 'achievements', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Data Science', href: '#data-science', id: 'data-science' },
    { label: 'Full Stack', href: '#full-stack', id: 'full-stack' },
    { label: 'Experience', href: '#experience', id: 'experience' }
  ];

  const allSections = [
    ...navLinks,
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Achievements', href: '#achievements', id: 'achievements' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#06080d]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/20 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: Zone 1 (Brand) - Zone 2 (4-5 Nav Links) - Zone 3 (1 Primary Action) */}
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#hero"
              className="text-base sm:text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-sm bg-gradient-to-tr from-cyan-400 to-indigo-500 inline-block" />
              <span>SANTHOSHKUMAR R</span>
            </a>

            {/* Zone 2: 4–5 clean single-line text navigation links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300 shrink-0">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`whitespace-nowrap transition-colors relative py-1 ${
                      isActive ? 'text-cyan-400 font-semibold' : 'hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: 1 primary action & social */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="https://github.com/kumar000007"
                target="_blank"
                rel="noreferrer"
                className="hidden md:inline-flex p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="GitHub: https://github.com/kumar000007"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4 text-cyan-400" />
              </a>

              <a
                href="#resume"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-200 bg-slate-900 border border-slate-700/80 rounded-lg hover:border-cyan-500/50 hover:text-white transition-colors whitespace-nowrap shrink-0"
              >
                <FileDown className="w-3.5 h-3.5 text-cyan-400" />
                <span>Resumes</span>
              </a>

              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-sky-300 rounded-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-sm shadow-cyan-500/20 whitespace-nowrap shrink-0"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition-colors"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-black/75 backdrop-blur-xl pt-20 px-6 pb-8 flex flex-col justify-between animate-fadeIn">
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">Navigation Index</div>
            <div className="flex flex-col space-y-3">
              {allSections.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors py-1 flex items-center justify-between border-b border-white/[0.05] ${
                    activeSection === item.id ? 'text-cyan-400' : 'text-slate-200 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-6 border-t border-slate-800">
            <a
              href="https://github.com/kumar000007"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-slate-200 bg-slate-900 rounded-lg border border-slate-800"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>GitHub: github.com/kumar000007</span>
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-sky-300 rounded-lg"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            {onOpenResume && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-slate-300 bg-slate-800/80 rounded-lg border border-slate-700/60"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>View / Download Resume</span>
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};
