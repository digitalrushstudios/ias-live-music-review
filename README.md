# iAS Live Music Review — Landing Page

Premium editorial landing page for **iAS Live Music Review** by iCREEUPREE LLC.

Built with React + Vite + TypeScript + Tailwind CSS + Framer Motion + GSAP.

---

## Quick Start

```bash
# 1. Enter the project folder
cd ias-live-music-review

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Build for Production

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

---

## Project Structure

```
ias-live-music-review/
├── public/                   # Static assets (favicon, images)
├── src/
│   ├── assets/               # Import-able assets (SVGs, etc.)
│   ├── components/
│   │   └── Navbar.tsx        # Fixed floating navigation
│   ├── hooks/
│   │   └── useScrollAnimation.ts  # GSAP scroll-reveal hooks
│   ├── sections/
│   │   ├── LoadingScreen.tsx  # Animated intro loader
│   │   ├── Hero.tsx           # Full-screen cinematic hero
│   │   ├── FeaturedReviews.tsx  # Editorial card grid
│   │   ├── About.tsx          # Brand story + pillars
│   │   ├── CoverageCategories.tsx  # 4 coverage type cards
│   │   ├── ArtistSubmissionCTA.tsx # Conversion section
│   │   ├── Gallery.tsx        # Concert photo gallery grid
│   │   ├── Stats.tsx          # Animated stat counters
│   │   └── Footer.tsx         # Contact, social, links
│   ├── styles/
│   │   └── globals.css        # Tailwind + custom utilities
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

---

## Customisation Guide

### Logo
Search `REPLACE` in `Navbar.tsx` and `Footer.tsx`.
Swap the gradient placeholder div with:
```jsx
<img src="/logo.png" alt="iAS Logo" className="h-8 w-auto" />
```

### Hero Background
Open `src/sections/Hero.tsx` and find the `HERO BACKGROUND` comment block.
Replace the gradient divs with a real video or image:
```jsx
// Video
<video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" src="/hero.mp4" />

// Image
<img src="/hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
```
Keep the overlay `div`s for the dark vignette effect.

### Review Cards
Edit `REVIEWS` array in `FeaturedReviews.tsx`.
Each card accepts an `imageUrl` — add the field and render it as an `<img>` instead of the gradient placeholder.

### Gallery Photos
Edit `GALLERY_ITEMS` array in `Gallery.tsx`.
Add `imageUrl` to each item and replace the gradient `div` with an `<img>`.

### Submission Form
Search `href="#"` near "Submit for Review" in `ArtistSubmissionCTA.tsx` and `Footer.tsx`.
Point these to your Typeform / Google Form / Airtable form URL.

### Email & Social Links
Open `Footer.tsx` and update:
- `href="mailto:hello@iaslivemusicreview.com"` → your real email
- Each `SOCIALS` item `href` → your real social profile URL

### Stats Numbers
Edit the `STATS` array in `Stats.tsx`.

### Colors & Fonts
Colours are defined in `tailwind.config.js` and inline CSS variables throughout.
Primary accent: `#8B5CF6` → `#38BDF8` gradient.
Body font: Inter | Editorial font: Instrument Serif (italic).

---

## Tech Stack

| Layer       | Library              |
|-------------|----------------------|
| Framework   | React 18             |
| Bundler     | Vite 5               |
| Language    | TypeScript 5         |
| Styling     | Tailwind CSS 3       |
| Animation   | Framer Motion 11     |
| GSAP        | GSAP 3 (hero, loader, reveals) |
| Icons       | Lucide React         |
| Fonts       | Google Fonts (Inter + Instrument Serif) |

---

## Notes

- All `REPLACE` comments mark assets, URLs, and content to swap for production.
- No lorem ipsum — all placeholder copy is brand-aligned and editable.
- Fully responsive: mobile, tablet, desktop.
- Accessible: semantic HTML, `aria-label` on interactive elements, readable contrast.
