import type { ReactNode } from 'react'

type SectionVariant = 'white' | 'surface' | 'navy'

interface SectionProps {
  children: ReactNode
  className?: string
  variant?: SectionVariant
  id?: string
  ariaLabelledby?: string
}

const variantClasses: Record<SectionVariant, string> = {
  white: 'bg-white',
  surface: 'bg-surface',
  navy: 'bg-navy text-white',
}

export function Section({
  children,
  className = '',
  variant = 'white',
  id,
  ariaLabelledby,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`py-14 lg:py-24 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </section>
  )
}
