import React from 'react';
import { Cpu, Database, Layers, Code2, Check, Star } from 'lucide-react';
import { skillCategories } from '../data/resumeData';
import { playClick } from '../utils/soundEffects';

export const SkillsMatrix: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-emerald-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-purple-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 bg-[#090b11] relative border-b-2 border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="bg-rose-600 text-white font-bangers text-xs sm:text-sm px-2.5 py-0.5 border border-black shadow-[2px_2px_0px_#000] rounded">
              CORE EXPERTISE
            </span>
          </div>

          <h2 className="font-bangers text-4xl sm:text-6xl text-white tracking-wide">
            TECHNICAL <span className="text-rose-500">ARSENAL</span>
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
            The full stack of languages, platforms, and cloud infrastructure leveraged to build resilient enterprise systems.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#101420] border-3 border-black shadow-[6px_6px_0px_#000] p-6 hover:border-slate-600 transition-colors"
            >
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3 mb-4">
                <div className="p-2 bg-slate-900 border border-slate-800 rounded">
                  {getCategoryIcon(cat.iconName)}
                </div>
                <div>
                  <h3 className="font-bangers text-2xl text-white tracking-wide">
                    {cat.category}
                  </h3>
                  <p className="text-[11px] font-mono text-slate-400">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`px-3 py-1.5 rounded text-xs font-mono flex items-center gap-1.5 border transition-all ${
                      skill.featured
                        ? 'bg-slate-900 border-cyan-500/50 text-cyan-300 hover:border-cyan-400'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {skill.featured && <Star className="w-3 h-3 text-amber-400 fill-current" />}
                    <span>{skill.name}</span>
                    <span className="text-[9px] text-slate-500 bg-black/50 px-1 py-0.2 rounded">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

