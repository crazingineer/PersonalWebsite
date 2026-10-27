import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, FileText, Music, Disc } from 'lucide-react';
import { isMusicPlaying, toggleSoothingMusic, startSoothingMusic, playClick } from '../utils/soundEffects';

interface NavbarProps {
  onOpenResumeModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [musicOn, setMusicOn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Attempt soothing music autoplay on first user interaction
    const handleFirstInteraction = () => {
      if (!isMusicPlaying()) {
        startSoothingMusic();
        setMusicOn(true);
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('scroll', handleFirstInteraction, { once: true });

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleFirstInteraction);
    };
  }, []);

  const handleMusicToggle = () => {
    const isPlaying = toggleSoothingMusic();
    setMusicOn(isPlaying);
    playClick();
  };

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#090b10]/95 backdrop-blur-md border-b border-cyan-500/20 shadow-xl shadow-black/60' 
        : 'bg-[#090b10] border-b border-slate-800'
    }`}>
      {/* Top accent gradient line */}
      <div className="bg-gradient-to-r from-cyan-500 via-amber-400 to-cyan-500 h-[2px] w-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Personal Brand Brandmark */}
          <a 
            href="#overview" 
            onClick={() => playClick()}
            className="group flex items-center gap-3.5 focus:outline-none"
          >
            <div className="relative">
              <img 
                src="./shubham-yadav.png" 
                alt="Shubham Yadav" 
                className="w-11 h-11 rounded-full object-cover border-2 border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.4)] group-hover:scale-105 transition-transform" 
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#090b10] shadow-[0_0_6px_#10b981]" />
            </div>

            <div className="flex flex-col text-left">
              <span className="font-bangers text-2xl tracking-wide text-white group-hover:text-cyan-400 transition-colors">
                SHUBHAM YADAV
              </span>
              <span className="text-[11px] font-mono font-medium text-slate-400 tracking-tight">
                Power Platform &amp; Azure AI Architect
              </span>
            </div>
          </a>

          {/* Desktop Nav Links (Properly Centered and Aligned) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => playClick()}
                className="px-3 py-2 text-xs xl:text-sm font-semibold tracking-wide text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded-md transition-all font-mono"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Elements (Aligned) */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Soothing Background Music Toggle Pill */}
            <button
              onClick={handleMusicToggle}
              title={musicOn ? 'Mute Soothing Music' : 'Play Soothing Ambient Music'}
              className={`px-3 py-1.5 text-xs font-mono font-bold flex items-center gap-2 border rounded-full transition-all ${
                musicOn
                  ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/60 shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                  : 'bg-slate-900/80 text-slate-400 border-slate-700 hover:text-slate-200'
              }`}
            >
              {musicOn ? (
                <>
                  <div className="flex items-end gap-0.5 h-3">
                    <span className="w-0.5 h-2 bg-cyan-400 animate-pulse" />
                    <span className="w-0.5 h-3 bg-cyan-400 animate-pulse delay-75" />
                    <span className="w-0.5 h-1.5 bg-cyan-400 animate-pulse delay-150" />
                  </div>
                  <span className="hidden sm:inline">MUSIC ON</span>
                </>
              ) : (
                <>
                  <Music className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">MUSIC</span>
                </>
              )}
            </button>

            {/* Direct Official Resume PDF Download/View Button */}
            <a
              href="./Shubham_Yadav_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClick()}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold font-mono bg-cyan-500 hover:bg-cyan-400 text-black border-2 border-black shadow-[3px_3px_0px_#000] rounded hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RESUME PDF</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => {
                playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 text-slate-300 hover:text-white border border-slate-700 rounded bg-slate-800/80"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0f18] border-b border-cyan-500/30 px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                playClick();
                setMobileMenuOpen(false);
              }}
              className="block px-3 py-2.5 text-sm font-mono text-slate-200 hover:bg-slate-800 rounded border-l-2 border-transparent hover:border-cyan-400"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="./Shubham_Yadav_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-mono font-bold bg-cyan-500 text-black border border-black shadow-[2px_2px_0px_#000] rounded"
            >
              <FileText className="w-4 h-4" />
              VIEW OFFICIAL RESUME (PDF)
            </a>
            <button
              onClick={handleMusicToggle}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-mono text-slate-300 bg-slate-900 border border-slate-700 rounded"
            >
              <Music className="w-4 h-4 text-cyan-400" />
              <span>{musicOn ? 'MUTE BACKGROUND MUSIC' : 'PLAY SOOTHING BACKGROUND MUSIC'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
