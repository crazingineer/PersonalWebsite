import React from 'react';
import { ArrowDown, Sparkles, Terminal, CheckCircle2, ShieldCheck, Database, Cpu, Zap } from 'lucide-react';
import { personalInfo } from '../data/resumeData';
import { playClick, playThud } from '../utils/soundEffects';

interface HeroCoverProps {
  onOpenTerminal: () => void;
  onExploreCases: () => void;
}

export const HeroCover: React.FC<HeroCoverProps> = ({ onOpenTerminal, onExploreCases }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 border-b-2 border-slate-800 bg-[#0b0e17]">
      {/* Halftone / Grid Pattern Background */}
      <div className="absolute inset-0 bg-halftone-dark opacity-35 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-blueprint opacity-20 pointer-events-none" />

      {/* Decorative gradient glow blobs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Comic Masthead Wrapper Box */}
        <div className="bg-[#121622] border-3 border-black shadow-[8px_8px_0px_0px_#000] p-4 sm:p-8 lg:p-10 relative">
          
          {/* Top Issue Barcode & Corner Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b-2 border-slate-700/80 mb-6 font-mono text-xs">
            
            {/* Issue metadata */}
            <div className="flex items-center gap-2">
              <span className="bg-rose-600 text-white font-bangers px-2.5 py-1 text-base tracking-wider border border-black shadow-[2px_2px_0px_#000]">
                VOL. 1 • ISSUE #01
              </span>
              <span className="text-slate-400 hidden sm:inline">|</span>
              <span className="text-cyan-400 font-bold hidden sm:inline">PRODUCTION EDITION</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">MASTER OF APPLIED COMPUTING</span>
            </div>

            {/* Price Box & Barcode */}
            <div className="flex items-center gap-3">
              <div className="border-2 border-black bg-amber-400 text-black px-2.5 py-1 font-bold text-[11px] shadow-[2px_2px_0px_#000] flex items-center gap-1">
                <span>STILL ONLY</span>
                <span className="font-extrabold underline">200 OK</span>
              </div>
              <div className="hidden md:flex items-center gap-1 bg-black px-2 py-1 text-[10px] text-slate-300 font-mono tracking-widest border border-slate-700">
                <span>||| | |||| | |||</span>
                <span className="text-cyan-400">SY-PL600</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 8 Cols: Main Punchy Headline & Value Proposition */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/60 border border-cyan-500/50 rounded-full text-cyan-300 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
                <span>MICROSOFT CERTIFIED POWER PLATFORM SOLUTION ARCHITECT</span>
              </div>

              {/* Huge Comic Impact Title */}
              <h1 className="font-bangers text-5xl sm:text-7xl lg:text-8xl text-white tracking-wide leading-[0.92] text-shadow">
                SCALING <span className="text-cyan-400 underline decoration-wavy decoration-cyan-500/60">AUTOMATION</span> &amp; <span className="text-amber-400">ENTERPRISE AI</span>
              </h1>

              {/* Clear professional summary */}
              <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-sans leading-relaxed max-w-3xl">
                I am <strong className="text-white font-bold">{personalInfo.name}</strong> — specializing in transforming complex corporate constraints into high-throughput systems. From bypassing 1,000-record delegation boundaries in <span className="text-cyan-300 font-semibold">Dataverse</span> to engineering RAG vector engines with <span className="text-amber-300 font-semibold">Azure AI Foundry</span> and <span className="text-rose-300 font-semibold">Databricks</span>.
              </p>

              {/* Call to Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                
                <button
                  onClick={() => {
                    playClick();
                    onExploreCases();
                  }}
                  className="px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black font-bangers text-xl tracking-wider border-3 border-black shadow-[5px_5px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#000] transition-all flex items-center gap-2"
                >
                  <Zap className="w-5 h-5 text-black fill-current" />
                  READ CASE STUDIES
                </button>

                <button
                  onClick={() => {
                    playThud();
                    onOpenTerminal();
                  }}
                  className="px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-cyan-300 font-mono text-sm font-bold border-2 border-slate-700 hover:border-cyan-400 shadow-[4px_4px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2"
                >
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  LAUNCH COMMAND DECK
                </button>

                <a
                  href="#contact"
                  onClick={() => playClick()}
                  className="px-5 py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-mono text-sm font-bold border-2 border-black shadow-[4px_4px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                >
                  HIRE / CONTACT ME
                </a>
              </div>

              {/* Fast Fact Pill Badges */}
              <div className="pt-4 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  PL-600 &amp; AZ-204 Certified
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded border border-slate-800">
                  <Database className="w-4 h-4 text-cyan-400" />
                  Dataverse &amp; Databricks SQL
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded border border-slate-800">
                  <Cpu className="w-4 h-4 text-amber-400" />
                  GenAI &amp; Copilot Studio
                </span>
              </div>
            </div>

            {/* Right 4 Cols: Production Impact Ledger Card */}
            <div className="lg:col-span-4">
              <div className="bg-[#0b0e17] border-3 border-black p-5 shadow-[6px_6px_0px_#000] relative">
                
                {/* Stamp */}
                <div className="absolute -top-3.5 -right-3.5 bg-rose-600 text-white font-bangers text-xs px-3 py-1 rotate-6 border-2 border-black shadow-[2px_2px_0px_#000]">
                  VERIFIED IMPACT
                </div>

                <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-4 font-mono text-xs text-slate-400">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white font-bold uppercase tracking-wider">Production Track Record</span>
                </div>

                <div className="space-y-4 font-mono">
                  {personalInfo.quickStats.map((stat, idx) => (
                    <div 
                      key={idx}
                      className="p-3 bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 transition-colors rounded"
                    >
                      <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-code">
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-300 font-semibold mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Client-Safe Architecture</span>
                  <span className="text-emerald-400 font-bold">100% NDA Compliant</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom ticker bar */}
          <div className="mt-8 pt-4 border-t-2 border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>EXPERIENCE: KPI PARTNERS • ACCENTURE • WILFRID LAURIER UNIVERSITY</span>
            </div>
            <a 
              href="#case-studies" 
              onClick={() => playClick()}
              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-bold"
            >
              <span>Scroll down to inspect solutions</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
