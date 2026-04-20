import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { personalInfo } from "../../data/portfolioData";
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiSend } from "react-icons/fi";

const socialLinks = [
  { href: personalInfo.linkedin, icon: <FiLinkedin />, label: "LinkedIn" },
  { href: personalInfo.github, icon: <FiGithub />, label: "GitHub" },
  { href: personalInfo.instagram, icon: <FiInstagram />, label: "Instagram" },
  { href: `mailto:${personalInfo.email}`, icon: <FiMail />, label: "Email" },
];

const taglineSequence = personalInfo.taglines.flatMap((t) => [t, 2000]).flat();

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animId;
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
      }
      draw() {
        ctx.fillStyle = `rgba(96, 165, 250, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < 80; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#030712] pt-48 pb-32">
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

      {/* Modern Background Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        {/* Top Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-8 flex items-center gap-3"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[0.6rem] font-black uppercase tracking-[0.25em] text-white/60">Available for Opportunities</span>
        </motion.div>

        {/* Hello Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-blue-400 font-mono text-xs tracking-[0.5em] uppercase mb-6"
        >
          Hello World, I'm
        </motion.p>

        {/* Main Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8"
        >
          Vaibhav <span className="gradient-text">Wable</span>
        </motion.h1>

        {/* Dynamic Tagline */}
        <div className="h-10 md:h-12 mb-10">
          <TypeAnimation
            sequence={taglineSequence}
            wrapper="h2"
            speed={50}
            className="text-lg md:text-3xl font-bold text-slate-400 tracking-tight"
            repeat={Infinity}
          />
        </div>

        {/* Integrated Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl text-base md:text-lg text-slate-500 leading-relaxed mb-12"
        >
          Software Engineer specializing in <span className="text-white font-bold">Flutter, Node.js, and AI Architecture</span>. 
          Leading mobile engineering efforts at <span className="text-blue-400 underline decoration-blue-400/20 underline-offset-8">CentraLogic</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-6 mb-20"
        >
          <button className="btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            <FiSend /> Let's Talk
          </button>
          <a
            href="https://drive.google.com/file/d/1g-ByJOlQpbyOyXkfXDYkHIjTGjKdpfc3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View Resume ↗
          </a>
        </motion.div>

        {/* Social Links Badge */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.8 }}
           className="flex items-center gap-3 p-2 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm"
        >
          {socialLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/5 hover:text-blue-400 transition-all text-slate-500"
            >
              {item.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Hero Stats Card - Repositioned for no overlap */}
      <div className="absolute bottom-12 left-0 right-0 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Years Exp.', value: '2+' },
            { label: 'Apps Shipped', value: '10+' },
            { label: 'Tech Stacks', value: '5+' },
            { label: 'Problems Solved', value: '∞' },
          ].map((stat, i) => (
            <div key={i} className="glass-card p-6 rounded-3xl group text-left">
              <h4 className="text-2xl md:text-3xl font-black text-white group-hover:text-blue-400 transition-colors uppercase">{stat.value}</h4>
              <p className="text-[0.6rem] font-bold uppercase tracking-widest text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
