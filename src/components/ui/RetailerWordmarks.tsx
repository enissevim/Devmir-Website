interface RetailerWordmarksProps {
  retailers: readonly string[]
  caption?: string
  panel?: boolean
  className?: string
}

export function RetailerWordmarks({
  retailers,
  caption,
  panel = false,
  className = '',
}: RetailerWordmarksProps) {
  const list = (
    <ul
      className={
        panel
          ? 'flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:justify-between sm:gap-x-4 lg:flex-nowrap'
          : 'grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8'
      }
    >
      {retailers.map((retailer) => (
        <li
          key={retailer}
          className={
            panel
              ? 'font-display text-sm font-semibold uppercase tracking-[0.14em] text-navy sm:text-base'
              : 'flex min-h-12 items-center justify-center text-center font-display text-sm font-semibold uppercase tracking-[0.14em] text-navy sm:text-base'
          }
        >
          {retailer}
        </li>
      ))}
    </ul>
  )

  if (panel) {
    return (
      <div className={`rounded-2xl bg-surface px-8 py-10 lg:px-10 ${className}`}>
        {list}
        {caption && (
          <p className="mt-5 text-center text-sm leading-relaxed text-muted">{caption}</p>
        )}
      </div>
    )
  }

  return (
    <div className={className}>
      {list}
      {caption && <p className="mt-8 text-center text-sm text-muted">{caption}</p>}
    </div>
  )
}
