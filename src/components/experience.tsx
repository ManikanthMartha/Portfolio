"use client"

import { motion, useInView } from "framer-motion"
import Image, { StaticImageData } from "next/image"
import { useRef } from "react"

import samsung from "../../public/samsung-prism.png"

interface ExperienceItem {
  id: string
  logo: StaticImageData
  company: string
  role: string
  period: string
  description: string[]
}


const experiences: ExperienceItem[] = [
  {
    id: "samsung",
    logo: samsung,
    company: "Samsung",
    role: "R&D Intern",
    period: "May 2024 - March 2025",
    description: [
      "Led a team in building an XR video player app with OpenXR SDK and OpenGL, enabling support for multiple codecs and high-resolution playback.",
      "Drove performance optimization and prototyping efforts, gaining hands-on experience in XR systems and immersive media development.",
    ],
  },
  {
    id: "upease",
    logo: samsung,
    company: "UpEase",
    role: "Founding Software Developer",
    period: "May 2023 - Jan 2025",
    description: [
      "Got Selected among the top 20 teams globally for <span className='text-cyan'>Microsoft Imagine Cup Semifinals 2024 </span>",
      "Built and optimized the frontend for an AI-driven Education Management System using Next.js, with reusable UI components and scalable architecture.",
      "Integrated the frontend with FastAPI, ensuring smooth real-time data flow between client and backend services.",
      "Contributed to business development through pitch decks, pricing models, and GTM planning, and supported frontend development for the company website",
    ],
  },
  {
    id: "varise",
    logo: samsung,
    company: "Project V.ARISE",
    role: "Team Manager",
    period: "Jan 2024 - Aug 2025",
    description: [
      "A student-led student project at Manipal Institute of Technology focused on developing AR/VR solutions for real-world problems.",
      "Managed team operations, including project procurement, financial tracking, budgeting, and coordination, ensuring successful project outcomes.",
      "Engaged with various higher officials and VC firms during college events, fostering valuable connections and collaboration opportunities"
    ],
  },
]

const ExperienceCard = ({
  item,
  index,
  isInView,
}: {
  item: ExperienceItem
  index: number
  isInView: boolean
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex gap-4 md:gap-6 relative"
    >
      <div className="absolute left-6 top-15 bottom-0 w-px bg-[#233554]" />
      <div className="shrink-0">
        <div className="w-12 h-12 rounded-full bg-[#0a182f] shadow-lg flex items-center justify-center border-2 border-[#233554]">
          <Image
            src={item.logo}
            alt={`${item.company} logo`}
            height={32}
            width={32}
            className="w-8 h-8 object-contain"
          />
        </div>
      </div>
      <div className="pb-12">
        <p className="text-sm text-[#8892b0] mb-1 font-mono">{item.period}</p>
        <h3 className="text-xl font-bold mb-1 text-[#ccd6f6]">{item.role}</h3>
        <p className="text-[#00ffff] mb-2 font-mono">@ {item.company}</p>
        <ul className="space-y-2.5">
          {item.description.map((desc, idx) => {
            const parts = desc.split(/(<span className='text-cyan'>.*?<\/span>)/g)
            return (
              <li
                key={idx}
                className="flex gap-3 text-[#a8b2d1] text-sm leading-relaxed"
              >
                <span className="text-cyan shrink-0 mt-1">▸</span>
                <span>
                  {parts.map((part, i) => {
                    if (part.startsWith("<span")) {
                      const content = part.replace(
                        /<span className='text-cyan'>(.*?)<\/span>/,
                        "$1"
                      )
                      return (
                        <span key={i} className="text-cyan-300">
                          {content}
                        </span>
                      )
                    }
                    return part
                  })}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </motion.div>
  )
}

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" ref={ref} className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#ccd6f6] whitespace-nowrap font-mono">
              Where I&apos;ve Worked
            </h2>
            <div className="h-px bg-[#233554] w-full" />
          </div>

          <div className="max-w-3xl">
            {experiences.map((item, index) => (
              <ExperienceCard
                key={index}
                item={item}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
