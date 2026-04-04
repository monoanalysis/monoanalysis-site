# Monu — Commodity Markets Research Site

A personal website for publishing independent commodity market analysis.
Built with Next.js. Content managed through simple markdown files.

---

## Project Structure

```
commodity-site/
├── content/
│   └── reports/              ← YOUR REPORTS LIVE HERE
│       ├── corn-wti-correlation.md
│       ├── ne-gas-basis.md
│       └── pjm-ercot-divergence.md
├── src/
│   ├── app/                  ← Pages (home, research, about, contact)
│   │   ├── page.js           ← Home page
│   │   ├── layout.js         ← Nav + footer (shared across all pages)
│   │   ├── globals.css       ← All styles
│   │   ├── research/page.js  ← Research listing page
│   │   ├── reports/[slug]/page.js  ← Individual report page
│   │   ├── about/page.js
│   │   └── contact/page.js
│   ├── components/
│   │   └── ResearchPageClient.js  ← Search + filter logic
│   └── lib/
│       └── reports.js        ← Reads markdown files
├── public/                   ← Static files (images, PDFs, charts)
├── package.json
├── next.config.js
└── README.md
```

---

## How to Publish a New Report

### Step 1: Create a markdown file

Create a new `.md` file in `content/reports/`. The filename becomes the URL slug.

Example: `content/reports/my-new-report.md` → accessible at `/reports/my-new-report`

### Step 2: Add front matter (metadata at the top)

Every report needs this block at the very top:

```markdown
---
title: "Your Report Title"
subtitle: "A brief subtitle explaining the focus"
date: "2026-04-15"
tags: ["Oil", "Gas"]
featured: false
summary: "One or two sentences that appear on the card in the research listing."
---
```

**Fields explained:**
- `title` — appears as the main heading
- `subtitle` — italic line below the title
- `date` — format YYYY-MM-DD, determines sort order (newest first)
- `tags` — array of tags for filtering. Use: "Oil", "Gas", "Agriculture", "Macro"
- `featured` — set to `true` to highlight on the home page
- `summary` — short description shown on listing cards

### Step 3: Write your content in markdown

Below the front matter, write your analysis using standard markdown:

```markdown
## Motivation

Your opening section explaining why this topic matters...

## Data & Methodology

How you approached the analysis...

## Results

What you found. You can use:

- Bullet points for key findings
- **Bold text** for emphasis
- `inline code` for tickers or formulas

## Interpretation

What it means for traders and markets...
```

### Step 4: Deploy

Push to GitHub. Netlify/Vercel auto-rebuilds and your new report is live.

---

## How to Edit an Existing Report

Open the markdown file in `content/reports/`, make your changes, save, push to GitHub. Done.

---

## How to Remove a Report

Delete the `.md` file from `content/reports/`. Push to GitHub. The report disappears from the site.

---

## How to Edit Site Pages

| What you want to change | File to edit |
|---|---|
| Home page content | `src/app/page.js` |
| About page bio | `src/app/about/page.js` |
| Contact page | `src/app/contact/page.js` |
| Navigation links | `src/app/layout.js` |
| Colors, fonts, styling | `src/app/globals.css` |
| Filter tag options | `src/components/ResearchPageClient.js` (TAGS array) |

---

## Adding Images and Charts to Reports

### Option 1: Static images
1. Put your image in `public/images/` (e.g., `public/images/corn-wti-chart.png`)
2. Reference it in your markdown: `![Chart description](/images/corn-wti-chart.png)`

### Option 2: Matplotlib charts
1. Generate your chart in Python and save as PNG
2. Move the PNG to `public/images/`
3. Reference in markdown

---

## Full Example: Publishing a New Report

1. Write your analysis in a new file:

```
content/reports/wheat-export-flows.md
```

2. Content of the file:

```markdown
---
title: "Black Sea Wheat Export Flows Under Sanctions"
subtitle: "Tracking rerouted grain trade and price discovery shifts"
date: "2026-04-10"
tags: ["Agriculture", "Macro"]
featured: true
summary: "How sanctions on Russian wheat exports have rerouted global grain flows and shifted price discovery from FOB Black Sea to alternative benchmarks."
---

## Motivation

Since the imposition of expanded sanctions on Russian agricultural
exports in late 2025, global wheat trade flows have undergone a
significant rerouting...

## Data & Methodology

We track AIS vessel movement data for bulk carriers departing
Black Sea ports...

## Results

Russian wheat exports declined 35% in Q1 2026 compared to the
prior year...

## Interpretation

The key implication for grain traders is that FOB Black Sea is
no longer a reliable benchmark...
```

3. Push to GitHub:
```bash
git add content/reports/wheat-export-flows.md
git commit -m "New report: Black Sea wheat export flows"
git push
```

4. Your site rebuilds automatically. Report appears on the home page (featured: true) and in the research library.

---

## Deployment Guide

### Option A: Vercel (Recommended — easiest)

1. Create a GitHub account and push this project to a new repo
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Import Project" and select your repo
4. Vercel auto-detects Next.js — click Deploy
5. Add your custom domain in Vercel dashboard → Settings → Domains

### Option B: Netlify

1. Push project to GitHub
2. Go to [netlify.com](https://netlify.com), sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your repo
5. Build command: `npm run build`
6. Publish directory: `out`
7. Add custom domain in Site settings → Domain management

### Buying a domain

Go to [namecheap.com](https://namecheap.com) and search for your desired domain.
Cost: ~$10-12/year. Then point it to Vercel or Netlify using their DNS instructions.

---

## Local Development

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Open http://localhost:3000
```

---

## Publishing Workflow Summary

| Action | What to do |
|---|---|
| **New report** | Create `.md` file in `content/reports/`, push to GitHub |
| **Edit report** | Edit the `.md` file, push |
| **Remove report** | Delete the `.md` file, push |
| **Add chart** | Save image to `public/images/`, reference in markdown |
| **Edit bio** | Edit `src/app/about/page.js` |
| **Change styling** | Edit `src/app/globals.css` |

That's it. Write markdown, push to GitHub, site updates automatically.
