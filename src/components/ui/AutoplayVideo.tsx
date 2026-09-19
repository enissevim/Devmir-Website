import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface AutoplayVideoProps {
  src: string
  className?: string
}

export function AutoplayVideo({ src, className = '' }: AutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const video = videoRef.current
    if (!video || prefersReducedMotion) return

    video.muted = true
    const playPromise = video.play()
    if (playPromise) {
      void playPromise.catch(() => {})
    }
  }, [prefersReducedMotion, src])

  if (prefersReducedMotion) return null

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
      className={className}
    />
  )
}
