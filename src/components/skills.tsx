"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"

const skillItems = [
  { title: "Languages", skills: "C, C++, Python, Java, JavaScript, TypeScript, SQL" },
  { title: "Frontend", skills: "React.js, Next.js, Tailwind CSS, SWR" },
  { title: "Backend", skills: "Node.js, Express, Supabase, REST API" },
  { title: "Databases", skills: "PostgreSQL, MongoDB" },
  { title: "Web Foundations", skills: "HTML, CSS, Axios" },
  { title: "DevOps & Tools", skills: "Git, Linux, Docker, Postman" },
  { title: "Data Engineering", skills: "Pandas, Seaborn, Hadoop, PySpark", spanClass: "md:col-span-2" },
  { title: "Analytics", skills: "Power BI, Tableau", spanClass: "md:col-span-1" },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#ccd6f6] font-mono">
              {/* <span className="text-cyan">04.</span> */}
               My Toolkit
            </h2>
            <div className="h-px bg-[#233554] flex-grow" />
          </div>

          <BentoGrid>
            {skillItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                className={item.spanClass}
              >
                <BentoGridItem title={item.title} description={item.skills} />
              </motion.div>
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  )
}
