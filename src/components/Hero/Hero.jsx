import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { personalInfo } from "../../data/portfolioData";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMail,
  FiSend,
} from "react-icons/fi";

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
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
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
        if (
          this.x < 0 ||
          this.x > canvas.width ||
          this.y < 0 ||
          this.y > canvas.height
        )
          this.reset();
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
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0B0F14] pt-28 md:pt-32 pb-16"
    >
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />

      {/* Modern Background Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        {/* Top Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-5 flex items-center gap-2.5"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/60">
            {personalInfo.availability || "Open to freelance & contract work"}
          </span>
        </motion.div>

        {/* Hello Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[#2EE6D6] font-mono text-[0.7rem] tracking-[0.28em] uppercase mb-3"
        >
          Hello World, I'm
        </motion.p>

        {/* Main Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="heading-hero text-white mb-5"
        >
          Vaibhav <span className="gradient-text">Wable</span>
        </motion.h1>

        {/* Dynamic Tagline */}
        <div className="h-8 md:h-9 mb-6">
          <TypeAnimation
            sequence={taglineSequence}
            wrapper="h2"
            speed={50}
            className="text-sm md:text-lg font-medium text-[var(--color-muted)] tracking-tight"
            repeat={Infinity}
          />
        </div>

        {/* Integrated Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-xl text-sm md:text-base text-[var(--color-muted)] leading-relaxed mb-8"
        >
          Software Engineer at{" "}
          <span className="text-[#2EE6D6] underline decoration-[#2EE6D6]/25 underline-offset-4">
            CentraLogic
          </span>
          , and available for freelance{" "}
          <span className="text-white font-semibold">
            Flutter, React Native, and web
          </span>{" "}
          delivery.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center gap-4 mb-12"
        >
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              className="btn-primary"
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <FiSend /> Let's Talk
            </button>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              View Resume ↗
            </a>
          </div>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-slate-500 hover:text-blue-400 transition-colors"
          >
            Connect on LinkedIn ↗
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
    </section>
  );
}
