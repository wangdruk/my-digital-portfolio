import Link from "next/link"
import Image from "next/image"
import { Shield, AlertTriangle, FileCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NewsletterForm } from "@/components/newsletter-form"
import { db, blogPosts } from "@/lib/db"
import { formatDate } from "@/lib/utils"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { HeroSlider } from "@/components/hero-slider"
import { InteractiveSkills } from "@/components/interactive-skills"
import { StatsCounter } from "@/components/stats-counter"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { InteractiveTimeline } from "@/components/interactive-timeline"
import { FloatingActionButton } from "@/components/floating-action-button"
import { InteractiveProjectGrid } from "@/components/interactive-project-grid"

export default async function Home() {
  // Fetch the latest 3 blog posts with error handling
  let latestPosts: { id: string; slug: string; title: string; excerpt: string; coverImage?: string; createdAt: string }[] = []
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
  } catch (error) {
    console.error("Error fetching from database:", error)
    dbError = true
  }

  return (
    <div className="flex flex-col">
      {/* Hero Image Slider */}
      <HeroSlider />

      {/* Floating Action Button */}
      <FloatingActionButton />

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

      {/* Interactive Skills Section */}
      <InteractiveSkills />

      {/* Stats Counter Section */}
      <StatsCounter />

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

      {/* Experience Section - Interactive Timeline */}
      <InteractiveTimeline />

      {/* Testimonials Section */}
      <TestimonialsCarousel />

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
      {/* Interactive Projects Section */}
      <InteractiveProjectGrid />

      {/* Blog Section */}
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
