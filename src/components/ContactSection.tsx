import React, { useState } from 'react';
import { Phone, MapPin, Copy, Check, Send, Download, Mail } from 'lucide-react';
import { LinkedInIcon } from './BrandIcons';
import { personalInfo } from '../data/resumeData';
import { playClick, playSuccessChime } from '../utils/soundEffects';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    playSuccessChime();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#080a10] relative border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Executive Contact Card */}
        <div className="bg-[#101422] border-2 border-slate-800 shadow-[8px_8px_0px_#000] p-6 sm:p-10 relative overflow-hidden rounded-xl">
          
          <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Section Kicker */}
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-amber-400 text-black font-bangers text-xs sm:text-sm px-2.5 py-0.5 border border-black shadow-[2px_2px_0px_#000] rounded">
              GET IN TOUCH
            </span>
            <span className="text-xs font-mono text-cyan-400 font-semibold">LET'S CONNECT</span>
          </div>

          <h2 className="font-bangers text-4xl sm:text-6xl text-white tracking-wide leading-tight mb-4">
            LET'S BUILD <span className="text-amber-400">HIGH-IMPACT SOLUTIONS</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-sans max-w-2xl leading-relaxed mb-6">
            Actively seeking <strong className="text-white">Power Platform Solution Architect</strong>, <strong className="text-white">Cloud Data &amp; AI Engineering</strong>, and technical leadership roles. Whether you are scaling high-throughput automations or modernizing enterprise legacy systems, I'm ready to contribute.
          </p>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-950/60 border border-emerald-500/50 rounded-full text-emerald-300 font-mono text-xs mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold">{personalInfo.availability}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Email Card with Copy button */}
            <div className="bg-[#0b0e17] border border-slate-700/80 p-5 rounded-lg flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-slate-400 block mb-1">Direct Email Address:</span>
                <div className="font-mono text-sm sm:text-base font-bold text-cyan-300 truncate mb-3">
                  {personalInfo.email}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={copyEmail}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-cyan-500 hover:bg-cyan-400 text-black font-mono font-bold text-xs border border-black shadow-[2px_2px_0px_#000] rounded transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-black" />
                      <span>COPIED TO CLIPBOARD!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>COPY EMAIL</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${personalInfo.email}?subject=Power%20Platform%20%2F%20AI%20Architecture%20Opportunity`}
                  onClick={() => playClick()}
                  className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded"
                  title="Open in mail client"
                >
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Social & Resume Links */}
            <div className="bg-[#0b0e17] border border-slate-700/80 p-5 rounded-lg space-y-3.5 text-xs font-mono">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => playClick()}
                className="flex items-center justify-between p-2.5 bg-slate-900/80 hover:bg-cyan-950/40 border border-slate-800 hover:border-cyan-500/50 rounded transition-colors group"
              >
                <div className="flex items-center gap-2 text-slate-300 group-hover:text-cyan-300 font-bold">
                  <LinkedInIcon className="w-4 h-4 text-cyan-400" />
                  <span>Connect on LinkedIn</span>
                </div>
                <span className="text-slate-500 group-hover:text-cyan-400">&rarr;</span>
              </a>

              <a
                href="./Shubham_Yadav_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClick()}
                className="flex items-center justify-between p-2.5 bg-cyan-950/40 hover:bg-cyan-900/40 border border-cyan-800/80 rounded transition-colors group"
              >
                <div className="flex items-center gap-2 text-cyan-300 font-bold">
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>Download Official Resume (PDF)</span>
                </div>
                <span className="text-cyan-400">&rarr;</span>
              </a>

              <div className="flex items-center justify-between pt-1 text-slate-400">
                <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-amber-400" /> {personalInfo.phone}</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-rose-400" /> {personalInfo.location}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
