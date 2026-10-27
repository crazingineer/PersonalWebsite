# Shubham Yadav — Personal Website & Enterprise Architecture Portfolio

> **Power Platform Solution Architect (PL-600) | Azure Cloud Data & Enterprise AI Engineer**  
> Master of Applied Computing, Wilfrid Laurier University • Waterloo, ON / Pune, MH

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/Built%20with-Vite%20%2B%20React-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS%20v3-38B2AC.svg)](https://tailwindcss.com/)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-22c55e.svg)](https://pages.github.com/)

A modern, high-impact personal website inspired by the bold editorial storytelling, comic framing, and technical craftsmanship of **Saeed Kolivand's portfolio** (`saeedkolivand/saeed-kolivand-portfolio`).

---

## 💡 Executive Portfolio & NDA-Safe Architecture Strategy

Enterprise work built for organizations such as **KPI Partners**, **Accenture**, and academic institutions is protected by corporate governance, SSO, and NDAs. 

Rather than exposing proprietary code or internal database schemas on a public website, this portfolio focuses on **High-Level Systems Architecture, Business ROI, and Key Discussion Topics for Interviews**:

- **Clinical Data Review & Embedded AI Adjudication Platform:** In-report Power BI embedded Canvas UI, overcoming low-code delegation barriers with chunked in-memory caching, and defensive update-only database persistence (**60% faster clinical review cycles**).
- **Resilient Cloud Data Sync & Safeguarded GraphQL Engine:** Scheduled weekly workbook sync with Monday.com GraphQL API, composite key resolution, and a defensive **Archive Sanity Gate** preventing accidental mass data wipes.
- **High-Throughput Risk Classification & Cloud Capacity Optimizer:** Scaling batch pipelines with dynamic array chunking and 20 parallel threads, non-locking bulk write-backs, and automated Microsoft Fabric compute auto-scaling via KQL alerts (**70% compute cost cut, 15+ hours/week saved**).
- **Azure AI Foundry Content Understanding POC:** Supervised ground-truth modeling for automated contract-to-invoice disparity detection (**95%+ extraction confidence score, 50% faster audit cycle**).
- **Higher-Ed Student Lifecycle Modernization:** Authenticated Power Pages self-service, REST API synchronization into Dataverse, and grounded Copilot Studio agents (**83.5% support query deflection, 27,000 users migrated**).
- **Cross-Tenant Enterprise Migration & CoE Governance:** Modernization of 500+ legacy Nintex/Designer workflows, unattended Power Automate Desktop (RPA) validation bots across thousands of sites, and multi-tier ALM pipelines.

Each case study includes dedicated **"Topics to Dive Into During an Interview"** to spark meaningful technical conversations with hiring managers and engineering leads.

---

## ✨ Features

- 📰 **Editorial / Comic Masthead ("Issue #01"):** High-contrast comic panels, Ben-Day halftone patterns, status badges (`200 OK`, `PL-600 ARCHITECT`), and impact typography.
- 💻 **Interactive CLI Command Deck:** Built-in retro terminal with command execution (`help`, `about`, `case-studies`, `monday`, `medical`, `poc`, `certs`, `skills`, `cat`) and hotkey history.
- ⚡ **Interactive System Architecture Flow Simulator:** Step through conceptual production pipelines (Clinical Lakehouse Review, Cross-Platform Sync & Sanity Gate, High-Throughput Risk Engine) with stage-by-stage status indicators.
- 🏆 **8x Microsoft Certifications Gallery:** Interactive badge deck (PL-600 Solution Architect, PL-400 Developer, AZ-204 Azure Developer, AI-900, SC-900, PL-900, AZ-900, MS-900) with category filters and celebration confetti.
- 🔊 **Web Audio API Native Sound Synthesizer:** Subtle, optional retro sound FX (zero external audio files to download; 100% browser-native).
- 📄 **Instant Resume Modal & Print Preview:** In-browser resume viewer with instant one-click PDF printing.

---

## 🚀 Local Development

```bash
# 1. Start local development server
npm run dev
```

Visit `http://localhost:5173` to view the site.

```bash
# To test production build locally:
npm run build
npm run preview
```

---

## 🌐 How to Host on GitHub Pages (100% Free)

### Option A: Automated GitHub Actions CI/CD (Recommended)

This repository includes a pre-configured `.github/workflows/deploy.yml`.

1. **Create a GitHub repository** (e.g., `personal-website` or `<your-username>.github.io`).
2. **Push your code to the repository**:
   ```bash
   git add .
   git commit -m "feat: redesign portfolio with executive case studies and interview topics"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
3. In GitHub, go to your repository:
   - Click **Settings** &rarr; **Pages** (under "Code and automation" on the left sidebar).
   - Under **Build and deployment** &rarr; **Source**, select **GitHub Actions**.
4. Every push to `main` automatically compiles and deploys the site to:
   ```
   https://<your-username>.github.io/<your-repo-name>/
   ```

### Option B: One-Command CLI Deploy (`gh-pages`)

```bash
npm run deploy
```
Then in GitHub **Settings** &rarr; **Pages**, select branch **`gh-pages`** and folder **`/ (root)`**, then click **Save**.
