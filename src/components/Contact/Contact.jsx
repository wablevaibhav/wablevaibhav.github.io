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
    color: '#3B82F6',
    desc: 'Professional network',
  },
  {
    icon: <FiGithub />,
    label: 'GitHub',
    handle: 'github.com/wablevaibhav',
    href: personalInfo.github,
    color: '#E8EEF4',
    desc: 'Source code',
  },
  {
    icon: <FiInstagram />,
    label: 'Instagram',
    handle: '@thevaibhavbuilds',
    href: personalInfo.instagram,
    color: '#7A8FA6',
    desc: '@thevaibhavbuilds',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const inputClass =
  'w-full bg-white/[0.03] border border-white/8 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-[#3B82F6]/35 transition-all text-sm';

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
    <section id="contact" className="section-shell scroll-mt-24 relative bg-[#0B0F14] overflow-hidden">
      <div className="absolute -bottom-16 -right-16 w-[280px] h-[280px] bg-[#3B82F6]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col gap-8"
        >
          <motion.div variants={itemVariants} className="max-w-2xl">
            <span className="section-tag">Contact</span>
            <h2 className="heading-section text-white mb-2">
              Let's build{' '}
              <span className="gradient-text">something</span>
            </h2>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed max-w-lg">
              Open to freelance and contract work — Flutter, React Native, web apps, and store delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <motion.div variants={itemVariants} className="lg:col-span-7">
               <form onSubmit={handleSubmit} className="surface-card p-5 rounded-2xl flex flex-col gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                     <div className="space-y-1.5">
                        <label className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-slate-500 px-0.5">Name</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className={inputClass} />
                     </div>
                     <div className="space-y-1.5">
                        <label className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-slate-500 px-0.5">Email</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required className={inputClass} />
                     </div>
                  </div>

                  <div className="space-y-1.5">
                     <label className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-slate-500 px-0.5">Subject</label>
                     <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Project, hire, collab…" className={inputClass} />
                  </div>

                  <div className="space-y-1.5">
                     <label className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-slate-500 px-0.5">Message</label>
                     <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about the work…" rows={4} required className={`${inputClass} resize-none`} />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    {submitted ? (
                      <><FiCheck size={14} /> Message ready</>
                    ) : (
                      <><FiSend size={14} /> Send message</>
                    )}
                  </button>
               </form>
            </motion.div>

            <div className="lg:col-span-5 flex flex-col gap-3">
               <motion.div variants={itemVariants} className="surface-card p-4 rounded-2xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-[#3B82F6] text-base shrink-0">
                    <FiMapPin />
                  </div>
                  <div>
                    <h3 className="text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-slate-500 mb-0.5">Location</h3>
                    <p className="text-sm font-semibold text-white">{personalInfo.location}</p>
                    <p className="text-[0.55rem] font-semibold text-[#3B82F6]/70 uppercase tracking-wider mt-0.5">Remote-friendly</p>
                  </div>
               </motion.div>

               {socialCards.map((card) => (
                 <motion.a
                   key={card.label}
                   variants={itemVariants}
                   href={card.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="surface-card p-3.5 rounded-2xl flex items-center justify-between group hover:border-[#3B82F6]/25"
                 >
                    <div className="flex items-center gap-3">
                       <div className="text-base p-2.5 rounded-xl bg-white/5" style={{ color: card.color }}>
                         {card.icon}
                       </div>
                       <div>
                         <h4 className="text-[0.65rem] font-semibold uppercase tracking-wide text-slate-500 group-hover:text-[#3B82F6] transition-colors">{card.label}</h4>
                         <p className="text-white font-medium text-xs">{card.desc}</p>
                       </div>
                    </div>
                    <FiArrowUpRight className="text-slate-600 group-hover:text-[#3B82F6]" size={16} />
                 </motion.a>
               ))}

               <motion.a
                 variants={itemVariants}
                 href={`mailto:${personalInfo.email}`}
                 className="p-3.5 rounded-2xl bg-white/[0.02] border border-dashed border-white/10 flex items-center justify-center gap-2 text-slate-500 hover:text-white hover:border-[#3B82F6]/25 transition-all text-xs"
               >
                 <FiMail size={14} /> {personalInfo.email}
               </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
