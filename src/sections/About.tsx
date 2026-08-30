"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import memojiSmile from "@/assets/images/memoji-smile.png";

// react-icons
import {
  SiCplusplus, SiPython, SiJavascript, SiTypescript, SiMysql,
  SiReact, SiNextdotjs, SiHtml5, SiCss, SiTailwindcss,
  SiNodedotjs, SiExpress, SiJsonwebtokens, SiSocketdotio,
  SiMongodb, SiNginx,
  SiGithubactions, SiDocker, SiVercel,
  SiGit, SiGithub, SiPostman,
} from "react-icons/si";
import { FaJava, FaDatabase, FaCloud, FaRobot, FaServer, FaAws } from "react-icons/fa";
import { VscTerminalBash, VscCode } from "react-icons/vsc";
import { IconType } from "react-icons";

type Skill = { name: string; Icon: IconType };
type SkillCategory = {
  title: string;
  emoji: string;
  color: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    emoji: "💻",
    color: "from-violet-400 to-purple-600",
    skills: [
      { name: "C++", Icon: SiCplusplus },
      { name: "Java", Icon: FaJava },
      { name: "Python", Icon: SiPython },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "SQL", Icon: SiMysql },
    ],
  },
  {
    title: "Frontend",
    emoji: "🎨",
    color: "from-emerald-400 to-teal-600",
    skills: [
      { name: "React.js", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "HTML5", Icon: SiHtml5 },
      { name: "CSS3", Icon: SiCss },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    emoji: "⚙️",
    color: "from-sky-400 to-blue-600",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express.js", Icon: SiExpress },
      { name: "REST APIs", Icon: FaServer },
      { name: "JWT Auth", Icon: SiJsonwebtokens },
      { name: "Socket.IO", Icon: SiSocketdotio },
    ],
  },
  {
    title: "Database & Cloud",
    emoji: "☁️",
    color: "from-amber-400 to-orange-600",
    skills: [
      { name: "MongoDB", Icon: SiMongodb },
      { name: "MySQL", Icon: SiMysql },
      { name: "AWS", Icon: FaAws },
      { name: "Nginx", Icon: SiNginx },
      { name: "Cloud", Icon: FaCloud },
    ],
  },
  {
    title: "DevOps & AI/ML",
    emoji: "🚀",
    color: "from-rose-400 to-pink-600",
    skills: [
      { name: "GitHub Actions", Icon: SiGithubactions },
      { name: "Docker", Icon: SiDocker },
      { name: "Vercel AI SDK", Icon: SiVercel },
      { name: "Vector DBs", Icon: FaDatabase },
      { name: "RAG / AI", Icon: FaRobot },
    ],
  },
  {
    title: "Tools",
    emoji: "🛠️",
    color: "from-cyan-400 to-sky-600",
    skills: [
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "VS Code", Icon: VscCode },
      { name: "Postman", Icon: SiPostman },
      { name: "Terminal", Icon: VscTerminalBash },
    ],
  },
];

const timeline = [
  {
    year: "2021",
    label: "Started Engineering",
    desc: "Enrolled in B.E. Electronics & Communication at TKS College of Technology.",
    icon: "🎓",
  },
  {
    year: "2024",
    label: "Full-Stack Projects",
    desc: "Built E-Commerce platform & Real-Time Chat App using MERN stack.",
    icon: "🛠️",
  },
  {
    year: "2025 (Feb)",
    label: "Internship",
    desc: "EMGLITZ Technologies — IoT-based environmental monitoring with sensor integration.",
    icon: "💼",
  },
  {
    year: "2025 (May)",
    label: "Graduated 🎉",
    desc: "Graduated with CGPA 7.7/10 — Ready for full-time software development.",
    icon: "🏆",
  },
  {
    year: "2026",
    label: "RAG & DevOps",
    desc: "Built RAG Chatbot using Gemini API & deployed CI/CD pipelines on AWS EC2.",
    icon: "🤖",
  },
];

const achievements = [
  { icon: "🧠", value: "200+", desc: "DSA Problems" },
  { icon: "📜", value: "IBM", desc: "Data Science Cert" },
  { icon: "📜", value: "Google", desc: "OS & Tech Support" },
  { icon: "🌐", value: "4+", desc: "Live Projects" },
];

const WaveDivider = ({ flip = false }: { flip?: boolean }) => (
  <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}>
    <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 md:h-20">
      <path
        d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z"
        fill="rgba(16,185,129,0.06)"
      />
      <path
        d="M0,55 C200,20 400,75 600,50 C800,25 1000,70 1200,45 C1300,32 1380,60 1440,50 L1440,80 L0,80 Z"
        fill="rgba(56,189,248,0.04)"
      />
    </svg>
  </div>
);

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const waveY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-28 overflow-hidden" id="about">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <motion.div
          className="absolute top-10 -left-40 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 -right-40 w-[600px] h-[400px] rounded-full bg-sky-500/5 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <WaveDivider />

      <div className="container relative">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text mb-4">
            About Me
          </p>
          <h2 className="font-serif text-4xl md:text-6xl mb-6">A Glimpse Into My World</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer passionate about crafting beautiful, performant web experiences — from elegant UIs to scalable backend systems.
          </p>
        </motion.div>

        {/* Bio + Memoji */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-3xl md:text-4xl mb-5">
              Hey, I&apos;m{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                Krishna Kumar
              </span>
            </h3>
            <p className="text-white/70 leading-relaxed mb-5 text-lg">
              I&apos;m a Full Stack Developer specializing in the MERN stack with a strong passion for DevOps and AI/ML integration. I love turning complex problems into clean, efficient solutions.
            </p>
            <p className="text-white/60 leading-relaxed mb-6">
              When I&apos;m not coding, I&apos;m exploring competitive programming challenges on LeetCode, experimenting with new technologies, or contributing to open-source projects.
            </p>
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 to-sky-500/10 border border-emerald-500/20 rounded-2xl px-5 py-3">
              <span className="text-2xl">🎓</span>
              <div>
                <p className="text-emerald-300 font-semibold text-sm">B.E. Electronics & Communication</p>
                <p className="text-white/50 text-xs">TKS College of Technology • CGPA: 7.7 • 2021–2025</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 blur-2xl opacity-20"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-emerald-500/20 to-sky-500/20 border border-white/10 flex items-center justify-center overflow-hidden">
                <Image src={memojiSmile} alt="Krishna Kumar" className="w-36 h-36 object-contain" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {achievements.map((a, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-800/60 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, borderColor: "rgba(52,211,153,0.4)" }}
                >
                  <div className="text-xl mb-1">{a.icon}</div>
                  <p className="text-emerald-300 font-bold text-lg leading-none">{a.value}</p>
                  <p className="text-white/50 text-xs mt-1">{a.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Parallax wave separator */}
        <motion.div style={{ y: waveY }} className="mb-20 pointer-events-none select-none">
          <svg viewBox="0 0 1200 60" xmlns="http://www.w3.org/2000/svg" className="w-full opacity-30">
            <path d="M0,30 C150,60 300,0 450,30 C600,60 750,0 900,30 C1050,60 1150,15 1200,30" fill="none" stroke="url(#waveGrad)" strokeWidth="2" />
            <defs>
              <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Skills with icons */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <h3 className="font-serif text-3xl md:text-4xl mb-3">My Toolbox</h3>
            <p className="text-white/50">Technologies I work with every day</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((cat, catIdx) => (
              <motion.div
                key={cat.title}
                className="group relative bg-gray-800/50 border border-white/10 rounded-3xl p-6 overflow-hidden backdrop-blur-sm hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIdx * 0.07 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`} />

                <div className="flex items-center gap-2 mb-5">
                  <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-sm`}>
                    {cat.emoji}
                  </div>
                  <h4 className={`font-semibold text-sm uppercase tracking-wider bg-gradient-to-r ${cat.color} text-transparent bg-clip-text`}>
                    {cat.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(({ name, Icon }, skillIdx) => (
                    <motion.div
                      key={name}
                      className="flex items-center gap-1.5 bg-white/8 border border-white/10 px-3 py-1.5 rounded-xl text-xs text-white/75 hover:bg-white/15 hover:text-white transition-all duration-200 cursor-default group/skill"
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: catIdx * 0.07 + skillIdx * 0.04 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Icon className="text-sm opacity-70 group-hover/skill:opacity-100 transition-opacity" />
                      <span>{name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl md:text-4xl mb-3">My Journey</h3>
            <p className="text-white/50">The path that shaped who I am</p>
          </div>

          <div className="relative">
            {/* Vertical gradient line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400/50 via-sky-400/30 to-transparent" />

            <div className="flex flex-col gap-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  className={`relative flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} md:gap-0`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-12 md:pl-0`}>
                    <div className={`inline-block bg-gray-800/60 border border-white/10 rounded-2xl p-5 backdrop-blur-sm hover:border-emerald-500/30 transition-colors duration-300 max-w-sm ${i % 2 !== 0 ? "md:ml-0" : "md:ml-auto"}`}>
                      <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                        <span className="text-xl">{item.icon}</span>
                        <span className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text font-bold text-sm">{item.year}</span>
                      </div>
                      <h4 className="font-semibold text-white mb-1">{item.label}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-sky-400 flex items-center justify-center text-sm shadow-lg shadow-emerald-500/30 z-10">
                    {item.icon}
                  </div>

                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Wave Banner */}
        <motion.div
          className="mt-24 relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/40 via-sky-900/30 to-emerald-900/40" />
          <div className="absolute inset-0 border border-emerald-500/20 rounded-3xl" />
          <div className="absolute inset-0 overflow-hidden opacity-20">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute w-full"
                style={{ top: `${30 + i * 20}%` }}
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "linear", delay: i * 1.5 }}
              >
                <svg viewBox="0 0 800 30" className="w-full h-8">
                  <path d="M0,15 C100,0 200,30 300,15 C400,0 500,30 600,15 C700,0 800,30 800,15" fill="none" stroke="url(#cta-wave)" strokeWidth="1.5" />
                  <defs>
                    <linearGradient id={`cta-wave-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#34d399" />
                      <stop offset="100%" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            ))}
          </div>
          <div className="relative text-center py-14 px-6">
            <p className="text-emerald-300/80 text-sm font-semibold uppercase tracking-widest mb-3">Ready to collaborate?</p>
            <h3 className="font-serif text-3xl md:text-4xl mb-4">Let&apos;s Build Something Great</h3>
            <p className="text-white/60 mb-8 max-w-md mx-auto">Whether it&apos;s a full-stack web app, an AI integration, or a DevOps pipeline — I&apos;m ready.</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-sky-400 text-gray-900 px-8 py-3 rounded-2xl font-bold hover:opacity-90 transition-opacity duration-300 shadow-lg shadow-emerald-500/20"
            >
              Get In Touch <span>→</span>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="mt-10">
        <WaveDivider flip />
      </div>
    </section>
  );
};
