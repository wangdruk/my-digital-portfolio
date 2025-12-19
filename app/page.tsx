import Link from "next/link"
import Image from "next/image"
import { Shield, AlertTriangle, FileCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NewsletterForm } from "@/components/newsletter-form"
import { db, blogPosts } from "@/lib/db"
import { formatDate } from "@/lib/utils"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { HeroSlider } from "@/components/hero-slider"
import { InteractiveSkills } from "@/components/interactive-skills"
import { StatsCounter } from "@/components/stats-counter"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { InteractiveTimeline } from "@/components/interactive-timeline"
import { FloatingActionButton } from "@/components/floating-action-button"
import { InteractiveProjectGrid } from "@/components/interactive-project-grid"
import { LatestInsights } from "@/components/latest-insights"

export default async function Home() {
  // Fetch the latest 3 blog posts with error handling
  let latestPosts: { id: number; slug: string; title: string; excerpt: string | null; coverImage: string | null; author: string | null; readTime: string | null; createdAt: Date }[] = []
  let dbError = false

  try {
    latestPosts = (await db.select().from(blogPosts).orderBy(blogPosts.createdAt).limit(4)).map(post => ({
      id: post.id,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      coverImage: post.coverImage,
      author: post.author,
      readTime: post.readTime,
      createdAt: post.createdAt || new Date()
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

      {/* Latest Insights Section */}
      <LatestInsights posts={latestPosts} error={dbError} />
    </div>
  )
}
