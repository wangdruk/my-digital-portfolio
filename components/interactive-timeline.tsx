"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Calendar, MapPin, Building2 } from "lucide-react"

interface TimelineItem {
  id: number
  year: string
  title: string
  company: string
  location: string
  description: string
  achievements: string[]
  skills: string[]
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "2023 - Present",
    title: "IT Security Specialist",
    company: "Bhutan InfoTech Solutions",
    location: "Melbourne, Australia",
    description: "Providing comprehensive IT security consulting and network infrastructure services for businesses across Australia.",
    achievements: [
      "Implemented enterprise network security solutions for 15+ clients",
      "Reduced security incidents by 80% through proactive monitoring and threat detection",
      "Designed and deployed secure cloud migration strategies for SMB clients"
    ],
    skills: ["Network Security", "Cloud Security", "Security Consulting"]
  },
  {
    id: 2,
    year: "2021 - 2023",
    title: "Network Security Administrator",
    company: "TechSecure Australia",
    location: "Sydney, Australia",
    description: "Managed network security infrastructure and implemented security policies for enterprise clients.",
    achievements: [
      "Deployed Cisco-based network security solutions across multi-site environments",
      "Led security awareness training programs for 500+ employees",
      "Achieved 99.9% uptime for critical security systems"
    ],
    skills: ["Cisco Networking", "Firewall Management", "Security Policies"]
  },
  {
    id: 3,
    year: "2019 - 2021",
    title: "Systems Administrator",
    company: "Government IT Services",
    location: "Thimphu, Bhutan",
    description: "Administered IT infrastructure and implemented security measures for government networks.",
    achievements: [
      "Managed network infrastructure serving 200+ users across multiple departments",
      "Implemented backup and disaster recovery solutions",
      "Obtained Cisco CCNA certification with distinction"
    ],
    skills: ["System Administration", "Network Management", "IT Support"]
  },
  {
    id: 4,
    year: "2017 - 2019",
    title: "IT Support Technician",
    company: "Royal University of Bhutan",
    location: "Thimphu, Bhutan",
    description: "Provided technical support and maintained campus IT infrastructure.",
    achievements: [
      "Supported 1000+ students and staff with IT services",
      "Maintained computer labs and network connectivity across campus",
      "Completed Bachelor's degree in Information Technology"
    ],
    skills: ["Technical Support", "Hardware Maintenance", "Networking Basics"]
  }
]

export function InteractiveTimeline() {
  const [expandedId, setExpandedId] = useState<number | null>(1)

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional <span className="text-primary">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From Bhutan to Australia — my path in IT security and network administration
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-8 md:mb-12 ${
                index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-black z-10`}
              />

              {/* Content card */}
              <motion.div
                className={`ml-16 md:ml-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
              >
                <motion.button
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  className="w-full text-left bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-primary/50 transition-all group"
                >
                  {/* Year badge */}
                  <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-primary font-semibold">{item.year}</span>
                  </div>

                  {/* Title and company */}
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-1">
                    {item.title}
                  </h3>
                  <div className={`flex items-center gap-4 text-gray-400 text-sm mb-2 flex-wrap ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <span className="flex items-center gap-1">
                      <Building2 className="h-4 w-4" />
                      {item.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {item.location}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-4">{item.description}</p>

                  {/* Expand indicator */}
                  <motion.div
                    animate={{ rotate: expandedId === item.id ? 180 : 0 }}
                    className={`flex ${index % 2 === 0 ? "md:justify-end" : ""}`}
                  >
                    <ChevronDown className="h-5 w-5 text-primary" />
                  </motion.div>
                </motion.button>

                {/* Expanded content */}
                <AnimatePresence>
                  {expandedId === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-gray-800/30 border border-gray-700/30 border-t-0 rounded-b-xl p-6 mt-[-8px]">
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {item.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-2 text-gray-300"
                              >
                                <span className="text-primary mt-1.5">•</span>
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                            Skills Applied
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill, i) => (
                              <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
