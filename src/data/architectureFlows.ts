export interface ArchitectureStep {
  id: string;
  component: string;
  category: 'frontend' | 'automation' | 'ai' | 'database' | 'cloud';
  action: string;
  detail: string;
  output: string;
}

export interface ArchitectureFlow {
  id: string;
  name: string;
  summary: string;
  businessImpact: string;
  steps: ArchitectureStep[];
}

export const architectureFlows: ArchitectureFlow[] = [
  {
    id: "clinical-pipeline",
    name: "Medical Review AI Orchestrator & Persistence Flow",
    summary: "How embedded Power Apps, Dataverse, Databricks, and AI Builder execute clinical adjudication with an immutable Update-Only constraint in Azure SQL.",
    businessImpact: "Accelerates clinical review cycle by 60% with zero orphaned database rows",
    steps: [
      {
        id: "step-1",
        component: "Databricks Warehouse Extraction",
        category: "database",
        action: "Query changed clinical vitals with delta metrics",
        detail: "Executes SQL on iep_dev.fcranking_encur.vs_current_clinical_data WHERE row_status IN ('New', 'Changed'), extracting vitals, BMI, BP, and delta percentages from prior visits using @coalesce().",
        output: "Bifurcated Clinical Data Array"
      },
      {
        id: "step-2",
        component: "AI Builder Custom Prompt (aibuilderpredict)",
        category: "ai",
        action: "Clinical anomaly detection & risk synthesis",
        detail: "Custom prompt acts as Clinical Medical Reviewer, segregating outputs into dm_query (data quality/impossibilities) and medical_query (risk flags, BP shifts, weight increase >10%).",
        output: "Schema-Validated JSON (ParseJson)"
      },
      {
        id: "step-3",
        component: "Embedded Canvas App ([@PowerBIIntegration].Data)",
        category: "frontend",
        action: "Inline reviewer adjudication",
        detail: "Power BI passes contextual reviewer role; Canvas App sets dynamic state (Awaiting Scientific Review vs Awaiting Medical Review) and populates in-memory ClearCollect buffer.",
        output: "Adjudicated Reviewer Action Payload"
      },
      {
        id: "step-4",
        component: "Azure SQL Strict Persistence Layer",
        category: "database",
        action: "Immutable Update-Only (Failsafe Constraint)",
        detail: "Performs GetItems_V2 lookup ($filter=\"record_id eq '<id>'\"). Only matched records proceed to PatchItem_V2. Strict architectural failsafe prevents any PostItem_V2 inserts.",
        output: "Patched Clinical Records (Zero Orphan Rows)"
      },
      {
        id: "step-5",
        component: "Power BI Dataset Refresh Poller",
        category: "cloud",
        action: "Asynchronous REST API polling",
        detail: "Dispatches POST to /datasets/<id>/refreshes with retry handling on 429 throttling (Do until status 200/202). Polls /refreshes matching requestId header across top 60 history items.",
        output: "Power BI Dashboard Synchronized"
      }
    ]
  },
  {
    id: "monday-upsert-pipeline",
    name: "Monday.com GraphQL Upsert & Archive Sanity Engine",
    summary: "Automated OneDrive Excel synchronization with Monday.com GraphQL API, composite key upserts, and an Archive Sanity Gate preventing mass data purge.",
    businessImpact: "100% automated weekly board sync with bulletproof deletion safeguards",
    steps: [
      {
        id: "step-1",
        component: "OneDrive File Version Resolver",
        category: "automation",
        action: "Scan & identify latest MasterList workbook",
        detail: "Lists files matching MasterList_*.xlsx in OneDrive folder, parses yyyymmdd date suffix, and binds the latest file ID and name for processing.",
        output: "Latest MasterList File Pointer"
      },
      {
        id: "step-2",
        component: "Composite Key Generator",
        category: "database",
        action: "Build composite keys & normalize dates",
        detail: "Reads Table1 rows; generates composite key lower(trim(client)) || lower(trim(project)); auto-converts Excel serial date numbers (e.g., 46193) into standardized YYYY-MM-DD.",
        output: "Normalized Unique Entity Array"
      },
      {
        id: "step-3",
        component: "Monday.com GraphQL Cursor Paginator",
        category: "cloud",
        action: "Fetch live board items via GraphQL",
        detail: "Queries Monday.com GraphQL API endpoint with Bearer auth; paginates through entire board using cursor navigation to retrieve live item IDs and column values.",
        output: "Paginated Board Snapshot (varExisting)"
      },
      {
        id: "step-4",
        component: "Archive Sanity Gate Safety Check",
        category: "automation",
        action: "Validate deletion threshold before archiving",
        detail: "allowArchive = (rowsRead >= 150) AND (rowsRead >= 0.8 * boardCount). If sanity check fails, aborts archive phase and dispatches automated Outlook alert.",
        output: "Sanity Gate Verdict: TRUE/FALSE"
      },
      {
        id: "step-5",
        component: "GraphQL Upsert & Archive Mutations",
        category: "cloud",
        action: "Execute rate-limited GraphQL mutations",
        detail: "Executes mutation change_multiple_column_values for matches, create_item for new rows, and mutation archive_item for dropped rows (concurrency 1, max 150 req/min).",
        output: "Board Fully Reconciled"
      }
    ]
  },
  {
    id: "ract-ingestion",
    name: "High-Throughput Risk Category Generator (RACT)",
    summary: "Batch processing pipeline chunking records into parallel worker threads and writing to Databricks using atomic MERGE INTO statements.",
    businessImpact: "20x higher throughput and saves 15+ manual hours weekly",
    steps: [
      {
        id: "step-1",
        component: "Databricks Risk Source Extraction",
        category: "database",
        action: "Query unprocessed risk descriptions",
        detail: "Pulls unclassified risk descriptions from Databricks warehouse in high-volume arrays.",
        output: "Raw Unclassified Risk Records"
      },
      {
        id: "step-2",
        component: "Dynamic Chunking Expression Engine",
        category: "automation",
        action: "@chunk(data_array, 100) Partitioning",
        detail: "Batches massive record arrays into 100-item sub-arrays to optimize memory footprint and prevent API call throttling.",
        output: "Chunked Array Matrix (100 items/chunk)"
      },
      {
        id: "step-3",
        component: "Parallel Concurrency Controller (20 Threads)",
        category: "automation",
        action: "Simultaneous AI Builder inference",
        detail: "Executes Apply_to_each_Batch loop configured with 20 parallel threads (repetitions: 20), routing batches into AI Builder custom prompts concurrently.",
        output: "Multi-threaded AI Taxonomy Classifications"
      },
      {
        id: "step-4",
        component: "Select & Join Matrix Compaction",
        category: "automation",
        action: "Payload restructuring for bulk SQL",
        detail: "Power Automate Select action maps AI outputs into row tuples; Join action concatenates tuples into an atomic SQL VALUE block.",
        output: "Formatted SQL VALUES String"
      },
      {
        id: "step-5",
        component: "Atomic Databricks MERGE INTO Execution",
        category: "database",
        action: "Bulk update without database table locks",
        detail: "Executes MERGE INTO target USING (SELECT * FROM VALUES ...) ON target.ID = source.id WHEN MATCHED THEN UPDATE SET ... (Omits INSERT clause for strict update-only).",
        output: "Thousands of Records Updated in Milliseconds"
      }
    ]
  },
  {
    id: "ai-foundry-financial-poc",
    name: "Azure AI Foundry Contract & Invoice Audit POC",
    summary: "Automated financial compliance system cross-referencing invoice line items against contractual rate cards and master service agreements.",
    businessImpact: "95%+ extraction confidence and 50% faster compliance audit cycle",
    steps: [
      {
        id: "step-1",
        component: "Multi-Format Document Ingestion",
        category: "frontend",
        action: "Inbound vendor contracts & medical invoices",
        detail: "Ingests scanned PDFs, digital invoices, and multi-page master service agreements (MSAs) into Azure Blob Storage.",
        output: "Unstructured Document Stream"
      },
      {
        id: "step-2",
        component: "Custom Trained Analyzer (AI Foundry)",
        category: "ai",
        action: "Domain-specific OCR & Content Understanding",
        detail: "Custom model trained on 20 contracts and 50 invoices extracts billing terms, hourly rates, medical procedure codes, and milestone schedules.",
        output: "Structured Ground-Truth Entities (>95% Confidence)"
      },
      {
        id: "step-3",
        component: "Disparity & Rate Card Cross-Referencing",
        category: "cloud",
        action: "Automated billing reconciliation",
        detail: "Cross-references extracted invoice line items against governing contract pricing tiers to detect overbilling, unauthorized items, and rate deviations.",
        output: "Discrepancy Audit Flag Matrix"
      },
      {
        id: "step-4",
        component: "Compliance Reporting & Automated Dispatch",
        category: "automation",
        action: "Exception triage & auditor dashboard",
        detail: "Replaces brittle legacy Python regex scripts, delivering automated discrepancy summaries directly to financial auditors.",
        output: "Verified Audit Clearance / Disparity Flag"
      }
    ]
  }
];
