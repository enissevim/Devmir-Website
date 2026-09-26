import { PageMeta } from '@/components/seo/PageMeta'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { CTABand } from '@/components/ui/CTABand'
import { Reveal } from '@/components/ui/Reveal'
import { RetailerWordmarks } from '@/components/ui/RetailerWordmarks'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SplitPageHero } from '@/components/ui/SplitPageHero'
import { retailersContent, retailersMeta } from '@/content/retailers-partners'

export function RetailersPartnersPage() {
  const content = retailersContent

  return (
    <>
      <PageMeta {...retailersMeta} />

      <SplitPageHero
        eyebrow={content.hero.eyebrow}
        headline={content.hero.headline}
        paragraph={content.hero.paragraph}
        primaryCta={content.hero.primaryCta}
        secondaryCta={content.hero.secondaryCta}
        image={content.hero.image}
        imageAlt={content.hero.imageAlt}
        imageWidth={content.hero.imageWidth}
        imageHeight={content.hero.imageHeight}
        headingId="retailers-hero-heading"
      />

      <Section variant="white" id="what-we-offer" ariaLabelledby="what-we-offer-heading">
        <Container>
          <Reveal>
            <div className="max-w-[720px]">
              <SectionHeader
                id="what-we-offer-heading"
                eyebrow={content.whatWeOffer.eyebrow}
                title={content.whatWeOffer.headline}
              />
              <p className="mt-5 type-body text-muted">{content.whatWeOffer.intro}</p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8">
            {content.whatWeOffer.services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.1}>
                <Card
                  as="article"
                  className="h-full rounded-2xl p-9 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(14,26,20,0.08)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <span className="mb-4 block h-0.5 w-8 bg-accent" aria-hidden="true" />
                  <h3 className="font-display text-[22px] font-bold tracking-tight text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-base leading-[1.6] text-muted">
                    {service.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="surface" ariaLabelledby="why-devmir-retailers-heading">
        <Container>
          <Reveal className="mx-auto max-w-[760px] text-center">
            <SectionHeader
              id="why-devmir-retailers-heading"
              eyebrow={content.whyDevmir.eyebrow}
              title={content.whyDevmir.headline}
              align="center"
            />
            <p className="mt-4 text-lg font-medium leading-[1.6] text-navy sm:text-xl">
              {content.whyDevmir.lead}
            </p>
          </Reveal>

          <Reveal className="mt-16" delay={0.1}>
            <ul className="grid divide-y divide-border lg:grid-cols-3 lg:divide-x lg:divide-y-0">
              {content.whyDevmir.points.map((point, index) => (
                <li
                  key={point.title}
                  className={`py-7 lg:py-0 lg:px-10 ${
                    index === 0 ? 'lg:pl-0' : ''
                  } ${index === content.whyDevmir.points.length - 1 ? 'lg:pr-0' : ''}`}
                >
                  <h3 className="font-display text-xl font-bold tracking-tight text-navy">
                    {point.title}
                  </h3>
                  <p className="mt-2.5 text-base leading-[1.6] text-muted">
                    {point.description}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      <Section variant="white" ariaLabelledby="active-market-heading">
        <Container>
          <Reveal className="mx-auto max-w-[720px] text-center">
            <SectionHeader
              id="active-market-heading"
              eyebrow={content.activeInMarket.eyebrow}
              title={content.activeInMarket.headline}
              align="center"
            />
            <p className="mt-5 type-body text-muted">{content.activeInMarket.paragraph}</p>
          </Reveal>

          <Reveal className="mt-12" delay={0.1}>
            <RetailerWordmarks
              retailers={content.activeInMarket.retailers}
              caption={content.activeInMarket.caption}
              panel
            />
          </Reveal>
        </Container>
      </Section>

      <CTABand
        headline={content.cta.headline}
        line={content.cta.line}
        cta={content.cta.cta}
        headingId="retailers-cta-heading"
      />
    </>
  )
}
