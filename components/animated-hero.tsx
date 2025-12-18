"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { motion } from "framer-motion"
import { Shield, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const titles = [
  "Cybersecurity Professional",
  "Penetration Tester",
  "Security Consultant",
  "Digital Guardian",
]

interface ParticleData {
  x: number
  y: number
  animateY: number
  duration: number
}

export function AnimatedHero() {
  const [currentTitle, setCurrentTitle] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  
  // Generate particle data once using useMemo with stable seed
  const particlesRef = useRef<ParticleData[] | null>(null)
  
  const particles = useMemo(() => {
    if (particlesRef.current) return particlesRef.current
    
    const generated: ParticleData[] = []
    for (let i = 0; i < 50; i++) {
      generated.push({
        x: (i * 37 + 13) % 100, // Deterministic pseudo-random
        y: (i * 53 + 29) % 100,
        animateY: -((i * 41 + 17) % 50) * 10,
        duration: 10 + (i % 10),
      })
    }
    particlesRef.current = generated
    return generated
  }, [])

  useEffect(() => {
    const title = titles[currentTitle]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < title.length) {
          setDisplayText(title.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentTitle((prev) => (prev + 1) % titles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTitle])

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight - 100, behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, particle.animateY],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center space-y-8"
        >
          {/* Animated Shield Logo */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-150" />
            <div className="relative bg-gradient-to-br from-primary to-indigo-600 p-6 rounded-2xl">
              <Shield className="h-16 w-16 text-white" />
            </div>
          </motion.div>

          {/* Main heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Phuntshok
              </span>
            </motion.h1>

            {/* Typing animation */}
            <div className="h-12 flex items-center justify-center">
              <span className="text-xl md:text-2xl lg:text-3xl text-gray-300">
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-0.5 h-8 bg-primary ml-1"
                />
              </span>
            </div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-2xl text-gray-400 text-lg md:text-xl"
          >
            Protecting digital assets and building secure systems. 
            Specializing in penetration testing, security audits, and incident response.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/projects">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                View My Work
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-white/10 px-8">
                Get In Touch
              </Button>
            </Link>
          </motion.div>

          {/* Stats preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="grid grid-cols-3 gap-8 pt-8"
          >
            {[
              { value: "7+", label: "Years Experience" },
              { value: "50+", label: "Projects Completed" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, y: { duration: 1.5, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-primary transition-colors"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.button>
    </section>
  )
}
