import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiences } from "../../data/portfolioData";
import {
  FiCalendar,
  FiMapPin,
  FiBriefcase,
  FiChevronRight,
} from "react-icons/fi";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "circOut" } },
};

function ExperienceCard({ exp, index, isActive, onClick }) {
  return (
    <motion.div
      layout
      variants={itemVariants}
      className={`group relative flex gap-8 p-8 md:p-12 rounded-[3.5rem] transition-all duration-500 cursor-pointer glass-card 
        ${isActive ? "bg-white/[0.05] border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.1)]" : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04]"}`}
      onClick={onClick}
    >
      {/* Index Number */}
      <div className="absolute top-8 right-12 text-6xl md:text-8xl font-black text-white/[0.02] group-hover:text-blue-500/[0.03] transition-colors font-mono pointer-events-none">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Timeline Visuals */}
      <div className="hidden md:flex flex-col items-center pt-2 shrink-0">
        <div className={`w-4 h-4 rounded-full transition-all duration-500 ${isActive ? "bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.6)]" : "bg-white/10 group-hover:bg-white/20"}`} />
        {index < experiences.length - 1 && (
          <div className="w-[1px] flex-grow bg-gradient-to-b from-white/10 to-transparent mt-4" />
        )}
      </div>

      <div className="flex-grow relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
          <div>
            <span className="text-[0.65rem] font-black uppercase tracking-[0.3em] text-blue-400/80 mb-3 block">
              {exp.type}
            </span>
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors tracking-tight">
              {exp.role}
            </h3>
            <div className="flex items-center gap-2 text-slate-300 font-bold uppercase text-sm tracking-widest opacity-80">
              {exp.company} <span className="w-1 h-1 rounded-full bg-blue-500/50" /> {exp.duration}
            </div>
          </div>
          <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 transition-all duration-500 ${isActive ? "rotate-90 text-blue-400 border-blue-400/30" : "group-hover:text-white"}`}>
            <FiChevronRight size={24} />
          </div>
        </div>

        {/* Content Section */}
        <AnimatePresence mode="wait">
          {isActive ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-8 border-t border-white/5 grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-12 space-y-4">
                   <h4 className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-slate-500 mb-6">Key Contributions</h4>
                   <ul className="space-y-4">
                     {exp.highlights.map((h, i) => (
                       <motion.li
                         key={i}
                         initial={{ opacity: 0, x: -10 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ delay: i * 0.1 }}
                         className="flex items-start gap-4 text-slate-400 leading-relaxed text-sm"
                       >
                         <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500/40 shrink-0" />
                         <span>{h}</span>
                       </motion.li>
                     ))}
                   </ul>
                </div>

                <div className="lg:col-span-12 flex flex-wrap gap-2 pt-6">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-slate-500 text-[0.65rem] font-black uppercase tracking-widest hover:text-blue-400 hover:border-blue-400/20 transition-all"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="flex flex-wrap gap-8 text-[0.65rem] font-black uppercase tracking-[0.2em] text-slate-600">
               <span className="flex items-center gap-2"><FiCalendar className="text-blue-500/40" /> {exp.period}</span>
               <span className="flex items-center gap-2"><FiMapPin className="text-blue-500/40" /> {exp.location}</span>
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="experience" className="py-32 scroll-mt-32 relative bg-[#030712] overflow-hidden">
       {/* Background Accent */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col gap-20"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="max-w-4xl">
            <span className="section-tag">Career History</span>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-none">
              Where I've Been <br/>
              <span className="gradient-text">Building the Future</span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="flex flex-col gap-6 relative">
            {experiences.map((exp, i) => (
              <ExperienceCard
                key={exp.id}
                exp={exp}
                index={i}
                isActive={active === i}
                onClick={() => setActive(active === i ? -1 : i)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
