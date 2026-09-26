import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { RevealOnLoad } from '@/components/ui/Reveal'

interface HeroCta {
  label: string
  href: string
}

interface SplitPageHeroProps {
  eyebrow: string
  headline: string
  paragraph: string
  primaryCta: HeroCta
  secondaryCta?: HeroCta
  image?: string
  imageAlt?: string
  imageWidth?: number
  imageHeight?: number
  headingId: string
}

export function SplitPageHero({
  eyebrow,
  headline,
  paragraph,
  primaryCta,
  secondaryCta,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  headingId,
}: SplitPageHeroProps) {
  const hasImage = Boolean(image && imageAlt)

  return (
    <section
      className="border-b border-green/10 bg-white py-[4.5rem] lg:py-28"
      aria-labelledby={headingId}
    >
      <Container>
        <RevealOnLoad>
          <div
            className={
              hasImage
                ? 'grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16'
                : 'mx-auto max-w-3xl text-center'
            }
          >
            <div>
              <p className="type-label text-accent">{eyebrow}</p>
              <h1
                id={headingId}
                className="mt-6 font-display text-[clamp(2.75rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-navy text-balance"
              >
                {headline}
              </h1>
              <p
                className={`mt-8 type-body text-muted ${
                  hasImage ? 'max-w-[580px]' : 'mx-auto max-w-[580px]'
                }`}
              >
                {paragraph}
              </p>
              <div
                className={`mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap ${
                  hasImage ? '' : 'justify-center'
                }`}
              >
                <Button as="a" href={primaryCta.href} variant="primary">
                  {primaryCta.label}
                </Button>
                {secondaryCta && (
                  <Button as="a" href={secondaryCta.href} variant="secondary">
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            </div>

            {hasImage && (
              <div className="overflow-hidden rounded-2xl bg-surface">
                <img
                  src={image}
                  alt={imageAlt}
                  width={imageWidth}
                  height={imageHeight}
                  className="h-full min-h-[280px] w-full object-cover object-center lg:min-h-[420px]"
                  loading="eager"
                  decoding="async"
                />
              </div>
            )}
          </div>
        </RevealOnLoad>
      </Container>
    </section>
  )
}
