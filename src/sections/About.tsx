"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C++", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend Development",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "Socket.IO", "WebSockets"],
  },
  {
    title: "Database & Cloud",
    skills: ["MongoDB", "MySQL", "Query Optimization", "AWS", "Nginx"],
  },
  {
    title: "DevOps & AI/ML",
    skills: ["GitHub Actions", "CI/CD", "Docker", "Vercel AI SDK", "Vector DBs", "RAG"],
  },
  {
    title: "Tools & Concepts",
    skills: ["Git", "GitHub", "VS Code", "Postman", "DSA", "OOP", "Agile"],
  },
];

export const AboutSection = () => {
  return (
    <section className="py-20 lg:py-28" id="about">
      <div className="container">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            About Me
          </p>
        </motion.div>
        <motion.h2
          className="font-serif text-3xl mt-6 text-center md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          A Glimpse Into My World
        </motion.h2>
        <motion.p
          className="text-center text-white/60 mt-4 md:text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Learn more about who I am, my educational background, and what drives
          me as a developer.
        </motion.p>

        <div className="mt-16 flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
          {/* Education Card */}
          <motion.div
            className="bg-gray-800 rounded-3xl p-8 relative overflow-hidden outline outline-2 outline-offset-2 outline-white/20 h-[320px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col flex-1">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-2xl">🎓</span>
                <h3 className="font-serif text-2xl">Education</h3>
              </div>
              <p className="text-emerald-300 font-semibold mb-2">
                B.E. in Electronics and Communication Engineering
              </p>
              <p className="text-white/80">
                Theni Kammavar Sangam College of Technology
              </p>
              <p className="text-white/50 text-sm mt-1">
                2021 &ndash; 2025 | CGPA: 7.7/10
              </p>
            </div>
          </motion.div>

          {/* Skills Card - spans 2 cols on lg */}
          <motion.div
            className="bg-gray-800 rounded-3xl p-8 relative overflow-hidden outline outline-2 outline-offset-2 outline-white/20 md:col-span-2 lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-2xl">🛠️</span>
              <h3 className="font-serif text-2xl">My Toolbox</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillCategories.map((category, idx) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
                  viewport={{ once: true }}
                >
                  <p className="text-emerald-300/80 text-xs font-semibold uppercase tracking-wider mb-2">
                    {category.title}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-white/10 px-2.5 py-1 rounded-lg text-xs text-white/80 hover:bg-white/20 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Card */}
          <motion.div
            className="bg-gray-800 rounded-3xl p-8 relative overflow-hidden outline outline-2 outline-offset-2 outline-white/20 md:col-span-2 lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-2xl">🏆</span>
              <h3 className="font-serif text-2xl">
                Certifications & Achievements
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-emerald-300 font-semibold text-sm mb-1">
                  LeetCode
                </p>
                <p className="text-white/70 text-sm">
                  Solved 200+ DSA problems (Arrays, Trees, Graphs, Dynamic
                  Programming)
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-emerald-300 font-semibold text-sm mb-1">
                  Industry Certifications
                </p>
                <p className="text-white/70 text-sm">
                  Python for Data Science (IBM) • Operating Systems (Google) •
                  Technical Support (Google)
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-emerald-300 font-semibold text-sm mb-1">
                  Internship
                </p>
                <p className="text-white/70 text-sm">
                  EMGLITZ Technologies — IoT-based environmental monitoring with
                  sensor integration
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
