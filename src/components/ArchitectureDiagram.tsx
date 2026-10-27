import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ArrowRight, 
  Cpu, 
  Database, 
  Cloud, 
  Workflow, 
  Monitor, 
  Sparkles, 
  CheckCircle, 
  Zap 
} from 'lucide-react';
import { architectureFlows, ArchitectureStep } from '../data/architectureFlows';
import { playClick, playSuccessChime } from '../utils/soundEffects';

export const ArchitectureDiagram: React.FC = () => {
  const [activeFlowId, setActiveFlowId] = useState<string>(architectureFlows[0].id);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const activeFlow = architectureFlows.find((f) => f.id === activeFlowId) || architectureFlows[0];

  useEffect(() => {
    setCurrentStepIndex(0);
    setIsPlaying(false);
  }, [activeFlowId]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStepIndex((prev) => {
          if (prev + 1 < activeFlow.steps.length) {
            playClick();
            return prev + 1;
          } else {
            playSuccessChime();
            setIsPlaying(false);
            return prev;
          }
        });
      }, 2600);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeFlow.steps.length]);

  const getCategoryIcon = (cat: ArchitectureStep['category']) => {
    switch (cat) {
      case 'frontend':
        return <Monitor className="w-4 h-4 text-cyan-400" />;
      case 'automation':
        return <Workflow className="w-4 h-4 text-amber-400" />;
      case 'ai':
        return <Sparkles className="w-4 h-4 text-purple-400" />;
      case 'database':
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 'cloud':
        return <Cloud className="w-4 h-4 text-blue-400" />;
      default:
        return <Cpu className="w-4 h-4 text-slate-400" />;
    }
  };

  const getCategoryColor = (cat: ArchitectureStep['category']) => {
    switch (cat) {
      case 'frontend':
        return 'border-cyan-500/50 bg-cyan-950/40 text-cyan-300';
      case 'automation':
        return 'border-amber-500/50 bg-amber-950/40 text-amber-300';
      case 'ai':
        return 'border-purple-500/50 bg-purple-950/40 text-purple-300';
      case 'database':
        return 'border-emerald-500/50 bg-emerald-950/40 text-emerald-300';
      case 'cloud':
        return 'border-blue-500/50 bg-blue-950/40 text-blue-300';
      default:
        return 'border-slate-700 bg-slate-900 text-slate-300';
    }
  };

  return (
    <section id="architecture" className="py-16 sm:py-24 bg-[#090b12] relative border-b-2 border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="bg-amber-400 text-black font-bangers text-xs sm:text-sm px-2.5 py-0.5 border border-black shadow-[2px_2px_0px_#000]">
              INTERACTIVE BLUEPRINT
            </span>
            <span className="text-xs font-mono text-amber-400">DATA &amp; AUTOMATION SIMULATOR</span>
          </div>

          <h2 className="font-bangers text-4xl sm:text-6xl text-white tracking-wide">
            ENTERPRISE <span className="text-amber-400">SYSTEM FLOWS</span>
          </h2>
          
          <p className="mt-3 text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
            Step through the actual low-code, cloud data, and AI orchestration pipelines engineered for production stability and extreme throughput.
          </p>
        </div>

        {/* Blueprint Container Box */}
        <div className="bg-[#10131d] border-3 border-black shadow-[8px_8px_0px_#000] p-4 sm:p-8 relative">
          
          {/* Flow selector buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b-2 border-slate-800">
            <div className="flex flex-wrap gap-2">
              {architectureFlows.map((flow) => (
                <button
                  key={flow.id}
                  onClick={() => {
                    playClick();
                    setActiveFlowId(flow.id);
                  }}
                  className={`px-3.5 py-2 text-xs font-mono font-bold rounded border transition-all ${
                    activeFlowId === flow.id
                      ? 'bg-amber-400 text-black border-black shadow-[3px_3px_0px_#000]'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  {flow.name.split('&')[0]}
                </button>
              ))}
            </div>

            {/* Playback Controls */}
            <div className="flex items-center gap-2 font-mono text-xs">
              <button
                onClick={() => {
                  playClick();
                  setIsPlaying(!isPlaying);
                }}
                className={`px-3 py-1.5 rounded flex items-center gap-1.5 border font-bold transition-all ${
                  isPlaying 
                    ? 'bg-rose-600 text-white border-black' 
                    : 'bg-cyan-500 text-black border-black shadow-[2px_2px_0px_#000]'
                }`}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? 'Pause' : 'Auto Simulate'}</span>
              </button>

              <button
                onClick={() => {
                  playClick();
                  setCurrentStepIndex(0);
                  setIsPlaying(false);
                }}
                title="Reset simulation"
                className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded border border-slate-700"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Active Flow Details Banner */}
          <div className="py-4 border-b border-slate-800/80 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs font-mono">
            <div>
              <span className="text-amber-400 font-bold block sm:inline mr-2">SYSTEM CONTEXT:</span>
              <span className="text-slate-300">{activeFlow.summary}</span>
            </div>
            <div className="bg-emerald-950/60 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded shrink-0">
              ⚡ {activeFlow.businessImpact}
            </div>
          </div>

          {/* Step Pipeline Visualization Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative mb-8">
            {activeFlow.steps.map((step, idx) => {
              const isActive = idx === currentStepIndex;
              const isPast = idx < currentStepIndex;

              return (
                <div
                  key={step.id}
                  onClick={() => {
                    playClick();
                    setCurrentStepIndex(idx);
                    setIsPlaying(false);
                  }}
                  className={`cursor-pointer p-4 rounded-lg border-2 transition-all flex flex-col justify-between ${
                    isActive
                      ? 'border-amber-400 bg-[#161a28] shadow-[4px_4px_0px_rgba(245,158,11,0.6)] scale-[1.02]'
                      : isPast
                      ? 'border-emerald-500/40 bg-slate-900/60 opacity-80'
                      : 'border-slate-800 bg-slate-950/80 opacity-50 hover:opacity-80'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className="font-mono text-[10px] font-bold text-slate-400">
                        STEP 0{idx + 1}
                      </span>
                      <span className={`p-1 rounded border text-[10px] font-mono flex items-center gap-1 ${getCategoryColor(step.category)}`}>
                        {getCategoryIcon(step.category)}
                        <span className="capitalize">{step.category}</span>
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-100 text-xs mb-1 line-clamp-2">
                      {step.component}
                    </h4>

                    <p className="text-[11px] text-slate-400 font-sans line-clamp-2">
                      {step.action}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-800/80 text-[10px] font-mono text-cyan-400 flex items-center gap-1">
                    {isActive ? (
                      <span className="flex items-center gap-1 text-amber-400 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                        EXECUTING
                      </span>
                    ) : isPast ? (
                      <span className="flex items-center gap-1 text-emerald-400 font-bold">
                        <CheckCircle className="w-3 h-3 text-emerald-400" />
                        SYNCED
                      </span>
                    ) : (
                      <span className="text-slate-500">PENDING</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Step Deep Dive Inspector Box */}
          <div className="bg-[#0b0e17] border-2 border-slate-700 p-5 rounded-lg font-mono">
            <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-400 text-black font-bold px-2 py-0.5 text-xs rounded">
                  INSPECTOR: STEP 0{currentStepIndex + 1}
                </span>
                <span className="text-slate-200 font-bold text-sm">
                  {activeFlow.steps[currentStepIndex].component}
                </span>
              </div>
              <span className="text-xs text-slate-400">
                Payload State: <span className="text-emerald-400 font-bold">ACID Validated</span>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
              <div>
                <span className="text-amber-400 font-mono font-bold block mb-1">Architectural Operation:</span>
                <p className="text-slate-300 leading-relaxed font-sans">
                  {activeFlow.steps[currentStepIndex].detail}
                </p>
              </div>

              <div>
                <span className="text-cyan-400 font-mono font-bold block mb-1">State / Downstream Emitted Payload:</span>
                <div className="bg-[#05060a] p-3 rounded border border-slate-800 font-mono text-[11px] text-emerald-300">
                  {activeFlow.steps[currentStepIndex].output}
                </div>
              </div>
            </div>

            {/* Stepper buttons */}
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
              <button
                disabled={currentStepIndex === 0}
                onClick={() => {
                  playClick();
                  setCurrentStepIndex((prev) => Math.max(0, prev - 1));
                }}
                className="px-3 py-1 bg-slate-900 text-slate-400 hover:text-white border border-slate-800 rounded disabled:opacity-30 disabled:cursor-not-allowed"
              >
                &larr; Previous Step
              </button>

              <span className="text-xs text-slate-500 font-mono">
                {currentStepIndex + 1} of {activeFlow.steps.length}
              </span>

              <button
                disabled={currentStepIndex === activeFlow.steps.length - 1}
                onClick={() => {
                  playClick();
                  setCurrentStepIndex((prev) => Math.min(activeFlow.steps.length - 1, prev + 1));
                }}
                className="px-3 py-1 bg-cyan-500 text-black font-bold border border-black shadow-[2px_2px_0px_#000] rounded disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Next Step &rarr;
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
