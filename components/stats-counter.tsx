"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, Award, Briefcase, Users } from "lucide-react"

const stats = [
  {
    icon: Briefcase,
    value: 7,
    suffix: "+",
    label: "Years Experience",
    description: "In cybersecurity industry"
  },
  {
    icon: Shield,
    value: 50,
    suffix: "+",
    label: "Security Audits",
    description: "Completed successfully"
  },
  {
    icon: Award,
    value: 5,
    suffix: "",
    label: "Certifications",
    description: "Industry recognized"
  },
  {
    icon: Users,
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Based on reviews"
  }
]

function AnimatedCounter({ value, suffix, delay }: { value: number; suffix: string; delay: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const stepValue = value / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += stepValue
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

export function StatsCounter() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Track Record of <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Numbers that reflect my commitment to delivering exceptional cybersecurity solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center group-hover:border-primary/50 transition-colors">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors"
                >
                  <stat.icon className="h-8 w-8 text-primary" />
                </motion.div>

                {/* Counter */}
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} delay={index * 0.2} />
                </div>

                {/* Label */}
                <div className="text-lg font-medium text-white mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary group-hover:w-1/2 transition-all duration-300 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
