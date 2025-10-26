import React from 'react'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-foreground px-6 py-16">
      <div className="w-full max-w-xl mx-auto">
        <div className="rounded-2xl bg-card/80 dark:bg-slate-900/70 ring-1 ring-border/10 dark:ring-white/5 p-8 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 ring-1 ring-green-400/30">
              <svg className="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="flex-1">
              <h1 className="text-xl font-semibold text-slate-900 dark:text-white">
                Request submitted
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Thanks — your request has been received. Our team will review it and contact you shortly.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-95">
                  Go to Homepage
                </Link>
                <Link href="/work" className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted/5">
                  View Work
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-6 text-xs text-muted-foreground">
            <p>
              If you need urgent assistance, reply to the confirmation email or contact us directly via the form.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}