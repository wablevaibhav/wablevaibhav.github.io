import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiences } from "../../data/portfolioData";
import {
  FiCalendar,
  FiMapPin,
  FiChevronRight,
} from "react-icons/fi";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "circOut" } },
};

function ExperienceCard({ exp, index, isActive, onClick }) {
  return (
    <motion.div
      layout
      variants={itemVariants}
      className={`group relative flex gap-4 p-4 md:p-5 rounded-2xl transition-all duration-300 cursor-pointer surface-card
        ${isActive ? "border-[#3B82F6]/35 shadow-[0_0_28px_rgba(59,130,246,0.08)]" : "hover:border-white/15"}`}
      onClick={onClick}
    >
      <div className="hidden md:flex flex-col items-center pt-1.5 shrink-0">
        <div className={`w-2.5 h-2.5 rounded-full transition-all ${isActive ? "bg-[#3B82F6] shadow-[0_0_12px_rgba(59,130,246,0.5)]" : "bg-white/15"}`} />
        {index < experiences.length - 1 && (
          <div className="w-px flex-grow bg-gradient-to-b from-white/10 to-transparent mt-2" />
        )}
      </div>

      <div className="flex-grow relative z-10 min-w-0">
        <div className="flex flex-col md:flex-row justify-between items-start gap-3 mb-2">
          <div>
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-[#3B82F6]/90 mb-1.5 block">
              {exp.type}
            </span>
            <h3 className="heading-card text-white mb-1 group-hover:text-[#3B82F6] transition-colors">
              {exp.role}
            </h3>
            <div className="flex items-center gap-2 text-slate-400 font-semibold text-xs tracking-wide">
              {exp.company} <span className="w-1 h-1 rounded-full bg-[#3B82F6]/50" /> {exp.duration}
            </div>
          </div>
          <div className={`p-2 rounded-lg bg-white/5 border border-white/10 transition-all ${isActive ? "rotate-90 text-[#3B82F6] border-[#3B82F6]/30" : ""}`}>
            <FiChevronRight size={16} />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isActive ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-white/5 space-y-3">
                   <h4 className="text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-slate-500">Key contributions</h4>
                   <ul className="space-y-2">
                     {exp.highlights.map((h, i) => (
                       <motion.li
                         key={i}
                         initial={{ opacity: 0, x: -6 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ delay: i * 0.04 }}
                         className="flex items-start gap-2.5 text-slate-400 leading-relaxed text-xs"
                       >
                         <div className="mt-1.5 w-1 h-1 rounded-full bg-[#3B82F6]/50 shrink-0" />
                         <span>{h}</span>
                       </motion.li>
                     ))}
                   </ul>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-slate-500 text-[0.6rem] font-semibold uppercase tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="flex flex-wrap gap-4 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-slate-600 mt-2">
               <span className="flex items-center gap-1.5"><FiCalendar className="text-[#3B82F6]/40" size={12} /> {exp.period}</span>
               <span className="flex items-center gap-1.5"><FiMapPin className="text-[#3B82F6]/40" size={12} /> {exp.location}</span>
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
    <section id="experience" className="section-shell scroll-mt-24 relative bg-[#0B0F14] overflow-hidden">
      <div className="absolute top-0 right-0 w-[280px] h-[280px] bg-[#3B82F6]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col gap-8"
        >
          <motion.div variants={itemVariants} className="max-w-2xl">
            <span className="section-tag">Career History</span>
            <h2 className="heading-section text-white mb-3">
              Where I've been{' '}
              <span className="gradient-text">building</span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-3 relative">
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
