"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"

const socials = [
  { icon: Github, href: "https://github.com/manikanthmartha", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/manikanthmartha", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/manikanthmartha", label: "Twitter" },
]

export function SocialSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed left-4 lg:left-8 bottom-0 hidden lg:flex flex-col items-center gap-6 z-40"
    >
      {socials.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
          className="text-slate hover:text-cyan hover:-translate-y-1 transition-all duration-300"
          aria-label={social.label}
        >
          <social.icon size={20} />
        </motion.a>
      ))}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 120 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        className="w-px bg-slate"
      />
    </motion.div>
  )
}

export function EmailSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed right-4 lg:right-8 bottom-0 hidden lg:flex flex-col items-center gap-6 z-40"
    >
      <motion.a
        href="mailto:srimanikanthmartha@gmail.com"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="text-slate hover:text-cyan transition-colors duration-300 text-xs tracking-widest"
        style={{ writingMode: "vertical-rl" }}
      >
        srimanikanthmartha@gmail.com
      </motion.a>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 120 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="w-px bg-slate"
      />
    </motion.div>
  )
}
