import { Suspense, useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { FiArrowUp, FiBriefcase } from 'react-icons/fi';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// Thin progress bar at the top of the page.
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] z-[120] origin-left bg-gradient-to-r from-[#3B82F6] via-[#22d3ee] to-[#a78bfa]"
      style={{ scaleX }}
    />
  );
}

// One delegated listener drives the cursor spotlight on every .spotlight card.
function useSpotlight() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return undefined;
    const onMove = (e) => {
      const card = e.target.closest?.('.spotlight');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    document.addEventListener('pointermove', onMove, { passive: true });
    return () => document.removeEventListener('pointermove', onMove);
  }, []);
}

// true once the user has scrolled past the hero.
function usePastHero() {
  const [past, setPast] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('home');
      setPast(window.scrollY > (hero ? hero.offsetHeight - 80 : 500));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return past;
}

// true while the contact section is on screen.
function useContactVisible() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = document.getElementById('contact');
    if (!el) return undefined;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return visible;
}

// Sticky "Hire Me" (mobile only) + scroll-to-top, after the hero.
function FloatingActions() {
  const pastHero = usePastHero();
  const contactVisible = useContactVisible();

  return (
    <AnimatePresence>
      {pastHero && !contactVisible && (
        <motion.a
          key="hire"
          href="#contact"
          className="md:hidden fixed bottom-5 left-5 z-[90] btn-primary shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <FiBriefcase size={14} aria-hidden="true" /> Hire Me
        </motion.a>
      )}
      {pastHero && (
        <motion.button
          key="top"
          type="button"
          aria-label="Scroll to top"
          className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[90] w-11 h-11 md:w-12 md:h-12 rounded-xl bg-[#121820]/90 border border-white/10 text-white flex items-center justify-center shadow-xl hover:bg-[#1a2230] hover:border-[#3B82F6]/40 transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiArrowUp aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// Each below-the-fold section is its own Suspense boundary so React hydrates
// them as separate, interruptible chunks instead of one long blocking task.
export default function App() {
  useSpotlight();
  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#E8EEF4] antialiased overflow-x-hidden selection:bg-blue-400/30 selection:text-white page-fade-in">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}><About /></Suspense>
        <Suspense fallback={null}><Skills /></Suspense>
        <Suspense fallback={null}><Experience /></Suspense>
        <Suspense fallback={null}><Projects /></Suspense>
        <Suspense fallback={null}><Services /></Suspense>
        <Suspense fallback={null}><Testimonials /></Suspense>
        <Suspense fallback={null}><Education /></Suspense>
        <Suspense fallback={null}><Contact /></Suspense>
      </main>
      <Suspense fallback={null}><Footer /></Suspense>
      <FloatingActions />
    </div>
  );
}
