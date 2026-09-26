import type { ReactNode } from 'react'

interface SplitSectionProps {
  content: ReactNode
  media: ReactNode
  reverse?: boolean
  className?: string
}

export function SplitSection({ content, media, reverse = false, className = '' }: SplitSectionProps) {
  return (
    <div
      className={`grid items-center gap-12 lg:grid-cols-12 lg:gap-16 ${className} ${
        reverse ? 'lg:[direction:rtl]' : ''
      }`}
    >
      <div className={`lg:col-span-6 ${reverse ? 'lg:[direction:ltr]' : ''}`}>{content}</div>
      <div className={`lg:col-span-6 ${reverse ? 'lg:[direction:ltr]' : ''}`}>{media}</div>
    </div>
  )
}

interface SplitMediaImageProps {
  src: string
  alt: string
  width?: number
  height?: number
}

export function SplitMediaImage({ src, alt, width, height }: SplitMediaImageProps) {
  return (
    <figure className="overflow-hidden bg-surface">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-full min-h-[280px] w-full object-cover object-center lg:min-h-[360px]"
        loading="lazy"
        decoding="async"
      />
    </figure>
  )
}
