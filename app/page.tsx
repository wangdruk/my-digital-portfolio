import Link from "next/link"
import Image from "next/image"
import { Shield, Lock, Server, Database, AlertTriangle, FileCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NewsletterForm } from "@/components/newsletter-form"
import { db, blogPosts, projects } from "@/lib/db"
import { formatDate } from "@/lib/utils"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default async function Home() {
  // Fetch the latest 3 blog posts and featured 3 projects with error handling
  let latestPosts: { id: string; slug: string; title: string; excerpt: string; coverImage?: string; createdAt: string }[] = []
  let featuredProjects: { id: string; title: string; description: string; icon?: string; items?: unknown[]; createdAt: string }[] = []
  let dbError = false

  try {
    latestPosts = (await db.select().from(blogPosts).orderBy(blogPosts.createdAt).limit(3)).map(post => ({
      id: post.id.toString(),
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      coverImage: post.coverImage || undefined,
      createdAt: post.createdAt ? post.createdAt.toISOString() : ""
    }))

    featuredProjects = (await db.select().from(projects).orderBy(projects.createdAt).limit(3)).map(p => ({
      id: p.id.toString(),
      title: p.title,
      description: p.description,
      icon: p.icon || undefined,
      items: Array.isArray(p.items) ? p.items : [],
      createdAt: p.createdAt ? p.createdAt.toISOString() : ""
    }))
  } catch (error) {
    console.error("Error fetching from database:", error)
    dbError = true
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-500">
                  Securing Your Digital Future
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Expert cybersecurity solutions to protect your organization from evolving threats. Penetration
                  testing, security audits, and incident response services.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                {/* <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Started
                  </Button>
                </Link> */}
                <Link href="/projects">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[500px] aspect-square">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2 col-span-2">
                      <div className="h-2 w-[80%] bg-primary/20 rounded-full"></div>
                      <div className="h-2 w-[60%] bg-primary/20 rounded-full"></div>
                    </div>
                    <div className="h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Lock className="h-8 w-8 text-primary" />
                    </div>
                    <div className="h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <div className="h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Server className="h-8 w-8 text-primary" />
                    </div>
                    <div className="h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Database className="h-8 w-8 text-primary" />
                    </div>
                    <div className="space-y-2 col-span-2 mt-2">
                      <div className="h-2 w-[70%] bg-primary/20 rounded-full"></div>
                      <div className="h-2 w-[50%] bg-primary/20 rounded-full"></div>
                    </div>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Animated background */}
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px] opacity-10"></div>
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Database Error Alert */}
      {dbError && (
        <div className="container px-4 md:px-6 py-6">
          <Alert variant="destructive">
            <AlertTitle>Database Error</AlertTitle>
            <AlertDescription>
              There was an error connecting to the database. Please try refreshing the page or contact support if the
              issue persists.
            </AlertDescription>
          </Alert>
        </div>
      )}

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Projects</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive Cybersecurity Solutions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Protect you from cybersecurity attackers.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card className="bg-background border-primary/20">
              <CardHeader>
                <AlertTriangle className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Penetration Testing</CardTitle>
                <CardDescription>
                  Identify vulnerabilities before attackers do with our comprehensive penetration testing services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Web Application Testing</li>
                  <li>Network Infrastructure Testing</li>
                  <li>Mobile Application Testing</li>
                  <li>Social Engineering Assessments</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-background border-primary/20">
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Security Audits</CardTitle>
                <CardDescription>
                  Comprehensive assessment of your security posture against industry standards and best practices.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Compliance Assessments</li>
                  <li>Security Architecture Review</li>
                  <li>Cloud Security Assessment</li>
                  <li>Risk Assessment</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-background border-primary/20">
              <CardHeader>
                <FileCode className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Security Training</CardTitle>
                <CardDescription>
                  Empower your team with the knowledge to recognize and respond to security threats.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Security Awareness Training</li>
                  <li>Phishing Simulations</li>
                  <li>Developer Security Training</li>
                  <li>Incident Response Drills</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Experience</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  7 Years of Cybersecurity Expertis
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  With extensive experience in the cybersecurity industry, I&apos;ve helped organizations of all sizes
                  protect their digital assets and infrastructure.
                </p>
              </div>
              <ul className="grid gap-2 py-4">
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <span>Certified Information Systems Security Professional (CISSP)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <span>Certified Ethical Hacker (CEH)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <span>Offensive Security Certified Professional (OSCP)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <span>Certified Cloud Security Professional (CCSP)</span>
                </li>
              </ul>
              <div>
                <Link href="/about">
                  <Button variant="outline">Learn More About My Experience</Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-end">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-lg bg-primary/10 p-2 lg:p-4">
                    <Image
                      src="/digital-watchtower.png"
                      width={300}
                      height={300}
                      alt="Security monitoring"
                      className="aspect-square rounded-md object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg bg-primary/10 p-2 lg:p-4">
                    <Image
                      src="/digital-fortress.png"
                      width={300}
                      height={300}
                      alt="Network security"
                      className="aspect-square rounded-md object-cover"
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-lg bg-primary/10 p-2 lg:p-4">
                    <Image
                      src="/cyber-guardian.png"
                      width={300}
                      height={300}
                      alt="Cybersecurity professional"
                      className="aspect-square rounded-md object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg bg-primary/10 p-2 lg:p-4">
                    <Image
                      src="/modern-soc-overview.png"
                      width={300}
                      height={300}
                      alt="Security operations center"
                      className="aspect-square rounded-md object-cover"
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-lg bg-primary/10 p-2 lg:p-4">
                    <Image
                      src="/digital-security-breach.png"
                      width={300}
                      height={300}
                      alt="Penetration testing"
                      className="aspect-square rounded-md object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg bg-primary/10 p-2 lg:p-4">
                    <Image
                      src="/interconnected-threat-analysis.png"
                      width={300}
                      height={300}
                      alt="Cyber threat intelligence"
                      className="aspect-square rounded-md object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* Security Plan Tabs Section */}
      <section className="w-full py-12 md:py-20 lg:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Security</div>
                <h2 className="text-2xl font-bold mt-3">Security Plan</h2>
                <p className="text-muted-foreground max-w-2xl mt-2">
                  A concise, actionable security plan that outlines objectives, controls, and the
                  implementation roadmap — designed for engineering and leadership teams.
                </p>
              </div>
              <div>
                <Link href="/security-plan">
                  <Button variant="outline">View Full Plan</Button>
                </Link>
              </div>
            </div>

            <div className="bg-muted/20 rounded-lg p-4 md:p-6">
              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="controls">Controls</TabsTrigger>
                  <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <div className="grid gap-6 md:grid-cols-2 items-start">
                    <div className="prose prose-invert">
                      <h3>Overview</h3>
                      <p>
                        This plan prioritises high-impact risk reduction: inventory critical assets, harden
                        systems, deploy monitoring, and validate backups. Focus on measurable controls and
                        quarterly milestones to close the highest-risk gaps first.
                      </p>
                      <ul>
                        <li>Asset discovery & classification</li>
                        <li>Identity & access baseline (MFA, least-privilege)</li>
                        <li>Continuous monitoring and logging</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <div className="rounded-lg bg-background p-4 border border-primary/10">
                        <h4 className="font-semibold">Quick Facts</h4>
                        <ul className="mt-2 text-sm text-muted-foreground">
                          <li><strong>Recovery RTO:</strong> 1-4 hours (target)</li>
                          <li><strong>Backup cadence:</strong> Daily snapshots</li>
                          <li><strong>Patch SLA:</strong> 30 days for high-risk CVEs</li>
                        </ul>
                      </div>
                      <div className="rounded-lg bg-background p-4 border border-primary/10">
                        <h4 className="font-semibold">Contact</h4>
                        <p className="text-sm text-muted-foreground">security-team@example.com</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="controls">
                  <div className="prose prose-invert">
                    <h3>Key Controls</h3>
                    <p>
                      Implement layered controls across identity, network, application, and data. Use
                      automation to reduce detection and response time.
                    </p>
                    <ul>
                      <li>Identity: Enforce strong MFA, remove unused service accounts</li>
                      <li>Network: Segment critical services and limit egress</li>
                      <li>App: Static analysis, dependency scanning, and runtime protections</li>
                      <li>Data: Encryption and data-loss prevention on sensitive stores</li>
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="roadmap">
                  <div className="prose prose-invert">
                    <h3>Implementation Roadmap</h3>
                    <p>
                      Practical milestones for the next four quarters to improve security posture and
                      measure progress with clear owners and success criteria.
                    </p>
                    <ol>
                      <li>Q1 — Asset inventory, IAM baseline, patching program</li>
                      <li>Q2 — Centralized logging & alerts, backup validation</li>
                      <li>Q3 — DR runbook, incident response tabletop exercises</li>
                      <li>Q4 — Compliance review and continuous improvement loop</li>
                    </ol>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Newsletter</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Stay Updated on Cybersecurity Trends
              </h2>
              <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed">
                Subscribe to our newsletter for the latest cybersecurity news, tips, and insights.
              </p>
            </div>
            <div className="w-full max-w-md">
              <NewsletterForm />
            </div>
          </div>
        </div>
        {/* Animated background */}
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px] opacity-10"></div>
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </section>

      {/* Recent Blog Posts */}
      {/* Projects Section (featured) */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Projects</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A curated selection of projects showcasing security tooling, audits, and tooling integrations.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            {dbError || featuredProjects.length === 0 ? (
              <>
                <Link href="/projects#project-1" className="group">
                  <Card className="overflow-hidden bg-background border-primary/20 transition-all duration-200 group-hover:border-primary/50 group-hover:shadow-md">
                    <CardHeader>
                      <CardTitle>Security Audit Toolkit</CardTitle>
                      <CardDescription>Automated checks and reporting for cloud and on-prem systems.</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>

                <Link href="/projects#project-2" className="group">
                  <Card className="overflow-hidden bg-background border-primary/20 transition-all duration-200 group-hover:border-primary/50 group-hover:shadow-md">
                    <CardHeader>
                      <CardTitle>Pentest Automation Suite</CardTitle>
                      <CardDescription>Repeatable engagement playbooks and result aggregation.</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>

                <Link href="/projects#project-3" className="group">
                  <Card className="overflow-hidden bg-background border-primary/20 transition-all duration-200 group-hover:border-primary/50 group-hover:shadow-md">
                    <CardHeader>
                      <CardTitle>Threat Intelligence Dashboard</CardTitle>
                      <CardDescription>Real-time indicators and correlation for SOC teams.</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </>
            ) : (
              featuredProjects.map((proj) => (
                <Link key={proj.id} href={`/projects/${proj.id}`} className="group">
                  <Card className="overflow-hidden bg-background border-primary/20 transition-all duration-200 group-hover:border-primary/50 group-hover:shadow-md">
                    <CardHeader>
                      <CardTitle>{proj.title}</CardTitle>
                      <CardDescription>{proj.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {proj.items && proj.items.length > 0 && (
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {proj.items.slice(0, 4).map((it: unknown, i: number) => (
                            <li key={i}>{typeof it === 'string' ? it : JSON.stringify(it)}</li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))
            )}
          </div>

          <div className="flex justify-center">
            <Link href="/projects">
              <Button variant="outline">View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Blog</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest Insights</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay informed with our latest articles on cybersecurity trends, threats, and best practices.
              </p>
            </div>
          </div>

          {dbError ? (
            <div className="mx-auto max-w-5xl py-12 text-center">
              <p className="text-muted-foreground">Unable to load blog posts at this time. Please try again later.</p>
            </div>
          ) : (
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {latestPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                  <Card className="overflow-hidden bg-background border-primary/20 transition-all duration-200 group-hover:border-primary/50 group-hover:shadow-md">
                    <div className="aspect-video w-full overflow-hidden">
                      <Image
                        src={post.coverImage || "/placeholder.svg?height=400&width=600&query=cybersecurity"}
                        width={600}
                        height={400}
                        alt={post.title}
                        className="object-cover transition-all duration-200 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{post.title}</CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{formatDate(post.createdAt)}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          <div className="flex justify-center">
            <Link href="/blog">
              <Button variant="outline">View All Articles</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
