# Portfolio Full 3D Redesign — Design Spec

**Date:** 2026-08-02  
**Repo:** `wablevaibhav.github.io`  
**Status:** Approved for planning  
**Supersedes (in scope):** Visual approach of the dual-path refine for layout/chrome. DualPath **section is out of scope** for this redesign (user chose drop DualPath for now).

## Goal

Fully redesign the portfolio into a 3D-forward experience: a React Three Fiber hero (floating tech constellation) plus CSS-3D interactions across sections, in a charcoal / steel blue / electric cyan visual system. Dual company + freelance story remains only in hero copy and Experience data — no dedicated DualPath section.

## Decisions (locked)

| Topic | Choice |
|-------|--------|
| Scope of 3D | **C** — Three.js hero + CSS 3D throughout |
| Visual direction | **A** — Deep charcoal / steel blue / electric cyan |
| Hero scene | **A** — Floating tech constellation (device frames + node lattice) |
| DualPath section | **C** — Drop for now; dual story via hero + Experience only |
| Implementation approach | **1** — R3F hero island + CSS-3D site shell |

## Scope

**In scope**
- New design tokens, typography, and global chrome (nav, buttons, surfaces)
- Lazy-loaded R3F hero constellation with pointer parallax
- Restyle all sections: About, Skills, Experience, Projects, Education, Contact, Footer
- CSS 3D tilt / depth on interactive cards and skill chips (desktop)
- Section entrance motion (Framer Motion)
- Mobile / reduced-motion / WebGL-failure fallbacks
- Keep dual-role narrative in hero + Experience (CentraLogic + Freelance)
- Prefer content already refined on `feature/portfolio-dual-path` where useful; remove DualPath from App/Navbar if present

**Out of scope**
- Dedicated DualPath showcase section
- Full-page continuous WebGL background
- Backend / CMS / contact form backend
- Purple-glow / cream-terracotta / broadsheet aesthetics

## Visual system

### Color

| Token | Value | Use |
|-------|-------|-----|
| `--bg` | `#0B0F14` | Page background |
| `--surface` | `#121820` | Panels / elevated surfaces |
| `--steel` | `#7A8FA6` | Secondary text, borders |
| `--cyan` | `#2EE6D6` | Accent, CTAs, active states |
| `--text` | `#E8EEF4` | Primary text |
| `--muted` | `#9AA8B8` | Supporting copy |

Atmosphere: subtle radial gradients / noise — not flat single-color fills. Accent should feel electric cyan on charcoal, not purple neon.

### Typography

- **Display:** Syne or Outfit (expressive, geometric) — brand name and section headlines  
- **Body:** Sora or DM Sans — readable supporting copy  
- Load via Google Fonts (or equivalent) in `index.html`  
- Avoid Inter / Roboto / Arial / system as the primary voice

### Layout principles (frontend design rules)

- First viewport = one composition: brand, one headline, one short sentence, one CTA group, one dominant visual (R3F scene)  
- No stats strip, cards, badges-as-stickers, or secondary marketing blocks in the hero  
- No cards in the hero; cards elsewhere only when they aid interaction (project open, experience expand)  
- One job per section: one headline + usually one short supporting sentence  
- Brand name is a hero-level signal

## Architecture

Keep React + Vite SPA. Add Three.js via R3F; keep Framer Motion for DOM motion.

```
App
├── Navbar (restyled)
├── Hero
│   ├── DOM overlay (name, headline, dual-role line, CTAs)
│   └── HeroScene (lazy R3F Canvas — constellation)
├── About
├── Skills (CSS tilt chips)
├── Experience (timeline + CSS depth)
├── Projects (tilt cards + modal)
├── Education
├── Contact
└── Footer
```

### New / changed modules (indicative)

| Module | Role |
|--------|------|
| `src/index.css` | New tokens, fonts, utilities; retire old purple-blue glass defaults |
| `src/components/Hero/Hero.jsx` | Overlay + mounts scene |
| `src/components/Hero/HeroScene.jsx` | R3F canvas, constellation meshes, pointer parallax |
| `src/components/shared/TiltCard.jsx` | Shared CSS perspective tilt (reuse/adapt from DualPath helper if present) |
| Section components | Restyle to new system; content from `portfolioData.js` |
| `App.jsx` / `Navbar.jsx` | Remove DualPath route/section if present |

### Dependencies to add

- `three`
- `@react-three/fiber`
- `@react-three/drei` (only helpers actually used: e.g. Float, Lights — avoid unused bloat)

No other heavy 3D libs.

## Hero scene (R3F)

**Concept:** Floating tech constellation — simplified phone/tablet frame meshes + connected node/lattice points. Materials: dark metal + cyan emissive accents. Slow idle drift; pointer moves camera/group subtly (± small angles).

**DOM overlay (z above canvas):**
- Availability pulse: open to freelance & contract  
- Brand: **Vaibhav Wable** (dominant)  
- One headline / rotating tagline (optional, keep light)  
- One sentence: CentraLogic full-time **and** freelance Flutter / React Native / web  
- CTAs: Let’s talk → Contact; Resume; optional LinkedIn text  

**Performance**
- Lazy `React.lazy` / dynamic import for HeroScene  
- `dpr` capped (e.g. 1–1.5)  
- Pause / unmount loop when hero off-screen (`IntersectionObserver` or R3F frameloop control)  
- Mobile: fewer nodes / simpler frames  

**Fallbacks**
- `prefers-reduced-motion: reduce` → static CSS atmosphere, no WebGL motion (prefer no canvas or frozen frame)  
- WebGL unavailable / context loss → CSS gradient + abstract shapes  
- Touch: no continuous mouse parallax; gentle auto-drift or static  

## Sections (behavior)

### About
Narrative from `personalInfo.about`. Three traits with restrained hover depth. No dashboard layout.

### Skills
Keep category structure. Replace emoji-first presentation with icons/labels. Subtle CSS tilt on chips (desktop only).

### Experience
Chronological expandable entries including CentraLogic (promotion note) and Freelance (2021–2023). CSS depth on active card. No DualPath panels.

### Projects
Featured grid from portfolio data (GitHub-aligned). CSS tilt on cards; cyan accent; keep modal pattern, restyled.

### Education
Compact list; calm typography; minimal motion.

### Contact
Headline: “Let’s build something”. Support: open to freelance/contract — Flutter, React Native, web, store delivery. Preserve mailto / social links.

### Navbar / Footer
Minimal floating or edge nav matching new tokens. Paths/DualPath link removed. Active section indicator in cyan.

## Motion budget

1. Hero constellation idle + pointer parallax  
2. Section reveal on scroll  
3. Card/chip CSS tilt (desktop)  

Respect `prefers-reduced-motion` globally.

## Content baseline

Prefer updated copy/data from the dual-path branch work where already committed (`personalInfo`, experiences with freelance, GitHub projects). Do not reintroduce DualPath UI. If implementing from `main` without that data, port the data updates as part of this redesign.

## Success criteria

- First viewport reads as one branded 3D composition with dual-role sentence and CTAs  
- Charcoal / steel / cyan system applied site-wide (no leftover purple-glass default look)  
- DualPath section absent from nav and page  
- Experience still communicates company + freelance history  
- `npm run build` succeeds; Lighthouse/mobile: no janky full-page WebGL; reduced-motion safe  
- Hero WebGL lazy-loads and does not block first contentful paint excessively  

## Non-goals

- DualPath dedicated section  
- Continuous full-page WebGL  
- Stats/cards/overlays in the hero  
- Full CMS or backend contact processing  
