export interface NumberedListItem {
  number: string
  title: string
  description: string
}

interface NumberedListProps {
  items: NumberedListItem[]
  id?: string
  emphasizeLast?: boolean
}

export function NumberedList({ items, id, emphasizeLast = false }: NumberedListProps) {
  return (
    <div id={id} className="divide-y divide-border">
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        const emphasized = emphasizeLast && isLast

        return (
          <article
            key={item.number}
            className={`grid gap-4 py-10 first:pt-0 last:pb-0 sm:grid-cols-[4rem_1fr] sm:gap-x-10 lg:gap-x-14 ${
              emphasized ? 'pb-12' : ''
            }`}
          >
            <p
              className="font-display text-2xl font-bold leading-none text-green/25 sm:pt-1"
              aria-hidden="true"
            >
              {item.number}
            </p>
            <div>
              <h3
                className={`type-label text-navy ${emphasized ? 'text-accent' : ''}`}
              >
                {item.title}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          </article>
        )
      })}
    </div>
  )
}
