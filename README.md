# Vaibhav Wable · Portfolio

Personal site for **Vaibhav Wable**, Mobile & Full-Stack Engineer (Flutter, React Native, Next.js, Node.js, with LLM features), Software Engineer at CentraLogic, Pune. Also open to freelance work.

**Live:** [wablevaibhav.github.io](https://wablevaibhav.github.io)

## Stack

- React 19 + Vite 8, prerendered to static HTML at build time
- Tailwind CSS v4 (charcoal / steel / blue tokens in `src/index.css`)
- Framer Motion for scroll reveals; hero motion is pure CSS
- Self-hosted fonts via `@fontsource` (**Syne** display, **Sora** body)
- react-icons, react-type-animation, react-intersection-observer
- Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`

## Project structure

```
index.html                  Meta tags, Open Graph/Twitter, JSON-LD Person schema
public/
  og-image.png              1200×630 link-preview image (source: scripts/og-image.html)
  resume.pdf                Linked from the navbar and hero
  projects/                 Project screenshots: <project-id>.webp (1200×750)
  robots.txt, sitemap.xml, 404.html
scripts/
  prerender.js              Renders <App /> to dist/index.html after the build
  og-image.html             Source for og-image.png
src/
  data/portfolioData.js     ← ALL content lives here (single source of truth)
  main.jsx                  Fonts + CSS; loads the app after first paint
  boot.jsx                  Hydrates the prerendered HTML
  entry-server.jsx          Server render entry used by the prerender step
  lib/hooks.js              usePrefersReducedMotion
  assets/profile.jpg        Your hero photo (optional, auto-detected)
  components/
    Navbar/  (navLinks.js shared with Footer)
    Hero/ About/ Skills/ Experience/ Projects/ Services/
    Testimonials/ Education/ Contact/ Footer/
```

## Editing content

Everything visible on the site comes from `src/data/portfolioData.js`:

| Export | What it controls |
|---|---|
| `CAREER_START` | Start date at CentraLogic. Years of experience and durations are computed from it. |
| `personalInfo` | Name, taglines, about text, socials, WhatsApp, booking link, resume path |
| `stats` | The three numbers in the About section |
| `skillGroups` | Skill chips, in display order (Mobile → Web → Backend → AI/LLM → Cloud/DevOps → Java) |
| `experiences` | Work history |
| `projects` | Project cards, in display order. `featured: true` renders a large card; `image` points to a screenshot in `public/projects/` |
| `services`, `processSteps` | Freelance services section |
| `testimonials` | Section is hidden while this array is empty |
| `education`, `certifications` | `featured: true` certifications show as badges; the rest sit behind "Show all" |
| `WEB3FORMS_ACCESS_KEY` | Contact form delivery. Empty = falls back to the visitor's email app |

Search the file for `TODO:` to find everything that still needs real data.

**Hero photo:** save a square photo (at least 600×600) as `src/assets/profile.jpg` (or `.png` / `.webp`). It is picked up automatically; until then the hero shows an animated "VW" monogram.

## Run locally

```bash
git clone https://github.com/wablevaibhav/wablevaibhav.github.io.git
cd wablevaibhav.github.io
npm install
npm run dev        # http://localhost:5173
```

```bash
npm run build      # client build + SSR build + prerender → dist/
npm run preview    # serve dist/
npm run lint
```

`npm run build` fails if the prerendered `dist/index.html` is missing the text "CodeMind" or "CentraLogic", so a broken prerender never ships.

## How rendering works

1. `vite build` produces the client bundle and `dist/index.html` (with an `<!--app-html-->` placeholder).
2. `vite build --ssr src/entry-server.jsx` builds a server bundle.
3. `scripts/prerender.js` renders the app to a string and injects it into `dist/index.html`.
4. In the browser, the page is readable immediately; `main.jsx` loads React after the first paint and `boot.jsx` hydrates it. Below-the-fold sections are separate Suspense boundaries, so hydration happens in small chunks.

## Accessibility & motion

- WCAG AA contrast on `#0B0F14`, minimum 12px text, labelled inputs and icon buttons
- Project details open in an accessible dialog (focus trap, Esc to close, scroll lock, focus restore)
- `prefers-reduced-motion` turns off Framer Motion, the typing effect, the ping dot and all CSS hero animation

## Links

- LinkedIn: [vaibhavwable](https://www.linkedin.com/in/vaibhavwable/)
- GitHub: [wablevaibhav](https://github.com/wablevaibhav)
- Instagram: [wablevaibhav06](https://www.instagram.com/wablevaibhav06)
- YouTube: [@codewithwable](https://www.youtube.com/@codewithwable)
- Email: vaibhavswable@gmail.com

---

Built in Pune, India.
