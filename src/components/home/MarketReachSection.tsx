import { homeContent } from '@/content/home'
import { Container } from '@/components/ui/Container'
import { ProofBand } from '@/components/ui/ProofBand'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function MarketReachSection() {
  const { marketReach } = homeContent

  return (
    <Section variant="surface" ariaLabelledby="market-reach-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="market-reach-heading"
            eyebrow={marketReach.eyebrow}
            headline={marketReach.headline}
            summary={marketReach.summary}
          />
        </Reveal>
      </Container>

      <Reveal className="mt-14 lg:mt-16">
        <div className="border-y border-border bg-white py-8 sm:py-12">
          <Container>
            <ProofBand
              image={marketReach.image}
              alt={marketReach.imageAlt}
              caption="Active across major U.S. retail and e-commerce channels"
              variant="prominent"
            />
          </Container>
        </div>
      </Reveal>

      <Container>
        <div className="mt-14 grid gap-10 border-t border-border pt-14 md:grid-cols-3 md:gap-8 lg:mt-16 lg:pt-16">
          {marketReach.areas.map((area, index) => (
            <Reveal key={area.title} delay={index * 0.05}>
              <h3 className="font-display text-lg font-semibold text-navy">{area.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted">{area.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
