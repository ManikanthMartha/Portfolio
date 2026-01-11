"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-6 text-center">
      {/* Mobile social links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center gap-6 mb-6 md:hidden"
      >
        <a
          href="https://github.com/manikanthmartha"
          className="text-slate hover:text-cyan transition-colors"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href="https://linkedin.com/in/manikanthmartha"
          className="text-slate hover:text-cyan transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://x.com/manikanthmartha"
          className="text-slate hover:text-cyan transition-colors"
          aria-label="Twitter"
        >
          <Twitter size={20} />
        </a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-slate font-mono text-sm hover:text-cyan transition-colors cursor-default"
      >
        Designed & Built by Sri Manikanth Martha
      </motion.p>
    </footer>
  )
}
