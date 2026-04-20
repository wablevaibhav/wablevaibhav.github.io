import { personalInfo } from '../../data/portfolioData';
import { FiHeart, FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#030712] border-t border-white/5 pt-32 pb-12 relative overflow-hidden">
      {/* Footer Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          {/* Brand Col */}
          <div className="md:col-span-5">
            <div className="text-3xl font-black text-white mb-8 flex items-center gap-2 tracking-tighter">
              <span className="gradient-text">&lt;</span>
              <span>VW</span>
              <span className="gradient-text">/&gt;</span>
            </div>
            <p className="text-slate-500 text-lg leading-relaxed max-w-sm font-medium">
              Architecting high-performance systems and cinematic digital experiences 
              with a focus on mobile engineering and AI orchestration.
            </p>
          </div>

          {/* Nav Col */}
          <div className="md:col-span-3">
             <h4 className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-white mb-10 opacity-40">System Map</h4>
             <div className="grid grid-cols-1 gap-4">
                {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map(l => (
                  <button
                    key={l}
                    onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-slate-600 text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-blue-400 hover:translate-x-2 text-left w-fit"
                  >
                    {l}
                  </button>
                ))}
             </div>
          </div>

          {/* Social Col */}
          <div className="md:col-span-4">
             <h4 className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-white mb-10 opacity-40">Digital Channels</h4>
             <div className="flex flex-wrap gap-4">
                {[
                  { href: personalInfo.github, icon: <FiGithub />, color: 'white' },
                  { href: personalInfo.linkedin, icon: <FiLinkedin />, color: '#60a5fa' },
                  { href: personalInfo.instagram, icon: <FiInstagram />, color: '#f472b6' },
                  { href: `mailto:${personalInfo.email}`, icon: <FiMail />, color: '#fb923c' },
                ].map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-xl text-slate-500 hover:bg-white/5 hover:scale-110 transition-all duration-500"
                    style={{ color: s.color }}
                  >
                    {s.icon}
                  </a>
                ))}
             </div>
          </div>
        </div>

        {/* Cinematic Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-slate-700">
             © {year} Vaibhav Wable <span className="mx-4 text-white/5">|</span> All Systems Operational
           </div>

           <div className="flex items-center gap-3 px-6 py-2 rounded-full bg-white/[0.02] border border-white/5 text-[0.6rem] font-black uppercase tracking-[0.2em] text-slate-500">
             Developed with <FiHeart className="text-blue-500/40 animate-pulse" /> in Pune
           </div>

           <div className="flex gap-4 text-[0.6rem] font-black uppercase tracking-[0.3em] text-slate-700">
             <span>Flutter</span>
             <span className="text-white/5">•</span>
             <span>Node.js</span>
             <span className="text-white/5">•</span>
             <span>AI Engineering</span>
           </div>
        </div>
      </div>
    </footer>
  );
}
