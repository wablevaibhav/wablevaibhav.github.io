import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../../data/portfolioData';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function SkillBar({ skill, inView, delay = 0 }) {
  return (
    <div className="flex flex-col gap-3 group">
      <div className="flex justify-between items-center">
        <span className="flex items-center gap-3 text-white font-bold text-sm tracking-tight group-hover:text-blue-400 transition-colors">
          <span className="text-xl opacity-60 group-hover:opacity-100 transition-all">{skill.icon}</span>
          {skill.name}
        </span>
        <span className="text-slate-600 font-mono text-[0.65rem] font-black">{skill.level}%</span>
      </div>
      <div className="h-1.5 w-full bg-white/[0.03] rounded-full overflow-hidden border border-white/5">
        <motion.div
           className="h-full rounded-full relative"
           style={{ background: skill.color }}
           initial={{ width: 0 }}
           animate={{ width: inView ? `${skill.level}%` : 0 }}
           transition={{ duration: 1.5, delay, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] animate-[shine_2s_infinite]" />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="py-32 scroll-mt-32 relative bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col gap-20"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="max-w-4xl">
            <span className="section-tag">Tech Stack</span>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-none">
              Modern Toolkit for <br/>
              <span className="gradient-text">Scalable Systems</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Languages */}
            <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col gap-10">
               <div className="glass-card p-10 rounded-[2.5rem] flex flex-col gap-10">
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-2">Core Languages</h3>
                  <div className="flex flex-col gap-10">
                    {skills.languages.map((s, i) => (
                      <SkillBar key={s.name} skill={s} inView={inView} delay={0.2 + i * 0.1} />
                    ))}
                  </div>
               </div>
            </motion.div>

            {/* Right: Detailed Expertise */}
            <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col gap-6">
               <div className="glass-card p-2 rounded-[2.8rem] flex overflow-x-auto scrollbar-hide gap-1 md:gap-2 bg-white/[0.01]">
                 {skills.expertise.map((e, i) => (
                   <button
                     key={e.category}
                     onClick={() => setActiveTab(i)}
                     className={`flex-1 min-w-[120px] md:min-w-0 flex items-center justify-center gap-2 md:gap-3 px-4 py-4 md:px-5 md:py-5 rounded-[2rem] text-xs md:text-sm font-black uppercase tracking-widest transition-all duration-500
                       ${activeTab === i 
                         ? "bg-white/5 text-white shadow-2xl border border-white/10" 
                         : "text-slate-600 hover:text-slate-400"
                       }`}
                   >
                     <span className="text-lg md:text-xl" style={{ color: activeTab === i ? e.color : 'inherit' }}>{e.icon}</span>
                     <span className="hidden md:inline whitespace-nowrap">{e.category.split(' ')[0]}</span>
                   </button>
                 ))}
               </div>

               <AnimatePresence mode="wait">
                 <motion.div
                   key={activeTab}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   className="glass-card p-10 md:p-14 rounded-[3rem] min-h-[400px]"
                 >
                   <div className="flex items-center gap-6 mb-12">
                     <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-3xl transition-transform duration-500 group-hover:scale-110" style={{ color: skills.expertise[activeTab].color }}>
                       {skills.expertise[activeTab].icon}
                     </div>
                     <div>
                       <h4 className="text-3xl font-black text-white tracking-tight uppercase" style={{ color: skills.expertise[activeTab].color }}>{skills.expertise[activeTab].category}</h4>
                       <span className="text-[0.6rem] font-bold text-slate-500 uppercase tracking-widest">Specialization Area</span>
                     </div>
                   </div>

                   <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                     {skills.expertise[activeTab].skills.map((s, idx) => (
                       <motion.div
                         key={s}
                         initial={{ opacity: 0, scale: 0.9 }}
                         animate={{ opacity: 1, scale: 1 }}
                         transition={{ delay: idx * 0.05 }}
                         className="px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/5 text-slate-400 text-xs font-bold uppercase tracking-widest hover:border-blue-400/30 hover:text-white transition-all cursor-default text-center flex items-center justify-center"
                       >
                         {s}
                       </motion.div>
                     ))}
                   </div>
                 </motion.div>
               </AnimatePresence>
            </motion.div>
          </div>

          {/* Scrolling Marquee / Tech Cloud */}
          <div className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-6 px-10">
            {['Flutter', 'NestJS', 'PostgreSQL', 'AWS', 'Firebase', 'Next.js', 'PyTorch', 'TypeScript', 'Docker', 'Figma'].map((t) => (
               <span key={t} className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-slate-700 hover:text-blue-400/40 transition-colors cursor-default">
                 {t}
               </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
