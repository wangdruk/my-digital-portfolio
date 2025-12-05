import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Security Plan | CyberShield",
  description: "Comprehensive security plan describing objectives, risk assessment, controls, incident response, and implementation roadmap.",
}

export default function SecurityPlanPage() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-6 max-w-4xl mx-auto prose prose-invert">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Security Plan</div>
          <h1>Comprehensive Security Plan</h1>

          <p>
            This security plan describes a risk-based approach to protecting critical assets, reducing
            attack surface, and ensuring rapid recovery. It is intended for leadership, engineering,
            and operations teams responsible for implementing security controls and incident response.
          </p>

          <h2>Objectives</h2>
          <ul>
            <li>Protect confidentiality, integrity, and availability of critical systems and data.</li>
            <li>Reduce risk to acceptable levels through layered controls and continuous monitoring.</li>
            <li>Ensure timely detection, containment, and recovery from security incidents.</li>
            <li>Maintain regulatory and contractual compliance relevant to the organisation.</li>
          </ul>

          <h2>Risk Assessment</h2>
          <p>
            Conduct regular threat modeling and asset inventory to identify high-value assets and likely
            threat vectors. Prioritise risks by impact and likelihood, and apply controls starting with
            the highest-risk items.
          </p>

          <h2>Security Controls</h2>
          <p>Apply a defense-in-depth strategy across the following control categories:</p>
          <ul>
            <li>Identity & Access Management: Strong MFA, least-privilege roles, periodic access reviews.</li>
            <li>Network Security: Segment networks, enforce egress/ingress rules, use strong encryption.</li>
            <li>Endpoint & Application Security: Harden images, patching cadence, static/dynamic analysis.</li>
            <li>Data Protection: Encryption at rest/in transit, robust backup and retention policies.</li>
            <li>Monitoring & Detection: Centralized logs, alerting, SIRT playbooks and runbooks.</li>
          </ul>

          <h2>Incident Response</h2>
          <p>
            Maintain an incident response plan with clear roles and escalation paths. Regularly run
            tabletop exercises, maintain communication templates, and ensure forensic evidence is
            preserved for investigations.
          </p>

          <h2>Compliance & Governance</h2>
          <p>
            Map regulatory obligations (e.g., privacy, industry standards) to controls and perform
            periodic audits. Record decisions in a governance log and track remediation items to closure.
          </p>

          <h2>Implementation Roadmap</h2>
          <ol>
            <li>Quarter 1: Asset inventory, baseline hardening, and IAM rollout.</li>
            <li>Quarter 2: Monitoring, alerting, and automated patch management.</li>
            <li>Quarter 3: Incident response drills, backup validation, and tabletop exercises.</li>
            <li>Quarter 4: Compliance assessment and continuous improvement planning.</li>
          </ol>

          <h2>Next Steps & Contact</h2>
          <p>
            To adopt this plan, schedule a risk workshop and define owners for each roadmap item. For
            assistance or to discuss tailored security planning, visit the <Link href="/about">About</Link> page
            or contact the security team.
          </p>
        </div>
      </div>
    </div>
  )
}
