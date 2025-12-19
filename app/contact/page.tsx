"use client"
import { useState } from "react"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Open a simple mail draft to contact email
    const subject = encodeURIComponent("Portfolio Contact: " + name)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:bhutan.infotech@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <div className="container py-12 max-w-2xl">
      <h1 className="text-2xl font-bold">Contact</h1>
      <p className="text-muted-foreground mt-2">Questions, feedback or collaboration requests — send me a message.</p>

      {submitted ? (
        <div className="mt-6 rounded-md bg-primary/10 p-4">Thank you — your email client opened. I will get back to you soon.</div>
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
            <span className="text-sm">Message</span>
            <textarea required value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1 rounded-md border px-3 py-2 min-h-[120px]" />
          </label>
          <div>
            <button className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white">Send</button>
          </div>
        </form>
      )}
    </div>
  )
}
