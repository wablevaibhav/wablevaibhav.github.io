import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "../../data/portfolioData";
import { FiGithub, FiExternalLink, FiX, FiChevronRight } from "react-icons/fi";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-[#030712]/95 backdrop-blur-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[3.5rem] bg-[#0d111c] border border-white/10 shadow-[0_32px_64px_rgba(0,0,0,0.8)] scrollbar-hide"
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 40 }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Branding */}
        <div className="p-12 md:p-20 flex flex-col md:flex-row items-center gap-10 text-white relative overflow-hidden" 
             style={{ background: `linear-gradient(135deg, ${project.color}33, #0d111c)` }}>
          <div className="text-7xl md:text-9xl p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl relative z-10">
            {project.emoji}
          </div>
          <div className="text-center md:text-left relative z-10">
            <span className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-blue-400 mb-4 block">
              {project.category}
            </span>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-6">
              {project.title}
            </h2>
            <div className={`inline-block px-4 py-1.5 rounded-full text-[0.6rem] font-black uppercase tracking-widest border border-white/10 bg-white/5`}>
              {project.status}
            </div>
          </div>
          <button
            className="absolute top-10 right-10 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10 z-20"
            onClick={onClose}
          >
            <FiX size={24} />
          </button>
          
          {/* Abstract background shape */}
          <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full blur-[120px] opacity-20" style={{ background: project.color }} />
        </div>

        <div className="p-12 md:p-20 space-y-16 bg-[#0d111c]">
          <div className="max-w-3xl">
             <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-600 mb-8">Executive Summary</h4>
             <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium">
               {project.longDescription || project.description}
             </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-600">Deep Dive features</h4>
              <ul className="grid grid-cols-1 gap-4">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-slate-300 group hover:border-blue-500/30 transition-colors">
                    <FiChevronRight className="mt-1 shrink-0 text-blue-500" />
                    <span className="font-bold text-sm leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-600">Architecture & Stack</h4>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/5 text-slate-400 text-xs font-black uppercase tracking-widest"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {(project.links?.github || project.links?.live) && (
            <div className="flex flex-wrap gap-6 pt-16 border-t border-white/5">
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <FiGithub size={20} /> Repository
                </a>
              )}
              {project.links.live && project.links.live !== "#" && (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <FiExternalLink size={20} /> Launch Live Site
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
      className="group relative h-[600px] rounded-[3.5rem] overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[#0d111c] transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent z-10" />
      
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" 
           style={{ background: `radial-gradient(circle at center, ${project.color}11 0%, transparent 70%)` }} />

      {/* Main Content */}
      <div className="relative z-20 h-full p-10 md:p-14 flex flex-col justify-end">
         <div className="mb-6 transform transition-transform duration-500 group-hover:-translate-y-4">
            <span className="text-7xl mb-8 block drop-shadow-2xl">{project.emoji}</span>
            <span className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-blue-400/80 mb-4 block">{project.category}</span>
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none mb-4 group-hover:text-blue-400 transition-colors uppercase">{project.title}</h3>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed line-clamp-2 max-w-sm font-medium transition-colors group-hover:text-slate-300">{project.description}</p>
         </div>

         <div className="flex items-center justify-between pt-8 border-t border-white/5 mt-auto">
            <div className="flex gap-2">
               {project.tech.slice(0, 2).map(t => (
                 <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[0.6rem] font-black text-slate-500 uppercase tracking-widest">{t}</span>
               ))}
               <span className="px-3 py-1 rounded-lg bg-blue-500/10 text-blue-400 text-[0.6rem] font-black uppercase tracking-widest">+{project.tech.length - 2}</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-500">
               <FiChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
    <section id="projects" className="py-32 scroll-mt-32 relative bg-[#030712]">
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
            <span className="section-tag">Portfolio</span>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-none">
              Featured Lab <br/>
              <span className="gradient-text">Installations</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl font-medium">
              From enterprise mobile deployments to AI-driven predictive systems — 
              a selection of projects that define my engineering range.
            </p>
          </motion.div>

          {/* Grid with vertical emphasis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
