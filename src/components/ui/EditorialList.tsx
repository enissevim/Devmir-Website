export interface EditorialListItem {
  title: string
  description: string
}

interface EditorialListProps {
  items: EditorialListItem[]
  id?: string
}

export function EditorialList({ items, id }: EditorialListProps) {
  return (
    <div id={id} className="divide-y divide-border">
      {items.map((item) => (
        <article key={item.title} className="py-10 first:pt-0 last:pb-0">
          <h3 className="type-label text-navy">{item.title}</h3>
          <p className="measure-prose mt-4 text-base leading-relaxed text-muted">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  )
}
