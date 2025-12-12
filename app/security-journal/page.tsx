import Link from "next/link"

export const metadata = {
  title: "Security Journal — LMS Mini Project References",
}

export default function SecurityJournalPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">Security Journal</h1>
      <p className="mt-4 text-muted-foreground">Week 3 deliverable: Hardened Digital Portfolio Deployment.</p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Production Deployment</h2>
        <p className="mt-2">Required by the LMS — confirm your live deployment here:</p>
        <p className="mt-2"><Link className="text-primary underline" href="https://my-digital-portfolio-kappa.vercel.app/">my-digital-portfolio-kappa.vercel.app</Link></p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Security Controls Confirmed</h2>
        <ul className="list-disc ml-5 mt-2 text-muted-foreground">
          <li>HTTPS enforced (Vercel default)</li>
          <li>Environment variables stored in Vercel (not committed)</li>
          <li>Server-side auth for admin routes (Clerk `auth()` usage)</li>
          <li>DB access via Drizzle/Neon — use least privilege DB user</li>
          <li>Content Security Policy, secure cookies, and CSP suggestions documented</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">LMS Mini Project References</h2>
        <ol className="list-decimal ml-5 mt-2 text-muted-foreground">
          <li>Production URL: <Link href="https://my-digital-portfolio-kappa.vercel.app/" className="text-primary underline">my-digital-portfolio-kappa.vercel.app</Link></li>
          <li>Security checklist: documented in this page and recommend adding to README.md</li>
          <li>Notes: rotate exposed keys from local `.env` and configure them in Vercel before grading</li>
        </ol>
      </section>

      <div className="mt-8">
        <Link href="/" className="text-sm text-muted-foreground underline">Back to home</Link>
      </div>
    </div>
  )
}
