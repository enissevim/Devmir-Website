import type { ReactNode } from 'react'
import { Container } from '@/components/ui/Container'
import { RevealOnLoad } from '@/components/ui/Reveal'

interface PageHeroProps {
  eyebrow: string
  headline: string
  subcopy: string
  children?: ReactNode
  image?: string
  imageAlt?: string
  imageWidth?: number
  imageHeight?: number
}

export function PageHero({
  eyebrow,
  headline,
  subcopy,
  children,
  image,
  imageAlt,
  imageWidth = 1536,
  imageHeight = 1024,
}: PageHeroProps) {
  return (
    <section className="border-b border-green/10 bg-white">
      <Container className="py-14 lg:py-20">
        <RevealOnLoad>
          <div className={image ? 'grid items-center gap-10 lg:grid-cols-12 lg:gap-16' : ''}>
            <div className={image ? 'lg:col-span-6' : 'max-w-3xl'}>
              <p className="mb-4 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-accent">
                {eyebrow}
              </p>
              <h1 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] font-bold leading-[1.06] tracking-[-0.025em] text-navy text-balance">
                {headline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{subcopy}</p>
              {children && <div className="mt-8">{children}</div>}
            </div>

            {image && imageAlt && (
              <div className="lg:col-span-6">
                <div className="overflow-hidden border border-border bg-surface">
                  <img
                    src={image}
                    alt={imageAlt}
                    className="h-full min-h-[240px] w-full object-contain object-center sm:min-h-[320px]"
                    width={imageWidth}
                    height={imageHeight}
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>
            )}
          </div>
        </RevealOnLoad>
      </Container>
    </section>
  )
}
