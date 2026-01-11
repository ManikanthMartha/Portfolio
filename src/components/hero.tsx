"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { EncryptedText } from "@/components/ui/encrypted-text"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 pt-20 relative"
    >
      <div className="w-full max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-cyan font-mono text-sm md:text-base mb-4"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row flex-wrap"
        >
          <EncryptedText
            text="Manikanth Martha"
            className="text-2xl sm:text-4xl md:text-4xl lg:text-6xl font-bold mb-6"
            revealedClassName="text-[#ccd6f6]"
            encryptedClassName="text-[#ccd6f6]"
            revealDelayMs={70}
          />
          <EncryptedText
            text="I build software that builds itself (sometimes)"
            className="text-xl sm:text-xl md:text-xl lg:text-3xl font-semibold   mb-4"
            revealedClassName="text-[#47817F]"
            encryptedClassName="text-[#47817F]"
            revealDelayMs={70}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-slate text-sm sm:text-base md:text-lg max-w-3xl mb-12 leading-relaxed"
        >
          Software developer who teaches machines to do the boring parts for us. I break down complex problems, sprinkle in some AI, and ship tools that feel weirdly smart for their size.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col sm:flex-row flex-wrap gap-4"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-cyan text-cyan hover:bg-cyan/10 hover:text-white font-mono px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base w-full sm:w-auto bg-transparent"
            asChild
          >
            <a href="#projects">View My Work</a>
          </Button>
          <Button
            size="lg"
            className="bg-[#00ffff] text-[#0A182F] hover:bg-[#00ffff]/80 font-mono px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base w-full sm:w-auto"
            asChild
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="text-cyan"
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}
