import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, Trash2 } from 'lucide-react';
import { personalInfo, certifications, enterpriseCaseStudies, technicalProjects, experienceData } from '../data/resumeData';
import { playTerminalKey, playSuccessChime, playClick } from '../utils/soundEffects';

interface TerminalLog {
  id: string;
  command?: string;
  output: React.ReactNode;
  isError?: boolean;
}

export const InteractiveTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const initialLogs: TerminalLog[] = [
    {
      id: 'boot-1',
      output: (
        <div className="space-y-1 text-slate-300">
          <div className="text-cyan-400 font-bold">SHUBHAM YADAV // ENTERPRISE CLI ENGINE v2.7.0 [INITIALIZED]</div>
          <div className="text-slate-400">Master of Applied Computing | Power Platform Solution Architect (PL-600)</div>
          <div className="text-amber-400 font-semibold pt-1">
            Type <span className="underline font-bold text-white">help</span> to view available commands, or click the shortcuts below.
          </div>
        </div>
      )
    }
  ];

  const [logs, setLogs] = useState<TerminalLog[]>(initialLogs);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    playTerminalKey();
    setHistory((prev) => [...prev, rawCmd]);
    setHistoryIndex(-1);

    let outputNode: React.ReactNode;
    let isError = false;

    switch (cmd) {
      case 'help':
        outputNode = (
          <div className="space-y-2 text-slate-300">
            <div className="text-cyan-400 font-bold border-b border-slate-700 pb-1">AVAILABLE COMMANDS:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 font-mono text-xs">
              <div><span className="text-amber-300 font-bold">about</span> - Background, education & summary</div>
              <div><span className="text-amber-300 font-bold">case-studies</span> - Enterprise architectures</div>
              <div><span className="text-amber-300 font-bold">monday</span> - Monday.com GraphQL & Sanity Gate</div>
              <div><span className="text-amber-300 font-bold">medical</span> - Clinical Review AI Orchestrator</div>
              <div><span className="text-amber-300 font-bold">poc</span> - AI Foundry Financial POC</div>
              <div><span className="text-amber-300 font-bold">projects</span> - AI & Machine Learning projects</div>
              <div><span className="text-amber-300 font-bold">experience</span> - KPI Partners, WLU & Accenture</div>
              <div><span className="text-amber-300 font-bold">certs</span> - All 8 Microsoft certifications</div>
              <div><span className="text-amber-300 font-bold">skills</span> - Stack: Power Platform, Azure, Databricks</div>
              <div><span className="text-amber-300 font-bold">code</span> - Jump to Production Code Inspector</div>
              <div><span className="text-amber-300 font-bold">contact</span> - Reach out via email & LinkedIn</div>
              <div><span className="text-amber-300 font-bold">cat</span> - Homage to Harley the cat</div>
              <div><span className="text-amber-300 font-bold">clear</span> - Clear the terminal output</div>
            </div>
          </div>
        );
        break;

      case 'monday':
        outputNode = (
          <div className="space-y-2 text-xs text-slate-300">
            <div className="text-cyan-400 font-bold">MONDAY.COM GRAPHQL UPSERT & ARCHIVE SANITY ENGINE:</div>
            <div>• <strong className="text-amber-300">Source:</strong> MasterList_yyyymmdd.xlsx in OneDrive, dynamic date parsing for latest version.</div>
            <div>• <strong className="text-cyan-300">Unique Key:</strong> Composite lower(trim(client)) || lower(trim(project)).</div>
            <div>• <strong className="text-emerald-300">Mutations:</strong> change_multiple_column_values (update), create_item (insert).</div>
            <div>• <strong className="text-rose-400 font-bold">Archive Sanity Gate:</strong> allowArchive = (rowsRead &gt;= 150) AND (rowsRead &gt;= 0.8 * boardCount). Prevents mass accidental deletion.</div>
            <div>• <strong className="text-purple-300">Rate Limiting:</strong> 150 req/min with cursor-based pagination and Try-Catch Outlook alerts.</div>
          </div>
        );
        break;

      case 'medical':
        outputNode = (
          <div className="space-y-2 text-xs text-slate-300">
            <div className="text-cyan-400 font-bold">MEDICAL REVIEW AI ORCHESTRATOR & PERSISTENCE:</div>
            <div>• <strong className="text-amber-300">Databricks Query:</strong> Extracts vs_current_clinical_data where row_status IN ('New', 'Changed') with percentage delta metrics.</div>
            <div>• <strong className="text-cyan-300">AI Builder Prompt:</strong> Generates bifurcated JSON schema: dm_query (data quality) and medical_query (risk flags, BP shifts, weight increase &gt;10%).</div>
            <div>• <strong className="text-emerald-300">Strict Persistence:</strong> GetItems_V2 lookup -&gt; PatchItem_V2 only. Absolute rule: ZERO new records created (no orphan rows).</div>
            <div>• <strong className="text-purple-300">PowerBIIntegration:</strong> Canvas App embedded in Power BI report for inline adjudication.</div>
          </div>
        );
        break;

      case 'poc':
        outputNode = (
          <div className="space-y-2 text-xs text-slate-300">
            <div className="text-cyan-400 font-bold">AZURE AI FOUNDRY FINANCIAL POC:</div>
            <div>• <strong className="text-amber-300">Objective:</strong> Automated cross-referencing of medical invoices vs governing contracts.</div>
            <div>• <strong className="text-cyan-300">Training Corpus:</strong> Custom analyzer trained on 20 contracts and 50 corresponding invoices.</div>
            <div>• <strong className="text-emerald-300">Accuracy & ROI:</strong> &gt;95% confidence score, 50% faster processing, 70% compute cost savings.</div>
          </div>
        );
        break;

      case 'about':
        outputNode = (
          <div className="space-y-2 text-slate-300">
            <div className="text-cyan-400 font-bold text-sm">{personalInfo.name} — {personalInfo.title}</div>
            <div className="text-slate-300 text-xs leading-relaxed">{personalInfo.summary}</div>
            <div className="pt-2 text-xs">
              <span className="text-amber-400 font-semibold">Education:</span>
              <ul className="list-disc list-inside text-slate-400 mt-1 space-y-0.5">
                <li>Master of Applied Computing, Wilfrid Laurier University (Waterloo, ON)</li>
                <li>Bachelor of Computer Engineering, Pune University (Pune, MH)</li>
              </ul>
            </div>
          </div>
        );
        break;

      case 'case-studies':
      case 'cases':
        outputNode = (
          <div className="space-y-3">
            <div className="text-cyan-400 font-bold">ENTERPRISE CASE STUDIES (BLUEPRINTS):</div>
            {enterpriseCaseStudies.map((study) => (
              <div key={study.id} className="p-2.5 bg-slate-900/80 border border-slate-800 rounded space-y-1 text-xs">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-white">{study.title}</span>
                  <span className="text-cyan-400 text-[10px] font-mono">{study.timeline}</span>
                </div>
                <div className="text-slate-400">{study.challenge}</div>
                <div className="text-amber-400 font-semibold">Triumph: {study.keyEngineeringTriumph}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'code':
        outputNode = (
          <div className="text-xs text-cyan-300">
            Navigating to Production Code Inspector... (Or scroll down to Section #02.5)
          </div>
        );
        setTimeout(() => {
          document.getElementById('code-inspector')?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-3">
            <div className="text-cyan-400 font-bold">TECHNICAL & MACHINE LEARNING PROJECTS:</div>
            {technicalProjects.map((p) => (
              <div key={p.id} className="p-2.5 bg-slate-900/80 border border-slate-800 rounded space-y-1 text-xs">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-amber-300">{p.title}</span>
                  <span className="text-slate-400 text-[10px]">{p.period}</span>
                </div>
                <div className="text-slate-300">{p.overview}</div>
                {p.evaluationMetric && (
                  <div className="text-emerald-400 font-mono font-bold text-[11px]">Metric: {p.evaluationMetric}</div>
                )}
                <div className="text-slate-400 text-[10px]">Stack: {p.stack.join(', ')}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
        outputNode = (
          <div className="space-y-3">
            <div className="text-cyan-400 font-bold">PROFESSIONAL CHRONICLE:</div>
            {experienceData.map((exp, idx) => (
              <div key={idx} className="p-2.5 bg-slate-900/80 border border-slate-800 rounded space-y-1 text-xs">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-white">{exp.role} @ {exp.company}</span>
                  <span className="text-slate-400 text-[10px]">{exp.period}</span>
                </div>
                <div className="text-slate-400 text-[11px]">{exp.location} • {exp.type}</div>
                <div className="text-slate-300">{exp.summary}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'certs':
      case 'certifications':
        playSuccessChime();
        outputNode = (
          <div className="space-y-2">
            <div className="text-cyan-400 font-bold">8 ACTIVE MICROSOFT CERTIFICATIONS:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certifications.map((c) => (
                <div key={c.code} className="p-2 bg-slate-900/80 border border-slate-800 rounded flex items-start gap-2">
                  <span className="px-1.5 py-0.5 bg-cyan-950 text-cyan-400 font-bold font-mono text-[11px] border border-cyan-800 rounded">
                    {c.code}
                  </span>
                  <div>
                    <div className="font-bold text-slate-200">{c.name}</div>
                    <div className="text-[10px] text-slate-400">{c.category} Level • Microsoft</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-2 text-xs">
            <div className="text-cyan-400 font-bold">TECHNICAL SKILLSET SUMMARY:</div>
            <div><strong className="text-amber-400">Power Platform:</strong> Power Apps (Canvas &amp; Embedded), Power Automate, Power Automate Desktop (RPA), Dataverse, Power BI REST API, Copilot Studio, AI Builder, Power Fx.</div>
            <div><strong className="text-cyan-400">Azure & Data:</strong> Azure Databricks (SQL &amp; Spark), Azure AI Foundry Content Understanding, Logic Apps, Azure Functions, Azure SQL, Monday.com GraphQL.</div>
            <div><strong className="text-emerald-400">SharePoint & Migration:</strong> SharePoint Online, SPFx, PnP Framework, ShareGate, Nintex Migrations.</div>
            <div><strong className="text-purple-400">Languages & Tools:</strong> C#, Python (Flask, Pandas, scikit-learn), JavaScript/TypeScript (React), SQL, PowerShell, Git, Jira.</div>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-2 text-xs text-slate-300">
            <div className="text-cyan-400 font-bold">GET IN TOUCH:</div>
            <div>📧 Email: <a href={`mailto:${personalInfo.email}`} className="text-amber-300 underline">{personalInfo.email}</a></div>
            <div>💼 LinkedIn: <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-cyan-300 underline">{personalInfo.linkedin}</a></div>
            <div>📞 Phone: <span className="text-slate-300">{personalInfo.phone}</span></div>
            <div>📍 Base: <span className="text-slate-300">{personalInfo.location}</span></div>
          </div>
        );
        break;

      case 'cat':
        playSuccessChime();
        outputNode = (
          <div className="p-3 bg-amber-950/40 border border-amber-500/50 rounded text-xs space-y-1 text-amber-200">
            <div className="font-bold text-amber-400">🐾 EASTER EGG UNLOCKED: HARLEY SAYS HI!</div>
            <div className="font-mono text-[11px] leading-relaxed">
              {" /\\_/\\  \n( o.o )  *purrs approvingly at your Monday.com GraphQL flows*\n > ^ <   \"Archive Sanity Gate is holding strong: rowsRead >= 150 & 80% board count verified!\""}
            </div>
          </div>
        );
        break;

      case 'clear':
        setLogs([]);
        return;

      default:
        isError = true;
        outputNode = (
          <div className="text-rose-400 text-xs">
            Command not recognized: <span className="font-bold text-white">{cmd}</span>. Type <button onClick={() => handleCommand('help')} className="underline font-bold text-cyan-300">help</button> to see the list of valid commands.
          </div>
        );
        break;
    }

    setLogs((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: rawCmd,
        output: outputNode,
        isError
      }
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(inputVal);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      if (history.length > 0) {
        const nextIndex = historyIndex + 1 < history.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIndex);
        setInputVal(history[history.length - 1 - nextIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInputVal(history[history.length - 1 - nextIndex] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  const commandButtons = ['about', 'monday', 'medical', 'poc', 'case-studies', 'code', 'certs', 'skills', 'experience', 'cat'];

  return (
    <section id="terminal-section" className="py-12 bg-[#090b11] border-b-2 border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Terminal Header Bar */}
        <div className="bg-[#121520] border-2 border-slate-700 rounded-t-lg p-3 flex flex-wrap items-center justify-between gap-3 shadow-[4px_4px_0px_#000]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block border border-rose-700" />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block border border-amber-700" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block border border-emerald-700" />
            </div>
            <span className="text-xs font-mono font-bold text-slate-300 ml-2 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              sy-operator@production-console:~
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
              Interactive Dev Deck
            </span>
            <button
              onClick={() => {
                playClick();
                setLogs([]);
              }}
              className="text-xs font-mono text-slate-400 hover:text-rose-400 flex items-center gap-1 px-2 py-0.5 rounded hover:bg-slate-800 transition-colors"
              title="Clear Terminal"
            >
              <Trash2 className="w-3 h-3" />
              <span>Clear</span>
            </button>
          </div>
        </div>

        {/* Terminal Screen Body */}
        <div className="bg-[#06070a] border-x-2 border-b-2 border-slate-700 rounded-b-lg p-4 sm:p-6 font-mono text-xs shadow-[6px_6px_0px_#000] relative overflow-hidden min-h-[340px] max-h-[500px] flex flex-col justify-between scanlines">
          
          {/* Scrollable logs area */}
          <div className="overflow-y-auto space-y-4 pr-1 mb-4 flex-grow">
            {logs.map((log) => (
              <div key={log.id} className="space-y-1.5">
                {log.command && (
                  <div className="flex items-center gap-2 text-cyan-400 font-bold">
                    <span className="text-amber-400 font-mono">&gt;</span>
                    <span>{log.command}</span>
                  </div>
                )}
                <div className="pl-4 border-l-2 border-slate-800 text-slate-200">
                  {log.output}
                </div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Prompt Input Form */}
          <div className="border-t border-slate-800/90 pt-3">
            <div className="flex items-center gap-2 bg-[#0d1017] border border-slate-700 rounded px-3 py-2 focus-within:border-cyan-400 transition-colors">
              <span className="text-emerald-400 font-bold font-mono">&gt;</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a command (e.g. 'monday', 'medical', 'code', 'poc', 'certs')..."
                className="w-full bg-transparent text-slate-100 font-mono text-xs focus:outline-none placeholder:text-slate-500"
              />
              <button
                onClick={() => {
                  handleCommand(inputVal);
                  setInputVal('');
                }}
                className="text-cyan-400 hover:text-cyan-300 p-1"
                aria-label="Send command"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quick command clickable chips */}
            <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-2">
              <span className="text-[11px] text-slate-500 font-mono">Quick CLI Run:</span>
              {commandButtons.map((btn) => (
                <button
                  key={btn}
                  onClick={() => handleCommand(btn)}
                  className="px-2 py-0.5 bg-slate-900 hover:bg-cyan-950 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/50 rounded text-[10px] font-mono transition-colors"
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
