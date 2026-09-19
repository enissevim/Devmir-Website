import type { ReactNode } from 'react'

interface StoryHeadlineProps {
  children: ReactNode
  id?: string
  className?: string
  as?: 'h1' | 'h2' | 'h3'
}

export function StoryHeadline({
  children,
  id,
  className = '',
  as: Tag = 'h2',
}: StoryHeadlineProps) {
  return (
    <Tag
      id={id}
      className={`font-story text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.01em] text-navy text-balance ${className}`}
    >
      {children}
    </Tag>
  )
}
