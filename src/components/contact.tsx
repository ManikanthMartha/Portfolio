"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" ref={ref} className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-cyan font-mono text-xs sm:text-sm mb-4"
          >
             What&apos;s Next?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-4 sm:mb-6"
          >
            Get In Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-12 max-w-lg mx-auto px-4"
          >
            I&apos;m currently looking for new opportunities and my inbox is always open. Whether you have a question,
            want to collaborate on a project, or just want to say hi, I&apos;ll try my best to get back to you!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-cyan text-cyan hover:bg-cyan/10 font-mono px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base group bg-transparent"
              asChild
            >
              <a href="mailto:srimanikanthmartha@gmail.com">
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce" />
                Say Hello
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
