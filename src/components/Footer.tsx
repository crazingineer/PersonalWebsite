import React from 'react';
import { ArrowUp } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './BrandIcons';
import { personalInfo } from '../data/resumeData';
import { playClick } from '../utils/soundEffects';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06080e] border-t-2 border-slate-800 py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Left badge */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-cyan-500 border-2 border-black flex items-center justify-center font-bangers text-lg text-black">
              SY
            </div>
            <div>
              <span className="font-bangers text-base text-white tracking-wider">
                SHUBHAM YADAV
              </span>
              <span className="text-[11px] text-slate-500 block">
                Enterprise Automation • Azure Data • GenAI Architecture
              </span>
            </div>
          </div>

          {/* Socials & Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => playClick()}
              className="text-slate-400 hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
            >
              <LinkedInIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              onClick={() => playClick()}
              className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded border border-slate-700 flex items-center gap-1 hover:text-cyan-400 transition-colors"
              title="Return to masthead"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Credits & GitHub Pages Tag */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Shubham Yadav. All rights reserved. Built with React, TypeScript &amp; Tailwind.
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-slate-400">Ready for 100% Free Static Hosting on GitHub Pages</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
