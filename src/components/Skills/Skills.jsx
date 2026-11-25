import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillGroups } from '../../data/portfolioData';
import { FiSmartphone, FiCloud, FiCpu, FiCoffee, FiDatabase, FiGlobe } from 'react-icons/fi';

const groupIcons = {
  mobile: <FiSmartphone />,
  web: <FiGlobe />,
  backend: <FiDatabase />,
  ai: <FiCpu />,
  cloud: <FiCloud />,
  java: <FiCoffee />,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, staggerChildren: 0.035, delayChildren: 0.15 } },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 24 } },
};

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="skills" className="section-shell scroll-mt-24 relative bg-[#0B0F14]">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col gap-8 md:gap-10"
        >
          <motion.div variants={itemVariants} className="max-w-2xl">
            <span className="section-tag">Tech Stack</span>
            <h2 className="heading-section text-white mb-3">
              Mobile-first,{' '}
              <span className="gradient-text">full-stack toolkit</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillGroups.map((group) => (
              <motion.div
                key={group.category}
                variants={itemVariants}
                className="surface-card spotlight lift p-5 rounded-2xl flex flex-col gap-4"
              >
                <h3 className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-white">
                  <span
                    className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-base"
                    style={{ color: group.color }}
                    aria-hidden="true"
                  >
                    {groupIcons[group.icon]}
                  </span>
                  {group.category}
                </h3>
                <motion.ul variants={containerVariants} className="flex flex-wrap gap-1.5">
                  {group.skills.map((s) => (
                    <motion.li
                      key={s}
                      variants={chipVariants}
                      className="px-2.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-slate-300 text-xs font-semibold tracking-wide hover:border-[#3B82F6]/40 hover:text-white transition-colors"
                    >
                      {s}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
