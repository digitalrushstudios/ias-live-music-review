# iAS Live Music Review — Project Guide

## What This Repo Is
This is the **iAS Live Music Review** landing page — the official site for iAS Multi Media Group,
operated by iCREEUPREE LLC (Joli Harris, CEO). Hosted by Double V & Lady Buggg.

**Live URL:** https://digitalrushstudios.github.io/ias-live-music-review/

## ⚠️ IMPORTANT — One Repo = One Project
This repository is ONLY for the iAS Live Music Review site.
Do NOT build, deploy, or push any other project here.
Each new site (EPK, landing page, portfolio) must be in its own separate repository.

## Tech Stack
- React 18 + TypeScript + Vite
- Tailwind CSS (dark theme: `#050506` bg, purple→sky gradient `#8B5CF6→#38BDF8`)
- Framer Motion + GSAP animations
- Google Fonts: Inter (sans) + Instrument Serif (editorial)
- Deployed to GitHub Pages via `.github/workflows/deploy.yml`

## Deploy
Push to `main` → GitHub Actions auto-builds and deploys to `gh-pages` branch.
GitHub Pages serves from `gh-pages` branch root.
Vite base path is `/ias-live-music-review/` — do not change this.

## Brand
- **Brand name:** iAS Multi Media Group
- **Operating entity:** iCREEUPREE LLC
- **Tagline:** "Get organized, visible, and discovered."
- **Hosts:** Double V & Lady Buggg
- **Founder:** Joli Harris — Bronx, NY
- **Email:** iaslivemusicreview@gmail.com
- **Socials:** @iasmusic (IG, YT), @IASMusic (FB), @iaslivemusicreview (TikTok)
- **Signature format:** "Like Love or Lose It"
- **Services:** Music & Video Reviews, iAS Publication, Newsletter Advertising, Registration Services
- **Colors:** bg `#050506`, surface `#101014`, purple `#8B5CF6`, sky `#38BDF8`, text `#F5F5F5`, muted `#9B9BA3`

## Key Files
- `src/App.tsx` — root layout
- `src/components/Navbar.tsx` — navigation
- `src/components/CustomCursor.tsx` — custom cursor
- `src/sections/Hero.tsx` — hero section with GSAP word-reveal + mouse parallax
- `src/sections/About.tsx` — brand story with real iAS content
- `src/sections/FeaturedReviews.tsx` — service showcase cards
- `src/sections/CoverageCategories.tsx` — 4 real services
- `src/sections/ArtistSubmissionCTA.tsx` — submission CTA
- `src/sections/Gallery.tsx` — horizontal drag-scroll gallery
- `src/sections/Stats.tsx` — animated stat counters
- `src/sections/Footer.tsx` — footer with real social links
- `src/sections/LoadingScreen.tsx` — GSAP loading screen
- `src/styles/globals.css` — global styles, custom cursor CSS, noise overlay
