import { homeContent } from '@/content/home'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

export function OurBrandsSection() {
  const { ourBrands } = homeContent
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <Section variant="white" id="our-brands" ariaLabelledby="our-brands-heading" className="py-16 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            id="our-brands-heading"
            eyebrow={ourBrands.eyebrow}
            headline={ourBrands.headline}
            summary={ourBrands.summary}
            tone="story"
            className="max-w-none"
          />
        </Reveal>

        <div className="mt-14 space-y-16 lg:mt-16 lg:space-y-24">
          {ourBrands.brands.map((brand, index) => {
            const styles = brand.imageStyles

            return (
              <Reveal key={brand.name} delay={index * 0.08}>
                <div
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                    index % 2 === 1 ? 'lg:[direction:rtl]' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                    <a
                      href={brand.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    >
                      <div
                        className={`overflow-hidden border border-border border-t-4 ${styles.accent} ${styles.container}`}
                      >
                        <img
                          src={brand.image}
                          alt={brand.imageAlt}
                          className={`${styles.image} transition-transform duration-500 ${
                            prefersReducedMotion ? '' : 'group-hover:scale-[1.02]'
                          }`}
                          width={brand.imageWidth}
                          height={brand.imageHeight}
                          loading="lazy"
                          decoding="async"
                        />
                        <div
                          className={`${styles.overlay} pointer-events-none`}
                          aria-hidden="true"
                        />
                      </div>
                    </a>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                      {brand.tagline}
                    </p>
                    <h3 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.25rem)] font-semibold tracking-[-0.02em] text-navy">
                      {brand.name}
                    </h3>
                    <p className="mt-4 max-w-md text-base leading-relaxed text-muted">{brand.description}</p>
                    <div className="mt-8">
                      <Button as="a" href={brand.href} variant="text" external>
                        {brand.cta} →
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
