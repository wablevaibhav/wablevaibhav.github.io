import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education, certifications } from '../../data/portfolioData';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [showAll, setShowAll] = useState(false);
  const featured = certifications.filter((c) => c.featured);
  const rest = certifications.filter((c) => !c.featured);
  const visibleCerts = showAll ? [...featured, ...rest] : featured;

  return (
    <section id="education" className="section-shell scroll-mt-24 relative bg-[#0B0F14] overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col gap-8"
        >
          <motion.div variants={itemVariants} className="max-w-2xl">
            <span className="section-tag">Learning</span>
            <h2 className="heading-section text-white mb-3">
              Academic &{' '}
              <span className="gradient-text">credentials</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <motion.div variants={itemVariants} className="space-y-3">
              <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-500 px-1">Education</h3>
              <div className="space-y-3">
                {education.map((edu) => (
                  <motion.div
                    key={edu.degree}
                    variants={itemVariants}
                    className="surface-card p-4 rounded-2xl group"
                  >
                    <div className="flex gap-3 items-start">
                       <div className="text-base p-2.5 rounded-xl bg-white/5 text-[#3B82F6] shrink-0">
                          {edu.icon}
                       </div>
                       <div className="min-w-0">
                          <span className="text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-slate-500 mb-1 block">{edu.year}</span>
                          <h4 className="heading-card text-white group-hover:text-[#3B82F6] transition-colors mb-0.5">{edu.degree}</h4>
                          <p className="text-slate-400 font-medium text-xs">{edu.institution}</p>
                          <p className="mt-1.5 text-[0.6rem] font-semibold text-slate-600 uppercase tracking-wide">{edu.location}</p>
                       </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
              <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-500 px-1">Certifications</h3>
              <ul id="cert-list" className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {visibleCerts.map((cert) => (
                  <li
                    key={cert.title}
                    className="surface-card px-3 py-2.5 rounded-xl flex items-center gap-2.5"
                  >
                    <span className="text-sm shrink-0" aria-hidden="true">{cert.icon}</span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-white leading-snug">{cert.title}</p>
                      <p className="text-[0.55rem] text-slate-500 font-semibold uppercase tracking-wider">{cert.issuer}</p>
                    </div>
                  </li>
                ))}
              </ul>
              {rest.length > 0 && (
                <button
                  type="button"
                  onClick={() => setShowAll((v) => !v)}
                  aria-expanded={showAll}
                  aria-controls="cert-list"
                  className="text-xs font-semibold text-[#3B82F6] hover:text-white transition-colors px-1"
                >
                  {showAll ? 'Show fewer' : `Show all (${certifications.length})`}
                </button>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
