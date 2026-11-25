import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo, WEB3FORMS_ACCESS_KEY } from '../../data/portfolioData';
import {
  FiMail, FiLinkedin, FiGithub, FiInstagram, FiYoutube, FiEdit3,
  FiMapPin, FiSend, FiCheck, FiArrowUpRight, FiAlertCircle, FiLoader, FiCalendar,
} from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';

const socialCards = [
  { icon: <FiLinkedin />, label: 'LinkedIn', href: personalInfo.linkedin, color: '#60a5fa', desc: 'linkedin.com/in/vaibhavwable' },
  { icon: <FiGithub />, label: 'GitHub', href: personalInfo.github, color: '#E8EEF4', desc: 'github.com/wablevaibhav' },
  { icon: <FiInstagram />, label: 'Instagram', href: personalInfo.instagram, color: '#cbd5e1', desc: '@wablevaibhav06' },
  { icon: <FiYoutube />, label: 'YouTube', href: personalInfo.youtube, color: '#f87171', desc: '@codewithwable' },
  { icon: <FiEdit3 />, label: 'Blog', href: personalInfo.blog, color: '#fb923c', desc: 'codewithwable.blogspot.com' },
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
  'w-full bg-white/[0.03] border border-white/10 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#3B82F6]/60 focus:ring-2 focus:ring-[#3B82F6]/25 transition-all text-sm';
const labelClass = 'text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 px-0.5';

const EMPTY = { name: '', email: '', subject: '', message: '' };

function buildMailto(form) {
  return `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(
    `Hi Vaibhav,\n\nMy name is ${form.name}.\n\n${form.message}\n\nBest,\n${form.name}\n${form.email}`,
  )}`;
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [botcheck, setBotcheck] = useState(false);
  // idle | sending | success | error
  const [status, setStatus] = useState('idle');
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (botcheck) return; // honeypot ticked → silently drop (bots only)

    // No access key yet → fall back to the visitor's email app.
    if (!WEB3FORMS_ACCESS_KEY) {
      window.location.href = buildMailto(form);
      setStatus('success');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: 'Portfolio contact form',
          subject: form.subject || `Portfolio inquiry from ${form.name}`,
          name: form.name,
          email: form.email,
          message: form.message,
          botcheck: false,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === false) throw new Error(data.message || 'Request failed');
      setStatus('success');
      setForm(EMPTY);
    } catch {
      setStatus('error');
    }
  };

  const sending = status === 'sending';

  return (
    <section id="contact" className="section-shell scroll-mt-24 relative bg-[#0B0F14] overflow-hidden">
      <div className="absolute -bottom-16 -right-16 w-[280px] h-[280px] glow-blob pointer-events-none" />

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
              Open to full-time roles and freelance work: Flutter, React Native, Next.js, Node.js and LLM features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <motion.div variants={itemVariants} className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="surface-card p-5 rounded-2xl flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className={labelClass}>Name</label>
                    <input id="contact-name" type="text" name="name" autoComplete="name" value={form.name} onChange={handleChange} placeholder="Your name" required className={inputClass} />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className={labelClass}>Email</label>
                    <input id="contact-email" type="email" name="email" autoComplete="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required className={inputClass} />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className={labelClass}>Subject</label>
                  <input id="contact-subject" type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Project, hire, collab…" className={inputClass} />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className={labelClass}>Message</label>
                  <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} placeholder="Tell me about the work…" rows={4} required className={`${inputClass} resize-none`} />
                </div>

                {/* Honeypot: hidden from people and assistive tech, bots fill it in. */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="contact-botcheck">Leave this empty</label>
                  <input id="contact-botcheck" type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" checked={botcheck} onChange={(e) => setBotcheck(e.target.checked)} />
                </div>

                <button type="submit" className="btn-primary w-full justify-center disabled:opacity-70" disabled={sending}>
                  {sending ? (
                    <><FiLoader size={14} className="animate-spin motion-reduce:animate-none" aria-hidden="true" /> Sending…</>
                  ) : status === 'success' ? (
                    <><FiCheck size={14} aria-hidden="true" /> {WEB3FORMS_ACCESS_KEY ? 'Message sent' : 'Email app opened'}</>
                  ) : (
                    <><FiSend size={14} aria-hidden="true" /> Send message</>
                  )}
                </button>

                <div aria-live="polite" className="text-xs min-h-[1rem]">
                  {status === 'success' && WEB3FORMS_ACCESS_KEY && (
                    <p className="flex items-center gap-1.5 text-emerald-400">
                      <FiCheck aria-hidden="true" /> Thanks! I'll get back to you within a day or two.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="flex items-start gap-1.5 text-rose-300">
                      <FiAlertCircle className="mt-0.5 shrink-0" aria-hidden="true" />
                      <span>
                        Something went wrong sending that.{' '}
                        <a href={buildMailto(form)} className="underline font-semibold text-white">Send it by email instead</a>.
                      </span>
                    </p>
                  )}
                </div>
              </form>
            </motion.div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#4ade80] font-semibold text-sm hover:bg-[#25D366]/20 transition-colors"
                >
                  <SiWhatsapp aria-hidden="true" /> Chat on WhatsApp
                </a>
                {personalInfo.bookingUrl ? (
                  <a
                    href={personalInfo.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#60a5fa] font-semibold text-sm hover:bg-[#3B82F6]/20 transition-colors"
                  >
                    <FiCalendar aria-hidden="true" /> Book a call
                  </a>
                ) : (
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-slate-200 font-semibold text-sm hover:border-[#3B82F6]/40 transition-colors"
                  >
                    <FiMail aria-hidden="true" /> Email me
                  </a>
                )}
              </motion.div>

              <motion.div variants={itemVariants} className="surface-card p-4 rounded-2xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-[#60a5fa] text-base shrink-0" aria-hidden="true">
                  <FiMapPin />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 mb-0.5">Location</h3>
                  <p className="text-sm font-semibold text-white">{personalInfo.location}</p>
                  <p className="text-xs font-semibold text-[#60a5fa] uppercase tracking-wider mt-0.5">Remote-friendly</p>
                </div>
              </motion.div>

              <ul className="flex flex-col gap-3">
                {socialCards.map((card) => (
                  <motion.li key={card.label} variants={itemVariants}>
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="surface-card p-3.5 rounded-2xl flex items-center justify-between group hover:border-[#3B82F6]/40"
                    >
                      <span className="flex items-center gap-3 min-w-0">
                        <span className="text-base p-2.5 rounded-xl bg-white/5" style={{ color: card.color }} aria-hidden="true">
                          {card.icon}
                        </span>
                        <span className="min-w-0">
                          <span className="block text-xs font-semibold uppercase tracking-wide text-slate-400 group-hover:text-[#60a5fa] transition-colors">{card.label}</span>
                          <span className="block text-white font-medium text-xs truncate">{card.desc}</span>
                        </span>
                      </span>
                      <FiArrowUpRight className="text-slate-400 group-hover:text-[#60a5fa] shrink-0" size={16} aria-hidden="true" />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                variants={itemVariants}
                href={`mailto:${personalInfo.email}`}
                className="p-3.5 rounded-2xl bg-white/[0.02] border border-dashed border-white/15 flex items-center justify-center gap-2 text-slate-300 hover:text-white hover:border-[#3B82F6]/40 transition-all text-xs break-all"
              >
                <FiMail size={14} aria-hidden="true" /> {personalInfo.email}
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
