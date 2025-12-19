"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, CheckCircle, AlertTriangle, Target, Wrench, Users, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectDetail {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  category: string
  duration: string
  year: string
  client: string
  role: string
  technologies: string[]
  overview: string
  challenge: string
  solution: string
  requirements: string[]
  keyFeatures: string[]
  outcomes: {
    metric: string
    value: string
    description: string
  }[]
  lessons: string[]
}

const projectsData: Record<string, ProjectDetail> = {
  "1": {
    id: "1",
    title: "Network Security Implementation",
    subtitle: "Enterprise-Grade Security Infrastructure",
    description: "Designed and deployed enterprise-grade network security infrastructure using Cisco technologies including firewalls, IDS/IPS, and VPN solutions.",
    image: "/modern-soc-overview.png",
    category: "Network Security",
    duration: "6 months",
    year: "2023",
    client: "Financial Services Company",
    role: "Lead Security Engineer",
    technologies: ["Cisco ASA", "Cisco Firepower", "VPN", "IDS/IPS", "VLAN Segmentation", "802.1X"],
    overview: "This project involved a complete overhaul of the network security infrastructure for a mid-sized financial services company. The client was experiencing increasing security incidents and needed a robust, scalable solution to protect their sensitive financial data and customer information.",
    challenge: "The existing network infrastructure was flat with minimal segmentation, outdated firewall rules, and no intrusion detection capabilities. The organization had experienced multiple security incidents including unauthorized access attempts and a minor data breach. They needed a comprehensive security solution that could scale with their growth while meeting regulatory compliance requirements including PCI-DSS.",
    solution: "I designed and implemented a multi-layered security architecture using Cisco technologies. This included deploying Cisco ASA firewalls with Firepower services for advanced threat protection, implementing network segmentation using VLANs, and establishing 802.1X network access control. Site-to-site VPNs were configured for secure remote office connectivity, and a comprehensive IDS/IPS solution was deployed to monitor and protect against threats in real-time.",
    requirements: [
      "PCI-DSS compliance for payment card data protection",
      "99.99% network uptime SLA",
      "Support for 500+ concurrent users",
      "Secure remote access for 3 branch offices",
      "Real-time threat detection and alerting",
      "Comprehensive logging and audit trails",
      "Integration with existing Active Directory",
      "Disaster recovery and failover capabilities"
    ],
    keyFeatures: [
      "Multi-zone firewall architecture with DMZ",
      "Cisco Firepower Next-Generation IPS",
      "Site-to-site IPSec VPN tunnels",
      "802.1X network access control with RADIUS",
      "VLAN segmentation for PCI compliance",
      "Centralized security management console",
      "Automated threat response playbooks",
      "Real-time security dashboards and reporting"
    ],
    outcomes: [
      {
        metric: "Security Incidents",
        value: "95%",
        description: "Reduction in security incidents within first 3 months"
      },
      {
        metric: "Compliance",
        value: "100%",
        description: "PCI-DSS compliance achieved and maintained"
      },
      {
        metric: "Network Uptime",
        value: "99.99%",
        description: "Exceeded SLA requirements consistently"
      },
      {
        metric: "Threat Detection",
        value: "< 5 min",
        description: "Average time to detect and respond to threats"
      }
    ],
    lessons: [
      "Proper network segmentation is fundamental to security",
      "Integration testing is crucial before production deployment",
      "User training significantly reduces security incidents",
      "Continuous monitoring is essential for maintaining security posture"
    ]
  },
  "2": {
    id: "2",
    title: "Security Monitoring Dashboard",
    subtitle: "Real-Time Threat Detection Platform",
    description: "Built a comprehensive security monitoring dashboard for real-time threat detection and incident response across multi-site environments.",
    image: "/digital-security-breach.png",
    category: "Security Tools",
    duration: "4 months",
    year: "2023",
    client: "Healthcare Organization",
    role: "Security Analyst / Developer",
    technologies: ["Splunk", "Python", "ELK Stack", "Grafana", "SIEM", "API Integration"],
    overview: "Developed a centralized security monitoring solution that aggregates logs and security events from multiple sources across a healthcare organization's infrastructure. The dashboard provides real-time visibility into security posture and enables rapid incident response.",
    challenge: "The organization had security tools deployed across multiple locations but lacked centralized visibility. Security analysts were spending hours manually correlating events from different sources. Incident response times were slow, averaging 2-3 hours for critical alerts. The organization needed HIPAA-compliant monitoring with automated alerting.",
    solution: "I designed and built a comprehensive SIEM solution using Splunk as the core platform, with custom Python scripts for log parsing and enrichment. The solution includes automated correlation rules, machine learning-based anomaly detection, and integration with ticketing systems for incident management. Custom Grafana dashboards provide real-time visibility for different stakeholder groups.",
    requirements: [
      "HIPAA compliance for healthcare data",
      "Centralized log collection from 50+ sources",
      "Real-time alerting with < 1 minute latency",
      "Custom dashboards for different user roles",
      "Automated incident ticket creation",
      "90-day log retention with archival",
      "Integration with existing security tools",
      "24/7 monitoring capability"
    ],
    keyFeatures: [
      "Centralized log aggregation from all security tools",
      "Real-time threat correlation and alerting",
      "Machine learning anomaly detection",
      "Custom executive and analyst dashboards",
      "Automated incident response workflows",
      "Threat intelligence feed integration",
      "Compliance reporting automation",
      "Mobile-responsive alert notifications"
    ],
    outcomes: [
      {
        metric: "Response Time",
        value: "85%",
        description: "Reduction in mean time to detect (MTTD)"
      },
      {
        metric: "Visibility",
        value: "100%",
        description: "Coverage across all critical systems"
      },
      {
        metric: "Automation",
        value: "70%",
        description: "Of alerts automatically triaged and categorized"
      },
      {
        metric: "Efficiency",
        value: "4 hours",
        description: "Daily time saved for security analysts"
      }
    ],
    lessons: [
      "Data normalization is key to effective correlation",
      "Start with high-fidelity alerts to build trust",
      "Stakeholder input is crucial for dashboard design",
      "Regular tuning prevents alert fatigue"
    ]
  },
  "3": {
    id: "3",
    title: "Cloud Security Migration",
    subtitle: "Zero-Trust Cloud Architecture",
    description: "Led secure cloud migration project for government services, implementing zero-trust architecture and compliance frameworks.",
    image: "/secure-cloud-network.png",
    category: "Cloud Security",
    duration: "8 months",
    year: "2022",
    client: "Government Agency",
    role: "Cloud Security Architect",
    technologies: ["Azure", "AWS", "Terraform", "Azure AD", "Conditional Access", "Azure Sentinel"],
    overview: "Led the security architecture and implementation for migrating critical government services from on-premises data centers to a hybrid cloud environment. The project required meeting stringent government security standards while enabling modern cloud capabilities.",
    challenge: "The government agency needed to modernize their infrastructure while maintaining strict security controls. Legacy applications required careful assessment for cloud readiness. Compliance with government security frameworks was mandatory, and the migration needed to occur with zero downtime for critical public services.",
    solution: "I designed a zero-trust security architecture leveraging Azure and AWS services. This included implementing conditional access policies, network micro-segmentation, and comprehensive identity management using Azure AD. Infrastructure as Code using Terraform ensured consistent, auditable deployments. Azure Sentinel was deployed for cloud-native security monitoring.",
    requirements: [
      "Government security framework compliance",
      "Zero-trust architecture implementation",
      "Zero downtime during migration",
      "Data sovereignty requirements",
      "Multi-factor authentication for all access",
      "Encryption at rest and in transit",
      "Comprehensive audit logging",
      "Disaster recovery with RPO < 1 hour"
    ],
    keyFeatures: [
      "Zero-trust network architecture",
      "Azure AD with conditional access policies",
      "Infrastructure as Code with Terraform",
      "Network micro-segmentation",
      "Cloud-native SIEM with Azure Sentinel",
      "Automated security compliance checks",
      "Privileged access management",
      "Multi-region disaster recovery"
    ],
    outcomes: [
      {
        metric: "Compliance",
        value: "100%",
        description: "Government security framework compliance achieved"
      },
      {
        metric: "Downtime",
        value: "0",
        description: "Zero downtime during entire migration"
      },
      {
        metric: "Cost Savings",
        value: "40%",
        description: "Reduction in infrastructure costs"
      },
      {
        metric: "Security Score",
        value: "95/100",
        description: "Azure Secure Score achieved"
      }
    ],
    lessons: [
      "Zero-trust requires cultural change, not just technology",
      "Infrastructure as Code ensures consistency and auditability",
      "Phased migration reduces risk significantly",
      "Cloud security requires continuous monitoring and adaptation"
    ]
  },
  "4": {
    id: "4",
    title: "Vulnerability Assessment Program",
    subtitle: "Continuous Security Testing",
    description: "Developed and implemented an ongoing vulnerability assessment program reducing security risks by 75% across client infrastructure.",
    image: "/interconnected-threat-analysis.png",
    category: "Security Assessment",
    duration: "Ongoing",
    year: "2023-Present",
    client: "Multiple Clients",
    role: "Senior Security Consultant",
    technologies: ["Nessus", "OpenVAS", "Burp Suite", "OWASP ZAP", "Python", "Reporting Tools"],
    overview: "Established a comprehensive vulnerability assessment program providing continuous security testing for multiple clients. The program includes automated scanning, manual verification, risk prioritization, and remediation tracking to ensure ongoing security improvement.",
    challenge: "Clients were performing annual penetration tests but lacked continuous visibility into their security posture. New vulnerabilities were being introduced faster than they could be addressed. There was no standardized process for tracking and prioritizing remediation efforts, leading to inconsistent security outcomes.",
    solution: "I developed a structured vulnerability management program that includes weekly automated scans, monthly manual assessments, and quarterly comprehensive reviews. Custom reporting tools provide clear prioritization based on business risk. Remediation tracking ensures vulnerabilities are addressed within defined SLAs.",
    requirements: [
      "Weekly automated vulnerability scanning",
      "Monthly manual security assessments",
      "Risk-based vulnerability prioritization",
      "Remediation tracking and SLA management",
      "Executive and technical reporting",
      "Integration with ticketing systems",
      "Compliance mapping (PCI, HIPAA, SOC2)",
      "Trend analysis and metrics tracking"
    ],
    keyFeatures: [
      "Automated vulnerability scanning pipeline",
      "Risk-based prioritization framework",
      "Custom vulnerability management dashboard",
      "Remediation workflow automation",
      "Compliance mapping and reporting",
      "Trend analysis and security metrics",
      "Integration with development workflows",
      "Executive summary reporting"
    ],
    outcomes: [
      {
        metric: "Risk Reduction",
        value: "75%",
        description: "Reduction in critical vulnerabilities"
      },
      {
        metric: "Coverage",
        value: "100%",
        description: "Of assets continuously monitored"
      },
      {
        metric: "Remediation Time",
        value: "60%",
        description: "Faster remediation of critical issues"
      },
      {
        metric: "Visibility",
        value: "Real-time",
        description: "Continuous security posture visibility"
      }
    ],
    lessons: [
      "Automation is key to sustainable security testing",
      "Business context is essential for prioritization",
      "Clear communication drives remediation success",
      "Metrics demonstrate security program value"
    ]
  },
  "5": {
    id: "5",
    title: "Incident Response Framework",
    subtitle: "Comprehensive IR Playbooks",
    description: "Created comprehensive incident response playbooks and trained teams on security breach containment and recovery procedures.",
    image: "/digital-watchtower.png",
    category: "SOC",
    duration: "3 months",
    year: "2022",
    client: "E-commerce Company",
    role: "Incident Response Lead",
    technologies: ["IR Playbooks", "SOAR", "Forensics Tools", "TheHive", "MISP", "Documentation"],
    overview: "Developed a comprehensive incident response framework for an e-commerce company handling millions in daily transactions. The framework includes detailed playbooks, team training, and integration with security tools for automated response capabilities.",
    challenge: "The company had experienced a significant data breach with no formal incident response process. Response was ad-hoc, leading to extended breach duration and regulatory penalties. They needed a structured approach to handle security incidents efficiently and minimize business impact.",
    solution: "I created a complete incident response framework including playbooks for common attack scenarios, established an incident response team structure, and implemented SOAR integration for automated containment actions. Comprehensive tabletop exercises ensured team readiness.",
    requirements: [
      "Incident response playbooks for 10+ scenarios",
      "Clear roles and responsibilities matrix",
      "Integration with existing security tools",
      "Automated containment capabilities",
      "Forensic investigation procedures",
      "Communication templates and escalation paths",
      "Regulatory compliance documentation",
      "Regular testing and exercises"
    ],
    keyFeatures: [
      "Detailed playbooks for common attack types",
      "SOAR integration for automated response",
      "Incident classification and severity matrix",
      "Evidence collection and chain of custody",
      "Communication templates for stakeholders",
      "Post-incident review process",
      "Lessons learned documentation",
      "Regular tabletop exercises"
    ],
    outcomes: [
      {
        metric: "Response Time",
        value: "80%",
        description: "Reduction in incident response time"
      },
      {
        metric: "Containment",
        value: "< 1 hour",
        description: "Average time to contain incidents"
      },
      {
        metric: "Team Readiness",
        value: "100%",
        description: "Team trained and certified on procedures"
      },
      {
        metric: "Compliance",
        value: "100%",
        description: "Regulatory reporting requirements met"
      }
    ],
    lessons: [
      "Practice and exercises are essential for readiness",
      "Clear communication is as important as technical response",
      "Automation reduces human error during high-stress incidents",
      "Post-incident reviews drive continuous improvement"
    ]
  },
  "6": {
    id: "6",
    title: "Security Awareness Training",
    subtitle: "Human Firewall Development",
    description: "Designed and delivered security awareness training programs for 500+ employees, reducing phishing susceptibility by 80%.",
    image: "/network-security-dashboard.png",
    category: "Training",
    duration: "Ongoing",
    year: "2021-Present",
    client: "Multiple Organizations",
    role: "Security Trainer / Consultant",
    technologies: ["Training Platforms", "Phishing Simulation", "LMS", "Video Production", "Assessment Tools"],
    overview: "Developed comprehensive security awareness training programs tailored to different organizational needs. The programs combine engaging content, regular phishing simulations, and measurable outcomes to build a strong security culture.",
    challenge: "Organizations were experiencing frequent security incidents caused by human error. Traditional security training was ineffective and boring, with low engagement and retention. Phishing attacks were particularly successful, with click rates exceeding 30% in initial assessments.",
    solution: "I created an engaging, multi-format training program that includes interactive modules, real-world case studies, and gamification elements. Regular phishing simulations provide measurable metrics, while targeted training addresses specific weaknesses identified through assessments.",
    requirements: [
      "Engaging, multi-format training content",
      "Regular phishing simulations",
      "Role-based training tracks",
      "Measurable outcomes and metrics",
      "Compliance training integration",
      "Mobile-friendly content delivery",
      "Automated enrollment and reminders",
      "Progress tracking and reporting"
    ],
    keyFeatures: [
      "Interactive video-based training modules",
      "Monthly phishing simulations",
      "Gamification with leaderboards and rewards",
      "Role-specific security training",
      "Just-in-time training for failures",
      "Executive security briefings",
      "Compliance certification tracking",
      "Security culture assessments"
    ],
    outcomes: [
      {
        metric: "Phishing Susceptibility",
        value: "80%",
        description: "Reduction in phishing click rates"
      },
      {
        metric: "Engagement",
        value: "95%",
        description: "Training completion rate"
      },
      {
        metric: "Reporting",
        value: "300%",
        description: "Increase in suspicious email reporting"
      },
      {
        metric: "Culture Score",
        value: "4.5/5",
        description: "Security culture assessment rating"
      }
    ],
    lessons: [
      "Engagement is key to effective security training",
      "Positive reinforcement works better than punishment",
      "Regular simulations maintain awareness",
      "Executive support is essential for culture change"
    ]
  }
}

export default function ProjectDetailPage() {
  const params = useParams()
  const projectId = params.id as string
  const project = projectsData[projectId]

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <Link href="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container px-4 md:px-6 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/projects" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Projects
              </Link>
              
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                {project.category}
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {project.title}
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mb-6">
                {project.subtitle}
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {project.year}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {project.duration}
                </span>
                <span className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  {project.role}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Target className="h-6 w-6 text-primary" />
                  Project Overview
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {project.overview}
                </p>
              </motion.div>

              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-yellow-500" />
                  The Challenge
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {project.challenge}
                </p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  The Solution
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>

              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Wrench className="h-6 w-6 text-primary" />
                  Project Requirements
                </h2>
                <ul className="grid md:grid-cols-2 gap-3">
                  {project.requirements.map((req, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-2 text-gray-300"
                    >
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      {req}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-white mb-4">Key Features Implemented</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.keyFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4"
                    >
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Outcomes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  Project Outcomes
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {project.outcomes.map((outcome, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6"
                    >
                      <div className="text-4xl font-bold text-primary mb-2">
                        {outcome.value}
                      </div>
                      <div className="text-lg font-semibold text-white mb-1">
                        {outcome.metric}
                      </div>
                      <div className="text-sm text-gray-400">
                        {outcome.description}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Lessons Learned */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-white mb-4">Lessons Learned</h2>
                <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6">
                  <ul className="space-y-3">
                    {project.lessons.map((lesson, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <span className="text-primary font-bold">{index + 1}.</span>
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Project Info Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-4">Project Details</h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm text-gray-400">Client</dt>
                      <dd className="text-white">{project.client}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-400">Role</dt>
                      <dd className="text-white">{project.role}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-400">Duration</dt>
                      <dd className="text-white">{project.duration}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-400">Year</dt>
                      <dd className="text-white">{project.year}</dd>
                    </div>
                  </dl>
                </motion.div>

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-primary/30 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">Interested in Similar Work?</h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Let&apos;s discuss how I can help secure your organization.
                  </p>
                  <Link href="/contact">
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Get in Touch
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 border-t border-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-center">
            <Link href="/projects">
              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                <ArrowLeft className="h-4 w-4 mr-2" />
                All Projects
              </Button>
            </Link>
            <Link href="/blog">
              <Button className="bg-primary hover:bg-primary/90">
                Read Blog Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
