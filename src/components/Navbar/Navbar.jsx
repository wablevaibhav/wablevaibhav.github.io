import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../../data/portfolioData";
import { NAV_LINKS } from "./navLinks";

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // At the very bottom the last section can be too short to reach the
      // threshold, so treat "scrolled to the end" as the last section.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActive(`#${SECTION_IDS[SECTION_IDS.length - 1]}`);
        return;
      }

      const probe = window.scrollY + window.innerHeight * 0.35;
      let current = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= probe) current = id;
      }
      setActive(`#${current}`);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (!menuOpen) return undefined;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const go = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", href);
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <nav
      aria-label="Main"
      className="fixed top-0 left-0 right-0 z-[100] flex justify-center transition-all duration-500 py-3 md:py-5"
    >
      <div
        className={`
        flex items-center justify-between px-4 md:px-6 py-2.5 transition-all duration-500
        ${
          scrolled
            ? "bg-[#0B0F14]/90 border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.45)] w-[94%] max-w-5xl"
            : "bg-transparent w-full max-w-6xl px-5 md:px-8"
        }
      `}
      >
        <a
          href="#home"
          className="group flex items-center gap-0.5 font-display font-bold text-base tracking-tight py-1"
          onClick={(e) => go(e, "#home")}
          aria-label="Vaibhav Wable, back to top"
        >
          <span className="gradient-text" aria-hidden="true">&lt;</span>
          <span className="text-white" aria-hidden="true">VW</span>
          <span className="gradient-text" aria-hidden="true">/&gt;</span>
        </a>

        <ul className="hidden lg:flex items-center gap-1 xl:gap-3">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? "location" : undefined}
                className={`relative block px-2.5 py-2 text-xs font-semibold tracking-[0.14em] uppercase transition-colors ${
                  active === link.href ? "text-white" : "text-slate-400 hover:text-slate-200"
                }`}
                onClick={(e) => go(e, link.href)}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    className="absolute inset-0 bg-[#3B82F6]/15 rounded-lg -z-10"
                    layoutId="nav-bg"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-xs uppercase tracking-widest hover:border-[#3B82F6]/40 transition-all"
          >
            Resume ↗
          </a>

          <button
            type="button"
            className="lg:hidden flex flex-col justify-center gap-1.5 cursor-pointer w-11 h-11 items-center z-[101]"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-white rounded-full"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 h-0.5 bg-white rounded-full"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-white rounded-full"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 bg-[#0B0F14]/98 z-[99] px-6 pt-24 pb-10 flex flex-col lg:hidden overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ul className="flex flex-col gap-1 flex-1">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <a
                    href={link.href}
                    aria-current={active === link.href ? "location" : undefined}
                    className={`block text-left text-lg font-semibold tracking-tight py-3 border-b border-white/5 transition-colors ${
                      active === link.href ? "text-[#60a5fa]" : "text-white"
                    }`}
                    onClick={(e) => go(e, link.href)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
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
    </nav>
  );
}
