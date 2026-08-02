import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { dualPath, personalInfo } from "../../data/portfolioData";
import TiltCard from "./TiltCard";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const connectorVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

function TrackCard({ track }) {
  return (
    <TiltCard className="h-full">
      <article
        className="glass-card h-full rounded-[2.5rem] p-8 md:p-10 flex flex-col gap-6 relative overflow-hidden"
        style={{
          boxShadow: `0 24px 60px -20px ${track.accent}33`,
        }}
      >
        <div
          className="absolute -top-20 -right-20 w-56 h-56 rounded-full blur-[80px] opacity-30 pointer-events-none"
          style={{ background: track.accent }}
        />
        <div className="relative z-10 flex flex-col gap-6 h-full">
          <div>
            <span
              className="text-[0.65rem] font-black uppercase tracking-[0.3em] mb-3 block"
              style={{ color: track.accent }}
            >
              {track.eyebrow}
            </span>
            <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              {track.title}
            </h3>
            <p className="text-slate-400 font-bold mt-2">{track.subtitle}</p>
            <p className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-slate-600 mt-3">
              {track.period}
            </p>
          </div>
          <p className="text-slate-400 leading-relaxed text-sm">
            {track.summary}
          </p>
          <ul className="space-y-3 flex-grow">
            {track.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm text-slate-400">
                <span
                  className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: track.accent }}
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {track.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-[0.65rem] font-black uppercase tracking-widest text-slate-500"
              >
                {t}
              </span>
            ))}
          </div>
          {track.cta && (
            <a
              href={track.cta.href}
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white hover:opacity-80 transition-opacity"
              onClick={(e) => {
                if (track.cta.href.startsWith("#")) {
                  e.preventDefault();
                  document
                    .querySelector(track.cta.href)
                    ?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {track.cta.label} →
            </a>
          )}
          {track.id === "freelance" && (
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.65rem] font-black uppercase tracking-widest text-slate-500 hover:text-blue-400 transition-colors"
            >
              Connect on LinkedIn ↗
            </a>
          )}
        </div>
      </article>
    </TiltCard>
  );
}

export default function DualPath() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="dual-path"
      className="py-32 scroll-mt-32 relative bg-[#030712] overflow-hidden"
    >
      <div className="absolute top-1/3 right-0 w-[480px] h-[480px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col gap-16"
        >
          <motion.div variants={headerVariants} className="max-w-4xl">
            <span className="section-tag">Two Tracks</span>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-none">
              Building on <span className="gradient-text">two tracks</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
              Full-time engineering at CentraLogic, side by side with freelance
              delivery for clients who need mobile and web shipped end to end.
            </p>
          </motion.div>

          {/* Single connector rendered once: [panel][AND][panel] on desktop,
              [panel] / AND / [panel] stacked on mobile — no `contents` hack. */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-4 items-stretch">
            <motion.div variants={cardVariants}>
              <TrackCard track={dualPath.fullTime} />
            </motion.div>

            <motion.div
              variants={connectorVariants}
              className="flex items-center justify-center py-2 lg:py-0 px-2"
            >
              <span className="text-[0.65rem] font-black uppercase tracking-[0.35em] text-slate-600">
                And
              </span>
            </motion.div>

            <motion.div variants={cardVariants}>
              <TrackCard track={dualPath.freelance} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
