import React from 'react';
import { Bot, FileCode, BrainCircuit, CheckCircle2, Award, Terminal, ArrowUpRight } from 'lucide-react';
import { technicalProjects } from '../data/resumeData';
import { playClick } from '../utils/soundEffects';

export const TechnicalProjects: React.FC = () => {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'rag-institutional-chatbot':
        return <Bot className="w-6 h-6 text-cyan-400" />;
      case 'cms-consolidation-migration':
        return <FileCode className="w-6 h-6 text-amber-400" />;
      case 'employee-churn-prediction':
        return <BrainCircuit className="w-6 h-6 text-purple-400" />;
      default:
        return <Terminal className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 bg-[#0a0c14] relative border-b-2 border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-purple-600 text-white font-bangers text-xs sm:text-sm px-2.5 py-0.5 border border-black shadow-[2px_2px_0px_#000] rounded">
                AI &amp; DATA SYSTEMS
              </span>
              <span className="text-xs font-mono text-purple-400 font-semibold">APPLIED ENGINEERING PROJECTS</span>
            </div>

            <h2 className="font-bangers text-4xl sm:text-6xl text-white tracking-wide">
              TECHNICAL <span className="text-purple-400">PROJECTS</span>
            </h2>

            <p className="mt-3 text-slate-300 max-w-2xl text-sm sm:text-base font-sans leading-relaxed">
              Hands-on engineering projects spanning dense vector RAG pipelines, enterprise document migration scripts, and predictive machine learning models.
            </p>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {technicalProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#111420] border-3 border-black shadow-[6px_6px_0px_#000] p-6 flex flex-col justify-between hover:border-purple-500/60 transition-colors group"
            >
              <div>
                {/* Header with Icon and Date */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg group-hover:scale-105 transition-transform">
                    {getProjectIcon(project.id)}
                  </div>
                  <span className="font-mono text-xs text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                    {project.period}
                  </span>
                </div>

                <h3 className="font-bangers text-2xl text-white tracking-wide leading-tight mb-1">
                  {project.title}
                </h3>

                <p className="text-xs font-mono text-purple-400 mb-4">
                  {project.subtitle}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed font-sans mb-5">
                  {project.overview}
                </p>

                {/* Validation Metric Badge */}
                {project.evaluationMetric && (
                  <div className="mb-5 p-2.5 bg-purple-950/40 border border-purple-500/40 rounded flex items-center gap-2 text-xs font-mono">
                    <Award className="w-4 h-4 text-purple-400 shrink-0" />
                    <span className="text-purple-300 font-bold">
                      {project.evaluationMetric}
                    </span>
                  </div>
                )}

                {/* Key Bullet Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Bottom Bar */}
              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Stack &amp; Frameworks:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((st) => (
                    <span
                      key={st}
                      className="px-2 py-0.5 bg-slate-900 text-slate-300 border border-slate-700/80 rounded text-[10px] font-mono"
                    >
                      {st}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

