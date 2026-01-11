"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, ExternalLink } from "lucide-react"
import { CometCard } from "@/components/ui/comet-card"

const otherProjects = [
  {
    title: "RepoPulse",
    description:
      "A distributed GitHub monitoring Telegram bot that streams high-signal repo events using a Node.js + PostgreSQL pipeline.",
    tech: ["Node.js", "TypeScript", "Telegram Bot API", "PostgreSQL"],
    github: "https://github.com/manikanthmartha/RepoPulse",
    live: "#",
    image: "/dark-portfolio-website.png",
  },
  {
    title: "Project Kaksha",
    description:
      "A LMS that integrates NLP services, TTS pipelines, and accessibility tooling into a unified Next.js + Flask system for interactive learning.",
    tech: ["Next.js", "TypeScript", "Python", "Flask", "FAST API", "Supabase", "PostgreSQL"],
    github: "https://github.com/manikanthmartha/Project-Kaksha",
    live: "#",
    image: "/dark-portfolio-website.png",
  },
  {
    title: "HospitalOps",
    description:
      "A modular hospital operations platform built with a clean UI and a robust TypeScript API layer designed for scalable integration.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    github: "https://github.com/manikanthmartha/HMS",
    live: "#",
    image: "/task-management-system.png",
  },
  
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" ref={ref} className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ccd6f6] whitespace-nowrap font-mono">
              Projects
            </h2>
            <div className="h-px bg-[#233554] grow" />
          </div>

          {/* Other Projects Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.08 * index }}
                >
                  <CometCard rotateDepth={10} translateDepth={10}>
                    <div className="overflow-hidden rounded-lg border border-[#233554] bg-[#112240] hover:border-cyan transition-all duration-300 group h-full flex flex-col hover:shadow-lg hover:shadow-cyan/20">
                      {/* Project Image with hover effect */}
                      <div className="relative overflow-hidden h-48 bg-linear-to-br from-cyan/5 to-transparent">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#112240] via-transparent to-transparent opacity-40" />
                      </div>

                      {/* Project Content */}
                      <div className="p-5 flex flex-col grow">
                        <h3 className="text-base sm:text-lg font-bold text-[#ccd6f6] mb-2 group-hover:text-cyan transition-colors font-mono">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#8892b0] mb-4 grow leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs text-cyan bg-[#0A182F] px-2 py-0.5 rounded border border-cyan/30 font-mono hover:bg-cyan/10 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="flex gap-3 pt-2 border-t border-[#233554]">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#ccd6f6] hover:text-cyan transition-colors flex items-center gap-1"
                            aria-label="GitHub"
                          >
                            <Github size={16} />
                            <span className="font-mono text-xs">Code</span>
                          </a>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#ccd6f6] hover:text-cyan transition-colors flex items-center gap-1"
                            aria-label="Live Demo"
                          >
                            <ExternalLink size={16} />
                            <span className="font-mono text-xs">Live</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </CometCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
