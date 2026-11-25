import { personalInfo } from '../../data/portfolioData';
import { NAV_LINKS } from '../Navbar/navLinks';
import { FiHeart, FiGithub, FiLinkedin, FiMail, FiInstagram, FiYoutube, FiEdit3 } from 'react-icons/fi';

const socials = [
  { href: personalInfo.github, icon: <FiGithub />, label: 'GitHub' },
  { href: personalInfo.linkedin, icon: <FiLinkedin />, label: 'LinkedIn' },
  { href: personalInfo.instagram, icon: <FiInstagram />, label: 'Instagram' },
  { href: personalInfo.youtube, icon: <FiYoutube />, label: 'YouTube' },
  { href: personalInfo.blog, icon: <FiEdit3 />, label: 'Blog' },
  { href: `mailto:${personalInfo.email}`, icon: <FiMail />, label: 'Email' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0B0F14] border-t border-white/5 pt-12 pb-24 md:pb-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          <div className="md:col-span-5">
            <div className="font-display text-base font-bold text-white mb-3 flex items-center gap-1 tracking-tight" aria-hidden="true">
              <span className="gradient-text">&lt;</span>
              <span>VW</span>
              <span className="gradient-text">/&gt;</span>
            </div>
            <p className="text-[var(--color-muted)] text-xs leading-relaxed max-w-sm">
              Mobile &amp; full-stack engineer: Flutter, React Native, Next.js, Node.js, with LLM features. CentraLogic + freelance.
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-3">Navigate</h2>
            <ul className="grid grid-cols-2 gap-x-4">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="inline-block py-1.5 text-slate-400 text-xs font-semibold transition-colors hover:text-[#60a5fa]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-3">Connect</h2>
            <ul className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-sm text-slate-300 hover:text-[#60a5fa] hover:border-[#3B82F6]/40 transition-all"
                  >
                    <span aria-hidden="true">{s.icon}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
          <div>© {year} Vaibhav Wable</div>
          <div className="flex items-center gap-1.5 normal-case tracking-normal">
            Built with <FiHeart className="text-[#60a5fa]" size={11} aria-hidden="true" /><span className="sr-only">love</span> in Pune
          </div>
        </div>
      </div>
    </footer>
  );
}
