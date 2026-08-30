interface StatBlockProps {
  value: string
  label: string
  light?: boolean
  className?: string
  prominent?: boolean
}

export function StatBlock({
  value,
  label,
  light = false,
  className = '',
  prominent = false,
}: StatBlockProps) {
  return (
    <div
      className={`text-center ${prominent ? 'border-y border-border py-12 sm:py-16' : ''} ${className}`}
    >
      <p
        className={`font-display font-bold leading-none tracking-[-0.04em] tabular-nums ${
          prominent
            ? 'text-[clamp(4rem,10vw,6.5rem)]'
            : 'text-[clamp(3rem,6vw,5rem)]'
        } ${light ? 'text-white' : 'text-navy'}`}
      >
        {value}
      </p>
      <p
        className={`mx-auto mt-5 max-w-xs text-sm font-medium uppercase tracking-[0.14em] ${
          light ? 'text-white/70' : 'text-muted'
        }`}
      >
        {label}
      </p>
    </div>
  )
}
