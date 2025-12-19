"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
  link?: string
  github?: string
}

const sampleProjects: Project[] = [
  {
    id: "1",
    title: "Network Security Implementation",
    description: "Designed and deployed enterprise-grade network security infrastructure using Cisco technologies including firewalls, IDS/IPS, and VPN solutions.",
    image: "/modern-soc-overview.png",
    category: "Network Security",
    technologies: ["Cisco ASA", "Firewall", "VPN", "IDS/IPS"],
    link: "/blog"
  },
  {
    id: "2",
    title: "Security Monitoring Dashboard",
    description: "Built a comprehensive security monitoring dashboard for real-time threat detection and incident response across multi-site environments.",
    image: "/digital-security-breach.png",
    category: "Security Tools",
    technologies: ["SIEM", "Log Analysis", "Splunk", "Python"],
    link: "/blog"
  },
  {
    id: "3",
    title: "Cloud Security Migration",
    description: "Led secure cloud migration project for government services, implementing zero-trust architecture and compliance frameworks.",
    image: "/secure-cloud-network.png",
    category: "Cloud Security",
    technologies: ["Azure", "AWS", "Terraform", "Security Policies"],
    link: "/about"
  },
  {
    id: "4",
    title: "Vulnerability Assessment Program",
    description: "Developed and implemented an ongoing vulnerability assessment program reducing security risks by 75% across client infrastructure.",
    image: "/interconnected-threat-analysis.png",
    category: "Security Assessment",
    technologies: ["Nessus", "OpenVAS", "Penetration Testing", "Reporting"],
    link: "/blog"
  },
  {
    id: "5",
    title: "Incident Response Framework",
    description: "Created comprehensive incident response playbooks and trained teams on security breach containment and recovery procedures.",
    image: "/digital-watchtower.png",
    category: "SOC",
    technologies: ["IR Playbooks", "Forensics", "SOAR", "Documentation"],
    link: "/blog"
  },
  {
    id: "6",
    title: "Security Awareness Training",
    description: "Designed and delivered security awareness training programs for 500+ employees, reducing phishing susceptibility by 80%.",
    image: "/network-security-dashboard.png",
    category: "Training",
    technologies: ["Training Materials", "Phishing Simulation", "Compliance", "Workshops"],
    link: "/about"
  }
]

const categories = ["All", "Network Security", "Security Tools", "Cloud Security", "Security Assessment", "SOC", "Training"]

export function InteractiveProjectGrid({ projects = sampleProjects }: { projects?: Project[] }) {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section className="py-20 bg-black">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            A showcase of security tools, research, and implementations
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "border-gray-600 text-gray-300 hover:border-primary hover:text-primary"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300">
                  {/* Project image */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Hover overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                      className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
                    >
                      {project.link && (
                        <Link href={project.link}>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-3 bg-primary rounded-full text-white"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </motion.button>
                        </Link>
                      )}
                      {project.github && (
                        <Link href={project.github}>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-3 bg-gray-700 rounded-full text-white"
                          >
                            <Github className="h-5 w-5" />
                          </motion.button>
                        </Link>
                      )}
                    </motion.div>

                    {/* Category badge */}
                    <Badge className="absolute top-4 left-4 bg-primary/80 text-white">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-gray-700/50 text-gray-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-gray-700/50 text-gray-400 rounded">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* View project link */}
                    <Link href={`/projects/${project.id}`}>
                      <motion.div
                        className="flex items-center text-primary text-sm font-medium group/link"
                        whileHover={{ x: 5 }}
                      >
                        View Details
                        <ArrowRight className="h-4 w-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all projects button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/projects">
            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-primary hover:border-primary">
              View All Projects
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
