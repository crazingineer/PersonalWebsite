import React, { useState } from 'react';
import { Code2, Copy, Check, Terminal, FileCode2, Layers, Cpu, Database } from 'lucide-react';
import { playClick, playSuccessChime } from '../utils/soundEffects';

interface ArtifactTab {
  id: string;
  title: string;
  category: string;
  language: string;
  filename: string;
  description: string;
  code: string;
  takeaway: string;
}

export const CodeArtifactsViewer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTabId, setActiveTabId] = useState<string>('merge-sql');

  const artifacts: ArtifactTab[] = [
    {
      id: 'merge-sql',
      title: 'Databricks Atomic MERGE INTO',
      category: 'Azure Databricks SQL',
      language: 'sql',
      filename: 'Databricks_RiskCategory_Merge.sql',
      description: 'High-throughput bulk write query with strict Update-Only constraint (omits WHEN NOT MATCHED THEN INSERT) to avoid table lock contention during 20-thread parallel Power Automate batches.',
      takeaway: 'Zero row-by-row write locks; processes thousands of AI-classified risks in milliseconds.',
      code: `-- High-Throughput Risk Category Write-Back Query
-- Enforces strict Update-Only constraint at warehouse layer
MERGE INTO fcranking_encur.pdc_risk_description_with_ai_category AS target
USING (
  SELECT * FROM VALUES 
  @{body('Join')} 
  AS inner_alias(id, category, type, new_category, new_type) 
) AS source 
ON target.ID = source.id
WHEN MATCHED THEN
  UPDATE SET 
    risk_category_AI = source.category,
    risk_category_type_AI = source.type,
    risk_category_AI_new = source.new_category,
    risk_category_type_AI_new = source.new_type;
-- Note: Omission of 'WHEN NOT MATCHED THEN INSERT' guarantees zero orphan records`
    },
    {
      id: 'powerfx-integration',
      title: 'Embedded PowerBIIntegration & Role Adjudication',
      category: 'Power Fx (Canvas Apps)',
      language: 'powerfx',
      filename: 'MedicalReview_BulkEdit.pa.yaml',
      description: 'Reads host Power BI report context to detect reviewer role (Scientific vs Medical), populates memory buffer via ClearCollect, and bypasses 1,000-record delegation boundaries.',
      takeaway: 'Seamless inline adjudication inside Power BI report canvases with zero external portal jumping.',
      code: `// OnVisible trigger inside embedded Canvas App
Set(
    getStatus, 
    If(
        Trim(First([@PowerBIIntegration].Data).Role) = "Scientific Reviewer", 
        "Awaiting Scientific Review", 
        "Awaiting Medical Review"
    )
);

// Populate in-memory collection to bypass 1,000-record delegation limit
ClearCollect(
    Getdata,
    ShowColumns(
        vs_review_workflow_data,
        Role,
        Status,
        data_management_query,
        medical_query,
        medical_reviewer_comment,
        non_query_action,
        participant_id,
        project_code,
        record_id,
        scientific_reviewer_comment,
        visit_date
    )
);`
    },
    {
      id: 'monday-graphql',
      title: 'Monday.com GraphQL Upsert & Archive Gate',
      category: 'GraphQL & Power Automate',
      language: 'graphql',
      filename: 'MasterFile_To_Monday_Upsert.json',
      description: 'Dynamic GraphQL mutations with compound key resolution lower(trim(client)) || lower(trim(project)) and fail-safe Archive Sanity Gate preventing accidental mass board purge.',
      takeaway: 'Archive Sanity Gate ensures board is never wiped if a corrupted or partial file is uploaded.',
      code: `// --- 1. ARCHIVE SANITY GATE (Power Automate Expression) ---
// Condition: Only allow item archiving if file passes safety threshold
// allowArchive = (rowsRead >= 150) AND (rowsRead >= 0.8 * boardCount)

// --- 2. MONDAY.COM GRAPHQL UPSERT MUTATION ---
// Executed via HTTP Premium Connector with Bearer token
mutation ($boardId: ID!, $itemId: ID!, $columnValues: JSON!) {
  change_multiple_column_values(
    board_id: $boardId, 
    item_id: $itemId, 
    column_values: $columnValues
  ) {
    id
    name
  }
}

// --- 3. GRAPHQL CREATE MUTATION (If key does not exist) ---
mutation ($boardId: ID!, $itemName: String!, $columnValues: JSON!) {
  create_item (
    board_id: $boardId, 
    item_name: $itemName, 
    column_values: $columnValues
  ) {
    id
  }
}`
    },
    {
      id: 'chunking-polling',
      title: 'Dynamic Chunking & Asynchronous Polling',
      category: 'Power Automate Expressions',
      language: 'json',
      filename: 'BatchEngine_And_PBIRefresh.json',
      description: 'Dynamic 100-item array chunking expression with 20 parallel worker threads, coupled with asynchronous Power BI REST API 429 retry and requestId polling.',
      takeaway: 'Overcomes flow timeouts and throttles when orchestrating massive enterprise datasets.',
      code: `// --- DYNAMIC CHUNKING EXPRESSION ---
// Splits massive Databricks payload into 100-record arrays
@chunk(outputs('Execute_a_SQL_statement')?['body/result/data_array'], 100)

// Apply_to_each_Batch Configuration:
// "runtimeConfiguration": {
//   "concurrency": {
//     "repetitions": 20
//   }
// }

// --- POWER BI ASYNCHRONOUS REFRESH RETRY LOOP ---
// Do Until loop evaluating 200 or 202 status on POST /refreshes
@or(equals(variables('varStatusCode'), 202), equals(variables('varStatusCode'), 200))
// On HTTP 429 Throttling: Delay 5s, retry up to 60 times (1 hour ceiling)
// Polls GET /datasets/<id>/refreshes matching header 'requestId'`
    },
    {
      id: 'ai-foundry-tax',
      title: 'AI Foundry Content Understanding Taxonomy',
      category: 'Azure AI Foundry Ground Truth',
      language: 'markdown',
      filename: 'AIFoundry_Taxonomy_Model.md',
      description: 'Isolated Financial POC model trained on a manually annotated dataset of 20 legal contracts and 50 corresponding medical invoices to detect procedure pricing disparities.',
      takeaway: 'Achieves 95%+ confidence scores, replacing fragile legacy Python regex scripts.',
      code: `### Azure AI Foundry Content Understanding Configuration
- Model Type: Custom Document Analyzer (Ground-Truth Supervised)
- Training Corpus: 20 Contract Documents & 50 Corresponding Invoices
- Extraction Taxonomy Ground Truth:
  * Entity: Contract_Scope_Deliverables (Service Items)
  * Entity: Approved_Procedure_RateCard (Hourly / Procedure Caps)
  * Entity: Invoice_Billed_LineItems (Billed Units, Rates, Subtotals)
  * Entity: Discrepancy_ConfidenceScore (Extraction Threshold > 0.95)

Result: Programmatic cross-referencing flags billing deviations instantly, 
decreasing processing time by 50% and slashing infrastructure compute costs by 70%.`
    }
  ];

  const activeArtifact = artifacts.find((a) => a.id === activeTabId) || artifacts[0];

  const handleCopy = () => {
    playSuccessChime();
    navigator.clipboard.writeText(activeArtifact.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="code-inspector" className="py-16 sm:py-24 bg-[#080a11] relative border-b-2 border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-cyan-500 text-black font-bangers text-xs sm:text-sm px-2.5 py-0.5 border border-black shadow-[2px_2px_0px_#000]">
                PRODUCTION CODE ARTIFACTS
              </span>
              <span className="text-xs font-mono text-cyan-400">ISSUE #02.5 • ARCHITECTURAL ARTIFACTS</span>
            </div>

            <h2 className="font-bangers text-4xl sm:text-6xl text-white tracking-wide">
              SYSTEM <span className="text-cyan-400">BLUEPRINTS &amp; CODE</span>
            </h2>

            <p className="mt-3 text-slate-300 max-w-2xl text-sm sm:text-base font-sans leading-relaxed">
              Direct excerpts from actual production deliverables: Power Fx expressions, Databricks atomic MERGE queries, Monday.com GraphQL mutations, and AI Builder orchestration expressions.
            </p>
          </div>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          {artifacts.map((art) => (
            <button
              key={art.id}
              onClick={() => {
                playClick();
                setActiveTabId(art.id);
              }}
              className={`px-3.5 py-2 text-xs font-mono font-bold rounded border transition-all flex items-center gap-1.5 ${
                activeTabId === art.id
                  ? 'bg-cyan-500 text-black border-black shadow-[3px_3px_0px_#000]'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <FileCode2 className="w-3.5 h-3.5" />
              <span>{art.title}</span>
            </button>
          ))}
        </div>

        {/* Code Box Container */}
        <div className="bg-[#0f121d] border-3 border-black shadow-[8px_8px_0px_#000] rounded-lg overflow-hidden">
          
          {/* Header Bar */}
          <div className="bg-[#161a29] border-b-2 border-slate-700 p-3 sm:p-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block border border-rose-700" />
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block border border-amber-700" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block border border-emerald-700" />
              </div>
              <span className="font-mono text-xs font-bold text-white flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                {activeArtifact.filename}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-900 text-cyan-300 border border-slate-700 rounded">
                {activeArtifact.category}
              </span>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded text-xs font-mono transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY CODE</span>
                </>
              )}
            </button>
          </div>

          {/* Description Callout */}
          <div className="p-4 bg-[#121522] border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-sans">
            <p className="text-slate-300 leading-relaxed max-w-3xl">
              {activeArtifact.description}
            </p>
            <div className="bg-amber-950/40 text-amber-300 border border-amber-500/40 px-3 py-1 rounded font-mono text-[11px] shrink-0">
              ★ {activeArtifact.takeaway}
            </div>
          </div>

          {/* Code Window */}
          <div className="p-5 overflow-x-auto bg-[#07090f] font-mono text-xs text-slate-200 leading-relaxed selection:bg-cyan-500 selection:text-black">
            <pre>
              <code>{activeArtifact.code}</code>
            </pre>
          </div>

        </div>

      </div>
    </section>
  );
};

