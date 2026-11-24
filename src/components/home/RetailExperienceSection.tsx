import platformsImage from '@/assets/images/platforms-for-devmir.webp'
import { homeContent } from '@/content/home'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
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

        <Reveal className="mt-12 lg:mt-16" delay={0.06}>
          <img
            src={platformsImage}
            alt="U.S. retail and marketplace presence: Kohl's, Target, JCPenney, Amazon, Walmart, private label, and more."
            width={1600}
            height={900}
            className="mx-auto w-full max-w-5xl"
            loading="lazy"
            decoding="async"
          />
        </Reveal>
      </Container>
    </Section>
  )
}
