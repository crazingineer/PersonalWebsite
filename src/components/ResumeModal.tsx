import React from 'react';
import { X, Printer, Mail, Phone } from 'lucide-react';
import { LinkedInIcon } from './BrandIcons';
import { personalInfo, experienceData, educationData, technicalProjects } from '../data/resumeData';
import { playClick } from '../utils/soundEffects';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0f121d] border-3 border-black shadow-[10px_10px_0px_#000] rounded-lg max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Top Header Controls Bar */}
        <div className="bg-[#161a29] border-b-2 border-slate-700 p-3 sm:p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bangers text-xl text-white">RESUME PREVIEW</span>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
              SHUBHAM YADAV
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold bg-cyan-500 text-black border border-black shadow-[2px_2px_0px_#000] rounded hover:bg-cyan-400"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / SAVE PDF</span>
            </button>

            <button
              onClick={() => {
                playClick();
                onClose();
              }}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded border border-slate-700"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-200 font-sans text-xs sm:text-sm print:bg-white print:text-black">
          
          {/* Masthead */}
          <div className="text-center border-b border-slate-800 pb-5">
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
              {personalInfo.name}
            </h1>
            <p className="text-cyan-400 font-semibold mt-1">
              {personalInfo.title}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-xs text-slate-400 mt-2 font-mono">
              <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {personalInfo.phone}</span>
              <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {personalInfo.email}</span>
              <span className="flex items-center gap-1"><LinkedInIcon className="w-3 h-3" /> {personalInfo.linkedin}</span>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-sm font-bold text-amber-400 uppercase tracking-wider border-b border-slate-800 pb-1 mb-2 font-mono">
              Technical Skills &amp; Certifications
            </h2>
            <div className="space-y-1 text-xs">
              <p><strong>Power Platform &amp; AI:</strong> Power Apps, Power Automate, Power Automate Desktop (RPA), Power BI, Dataverse, Power Fx, Copilot Studio, AI Builder, Azure AI Foundry</p>
              <p><strong>Cloud, Database &amp; Data Engineering:</strong> Azure Databricks, Azure Functions, Logic Apps, Azure SQL, FAISS Vector Stores, Microsoft Fabric</p>
              <p><strong>SharePoint &amp; Migration:</strong> SharePoint Online, SPFx, PnP Framework, ShareGate, Nintex Workflows</p>
              <p><strong>Languages:</strong> C#, Python, JavaScript/TypeScript (React, JSX), HTML/CSS, XML, PowerShell, SQL</p>
              <p className="text-cyan-400 font-semibold">
                <strong>Certifications:</strong> PL-600, PL-400, AZ-204, PL-900, MS-900, AZ-900, AI-900, SC-900
              </p>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-sm font-bold text-amber-400 uppercase tracking-wider border-b border-slate-800 pb-1 mb-3 font-mono">
              Professional Experience
            </h2>
            <div className="space-y-4">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-baseline font-bold text-white text-xs sm:text-sm">
                    <span>{exp.company} — <span className="font-normal text-slate-300">{exp.role}</span></span>
                    <span className="font-mono text-xs text-cyan-400">{exp.period}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">{exp.location}</div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-300 mt-1">
                    {exp.keyAchievements.map((ach, aIdx) => (
                      <li key={aIdx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-sm font-bold text-amber-400 uppercase tracking-wider border-b border-slate-800 pb-1 mb-3 font-mono">
              Technical Projects
            </h2>
            <div className="space-y-3">
              {technicalProjects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex justify-between items-baseline font-bold text-white text-xs">
                    <span>{proj.title} <span className="font-normal text-slate-400">| {proj.stack.join(', ')}</span></span>
                    <span className="font-mono text-[11px] text-cyan-400">{proj.period}</span>
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-0.5 text-xs text-slate-300">
                    {proj.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-bold text-amber-400 uppercase tracking-wider border-b border-slate-800 pb-1 mb-2 font-mono">
              Education
            </h2>
            <div className="space-y-2">
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start text-xs">
                  <div>
                    <div className="font-bold text-white">{edu.institution} — {edu.location}</div>
                    <div className="text-slate-400">{edu.degree}</div>
                  </div>
                  <div className="font-mono text-cyan-400">{edu.period}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
