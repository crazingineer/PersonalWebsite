import { Certification, EnterpriseCaseStudy, ExperienceItem, EducationItem, SkillCategory, TechnicalProject } from '../types';

export const personalInfo = {
  name: "Shubham Yadav",
  title: "Power Platform Solution Architect & Data/AI Engineer",
  tagline: "Bridging Enterprise Automation, Azure Cloud Data Pipelines & GenAI Solutions.",
  email: "shubhambhagwatyadav@gmail.com",
  phone: "+91 7276085461",
  linkedin: "https://linkedin.com/in/shubhambhagwatyadav",
  github: "https://github.com/shubhambhagwatyadav",
  location: "Waterloo, ON / Pune, MH",
  availability: "Open to High-Impact Roles & Consulting",
  summary: "Results-driven Power Platform Solution Architect (PL-600) and Cloud Data Engineer with extensive experience engineering enterprise low-code systems, deep Azure integrations, automated ETL pipelines, and GenAI-powered workflows. Specialized in bypassing delegation boundaries, orchestrating high-throughput Databricks SQL MERGE pipelines, GraphQL API sync engines with sanity gates, and establishing Center of Excellence (CoE) governance across healthcare, banking, and academic domains.",
  quickStats: [
    { label: "Clinical Review Speedup", value: "60%" },
    { label: "Weekly Hours Saved", value: "63+ hrs" },
    { label: "Data Extraction Accuracy", value: "95%+" },
    { label: "Microsoft Certifications", value: "8 Active" },
  ]
};

export const certifications: Certification[] = [
  {
    code: "PL-600",
    name: "Microsoft Power Platform Solution Architect",
    issuer: "Microsoft",
    category: "Architect",
    badgeColor: "border-cyan-500 text-cyan-400 bg-cyan-950/40",
    description: "Expert validation in architecting enterprise topologies, Dataverse data modeling, security, ALM lifecycle, and system integration patterns."
  },
  {
    code: "PL-400",
    name: "Microsoft Power Platform Developer",
    issuer: "Microsoft",
    category: "Developer",
    badgeColor: "border-blue-500 text-blue-400 bg-blue-950/40",
    description: "Deep technical capability across custom PCF controls, Power FX expressions, Azure Functions webhooks, and complex Dataverse APIs."
  },
  {
    code: "AZ-204",
    name: "Developing Solutions for Microsoft Azure",
    issuer: "Microsoft",
    category: "Cloud",
    badgeColor: "border-indigo-500 text-indigo-400 bg-indigo-950/40",
    description: "Cloud-native compute, Azure Functions, Logic Apps, Cosmos DB, Azure Blob/Storage, and containerized microservice architectures."
  },
  {
    code: "AI-900",
    name: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    category: "AI",
    badgeColor: "border-purple-500 text-purple-400 bg-purple-950/40",
    description: "Foundational mastery of cognitive services, Azure AI Foundry, machine learning pipelines, and responsible generative AI."
  },
  {
    code: "SC-900",
    name: "Microsoft Security, Compliance, and Identity",
    issuer: "Microsoft",
    category: "Fundamentals",
    badgeColor: "border-emerald-500 text-emerald-400 bg-emerald-950/40",
    description: "Enterprise Zero Trust, Microsoft Entra ID (Azure AD), DLP policy architecture, and compliance governance."
  },
  {
    code: "PL-900",
    name: "Microsoft Power Platform Fundamentals",
    issuer: "Microsoft",
    category: "Fundamentals",
    badgeColor: "border-amber-500 text-amber-400 bg-amber-950/40",
    description: "Core business value across Power Apps, Power Automate, Power BI, and Power Pages."
  },
  {
    code: "AZ-900",
    name: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    category: "Fundamentals",
    badgeColor: "border-slate-500 text-slate-300 bg-slate-900/60",
    description: "Core Azure cloud architecture, SLA guarantees, compute provisioning, and global network infrastructure."
  },
  {
    code: "MS-900",
    name: "Microsoft 365 Fundamentals",
    issuer: "Microsoft",
    category: "Fundamentals",
    badgeColor: "border-teal-500 text-teal-400 bg-teal-950/40",
    description: "Enterprise M365 collaboration suite, SharePoint Online administration, and modern workplace security."
  }
];

export const enterpriseCaseStudies: EnterpriseCaseStudy[] = [
  {
    id: "clinical-vitals-engine",
    title: "Clinical Health Risk & Medical Review AI Orchestrator",
    clientContext: "KPI Partners (Life Sciences / Clinical Research)",
    role: "Lead Power Platform & AI Solution Architect",
    timeline: "Nov 2025 - Present",
    tag: "Power BI Embedded + Databricks + AI Builder + Azure SQL",
    metrics: [
      { label: "Evaluation Speed", value: "60% faster", highlight: true },
      { label: "Delegation Ceiling", value: "Bypassed via Buffer" },
      { label: "Schema Validation", value: "100% Deterministic" },
      { label: "Orphaned Records", value: "0% (Strict Failsafe)" }
    ],
    challenge: "Scientific and medical reviewers required seamless inline adjudication of patient vitals (BMI, BP, historical delta variance) within Power BI without navigating external portals, while guaranteeing that AI evaluations strictly update matched records and NEVER insert orphaned rows into Azure SQL.",
    architectureSolution: [
      "Extracted clinical vitals and percentage deltas from Databricks warehouse (vs_current_clinical_data) filtering on row_status IN ('New', 'Changed'), utilizing @coalesce() for null normalization.",
      "Injected clinical arrays into custom AI Builder prompts (aibuilderpredict_customprompt) acting as a Clinical Medical Reviewer, isolating outputs into distinct dm_query (data quality/impossibilities) and medical_query (risk flags, BP shifts, weight increase >10%) parameters, validated deterministically via ParseJson.",
      "Embedded an interactive Power Apps Canvas App directly into Power BI using [@PowerBIIntegration].Data, dynamically switching reviewer workflows between 'Scientific Reviewer' and 'Medical Reviewer' states.",
      "Enforced a strict database persistence constraint in Azure SQL: executed GetItems_V2 lookup ($filter=\"record_id eq '<id>'\") followed strictly by PatchItem_V2 (Update-Only), with failsafes blocking any PostItem_V2 inserts.",
      "Orchestrated asynchronous Power BI semantic model refreshes via POST to Power BI REST API, implementing exponential backoff retry loops on 429 throttling and polling /refreshes matching the requestId header."
    ],
    keyEngineeringTriumph: "Created an immutable Update-Only persistence pattern ensuring zero orphaned records in clinical databases while empowering reviewers to adjudicate live vitals inline through PowerBIIntegration Canvas Apps.",
    technologies: ["Power Apps (Canvas)", "PowerBIIntegration.Data", "Azure Databricks SQL", "AI Builder Custom Prompt", "Azure SQL", "Power BI REST API", "Power Automate"],
    codeSnippetPreview: {
      language: "powerfx",
      title: "PowerBIIntegration & Role-Based Reviewer Workflow",
      code: `Set(getStatus, If( Trim(First([@PowerBIIntegration].Data).Role) = "Scientific Reviewer", 
    "Awaiting Scientific Review", 
    "Awaiting Medical Review"
));

ClearCollect(
    Getdata,
    ShowColumns(
        vs_review_workflow_data,
        Role, Status, data_management_query, medical_query,
        medical_reviewer_comment, participant_id, record_id,
        scientific_reviewer_comment, visit_date
    )
);`
    }
  },
  {
    id: "monday-graphql-upsert",
    title: "MasterFile to Monday.com GraphQL Upsert & Archive Sanity Engine",
    clientContext: "KPI Partners (Operations & Project Management)",
    role: "Power Platform Architect & Integrations Lead",
    timeline: "2026",
    tag: "Power Automate + Monday.com GraphQL API + OneDrive",
    metrics: [
      { label: "Sync Velocity", value: "100% Automated", highlight: true },
      { label: "Rate Limit Safety", value: "150 req/min Cap" },
      { label: "Archive Gate", value: ">=150 & >=80% Safe", highlight: true },
      { label: "Error Recovery", value: "Try-Catch Alerts" }
    ],
    challenge: "Enterprise project tracking data in weekly OneDrive Excel workbooks (MasterList_yyyymmdd.xlsx) required automated synchronization with Monday.com boards via GraphQL API, with zero tolerance for accidental mass deletion if a truncated or corrupt file was uploaded.",
    architectureSolution: [
      "Engineered a scheduled Power Automate cloud flow that inspects OneDrive folders, parses date suffixes from filenames, and dynamically processes the newest master workbook.",
      "Constructed a composite unique key using lower(trim(client)) || lower(trim(project)) to accurately match and upsert board items against Excel records.",
      "Formulated dynamic Monday.com GraphQL mutations (change_multiple_column_values for updates, create_item for new rows) via the HTTP premium connector with custom Authorization headers.",
      "Engineered an 'Archive Sanity Gate' preventing accidental mass board purge: items are only archived when rowsRead >= 150 AND rowsRead >= 80% of boardCount. If sanity criteria fail, automated Outlook alerts are dispatched and deletions are halted.",
      "Implemented a comprehensive Try-Catch scope pattern that intercepts API exceptions, handles Excel serial dates (e.g., 46193) vs ISO strings, and paginates through board items using cursor navigation."
    ],
    keyEngineeringTriumph: "Architected a fail-safe Archive Sanity Gate that eliminated accidental project deletion risks while synchronizing multi-hundred row workbooks via rate-limited GraphQL mutations.",
    technologies: ["Power Automate Cloud", "Monday.com GraphQL API", "OneDrive for Business", "Excel Online API", "Office 365 Outlook", "HTTP Connector"],
    codeSnippetPreview: {
      language: "graphql",
      title: "Archive Sanity Gate & GraphQL Upsert Formulation",
      code: `// Archive Sanity Gate Logic:
// allowArchive = (rowsRead >= 150) AND (rowsRead >= 0.8 * boardCount)
// If false: Abort archive, dispatch admin alert email.

// Monday.com GraphQL Mutation:
mutation ($boardId: ID!, $itemId: ID!, $columnValues: JSON!) {
  change_multiple_column_values(
    board_id: $boardId, 
    item_id: $itemId, 
    column_values: $columnValues
  ) {
    id
  }
}`
    }
  },
  {
    id: "ract-risk-automation",
    title: "High-Throughput Risk Category Generator (RACT) & Databricks MERGE",
    clientContext: "KPI Partners (Enterprise Finance & Clinical Risk)",
    role: "Data Analyst II (Power Platform & AI)",
    timeline: "Nov 2025 - Present",
    tag: "Azure Databricks SQL + AI Builder + Concurrency 20x",
    metrics: [
      { label: "Manual Effort Saved", value: "15+ hrs/week", highlight: true },
      { label: "Parallel Threads", value: "20 Concurrent", highlight: true },
      { label: "Batch Chunk Size", value: "100 records" },
      { label: "Database Lock Time", value: "Near Zero" }
    ],
    challenge: "Processing thousands of unstructured clinical risk descriptions into standardized Risk Assessment and Categorization Tool (RACT) classifications caused flow timeouts and database lock contention when processed row-by-row.",
    architectureSolution: [
      "Engineered a high-throughput batching architecture utilizing dynamic chunking: @chunk(outputs('Execute_a_SQL_statement')?['body/result/data_array'], 100).",
      "Configured Apply_to_each_Batch loop with high concurrency control, orchestrating up to 20 concurrent worker threads to process 100-record chunks in parallel.",
      "Concatenated evaluated AI Builder outputs into structured value matrices using Select and Join expressions.",
      "Executed an atomic Databricks MERGE INTO statement that explicitly omitted WHEN NOT MATCHED THEN INSERT, enforcing an atomic Update-Only constraint directly at the warehouse level without table locking."
    ],
    keyEngineeringTriumph: "Scaled risk classification throughput by 20x using chunked parallel arrays and atomic Databricks MERGE statements, saving 15+ hours of manual assessment weekly.",
    technologies: ["Power Automate", "Azure Databricks SQL", "AI Builder", "Parallel Execution (20 Threads)", "Chunking Expressions"],
    codeSnippetPreview: {
      language: "sql",
      title: "Atomic Databricks MERGE INTO (Update-Only)",
      code: `MERGE INTO fcranking_encur.pdc_risk_description_with_ai_category AS target
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
    risk_category_type_AI_new = source.new_type;`
    }
  },
  {
    id: "ai-foundry-financial-poc",
    title: "AI Foundry Content Understanding: Financial & Contract Audit POC",
    clientContext: "KPI Partners (Financial POC & Legal Tech)",
    role: "AI & Cloud Integration Engineer",
    timeline: "2026",
    tag: "Azure AI Foundry + Ground Truth Modeling",
    metrics: [
      { label: "Extraction Confidence", value: "95%+ Score", highlight: true },
      { label: "Training Corpus", value: "20 Contracts / 50 Invoices" },
      { label: "Audit Time Cut", value: "50% Reduction" },
      { label: "Cloud Cost Saved", value: "70% Compute Cut" }
    ],
    challenge: "Auditors spent countless hours manually cross-referencing complex medical invoices against multi-page vendor master service agreements (MSAs) to spot billing disparities, with legacy Python regex scripts failing on changing document layouts.",
    architectureSolution: [
      "Constructed an isolated Proof of Concept (POC) utilizing Azure AI Foundry Content Understanding service for automated contract compliance.",
      "Trained a custom analyzer model on a manually labeled ground-truth corpus consisting of 20 contract agreements and 50 corresponding complex invoices.",
      "Established an extraction taxonomy capturing ground-truth billing structures, procedure codes, hourly rates, service deliverables, and line items.",
      "Programmatically compared extracted invoice line items against contractual rate cards, generating automated discrepancy reports with 95%+ confidence scores and replacing complex legacy scripts."
    ],
    keyEngineeringTriumph: "Demonstrated automated contract-to-invoice disparity detection with >95% confidence score, cutting audit cycle times by 50% and reducing infrastructure compute costs by 70%.",
    technologies: ["Azure AI Foundry", "Content Understanding", "Custom Analyzer Training", "Taxonomy Modeling", "Invoice Extraction"]
  },
  {
    id: "campus-portal-modernization",
    title: "Higher-Ed Student Lifecycle Automation & Copilot Studio",
    clientContext: "Wilfrid Laurier University",
    role: "Power Platform Assistant (CO-OP)",
    timeline: "May 2025 - Aug 2025",
    tag: "Power Pages + Copilot Studio + REST APIs",
    metrics: [
      { label: "Support Query Reduction", value: "83.5% drop", highlight: true },
      { label: "Manual Outreach Saved", value: "48 hrs/week", highlight: true },
      { label: "User Migration", value: "27,000 Users" },
      { label: "Staff Time Saved", value: "16 hrs/wk certs" }
    ],
    challenge: "University academic teams were overwhelmed with repetitive student inquiries regarding course eligibility, certificate generation, and account balances, while managing a high-stakes transition of 27,000 police officers to the Modern Campus Destiny One platform.",
    architectureSolution: [
      "Architected and deployed an authenticated Power Pages Student Dashboard, enabling thousands of students to access enrollment records, active courses, grades, and fee receipts securely in real-time.",
      "Engineered a dynamic Live Course Catalog connecting Power Pages Cloud Flow API to the Destiny One REST API via custom HTTP connectors, parsing JSON payloads and synchronizing course descriptions into Dataverse.",
      "Built and deployed custom Microsoft Copilot Studio agents grounded on internal university knowledge bases to autonomously answer multi-turn student queries.",
      "Created an event-driven Power Automate pipeline triggered by course completion webhooks to autonomously render branded completion certificates and dispatch notifications."
    ],
    keyEngineeringTriumph: "Drove an 83.5% reduction in recurrent student inquiries through authenticated self-service and grounded Copilot Studio agents, while migrating 27,000 active users with zero data loss.",
    technologies: ["Power Pages", "Microsoft Copilot Studio", "Dataverse", "Power Automate", "Destiny One REST API", "Center of Excellence (CoE)"]
  },
  {
    id: "accenture-enterprise-migration",
    title: "Cross-Tenant Enterprise Migration, RPA & CoE Framework",
    clientContext: "Accenture Solutions (European Banking & Global Clients)",
    role: "Packaged App Development Analyst",
    timeline: "Aug 2021 - Aug 2024",
    tag: "SharePoint Online + RPA Desktop + ALM & CoE",
    metrics: [
      { label: "Legacy Workflows Migrated", value: "500+ flows", highlight: true },
      { label: "Sites Autonomously Tested", value: "1,000s of sites" },
      { label: "Migration Transparency", value: "4 Sr Mgrs / 9 Leads" },
      { label: "Compliance & DLP", value: "100% ALM Audit" }
    ],
    challenge: "During large-scale cross-tenant consolidation for a leading European banking client, over 500 legacy Nintex and SharePoint Designer workflows along with deprecated InfoPath forms had to be modernized with strict compliance, zero downtime, and complete auditability.",
    architectureSolution: [
      "Executed complex cross-tenant migrations using PowerShell scripts and ShareGate, preserving metadata, list schemas, and granular permission inheritance across thousands of sites.",
      "Developed an intelligent Power Automate Desktop (RPA) bot that crawled newly migrated SharePoint Online sites, verified visual UI hierarchy, executed interactive form submissions, and captured screenshot evidence for exception logging.",
      "Re-engineered fragile InfoPath legacy forms into secure, responsive Power Apps with Dataverse backend entities, ensuring strict Data Loss Prevention (DLP) compliance.",
      "Standardized enterprise Application Lifecycle Management (ALM) using solution layering, environment variables, and automated solution pipelines between Dev, Test, and Prod.",
      "Delivered real-time SharePoint and Power BI migration telemetry dashboards used daily by 4 senior managers and 9 team leads."
    ],
    keyEngineeringTriumph: "Modernized 500+ legacy Nintex/Designer workflows into Power Automate with zero data corruption and created unattended RPA bots that saved hundreds of hours of manual verification testing.",
    technologies: ["Power Automate Desktop (RPA)", "SharePoint Online", "Power Apps", "Dataverse", "Power BI", "PowerShell", "ShareGate", "Nintex", "ALM / CoE"]
  }
];

export const technicalProjects: TechnicalProject[] = [
  {
    id: "rag-institutional-chatbot",
    title: "Context-Aware Institutional RAG Chatbot",
    subtitle: "Enterprise Conversational AI with Zero Hallucinations",
    period: "Feb 2026 - Mar 2026",
    tags: ["Python", "Flask", "OpenAI API", "FAISS", "Crawl4AI", "Ragas"],
    overview: "Engineered a high-precision Retrieval-Augmented Generation (RAG) backend designed to index and query unstructured institutional documentation with strict anti-hallucination guardrails and multi-turn conversational memory.",
    highlights: [
      "Built a resilient, caching web crawler leveraging Crawl4AI to ingest institutional knowledge, documentation, and policy articles with semantic chunking.",
      "Constructed a high-speed dense vector search pipeline powered by FAISS and OpenAI text-embedding-3-large models.",
      "Developed a zero-shot query rewriting module that resolves ambiguous conversational coreferences before issuing similarity lookups.",
      "Validated end-to-end retrieval and generation using the Ragas evaluation framework, achieving a perfect 1.0 Context Precision score."
    ],
    evaluationMetric: "1.0 Context Precision Score (Ragas Framework)",
    stack: ["Python 3.11", "Flask", "OpenAI text-embedding-3-large", "FAISS Vector Index", "Crawl4AI", "Ragas Eval"]
  },
  {
    id: "cms-consolidation-migration",
    title: "Enterprise CMS Consolidation & Data Migration Suite",
    subtitle: "Unifying Disparate Document Repositories into Modern M365",
    period: "Apr 2023 - Aug 2024",
    tags: ["Power Apps", "Power Automate", "SharePoint Online", "Power BI", "PowerShell"],
    overview: "Orchestrated the end-to-end consolidation of legacy enterprise content management systems (M-Files and Efecte) into a unified, secure SharePoint Online architecture.",
    highlights: [
      "Engineered automated PowerShell scripts for bulk file extraction, metadata mapping, schema normalization, and taxonomy tagging.",
      "Implemented Power Automate approval hierarchies and Dataverse auditing trails to maintain legal and compliance integrity.",
      "Constructed executive Power BI dashboards displaying real-time migration velocity, error triage rates, and ingestion milestone burndowns."
    ],
    evaluationMetric: "Zero data corruption across 500k+ records",
    stack: ["SharePoint Online", "PowerShell Core", "Power Apps", "Power Automate", "Power BI", "M365 Admin"]
  },
  {
    id: "employee-churn-prediction",
    title: "Predictive Employee Churn & Retention ML Engine",
    subtitle: "Data-Driven Talent Retention and Risk Classification",
    period: "Sep 2024 - Dec 2024",
    tags: ["Python", "scikit-learn", "XGBoost", "CatBoost", "Random Forest", "Pandas"],
    overview: "Developed an end-to-end predictive machine learning solution to accurately identify flight-risk employees, equipping HR leadership with actionable retention insights.",
    highlights: [
      "Executed comprehensive exploratory data analysis, missing-value imputation, categorical encoding, and domain-informed feature engineering.",
      "Benchmarked and hyperparameter-tuned multiple classification algorithms including Support Vector Machines (SVM), XGBoost, CatBoost, and Random Forest.",
      "Selected and deployed an ensemble Random Forest model achieving an 83.0% test accuracy and an F1 score of 0.722, significantly outperforming baseline heuristic models."
    ],
    evaluationMetric: "83.0% Test Accuracy | 0.722 F1 Score",
    stack: ["Python", "scikit-learn", "Pandas", "NumPy", "XGBoost", "CatBoost", "Matplotlib / Seaborn"]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    company: "KPI Partners",
    role: "Data Analyst II (Power Platform & AI)",
    location: "Pune, MH",
    period: "Nov 2025 - Present",
    type: "Full-Time",
    summary: "Leading Power Platform and AI solution engineering across life sciences and enterprise operations, architecting high-scale automations, Power BI semantic models, GraphQL cloud sync flows, and Azure AI Foundry integrations.",
    keyAchievements: [
      "Designed and developed the Vital Signs Review Power BI report with embedded Power Apps Canvas Apps ([@PowerBIIntegration].Data), accelerating clinical evaluation by 60% for Scientific and Medical Reviewers.",
      "Engineered a bulk-edit update mechanism using Dataverse/SQL Patch and ClearCollect, bypassing 1,000-record delegation limits via Power Automate HTTP webhooks.",
      "Architected the MasterFile to Monday.com upsert flow using Monday.com GraphQL API, composite key matching, and a strict Archive Sanity Gate (rowsRead >= 150 AND rowsRead >= 80% board count).",
      "Automated business risk analysis with AI Builder and Power Automate, batching array chunks (@chunk(..., 100)) with 20 parallel threads and executing atomic Databricks SQL MERGE statements, saving 15+ hours weekly.",
      "Constructed an automated AI Builder pipeline with Azure Databricks to monitor patient vitals, validating outputs via ParseJson and updating Azure SQL with strict Update-Only failsafes.",
      "Built an AI Foundry Content Understanding POC trained on 20 contracts and 50 invoices, achieving 95%+ confidence in automated line item cross-referencing and reducing processing time by 50% and compute cost by 70%.",
      "Automated dynamic Microsoft Fabric Capacity scaling using KQL log alerts and Azure Logic Apps, preventing compute over-provisioning."
    ],
    technologies: ["Power Apps", "Power Automate", "Power BI REST API", "Dataverse", "Azure Databricks", "Azure AI Foundry", "Monday.com GraphQL", "Logic Apps", "Fabric", "KQL", "Azure SQL"]
  },
  {
    company: "Wilfrid Laurier University",
    role: "Power Platform Assistant (CO-OP)",
    location: "Waterloo, ON, Canada",
    period: "May 2025 - Aug 2025",
    type: "Co-op / Internship",
    summary: "Spearheaded student portal modernization, Copilot Studio agent implementations, and automated registrar workflows for university departments.",
    keyAchievements: [
      "Built and deployed an authenticated Power Pages Student Dashboard for real-time enrollment, course progress, grades, and financial statements.",
      "Developed a dynamic Live Course Catalog connecting Power Pages Cloud Flow API to Destiny One REST API, synchronizing course descriptions into Dataverse.",
      "Built custom Microsoft Copilot Studio agents grounded on private university knowledge bases, slashing repetitive student query volume by 83.5%.",
      "Engineered automated certificate generation flows with webhook events saving 16 hours weekly; created automated notifications for incomplete profiles saving 32 hours weekly.",
      "Supported the large-scale transition of 27,000 police officers to the Modern Campus Destiny One platform with zero data corruption.",
      "Applied strict Power Platform Center of Excellence (CoE) and governance policies across university environments."
    ],
    technologies: ["Power Pages", "Copilot Studio", "Power Automate", "Dataverse", "REST APIs", "Modern Campus Destiny One", "CoE Governance"]
  },
  {
    company: "Accenture Solutions Pvt. Ltd.",
    role: "Packaged App Development Analyst (SharePoint & Power Platform)",
    location: "Pune, MH",
    period: "Aug 2021 - Aug 2024",
    type: "Full-Time",
    summary: "Architected enterprise Power Apps, Power Automate flows, and SharePoint migrations for global banking and enterprise clients, driving ALM maturity and RPA automation.",
    keyAchievements: [
      "Executed cross-tenant SharePoint migrations using PowerShell scripts and ShareGate tooling with zero metadata loss.",
      "Developed an intelligent Power Automate Desktop (RPA) bot to autonomously navigate and test UI integrity across thousands of newly migrated SharePoint Online sites.",
      "Modernized legacy InfoPath forms by architecting modern Power Apps connected to Dataverse and SharePoint Lists for a European banking institution.",
      "Enforced Power Platform ALM best practices: solution layering, environment variables, connection references, and deployment pipelines across Dev, Test, and Prod.",
      "Managed DLP compliance and environment lifecycles within the Power Platform Center of Excellence (CoE) framework.",
      "Successfully migrated 500+ legacy Nintex and SharePoint Designer workflows into maintainable Power Automate cloud flows.",
      "Built interactive migration monitoring dashboards in Power BI and SharePoint utilized by 4 senior managers and 9 team leads."
    ],
    technologies: ["Power Automate Desktop (RPA)", "SharePoint Online", "Power Apps", "Dataverse", "Power BI", "PowerShell", "ShareGate", "Nintex", "ALM / CoE"]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "Master of Applied Computing",
    institution: "Wilfrid Laurier University",
    location: "Waterloo, ON, Canada",
    period: "Sep 2024 - Dec 2025",
    details: "Advanced coursework in Distributed Systems, Machine Learning, Cloud Architecture, and Software Engineering."
  },
  {
    degree: "Bachelor of Computer Engineering",
    institution: "Pune University",
    location: "Pune, MH, India",
    period: "Apr 2017 - May 2021",
    details: "Core fundamentals in Data Structures, Algorithms, Database Systems, Computer Networks, and Object-Oriented Design."
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Power Platform & Low-Code AI",
    description: "Enterprise application engineering, ALM governance, and generative automation",
    iconName: "Cpu",
    skills: [
      { name: "Power Apps (Canvas & Embedded)", level: "Expert", featured: true },
      { name: "Power Automate (Cloud & Webhooks)", level: "Expert", featured: true },
      { name: "Power Automate Desktop (RPA)", level: "Expert", featured: true },
      { name: "Microsoft Dataverse", level: "Expert", featured: true },
      { name: "Power BI & REST API Refreshes", level: "Expert", featured: true },
      { name: "Microsoft Copilot Studio", level: "Advanced", featured: true },
      { name: "AI Builder Custom Prompts", level: "Advanced", featured: true },
      { name: "Power Pages Portals", level: "Advanced", featured: true },
      { name: "Power Platform ALM & CoE", level: "Expert", featured: true },
      { name: "Power Fx Expressions", level: "Expert", featured: true },
    ]
  },
  {
    category: "Cloud, Data & AI Engineering",
    description: "Big data pipelines, Azure services, and modern LLM vector architectures",
    iconName: "Database",
    skills: [
      { name: "Azure Databricks (SQL & Spark)", level: "Advanced", featured: true },
      { name: "Azure AI Foundry Content Understanding", level: "Advanced", featured: true },
      { name: "Azure SQL Database (T-SQL)", level: "Expert", featured: true },
      { name: "Azure Functions & Logic Apps", level: "Advanced", featured: true },
      { name: "Microsoft Fabric & KQL Alerts", level: "Proficient", featured: true },
      { name: "Monday.com GraphQL API", level: "Expert", featured: true },
      { name: "FAISS Vector Stores & RAG", level: "Advanced", featured: true },
      { name: "Batch Chunking & Parallel Concurrency", level: "Expert", featured: true }
    ]
  },
  {
    category: "SharePoint & Migration",
    description: "Enterprise content consolidation, tenant migrations, and custom web parts",
    iconName: "Layers",
    skills: [
      { name: "SharePoint Online", level: "Expert", featured: true },
      { name: "PowerShell Automation", level: "Expert", featured: true },
      { name: "ShareGate Migration", level: "Expert", featured: true },
      { name: "Nintex Migration to Power Automate", level: "Expert", featured: true },
      { name: "SPFx (SharePoint Framework)", level: "Proficient" },
      { name: "PnP Framework", level: "Advanced" },
    ]
  },
  {
    category: "Programming & Web Technologies",
    description: "Full-stack languages, scientific libraries, and script engines",
    iconName: "Code2",
    skills: [
      { name: "Python (Flask, Pandas, scikit-learn)", level: "Advanced", featured: true },
      { name: "SQL (T-SQL, Databricks SQL)", level: "Expert", featured: true },
      { name: "GraphQL & REST APIs", level: "Expert", featured: true },
      { name: "JavaScript / TypeScript (React)", level: "Advanced" },
      { name: "HTML5 / CSS3 / Tailwind", level: "Advanced" },
      { name: "Git, Jira, Confluence, VS Code", level: "Expert" }
    ]
  }
];
