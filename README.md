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

> *"I currently do not have anything to show for the portfolio as all my major work was for the companies I worked for."*

Enterprise engineers at firms like **Accenture**, **KPI Partners**, and universities build mission-critical solutions protected by corporate firewalls, SSO, and NDAs.

Rather than relying on toy demo apps, this website presents your professional track record as **Enterprise Architectural Case Studies & Production Impact Blueprints**:
- **Problem & Constraint Framing:** (e.g., Bypassing Power Apps 1,000-record delegation limits; migrating 500+ legacy Nintex flows; extracting vendor contract data with 95%+ confidence).
- **System Architecture & Data Flows:** How Power Apps, Dataverse, Azure AI Foundry, Databricks SQL, and Logic Apps integrate.
- **Quantifiable Business ROI:** **60%** clinical review speedup, **15+ hours/week** saved, **70%** compute cost cut, **83.5%** support query reduction.
- **Client & NDA Safe:** Highlights engineering patterns, schemas, and algorithms without exposing proprietary client data.

---

## ✨ Features

- 📰 **Editorial / Comic Masthead ("Issue #01"):** High-contrast comic panels, Ben-Day halftone patterns, and bold typography.
- 💻 **Interactive CLI Command Deck:** Built-in retro terminal with command execution (`help`, `about`, `case-studies`, `projects`, `certs`, `skills`, `cat`, etc.) and hotkey history.
- ⚡ **Interactive Architecture Flow Simulator:** Step through real production pipelines (Clinical Vitals Flow, Enterprise RACT Ingestion Flow, Student Copilot Flow).
- 🏆 **8x Microsoft Certifications Gallery:** Interactive badge deck (PL-600 Solution Architect, PL-400 Developer, AZ-204 Azure Developer, AI-900, SC-900, PL-900, AZ-900, MS-900) with category filters and celebration confetti.
- 🔊 **Web Audio API Sound Synthesizer:** Subtle, optional retro sound FX (zero audio files to download; 100% browser-native).
- 📄 **Instant Resume Modal & Print Preview:** In-browser resume viewer with instant one-click PDF printing.
- 📱 **Fully Responsive:** Seamless layout from mobile screens up to 4K displays.

---

## 🚀 Local Development

```bash
# 1. Clone repository
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>

# 2. Install dependencies
npm install

# 3. Start local development server
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

You can host this site for free on GitHub Pages using either of the two methods below:

### Method 1: Automated Deployment via GitHub Actions (Recommended)

This repository already includes `.github/workflows/deploy.yml`.

1. **Create a GitHub repository** (e.g., `personal-website` or `<your-username>.github.io`).
2. **Push your code to the repository**:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of personal website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
3. In GitHub, go to your repository:
   - Click **Settings** &rarr; **Pages** (under "Code and automation" on the left sidebar).
   - Under **Build and deployment** &rarr; **Source**, select **GitHub Actions**.
4. That's it! Every time you push to the `main` branch, GitHub Actions will automatically compile the site and deploy it to:
   ```
   https://<your-username>.github.io/<your-repo-name>/
   ```
   *(Or `https://<your-username>.github.io` if your repository is named `<your-username>.github.io`).*

---

### Method 2: One-Command CLI Deploy (`gh-pages`)

If you prefer to deploy directly from your computer terminal without GitHub Actions:

1. In `package.json`, the `deploy` script is already set up:
   ```bash
   npm run deploy
   ```
2. In GitHub, go to **Settings** &rarr; **Pages**:
   - Set **Source** to **Deploy from a branch**.
   - Select the **`gh-pages`** branch and folder **`/ (root)`**, then click **Save**.

---

### (Optional) Custom Domain

To connect a custom domain (e.g., `shubhamyadav.dev`):
1. In your repository **Settings** &rarr; **Pages**, enter your domain under **Custom domain**.
2. Add a `CNAME` record in your DNS provider pointing to `<your-username>.github.io`.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 6
- **Styling:** Tailwind CSS 3
- **Icons:** Lucide React + Custom Brand SVGs
- **Audio:** Web Audio API Native Synth
- **Deployment:** GitHub Pages / GitHub Actions
