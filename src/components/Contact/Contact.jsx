import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../../data/portfolioData';
import {
  FiMail, FiLinkedin, FiGithub, FiInstagram,
  FiMapPin, FiSend, FiCheck, FiArrowUpRight
} from 'react-icons/fi';

const socialCards = [
  {
    icon: <FiLinkedin />,
    label: 'LinkedIn',
    handle: 'linkedin.com/in/vaibhavwable',
    href: personalInfo.linkedin,
    color: '#60a5fa',
    desc: 'Professional Network',
  },
  {
    icon: <FiGithub />,
    label: 'GitHub',
    handle: 'github.com/wablevaibhav',
    href: personalInfo.github,
    color: '#ffffff',
    desc: 'Source Code',
  },
  {
    icon: <FiInstagram />,
    label: 'Instagram',
    handle: '@_vaibhav.wable',
    href: personalInfo.instagram,
    color: '#f472b6',
    desc: 'Life & Pixels',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(
      `Hi Vaibhav,\n\nMy name is ${form.name}.\n\n${form.message}\n\nBest,\n${form.name}\n${form.email}`
    )}`;
    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-32 scroll-mt-32 relative bg-[#030712] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

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
            <span className="section-tag">Contact Hub</span>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-none">
              Let's Architect <br/>
              <span className="gradient-text">New Possibilities</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl font-medium">
              Have a visionary project in mind or want to discuss the future of AI engineering? 
              Drop a message and let's start the dialogue.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Column */}
            <motion.div variants={itemVariants} className="lg:col-span-7">
               <form onSubmit={handleSubmit} className="glass-card p-10 md:p-14 rounded-[3.5rem] flex flex-col gap-8 shadow-2xl relative overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-4">
                        <label className="text-[0.65rem] font-black uppercase tracking-[0.3em] text-slate-600 px-2">Identity</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your official name"
                          required
                          className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-5 text-white placeholder-slate-700 focus:outline-none focus:border-blue-500/30 transition-all font-bold text-sm"
                        />
                     </div>
                     <div className="space-y-4">
                        <label className="text-[0.65rem] font-black uppercase tracking-[0.3em] text-slate-600 px-2">Electronic Mail</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="Your contact email"
                          required
                          className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-5 text-white placeholder-slate-700 focus:outline-none focus:border-blue-500/30 transition-all font-bold text-sm"
                        />
                     </div>
                  </div>

                  <div className="space-y-4">
                     <label className="text-[0.65rem] font-black uppercase tracking-[0.3em] text-slate-600 px-2">Objective</label>
                     <input
                       type="text"
                       name="subject"
                       value={form.subject}
                       onChange={handleChange}
                       placeholder="Collaboration, Project, Hiring..."
                       className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-5 text-white placeholder-slate-700 focus:outline-none focus:border-blue-500/30 transition-all font-bold text-sm"
                     />
                  </div>

                  <div className="space-y-4">
                     <label className="text-[0.65rem] font-black uppercase tracking-[0.3em] text-slate-600 px-2">Brief / Detailed Message</label>
                     <textarea
                       name="message"
                       value={form.message}
                       onChange={handleChange}
                       placeholder="Describe your vision here..."
                       rows={6}
                       required
                       className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-5 text-white placeholder-slate-700 focus:outline-none focus:border-blue-500/30 transition-all font-bold text-sm resize-none"
                     />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center group py-6 rounded-[2rem]">
                    {submitted ? (
                      <><FiCheck className="text-xl animate-bounce" /> Message Initiated</>
                    ) : (
                      <><FiSend className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Transmit Message</>
                    )}
                  </button>
               </form>
            </motion.div>

            {/* Meta / Links Column */}
            <div className="lg:col-span-5 flex flex-col gap-8">
               {/* Location Card */}
               <motion.div variants={itemVariants} className="glass-card p-10 rounded-[3rem] flex items-center gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-blue-400 text-3xl group-hover:bg-blue-400 group-hover:text-white transition-all duration-500">
                    <FiMapPin />
                  </div>
                  <div>
                    <h3 className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-slate-600 mb-1">Local Coordinates</h3>
                    <p className="text-xl font-bold text-white tracking-tight">{personalInfo.location}</p>
                    <p className="text-[0.6rem] font-bold text-blue-400/60 uppercase tracking-widest mt-1">Available Globally (Remote)</p>
                  </div>
               </motion.div>

               {/* Grid of Social Channels */}
               <div className="grid grid-cols-1 gap-4">
                  {socialCards.map((card) => (
                    <motion.a
                      key={card.label}
                      variants={itemVariants}
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card p-8 rounded-[2.5rem] flex items-center justify-between group hover:border-blue-400/30"
                    >
                       <div className="flex items-center gap-6">
                          <div className="text-3xl p-4 rounded-xl bg-white/5 transition-transform group-hover:scale-110" style={{ color: card.color }}>
                            {card.icon}
                          </div>
                          <div>
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-blue-400 transition-colors uppercase">{card.label}</h4>
                            <p className="text-white font-bold tracking-tight text-sm">{card.desc}</p>
                          </div>
                       </div>
                       <FiArrowUpRight className="text-slate-700 group-hover:text-blue-400 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" size={24} />
                    </motion.a>
                  ))}
               </div>
               
               {/* Quick Link - Direct Mail */}
               <motion.a 
                 variants={itemVariants}
                 href={`mailto:${personalInfo.email}`}
                 className="mt-4 p-8 rounded-[2.5rem] bg-white/[0.02] border border-dashed border-white/10 flex items-center justify-center gap-4 text-slate-500 hover:text-white hover:border-blue-400/20 transition-all font-mono text-sm group"
               >
                 <FiMail className="group-hover:animate-pulse" /> {personalInfo.email}
               </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
