import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCheck } from 'react-icons/fi';
import { processSteps } from '../../data/portfolioData';
import { usePrefersReducedMotion } from '../../lib/hooks';
import { track } from '../../lib/analytics';

const AUTO_ADVANCE_MS = 4500;

// Interactive "How I Work" stepper (WAI-ARIA tabs pattern).
// Click, hover or use ←/→/Home/End to pick a step. While it's on screen it
// auto-advances; any interaction pauses it. No auto-play for reduced motion.
export default function ProcessStepper() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = usePrefersReducedMotion();
  const [viewRef, inView] = useInView({ threshold: 0.4 });
  const tabRefs = useRef([]);

  const autoPlay = inView && !paused && !reduceMotion;

  useEffect(() => {
    if (!autoPlay) return undefined;
    const id = setTimeout(() => setActive((i) => (i + 1) % processSteps.length), AUTO_ADVANCE_MS);
    return () => clearTimeout(id);
  }, [autoPlay, active]);

  // Ref, not state: hover and click fire in the same render, and both would
  // otherwise see the old `active` and log the step twice.
  const lastTracked = useRef(0);
  const select = (i, focus = false) => {
    if (i !== lastTracked.current) {
      lastTracked.current = i;
      track('process-step', { step: processSteps[i].title });
    }
    setActive(i);
    setPaused(true);
    if (focus) tabRefs.current[i]?.focus();
  };

  const onKeyDown = (e) => {
    const last = processSteps.length - 1;
    const next = { ArrowRight: active + 1, ArrowDown: active + 1, ArrowLeft: active - 1, ArrowUp: active - 1, Home: 0, End: last }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    select((next + processSteps.length) % processSteps.length, true);
  };

  const step = processSteps[active];
  const progress = active / (processSteps.length - 1);

  return (
    <div ref={viewRef} className="surface-card p-5 md:p-6 rounded-2xl" onMouseLeave={() => setPaused(false)}>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">How I work</h3>
        <span className="text-xs font-semibold text-slate-400 tabular-nums" aria-hidden="true">
          {String(active + 1).padStart(2, '0')} / {String(processSteps.length).padStart(2, '0')}
        </span>
      </div>

      <div className="relative">
        {/* track + animated fill behind the step markers (desktop) */}
        {/* spans first → last marker centre: 3 columns + 3 gaps (md:gap-4 = 16px) */}
        <div className="hidden md:block absolute top-[18px] left-[18px] h-0.5 bg-white/10 rounded-full" style={{ width: 'calc(75% + 12px)' }} aria-hidden="true">
          <motion.div
            className="h-full origin-left rounded-full bg-gradient-to-r from-[#3B82F6] to-[#22d3ee]"
            initial={false}
            animate={{ scaleX: progress }}
            transition={{ type: 'spring', stiffness: 120, damping: 22 }}
          />
        </div>
        {/* vertical track (mobile) */}
        <div className="md:hidden absolute top-[18px] bottom-[18px] left-[17px] w-0.5 bg-white/10 rounded-full" aria-hidden="true">
          <motion.div
            className="w-full origin-top rounded-full bg-gradient-to-b from-[#3B82F6] to-[#22d3ee] h-full"
            initial={false}
            animate={{ scaleY: progress }}
            transition={{ type: 'spring', stiffness: 120, damping: 22 }}
          />
        </div>

        <div
          role="tablist"
          aria-label="How I work"
          aria-orientation="horizontal"
          onKeyDown={onKeyDown}
          className="relative grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4"
        >
          {processSteps.map((s, i) => {
            const isActive = i === active;
            const isDone = i < active;
            return (
              <button
                key={s.title}
                ref={(el) => { tabRefs.current[i] = el; }}
                type="button"
                role="tab"
                id={`process-tab-${i}`}
                aria-selected={isActive}
                aria-controls="process-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => select(i)}
                onMouseEnter={() => select(i)}
                className="group flex md:flex-col items-center md:items-start gap-3 text-left rounded-xl p-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3B82F6]"
              >
                <span className="relative w-9 h-9 shrink-0">
                  {isActive && !reduceMotion && (
                    <span className="absolute inset-0 rounded-full bg-[#3B82F6]/40 animate-ping" aria-hidden="true" />
                  )}
                  <span
                    className={`relative w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border transition-all duration-300 ${
                      isActive
                        ? 'bg-[#3B82F6] border-[#60a5fa] text-white scale-110 shadow-[0_0_24px_rgba(59,130,246,0.55)]'
                        : isDone
                          ? 'bg-[#13233d] border-[#3B82F6]/60 text-[#93c5fd]'
                          : 'bg-[#121820] border-white/15 text-slate-300 group-hover:border-[#3B82F6]/50'
                    }`}
                  >
                    {isDone ? <FiCheck aria-hidden="true" /> : i + 1}
                  </span>
                </span>
                <span
                  className={`text-sm font-semibold transition-colors ${
                    isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                  }`}
                >
                  {s.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div
        id="process-panel"
        role="tabpanel"
        aria-labelledby={`process-tab-${active}`}
        className="relative mt-5 rounded-xl bg-white/[0.02] border border-white/5 p-4 md:p-5 min-h-[9.5rem] md:min-h-[7.5rem] overflow-hidden"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-[1.3fr_1fr] gap-4"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#60a5fa] mb-1.5">
                Step {active + 1}: {step.title}
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">{step.desc}</p>
            </div>
            <ul className="flex flex-col gap-1.5">
              {step.points.map((p) => (
                <li key={p} className="flex items-center gap-2 text-xs text-slate-300">
                  <FiCheck className="text-[#22d3ee] shrink-0" aria-hidden="true" /> {p}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        {/* auto-advance timer bar */}
        {autoPlay && (
          <motion.span
            key={`timer-${active}`}
            className="absolute left-0 bottom-0 h-0.5 w-full origin-left bg-[#3B82F6]/60"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: 'linear' }}
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
}
