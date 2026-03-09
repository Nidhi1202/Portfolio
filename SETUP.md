# Portfolio Setup & Deployment Guide

## Step 1 — Add Your Profile Photo

Copy your preferred photo (the LinkedIn DP or the full photo) to:

```
Portfolio/src/assets/profile.jpg
```

**Important:** The file must be named exactly `profile.jpg`.
(Or if you save it as `.png`, update `src/components/Hero.jsx` line 4: change `profile.jpg` to `profile.png`)

---

## Step 2 — Install Dependencies

Open a terminal in the `Portfolio/` folder and run:

```bash
npm install
```

---

## Step 3 — Preview Locally

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Step 4 — Deploy to GitHub Pages

### 4a. Create a GitHub repository

1. Go to github.com and create a new repository
2. Name it: `portfolio` (or any name you like)
3. Keep it **public**
4. Do NOT initialize with README

### 4b. Push your code

In the `Portfolio/` folder, run:

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/Nidhi1202/portfolio.git
git push -u origin main
```

### 4c. Deploy

```bash
npm run deploy
```

This will:
- Build the production site into `dist/`
- Push it to a `gh-pages` branch automatically

### 4d. Enable GitHub Pages

1. Go to your repository on GitHub
2. Settings → Pages
3. Source: **Deploy from a branch**
4. Branch: **gh-pages** → **/ (root)**
5. Click Save

Your site will be live at: `https://nidhi1202.github.io/portfolio/`

---

## Updating the Portfolio Later

After making any changes:

```bash
git add .
git commit -m "Update portfolio"
git push
npm run deploy
```

---

## Notes

- The `vite.config.js` uses `base: './'` which works correctly with GitHub Pages.
- If you rename the GitHub repo, no config changes needed.
- LinkedIn and GitHub links are already set correctly in the code.
- To add a resume download button: save your resume as `public/resume.pdf` and uncomment the FileText button in Hero.jsx
