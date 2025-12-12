import Link from "next/link"

export const metadata = {
  title: "Security Journal — LMS Mini Project References",
}

export default function SecurityJournalPage() {
  return (
    <div className="container py-12 max-w-4xl">
      <h1 className="text-4xl font-bold">Security Journal</h1>
      <p className="mt-4 text-lg text-muted-foreground">Cybersecurity Bootcamp — Weeks 1–3 Deliverables & Mini Project Documentation</p>

      {/* WEEK 1 */}
      <section className="mt-12 border-t pt-8">
        <h2 className="text-3xl font-bold">Week 1: Digital Portfolio Setup</h2>
        <p className="mt-2 text-muted-foreground">Foundation: Create a personal digital portfolio showcasing cybersecurity expertise.</p>
        
        <div className="mt-6 space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Deliverables</h3>
            <ul className="list-disc ml-6 mt-2 text-muted-foreground space-y-1">
              <li>Portfolio homepage with professional introduction</li>
              <li>About page documenting cybersecurity background & certifications</li>
              <li>Projects showcase page highlighting security work</li>
              <li>Contact form for inquiries</li>
              <li>Blog setup for security insights</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Technology Stack</h3>
            <ul className="list-disc ml-6 mt-2 text-muted-foreground space-y-1">
              <li>Next.js 15 (App Router)</li>
              <li>Tailwind CSS for styling</li>
              <li>shadcn/ui component library</li>
              <li>TypeScript for type safety</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WEEK 2 */}
      <section className="mt-12 border-t pt-8">
        <h2 className="text-3xl font-bold">Week 2: Authentication & Database</h2>
        <p className="mt-2 text-muted-foreground">Integration: Add secure authentication and database persistence.</p>
        
        <div className="mt-6 space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Mini Projects Completed</h3>
            <ol className="list-decimal ml-6 mt-2 text-muted-foreground space-y-2">
              <li><strong>Let's Fork This</strong> — Forked and customized a template repository for portfolio foundation</li>
              <li><strong>Let's Clone Repository</strong> — Cloned the forked repo locally and set up the development environment</li>
            </ol>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Deliverables</h3>
            <ul className="list-disc ml-6 mt-2 text-muted-foreground space-y-1">
              <li>Clerk authentication (sign-in, sign-up, MFA support)</li>
              <li>Neon PostgreSQL database with Drizzle ORM</li>
              <li>Admin dashboard for portfolio management</li>
              <li>Secure API routes with server-side validation</li>
              <li>Role-based access control (Admin verification)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Security Implementation</h3>
            <ul className="list-disc ml-6 mt-2 text-muted-foreground space-y-1">
              <li>Environment variables protected (not in Git)</li>
              <li>Server-side auth using Clerk's `auth()` method</li>
              <li>Database connection via Neon with TLS encryption</li>
              <li>Middleware protecting admin routes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WEEK 3 */}
      <section className="mt-12 border-t pt-8">
        <h2 className="text-3xl font-bold">Week 3: Hardened Deployment & Security Hardening</h2>
        <p className="mt-2 text-muted-foreground">Maturity: Deploy securely to production with comprehensive security controls.</p>
        
        <div className="mt-6 space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Production Deployment</h3>
            <div className="mt-2 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground"><strong>Live URL:</strong></p>
              <p className="text-primary font-semibold"><Link href="https://my-digital-portfolio-kappa.vercel.app/" className="underline">https://my-digital-portfolio-kappa.vercel.app/</Link></p>
              <p className="text-sm text-muted-foreground mt-2"><strong>Custom Domain:</strong></p>
              <p className="text-primary font-semibold"><Link href="https://bhutanmebar.com" className="underline">https://bhutanmebar.com</Link> (GoDaddy — configured in Vercel)</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">Security Controls Confirmed</h3>
            <ul className="list-disc ml-6 mt-2 text-muted-foreground space-y-1">
              <li>✅ HTTPS enforced (Vercel TLS certificates)</li>
              <li>✅ Environment variables stored securely in Vercel dashboard (not in code)</li>
              <li>✅ Server-side authentication for admin routes (Clerk `auth()` usage)</li>
              <li>✅ Database access via Drizzle ORM with parameterized queries (SQL injection prevention)</li>
              <li>✅ Secure PostgreSQL connection (TLS/SSL)</li>
              <li>✅ Rate limiting via Arcjet middleware</li>
              <li>✅ Admin route protection via Next.js middleware</li>
              <li>✅ Input validation on all API routes</li>
              <li>✅ CORS configured appropriately</li>
              <li>✅ Secrets rotation recommended (local `.env` credentials should be rotated in production)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Security Hardening Checklist</h3>
            <ul className="list-disc ml-6 mt-2 text-muted-foreground space-y-1">
              <li>API endpoint security: POST requests validated server-side</li>
              <li>Database migrations tracked with Drizzle (version control)</li>
              <li>Error handling: generic errors returned to clients (details logged server-side)</li>
              <li>Authentication: Clerk handles OAuth, MFA, and session management</li>
              <li>Authorization: Admin-only routes protected by middleware and role checks</li>
              <li>Deployment protection: Vercel enables automatic HTTPS and security headers</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Architecture Diagram</h3>
            <div className="mt-2 p-4 bg-muted rounded-lg text-sm text-muted-foreground">
              <pre className="overflow-x-auto">
{`Client (Browser)
    ↓ HTTPS (TLS 1.3)
Vercel Edge (Global CDN)
    ↓ Secure Headers
Next.js Server (Node.js Runtime)
    ├─ Clerk Auth (OAuth provider)
    ├─ Middleware (admin route protection)
    ├─ API Routes (validation)
    └─ Drizzle ORM
        ↓ TLS Connection
Neon PostgreSQL (Managed Cloud DB)`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* KEY LEARNINGS */}
      <section className="mt-12 border-t pt-8">
        <h2 className="text-3xl font-bold">Key Security Learnings</h2>
        <ol className="list-decimal ml-6 mt-4 text-muted-foreground space-y-2">
          <li><strong>Defense in Depth:</strong> Multiple layers of security (TLS, auth, validation, DB encryption)</li>
          <li><strong>Secrets Management:</strong> Never commit credentials; use environment variables in production</li>
          <li><strong>Least Privilege:</strong> Database users, API routes, and roles limited to required access</li>
          <li><strong>Monitoring & Logging:</strong> Server-side error logging without exposing details to clients</li>
          <li><strong>Infrastructure Security:</strong> Managed services (Vercel, Clerk, Neon) provide baseline security</li>
          <li><strong>Secure by Default:</strong> Modern frameworks enforce HTTPS, CSP, and secure headers</li>
        </ol>
      </section>

      {/* RESOURCES */}
      <section className="mt-12 border-t pt-8">
        <h2 className="text-3xl font-bold">Resources & References</h2>
        <div className="mt-4 space-y-2 text-sm text-muted-foreground">
          <p>📚 <Link href="/blog" className="text-primary underline">Security Blog</Link> — Weekly cybersecurity insights</p>
          <p>🔐 <Link href="/resources/guides" className="text-primary underline">Security Guides</Link> — Implementation best practices</p>
          <p>📋 <Link href="/resources/checklists" className="text-primary underline">Security Checklists</Link> — Hardening templates</p>
          <p>🛠️ <Link href="https://github.com/wangdruk/my-digital-portfolio" className="text-primary underline">GitHub Repository</Link> — Source code & commit history</p>
        </div>
      </section>

      {/* FOOTER */}
      <div className="mt-12 pt-8 border-t text-center">
        <p className="text-sm text-muted-foreground">Security Journal — Last Updated: {new Date().toLocaleDateString()}</p>
        <Link href="/" className="text-sm text-primary underline mt-4 inline-block">Back to Home</Link>
      </div>
    </div>
  )
}
