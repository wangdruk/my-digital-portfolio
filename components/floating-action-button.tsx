"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, Mail, ArrowUp, X, Phone, Calendar } from "lucide-react"
import Link from "next/link"

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const actions = [
    {
      icon: Mail,
      label: "Email Me",
      href: "mailto:contact@phuntshok.com",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: Calendar,
      label: "Book a Call",
      href: "/contact",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: Phone,
      label: "Quick Chat",
      href: "tel:+1234567890",
      color: "bg-purple-500 hover:bg-purple-600"
    }
  ]

  return (
    <>
      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-50 p-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-full shadow-lg transition-colors"
          >
            <ArrowUp className="h-5 w-5 text-white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating action button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Action menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm"
              />

              {/* Actions */}
              <div className="absolute bottom-16 right-0 flex flex-col-reverse gap-3">
                {actions.map((action, index) => (
                  <motion.div
                    key={action.label}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.8 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="px-3 py-1.5 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap shadow-lg">
                      {action.label}
                    </span>
                    <Link href={action.href}>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 ${action.color} rounded-full shadow-lg text-white`}
                      >
                        <action.icon className="h-5 w-5" />
                      </motion.button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </AnimatePresence>

        {/* Main FAB */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`p-4 rounded-full shadow-lg transition-all ${
            isOpen
              ? "bg-gray-700 text-white"
              : "bg-primary text-white hover:bg-primary/90"
          }`}
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MessageCircle className="h-6 w-6" />
            )}
          </motion.div>
        </motion.button>
      </div>
    </>
  )
}
