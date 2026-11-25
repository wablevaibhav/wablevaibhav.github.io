import { TypeAnimation } from "react-type-animation";
import { personalInfo, centraLogicYears } from "../../data/portfolioData";
import { usePrefersReducedMotion } from "../../lib/hooks";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiYoutube,
  FiMail,
  FiSend,
  FiCpu,
} from "react-icons/fi";
import { SiFlutter, SiReact, SiNextdotjs, SiNodedotjs } from "react-icons/si";

// Drop your photo at src/assets/profile.jpg (or .png / .webp) and it is picked
// up automatically, hashed and optimised by Vite. Until then the hero shows an
// animated monogram.
// TODO: save your LinkedIn profile photo as src/assets/profile.jpg (square, at least 600×600).
const photoModules = import.meta.glob("../../assets/profile.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});
const photoSrc = Object.values(photoModules)[0] ?? null;

const socialLinks = [
  { href: personalInfo.linkedin, icon: <FiLinkedin />, label: "LinkedIn" },
  { href: personalInfo.github, icon: <FiGithub />, label: "GitHub" },
  { href: personalInfo.instagram, icon: <FiInstagram />, label: "Instagram" },
  { href: personalInfo.youtube, icon: <FiYoutube />, label: "YouTube" },
  { href: `mailto:${personalInfo.email}`, icon: <FiMail />, label: "Email" },
];

// Floating tech badges around the portrait.
const badges = [
  { label: "Flutter", icon: <SiFlutter />, color: "#54C5F8", pos: "top-[4%] -left-[10%]", delay: "0s" },
  { label: "React Native", icon: <SiReact />, color: "#61DAFB", pos: "top-[22%] -right-[16%]", delay: "-1.6s" },
  { label: "Next.js", icon: <SiNextdotjs />, color: "#E8EEF4", pos: "bottom-[24%] -left-[16%]", delay: "-3.2s" },
  { label: "Node.js", icon: <SiNodedotjs />, color: "#68A063", pos: "bottom-[8%] -right-[8%]", delay: "-0.8s" },
  { label: "LLM features", icon: <FiCpu />, color: "#fb923c", pos: "-top-[8%] right-[12%]", delay: "-2.4s" },
];

const taglineSequence = personalInfo.taglines.flatMap((t) => [t, 2000]);
const taglineClass =
  "text-lg md:text-2xl font-medium text-[var(--color-muted)] tracking-tight";

// Static first tagline in the prerendered HTML and for reduced-motion users;
// the typing effect takes over after hydration otherwise.
function Tagline() {
  const reduceMotion = usePrefersReducedMotion();
  if (reduceMotion) {
    return (
      <p className={taglineClass}>
        <span className="text-[#60a5fa]" aria-hidden="true">&gt; </span>
        {personalInfo.taglines[0]}
      </p>
    );
  }
  return (
    <p className={taglineClass}>
      <span className="sr-only">{personalInfo.taglines.join(". ")}</span>
      <span aria-hidden="true">
        <span className="text-[#60a5fa]">&gt; </span>
        <TypeAnimation sequence={taglineSequence} wrapper="span" speed={50} repeat={Infinity} />
      </span>
    </p>
  );
}

function Portrait() {
  return (
    <div className="hero-pop relative w-44 h-44 sm:w-64 sm:h-64 lg:w-[22rem] lg:h-[22rem] shrink-0">
      <div className="hero-glow absolute -inset-10 rounded-full" aria-hidden="true" />
      <div className="hero-orbit absolute -inset-7 rounded-full border border-dashed border-[#3B82F6]/30" aria-hidden="true">
        <span className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-[#60a5fa] shadow-[0_0_12px_#3b82f6]" />
      </div>
      <div className="hero-ring absolute -inset-[5px] rounded-full" aria-hidden="true" />

      <div className="hero-float relative w-full h-full rounded-full p-[5px] bg-[#0B0F14]">
        <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-[#16233a] to-[#0d1420] flex items-center justify-center">
          {photoSrc ? (
            <img
              src={photoSrc}
              alt="Vaibhav Wable"
              width={704}
              height={704}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
            />
          ) : (
            <span
              role="img"
              aria-label="Vaibhav Wable"
              className="font-display font-bold text-5xl sm:text-6xl lg:text-8xl tracking-tighter text-white select-none"
            >
              <span className="gradient-text">V</span>W
            </span>
          )}
        </div>
      </div>

      {badges.map((b) => (
        <span
          key={b.label}
          className={`hero-badge absolute ${b.pos} hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#121820] border border-white/10 shadow-lg text-xs font-semibold text-white whitespace-nowrap`}
          style={{ animationDelay: b.delay }}
          aria-hidden="true"
        >
          <span style={{ color: b.color }}>{b.icon}</span>
          {b.label}
        </span>
      ))}

      <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#121820] border border-[#3B82F6]/30 shadow-xl whitespace-nowrap">
        <span className="font-display font-bold text-xl text-white leading-none">{centraLogicYears}+</span>
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 leading-tight text-left">
          yrs at
          <br />
          CentraLogic
        </span>
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#0B0F14] px-5 pt-24 pb-16 md:pt-32"
    >
      <div className="hero-aurora absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div className="hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-14 lg:gap-8 items-center">
        <div className="flex justify-center lg:order-2 pt-6">
          <Portrait />
        </div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:order-1">
          <div className="hero-slide px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-5 flex items-center gap-2">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping motion-reduce:hidden absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
              {personalInfo.availability}
            </span>
          </div>

          <p className="hero-slide text-[#60a5fa] font-mono text-xs md:text-sm tracking-[0.24em] uppercase mb-3" style={{ animationDelay: "0.05s" }}>
            Hello World, I'm
          </p>

          <h1 className="hero-slide heading-hero text-white mb-4" style={{ animationDelay: "0.1s" }}>
            Vaibhav <span className="gradient-text hero-shimmer">Wable</span>
          </h1>

          <div className="min-h-14 sm:min-h-9 md:min-h-11 mb-5 flex items-start">
            <Tagline />
          </div>

          <p className="hero-slide max-w-xl text-base md:text-lg text-[var(--color-muted)] leading-relaxed mb-8" style={{ animationDelay: "0.15s" }}>
            Software Engineer at{" "}
            <span className="text-[#60a5fa]">CentraLogic</span>, building
            mobile and web apps with{" "}
            <span className="text-white font-semibold">
              Flutter, React Native, Next.js and Node.js
            </span>
            , and shipping LLM features in real apps.
          </p>

          <div className="hero-slide flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-6" style={{ animationDelay: "0.2s" }}>
            <a href="#contact" className="btn-primary btn-shine justify-center w-full sm:w-auto">
              <FiSend size={14} aria-hidden="true" /> Let's Talk
            </a>
            <a href="#projects" className="btn-outline justify-center w-full sm:w-auto">
              See my work
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline justify-center w-full sm:w-auto"
            >
              Resume ↗
            </a>
          </div>

          <ul className="hero-slide flex items-center gap-2 p-1.5 rounded-xl bg-white/[0.02] border border-white/5" style={{ animationDelay: "0.25s" }}>
            {socialLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 hover:text-[#60a5fa] hover:-translate-y-0.5 transition-all text-slate-400"
                >
                  <span aria-hidden="true">{item.icon}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a
        href="#about"
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors"
      >
        Scroll
        <span className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5" aria-hidden="true">
          <span className="hero-scroll-dot w-1 h-1.5 rounded-full bg-[#60a5fa]" />
        </span>
      </a>
    </section>
  );
}
