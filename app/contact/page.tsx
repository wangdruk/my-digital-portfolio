"use client"
import { useState } from "react"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Basic client-side handling: open email draft
    const subject = encodeURIComponent("Tour enquiry from " + name)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:info@bhutanmebar.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <div className="container py-12 max-w-2xl">
      <h1 className="text-2xl font-bold">Contact & Booking</h1>
      <p className="text-muted-foreground mt-2">Send us your travel preferences and we&apos;ll prepare a personalised itinerary.</p>

      {submitted ? (
        <div className="mt-6 rounded-md bg-primary/10 p-4">Thank you — your email client opened. We look forward to connecting.</div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <label className="flex flex-col">
            <span className="text-sm">Full name</span>
            <input required value={name} onChange={(e) => setName(e.target.value)} className="mt-1 rounded-md border px-3 py-2" />
          </label>
          <label className="flex flex-col">
            <span className="text-sm">Email</span>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 rounded-md border px-3 py-2" />
          </label>
          <label className="flex flex-col">
            <span className="text-sm">Message / Preferences</span>
            <textarea required value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1 rounded-md border px-3 py-2 min-h-[120px]" />
          </label>
          <div>
            <button className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white">Send inquiry</button>
          </div>
        </form>
      )}
    </div>
  )
}
