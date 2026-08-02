import { personalInfo } from '../../data/portfolioData';
import { FiHeart, FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0B0F14] border-t border-white/5 pt-12 pb-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          <div className="md:col-span-5">
            <div className="font-display text-base font-bold text-white mb-3 flex items-center gap-1 tracking-tight">
              <span className="gradient-text">&lt;</span>
              <span>VW</span>
              <span className="gradient-text">/&gt;</span>
            </div>
            <p className="text-[var(--color-muted)] text-xs leading-relaxed max-w-sm">
              Cross-platform apps, clean architecture, and AI-assisted delivery — CentraLogic + freelance.
            </p>
          </div>

          <div className="md:col-span-3">
             <h4 className="text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-slate-500 mb-3">Navigate</h4>
             <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map(l => (
                  <button
                    key={l}
                    onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-slate-500 text-[0.7rem] font-semibold transition-colors hover:text-[#3B82F6] text-left"
                  >
                    {l}
                  </button>
                ))}
             </div>
          </div>

          <div className="md:col-span-4">
             <h4 className="text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-slate-500 mb-3">Connect</h4>
             <div className="flex flex-wrap gap-2">
                {[
                  { href: personalInfo.github, icon: <FiGithub /> },
                  { href: personalInfo.linkedin, icon: <FiLinkedin /> },
                  { href: personalInfo.instagram, icon: <FiInstagram /> },
                  { href: `mailto:${personalInfo.email}`, icon: <FiMail /> },
                ].map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/8 flex items-center justify-center text-sm text-slate-400 hover:text-[#3B82F6] hover:border-[#3B82F6]/30 transition-all"
                  >
                    {s.icon}
                  </a>
                ))}
             </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-slate-600">
           <div>© {year} Vaibhav Wable</div>
           <div className="flex items-center gap-1.5 normal-case tracking-normal text-slate-500">
             Built with <FiHeart className="text-[#3B82F6]/50" size={11} /> in Pune
           </div>
        </div>
      </div>
    </footer>
  );
}
