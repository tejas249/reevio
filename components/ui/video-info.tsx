import React from 'react'
import Link from 'next/link'

type VideoInfoProps = {
  title?: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
  className?: string
}

export default function VideoInfo({
  title = 'Real Estate — Project Showcase',
  description = `This is real estate video editing work done by Reevio for a client. From raw footage to a polished, engaging video that captures attention and drives results.`,
  ctaLabel = 'Watch Video',
  ctaHref = '#video',
  className = '',
}: VideoInfoProps) {
  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-slate-900 dark:text-white">
        {title}
      </h1>

      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-lg">
        {description}
      </p>

      <div className="flex flex-wrap gap-3">
        <Link
          href={ctaHref}
          className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-95 transition"
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  )
}