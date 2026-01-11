"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { SocialSidebar, EmailSidebar } from "@/components/sidebar"
import { ParticleBackground, GradientOrbs } from "@/components/background"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <ParticleBackground />
      <GradientOrbs />

      <Navbar />
      <SocialSidebar />
      <EmailSidebar />

      <div className="relative z-10">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>

      <Footer />
    </main>
  )
}
