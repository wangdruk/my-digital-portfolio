"use client"
import { useState } from "react"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError("")

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, tourId: null })
      })

      if (!res.ok) {
        const text = await res.text()
        setError('Submission failed: ' + (text || res.statusText))
        setSubmitting(false)
        return
      }

      const data = await res.json()
      if (data && data.ok) {
        setSubmitted(true)
      } else {
        setError('Submission failed')
      }
    } catch (err: any) {
      setError('Error submitting form')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="container py-12 max-w-2xl">
      <h1 className="text-2xl font-bold">Contact & Booking</h1>
      <p className="text-muted-foreground mt-2">Send us your travel preferences and we&apos;ll prepare a personalised itinerary.</p>

      {submitted ? (
        <div className="mt-6 rounded-md bg-primary/10 p-4">Thank you — your inquiry was received. We will contact you shortly.</div>
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
          {error && <div className="text-destructive text-sm">{error}</div>}
          <div>
            <button type="submit" disabled={submitting} className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white">
              {submitting ? 'Sending…' : 'Send inquiry'}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
