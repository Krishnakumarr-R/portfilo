"use client";

import { CheckCircleIcon, ArrowUpRightIcon } from "@/components/icons";
import GrainImage from "@/assets/images/grain.jpg";
import { motion } from "framer-motion";

const portfolioProjects = [
  {
    company: "React.js, Node.js, MongoDB, Tailwind CSS",
    year: "2024",
    title: "Full-Stack E-Commerce Platform",
    results: [
      { title: "Engineered full-stack e-commerce app with secure JWT authentication and RESTful APIs" },
      { title: "Product, cart, and order management with MongoDB for data persistence" },
      { title: "Built responsive mobile-first UI using React.js and Tailwind CSS" },
    ],
    link: "https://github.com/Krishnakumarr-R/mern-ecommerce.git",
  },
  {
    company: "React.js, Node.js, Socket.IO, MongoDB",
    year: "2024",
    title: "Real-Time Chat Application",
    results: [
      { title: "Architected real-time messaging platform using WebSocket via Socket.IO" },
      { title: "Instant bidirectional communication with zero page refresh" },
      { title: "Implemented JWT auth, password hashing, and indexed MongoDB queries" },
    ],
    link: "https://github.com/Krishnakumarr-R/fullstack-chat-app.git",
  },
  {
    company: "Next.js, Vercel AI SDK, Google Gemini API",
    year: "2026",
    title: "RAG Chatbot Application",
    results: [
      { title: "Built RAG chatbot using Google Gemini API for context-aware responses" },
      { title: "Custom knowledge bases with vector embeddings and similarity search" },
      { title: "Real-time query processing with efficient semantic document retrieval" },
    ],
    link: "https://github.com/Krishnakumarr-R/rag-chatbot",
  },
  {
    company: "Docker, GitHub Actions, AWS, Nginx",
    year: "2026",
    title: "MEAN Stack DevOps Pipeline",
    results: [
      { title: "Implemented CI/CD pipeline using GitHub Actions for automated deployment" },
      { title: "Multi-stage Docker images with Nginx reverse proxy on AWS EC2" },
      { title: "Reduced deployment time by 70% through containerization" },
    ],
    link: "https://github.com/Krishnakumarr-R/mean-app-devops",
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16" id="projects">
      <div className="container">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Real-World Results
          </p>
        </motion.div>
        <motion.h2
          className="font-serif text-3xl mt-6 text-center md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          See how I transformed concepts into engaging digital experiences
        </motion.p>
        <div className="flex flex-col mt-10 gap-12">
          {portfolioProjects.map((project, index) => (
            <motion.div
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden 
                          after:z-10 after:content-[''] after:absolute 
                          after:inset-0 after:outline after:-outline-offset-2 
                          after:rounded-3xl after:outline-white/20 px-8 pt-8 pb-8 after:pointer-events-none
                          lg:pt-16 lg:px-20 lg:pb-16"
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="absolute inset-0 -z-10 opacity-5" style={{
                backgroundImage: `url(${GrainImage.src})`
              }}>
              </div>
              <div className="lg:pb-0">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold tracking-widest uppercase text-sm text-transparent bg-clip-text text-center">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="font-serif mt-2 text-2xl md:text-4xl">{project.title}</h3>
                <hr className="border-t-2 border-white/10 mt-4" />
                <ul className="flex flex-col mt-4 md:mt-6">
                  {project.results.map((result) => (
                    <li key={result.title} className="flex gap-2 text-white/50 text-sm mt-2 md:text-base">
                      <CheckCircleIcon className="size-5" />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-white text-gray-900 h-12 w-full md:w-auto px-6 rounded-2xl font-semibold inline-flex items-center justify-center gap-2 mt-8 hover:bg-white/90 transition-colors duration-300">
                    <span>View on GitHub</span>
                    <ArrowUpRightIcon className="size-5" />
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
