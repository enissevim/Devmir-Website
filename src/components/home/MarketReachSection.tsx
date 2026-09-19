import { homeContent } from '@/content/home'
import { Container } from '@/components/ui/Container'
import { ProofBand } from '@/components/ui/ProofBand'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function MarketReachSection() {
  const { marketReach } = homeContent

  return (
    <Section variant="surface" ariaLabelledby="market-reach-heading" className="pt-16 pb-0 lg:pt-28 lg:pb-0">
      <Container>
        <Reveal>
          <SectionHeading
            id="market-reach-heading"
            eyebrow={marketReach.eyebrow}
            headline={marketReach.headline}
            summary={marketReach.summary}
            tone="story"
            className="max-w-none"
          />
        </Reveal>
      </Container>

      <Reveal className="mt-14 lg:mt-16">
        <div className="border-y border-border bg-white py-10 sm:py-14">
          <Container>
            <SectionHeading
              eyebrow={marketReach.brandsPartners.eyebrow}
              headline={marketReach.brandsPartners.headline}
              tone="story"
              className="max-w-none"
            />
            <div className="mt-8 lg:mt-10">
              <ProofBand
                image={marketReach.brandsPartners.image}
                alt={marketReach.brandsPartners.imageAlt}
                variant="prominent"
                imageWidth={marketReach.brandsPartners.imageWidth}
                imageHeight={marketReach.brandsPartners.imageHeight}
              />
            </div>
            <div className="mt-10 sm:mt-14">
              <ProofBand
                image={marketReach.platforms.image}
                alt={marketReach.platforms.imageAlt}
                variant="prominent"
                imageWidth={marketReach.platforms.imageWidth}
                imageHeight={marketReach.platforms.imageHeight}
              />
            </div>
          </Container>
        </div>
      </Reveal>

    </Section>
  )
}
