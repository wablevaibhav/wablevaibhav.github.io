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
      className="fixed inset-0 z-[200] bg-[#080b18] flex items-center justify-center p-8"
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
        <div className="text-6xl font-black flex gap-1 tracking-tighter text-white">
          <span className="gradient-text">&lt;</span>
          <span>VW</span>
          <span className="gradient-text">/&gt;</span>
        </div>
        <p className="text-[0.65rem] font-black uppercase tracking-[0.45em] text-slate-500">Vaibhav Wable</p>

        {/* Loading bar */}
        <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden mt-6">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-600 to-indigo-600"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
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
          className="fixed bottom-8 right-8 z-[90] w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center shadow-2xl hover:bg-white/10 hover:border-blue-500/30 transition-all font-bold text-xl"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.1 }}
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
    <div className="min-h-screen bg-[#080b18] text-slate-300 antialiased overflow-x-hidden selection:bg-blue-500/30 selection:text-white">
      <AnimatePresence mode="wait">
        {loading && <SplashScreen key="splash" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
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

