"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO, TechSecure Inc",
    avatar: "/testimonials/sarah.jpg",
    rating: 5,
    content: "Exceptional penetration testing services. Found critical vulnerabilities our internal team missed and provided clear remediation guidance. Highly professional throughout the engagement."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Security Director, FinanceFlow",
    avatar: "/testimonials/michael.jpg",
    rating: 5,
    content: "Outstanding security audit work. The comprehensive report helped us achieve SOC 2 compliance ahead of schedule. Would definitely recommend for any compliance-related security work."
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "VP Engineering, HealthData Corp",
    avatar: "/testimonials/emma.jpg",
    rating: 5,
    content: "Transformed our security posture completely. From vulnerability assessments to implementing security controls, the guidance was invaluable. A true expert in the field."
  },
  {
    id: 4,
    name: "David Martinez",
    role: "CEO, StartupX",
    avatar: "/testimonials/david.jpg",
    rating: 5,
    content: "As a startup, we needed affordable yet thorough security testing. Delivered exactly that - found issues, explained risks in business terms, and helped us fix everything. Amazing value."
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "IT Manager, RetailPro",
    avatar: "/testimonials/lisa.jpg",
    rating: 5,
    content: "The incident response during our ransomware attack was incredible. Quick action, clear communication, and full recovery. Cannot thank enough for the rapid support."
  }
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prev) => {
      let next = prev + newDirection
      if (next < 0) next = testimonials.length - 1
      if (next >= testimonials.length) next = 0
      return next
    })
  }

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What <span className="text-primary">Clients</span> Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Trusted by organizations across industries to secure their digital assets
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial card */}
          <div className="relative overflow-hidden min-h-[300px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-12"
              >
                {/* Quote icon */}
                <Quote className="h-12 w-12 text-primary/30 mb-6" />

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <Avatar className="h-14 w-14 border-2 border-primary/30">
                    <AvatarImage src={testimonials[currentIndex].avatar} />
                    <AvatarFallback className="bg-primary/20 text-primary">
                      {testimonials[currentIndex].name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-white">{testimonials[currentIndex].name}</div>
                    <div className="text-sm text-gray-400">{testimonials[currentIndex].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(-1)}
              className="rounded-full border-gray-600 hover:bg-gray-800 hover:border-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-6 bg-primary"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(1)}
              className="rounded-full border-gray-600 hover:bg-gray-800 hover:border-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
