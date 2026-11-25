import { TypeAnimation } from "react-type-animation";
import { personalInfo } from "../../data/portfolioData";
import { usePrefersReducedMotion } from "../../lib/hooks";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiYoutube,
  FiMail,
  FiSend,
} from "react-icons/fi";

const socialLinks = [
  { href: personalInfo.linkedin, icon: <FiLinkedin />, label: "LinkedIn" },
  { href: personalInfo.github, icon: <FiGithub />, label: "GitHub" },
  { href: personalInfo.instagram, icon: <FiInstagram />, label: "Instagram" },
  { href: personalInfo.youtube, icon: <FiYoutube />, label: "YouTube" },
  { href: `mailto:${personalInfo.email}`, icon: <FiMail />, label: "Email" },
];

const taglineSequence = personalInfo.taglines.flatMap((t) => [t, 2000]);
const taglineClass =
  "text-lg md:text-2xl font-medium text-[var(--color-muted)] tracking-tight";

// Static first tagline in the prerendered HTML and for reduced-motion users;
// the typing effect takes over after hydration otherwise.
function Tagline() {
  const reduceMotion = usePrefersReducedMotion();
  if (reduceMotion) {
    return <p className={taglineClass}>{personalInfo.taglines[0]}</p>;
  }
  return (
    <p className={taglineClass}>
      <span className="sr-only">{personalInfo.taglines.join(". ")}</span>
      <span aria-hidden="true">
        <TypeAnimation sequence={taglineSequence} wrapper="span" speed={50} repeat={Infinity} />
      </span>
    </p>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-[#0B0F14] px-5 pt-24 pb-14 md:pt-28 md:pb-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(59,130,246,0.08),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(122,143,166,0.06),transparent_45%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center text-center">
        <div className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-4 flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
            <span className="animate-ping motion-reduce:hidden absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
            {personalInfo.availability}
          </span>
        </div>

        <p className="text-[#60a5fa] font-mono text-xs md:text-sm tracking-[0.24em] uppercase mb-3">
          Hello World, I'm
        </p>

        <h1 className="heading-hero text-white mb-5">
          Vaibhav <span className="gradient-text">Wable</span>
        </h1>

        <div className="min-h-9 md:min-h-11 mb-6">
          <Tagline />
        </div>

        <p className="max-w-xl text-base md:text-lg text-[var(--color-muted)] leading-relaxed mb-8 px-1">
          Software Engineer at{" "}
          <span className="text-[#60a5fa]">CentraLogic</span>, building
          mobile and web apps with{" "}
          <span className="text-white font-semibold">
            Flutter, React Native, Next.js and Node.js
          </span>
          , and shipping LLM features in real apps.
        </p>

        <div className="flex flex-col items-center gap-3 w-full sm:w-auto mb-8">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
            <a href="#contact" className="btn-primary justify-center w-full sm:w-auto">
              <FiSend size={14} aria-hidden="true" /> Let's Talk
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline justify-center w-full sm:w-auto"
            >
              View Resume ↗
            </a>
          </div>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 hover:text-[#60a5fa] transition-colors py-1"
          >
            Connect on LinkedIn ↗
          </a>
        </div>

        <div className="flex items-center gap-2 p-1.5 rounded-xl bg-white/[0.02] border border-white/5">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={item.label}
              className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 hover:text-[#60a5fa] transition-all text-slate-400"
            >
              <span aria-hidden="true">{item.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
