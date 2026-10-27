import React from 'react';
import { X, Download, ExternalLink, Printer, FileText } from 'lucide-react';
import { personalInfo, experienceData, educationData, technicalProjects } from '../data/resumeData';
import { playClick } from '../utils/soundEffects';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0f121d] border-2 border-slate-700 shadow-[12px_12px_0px_#000] rounded-xl max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Top Header Controls Bar */}
        <div className="bg-[#151928] border-b border-slate-700 p-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="font-bangers text-2xl text-white">OFFICIAL RESUME</span>
            <span className="text-xs font-mono text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-800">
              SHUBHAM YADAV
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Direct Official PDF Download Button */}
            <a
              href="./Shubham_Yadav_Resume.pdf"
              download="Shubham_Yadav_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClick()}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-bold bg-cyan-500 hover:bg-cyan-400 text-black border-2 border-black shadow-[2px_2px_0px_#000] rounded transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD OFFICIAL PDF</span>
            </a>

            {/* Open In New Tab */}
            <a
              href="./Shubham_Yadav_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClick()}
              className="p-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                playClick();
                onClose();
              }}
              className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded border border-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body: Direct PDF Embed + Formatted Fallback */}
        <div className="overflow-y-auto flex-grow flex flex-col p-4 sm:p-6 bg-[#090b12]">
          
          {/* PDF Viewer Embed Container */}
          <div className="w-full h-[65vh] rounded-lg overflow-hidden border border-slate-800 bg-slate-900">
            <iframe 
              src="./Shubham_Yadav_Resume.pdf#toolbar=1" 
              className="w-full h-full border-0"
              title="Shubham Yadav Resume"
            />
          </div>

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800/80">
            <span>Official verified resume document (PDF)</span>
            <a
              href="./Shubham_Yadav_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1"
            >
              <span>Having trouble viewing? Click to open full PDF directly</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
