import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education, certifications } from '../../data/portfolioData';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="education" className="py-32 scroll-mt-32 relative bg-[#030712] overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

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
            <span className="section-tag">Learning Journey</span>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-none">
              Academic & <br/>
              <span className="gradient-text">Professional Roots</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Academic Track */}
            <motion.div variants={itemVariants} className="space-y-10">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-500 px-2">Academic Foundation</h3>
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.degree}
                    variants={itemVariants}
                    className="glass-card p-10 rounded-[3rem] group"
                  >
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                       <div className="text-4xl p-6 rounded-2xl bg-white/5 text-blue-400 group-hover:scale-110 group-hover:bg-blue-400 group-hover:text-white transition-all duration-500">
                          {edu.icon}
                       </div>
                       <div className="flex-1">
                          <span className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 block">{edu.year}</span>
                          <h4 className="text-xl md:text-2xl font-black text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight mb-2">{edu.degree}</h4>
                          <p className="text-slate-400 font-bold text-sm tracking-wide">{edu.institution}</p>
                          <div className="mt-4 flex items-center gap-2 text-[0.65rem] font-bold text-slate-600 uppercase tracking-widest">
                             <span className="w-1.5 h-1.5 rounded-full bg-blue-500/30" />
                             {edu.location}
                          </div>
                       </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications Track */}
            <motion.div variants={itemVariants} className="space-y-10">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-500 px-2">Professional Validations</h3>
              <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert) => (
                  <motion.div
                    key={cert.title}
                    variants={itemVariants}
                    className="glass-card p-8 rounded-[2.5rem] flex items-center gap-6 group hover:translate-x-3"
                  >
                    <div className="text-2xl p-4 rounded-xl bg-white/5 text-brand-secondary group-hover:scale-110 transition-transform">
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-white tracking-[0.2em] uppercase group-hover:text-brand-secondary transition-colors mb-1">{cert.title}</h4>
                      <p className="text-[0.6rem] text-slate-500 font-black uppercase tracking-widest">{cert.issuer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quote Accent */}
              <motion.div variants={itemVariants} className="mt-12 p-12 rounded-[3.5rem] bg-gradient-to-br from-indigo-600/20 to-blue-600/20 border border-white/5 relative overflow-hidden group">
                 <p className="text-xl md:text-2xl text-slate-300 italic font-medium leading-relaxed mb-6">
                   "Continuous learning is the bedrock of engineering excellence. Every certificate represents a deep dive into logic."
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="h-0.5 w-12 bg-blue-500/40" />
                    <span className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-white">System Creed</span>
                 </div>
                 {/* Visual spark */}
                 <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
