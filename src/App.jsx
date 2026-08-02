import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function SplashScreen({ onDone }) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-[#0B0F14] flex items-center justify-center p-8"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="font-display text-3xl md:text-4xl font-bold flex gap-1 tracking-tighter text-white">
          <span className="gradient-text">&lt;</span>
          <span>VW</span>
          <span className="gradient-text">/&gt;</span>
        </div>
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">Vaibhav Wable</p>

        {/* Loading bar */}
        <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden mt-6">
          <motion.div
            className="h-full bg-gradient-to-r from-[#3B82F6] to-[#2563EB]"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            onAnimationComplete={onDone}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

// Scroll-to-top button
function ScrollTopBtn() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[90] w-11 h-11 md:w-12 md:h-12 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center shadow-xl hover:bg-white/10 hover:border-[#3B82F6]/30 transition-all text-lg"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#E8EEF4] antialiased overflow-x-hidden selection:bg-blue-400/30 selection:text-white">
      <AnimatePresence mode="wait">
        {loading && <SplashScreen key="splash" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </main>
          <Footer />
          <ScrollTopBtn />
        </motion.div>
      )}
    </div>
  );
}

