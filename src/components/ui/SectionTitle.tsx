import type { ReactNode } from 'react'

interface SectionTitleProps {
  children: ReactNode
  id?: string
  eyebrow?: string
  className?: string
  light?: boolean
}

export function SectionTitle({
  children,
  id,
  eyebrow,
  className = '',
  light = false,
}: SectionTitleProps) {
  const textColor = light ? 'text-white' : 'text-navy'
  const eyebrowColor = light ? 'text-white/60' : 'text-accent'

  return (
    <div className={className}>
      {eyebrow && (
        <p className={`type-label mb-3 ${eyebrowColor}`}>{eyebrow}</p>
      )}
      <h2 id={id} className={`type-section ${textColor}`}>
        {children}
      </h2>
    </div>
  )
}
