import { homeContent } from '@/content/home'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { RetailerWordmarks } from '@/components/ui/RetailerWordmarks'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function RetailExperienceSection() {
  const { retailExperience } = homeContent

  return (
    <Section variant="surface" ariaLabelledby="retail-experience-heading">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionHeader
            id="retail-experience-heading"
            eyebrow={retailExperience.eyebrow}
            title={retailExperience.headline}
            align="center"
          />
          <p className="mt-6 type-body text-muted">{retailExperience.summary}</p>
        </Reveal>

        {/* TODO: swap text wordmarks for individual retailer logo files when available */}
        <Reveal className="mt-12 lg:mt-16" delay={0.06}>
          <RetailerWordmarks
            retailers={retailExperience.retailers}
            caption={retailExperience.caption}
          />
        </Reveal>
      </Container>
    </Section>
  )
}
