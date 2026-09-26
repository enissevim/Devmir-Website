interface BrandCardProps {
  name: string
  subline: string
  channels: readonly string[]
  image: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
  href: string
  cta: string
}

export function BrandCard({
  name,
  subline,
  channels,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  href,
  cta,
}: BrandCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white shadow-[0_1px_2px_rgba(14,26,20,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(14,26,20,0.08)]">
      <div className="flex aspect-[16/10] w-full items-center justify-center border-b border-border bg-white p-6 lg:aspect-[16/9] lg:p-8">
        <img
          src={image}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="h-full w-full object-contain object-center"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="font-display text-xl font-semibold text-navy">{name}</h3>
        <p className="mt-2 text-base leading-relaxed text-muted">{subline}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {channels.map((channel) => (
            <li
              key={channel}
              className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted"
            >
              {channel}
            </li>
          ))}
        </ul>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex text-sm font-medium text-accent underline-offset-4 transition-colors hover:text-accent-hover hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          {cta} →
        </a>
      </div>
    </article>
  )
}
