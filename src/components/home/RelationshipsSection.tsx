import { homeContent } from '@/content/home'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function RelationshipsSection() {
  const { relationships } = homeContent

  return (
    <Section variant="ivory" ariaLabelledby="relationships-heading" className="py-16 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            id="relationships-heading"
            eyebrow={relationships.eyebrow}
            headline={relationships.headline}
            summary={relationships.summary}
            tone="story"
            className="max-w-none"
          />
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:gap-10">
          {relationships.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <div className="h-full border border-border bg-white p-8">
                <h3 className="font-display text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
