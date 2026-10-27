import React from 'react';
import { ShieldCheck, Download, ArrowRight, Database, Cpu } from 'lucide-react';
import { personalInfo } from '../data/resumeData';
import { playClick, playThud } from '../utils/soundEffects';

interface HeroCoverProps {
  onExploreCases: () => void;
}

export const HeroCover: React.FC<HeroCoverProps> = ({ onExploreCases }) => {
  return (
    <section id="overview" className="relative overflow-hidden pt-8 pb-16 lg:py-20 border-b border-slate-800 bg-[#090b12]">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-halftone-dark opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-blueprint opacity-15 pointer-events-none" />
      
      {/* Atmospheric gradient glows */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Executive Profile Card Wrapper */}
        <div className="bg-[#0f121d] border-2 border-slate-800 shadow-[8px_8px_0px_0px_#000] p-6 sm:p-10 lg:p-12 relative rounded-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column (7 cols): Strong Value Proposition for Recruiters & Hiring Managers */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Clean Certification Badge (No rotating star emoji) */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cyan-950/70 border border-cyan-500/40 rounded-full text-cyan-300 text-xs font-mono font-semibold">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>MICROSOFT CERTIFIED POWER PLATFORM SOLUTION ARCHITECT (PL-600)</span>
              </div>

              {/* Bold Impact Headline */}
              <div className="space-y-2">
                <h1 className="font-bangers text-5xl sm:text-7xl lg:text-8xl text-white tracking-wide leading-[0.92]">
                  ARCHITECTING <span className="text-cyan-400">AUTOMATION</span> &amp; <span className="text-amber-400">ENTERPRISE AI</span>
                </h1>
                <p className="text-sm font-mono text-slate-400">
                  Master of Applied Computing (Wilfrid Laurier Univ.) • Ex-Accenture • KPI Partners
                </p>
              </div>

              {/* Clean Summary tailored for HR / Recruiters */}
              <p className="text-slate-300 text-base sm:text-lg font-sans leading-relaxed max-w-2xl">
                I am <strong className="text-white font-bold">{personalInfo.name}</strong> — an enterprise solutions architect specializing in end-to-end Power Platform systems, Azure Cloud data pipelines, and production GenAI integrations. Experienced in bypassing low-code delegation barriers, orchestrating high-throughput Databricks ETL, and establishing Center of Excellence (CoE) governance across healthcare, banking, and higher education.
              </p>

              {/* Action Buttons: Direct Resume PDF Download + Case Studies */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                
                <a
                  href="./Shubham_Yadav_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playClick()}
                  className="px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black font-bangers text-xl tracking-wider border-2 border-black shadow-[4px_4px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2 rounded"
                >
                  <Download className="w-5 h-5 text-black" />
                  DOWNLOAD RESUME (PDF)
                </a>

                <button
                  onClick={() => {
                    playClick();
                    onExploreCases();
                  }}
                  className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-cyan-300 font-mono text-sm font-bold border-2 border-slate-700 hover:border-cyan-400 shadow-[4px_4px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2 rounded"
                >
                  <span>VIEW CASE STUDIES</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </button>

                <a
                  href="#contact"
                  onClick={() => playClick()}
                  className="px-5 py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-mono text-sm font-bold border-2 border-black shadow-[4px_4px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all rounded"
                >
                  CONTACT ME
                </a>
              </div>

              {/* Credential Pills */}
              <div className="pt-3 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  8x Active Microsoft Certifications
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded border border-slate-800">
                  <Database className="w-4 h-4 text-cyan-400" />
                  Dataverse &amp; Azure Databricks
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded border border-slate-800">
                  <Cpu className="w-4 h-4 text-amber-400" />
                  Copilot Studio &amp; AI Foundry
                </span>
              </div>

            </div>

            {/* Right Column (5 cols): Professional Portrait + Key Impact Stats */}
            <div className="lg:col-span-5 flex flex-col items-center">
              
              {/* Professional Headshot Frame */}
              <div className="relative group w-full max-w-[340px] sm:max-w-[380px]">
                
                {/* Accent border backdrop */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-amber-500 rounded-2xl blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-500" />
                
                <div className="relative rounded-xl overflow-hidden border-3 border-black shadow-[8px_8px_0px_#000] bg-[#111420]">
                  <img
                    src="./shubham-yadav.png"
                    alt="Shubham Yadav - Power Platform Solution Architect"
                    className="w-full h-auto object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  
                  {/* Status Overlay Pill */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#090b12]/90 backdrop-blur-md border border-slate-700/80 p-2.5 rounded-lg flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-slate-200 font-bold">Open to Opportunities</span>
                    </div>
                    <span className="text-cyan-400 font-bold">Waterloo • Pune</span>
                  </div>
                </div>

              </div>

              {/* Production Track Record KPI Cards */}
              <div className="w-full max-w-[340px] sm:max-w-[380px] grid grid-cols-2 gap-2.5 mt-5">
                {personalInfo.quickStats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#131724] border border-slate-800 rounded-lg text-center"
                  >
                    <div className="text-2xl font-extrabold text-cyan-400 font-code">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-slate-400 font-sans mt-0.5 font-medium leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* Bottom Trust & Experience Strip */}
          <div className="mt-10 pt-5 border-t border-slate-800/90 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="text-slate-500 font-bold uppercase tracking-wider">Enterprise Experience:</span>
              <span className="text-slate-300 font-semibold">KPI Partners</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300 font-semibold">Wilfrid Laurier University</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300 font-semibold">Accenture Solutions</span>
            </div>

            <a
              href="#case-studies"
              onClick={() => playClick()}
              className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1.5 transition-colors"
            >
              <span>Explore Architectural Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
