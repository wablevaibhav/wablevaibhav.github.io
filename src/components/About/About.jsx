import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../../data/portfolioData';
import {
  FiMapPin, FiMail, FiLinkedin, FiGithub,
  FiZap, FiLayers, FiCpu, FiExternalLink
} from 'react-icons/fi';

const traits = [
  {
    icon: <FiZap />,
    title: 'Architecture-First',
    desc: 'I design systems before writing code—ensuring scalability and maintainability from day one.',
    color: '#3B82F6',
  },
  {
    icon: <FiLayers />,
    title: 'Full-Stack Delivery',
    desc: 'Leading Flutter at CentraLogic while freelancing—from UI to Node.js APIs and store delivery.',
    color: '#7A8FA6',
  },
  {
    icon: <FiCpu />,
    title: 'AI-Accelerated Workflow',
    desc: 'Using Cursor and Claude to move faster on features, migrations, and code quality.',
    color: '#3B82F6',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="section-shell scroll-mt-24 relative bg-[#0B0F14] overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[320px] h-[320px] bg-[#3B82F6]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col gap-8 md:gap-10"
        >
          <motion.div variants={itemVariants} className="max-w-2xl">
            <span className="section-tag">About Me</span>
            <h2 className="heading-section text-white mb-3">
              Crafting digital experiences with{' '}
              <span className="gradient-text">engineering precision</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
            <motion.div variants={itemVariants} className="lg:col-span-7">
              <div className="surface-card p-5 md:p-6 rounded-2xl">
                <div className="space-y-3 text-[var(--color-muted)] text-sm leading-relaxed">
                  {personalInfo.about.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-white/5">
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[0.7rem] font-semibold text-slate-400 hover:text-white transition-all">
                    <FiLinkedin className="text-[#3B82F6]" /> LinkedIn <FiExternalLink size={12} />
                  </a>
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[0.7rem] font-semibold text-slate-400 hover:text-white transition-all">
                    <FiGithub /> GitHub <FiExternalLink size={12} />
                  </a>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[0.7rem] font-semibold text-[#3B82F6]">
                    <FiMapPin size={12} /> {personalInfo.location}
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              {traits.map((trait) => (
                <motion.div
                  key={trait.title}
                  variants={itemVariants}
                  className="surface-card p-4 rounded-2xl flex gap-3.5 items-start group"
                >
                  <div className="text-base p-2.5 rounded-xl bg-white/5 text-[#3B82F6] shrink-0">
                    {trait.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1 tracking-tight group-hover:text-[#3B82F6] transition-colors">{trait.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{trait.desc}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div variants={itemVariants} className="mt-1 p-4 rounded-2xl bg-[#3B82F6]/8 border border-[#3B82F6]/20 flex justify-around items-center">
                 <div className="text-center">
                    <span className="block text-lg font-bold text-white tracking-tight">3+</span>
                    <span className="text-[0.55rem] font-semibold uppercase tracking-wider text-[#3B82F6]/80">Years</span>
                 </div>
                 <div className="w-px h-8 bg-white/10" />
                 <div className="text-center">
                    <span className="block text-lg font-bold text-white tracking-tight">10+</span>
                    <span className="text-[0.55rem] font-semibold uppercase tracking-wider text-[#3B82F6]/80">Shipped</span>
                 </div>
                 <div className="w-px h-8 bg-white/10" />
                 <div className="text-center">
                    <span className="block text-lg font-bold text-white tracking-tight">M.Sc.</span>
                    <span className="text-[0.55rem] font-semibold uppercase tracking-wider text-[#3B82F6]/80">CS</span>
                 </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
