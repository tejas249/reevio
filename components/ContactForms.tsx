"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"

type ContactFormData = {
  name: string
  videoType: string
  email: string
  message: string
}

export default function ContactForms() {
  const router = useRouter()
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    videoType: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      router.push("/submit")
    } catch (err) {
      console.error(err)
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    
    }
  }

  return (
    <div className="mx-auto max-w-xl px-4 mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 dark:bg-slate-900/80 ring-1 ring-black/5 dark:ring-white/5 rounded-lg p-6 shadow-lg backdrop-blur-sm"
        noValidate
      >
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
          Contact Us
        </h2>

        <label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">
          Full name
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="mt-2 block w-full rounded-md border px-3 py-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-muted-foreground"
          />
        </label>

        <label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">
          Video type
          <select
            name="videoType"
            value={formData.videoType}
            onChange={handleChange}
            required
            className="mt-2 block w-full rounded-md border px-3 py-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          >
            <option value="">Select a type</option>
            <option value="promo">Promo,Teaser</option>
            <option value="social">Reels/Shorts</option>
            <option value="training">Tutorial,Youtube</option>
            <option value="other">Cinematic Videos</option>
          </select>
        </label>

        <label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">
          Email
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="reevio@email.com"
            className="mt-2 block w-full rounded-md border px-3 py-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          />
        </label>

        <label className="block text-sm text-slate-700 dark:text-slate-300 mb-4">
          Message
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your Video..."
            className="mt-2 block w-full rounded-md border px-3 py-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          />
        </label>

        <div className="flex items-center justify-between gap-4">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-95 disabled:opacity-60"
          >
            {loading ? "Submitting…" : "Submit"}
          </button>

        </div>
      </form>
    </div>
  )
}