import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../../data/portfolioData";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[100] flex justify-center transition-all duration-500 py-3 md:py-5"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
    >
      <div
        className={`
        flex items-center justify-between px-4 md:px-6 py-2.5 transition-all duration-500
        ${
          scrolled
            ? "bg-[#0B0F14]/85 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.45)] w-[94%] max-w-5xl"
            : "bg-transparent w-full max-w-6xl px-5 md:px-8"
        }
      `}
      >
        <button
          className="group flex items-center gap-0.5 font-display font-bold text-base tracking-tight"
          onClick={() => scrollTo("#home")}
          aria-label="Home"
        >
          <span className="gradient-text">&lt;</span>
          <span className="text-white">VW</span>
          <span className="gradient-text">/&gt;</span>
        </button>

        <ul className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                className={`relative px-2 py-1 text-[0.65rem] font-semibold tracking-[0.16em] uppercase transition-all ${
                  active === link.href
                    ? "text-white"
                    : "text-slate-500 hover:text-slate-300"
                }`}
                onClick={() => scrollTo(link.href)}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    className="absolute inset-0 bg-[#2EE6D6]/10 rounded-lg -z-10"
                    layoutId="nav-bg"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-[0.6rem] uppercase tracking-widest hover:border-[#2EE6D6]/30 transition-all"
          >
            Resume ↗
          </a>

          <button
            className="lg:hidden flex flex-col gap-1.5 cursor-pointer p-2 z-[101]"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-white rounded-full"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 h-0.5 bg-white rounded-full"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-white rounded-full"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#0B0F14]/98 z-[99] px-6 pt-24 pb-10 flex flex-col lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col gap-1 flex-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  className={`text-left text-lg font-semibold tracking-tight py-3 border-b border-white/5 transition-colors ${
                    active === link.href ? "text-[#2EE6D6]" : "text-white"
                  }`}
                  onClick={() => scrollTo(link.href)}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center mt-6"
              onClick={() => setMenuOpen(false)}
            >
              View Resume ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
