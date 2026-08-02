import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "../../data/portfolioData";
import { FiGithub, FiExternalLink, FiX, FiChevronRight } from "react-icons/fi";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0B0F14]/92 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#121820] border border-white/10 shadow-2xl scrollbar-hide"
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="p-5 md:p-6 flex items-start gap-4 text-white relative overflow-hidden border-b border-white/5"
          style={{ background: `linear-gradient(135deg, ${project.color}22, #121820)` }}
        >
          <div className="text-2xl p-3 rounded-xl bg-white/5 border border-white/10 shrink-0">
            {project.emoji}
          </div>
          <div className="min-w-0 flex-1 pr-8">
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-[#3B82F6] mb-1.5 block">
              {project.category}
            </span>
            <h2 className="heading-card text-white mb-2">{project.title}</h2>
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[0.55rem] font-semibold uppercase tracking-wide border border-white/10 bg-white/5">
              {project.status}
            </span>
          </div>
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10"
            onClick={onClose}
          >
            <FiX size={16} />
          </button>
        </div>

        <div className="p-5 md:p-6 space-y-6">
          <div>
             <h4 className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-slate-500 mb-2">Summary</h4>
             <p className="text-sm text-slate-300 leading-relaxed">
               {project.longDescription || project.description}
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <h4 className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-slate-500 mb-2">Features</h4>
              <ul className="space-y-1.5">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-slate-400 text-xs leading-relaxed">
                    <FiChevronRight className="mt-0.5 shrink-0 text-[#3B82F6]" size={12} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-slate-500 mb-2">Stack</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-slate-400 text-[0.6rem] font-semibold uppercase tracking-wide"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {(project.links?.github || project.links?.live) && (
            <div className="flex flex-wrap gap-2.5 pt-4 border-t border-white/5">
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <FiGithub size={14} /> Repository
                </a>
              )}
              {project.links.live && project.links.live !== "#" && (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <FiExternalLink size={14} /> Live site
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative surface-card rounded-2xl overflow-hidden cursor-pointer min-h-[220px] flex flex-col"
      onClick={onClick}
    >
      <div
        className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity"
        style={{ background: `radial-gradient(circle at 80% 0%, ${project.color}33 0%, transparent 55%)` }}
      />

      <div className="relative z-10 p-4 md:p-5 flex flex-col flex-1">
         <div className="mb-3">
            <span className="text-2xl mb-2.5 block">{project.emoji}</span>
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-[#3B82F6]/90 mb-1.5 block">{project.category}</span>
            <h3 className="heading-card text-white mb-1.5 group-hover:text-[#3B82F6] transition-colors">{project.title}</h3>
            <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{project.description}</p>
         </div>

         <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-auto">
            <div className="flex flex-wrap gap-1.5">
               {project.tech.slice(0, 2).map(t => (
                 <span key={t} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[0.55rem] font-semibold text-slate-500 uppercase tracking-wide">{t}</span>
               ))}
               {project.tech.length > 2 && (
                 <span className="px-2 py-0.5 rounded-md bg-[#3B82F6]/10 text-[#3B82F6] text-[0.55rem] font-semibold uppercase tracking-wide">+{project.tech.length - 2}</span>
               )}
            </div>
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#3B82F6] group-hover:text-white transition-all">
               <FiChevronRight size={14} />
            </div>
         </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="projects" className="section-shell scroll-mt-24 relative bg-[#0B0F14]">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col gap-8"
        >
          <motion.div variants={itemVariants} className="max-w-2xl">
            <span className="section-tag">Portfolio</span>
            <h2 className="heading-section text-white mb-2">
              Featured{' '}
              <span className="gradient-text">projects</span>
            </h2>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed max-w-lg">
              Enterprise mobile work, open-source builds, and AI-assisted products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {projects.map((proj) => (
              <ProjectCard
                key={proj.id}
                project={proj}
                onClick={() => setSelected(proj)}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
