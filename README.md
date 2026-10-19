# Saqib Mojeeb — Pixel Portfolio

A React + TypeScript + Vite portfolio starter with an interactive room, galleries, work tabs, and a career timeline. No database, Supabase, authentication, admin dashboard, or paid API is required.

## Run on Windows
1. Install Node.js (LTS).
2. Extract this ZIP.
3. Open the extracted `saqib-portfolio` folder in File Explorer.
4. Click the address bar, type `cmd`, and press Enter.
5. Run `npm install`, then `npm run dev`.
6. Open the local URL shown in the terminal (usually `http://localhost:5173`).

Production build: `npm run build` (output folder: `dist`).

## Edit content
- Profile and links: `src/data/profile.ts`
- Work tabs: `src/data/workExperience.ts`
- Timeline: `src/data/journey.ts`
- Gallery file paths: `src/data/galleries.ts`

Replace placeholders with confirmed details before publishing. Current work entries contain some placeholders by design.

## Add photos
Add your own images at the paths listed in `src/data/galleries.ts`, such as `public/images/travel/travel-01.jpg`. Profile image folder: `public/images/profile/`. Gallery placeholders are not meant to represent your actual photographs.

Add a real PDF at `public/resume.pdf`, or change `resume` in `src/data/profile.ts`. Add actual LinkedIn, GitHub, and email values there; blank values hide profile links.

## GitHub (optional)
Create a repository on GitHub, then run these commands from this folder:
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```
Replace the URL with your own repository URL. Never share access tokens or passwords in chat.

## Deploy
Use a static host that supports Vite. Build command: `npm run build`; output directory: `dist`. Check current free-tier limits and SPA route fallback support with your host.

## Notes
The room is currently built from CSS shapes and small icons to provide a functioning starter. It can later be upgraded with custom pixel-art image/SVG assets. No personal photos or contact links have been fabricated.
