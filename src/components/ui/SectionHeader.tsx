interface SectionHeaderProps {
  eyebrow: string
  title: string
  id?: string
  className?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeader({
  eyebrow,
  title,
  id,
  className = '',
  align = 'left',
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'
  const titleColor = light ? 'text-white' : 'text-navy'
  const eyebrowColor = light ? 'text-white/70' : 'text-accent'

  return (
    <div className={`${alignClass} ${className}`}>
      <p className={`type-label ${eyebrowColor}`}>{eyebrow}</p>
      <h2
        id={id}
        className={`mt-4 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-balance ${titleColor}`}
      >
        {title}
      </h2>
    </div>
  )
}
