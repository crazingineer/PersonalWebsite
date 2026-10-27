import { Certification, EnterpriseCaseStudy, ExperienceItem, EducationItem, SkillCategory, TechnicalProject } from '../types';

export const personalInfo = {
  name: "Shubham Yadav",
  title: "Power Platform Solution Architect & Data/AI Engineer",
  tagline: "Bridging Enterprise Low-Code Automation, Azure Cloud Data Pipelines & GenAI Solutions.",
  email: "shubhambhagwatyadav@gmail.com",
  phone: "+91 7276085461",
  linkedin: "https://linkedin.com/in/shubhambhagwatyadav",
  github: "https://github.com/shubhambhagwatyadav",
  location: "Waterloo, ON / Pune, MH",
  availability: "Available for Solution Architect & AI Engineering Roles",
  summary: "Results-driven Power Platform Solution Architect (PL-600) and Cloud Data Engineer with a proven track record architecting mission-critical enterprise systems, deep Azure integrations, automated ETL pipelines, and GenAI-powered workflows. Specialized in breaking through delegation ceilings, orchestrating high-throughput parallel batching, engineering safeguarded API sync engines, and establishing Center of Excellence (CoE) governance across healthcare, banking, and academic sectors.",
  quickStats: [
    { label: "Clinical Review Speedup", value: "60%" },
    { label: "Weekly Hours Saved", value: "63+ hrs" },
    { label: "Cloud Compute Cost Cut", value: "70%" },
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
    title: "Clinical Data Review & Embedded AI Adjudication Platform",
    category: "Healthcare Analytics & AI",
    clientContext: "KPI Partners (Life Sciences & Clinical Research)",
    role: "Lead Power Platform & AI Solution Architect",
    timeline: "Nov 2025 - Present",
    tag: "Power BI Embedded + Azure Databricks + AI Builder + SQL",
    metrics: [
      { label: "Review Acceleration", value: "60% faster", highlight: true },
      { label: "Delegation Limit", value: "1,000+ Bypassed" },
      { label: "Data Integrity", value: "Strict Update-Only", highlight: true },
      { label: "User Experience", value: "Single-Pane UI" }
    ],
    challenge: "Scientific and medical reviewers struggled with fragmented clinical vitals data scattered across siloed systems, blocked by low-code delegation ceilings and manual adjudication steps, needing a unified interface with strict clinical data protection.",
    architectureHighlights: [
      "Engineered an interactive Power BI semantic model with custom visuals, embedding an interactive Canvas App directly inside the report canvas for zero-context-switching inline adjudication.",
      "Overcame the 1,000-record low-code delegation ceiling using chunked in-memory caching and webhook-driven dataset recompilations without degrading UI responsiveness.",
      "Integrated an AI Builder NLP pipeline with Azure Databricks to monitor patient vitals, synthesizing clinical risk indicators (BMI deltas, critical BP shifts) into structured health queries.",
      "Enforced a defensive persistence pattern in Azure SQL with strict Update-Only validation, guaranteeing zero orphaned records or unintentional inserts in regulated clinical databases.",
      "Orchestrated asynchronous Power BI semantic model refreshes via the Power BI REST API, handling high-volume retries and polling for completion."
    ],
    interviewTopics: [
      "How I bypassed the 1,000-record Power Apps delegation ceiling using memory buffers and webhooks.",
      "Techniques for embedding bidirectional Canvas Apps inside Power BI reports with role-based security.",
      "Architecting defensive update-only database persistence for clinical and regulated environments."
    ],
    technologies: ["Power Apps (Canvas)", "Power BI Embedded", "Azure Databricks", "AI Builder", "Azure SQL", "Power Automate Webhooks"]
  },
  {
    id: "monday-graphql-upsert",
    title: "Resilient Cloud Data Sync & Safeguarded GraphQL Engine",
    category: "Enterprise Cloud Integration",
    clientContext: "KPI Partners (Operations & Project Management)",
    role: "Power Platform Architect & Integrations Lead",
    timeline: "2026",
    tag: "Power Automate + Monday.com GraphQL API + OneDrive",
    metrics: [
      { label: "Sync Velocity", value: "100% Automated", highlight: true },
      { label: "Rate Limit Safety", value: "150 req/min Cap" },
      { label: "Archive Safeguard", value: ">=150 & >=80% Gate", highlight: true },
      { label: "Error Recovery", value: "Automated Alerts" }
    ],
    challenge: "Enterprise project tracking data in weekly cloud workbooks required automated synchronization with modern collaboration boards via GraphQL, with absolute zero tolerance for accidental data wipes if a malformed or partial file was uploaded.",
    architectureHighlights: [
      "Designed a scheduled cloud automation that dynamically resolves and versions weekly master workbooks based on filename date metadata.",
      "Constructed a robust compound key matching engine to accurately upsert board records against master entity rows.",
      "Engineered a fail-safe Deletion Sanity Gate: board items are only archived when record counts pass strict volumetric and percentage thresholds, preventing catastrophic accidental mass deletion.",
      "Formulated dynamic GraphQL mutations via secure HTTP connectors, implementing cursor-based pagination and concurrency controls to honor API rate limits.",
      "Structured comprehensive Try-Catch error scopes that intercept operational exceptions, format Excel serial dates, and trigger automated administrative email notifications."
    ],
    interviewTopics: [
      "Designing defensive sanity gates to prevent accidental mass deletion during automated synchronizations.",
      "Building robust GraphQL upsert pipelines with cursor pagination and rate-limit throttling in Power Automate.",
      "Enterprise Try-Catch error management patterns and automated alerting in production flows."
    ],
    technologies: ["Power Automate", "Monday.com GraphQL API", "Excel Online", "OneDrive for Business", "HTTP Connector", "Office 365 Outlook"]
  },
  {
    id: "ract-risk-automation",
    title: "High-Throughput Risk Classification & Cloud Capacity Optimizer",
    category: "Financial & Operational Risk",
    clientContext: "KPI Partners (Enterprise Finance & Operations)",
    role: "Data Analyst II (Power Platform & AI)",
    timeline: "Nov 2025 - Present",
    tag: "Azure Databricks SQL + AI Builder + Microsoft Fabric",
    metrics: [
      { label: "Manual Effort Saved", value: "15+ hrs/week", highlight: true },
      { label: "Parallel Throughput", value: "20 Threads", highlight: true },
      { label: "Compute Cost Cut", value: "70% Reduction", highlight: true },
      { label: "Database Contention", value: "Near Zero" }
    ],
    challenge: "Processing thousands of unstructured risk descriptions into standardized regulatory categories caused severe flow timeouts and database lock contention when processed iteratively row-by-row.",
    architectureHighlights: [
      "Architected a high-throughput batching pipeline utilizing dynamic 100-item array chunking expressions to minimize memory overhead and API round-trips.",
      "Configured high-concurrency loops orchestrating 20 parallel worker threads to execute AI Builder model evaluations concurrently.",
      "Compacted evaluated outputs into structured matrices, executing atomic SQL MERGE statements that eliminated database table lock contention.",
      "Implemented automated dynamic scaling for Microsoft Fabric capacity governed by KQL log alerts and Azure Logic Apps, shutting down idle resources and slashing compute costs by 70%."
    ],
    interviewTopics: [
      "Scaling low-code pipelines by 20x using dynamic array chunking and parallel concurrency controls.",
      "Atomic database MERGE strategies that eliminate lock contention during bulk automated writes.",
      "Cost-optimizing Microsoft Fabric compute capacity using KQL query alerts and Logic Apps."
    ],
    technologies: ["Azure Databricks SQL", "AI Builder", "Power Automate", "Microsoft Fabric", "Azure Logic Apps", "KQL Log Alerts"]
  },
  {
    id: "ai-foundry-financial-poc",
    title: "AI Foundry Content Understanding: Contract & Invoice Audit POC",
    category: "Legal Tech & Financial Compliance",
    clientContext: "KPI Partners (Financial POC)",
    role: "AI & Cloud Integration Engineer",
    timeline: "2026",
    tag: "Azure AI Foundry + Ground Truth Modeling",
    metrics: [
      { label: "Extraction Confidence", value: "95%+ Score", highlight: true },
      { label: "Audit Cycle Time", value: "50% Faster", highlight: true },
      { label: "Infrastructure Cost", value: "70% Savings" },
      { label: "Training Corpus", value: "Multi-Tier Labeled" }
    ],
    challenge: "Financial auditors spent hundreds of hours manually cross-referencing complex medical invoices against multi-page legal master service agreements to identify billing deviations, with legacy regex scripts frequently breaking on format changes.",
    architectureHighlights: [
      "Built a targeted Proof of Concept (POC) leveraging Azure AI Foundry Content Understanding for automated contract compliance auditing.",
      "Trained a custom document analyzer using a supervised ground-truth corpus of contracts and complex paired invoices.",
      "Established an extraction taxonomy capturing billing structures, procedure codes, hourly rate caps, deliverables, and line items.",
      "Automated the cross-referencing of billed items against governing contract pricing tiers with a 95%+ confidence score, replacing fragile scripts and cutting processing time by 50%."
    ],
    interviewTopics: [
      "Training custom document models in Azure AI Foundry with domain-specific extraction taxonomies.",
      "Automating contract-to-invoice disparity detection and reconciliation logic.",
      "Transitioning legacy regex-based extraction pipelines into modern generative AI understanding models."
    ],
    technologies: ["Azure AI Foundry", "Content Understanding", "Custom Model Training", "Taxonomy Design", "Document Intelligence"]
  },
  {
    id: "campus-portal-modernization",
    title: "Higher-Ed Student Lifecycle Modernization & Copilot Agents",
    category: "Higher Education & Portals",
    clientContext: "Wilfrid Laurier University",
    role: "Power Platform Assistant (CO-OP)",
    timeline: "May 2025 - Aug 2025",
    tag: "Power Pages + Copilot Studio + REST APIs",
    metrics: [
      { label: "Support Query Reduction", value: "83.5% drop", highlight: true },
      { label: "Manual Outreach Saved", value: "48 hrs/week", highlight: true },
      { label: "User Migration", value: "27,000 Users", highlight: true },
      { label: "Staff Time Saved", value: "16 hrs/wk certs" }
    ],
    challenge: "University registrar teams were overwhelmed with repetitive student inquiries regarding course eligibility, certificate distribution, and account balances, while managing a high-stakes transition of 27,000 police officers to a new platform.",
    architectureHighlights: [
      "Architected and deployed an authenticated Power Pages Student Dashboard, enabling thousands of students to access enrollment records, active courses, grades, and fee receipts securely in real-time.",
      "Engineered a dynamic Live Course Catalog connecting Power Pages Cloud Flow API to Destiny One REST API via custom HTTP connectors, synchronizing descriptions directly into Dataverse.",
      "Built and deployed custom Microsoft Copilot Studio agents grounded on internal university knowledge bases to autonomously answer multi-turn student queries.",
      "Created an event-driven Power Automate pipeline triggered by course completion webhooks to autonomously render branded completion certificates and dispatch notifications."
    ],
    interviewTopics: [
      "Designing authenticated student portals on Power Pages with secure Dataverse backend access.",
      "Grounding Copilot Studio agents on private enterprise knowledge bases to deflect 80%+ of inquiries.",
      "Orchestrating large-scale data migrations for 27,000 users with zero operational downtime."
    ],
    technologies: ["Power Pages", "Microsoft Copilot Studio", "Dataverse", "Power Automate", "Destiny One REST API", "CoE Governance"]
  },
  {
    id: "accenture-enterprise-migration",
    title: "Cross-Tenant Enterprise Migration, RPA & CoE Framework",
    category: "Banking & Enterprise Governance",
    clientContext: "Accenture Solutions (European Banking & Global Clients)",
    role: "Packaged App Development Analyst",
    timeline: "Aug 2021 - Aug 2024",
    tag: "SharePoint Online + RPA Desktop + ALM & CoE",
    metrics: [
      { label: "Legacy Workflows Migrated", value: "500+ flows", highlight: true },
      { label: "Sites Autonomously Tested", value: "1,000s of sites", highlight: true },
      { label: "Migration Transparency", value: "4 Sr Mgrs / 9 Leads" },
      { label: "Compliance & DLP", value: "100% ALM Audit" }
    ],
    challenge: "During large-scale cross-tenant consolidation for a leading European banking client, over 500 legacy Nintex and SharePoint Designer workflows along with deprecated InfoPath forms had to be modernized with strict compliance, zero downtime, and complete auditability.",
    architectureHighlights: [
      "Executed complex cross-tenant migrations using PowerShell scripts and ShareGate, preserving metadata, list schemas, and granular permission inheritance across thousands of sites.",
      "Developed an intelligent Power Automate Desktop (RPA) bot that crawled newly migrated SharePoint Online sites, verified visual UI hierarchy, executed interactive form submissions, and captured screenshot evidence for exception logging.",
      "Re-engineered fragile InfoPath legacy forms into secure, responsive Power Apps with Dataverse backend entities, ensuring strict Data Loss Prevention (DLP) compliance.",
      "Standardized enterprise Application Lifecycle Management (ALM) using solution layering, environment variables, and automated solution pipelines between Dev, Test, and Prod.",
      "Delivered real-time SharePoint and Power BI migration telemetry dashboards used daily by 4 senior managers and 9 team leads."
    ],
    interviewTopics: [
      "Building unattended Power Automate Desktop (RPA) bots for automated post-migration UI verification.",
      "Migrating 500+ legacy Nintex/Designer workflows into modern Power Automate cloud architectures.",
      "Enforcing Center of Excellence (CoE) governance, DLP boundaries, and multi-tier ALM deployment pipelines."
    ],
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
      "Designed and developed the Vital Signs Review Power BI report with embedded Power Apps Canvas Apps, accelerating clinical evaluation by 60% for Scientific and Medical Reviewers.",
      "Engineered a bulk-edit update mechanism using Dataverse/SQL Patch and ClearCollect, bypassing 1,000-record delegation limits via Power Automate HTTP webhooks.",
      "Architected the MasterFile to Monday.com upsert flow using Monday.com GraphQL API, composite key matching, and a strict Archive Sanity Gate to prevent accidental mass deletion.",
      "Automated business risk analysis with AI Builder and Power Automate, batching array chunks with 20 parallel threads and executing atomic Databricks SQL MERGE statements, saving 15+ hours weekly.",
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
