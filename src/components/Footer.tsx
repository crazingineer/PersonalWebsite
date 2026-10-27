import React from 'react';
import { ArrowUp, Download, Mail } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './BrandIcons';
import { personalInfo } from '../data/resumeData';
import { playClick } from '../utils/soundEffects';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06080e] border-t border-slate-800 py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Left branding */}
          <div className="flex items-center gap-3.5">
            <img 
              src="./shubham-yadav.png" 
              alt="Shubham Yadav" 
              className="w-10 h-10 rounded-full object-cover border border-cyan-500/50" 
            />
            <div>
              <span className="font-bangers text-lg text-white tracking-wider block">
                SHUBHAM YADAV
              </span>
              <span className="text-[11px] text-slate-400">
                Power Platform Solution Architect (PL-600) • Azure Cloud Data &amp; AI
              </span>
            </div>
          </div>

          {/* Socials & Resume Links */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="./Shubham_Yadav_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClick()}
              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors font-bold"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => playClick()}
              className="text-slate-300 hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
            >
              <LinkedInIcon className="w-4 h-4 text-cyan-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              onClick={() => playClick()}
              className="text-slate-300 hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>Email</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded border border-slate-700 flex items-center gap-1 hover:text-cyan-400 transition-colors"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

        {/* Clean Copyright without any debug text */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Shubham Yadav. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <span>Waterloo, ON &amp; Pune, MH</span>
            <span>•</span>
            <span className="text-emerald-400 font-medium">Available for High-Impact Roles</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
