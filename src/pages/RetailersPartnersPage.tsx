import { PageMeta } from '@/components/seo/PageMeta'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/ui/PageHero'
import { ProofBand } from '@/components/ui/ProofBand'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { retailersContent, retailersMeta } from '@/content/retailers-partners'

export function RetailersPartnersPage() {
  const content = retailersContent

  return (
    <>
      <PageMeta {...retailersMeta} />

      <PageHero
        eyebrow="Retailers & Partners"
        headline={content.hero.headline}
        subcopy={content.hero.subcopy}
      />

      <Section variant="surface">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Capabilities" headline="What we provide" />
          </Reveal>
          <div className="mt-12 grid gap-10 border-t border-border pt-12 md:grid-cols-3 md:gap-8">
            {content.coreAreas.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <h2 className="font-display text-xl font-semibold text-navy">{item.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="white">
        <Container>
          <Reveal>
            <SectionHeading headline={content.whyDevmir.headline} />
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {content.whyDevmir.points.map((point, index) => (
              <Reveal key={point.title} delay={index * 0.05}>
                <div className="border-t border-border pt-8">
                  <h2 className="font-display text-lg font-semibold text-navy">{point.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{point.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="surface" className="pb-0">
        <Container>
          <Reveal>
            <SectionHeading headline={content.marketplace.headline} />
            <p className="mt-6 font-display text-xs font-semibold uppercase tracking-[0.1em] text-muted sm:text-sm">
              {content.marketplace.retailers}
            </p>
          </Reveal>
        </Container>
        <Reveal className="mt-12 border-y border-border bg-white py-8 sm:py-12">
          <Container>
            <ProofBand
              image={content.marketplace.image}
              alt={content.marketplace.imageAlt}
              variant="prominent"
            />
          </Container>
        </Reveal>
      </Section>

      <Section variant="navy">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-[clamp(1.75rem,3vw,2.25rem)] font-semibold text-white">
                {content.cta.headline}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/75">{content.cta.subcopy}</p>
              <div className="mt-10">
                <Button
                  as="a"
                  href={content.cta.button.href}
                  variant="secondary"
                  className="border-white/20 bg-white text-navy hover:border-white hover:bg-white/90"
                >
                  {content.cta.button.label}
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
