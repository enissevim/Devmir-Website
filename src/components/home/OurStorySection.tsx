import { homeContent } from '@/content/home'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function OurStorySection() {
  const { ourStory } = homeContent

  return (
    <Section variant="white" ariaLabelledby="our-story-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <SectionHeading
              id="our-story-heading"
              eyebrow={ourStory.eyebrow}
              headline={ourStory.headline}
            />
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.12em] text-accent">
              {ourStory.founded}
            </p>
          </Reveal>

          <Reveal className="lg:col-span-8" delay={0.1}>
            <div className="max-w-2xl space-y-6">
              {ourStory.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-10">
              <Button as="a" href={ourStory.link.href} variant="text">
                {ourStory.link.label} →
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
