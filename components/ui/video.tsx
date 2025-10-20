"use client"
import React from 'react'

type VideoPlayerProps = {
  src: string
  poster?: string
  title?: string
  className?: string
  controls?: boolean
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  playsInline?: boolean
  showBackdrop?: boolean
}

export default function VideoPlayer({
  src,
  poster,
  title = 'Video',
  className = '',
  controls = true,
  autoPlay = false,
  loop = false,
  muted = true,
  playsInline = true,
  showBackdrop = true,
}: VideoPlayerProps) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = React.useState(autoPlay)

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setIsPlaying(true)
    } else {
      v.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div className={`relative w-full ${className}`}>
      {/* Decorative blurred backdrop */}
      {showBackdrop && (
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-2xl bg-black/5 dark:bg-white/2">
          <video
            aria-hidden
            src={src}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      )}

      <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/5">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          title={title}
          controls={controls}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          className="w-full aspect-[16/9] h-auto object-cover bg-black"
        >
          Your browser does not support the video tag.
        </video>

        {/* Overlay with play/pause for touch devices / visual affordance */}
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white shadow-lg transition-opacity hover:scale-105 focus:outline-none"
        >
          <span className="sr-only">{isPlaying ? 'Pause' : 'Play'}</span>
          {isPlaying ? (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* bottom meta bar */}
        <div className="absolute left-0 right-0 bottom-0 px-4 py-2 bg-gradient-to-t from-white/70 to-transparent dark:from-slate-900/70">
          <div className="flex items-center justify-between text-xs text-slate-700 dark:text-slate-300">
            <span>{title}</span>
            <span>{loop ? 'Loop' : ''} {muted ? '· Muted' : ''}</span>
          </div>
        </div>
      </div>
    </div>
  )
}