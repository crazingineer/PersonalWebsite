import React from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';
import { experienceData, educationData } from '../data/resumeData';
import { playClick } from '../utils/soundEffects';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-[#090b11] relative border-b-2 border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="bg-emerald-500 text-black font-bangers text-xs sm:text-sm px-2.5 py-0.5 border border-black shadow-[2px_2px_0px_#000]">
              CAREER TIMELINE
            </span>
            <span className="text-xs font-mono text-emerald-400">ISSUE #04 • PROFESSIONAL CHRONICLE</span>
          </div>

          <h2 className="font-bangers text-4xl sm:text-6xl text-white tracking-wide">
            ENTERPRISE <span className="text-emerald-400">JOURNEY</span>
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
            Proven track record delivering mission-critical applications across global consulting, academic higher education, and life sciences analytics.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-slate-700 ml-4 md:ml-32 space-y-12">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative pl-6 md:pl-8 group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-400 border-2 border-black shadow-[2px_2px_0px_#000] group-hover:scale-125 transition-transform" />

              {/* Period Date Tag on Left on Desktop */}
              <div className="md:absolute md:-left-36 md:top-0 md:w-28 md:text-right mb-2 md:mb-0">
                <span className="inline-block px-2 py-0.5 bg-slate-900 border border-slate-700 text-cyan-400 font-mono text-xs font-bold rounded">
                  {exp.period.split(' - ')[0]}
                </span>
                <span className="block text-[11px] font-mono text-slate-500 mt-0.5">
                  {exp.period.split(' - ')[1] || 'Present'}
                </span>
              </div>

              {/* Card Container */}
              <div className="bg-[#111420] border-3 border-black shadow-[6px_6px_0px_#000] p-6 hover:border-emerald-500/60 transition-colors">
                
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4">
                  <div>
                    <h3 className="font-bangers text-2xl sm:text-3xl text-white tracking-wide">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-xs font-mono text-emerald-400 font-bold">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 bg-slate-900 text-slate-300 font-mono text-xs rounded border border-slate-700">
                    {exp.type}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-4">
                  {exp.summary}
                </p>

                {/* Achievements list */}
                <div className="space-y-2 mb-5">
                  {exp.keyAchievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed font-sans">
                      <ChevronRight className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Technology chips */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-slate-900 text-slate-300 border border-slate-700 rounded text-[11px] font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-20 pt-12 border-t-2 border-slate-800">
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="w-6 h-6 text-cyan-400" />
            <h3 className="font-bangers text-3xl text-white tracking-wide">
              ACADEMIC <span className="text-cyan-400">FOUNDATIONS</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="bg-[#111420] border-2 border-black shadow-[4px_4px_0px_#000] p-5 hover:border-cyan-500/50 transition-colors"
              >
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h4 className="font-bold text-white text-base">
                    {edu.degree}
                  </h4>
                  <span className="font-mono text-xs text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800">
                    {edu.period}
                  </span>
                </div>

                <div className="text-xs font-mono text-slate-300 mb-2">
                  {edu.institution} • {edu.location}
                </div>

                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

