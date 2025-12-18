"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Lock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

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
    title: "Enterprise SIEM Dashboard",
    description: "Custom security information and event management dashboard with real-time threat visualization and automated alerting.",
    image: "/projects/siem.png",
    category: "Security Tools",
    technologies: ["Python", "ElasticSearch", "React", "D3.js"],
    link: "#",
    github: "#"
  },
  {
    id: "2",
    title: "Vulnerability Scanner API",
    description: "Automated vulnerability scanning API that integrates with CI/CD pipelines for continuous security testing.",
    image: "/projects/scanner.png",
    category: "DevSecOps",
    technologies: ["Go", "Docker", "Kubernetes", "PostgreSQL"],
    link: "#",
    github: "#"
  },
  {
    id: "3",
    title: "Phishing Detection ML Model",
    description: "Machine learning model achieving 98.5% accuracy in detecting phishing emails and malicious URLs.",
    image: "/projects/phishing.png",
    category: "AI/ML Security",
    technologies: ["Python", "TensorFlow", "FastAPI", "Redis"],
    link: "#"
  },
  {
    id: "4",
    title: "Zero Trust Architecture",
    description: "Designed and implemented zero trust security model for a Fortune 500 company with 50,000+ employees.",
    image: "/projects/zerotrust.png",
    category: "Architecture",
    technologies: ["Azure AD", "Okta", "Terraform", "AWS"],
  },
  {
    id: "5",
    title: "Incident Response Playbook",
    description: "Comprehensive automated incident response system with SOAR integration and custom playbooks.",
    image: "/projects/incident.png",
    category: "SOC",
    technologies: ["Python", "Splunk", "XSOAR", "TheHive"],
    github: "#"
  },
  {
    id: "6",
    title: "Secure Code Review Tool",
    description: "Static analysis tool for identifying security vulnerabilities in source code with custom rule engine.",
    image: "/projects/codereview.png",
    category: "DevSecOps",
    technologies: ["TypeScript", "Semgrep", "GitHub Actions"],
    link: "#",
    github: "#"
  }
]

const categories = ["All", "Security Tools", "DevSecOps", "AI/ML Security", "Architecture", "SOC"]

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
                  {/* Project image placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-indigo-500/20" />
                    
                    {/* Icon overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Lock className="h-16 w-16 text-white/20" />
                    </div>

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
