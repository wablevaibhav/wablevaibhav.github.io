# Portfolio Dual-Path Refine Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refine the portfolio so visitors immediately see CentraLogic full-time work and freelance availability side by side, via a CSS-3D DualPath section plus broader content/hero/project updates.

**Architecture:** Keep the existing React + Vite SPA. All copy lives in `src/data/portfolioData.js`. Add `DualPath` (with a local `TiltCard` helper) between About and Skills. Update Hero, Navbar, Experience data, Projects data, About, Skills, and Contact without new npm dependencies.

**Tech Stack:** React 19, Vite 8, Tailwind CSS 4, Framer Motion 12, react-icons, react-intersection-observer (already installed).

**Spec:** `docs/superpowers/specs/2026-08-02-portfolio-dual-path-design.md`

## Global Constraints

- No Three.js / R3F / WebGL; CSS 3D + Framer Motion only
- No new npm dependencies for this feature
- Preserve existing dark glass / blue–indigo–teal palette (no full redesign)
- DualPath section id must be `dual-path`
- Respect `prefers-reduced-motion: reduce` (disable tilt + float)
- Touch / coarse pointer: skip continuous mouse-tilt
- Verification gate for every task: `npm run build` must succeed
- Do not push to remote unless the user asks

## File map

| File | Responsibility |
|------|----------------|
| `src/data/portfolioData.js` | Single source of truth: personalInfo, dualPath, experiences, projects, skills |
| `src/components/DualPath/TiltCard.jsx` | Reusable CSS perspective tilt wrapper |
| `src/components/DualPath/DualPath.jsx` | Dual-track showcase section UI |
| `src/index.css` | Optional DualPath utility (perspective helpers) if needed |
| `src/App.jsx` | Mount DualPath after About |
| `src/components/Navbar/Navbar.jsx` | Add Paths nav link |
| `src/components/Hero/Hero.jsx` | Freelance CTAs; remove stats strip |
| `src/components/About/About.jsx` | Sync narrative if hardcoded strings remain |
| `src/components/Skills/Skills.jsx` | Light emoji/polish cleanup |
| `src/components/Contact/Contact.jsx` | Freelance-oriented headline copy |
| `src/components/Experience/Experience.jsx` | No structural change unless data shape requires it |
| `src/components/Projects/Projects.jsx` | No structural change unless data shape requires it |

---

### Task 1: Update portfolio data (personalInfo, dualPath, experiences, projects)

**Files:**
- Modify: `src/data/portfolioData.js`

**Interfaces:**
- Produces:
  - `personalInfo.availability` — `string` (hero badge text)
  - `personalInfo.about` — updated narrative string
  - `dualPath` — `{ fullTime: DualPathTrack, freelance: DualPathTrack }`
  - `DualPathTrack` shape: `{ id, eyebrow, title, subtitle, period, summary, highlights: string[], tech: string[], accent: string, cta: { label: string, href: string } | null }`
  - `experiences` — CentraLogic (with promotion note), Freelance, RootKit
  - `projects` — production + GitHub-featured entries with `links.github` / `links.live` where known

- [ ] **Step 1: Update `personalInfo`**

Replace / extend the top of `portfolioData.js` so `personalInfo` includes:

```js
export const personalInfo = {
  name: "Vaibhav Wable",
  title: "Software Engineer",
  availability: "Open to freelance & contract work",
  taglines: [
    "Cross-Platform App Developer",
    "React Native & Flutter Specialist",
    "Next.js Engineer",
    "AI-Assisted Workflow Advocate",
    "Performance Optimization Expert",
  ],
  about: `Software Engineer with 3+ years of experience building cross-platform mobile and web products. I currently work at CentraLogic, leading Flutter development, shipping Android & iOS apps, and integrating backends with Node.js, AWS, and Firebase.

I also take freelance and contract work — Flutter / React Native apps, web apps, API integrations, and end-to-end Play Store & App Store delivery. I use AI tools like Cursor and Claude to move faster on features, migrations, and code quality.`,
  location: "Pune, India",
  email: "vaibhavswable@gmail.com",
  linkedin: "https://www.linkedin.com/in/vaibhavwable/",
  github: "https://github.com/wablevaibhav",
  instagram: "https://www.instagram.com/_vaibhav.wable/",
  portfolio: "https://wablevaibhav.github.io",
  resumeUrl:
    "https://drive.google.com/file/d/1G5uB7ISBS2VRscJ2eWWXBAxMFwdl2rVO/view?usp=sharing",
};
```

Keep existing `resumeUrl` if already correct; do not invent a new Drive link.

- [ ] **Step 2: Add `dualPath` export**

Append after `personalInfo` (or after skills — keep one clear export):

```js
export const dualPath = {
  fullTime: {
    id: "full-time",
    eyebrow: "Full-time",
    title: "CentraLogic",
    subtitle: "Software Engineer",
    period: "Jan 2024 – Present",
    summary:
      "Leading Flutter & React Native production apps, store releases, and Node.js / AWS / Firebase integrations.",
    highlights: [
      "Ship cross-platform apps to Android & iOS with CI/CD",
      "Reusable UI systems and Clean Architecture / BLoC patterns",
      "PR reviews, mentoring, and team leadership",
      "AI-assisted workflows with Cursor, Claude, and Copilot",
    ],
    tech: ["Flutter", "React Native", "Next.js", "Node.js", "AWS", "Firebase"],
    accent: "#60a5fa",
    cta: { label: "View experience", href: "#experience" },
  },
  freelance: {
    id: "freelance",
    eyebrow: "Freelance",
    title: "Open for work",
    subtitle: "Mobile Application Developer",
    period: "Active · Freelanced 2021–2023",
    summary:
      "End-to-end client delivery — requirements, UI, APIs, store releases, and post-launch support.",
    highlights: [
      "Flutter / React Native apps for Android + iOS",
      "Feature work, bug fixes, performance, and store releases",
      "Firebase / REST integrations and Node.js backends",
      "Short-term contracts or ongoing product collaboration",
    ],
    tech: ["Flutter", "React Native", "Firebase", "Node.js", "CI/CD"],
    accent: "#2dd4bf",
    cta: { label: "Let's talk", href: "#contact" },
  },
};
```

- [ ] **Step 3: Rewrite `experiences` array**

Use this order (newest first):

```js
export const experiences = [
  {
    id: "centralogic",
    company: "CentraLogic",
    role: "Software Engineer",
    period: "Jan 2024 – Present",
    duration: "Current",
    type: "Full-time",
    location: "Pune, India",
    color: "#60a5fa",
    highlights: [
      "Promoted from Software Engineer Trainee (Jan–Jun 2024) to Software Engineer (Jun 2024 – Present).",
      "Developed and optimized cross-platform applications using Flutter and React Native, improving performance by ~20%.",
      "Managed end-to-end deployments across Web, Android, and iOS using CI/CD (GitHub Actions, Codemagic, Jenkins).",
      "Built modern web applications using Next.js and mobile apps using Expo.",
      "Designed reusable UI components and scalable architecture; led PR reviews and mentored teammates.",
      "Leveraged AI tools (ChatGPT, GitHub Copilot, Cursor, Claude) to accelerate development and debugging.",
    ],
    tech: [
      "Flutter",
      "React Native",
      "Next.js",
      "Expo",
      "CI/CD",
      "GitHub Actions",
      "Jenkins",
      "AI Workflows",
    ],
  },
  {
    id: "freelance",
    company: "Freelance",
    role: "Mobile Application Developer",
    period: "Aug 2021 – Dec 2023",
    duration: "2+ years",
    type: "Freelance",
    location: "Remote / Pune, India",
    color: "#2dd4bf",
    highlights: [
      "Delivered client apps end-to-end: requirements → UI → APIs → deployment → support.",
      "Built cross-platform mobile experiences with Flutter and native Android where needed.",
      "Integrated backends and third-party services; handled Play Store release support.",
    ],
    tech: ["Flutter", "Android", "APIs", "Firebase", "Client Delivery"],
  },
  {
    id: "rootkit",
    company: "RootKit.exe MIT-WPU",
    role: "Android Developer Intern",
    period: "Jan 2023 – April 2023",
    duration: "4 months",
    type: "Internship",
    location: "Pune, India",
    color: "#818cf8",
    highlights: [
      "Improved application performance and resolved critical bugs for MIT-WPU students.",
      "Developed features using Kotlin and XML for student engagement.",
    ],
    tech: ["Kotlin", "Android SDK", "XML", "Mobile UX", "Debugging"],
  },
];
```

- [ ] **Step 4: Align `projects` with GitHub featured work**

Keep Live Tracking and AI Tutor if they are real highlights. Ensure these public repos exist in the list with GitHub links:

| Project | GitHub |
|---------|--------|
| Portfolio | `https://github.com/wablevaibhav/wablevaibhav.github.io` (or profile site repo if different) |
| LinkedIn Clone | `https://github.com/wablevaibhav/LinkedIn` |
| FoodRunner | `https://github.com/wablevaibhav/FoodRunner` |
| Resume Builder | `https://github.com/wablevaibhav/resume_builder` |
| FolkChat | `https://github.com/wablevaibhav/FolkChat` |
| claryft_components | `https://github.com/wablevaibhav/claryft_components` |

Each project object must keep the existing shape used by `Projects.jsx`:

```js
{
  id: "linkedin-clone",
  title: "LinkedIn Clone",
  category: "Android · Kotlin",
  description: "LinkedIn-inspired Android app.",
  longDescription: "...",
  tech: ["Kotlin", "Android"],
  features: ["...", "..."],
  color: "#60a5fa",
  gradient: "linear-gradient(135deg, #0d1a3a, #1a1640)",
  emoji: "💼",
  status: "Open Source",
  links: { github: "https://github.com/wablevaibhav/LinkedIn", live: null },
}
```

Verify each GitHub URL with `gh api repos/wablevaibhav/<name> --jq .html_url` (or browser) before finalizing; if a repo name differs, use the real URL.

- [ ] **Step 5: Build check**

Run: `npm run build`  
Expected: exit 0 (no import errors yet for `dualPath` until Task 3 wires it — data-only change must still build)

- [ ] **Step 6: Commit**

```bash
git add src/data/portfolioData.js
git commit -m "$(cat <<'EOF'
Update portfolio data for dual-path and freelance story.

Sync personal copy, experience, and featured projects with the public GitHub profile.
EOF
)"
```

---

### Task 2: Build `TiltCard` (CSS 3D helper)

**Files:**
- Create: `src/components/DualPath/TiltCard.jsx`

**Interfaces:**
- Consumes: none from Task 1 beyond being a presentational wrapper
- Produces: `export default function TiltCard({ children, className = "", maxTilt = 10, disabled = false })`
  - Applies perspective tilt on pointer move when enabled
  - Disables when `disabled`, `prefers-reduced-motion`, or coarse pointer

- [ ] **Step 1: Create `TiltCard.jsx`**

```jsx
import { useEffect, useRef, useState } from "react";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

function useCoarsePointer() {
  const [coarse, setCoarse] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const update = () => setCoarse(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return coarse;
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 10,
  disabled = false,
}) {
  const ref = useRef(null);
  const reducedMotion = usePrefersReducedMotion();
  const coarsePointer = useCoarsePointer();
  const tiltOff = disabled || reducedMotion || coarsePointer;

  const onMove = (e) => {
    if (tiltOff || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * (maxTilt * 2);
    const rotateX = (0.5 - py) * (maxTilt * 2);
    ref.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
  };

  const onLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0)";
  };

  return (
    <div className="[perspective:1000px]" style={{ perspective: "1000px" }}>
      <div
        ref={ref}
        className={`transition-transform duration-200 ease-out will-change-transform [transform-style:preserve-3d] ${className}`}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
      >
        {children}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Build check**

Run: `npm run build`  
Expected: exit 0 (unused file is fine under Vite as long as nothing broken)

- [ ] **Step 3: Commit**

```bash
git add src/components/DualPath/TiltCard.jsx
git commit -m "$(cat <<'EOF'
Add CSS 3D TiltCard helper for DualPath panels.

Supports reduced-motion and coarse-pointer opt-outs without new dependencies.
EOF
)"
```

---

### Task 3: Build `DualPath` section and wire into App + Navbar

**Files:**
- Create: `src/components/DualPath/DualPath.jsx`
- Modify: `src/App.jsx`
- Modify: `src/components/Navbar/Navbar.jsx`

**Interfaces:**
- Consumes: `dualPath` from `../../data/portfolioData`; `TiltCard` from `./TiltCard`
- Produces: `<section id="dual-path">` rendered after `<About />`

- [ ] **Step 1: Create `DualPath.jsx`**

Implement a section matching existing section patterns (section-tag, large headline, glass cards, framer-motion + useInView):

```jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { dualPath, personalInfo } from "../../data/portfolioData";
import TiltCard from "./TiltCard";

const tracks = [dualPath.fullTime, dualPath.freelance];

export default function DualPath() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="dual-path"
      className="py-32 scroll-mt-32 relative bg-[#030712] overflow-hidden"
    >
      <div className="absolute top-1/3 right-0 w-[480px] h-[480px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="flex flex-col gap-16"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="max-w-4xl"
          >
            <span className="section-tag">Two Tracks</span>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-none">
              Building on{" "}
              <span className="gradient-text">two tracks</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
              Full-time engineering at CentraLogic, side by side with freelance
              delivery for clients who need mobile and web shipped end to end.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-4 items-stretch">
            {tracks.map((track, i) => (
              <div key={track.id} className="contents">
                {i === 1 && (
                  <div className="hidden lg:flex items-center justify-center px-2">
                    <span className="text-[0.65rem] font-black uppercase tracking-[0.35em] text-slate-600">
                      And
                    </span>
                  </div>
                )}
                {i === 1 && (
                  <div className="lg:hidden flex items-center justify-center py-2">
                    <span className="text-[0.65rem] font-black uppercase tracking-[0.35em] text-slate-600">
                      And
                    </span>
                  </div>
                )}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.55 },
                    },
                  }}
                >
                  <TiltCard className="h-full">
                    <article
                      className="glass-card h-full rounded-[2.5rem] p-8 md:p-10 flex flex-col gap-6 relative overflow-hidden"
                      style={{
                        boxShadow: `0 24px 60px -20px ${track.accent}33`,
                      }}
                    >
                      <div
                        className="absolute -top-20 -right-20 w-56 h-56 rounded-full blur-[80px] opacity-30 pointer-events-none"
                        style={{ background: track.accent }}
                      />
                      <div className="relative z-10 flex flex-col gap-6 h-full">
                        <div>
                          <span
                            className="text-[0.65rem] font-black uppercase tracking-[0.3em] mb-3 block"
                            style={{ color: track.accent }}
                          >
                            {track.eyebrow}
                          </span>
                          <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                            {track.title}
                          </h3>
                          <p className="text-slate-400 font-bold mt-2">
                            {track.subtitle}
                          </p>
                          <p className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-slate-600 mt-3">
                            {track.period}
                          </p>
                        </div>
                        <p className="text-slate-400 leading-relaxed text-sm">
                          {track.summary}
                        </p>
                        <ul className="space-y-3 flex-grow">
                          {track.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex gap-3 text-sm text-slate-400"
                            >
                              <span
                                className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                                style={{ background: track.accent }}
                              />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {track.tech.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-[0.65rem] font-black uppercase tracking-widest text-slate-500"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        {track.cta && (
                          <a
                            href={track.cta.href}
                            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white hover:opacity-80 transition-opacity"
                            onClick={(e) => {
                              if (track.cta.href.startsWith("#")) {
                                e.preventDefault();
                                document
                                  .querySelector(track.cta.href)
                                  ?.scrollIntoView({ behavior: "smooth" });
                              }
                            }}
                          >
                            {track.cta.label} →
                          </a>
                        )}
                        {track.id === "freelance" && (
                          <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[0.65rem] font-black uppercase tracking-widest text-slate-500 hover:text-blue-400 transition-colors"
                          >
                            Connect on LinkedIn ↗
                          </a>
                        )}
                      </div>
                    </article>
                  </TiltCard>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

Fix the mobile/desktop “And” connector so it only renders once between the two cards (adjust grid/`contents` if the above double-renders on mobile). Target layout:

- Desktop: `[panel][AND][panel]`
- Mobile: `[panel] / AND / [panel]`

- [ ] **Step 2: Wire into `App.jsx`**

Import and place after About:

```jsx
import DualPath from './components/DualPath/DualPath';
// ...
<About />
<DualPath />
<Skills />
```

- [ ] **Step 3: Add Navbar link**

In `src/components/Navbar/Navbar.jsx`, update `NAV_LINKS`:

```js
const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#dual-path", label: "Paths" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
```

- [ ] **Step 4: Verify in browser / build**

Run: `npm run build`  
Expected: exit 0  

Manual check (`npm run dev`):
- `#dual-path` in URL / nav scrolls to section
- Two panels visible; desktop tilt works; mobile stacks
- Reduced motion: open DevTools → emulate prefers-reduced-motion → no tilt

- [ ] **Step 5: Commit**

```bash
git add src/components/DualPath/DualPath.jsx src/App.jsx src/components/Navbar/Navbar.jsx
git commit -m "$(cat <<'EOF'
Add DualPath CSS-3D showcase for company and freelance tracks.

Wire the section into App and Navbar so both paths are visible side by side.
EOF
)"
```

---

### Task 4: Hero freelance CTAs + remove stats strip

**Files:**
- Modify: `src/components/Hero/Hero.jsx`

**Interfaces:**
- Consumes: `personalInfo.availability`, `personalInfo.resumeUrl`, `personalInfo.linkedin`

- [ ] **Step 1: Update badge + description + CTAs; remove stats**

In `Hero.jsx`:

1. Badge text → `{personalInfo.availability}` (fallback string if missing: `"Open to freelance & contract work"`)
2. Replace supporting paragraph with dual-role copy:

```jsx
<p className="max-w-2xl text-base md:text-lg text-slate-500 leading-relaxed mb-12">
  Software Engineer at{" "}
  <span className="text-blue-400 underline decoration-blue-400/20 underline-offset-8">
    CentraLogic
  </span>
  , and available for freelance{" "}
  <span className="text-white font-bold">
    Flutter, React Native, and web
  </span>{" "}
  delivery.
</p>
```

3. Keep primary “Let’s Talk” → `#contact` and secondary Resume link using `personalInfo.resumeUrl`
4. Add tertiary LinkedIn text link under the button row:

```jsx
<a
  href={personalInfo.linkedin}
  target="_blank"
  rel="noopener noreferrer"
  className="text-[0.65rem] font-black uppercase tracking-[0.25em] text-slate-500 hover:text-blue-400 transition-colors"
>
  Connect on LinkedIn ↗
</a>
```

5. **Delete** the bottom absolute stats grid (`Years Exp.`, `Apps Shipped`, etc.) and reduce bottom padding if needed (`pb-32` → `pb-24`) so the first viewport stays clean.

6. Keep particle canvas and Framer Motion entrances.

- [ ] **Step 2: Build + visual check**

Run: `npm run build`  
Expected: exit 0  
Manual: first viewport shows name, dual-role line, CTAs; no stats strip

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero/Hero.jsx
git commit -m "$(cat <<'EOF'
Refresh hero for freelance availability and dual-role story.

Remove first-viewport stats so the CTA and company + freelance message lead.
EOF
)"
```

---

### Task 5: About, Skills, and Contact copy polish

**Files:**
- Modify: `src/components/About/About.jsx` (only if it hardcodes outdated copy; prefer `personalInfo.about`)
- Modify: `src/components/Skills/Skills.jsx` (light emoji cleanup)
- Modify: `src/components/Contact/Contact.jsx`

**Interfaces:**
- Consumes: updated `personalInfo.about` from Task 1

- [ ] **Step 1: About**

Ensure About body text renders `personalInfo.about` (or equivalent updated narrative). If trait cards remain, keep them; optionally tweak titles/descriptions to mention freelance + CentraLogic without adding new card chrome. Do not redesign the section layout.

- [ ] **Step 2: Skills**

Keep category structure. Reduce emoji reliance where icons already convey meaning (e.g. prefer react-icons or plain labels if the section is emoji-heavy). Do not remove skill categories or rewrite the whole Skills UX.

- [ ] **Step 3: Contact**

Update headline / supporting line to freelance-oriented copy, e.g.:

- Headline: `Let's build something`
- Support: `Open to freelance and contract work — Flutter, React Native, web apps, and end-to-end store delivery.`

Keep existing form/social UI working.

- [ ] **Step 4: Build check**

Run: `npm run build`  
Expected: exit 0

- [ ] **Step 5: Commit**

```bash
git add src/components/About/About.jsx src/components/Skills/Skills.jsx src/components/Contact/Contact.jsx
git commit -m "$(cat <<'EOF'
Polish About, Skills, and Contact for the dual-path narrative.

Align copy with freelance availability without a full visual redesign.
EOF
)"
```

---

### Task 6: End-to-end verification

**Files:**
- None (verification only)

- [ ] **Step 1: Production build**

Run: `npm run build`  
Expected: exit 0, `dist/` generated

- [ ] **Step 2: Preview checklist**

Run: `npm run preview`  
Verify:

1. Hero badge says freelance/contract availability; no stats strip
2. Nav **Paths** scrolls to DualPath
3. DualPath shows CentraLogic + Freelance panels with AND connector
4. Desktop mouse-tilt works; coarse pointer / reduced-motion disables tilt
5. Experience includes Freelance entry + CentraLogic promotion note
6. Projects show GitHub-linked featured repos
7. Contact copy is freelance-oriented
8. Mobile: DualPath stacks cleanly; no horizontal overflow

- [ ] **Step 3: Final commit only if verification fixes were needed**

If fixes were required, commit them with a clear message. If none, skip.

---

## Spec coverage (self-review)

| Spec requirement | Task |
|------------------|------|
| DualPath dedicated section CSS 3D | Tasks 2–3 |
| Hero freelance CTA + remove stats | Task 4 |
| Experience freelance + CentraLogic note | Task 1 |
| Projects GitHub-aligned | Task 1 |
| About / Skills / Contact polish | Task 5 |
| Nav DualPath link | Task 3 |
| prefers-reduced-motion | Task 2 |
| No new 3D deps / preserve palette | Global + all tasks |
| Build success | Every task + Task 6 |

## Placeholder / consistency notes

- `dualPath.fullTime` / `dualPath.freelance` names are stable across Task 1 and Task 3
- Section id is always `dual-path`; nav href `#dual-path`
- `TiltCard` API: `children`, `className`, `maxTilt`, `disabled`
- Project objects keep existing `Projects.jsx` field names (`links`, `emoji`, `gradient`, etc.)
