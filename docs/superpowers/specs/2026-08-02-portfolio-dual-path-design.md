# Portfolio Dual-Path Refine — Design Spec

**Date:** 2026-08-02  
**Repo:** `wablevaibhav.github.io`  
**Status:** Approved for planning  
**Sources:** [GitHub profile](https://github.com/wablevaibhav), existing React portfolio

## Goal

Refine the portfolio so visitors immediately understand that Vaibhav works full-time at CentraLogic **and** freelances in parallel. Add a dedicated CSS-3D dual-path showcase, refresh hero/copy/projects from the public profile, and keep the existing React + Vite + Tailwind + Framer Motion stack without new 3D libraries.

## Scope (Approach B + CSS 3D Approach 1)

**In scope**
- New DualPath showcase section with CSS 3D tilt panels
- Hero / CTA rewrite for freelancing availability
- Experience data update (add freelance role; CentraLogic promotion note)
- Projects aligned to GitHub featured repos
- About / Skills / Contact copy cleanup
- Nav link to DualPath
- `prefers-reduced-motion` support for 3D interactions

**Out of scope**
- Three.js / React Three Fiber / WebGL
- Full visual redesign (colors, typography system, layout overhaul)
- Backend / CMS / contact form backend
- New dependencies beyond what is already installed

## Architecture

Keep the current SPA structure. Content remains data-driven from `src/data/portfolioData.js`. Add one section component and wire it in `App.jsx` + navbar.

```
App
├── Navbar (+ DualPath link)
├── Hero (freelance-forward CTAs; no first-viewport stats grid)
├── About (updated copy)
├── DualPath (NEW — CSS 3D company | freelance panels)
├── Skills (light cleanup)
├── Experience (chronological; includes freelance)
├── Projects (GitHub-aligned)
├── Education
├── Contact (freelance CTA copy)
└── Footer
```

### Data additions (`portfolioData.js`)

- `dualPath`: two track objects (`fullTime`, `freelance`) with title, company/label, period, summary, highlights[], tech[], cta
- `experiences`: insert Freelance (Aug 2021 – Dec 2023); keep CentraLogic as one entry with promotion note (Trainee → Software Engineer Jun 2024); keep RootKit
- `projects`: retain production highlights (Live Tracking, AI Tutor if kept); add Portfolio, LinkedIn Clone, FoodRunner, Resume Builder, FolkChat, claryft_components with GitHub URLs where available
- `personalInfo`: update about text (3+ years, CentraLogic + freelance, stack from README); badge/availability string for hero

## DualPath component

**Placement:** After About, before Skills. Section id: `dual-path`.

**Layout**
- Section tag + headline (“Building on two tracks” or equivalent)
- Desktop: two panels side-by-side with a thin centered “AND” connector
- Mobile: stacked panels; connector becomes a short horizontal/vertical divider; no mouse-tilt required (static or subtle scroll fade-in only)

**Panel content**
1. **Full-time — CentraLogic**  
   Role, period (Jan 2024 – Present), 3–4 highlights, tech chips, optional link to Experience section
2. **Freelance — Open for work**  
   Services (Flutter / React Native / web / API / store releases), past freelance years (2021–2023), CTA to `#contact` and LinkedIn

**3D interaction (CSS only)**
- Parent: `perspective` on a wrapper
- Child: `transform-style: preserve-3d`; on pointer move map cursor to `rotateX` / `rotateY` (clamped, e.g. ±8–12°)
- Soft idle float via Framer Motion or CSS animation
- Depth via layered shadow / subtle translateZ on inner content
- On pointer leave, ease back to rest
- If `prefers-reduced-motion: reduce`: no tilt, no float — static elevated cards only

**Implementation notes**
- Prefer a small reusable `TiltCard` helper inside the DualPath folder or a shared component
- No Three.js; no canvas 3D
- Touch devices: skip continuous tilt; use press/hover elevation if useful

## Hero & CTAs

- Status badge: “Open to freelance & contract work” with existing pulse indicator
- Supporting sentence: Software Engineer at CentraLogic **and** available for freelance Flutter / React Native / web
- Primary CTA: Let’s talk → `#contact`
- Secondary: View Resume
- Optional tertiary: LinkedIn text/link
- Remove the four stat cards from the first viewport
- Keep particle canvas and existing Framer Motion entrances

## Experience

- Chronological expandable cards (existing UI pattern)
- Entries:
  1. Software Engineer · CentraLogic · Jan 2024 – Present (note: Trainee Jan–Jun 2024 → Engineer Jun 2024–Present)
  2. Mobile Application Developer · Freelance · Aug 2021 – Dec 2023
  3. Android Developer Intern · RootKit · Jan 2023 – April 2023
- DualPath remains the visual dual-track story; Experience remains the detailed timeline

## Projects

- Align featured list with GitHub README where possible
- Ensure GitHub links for public repos
- Keep modal/card UI; update data primarily
- Prefer real shipped/portfolio work over placeholder fluff

## About / Skills / Contact / Nav

- **About:** Sync narrative with GitHub README (3+ years, CentraLogic leadership/Flutter, freelance history, AI-assisted workflows)
- **Skills:** Keep category structure; reduce emoji-heavy decoration where it hurts polish; no structural rewrite
- **Contact:** Freelance-oriented headline/supporting line (“Let’s build something”)
- **Navbar:** Add `{ href: "#dual-path", label: "Paths" }` (or “Tracks”) between About and Skills

## Visual language

Preserve the existing dark glass / blue–indigo–teal system. Do not introduce a new brand palette or purple-gradient overhaul. DualPath panels should feel premium but consistent with `glass-card` language, with stronger depth from CSS 3D rather than new card chrome.

## Motion budget

At least 2–3 intentional motions site-wide for this work:
1. DualPath panel entrance (stagger)
2. DualPath tilt / float (desktop)
3. Hero badge / CTA entrance (existing, keep)

Respect reduced motion.

## Success criteria

- First viewport communicates name, dual role (company + freelance), and clear CTA without a stats strip
- DualPath section makes both tracks obvious within a few seconds of scroll
- Experience includes freelance; projects link to real GitHub repos where applicable
- `npm run build` succeeds; mobile layout stacks DualPath cleanly; reduced-motion disables tilt
- No new npm dependencies for 3D

## Non-goals / explicit decisions

| Decision | Choice |
|----------|--------|
| Dual-path presentation | Dedicated section (not split Experience, not hero-only strip) |
| 3D tech | CSS + Framer Motion only |
| Refine breadth | Broader refresh (hero, data, projects, light skills/contact), not full redesign |
| CentraLogic timeline | Single Experience card with promotion note |
| Stats in hero | Removed from first viewport |
