import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Terminal, FileText, ExternalLink } from 'lucide-react';
import { isSoundEnabled, toggleSound, playClick } from '../utils/soundEffects';
import { personalInfo } from '../data/resumeData';

interface NavbarProps {
  onOpenTerminal?: () => void;
  onOpenResumeModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenResumeModal }) => {
  const [soundOn, setSoundOn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setSoundOn(isSoundEnabled());
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
  };

  const navLinks = [
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 ${
      scrolled 
        ? 'bg-[#090b10]/95 backdrop-blur-md border-b-2 border-cyan-500/30 shadow-lg shadow-black/50' 
        : 'bg-[#090b10] border-b-2 border-slate-800'
    }`}>
      {/* Top comic banner line */}
      <div className="bg-gradient-to-r from-cyan-600 via-amber-500 to-rose-600 h-1 w-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Masthead badge */}
          <a 
            href="#" 
            onClick={() => playClick()}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="w-10 h-10 bg-cyan-500 border-2 border-black shadow-[3px_3px_0px_#000] flex items-center justify-center font-bangers text-2xl text-black group-hover:rotate-6 transition-transform">
              SY
            </div>
            <div className="flex flex-col">
              <span className="font-bangers text-xl tracking-wider text-white group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                SHUBHAM YADAV
                <span className="text-[10px] bg-amber-400 text-black px-1.5 py-0.5 rounded font-mono font-bold tracking-normal border border-black shadow-[1px_1px_0px_#000]">
                  ARCHITECT
                </span>
              </span>
              <span className="text-[11px] font-mono text-slate-400 tracking-tight flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                POWER PLATFORM &amp; AI
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => playClick()}
                className="px-3 py-1.5 text-xs lg:text-sm font-semibold tracking-wide text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded border border-transparent hover:border-cyan-500/30 transition-all font-mono"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Terminal launcher button */}
            <button
              onClick={() => {
                playClick();
                if (onOpenTerminal) onOpenTerminal();
                else {
                  document.getElementById('terminal-section')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              title="Launch Interactive Terminal"
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono font-bold bg-slate-900 text-cyan-400 border border-cyan-500/40 rounded hover:border-cyan-400 hover:bg-cyan-950/40 shadow-[2px_2px_0px_rgba(6,182,212,0.3)] transition-all"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">CLI</span>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={handleSoundToggle}
              title={soundOn ? 'Disable Sound FX' : 'Enable Sound FX'}
              className={`p-1.5 sm:px-2.5 sm:py-1.5 text-xs font-mono flex items-center gap-1.5 border rounded transition-all ${
                soundOn
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 shadow-[2px_2px_0px_rgba(245,158,11,0.5)]'
                  : 'bg-slate-800/60 text-slate-400 border-slate-700 hover:text-slate-200'
              }`}
            >
              {soundOn ? <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline font-bold">{soundOn ? 'SFX ON' : 'SFX'}</span>
            </button>

            {/* Resume / CV Modal Trigger */}
            <button
              onClick={() => {
                playClick();
                if (onOpenResumeModal) onOpenResumeModal();
              }}
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold font-mono bg-cyan-500 text-black border-2 border-black shadow-[3px_3px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#000] transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RESUME</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => {
                playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-1.5 text-slate-300 hover:text-white border border-slate-700 rounded bg-slate-800/80"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e111a] border-b-2 border-cyan-500/40 px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                playClick();
                setMobileMenuOpen(false);
              }}
              className="block px-3 py-2 text-sm font-mono text-slate-200 hover:bg-slate-800 rounded border-l-2 border-transparent hover:border-cyan-400"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                playClick();
                setMobileMenuOpen(false);
                if (onOpenResumeModal) onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-mono font-bold bg-cyan-500 text-black border border-black shadow-[2px_2px_0px_#000]"
            >
              <FileText className="w-4 h-4" />
              VIEW &amp; PRINT RESUME
            </button>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-mono text-slate-300 bg-slate-800 border border-slate-700 rounded"
            >
              <ExternalLink className="w-4 h-4" />
              LinkedIn Profile
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
