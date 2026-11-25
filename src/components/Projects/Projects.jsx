import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "../../data/portfolioData";
import { FiGithub, FiExternalLink, FiX, FiChevronRight, FiList } from "react-icons/fi";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// Screenshot if present, otherwise the gradient + emoji fallback.
function ProjectVisual({ project, className = "" }) {
  const [failed, setFailed] = useState(false);
  const showImage = project.image && !failed;

  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center ${className}`}
      style={{ background: project.gradient }}
    >
      {showImage ? (
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          width={1200}
          height={750}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <span className="text-4xl transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6" aria-hidden="true">
          {project.emoji}
        </span>
      )}
    </div>
  );
}

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const nodes = dialogRef.current.querySelectorAll(FOCUSABLE);
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [onClose]);

  const titleId = `project-${project.id}-title`;
  const repos = project.links?.repos ?? [];
  const { listing, live } = project.links ?? {};

  return (
    <motion.div
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-[#0B0F14]/92 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
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
          <div className="text-2xl p-3 rounded-xl bg-white/5 border border-white/10 shrink-0" aria-hidden="true">
            {project.emoji}
          </div>
          <div className="min-w-0 flex-1 pr-8">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#3B82F6] mb-1.5 block">
              {project.category}
            </span>
            <h2 id={titleId} className="heading-card text-white mb-2">{project.title}</h2>
            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide border border-white/10 bg-white/5">
              {project.status}
            </span>
          </div>
          <button
            ref={closeRef}
            type="button"
            aria-label="Close project details"
            className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10"
            onClick={onClose}
          >
            <FiX size={16} aria-hidden="true" />
          </button>
        </div>

        <div className="p-5 md:p-6 space-y-6">
          {project.image && (
            <ProjectVisual project={project} className="rounded-xl aspect-[16/10]" />
          )}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 mb-2">Summary</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 mb-2">Features</h3>
              <ul className="space-y-1.5">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-slate-400 text-xs leading-relaxed">
                    <FiChevronRight className="mt-0.5 shrink-0 text-[#3B82F6]" size={12} aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 mb-2">Stack</h3>
              <ul className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-slate-400 text-xs font-semibold uppercase tracking-wide"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {(repos.length > 0 || live || listing) && (
            <div className="flex flex-wrap gap-2.5 pt-4 border-t border-white/5">
              {repos.map((r) => (
                <a key={r.url} href={r.url} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <FiGithub size={14} aria-hidden="true" /> {r.label}
                </a>
              ))}
              {listing && (
                <a href={listing.url} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <FiList size={14} aria-hidden="true" /> {listing.label}
                </a>
              )}
              {live && (
                <a href={live} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <FiExternalLink size={14} aria-hidden="true" /> Live site
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function TechChips({ tech, max = 2 }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tech.slice(0, max).map((t) => (
        <span key={t} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-xs font-semibold text-slate-400 uppercase tracking-wide">{t}</span>
      ))}
      {tech.length > max && (
        <span className="px-2 py-0.5 rounded-md bg-[#3B82F6]/10 text-[#3B82F6] text-xs font-semibold uppercase tracking-wide">+{tech.length - max}</span>
      )}
    </div>
  );
}

function ProjectCard({ project, onOpen }) {
  const featured = Boolean(project.featured);

  return (
    <motion.li variants={itemVariants} className="flex">
      <button
        type="button"
        onClick={onOpen}
        aria-haspopup="dialog"
        className={`group relative surface-card spotlight lift rounded-2xl overflow-hidden w-full text-left flex flex-col focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B82F6] ${
          featured ? "min-h-[340px]" : "min-h-[200px]"
        }`}
      >
        {featured ? (
          <ProjectVisual project={project} className="h-36 md:h-40 border-b border-white/5" />
        ) : (
          <div
            className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none"
            style={{ background: `radial-gradient(circle at 80% 0%, ${project.color}33 0%, transparent 55%)` }}
          />
        )}

        <div className="relative z-10 p-4 md:p-5 flex flex-col flex-1 w-full">
          <div className="mb-3">
            {!featured && <span className="text-2xl mb-2.5 block" aria-hidden="true">{project.emoji}</span>}
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#60a5fa] mb-1.5 block">{project.category}</span>
            <h3 className={`text-white mb-1.5 group-hover:text-[#3B82F6] transition-colors ${featured ? "heading-feature" : "heading-card"}`}>
              {project.title}
            </h3>
            <p className={`text-slate-400 text-xs leading-relaxed ${featured ? "line-clamp-3" : "line-clamp-2"}`}>{project.description}</p>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-auto">
            <TechChips tech={project.tech} max={featured ? 3 : 2} />
            <span className="w-8 h-8 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#3B82F6] transition-all" aria-hidden="true">
              <FiChevronRight size={14} />
            </span>
          </div>
        </div>
      </button>
    </motion.li>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const close = useCallback(() => setSelected(null), []);

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
              AI developer tooling, Flutter apps with LLM features, and full-stack builds.
            </p>
          </motion.div>

          <motion.ul variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {featured.map((proj) => (
              <ProjectCard key={proj.id} project={proj} onOpen={() => setSelected(proj)} />
            ))}
          </motion.ul>

          {others.length > 0 && (
            <motion.ul variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {others.map((proj) => (
                <ProjectCard key={proj.id} project={proj} onOpen={() => setSelected(proj)} />
              ))}
            </motion.ul>
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={close} />}
      </AnimatePresence>
    </section>
  );
}
