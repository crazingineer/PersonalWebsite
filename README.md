# Shubham Yadav — Personal Website & Enterprise Architecture Portfolio

> **Power Platform Solution Architect (PL-600) | Azure Cloud Data & Enterprise AI Engineer**  
> Master of Applied Computing, Wilfrid Laurier University • Waterloo, ON / Pune, MH

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/Built%20with-Vite%20%2B%20React-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS%20v3-38B2AC.svg)](https://tailwindcss.com/)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-22c55e.svg)](https://pages.github.com/)

A modern, high-impact personal website inspired by the bold editorial storytelling, comic framing, and technical craftsmanship of **Saeed Kolivand's portfolio** (`saeedkolivand/saeed-kolivand-portfolio`).

---

## 💡 How This Solves the "Enterprise Work / No Public Portfolio" Challenge

Enterprise engineers at firms like **KPI Partners**, **Accenture**, and universities build mission-critical solutions protected by corporate firewalls, SSO, and NDAs.

Rather than relying on toy demo apps, this website showcases your verified production capabilities through **Deep-Dive Architectural Case Studies & Live Code Blueprints**:
- **Medical Review AI Orchestrator & Persistence:** Databricks warehouse SQL (`vs_current_clinical_data`) with delta metrics, AI Builder prompt evaluation (`dm_query` & `medical_query`), schema validation via `ParseJson`, and an immutable **Update-Only constraint** in Azure SQL (`GetItems_V2` + `PatchItem_V2` preventing orphaned inserts).
- **Embedded PowerBIIntegration Canvas Apps:** Inline clinical adjudication directly within Power BI reports dynamically detecting user roles (`Scientific Reviewer` vs `Medical Reviewer`) and bypassing 1,000-record delegation limits with `ClearCollect`.
- **Monday.com GraphQL Upsert & Archive Sanity Engine:** Scheduled OneDrive synchronization (`MasterList_yyyymmdd.xlsx`) with Monday.com GraphQL API, composite key upserts `lower(trim(client)) || lower(trim(project))`, and a fail-safe **Archive Sanity Gate** (`rowsRead >= 150 AND rowsRead >= 80% boardCount`) preventing accidental mass board purge.
- **High-Throughput Risk Category Generator (RACT):** Dynamic array chunking `@chunk(..., 100)` with 20 parallel threads (`repetitions: 20`) executing atomic Databricks `MERGE INTO ... WHEN MATCHED THEN UPDATE` statements without table locks.
- **Azure AI Foundry Financial POC:** Custom document analyzer trained on a ground-truth corpus of 20 legal contracts and 50 medical invoices with 95%+ confidence.
- **Power BI Asynchronous Dataset Refreshes:** Automated `POST /refreshes` with exponential backoff on HTTP 429 throttling and polling against `requestId` history.

---

## ✨ Features

- 📰 **Editorial / Comic Masthead ("Issue #01"):** High-contrast comic panels, Ben-Day halftone patterns, status badges (`200 OK`, `PL-600 ARCHITECT`), and impact typography.
- 💻 **Interactive CLI Command Deck:** Built-in retro terminal with command execution (`help`, `about`, `case-studies`, `monday`, `medical`, `poc`, `code`, `certs`, `skills`, `cat`) and hotkey history.
- 🔬 **Production Code & Architecture Inspector:** Dedicated visual inspector for actual production code artifacts: Databricks SQL atomic MERGE statements, Power Fx `ClearCollect` expressions, Monday.com GraphQL mutations, and AI Builder prompt schemas.
- ⚡ **Interactive Architecture Flow Simulator:** Step through production data pipelines with stage-by-stage status indicators and execution outputs.
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
   git commit -m "feat: add enterprise case studies and architecture blueprints"
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

