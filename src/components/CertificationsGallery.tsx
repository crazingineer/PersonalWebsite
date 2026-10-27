import React, { useState } from 'react';
import { Award, ShieldCheck, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import { certifications } from '../data/resumeData';
import { playClick, playSuccessChime } from '../utils/soundEffects';
import { triggerConfetti } from '../utils/confetti';

export const CertificationsGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All 8 Certifications' },
    { id: 'Architect', label: 'Solution Architect' },
    { id: 'Developer', label: 'Developer' },
    { id: 'Cloud', label: 'Azure Cloud' },
    { id: 'AI', label: 'AI & Data' },
    { id: 'Fundamentals', label: 'Fundamentals' },
  ];

  const filteredCerts = certifications.filter((cert) => {
    if (activeFilter === 'all') return true;
    return cert.category === activeFilter;
  });

  const handleCertClick = () => {
    playSuccessChime();
    triggerConfetti();
  };

  return (
    <section id="certifications" className="py-16 sm:py-24 bg-[#0a0d15] relative border-b-2 border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="bg-cyan-500 text-black font-bangers text-xs sm:text-sm px-2.5 py-0.5 border border-black shadow-[2px_2px_0px_#000]">
              MICROSOFT CREDENTIALS
            </span>
            <span className="text-xs font-mono text-cyan-400">ISSUE #05 • VERIFIED LICENSES</span>
          </div>

          <h2 className="font-bangers text-4xl sm:text-6xl text-white tracking-wide">
            MICROSOFT <span className="text-cyan-400">CERTIFICATIONS</span>
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
            Validated technical expertise across the entire Microsoft ecosystem — from enterprise Solution Architecture (PL-600) to Azure Cloud Engineering (AZ-204) and Generative AI (AI-900).
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                playClick();
                setActiveFilter(tab.id);
              }}
              className={`px-3.5 py-2 text-xs font-mono font-bold rounded border transition-all ${
                activeFilter === tab.id
                  ? 'bg-cyan-500 text-black border-black shadow-[3px_3px_0px_#000]'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.code}
              onClick={handleCertClick}
              className="bg-[#111420] border-3 border-black shadow-[5px_5px_0px_#000] p-5 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[7px_7px_0px_rgba(6,182,212,0.8)] transition-all cursor-pointer group relative"
            >
              <div>
                {/* Badge Code and Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="font-bangers text-2xl text-cyan-400 tracking-wider">
                    {cert.code}
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded border border-slate-700 bg-slate-900 text-slate-300">
                    {cert.category}
                  </span>
                </div>

                <h3 className="font-bold text-white text-base leading-snug mb-2 group-hover:text-cyan-300 transition-colors">
                  {cert.name}
                </h3>

                <p className="text-xs text-slate-400 font-sans leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              {/* Bottom Verification Status */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Active
                </span>
                <span className="text-slate-500 group-hover:text-amber-400 transition-colors">
                  Click to Celebrate 🎉
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 bg-[#121624] border-2 border-slate-800 p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Full transcript and digital credentials viewable upon request via Microsoft Learn.</span>
          </div>
          <a
            href="https://linkedin.com/in/shubhambhagwatyadav"
            target="_blank"
            rel="noreferrer"
            onClick={() => playClick()}
            className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1"
          >
            <span>View LinkedIn Licenses</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

