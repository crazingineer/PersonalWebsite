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
    name: "Clinical Analytics & Review Ecosystem",
    summary: "High-level integration topology showing how Lakehouse data, AI anomaly scoring, embedded Canvas UIs, and strict database persistence interact.",
    businessImpact: "Accelerates clinical review cycle by 60% with zero orphaned database rows",
    steps: [
      {
        id: "step-1",
        component: "Enterprise Data Lakehouse",
        category: "database",
        action: "Query clinical vitals & historical delta metrics",
        detail: "Extracts newly ingested or modified participant records with percentage variance calculations against baseline observations.",
        output: "Bifurcated Clinical Data Streams"
      },
      {
        id: "step-2",
        component: "AI Builder Model Layer",
        category: "ai",
        action: "Anomaly detection & risk evaluation",
        detail: "Custom NLP models synthesize physiological parameters, isolating data quality checks from critical health risk alerts.",
        output: "Structured Health Assessment Schema"
      },
      {
        id: "step-3",
        component: "Embedded Interactive Canvas UI",
        category: "frontend",
        action: "In-report reviewer adjudication",
        detail: "Embedded directly inside Power BI reports, enabling reviewers to perform inline triage without switching applications.",
        output: "Validated Reviewer Verdict Payload"
      },
      {
        id: "step-4",
        component: "Strict Persistence Gateway",
        category: "database",
        action: "Defensive update-only persistence",
        detail: "Lookup-verified patch pipeline enforcing an immutable constraint: only updates existing participant records, strictly blocking orphan inserts.",
        output: "ACID-Compliant State Sync"
      },
      {
        id: "step-5",
        component: "Power BI Semantic Orchestrator",
        category: "cloud",
        action: "Asynchronous REST API dataset refresh",
        detail: "Automates semantic model cache invalidation with exponential backoff retry loops on API throttling and status polling.",
        output: "Live Synchronized Executive Visuals"
      }
    ]
  },
  {
    id: "monday-upsert-pipeline",
    name: "Cross-Platform Enterprise Data Sync & Sanity Gate",
    summary: "Architectural blueprint of weekly master file synchronization with collaboration boards via GraphQL and defensive deletion sanity gates.",
    businessImpact: "100% automated board synchronization with bulletproof deletion safeguards",
    steps: [
      {
        id: "step-1",
        component: "Master Repository Scanner",
        category: "automation",
        action: "Identify latest master revision",
        detail: "Scans cloud storage directory, evaluates filename date metadata, and binds the newest master revision for synchronization.",
        output: "Active Revision Pointer"
      },
      {
        id: "step-2",
        component: "Composite Key Matching Engine",
        category: "database",
        action: "Entity resolution & date normalization",
        detail: "Generates multi-attribute composite keys to uniquely identify projects across disparate systems and standardizes serial dates.",
        output: "Unique Entity Registry"
      },
      {
        id: "step-3",
        component: "GraphQL Cursor Paginator",
        category: "cloud",
        action: "Retrieve live board snapshot",
        detail: "Queries target board using cursor-based pagination over GraphQL API, retrieving current items while respecting rate boundaries.",
        output: "Paginated Board Snapshot"
      },
      {
        id: "step-4",
        component: "Archive Sanity Threshold Gate",
        category: "automation",
        action: "Defensive volume & ratio verification",
        detail: "Evaluates minimum volume and board retention ratio: if source rows drop below safety threshold, mass deletion is blocked and alerts dispatch.",
        output: "Sanity Gate Clearance"
      },
      {
        id: "step-5",
        component: "Rate-Controlled Mutation Engine",
        category: "cloud",
        action: "Execute upserts & controlled archives",
        detail: "Executes batch column updates for existing items, creates missing records, and safely archives dropped items under strict rate limits.",
        output: "Target Board Reconciled"
      }
    ]
  },
  {
    id: "ract-ingestion",
    name: "High-Throughput Risk Classification & Capacity Scaling",
    summary: "Massive scale batch processing architecture utilizing dynamic chunking, parallel AI inference threads, and cloud capacity auto-scaling.",
    businessImpact: "20x higher throughput, 15+ hours saved weekly, and 70% cloud compute savings",
    steps: [
      {
        id: "step-1",
        component: "Enterprise Risk Repository",
        category: "database",
        action: "Ingest unstructured risk descriptions",
        detail: "Extracts thousands of unclassified operational and project risk descriptions awaiting standardized taxonomy tagging.",
        output: "Raw Unclassified Risk Stream"
      },
      {
        id: "step-2",
        component: "Dynamic Chunking Engine",
        category: "automation",
        action: "Partition payload into sub-arrays",
        detail: "Splits bulk records into optimized 100-item chunks, preventing memory bottlenecks and API timeout constraints.",
        output: "Chunked Array Matrix (100 items/chunk)"
      },
      {
        id: "step-3",
        component: "Parallel AI Worker Pool (20 Threads)",
        category: "ai",
        action: "Concurrent model inference",
        detail: "Orchestrates 20 parallel execution threads to evaluate categorized risk severities simultaneously across model endpoints.",
        output: "Classified Multi-Thread Matrix"
      },
      {
        id: "step-4",
        component: "Atomic Bulk Write-Back",
        category: "database",
        action: "Non-locking merge execution",
        detail: "Compacts evaluated arrays into atomic database merge statements that update matched records without table lock contention.",
        output: "Bulk Records Committed in Milliseconds"
      },
      {
        id: "step-5",
        component: "Dynamic Cloud Capacity Auto-Scaler",
        category: "cloud",
        action: "Scale compute resources on demand",
        detail: "KQL query alerts monitor pipeline activity; Logic Apps scale cloud capacity up during runs and pause idle compute, saving 70%.",
        output: "70% Cloud Compute Cost Optimization"
      }
    ]
  }
];
