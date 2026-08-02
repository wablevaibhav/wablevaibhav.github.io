# Portfolio Full 3D Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the entire portfolio into a charcoal/steel/cyan 3D-forward site with a lazy React Three Fiber hero constellation and CSS-3D interactions across sections, without a DualPath section.

**Architecture:** Start from the content-rich `feature/portfolio-dual-path` branch, strip DualPath UI, introduce design tokens + shared `TiltCard`, add lazy R3F `HeroScene`, then restyle every section to the new system while keeping Framer Motion for DOM reveals.

**Tech Stack:** React 19, Vite 8, Tailwind CSS 4, Framer Motion 12, three, `@react-three/fiber`, `@react-three/drei`, react-icons.

**Spec:** `docs/superpowers/specs/2026-08-02-portfolio-3d-redesign-design.md`

## Global Constraints

- Palette tokens exactly: `--bg #0B0F14`, `--surface #121820`, `--steel #7A8FA6`, `--cyan #2EE6D6`, `--text #E8EEF4`, `--muted #9AA8B8`
- Fonts: display **Syne**, body **Sora** (Google Fonts) — no Inter/Roboto/Arial as primary
- R3F hero island only — no full-page continuous WebGL
- DualPath section must be absent from App and Navbar
- Hero first viewport: brand, one headline area, one dual-role sentence, one CTA group, dominant R3F scene — no stats strip, no hero cards
- Lazy-load HeroScene; cap `dpr` to `[1, 1.5]`; pause when off-screen
- `prefers-reduced-motion: reduce` → no WebGL motion / prefer static fallback; no CSS tilt
- Coarse pointer: skip continuous mouse tilt/parallax
- Verification gate every task: `npm run build` succeeds
- Do not push unless the user asks
- No purple-glow / cream-terracotta / broadsheet look

## File map

| File | Responsibility |
|------|----------------|
| `index.html` | Font links (Syne, Sora) |
| `package.json` | Add three, @react-three/fiber, @react-three/drei |
| `src/index.css` | Design tokens, utilities, surface/button styles |
| `src/components/shared/TiltCard.jsx` | Shared CSS 3D tilt wrapper |
| `src/components/Hero/HeroScene.jsx` | R3F constellation canvas |
| `src/components/Hero/Hero.jsx` | Hero DOM overlay + lazy scene mount |
| `src/components/Navbar/Navbar.jsx` | Restyled nav; no DualPath link |
| `src/components/Footer/Footer.jsx` | Restyled footer |
| `src/components/About/About.jsx` | Restyled about |
| `src/components/Skills/Skills.jsx` | Restyled skills + tilt chips |
| `src/components/Experience/Experience.jsx` | Restyled timeline |
| `src/components/Projects/Projects.jsx` | Restyled project cards/modal |
| `src/components/Education/Education.jsx` | Restyled education |
| `src/components/Contact/Contact.jsx` | Restyled contact |
| `src/App.jsx` | Shell colors; no DualPath |
| `src/data/portfolioData.js` | Keep dual-path content baseline (already on source branch) |
| Delete if present | `src/components/DualPath/*` |

---

### Task 1: Branch from dual-path content and strip DualPath UI

**Files:**
- Branch: create `feature/portfolio-3d-redesign` from `feature/portfolio-dual-path`
- Modify: `src/App.jsx`, `src/components/Navbar/Navbar.jsx`
- Delete: `src/components/DualPath/DualPath.jsx`, `src/components/DualPath/TiltCard.jsx` (TiltCard moves to shared in Task 3)

**Interfaces:**
- Produces: App section order `Hero → About → Skills → Experience → Projects → Education → Contact` with no DualPath; Navbar without `#dual-path`

- [ ] **Step 1: Create branch / worktree from dual-path**

From repo root:

```bash
git fetch origin 2>/dev/null || true
git worktree add .worktrees/portfolio-3d-redesign -b feature/portfolio-3d-redesign feature/portfolio-dual-path
cd .worktrees/portfolio-3d-redesign
npm install
npm run build
```

If `feature/portfolio-dual-path` is missing locally, create the branch from the worktree that already has those commits, or cherry-pick `97260a9..aa365de` onto a branch from `main`.

- [ ] **Step 2: Remove DualPath from App and Navbar**

In `App.jsx`, remove DualPath import and `<DualPath />`.

In `Navbar.jsx`, ensure `NAV_LINKS` is:

```js
const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
```

- [ ] **Step 3: Delete DualPath folder**

```bash
rm -rf src/components/DualPath
```

- [ ] **Step 4: Build**

Run: `npm run build`  
Expected: exit 0

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "$(cat <<'EOF'
Start 3D redesign branch and remove DualPath UI.

Keep dual-path content data while clearing the dedicated DualPath section for the full redesign.
EOF
)"
```

---

### Task 2: Design tokens, fonts, and global CSS

**Files:**
- Modify: `index.html`
- Modify: `src/index.css`
- Modify: `src/App.jsx` (root background/text classes only)

**Interfaces:**
- Produces: CSS variables listed in Global Constraints; utility classes `.surface-card`, `.btn-primary`, `.btn-outline`, `.section-tag`, `.gradient-text`, `.font-display`

- [ ] **Step 1: Add fonts to `index.html`**

In `<head>`, add:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Syne:wght@500;600;700;800&display=swap"
  rel="stylesheet"
/>
```

- [ ] **Step 2: Rewrite `src/index.css` tokens and utilities**

Replace the old purple/blue glass system with:

```css
@import "tailwindcss";

:root {
  --color-bg: #0b0f14;
  --color-surface: #121820;
  --color-steel: #7a8fa6;
  --color-cyan: #2ee6d6;
  --color-text: #e8eef4;
  --color-muted: #9aa8b8;
  --color-border: rgba(122, 143, 166, 0.22);
  --shadow-depth: 0 24px 60px -24px rgba(0, 0, 0, 0.7);
  --font-display: "Syne", system-ui, sans-serif;
  --font-body: "Sora", system-ui, sans-serif;
}

@theme {
  --font-display: "Syne", system-ui, sans-serif;
  --font-sans: "Sora", system-ui, sans-serif;
  --color-brand-cyan: #2ee6d6;
  --color-brand-steel: #7a8fa6;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 100px;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 50;
  pointer-events: none;
  opacity: 0.35;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
}

.font-display {
  font-family: var(--font-display);
}

.surface-card {
  background: color-mix(in srgb, var(--color-surface) 92%, transparent);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-depth);
  backdrop-filter: blur(16px);
}

.section-tag {
  display: inline-block;
  padding: 0.4rem 1rem;
  margin-bottom: 1.5rem;
  border-radius: 999px;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  font-family: var(--font-body);
  color: var(--color-cyan);
  background: color-mix(in srgb, var(--color-cyan) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-cyan) 28%, transparent);
}

.gradient-text {
  background: linear-gradient(120deg, #e8eef4 0%, #2ee6d6 55%, #7a8fa6 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  background: linear-gradient(135deg, #2ee6d6, #1aa89c);
  color: #041016;
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  box-shadow: 0 12px 40px -16px rgba(46, 230, 214, 0.55);
}

.btn-primary:hover {
  transform: translateY(-2px);
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  transition: background 0.25s ease, border-color 0.25s ease;
}

.btn-outline:hover {
  background: rgba(232, 238, 244, 0.04);
  border-color: color-mix(in srgb, var(--color-cyan) 40%, transparent);
}

::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #0b0f14; }
::-webkit-scrollbar-thumb {
  background: #1c2430;
  border-radius: 10px;
}

@utility scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 3: Update App shell colors**

In `App.jsx`, change root classes from old `#080b18` / blue selection to:

```jsx
<div className="min-h-screen bg-[#0B0F14] text-[#E8EEF4] antialiased overflow-x-hidden selection:bg-cyan-400/30 selection:text-white">
```

Update splash screen background to `#0B0F14` and loading bar to cyan gradient.

- [ ] **Step 4: Build + commit**

```bash
npm run build
git add index.html src/index.css src/App.jsx
git commit -m "$(cat <<'EOF'
Introduce charcoal steel cyan design tokens and typography.

Replace the prior glass-blue defaults with Syne/Sora and the approved palette.
EOF
)"
```

---

### Task 3: Shared `TiltCard` component

**Files:**
- Create: `src/components/shared/TiltCard.jsx`

**Interfaces:**
- Produces: `export default function TiltCard({ children, className = "", maxTilt = 8, disabled = false })`
- Disables when `disabled` OR `prefers-reduced-motion` OR `(pointer: coarse)`

- [ ] **Step 1: Create shared TiltCard**

```jsx
import { useEffect, useRef, useState } from "react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [query]);
  return matches;
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  disabled = false,
}) {
  const ref = useRef(null);
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const coarsePointer = useMediaQuery("(pointer: coarse)");
  const tiltOff = disabled || reducedMotion || coarsePointer;

  const onMove = (e) => {
    if (tiltOff || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * (maxTilt * 2);
    const rotateX = (0.5 - py) * (maxTilt * 2);
    ref.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const onLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div style={{ perspective: "1000px" }}>
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

- [ ] **Step 2: Build + commit**

```bash
npm run build
git add src/components/shared/TiltCard.jsx
git commit -m "$(cat <<'EOF'
Add shared CSS 3D TiltCard for section interactions.

Respects reduced-motion and coarse-pointer so tilt stays desktop-safe.
EOF
)"
```

---

### Task 4: Install R3F and build `HeroScene`

**Files:**
- Modify: `package.json` / lockfile via npm install
- Create: `src/components/Hero/HeroScene.jsx`

**Interfaces:**
- Produces: `export default function HeroScene({ active = true })` — R3F canvas; when `active` is false, set `frameloop="never"`
- Scene: 1 phone frame + 1 tablet frame (box/torus or thin box frames) + ~20–40 node spheres + line segments; cyan emissive accents; group rotates slightly toward pointer when not coarse/reduced-motion

- [ ] **Step 1: Install deps**

```bash
npm install three @react-three/fiber @react-three/drei
```

- [ ] **Step 2: Implement `HeroScene.jsx`**

Implement a self-contained scene:

```jsx
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function DeviceFrame({ position, scale = [1, 1.8, 0.08], color = "#2EE6D6" }) {
  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
      <mesh position={position} castShadow>
        <boxGeometry args={scale} />
        <meshStandardMaterial
          color="#121820"
          metalness={0.85}
          roughness={0.35}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  );
}

function NodeLattice({ count = 28 }) {
  const points = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4
        )
      );
    }
    return arr;
  }, [count]);

  const lineObj = useMemo(() => {
    const positions = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (points[i].distanceTo(points[j]) < 1.8) {
          positions.push(...points[i].toArray(), ...points[j].toArray());
        }
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    return geo;
  }, [points]);

  return (
    <group>
      <lineSegments geometry={lineObj}>
        <lineBasicMaterial color="#2EE6D6" transparent opacity={0.35} />
      </lineSegments>
      {points.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial
            color="#2EE6D6"
            emissive="#2EE6D6"
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

function ParallaxRig({ children, enabled }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    if (!enabled) {
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, 0, 0.05);
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, 0, 0.05);
      return;
    }
    const t = state.clock.elapsedTime;
    const tx = state.pointer.y * 0.2;
    const ty = state.pointer.x * 0.35;
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, tx + Math.sin(t * 0.3) * 0.05, 0.05);
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, ty + Math.cos(t * 0.25) * 0.05, 0.05);
  });
  return <group ref={ref}>{children}</group>;
}

export default function HeroScene({ active = true, reducedMotion = false, coarse = false }) {
  const enableParallax = active && !reducedMotion && !coarse;
  const nodeCount = typeof window !== "undefined" && window.innerWidth < 768 ? 16 : 28;

  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop={active && !reducedMotion ? "always" : "never"}
      camera={{ position: [0, 0, 7], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ width: "100%", height: "100%" }}
    >
      <color attach="background" args={["#0B0F14"]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 3]} intensity={1.1} color="#E8EEF4" />
      <pointLight position={[-3, -2, 2]} intensity={0.8} color="#2EE6D6" />
      <ParallaxRig enabled={enableParallax}>
        <DeviceFrame position={[-1.6, 0.2, 0]} scale={[1.1, 2.0, 0.1]} />
        <DeviceFrame position={[1.4, -0.15, -0.4]} scale={[1.6, 1.15, 0.1]} color="#7A8FA6" />
        <NodeLattice count={nodeCount} />
      </ParallaxRig>
    </Canvas>
  );
}
```

Tune materials so the look is charcoal metal + cyan accents (not purple). Dispose geometries on unmount if creating BufferGeometry manually (add `useEffect` cleanup calling `lineObj.dispose()` if needed).

- [ ] **Step 3: Build + commit**

```bash
npm run build
git add package.json package-lock.json src/components/Hero/HeroScene.jsx
git commit -m "$(cat <<'EOF'
Add React Three Fiber hero constellation scene.

Lazy-ready canvas with device frames, node lattice, and pointer parallax controls.
EOF
)"
```

---

### Task 5: Redesign Hero DOM overlay and wire lazy scene

**Files:**
- Modify: `src/components/Hero/Hero.jsx`

**Interfaces:**
- Consumes: `HeroScene` via `React.lazy`; `personalInfo`
- Produces: full-bleed hero with overlay; IntersectionObserver sets `active`; reduced-motion / WebGL fail → CSS fallback (no canvas)

- [ ] **Step 1: Rewrite Hero.jsx**

Requirements:
- Remove old particle canvas
- Absolute full-bleed scene behind content (`pointer-events-none` on canvas wrapper so CTAs work; enable pointer on canvas wrapper only if parallax needs events — prefer transparent overlay with `pointer-events-none` on DOM except interactive elements, and put pointer listeners on a full-size scene layer with `pointer-events-auto` behind text… Simplest: scene canvas fills background with `pointer-events-auto`, text overlay `pointer-events-none`, buttons/links `pointer-events-auto`)
- Badge: `personalInfo.availability`
- Name: Syne/`font-display`, dominant
- Dual-role sentence (CentraLogic + freelance)
- CTAs: Let’s talk, Resume, LinkedIn text
- No stats strip
- Detect reduced motion + WebGL support; if either fails for WebGL path, render radial charcoal/cyan CSS atmosphere instead of Canvas
- Lazy import:

```jsx
const HeroScene = lazy(() => import("./HeroScene"));
```

- Pause off-screen via `useInView` / `IntersectionObserver` → `active={inView}`

- [ ] **Step 2: Build + visual check**

```bash
npm run build
npm run dev
```

Expected: hero shows constellation (or fallback), name dominant, dual-role line, CTAs; no stats.

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero/Hero.jsx
git commit -m "$(cat <<'EOF'
Redesign hero with lazy R3F scene and dual-role overlay.

Keep the first viewport to brand, message, and CTAs over the constellation.
EOF
)"
```

---

### Task 6: Restyle Navbar and Footer

**Files:**
- Modify: `src/components/Navbar/Navbar.jsx`
- Modify: `src/components/Footer/Footer.jsx`

**Interfaces:**
- Cyan active indicator; steel borders; Syne logo mark; no DualPath link

- [ ] **Step 1: Restyle Navbar** to surface charcoal pill, cyan active state, Syne wordmark/logo.

- [ ] **Step 2: Restyle Footer** to muted steel text, cyan hover links, matching bg.

- [ ] **Step 3: Build + commit**

```bash
npm run build
git add src/components/Navbar/Navbar.jsx src/components/Footer/Footer.jsx
git commit -m "$(cat <<'EOF'
Restyle navbar and footer to the charcoal cyan system.

EOF
)"
```

---

### Task 7: Restyle About and Skills

**Files:**
- Modify: `src/components/About/About.jsx`
- Modify: `src/components/Skills/Skills.jsx`

**Interfaces:**
- About uses `personalInfo.about`; Skills wrap chips in `TiltCard` (desktop); section tags/headlines use new utilities

- [ ] **Step 1: About** — replace blue/indigo classes with cyan/steel/surface-card; keep 3 traits; display font on headline.

- [ ] **Step 2: Skills** — keep categories; wrap skill chips or category panels in `TiltCard`; remove leftover blue-glow classes.

- [ ] **Step 3: Build + commit**

```bash
npm run build
git add src/components/About/About.jsx src/components/Skills/Skills.jsx
git commit -m "$(cat <<'EOF'
Restyle About and Skills with cyan accents and tilt chips.

EOF
)"
```

---

### Task 8: Restyle Experience and Projects

**Files:**
- Modify: `src/components/Experience/Experience.jsx`
- Modify: `src/components/Projects/Projects.jsx`

**Interfaces:**
- Experience keeps freelance + CentraLogic data; Projects keep modal; wrap cards in `TiltCard`

- [ ] **Step 1: Experience** — timeline chrome to cyan/steel; surface-card panels; active depth via border/cyan glow (subtle, not purple).

- [ ] **Step 2: Projects** — grid cards in surface-card + TiltCard; modal restyled to new surfaces; cyan status/accents.

- [ ] **Step 3: Build + commit**

```bash
npm run build
git add src/components/Experience/Experience.jsx src/components/Projects/Projects.jsx
git commit -m "$(cat <<'EOF'
Restyle Experience and Projects with CSS 3D depth.

Preserve freelance and CentraLogic history and project modals under the new look.
EOF
)"
```

---

### Task 9: Restyle Education and Contact

**Files:**
- Modify: `src/components/Education/Education.jsx`
- Modify: `src/components/Contact/Contact.jsx`

**Interfaces:**
- Contact headline: “Let’s build something”; support freelance line from spec

- [ ] **Step 1: Education** — compact surface list; Syne headlines; steel muted meta.

- [ ] **Step 2: Contact** — headline/support per spec; cyan primary actions; surface social cards.

- [ ] **Step 3: Build + commit**

```bash
npm run build
git add src/components/Education/Education.jsx src/components/Contact/Contact.jsx
git commit -m "$(cat <<'EOF'
Restyle Education and Contact for the 3D redesign system.

EOF
)"
```

---

### Task 10: End-to-end verification

**Files:** none unless fixes required

- [ ] **Step 1: Production build**

```bash
npm run build
```

Expected: exit 0

- [ ] **Step 2: Preview checklist** (`npm run preview` + browser)

1. Hero: Syne name dominant; constellation or fallback; dual-role sentence; CTAs; no stats  
2. No DualPath in nav or page  
3. Palette is charcoal/steel/cyan site-wide (spot-check About, Skills, Experience, Projects, Contact)  
4. Experience includes Freelance + CentraLogic promotion note  
5. Desktop: card tilt works; reduced-motion disables tilt + WebGL motion  
6. Mobile: hero lighter/usable; DualPath absent; no horizontal overflow  
7. R3F chunk lazy-loads (Network tab shows separate chunk when hero mounts)

- [ ] **Step 3: Commit fixes only if needed**

---

## Spec coverage (self-review)

| Spec requirement | Task |
|------------------|------|
| Tokens + Syne/Sora | Task 2 |
| Strip DualPath | Task 1 |
| Shared TiltCard | Task 3 |
| R3F constellation + lazy/fallback | Tasks 4–5 |
| Restyle all sections | Tasks 6–9 |
| Dual story via hero + Experience | Tasks 5, 8 (data from branch) |
| Perf / reduced-motion | Tasks 3–5, 10 |
| Build success | Every task |

## Consistency notes

- Accent hex `#2EE6D6` / `#2ee6d6` used consistently  
- `TiltCard` lives at `src/components/shared/TiltCard.jsx`  
- `HeroScene` default export; props `active`, `reducedMotion`, `coarse`  
- No DualPath id/link anywhere after Task 1  
