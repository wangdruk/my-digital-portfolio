"use client"

import { motion } from "framer-motion"
import { 
  Shield, 
  Lock, 
  Search, 
  Code, 
  Server, 
  Cloud,
  Terminal,
  Bug,
  Eye,
  FileKey
} from "lucide-react"

const skills = [
  {
    icon: Shield,
    name: "Network Security",
    level: 95,
    color: "from-blue-500 to-blue-600",
    description: "Firewalls, IDS/IPS, Network Monitoring"
  },
  {
    icon: Lock,
    name: "Encryption & Cryptography",
    level: 90,
    color: "from-purple-500 to-purple-600",
    description: "SSL/TLS, PKI, Hash Functions"
  },
  {
    icon: Bug,
    name: "Penetration Testing",
    level: 92,
    color: "from-red-500 to-red-600",
    description: "Web Apps, APIs, Infrastructure"
  },
  {
    icon: Search,
    name: "Vulnerability Assessment",
    level: 88,
    color: "from-orange-500 to-orange-600",
    description: "Nessus, Qualys, OpenVAS"
  },
  {
    icon: Terminal,
    name: "Security Tools",
    level: 94,
    color: "from-green-500 to-green-600",
    description: "Burp Suite, Metasploit, Wireshark"
  },
  {
    icon: Code,
    name: "Secure Coding",
    level: 85,
    color: "from-cyan-500 to-cyan-600",
    description: "Python, JavaScript, Go"
  },
  {
    icon: Cloud,
    name: "Cloud Security",
    level: 87,
    color: "from-indigo-500 to-indigo-600",
    description: "AWS, Azure, GCP Security"
  },
  {
    icon: Server,
    name: "SIEM & SOC",
    level: 89,
    color: "from-pink-500 to-pink-600",
    description: "Splunk, QRadar, Elastic SIEM"
  },
  {
    icon: Eye,
    name: "Threat Intelligence",
    level: 86,
    color: "from-teal-500 to-teal-600",
    description: "MITRE ATT&CK, IOC Analysis"
  },
  {
    icon: FileKey,
    name: "Compliance & GRC",
    level: 84,
    color: "from-amber-500 to-amber-600",
    description: "ISO 27001, NIST, SOC 2"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

export function InteractiveSkills() {
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
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Expertise in modern cybersecurity tools, frameworks, and methodologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`p-3 rounded-lg bg-gradient-to-br ${skill.color}`}
                  >
                    <skill.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-primary transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-400">{skill.description}</p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="relative">
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    />
                  </div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="absolute -top-6 right-0 text-sm font-medium text-primary"
                  >
                    {skill.level}%
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
