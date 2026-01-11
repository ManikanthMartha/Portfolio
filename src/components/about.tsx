"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const technologies = [
    "Python",
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "SQL",
    "Machine Learning",
  ]

  return (
    <section id="about" ref={ref} className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#ccd6f6] whitespace-nowrap">
              <span className="text-cyan font-mono text-lg sm:text-xl md:text-2xl mr-2">01.</span>
              About Me
            </h2>
            <div className="h-px bg-[#233554] flex-grow max-w-[200px] sm:max-w-xs" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-2 space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-slate leading-relaxed text-sm sm:text-base"
              >
                Hello! I&apos;m Manikanth, a passionate developer and data science enthusiast currently pursuing my
                degree in <span className="text-cyan">Data Science and Engineering</span> at Manipal Institute of
                Technology. My journey in tech started with a curiosity about how things work on the internet, which
                quickly evolved into a deep interest in web development and data-driven solutions.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-slate leading-relaxed text-sm sm:text-base"
              >
                I enjoy creating things that live on the internet, whether that be websites, applications, or anything
                in between. My goal is to always build products that provide pixel-perfect, performant experiences while
                solving real-world problems using data.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-slate leading-relaxed text-sm sm:text-base"
              >
                Beyond academics, I&apos;ve gained valuable experience in leadership and project management through
                various student clubs and committees. I&apos;m always excited to take on new challenges and work on
                innovative projects.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-slate leading-relaxed text-sm sm:text-base"
              >
                Here are a few technologies I&apos;ve been working with recently:
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="grid grid-cols-2 gap-2 mt-4"
              >
                {technologies.map((tech) => (
                  <li key={tech} className="text-slate text-xs sm:text-sm font-mono flex items-center gap-2">
                    <span className="text-cyan">▹</span>
                    {tech}
                  </li>
                ))}
              </motion.ul>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative group mt-8 md:mt-0"
            >
              <div className="relative w-full max-w-[220px] sm:max-w-[280px] mx-auto">
                {/* Image placeholder with gradient border */}
                <div className="relative z-10 rounded-md overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-[#00ffff]/20 to-[#47817F]/20 flex items-center justify-center">
                    <span className="text-5xl sm:text-6xl">👨‍💻</span>
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#00ffff]/10 group-hover:bg-transparent transition-all duration-300" />
                </div>
                {/* Border decoration */}
                <div className="absolute top-4 left-4 w-full h-full border-2 border-cyan rounded-md -z-10 group-hover:top-2 group-hover:left-2 transition-all duration-300" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
