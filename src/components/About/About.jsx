import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../../data/portfolioData';
import {
  FiMapPin, FiMail, FiLinkedin, FiGithub,
  FiZap, FiLayers, FiCpu, FiExternalLink
} from 'react-icons/fi';

const traits = [
  {
    icon: <FiZap />,
    title: 'Architecture-First',
    desc: 'I design systems before writing code—ensuring scalability and maintainability from day one.',
    color: '#60a5fa',
  },
  {
    icon: <FiLayers />,
    title: 'Full-Stack Thinking',
    desc: 'Connecting every layer: from fluid Flutter UIs to optimized Node.js APIs and PostgreSQL schemas.',
    color: '#818cf8',
  },
  {
    icon: <FiCpu />,
    title: 'AI-First Mindset',
    desc: 'Pioneering AI-agent orchestration for next-gen mobile experiences.',
    color: '#2dd4bf',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="py-32 scroll-mt-32 relative bg-[#030712] overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col gap-20"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="max-w-4xl">
            <span className="section-tag">About Me</span>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[1.1]">
              Crafting Digital Experiences with <br/>
              <span className="gradient-text">Engineering Precision</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Bio Column */}
            <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col gap-8">
              <div className="glass-card p-10 md:p-14 rounded-[3rem]">
                <div className="space-y-8 text-slate-400 text-lg md:text-xl leading-relaxed">
                  <p>
                    I'm a Software Engineer with <span className="text-white font-bold">2+ years of experience</span> architecting 
                    high-performance mobile and backend systems. Currently at <span className="text-blue-400 font-bold">CentraLogic</span>, 
                    I lead Flutter development for production-grade Android & iOS applications.
                  </p>
                  <p>
                    My philosophy is rooted in <span className="text-white font-bold italic underline decoration-blue-500/30 underline-offset-8">Architecture-First Design</span>. 
                    I believe in deep problem decomposition before a single line of code is written. 
                    Beyond mobile, I'm building AI-driven backends with <span className="text-white font-bold">Node.js</span> and 
                    orchestrating <span className="text-brand-secondary font-bold">AI Agents</span> to redefine mobile interaction.
                  </p>
                </div>

                {/* Contact Pills */}
                <div className="flex flex-wrap gap-4 mt-12 pt-10 border-t border-white/5">
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" 
                     className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                    <FiLinkedin className="text-blue-400" /> LinkedIn <FiExternalLink />
                  </a>
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                    <FiGithub className="text-white" /> GitHub <FiExternalLink />
                  </a>
                  <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-500/5 border border-blue-500/20 text-xs font-bold text-blue-400">
                    <FiMapPin /> {personalInfo.location}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Traits Column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {traits.map((trait, i) => (
                <motion.div
                  key={trait.title}
                  variants={itemVariants}
                  className="glass-card p-8 rounded-[2.5rem] flex gap-8 items-start group"
                >
                  <div className="text-2xl p-5 rounded-2xl bg-white/5 text-blue-400 group-hover:scale-110 group-hover:bg-blue-400 group-hover:text-white transition-all duration-500">
                    {trait.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors uppercase">{trait.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{trait.desc}</p>
                  </div>
                </motion.div>
              ))}

              {/* Stats Card */}
              <motion.div variants={itemVariants} className="mt-4 p-10 rounded-[3rem] bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/30 flex justify-around items-center">
                 <div className="text-center">
                    <span className="block text-4xl font-black text-white mb-1 tracking-tighter">2+</span>
                    <span className="text-[0.6rem] font-black uppercase tracking-widest text-blue-400/60">Years Exp.</span>
                 </div>
                 <div className="w-px h-12 bg-white/5" />
                 <div className="text-center">
                    <span className="block text-4xl font-black text-white mb-1 tracking-tighter">10+</span>
                    <span className="text-[0.6rem] font-black uppercase tracking-widest text-blue-400/60">Shipped</span>
                 </div>
                 <div className="w-px h-12 bg-white/5" />
                 <div className="text-center">
                    <span className="block text-4xl font-black text-white mb-1 tracking-tighter">M.Sc.</span>
                    <span className="text-[0.6rem] font-black uppercase tracking-widest text-blue-400/60">CS Graduate</span>
                 </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
