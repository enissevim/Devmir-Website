import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface CapabilityStripProps {
  items: readonly string[]
}

function MarqueeSegment({ items, ariaHidden }: { items: readonly string[]; ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden || undefined}>
      {items.map((item, index) => (
        <span key={`${item}-${index}`} className="flex items-center type-label text-muted">
          <span className="px-4 sm:px-6">{item}</span>
          <span className="text-border" aria-hidden="true">
            ·
          </span>
        </span>
      ))}
    </div>
  )
}

export function CapabilityStrip({ items }: CapabilityStripProps) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const label = items.join(' · ')

  if (prefersReducedMotion) {
    return (
      <div className="border-y border-border bg-surface">
        <p className="mx-auto max-w-[1200px] px-6 py-4 text-center type-label text-muted lg:px-8">
          {label}
        </p>
      </div>
    )
  }

  // Two identical tracks; each track repeats once so wide viewports stay filled.
  // Animation shifts by exactly one track (-50%) for a seamless loop.
  const trackItems = [...items, ...items]

  return (
    <div className="overflow-hidden border-y border-border bg-surface" aria-label={label}>
      <div className="flex w-max animate-capability-marquee py-4">
        <MarqueeSegment items={trackItems} />
        <MarqueeSegment items={trackItems} ariaHidden />
      </div>
    </div>
  )
}
