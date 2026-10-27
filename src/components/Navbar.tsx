import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Music, Sparkles } from 'lucide-react';
import { isMusicPlaying, toggleSoothingMusic, startSoothingMusic, playClick } from '../utils/soundEffects';

interface NavbarProps {
  onOpenResumeModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [musicOn, setMusicOn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Attempt soothing music playback on first interaction
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
    <header className={`sticky top-0 z-50 transition-all duration-200 border-b-3 border-black ${
      scrolled 
        ? 'bg-[#0c0f1a]/95 backdrop-blur-md shadow-[0_4px_0_0_#000]' 
        : 'bg-[#0a0d17] shadow-[0_3px_0_0_#000]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Comic Style Brand Identity on Left */}
          <a 
            href="#overview" 
            onClick={() => playClick()}
            className="group flex items-center gap-3 focus:outline-none"
          >
            {/* Avatar with comic border and shadow */}
            <div className="relative">
              <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-black shadow-[3px_3px_0px_#000] bg-cyan-500 group-hover:-translate-y-0.5 group-hover:shadow-[4px_4px_0px_#000] transition-all">
                <img 
                  src="./shubham-yadav.png" 
                  alt="Shubham Yadav" 
                  className="w-full h-full object-cover object-center" 
                />
              </div>
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-black shadow-[1px_1px_0px_#000]" />
            </div>

            {/* Name & Title */}
            <div className="flex flex-col text-left">
              <span className="font-bangers text-2xl sm:text-3xl tracking-wide text-white group-hover:text-cyan-400 transition-colors drop-shadow-[1px_1px_0px_#000]">
                SHUBHAM YADAV
              </span>
              <span className="text-[11px] font-mono font-bold text-cyan-400 tracking-tight flex items-center gap-1.5 -mt-0.5">
                <span>SOLUTION ARCHITECT &amp; AI</span>
              </span>
            </div>
          </a>

          {/* Recruiter-Friendly Comic Navigation Pills */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => playClick()}
                className="px-3.5 py-1.5 text-xs font-mono font-bold text-slate-300 hover:text-cyan-300 hover:bg-[#161a29] border border-transparent hover:border-black hover:shadow-[2px_2px_0px_#000] rounded transition-all hover:-translate-y-0.5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Controls: Comic Music Button + Resume PDF Button */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Comic Style Ambient Music Button */}
            <button
              onClick={handleMusicToggle}
              title={musicOn ? 'Mute Soothing Ambient Music' : 'Play Soothing Ambient Music'}
              className={`px-3 py-1.5 text-xs font-mono font-bold flex items-center gap-2 border-2 border-black rounded shadow-[2px_2px_0px_#000] transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#000] ${
                musicOn
                  ? 'bg-amber-400 text-black shadow-[2px_2px_0px_#000]'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {musicOn ? (
                <>
                  <div className="flex items-end gap-0.5 h-3">
                    <span className="w-0.5 h-2 bg-black animate-pulse" />
                    <span className="w-0.5 h-3 bg-black animate-pulse delay-75" />
                    <span className="w-0.5 h-1.5 bg-black animate-pulse delay-150" />
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

            {/* Tactile Comic Style Official Resume PDF Button */}
            <a
              href="./Shubham_Yadav_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClick()}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-bold bg-cyan-400 hover:bg-cyan-300 text-black border-2 border-black shadow-[3px_3px_0px_#000] rounded hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#000] transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-black" />
              <span>RESUME PDF</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => {
                playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 text-slate-300 hover:text-white border-2 border-black rounded bg-slate-900 shadow-[2px_2px_0px_#000]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0f1a] border-t-2 border-black px-4 pt-3 pb-6 space-y-2 shadow-2xl">
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
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-mono font-bold bg-cyan-400 text-black border-2 border-black shadow-[3px_3px_0px_#000] rounded"
            >
              <FileText className="w-4 h-4" />
              VIEW OFFICIAL RESUME (PDF)
            </a>
            <button
              onClick={handleMusicToggle}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-mono font-bold text-slate-300 bg-slate-900 border-2 border-black rounded shadow-[2px_2px_0px_#000]"
            >
              <Music className="w-4 h-4 text-amber-400" />
              <span>{musicOn ? 'MUTE BACKGROUND MUSIC' : 'PLAY SOOTHING BACKGROUND MUSIC'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
