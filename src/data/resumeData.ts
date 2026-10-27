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
  summary: "Results-driven Power Platform and Cloud Data Engineer with extensive experience architecting enterprise low-code systems, deep Azure integrations, automated ETL pipelines, and GenAI-powered workflows. Specialized in bypassing delegation boundaries, orchestrating multi-tenant migrations, and establishing Center of Excellence (CoE) governance across healthcare, banking, and academic domains.",
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
    title: "Clinical Health Risk & Vital Signs Evaluation Engine",
    clientContext: "KPI Partners (Life Sciences & Healthcare Domain)",
    role: "Lead Power Platform & AI Analyst",
    timeline: "Nov 2025 - Present",
    tag: "Power Platform + Azure Databricks + GenAI",
    metrics: [
      { label: "Evaluation Speed", value: "60% faster", highlight: true },
      { label: "Delegation Limit", value: "1,000+ bypassed" },
      { label: "Data Quality", value: "100% ACID sync" },
      { label: "Audience", value: "Scientific & Medical Reviewers" }
    ],
    challenge: "Scientific and medical reviewers struggled with disjointed clinical vitals data (BMI, BP, historical markers) dispersed across siloed databases, blocked by Power Apps 1,000-record delegation limits and manual spreadsheet calculations.",
    architectureSolution: [
      "Designed an end-to-end semantic model in Power BI with custom interactive visuals, embedding interactive Canvas Apps directly inside the report canvas for inline adjudication.",
      "Engineered an asynchronous bulk-edit mechanism using Dataverse/SQL Patch and ClearCollect algorithms, bypassing 1,000-record delegation limits by triggering dynamic dataset refreshes via Power Automate HTTP webhooks.",
      "Connected an AI Builder pipeline directly to Azure Databricks to monitor newly ingested patient vitals, executing custom LLM prompts that synthesize clinical risk factors and insert structured health queries into Azure SQL."
    ],
    keyEngineeringTriumph: "Eliminated the hard 1,000-row Power Apps delegation boundary through chunked memory buffers and webhook-driven dataset recompilations without degrading UI responsiveness.",
    technologies: ["Power Apps (Canvas)", "Power BI Embedded", "Azure Databricks", "Dataverse", "Power Automate Webhooks", "Azure SQL", "AI Builder"]
  },
  {
    id: "ract-risk-automation",
    title: "Enterprise Risk Assessment (RACT) & AI Foundry Ingestion",
    clientContext: "KPI Partners (Enterprise Finance & Operations)",
    role: "Data Analyst II (Power Platform & AI)",
    timeline: "Nov 2025 - Present",
    tag: "Azure AI Foundry + Databricks SQL + Fabric",
    metrics: [
      { label: "Manual Effort Saved", value: "15+ hrs/week", highlight: true },
      { label: "Extraction Accuracy", value: "95%+ score", highlight: true },
      { label: "Processing Speedup", value: "50% faster" },
      { label: "Compute Cost Cut", value: "70% savings" }
    ],
    challenge: "Analysts spent hundreds of monthly hours manually reviewing vendor contracts, medical invoices, and business risk descriptions to compile Risk Assessment and Categorization Tool (RACT) filings, with high human error rates and exorbitant cloud runtimes.",
    architectureSolution: [
      "Engineered a high-throughput Power Automate pipeline integrated with AI Builder to ingest natural language risk descriptions and dynamically assign RACT categories.",
      "Optimized downstream writes by chunking JSON array payloads and executing Databricks SQL MERGE statements, avoiding row-by-row write locks.",
      "Integrated Azure AI Foundry Content Understanding service to cross-reference extracted vendor contract items against invoiced line items, spotting procedure pricing disparities and replacing legacy brittle Python scripts.",
      "Implemented automated dynamic Fabric Capacity auto-scaling governed by KQL log alerts and Azure Logic Apps, eliminating idle compute expenses."
    ],
    keyEngineeringTriumph: "Reduced cloud compute costs by 70% while improving optical document data extraction confidence to over 95% across unstructured vendor contracts.",
    technologies: ["Azure AI Foundry", "AI Builder", "Power Automate", "Azure Databricks SQL", "Microsoft Fabric", "KQL Alerts", "Azure Logic Apps"]
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
      "Architected and deployed an authenticated Power Pages Student Dashboard, enabling thousands of students to access their enrollment records, course statuses, grades, and fee receipts securely in real-time.",
      "Engineered a dynamic Live Course Catalog connecting Power Pages Cloud Flow API to the Destiny One REST API via custom HTTP connectors, parsing JSON payloads and synchronizing catalog descriptions straight into Dataverse.",
      "Deployed Microsoft Copilot Studio agents grounded on internal university knowledge bases to autonomously answer multi-turn student questions with zero human intervention.",
      "Created an event-driven Power Automate pipeline triggered by course completion webhooks to autonomously generate branded completion certificates and dispatch notifications."
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
    challenge: "During large-scale cross-tenant tenant consolidation for a top-tier European banking client, over 500 legacy Nintex and SharePoint Designer workflows along with deprecated InfoPath forms had to be modernized with strict compliance, zero downtime, and complete auditability.",
    architectureSolution: [
      "Executed complex cross-tenant migrations using PowerShell and ShareGate, preserving metadata, list schemas, and granular permission inheritance across thousands of sites.",
      "Developed an autonomous Power Automate Desktop (RPA) bot that crawled newly migrated SharePoint Online sites, verified visual UI hierarchy, executed interactive form submissions, and captured screenshot evidence for exception logging.",
      "Re-engineered fragile InfoPath legacy forms into secure, responsive Power Apps with Dataverse backend entities, ensuring strict Data Loss Prevention (DLP) compliance.",
      "Standardized enterprise Application Lifecycle Management (ALM) using solution layering, environment variables, and automated solution pipelines between Dev, Test, and Prod.",
      "Delivered real-time SharePoint and Power BI migration telemetry dashboards used daily by 4 senior managers and 9 team leads."
    ],
    keyEngineeringTriumph: "Modernized 500+ legacy Nintex/Designer workflows into Power Automate with zero data corruption and created unattended RPA bots that saved hundreds of hours of manual verification testing.",
    technologies: ["Power Automate Desktop (RPA)", "SharePoint Online", "Power Apps", "ShareGate", "PowerShell", "Dataverse", "ALM Solutions", "Power BI"]
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
    summary: "Leading Power Platform and AI solution engineering across life sciences and enterprise operations, architecting high-scale automations, Power BI semantic models, and Azure AI Foundry integrations.",
    keyAchievements: [
      "Designed and developed the Vital Signs Review Power BI report with embedded Power Apps Canvas Apps, accelerating clinical evaluation by 60% for Scientific and Medical Reviewers.",
      "Engineered a bulk-edit update mechanism using Dataverse/SQL Patch and ClearCollect, bypassing 1,000-record delegation limits via Power Automate HTTP webhooks.",
      "Automated business risk analysis with AI Builder and Power Automate, batching array chunks and executing Databricks SQL MERGE statements to save 15+ hours weekly.",
      "Constructed an automated AI Builder pipeline with Azure Databricks to monitor patient vitals and synthesize clinical health risk queries directly into Azure SQL.",
      "Extracted vendor contract data via Azure AI Foundry models with 95%+ confidence, reducing invoice dispute processing time by 50% and compute cost by 70%.",
      "Automated dynamic Microsoft Fabric Capacity scaling using KQL log alerts and Azure Logic Apps, preventing compute over-provisioning."
    ],
    technologies: ["Power Apps", "Power Automate", "Power BI", "Dataverse", "Azure Databricks", "Azure AI Foundry", "Logic Apps", "Fabric", "KQL", "Azure SQL"]
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
      { name: "Power Apps (Canvas & Model-Driven)", level: "Expert", featured: true },
      { name: "Power Automate (Cloud & Webhooks)", level: "Expert", featured: true },
      { name: "Power Automate Desktop (RPA)", level: "Expert", featured: true },
      { name: "Microsoft Dataverse", level: "Expert", featured: true },
      { name: "Power BI & Semantic Modeling", level: "Expert", featured: true },
      { name: "Microsoft Copilot Studio", level: "Advanced", featured: true },
      { name: "AI Builder", level: "Advanced", featured: true },
      { name: "Power Pages", level: "Advanced", featured: true },
      { name: "Power Platform ALM & CoE", level: "Expert", featured: true },
      { name: "Power Fx", level: "Expert" },
    ]
  },
  {
    category: "Cloud, Data & AI Engineering",
    description: "Big data pipelines, Azure services, and modern LLM vector architectures",
    iconName: "Database",
    skills: [
      { name: "Azure Databricks", level: "Advanced", featured: true },
      { name: "Azure AI Foundry", level: "Advanced", featured: true },
      { name: "Azure SQL Database", level: "Expert", featured: true },
      { name: "Azure Functions & Logic Apps", level: "Advanced", featured: true },
      { name: "Microsoft Fabric", level: "Proficient", featured: true },
      { name: "FAISS Vector Stores", level: "Advanced" },
      { name: "RAG & LLM Integration", level: "Advanced", featured: true },
      { name: "KQL (Kusto Query Language)", level: "Advanced" },
      { name: "ETL / ELT Pipelines", level: "Advanced" },
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
      { name: "C# / .NET", level: "Proficient" },
      { name: "JavaScript / TypeScript (React)", level: "Advanced" },
      { name: "REST APIs & JSON Processing", level: "Expert", featured: true },
      { name: "HTML5 / CSS3 / Tailwind", level: "Advanced" },
      { name: "Git, Jira, Confluence, VS Code", level: "Expert" }
    ]
  }
];
