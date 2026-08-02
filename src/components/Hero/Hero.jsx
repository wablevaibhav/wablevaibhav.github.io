import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { personalInfo } from "../../data/portfolioData";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMail,
  FiSend,
} from "react-icons/fi";

const socialLinks = [
  { href: personalInfo.linkedin, icon: <FiLinkedin />, label: "LinkedIn" },
  { href: personalInfo.github, icon: <FiGithub />, label: "GitHub" },
  { href: personalInfo.instagram, icon: <FiInstagram />, label: "Instagram" },
  { href: `mailto:${personalInfo.email}`, icon: <FiMail />, label: "Email" },
];

const taglineSequence = personalInfo.taglines.flatMap((t) => [t, 2000]);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-[#0B0F14] px-5 pt-24 pb-14 md:pt-28 md:pb-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(46,230,214,0.08),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(122,143,166,0.06),transparent_45%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-4 flex items-center gap-2"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-white/60">
            {personalInfo.availability || "Open to freelance & contract work"}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-[#2EE6D6] font-mono text-[0.65rem] tracking-[0.22em] uppercase mb-2"
        >
          Hello World, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="heading-hero text-white mb-4"
        >
          Vaibhav <span className="gradient-text">Wable</span>
        </motion.h1>

        <div className="h-7 md:h-8 mb-5">
          <TypeAnimation
            sequence={taglineSequence}
            wrapper="h2"
            speed={50}
            className="text-sm md:text-base font-medium text-[var(--color-muted)] tracking-tight"
            repeat={Infinity}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-md text-sm text-[var(--color-muted)] leading-relaxed mb-7 px-1"
        >
          Software Engineer at{" "}
          <span className="text-[#2EE6D6]">CentraLogic</span>
          , available for freelance{" "}
          <span className="text-white font-semibold">
            Flutter, React Native, and web
          </span>{" "}
          delivery.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-3 w-full sm:w-auto mb-8"
        >
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
            <button
              className="btn-primary justify-center w-full sm:w-auto"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <FiSend size={14} /> Let's Talk
            </button>
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
            className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-slate-500 hover:text-[#2EE6D6] transition-colors"
          >
            Connect on LinkedIn ↗
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-2 p-1.5 rounded-xl bg-white/[0.02] border border-white/5"
        >
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/5 hover:text-[#2EE6D6] transition-all text-slate-500"
            >
              {item.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
