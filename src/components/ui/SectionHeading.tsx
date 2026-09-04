interface SectionHeadingProps {
  eyebrow?: string
  headline: string
  summary?: string
  align?: 'left' | 'center'
  light?: boolean
  id?: string
  className?: string
}

export function SectionHeading({
  eyebrow,
  headline,
  summary,
  align = 'left',
  light = false,
  id,
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const textColor = light ? 'text-white' : 'text-navy'
  const summaryColor = light ? 'text-white/75' : 'text-muted'
  const eyebrowColor = light ? 'text-white/60' : 'text-accent'

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p
          className={`mb-4 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] ${eyebrowColor}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`font-display text-[clamp(1.875rem,3vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] ${textColor}`}
      >
        {headline}
      </h2>
      {summary && (
        <p className={`mt-5 text-lg leading-relaxed ${summaryColor}`}>{summary}</p>
      )}
    </div>
  )
}
