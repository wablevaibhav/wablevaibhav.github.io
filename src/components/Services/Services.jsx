import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { services, processSteps } from '../../data/portfolioData';
import { FiSmartphone, FiGlobe, FiServer, FiCpu, FiSend } from 'react-icons/fi';

const serviceIcons = {
  mobile: <FiSmartphone />,
  web: <FiGlobe />,
  backend: <FiServer />,
  ai: <FiCpu />,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const stepVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="services" className="section-shell scroll-mt-24 relative bg-[#0B0F14] overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] glow-blob pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col gap-8"
        >
          <motion.div variants={itemVariants} className="max-w-2xl">
            <span className="section-tag">Services</span>
            <h2 className="heading-section text-white mb-2">
              Need an app built?{' '}
              <span className="gradient-text">Let's ship it.</span>
            </h2>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed max-w-lg">
              Freelance work for startups and businesses: from first scope to store launch.
            </p>
          </motion.div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {services.map((s) => (
              <motion.li key={s.id} variants={itemVariants} className="surface-card spotlight lift p-5 rounded-2xl flex flex-col gap-3 group">
                <span className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#60a5fa] flex items-center justify-center text-lg transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110" aria-hidden="true">
                  {serviceIcons[s.icon]}
                </span>
                <h3 className="heading-card text-white">{s.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed flex-1">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {s.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-xs font-semibold text-slate-400 uppercase tracking-wide">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.li>
            ))}
          </ul>

          <motion.div variants={itemVariants} className="surface-card p-5 rounded-2xl">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-4">How I work</h3>
            <motion.ol variants={containerVariants} className="flex flex-col md:flex-row md:items-center gap-3 md:gap-2">
              {processSteps.map((step, i) => (
                <motion.li key={step} variants={stepVariants} className="flex md:flex-1 items-center gap-3 md:gap-2">
                  <span className="w-7 h-7 shrink-0 rounded-full bg-[#3B82F6] text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold text-white">{step}</span>
                  {i < processSteps.length - 1 && (
                    <span className="hidden md:block flex-1 h-px mx-2 bg-gradient-to-r from-[#3B82F6]/60 to-transparent" aria-hidden="true" />
                  )}
                </motion.li>
              ))}
            </motion.ol>
          </motion.div>

          <motion.div variants={itemVariants}>
            <a href="#contact" className="btn-primary">
              <FiSend size={14} aria-hidden="true" /> Start a project
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
