import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../../data/portfolioData';
import {
  SiFlutter, SiReact, SiTypescript, SiKotlin, SiNodedotjs, SiCplusplus, SiHtml5,
} from 'react-icons/si';
import { FiSmartphone, FiServer, FiCloud, FiTool, FiCpu } from 'react-icons/fi';

const languageIcons = {
  'Dart / Flutter': <SiFlutter />,
  'React Native': <SiReact />,
  'TypeScript / JS': <SiTypescript />,
  'Kotlin / Java': <SiKotlin />,
  'Node.js': <SiNodedotjs />,
  'C / C++': <SiCplusplus />,
  'HTML / CSS': <SiHtml5 />,
};

const categoryIcons = {
  'Frontend & Mobile': <FiSmartphone />,
  'Backend Architecture': <FiServer />,
  'Cloud & Infrastructure': <FiCloud />,
  'DevOps & Tools': <FiTool />,
  'AI-Assisted Dev': <FiCpu />,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function SkillBar({ skill, inView, delay = 0 }) {
  return (
    <div className="flex flex-col gap-1.5 group">
      <div className="flex justify-between items-center">
        <span className="flex items-center gap-2 text-white font-semibold text-xs tracking-tight group-hover:text-[#3B82F6] transition-colors">
          <span className="text-sm opacity-70">{languageIcons[skill.name] ?? skill.icon}</span>
          {skill.name}
        </span>
        <span className="text-slate-600 font-mono text-[0.6rem]">{skill.level}%</span>
      </div>
      <div className="h-1 w-full bg-white/[0.04] rounded-full overflow-hidden">
        <motion.div
           className="h-full rounded-full"
           style={{ background: skill.color }}
           initial={{ width: 0 }}
           animate={{ width: inView ? `${skill.level}%` : 0 }}
           transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

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
              Modern toolkit for{' '}
              <span className="gradient-text">scalable systems</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <motion.div variants={itemVariants} className="lg:col-span-5">
               <div className="surface-card p-5 rounded-2xl flex flex-col gap-4">
                  <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-500">Core Languages</h3>
                  <div className="flex flex-col gap-3.5">
                    {skills.languages.map((s, i) => (
                      <SkillBar key={s.name} skill={s} inView={inView} delay={0.1 + i * 0.05} />
                    ))}
                  </div>
               </div>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col gap-3">
               <div className="surface-card p-1.5 rounded-2xl flex overflow-x-auto scrollbar-hide gap-1">
                 {skills.expertise.map((e, i) => (
                   <button
                     key={e.category}
                     onClick={() => setActiveTab(i)}
                     className={`flex-1 min-w-[96px] flex items-center justify-center gap-1.5 px-2.5 py-2.5 rounded-xl text-[0.65rem] font-semibold uppercase tracking-wide transition-all
                       ${activeTab === i
                         ? "bg-white/8 text-white border border-white/10"
                         : "text-slate-600 hover:text-slate-400"
                       }`}
                   >
                     <span className="text-sm" style={{ color: activeTab === i ? e.color : 'inherit' }}>{categoryIcons[e.category] ?? e.icon}</span>
                     <span className="hidden sm:inline whitespace-nowrap">{e.category.split(' ')[0]}</span>
                   </button>
                 ))}
               </div>

               <AnimatePresence mode="wait">
                 <motion.div
                   key={activeTab}
                   initial={{ opacity: 0, y: 8 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -8 }}
                   className="surface-card p-5 rounded-2xl"
                 >
                   <div className="flex items-center gap-3 mb-4">
                     <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-base" style={{ color: skills.expertise[activeTab].color }}>
                       {categoryIcons[skills.expertise[activeTab].category] ?? skills.expertise[activeTab].icon}
                     </div>
                     <div>
                       <h4 className="text-sm font-semibold text-white tracking-tight" style={{ color: skills.expertise[activeTab].color }}>{skills.expertise[activeTab].category}</h4>
                       <span className="text-[0.55rem] font-semibold text-slate-500 uppercase tracking-wider">Specialization</span>
                     </div>
                   </div>

                   <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                     {skills.expertise[activeTab].skills.map((s, idx) => (
                       <motion.div
                         key={s}
                         initial={{ opacity: 0, scale: 0.96 }}
                         animate={{ opacity: 1, scale: 1 }}
                         transition={{ delay: idx * 0.03 }}
                         className="px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-slate-400 text-[0.65rem] font-semibold uppercase tracking-wide text-center"
                       >
                         {s}
                       </motion.div>
                     ))}
                   </div>
                 </motion.div>
               </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
