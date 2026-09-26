import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'article'
}

export function Card({ children, className = '', as: Tag = 'div' }: CardProps) {
  return (
    <Tag
      className={`rounded-xl border border-border bg-white p-6 shadow-[0_1px_2px_rgba(14,26,20,0.04)] sm:p-8 ${className}`}
    >
      {children}
    </Tag>
  )
}
