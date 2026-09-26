import type { ReactNode } from 'react'

interface EditorialStatementProps {
  lines: readonly string[]
  id?: string
  className?: string
  light?: boolean
  size?: 'xl' | 'lg'
}

export function EditorialStatement({
  lines,
  id,
  className = '',
  light = false,
  size = 'xl',
}: EditorialStatementProps) {
  const sizeClass = size === 'xl' ? 'type-story-xl' : 'type-story-lg'
  const colorClass = light ? 'text-white' : 'text-navy'

  return (
    <div id={id} className={`${sizeClass} ${colorClass} ${className}`}>
      {lines.map((line) => (
        <p key={line} className="uppercase">
          {line}
        </p>
      ))}
    </div>
  )
}

interface EditorialLabelRowProps {
  items: readonly string[]
  className?: string
  light?: boolean
}

export function EditorialLabelRow({ items, className = '', light = false }: EditorialLabelRowProps) {
  const labelClass = `type-label leading-relaxed ${light ? 'text-white/70' : 'text-muted'}`

  return (
    <p className={`${labelClass} ${className}`} role="list">
      {items.map((item, index) => (
        <span key={item} role="listitem" className="inline-block">
          {index > 0 && (
            <span className="mx-4 lg:mx-5" aria-hidden="true">
              ·
            </span>
          )}
          {item}
        </span>
      ))}
    </p>
  )
}

interface EditorialStatementBlockProps {
  children: ReactNode
  className?: string
}

export function EditorialStatementBlock({ children, className = '' }: EditorialStatementBlockProps) {
  return <div className={`max-w-4xl ${className}`}>{children}</div>
}
