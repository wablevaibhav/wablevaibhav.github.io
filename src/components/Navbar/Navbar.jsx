import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('#home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section detection
      const sections = NAV_LINKS.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActive(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[100] flex justify-center transition-all duration-500 py-6"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      {/* Floating Pill Navbar */}
      <div className={`
        flex items-center justify-between px-8 py-3 transition-all duration-500
        ${scrolled 
          ? "bg-[#0d111c]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] w-[90%] max-w-5xl" 
          : "bg-transparent w-full max-w-7xl"
        }
      `}>
        {/* Logo */}
        <button 
          className="group flex items-center gap-1 font-black text-2xl tracking-tighter hover:scale-105 transition-transform" 
          onClick={() => scrollTo('#home')}
        >
          <span className="gradient-text">&lt;</span>
          <span className="text-white">VW</span>
          <span className="gradient-text">/&gt;</span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <button
                className={`relative px-2 py-1 text-[0.65rem] font-black tracking-[0.2em] uppercase transition-all duration-300 ${
                  active === link.href ? "text-white" : "text-slate-500 hover:text-slate-300"
                }`}
                onClick={() => scrollTo(link.href)}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    className="absolute inset-0 bg-blue-500/10 rounded-lg -z-10"
                    layoutId="nav-bg"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="https://drive.google.com/file/d/1g-ByJOlQpbyOyXkfXDYkHIjTGjKdpfc3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white font-black text-[0.6rem] uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95"
          >
            Resume ↗
          </a>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 cursor-pointer p-2 z-[101]"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <motion.span 
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-white rounded-full transition-all" 
            />
            <motion.span 
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 h-0.5 bg-white rounded-full transition-all" 
            />
            <motion.span 
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-white rounded-full transition-all" 
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#030712] z-[100] p-12 flex flex-col justify-center items-center gap-8 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                className={`text-4xl font-black tracking-tighter uppercase transition-all ${
                  active === link.href ? "text-white scale-110" : "text-slate-700 hover:text-slate-500"
                }`}
                onClick={() => scrollTo(link.href)}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
