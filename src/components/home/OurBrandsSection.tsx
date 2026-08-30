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
    <Section variant="white" id="our-brands" ariaLabelledby="our-brands-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="our-brands-heading"
            eyebrow={ourBrands.eyebrow}
            headline={ourBrands.headline}
            summary={ourBrands.summary}
          />
        </Reveal>

        <div className="mt-14 space-y-16 lg:mt-16 lg:space-y-24">
          {ourBrands.brands.map((brand, index) => {
            const isLogo = brand.name === 'Wear Sierra'

            return (
              <Reveal key={brand.name} delay={index * 0.08}>
                <div
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                    index % 2 === 1 ? 'lg:[direction:rtl]' : ''
                  }`}
                >
                  <div className={`${index % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                    <a
                      href={brand.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    >
                      <div
                        className={`overflow-hidden border border-border bg-surface ${
                          isLogo ? 'flex min-h-[220px] items-center justify-center p-10 sm:min-h-[280px] sm:p-14' : ''
                        }`}
                      >
                        <img
                          src={brand.image}
                          alt={brand.imageAlt}
                          className={`w-full transition-transform duration-500 ${
                            isLogo
                              ? 'max-h-32 object-contain sm:max-h-40'
                              : `aspect-[16/10] object-cover ${prefersReducedMotion ? '' : 'group-hover:scale-[1.02]'}`
                          }`}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </a>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                      Devmir brand
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
