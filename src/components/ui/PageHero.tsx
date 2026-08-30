import type { ReactNode } from 'react'
import { Container } from '@/components/ui/Container'
import { RevealOnLoad } from '@/components/ui/Reveal'

interface PageHeroProps {
  eyebrow: string
  headline: string
  subcopy: string
  children?: ReactNode
}

export function PageHero({ eyebrow, headline, subcopy, children }: PageHeroProps) {
  return (
    <section className="border-b border-border bg-white">
      <Container className="py-14 lg:py-20">
        <RevealOnLoad>
          <div className="max-w-3xl">
            <p className="mb-4 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-accent">
              {eyebrow}
            </p>
            <h1 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] font-bold leading-[1.06] tracking-[-0.025em] text-navy text-balance">
              {headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{subcopy}</p>
            {children}
          </div>
        </RevealOnLoad>
      </Container>
    </section>
  )
}
