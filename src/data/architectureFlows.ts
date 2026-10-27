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
    name: "Clinical Vitals Review & Delegation Bypass Flow",
    summary: "How embedded Power Apps, Dataverse, Databricks, and Power Automate bypass the 1,000-record threshold while syncing live clinical evaluations.",
    businessImpact: "Accelerates clinical review cycle by 60% with instant data validation",
    steps: [
      {
        id: "step-1",
        component: "Power BI Canvas + Embedded Power App",
        category: "frontend",
        action: "Medical Reviewer launches patient cohort evaluation",
        detail: "Interactive semantic model passes selected cohort IDs into embedded Canvas App container with zero iframe overhead.",
        output: "Active Patient Array (Selected Records)"
      },
      {
        id: "step-2",
        component: "ClearCollect & Dataverse Patch Engine",
        category: "database",
        action: "Memory buffering & asynchronous patch",
        detail: "App writes batch changes into Dataverse cache utilizing chunked memory arrays, bypassing 1,000-record delegation limit.",
        output: "Synchronized Dataverse State"
      },
      {
        id: "step-3",
        component: "Power Automate HTTP Webhook",
        category: "automation",
        action: "Triggers asynchronous cloud refresh & Databricks ETL",
        detail: "Webhook fires instantly without locking user interface, dispatching batch IDs to Azure Databricks cluster.",
        output: "JSON Payload with Run Status 200"
      },
      {
        id: "step-4",
        component: "AI Builder + Azure Databricks",
        category: "ai",
        action: "Clinical risk synthesis & LLM inference",
        detail: "Databricks Spark job computes risk indicators (BMI, BP deltas) and prompts AI Builder custom LLM prompts.",
        output: "Synthesized Clinical Health Risk Queries"
      },
      {
        id: "step-5",
        component: "Azure SQL + Power BI DirectQuery",
        category: "cloud",
        action: "Instant semantic refresh",
        detail: "Target Azure SQL database ingests validated findings; Power BI report visuals refresh in near real-time.",
        output: "Updated Clinical Dashboard for Reviewers"
      }
    ]
  },
  {
    id: "ract-ingestion",
    name: "Automated Enterprise Risk (RACT) & AI Foundry Ingestion",
    summary: "Automated extraction of vendor contracts, invoice cross-referencing, and dynamic Microsoft Fabric capacity optimization.",
    businessImpact: "Saves 15+ manual hours weekly and slashes cloud compute expenses by 70%",
    steps: [
      {
        id: "step-1",
        component: "SharePoint & Email Ingestion Gateway",
        category: "frontend",
        action: "Vendor contracts & invoices received",
        detail: "Inbound PDF contracts and unstructured risk submissions arrive from vendors and department leads.",
        output: "Unstructured Document Payload"
      },
      {
        id: "step-2",
        component: "Azure AI Foundry Content Understanding",
        category: "ai",
        action: "Intelligent document parsing & OCR",
        detail: "AI Foundry models extract line items, legal terms, and pricing metrics with 95%+ confidence score.",
        output: "Normalized JSON Entities & Disparity Flags"
      },
      {
        id: "step-3",
        component: "AI Builder Risk Categorizer",
        category: "automation",
        action: "RACT risk classification",
        detail: "Custom NLP models evaluate business risk descriptions, automatically tagging severity levels.",
        output: "Risk Assessment Category Assignment"
      },
      {
        id: "step-4",
        component: "Databricks SQL MERGE Batching",
        category: "database",
        action: "Array chunked bulk write",
        detail: "Batched arrays are compiled into optimized SQL MERGE statements, executing in seconds without table locks.",
        output: "ACID Compliant Enterprise Record"
      },
      {
        id: "step-5",
        component: "KQL Alerts & Azure Logic Apps",
        category: "cloud",
        action: "Dynamic Fabric Capacity auto-scaling",
        detail: "Log Analytics monitors query volume; Logic Apps dynamically pauses or resumes Fabric capacity to prevent idle burn.",
        output: "70% Cloud Compute Cost Reduction"
      }
    ]
  },
  {
    id: "student-copilot",
    name: "Power Pages Student Portal & Copilot Studio Agent",
    summary: "Authenticated self-service portal, REST API synchronization with Destiny One, and autonomous conversational support.",
    businessImpact: "Decreased recurrent student inquiries by 83.5% and saved 48+ hours weekly in manual outreach",
    steps: [
      {
        id: "step-1",
        component: "Power Pages Authenticated Portal",
        category: "frontend",
        action: "Student signs in via Entra ID (SSO)",
        detail: "Displays personalized live course schedule, enrollment status, financial ledger, and tax receipts.",
        output: "Authenticated Student Context"
      },
      {
        id: "step-2",
        component: "Microsoft Copilot Studio Agent",
        category: "ai",
        action: "Instant conversational query resolution",
        detail: "Agent queries indexed university knowledge base, handling multi-turn FAQ questions with zero staff intervention.",
        output: "Real-time verified resolution"
      },
      {
        id: "step-3",
        component: "Cloud Flow API -> Destiny One REST API",
        category: "automation",
        action: "Synchronizes live course catalog",
        detail: "HTTP connectors query Destiny One endpoint, parse nested JSON payloads, and update Dataverse catalogs.",
        output: "Synchronized Course Offerings"
      },
      {
        id: "step-4",
        component: "Event-Driven Webhook Generator",
        category: "cloud",
        action: "Autonomous certificate generation",
        detail: "On course pass event, Power Automate renders signed PDF certificates and emails them to the student.",
        output: "Branded Digital Certificate & Grade Update"
      }
    ]
  }
];
