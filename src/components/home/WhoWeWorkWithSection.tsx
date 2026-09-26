import { homeContent } from '@/content/home'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function WhoWeWorkWithSection() {
  const { whoWeWorkWith } = homeContent

  return (
    <Section variant="white" ariaLabelledby="who-we-work-with-heading">
      <Container>
        <Reveal>
          <SectionHeader
            id="who-we-work-with-heading"
            eyebrow={whoWeWorkWith.eyebrow}
            title={whoWeWorkWith.headline}
          />
          <p className="measure-prose mt-6 type-body text-muted">{whoWeWorkWith.intro}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {whoWeWorkWith.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <Card as="article" className="h-full">
                <h3 className="font-display text-[28px] font-bold tracking-[-0.01em] text-navy lg:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-muted sm:text-base">
                  {item.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
