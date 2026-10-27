import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Layers, 
  Cpu, 
  ExternalLink, 
  CheckCircle2, 
  Flame, 
  ArrowRight, 
  Activity, 
  Lock, 
  TrendingUp, 
  Clock, 
  Database 
} from 'lucide-react';
import { enterpriseCaseStudies } from '../data/resumeData';
import { playClick, playThud } from '../utils/soundEffects';

export const EnterpriseCaseStudies: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string>(enterpriseCaseStudies[0].id);

  const filters = [
    { id: 'all', label: 'All Architectures' },
    { id: 'ai', label: 'Azure AI & Databricks' },
    { id: 'power', label: 'Power Platform & Canvas' },
    { id: 'migration', label: 'Migration & RPA' },
  ];

  const filteredStudies = enterpriseCaseStudies.filter((study) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'ai') return study.tag.includes('Azure') || study.tag.includes('AI') || study.tag.includes('Databricks');
    if (activeTab === 'power') return study.tag.includes('Power');
    if (activeTab === 'migration') return study.tag.includes('Migration') || study.tag.includes('RPA');
    return true;
  });

  return (
    <section id="case-studies" className="py-16 sm:py-24 bg-[#0a0d15] relative border-b-2 border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Comic Kicker */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-cyan-500 text-black font-bangers text-xs sm:text-sm px-2.5 py-0.5 border border-black shadow-[2px_2px_0px_#000]">
                ENTERPRISE BLUEPRINTS
              </span>
              <span className="text-xs font-mono text-cyan-400">ISSUE #02 • DELEGATION &amp; SCALE</span>
            </div>
            
            <h2 className="font-bangers text-4xl sm:text-6xl text-white tracking-wide leading-none">
              PRODUCTION <span className="text-cyan-400">CASE STUDIES</span>
            </h2>
            
            <p className="mt-3 text-slate-300 max-w-2xl text-sm sm:text-base font-sans leading-relaxed">
              Real-world systems engineered across Fortune 500 &amp; university environments. Sanitized of proprietary client data while detailing the exact <strong className="text-white">architectural breakthroughs</strong>, <strong className="text-white">delegation workarounds</strong>, and <strong className="text-white">business ROI</strong>.
            </p>
          </div>

          {/* NDA / Verification Notice Pill */}
          <div className="bg-[#121624] border-2 border-emerald-500/40 p-3 rounded-lg shadow-[3px_3px_0px_rgba(16,185,129,0.3)] max-w-xs font-mono text-xs text-slate-300 flex items-start gap-2.5">
            <Lock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-emerald-400 font-bold block">Enterprise NDA Compliant</span>
              <span>Proprietary data abstracted into reproducible architectural patterns.</span>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => {
                playClick();
                setActiveTab(filter.id);
              }}
              className={`px-3.5 py-2 text-xs font-mono font-bold rounded border transition-all ${
                activeTab === filter.id
                  ? 'bg-cyan-500 text-black border-black shadow-[3px_3px_0px_#000]'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredStudies.map((study, idx) => {
            const isExpanded = expandedId === study.id;
            return (
              <div
                key={study.id}
                className="bg-[#101420] border-3 border-black shadow-[6px_6px_0px_#000] p-5 sm:p-7 flex flex-col justify-between hover:border-cyan-500/60 transition-colors relative"
              >
                {/* Top Badge Banner */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[11px] font-bold text-cyan-400 uppercase tracking-wider bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-800">
                      {study.clientContext}
                    </span>
                    <span className="font-mono text-xs text-slate-400">
                      {study.timeline}
                    </span>
                  </div>

                  <h3 className="font-bangers text-2xl sm:text-3xl text-white tracking-wide leading-tight mb-2">
                    {study.title}
                  </h3>

                  <p className="text-xs font-mono text-amber-400 mb-4 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" />
                    Role: {study.role}
                  </p>

                  {/* Impact Metrics Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
                    {study.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className={`p-2.5 rounded border font-mono ${
                          m.highlight
                            ? 'bg-cyan-950/60 border-cyan-500/40 text-cyan-300'
                            : 'bg-slate-900/60 border-slate-800 text-slate-300'
                        }`}
                      >
                        <div className="text-sm sm:text-base font-extrabold font-code">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-400 font-sans leading-tight mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* The Problem / Constraint */}
                  <div className="bg-[#0b0d14] border border-slate-800 p-3.5 rounded mb-4 text-xs font-sans">
                    <span className="text-rose-400 font-mono font-bold block mb-1 flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-rose-500" />
                      The Engineering Challenge:
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Key Triumph Callout */}
                  <div className="bg-amber-950/20 border-l-4 border-amber-400 p-3 mb-5 text-xs">
                    <span className="text-amber-300 font-mono font-bold block mb-0.5">
                      ★ Architectural Triumph:
                    </span>
                    <p className="text-slate-200 font-sans">
                      {study.keyEngineeringTriumph}
                    </p>
                  </div>

                  {/* Detailed Solutions Checklist */}
                  {isExpanded && (
                    <div className="space-y-2 mb-5 pt-3 border-t border-slate-800/80">
                      <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                        System Implementation Steps:
                      </span>
                      {study.architectureSolution.map((sol, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer with Stack Tags and Expand Toggle */}
                <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-slate-900 text-slate-300 border border-slate-700 rounded text-[11px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => {
                        playThud();
                        setExpandedId(isExpanded ? '' : study.id);
                      }}
                      className="text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 focus:outline-none"
                    >
                      <span>{isExpanded ? 'Collapse Architecture Specs' : 'View Architecture Specs & Steps'}</span>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? '-rotate-90' : 'rotate-90'}`} />
                    </button>

                    <a
                      href="#architecture"
                      onClick={() => playClick()}
                      className="text-[11px] font-mono text-slate-400 hover:text-amber-400 flex items-center gap-1"
                    >
                      <span>Simulate in Visual Flow</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
