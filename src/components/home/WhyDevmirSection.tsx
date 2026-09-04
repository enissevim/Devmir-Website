import { homeContent } from '@/content/home'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StatBlock } from '@/components/ui/StatBlock'

export function WhyDevmirSection() {
  const { whyDevmir } = homeContent

  return (
    <Section variant="white" ariaLabelledby="why-devmir-heading" className="pb-0">
      <Container>
        <Reveal>
          <SectionHeading
            id="why-devmir-heading"
            eyebrow={whyDevmir.eyebrow}
            headline={whyDevmir.headline}
            summary={whyDevmir.summary}
            align="center"
            className="max-w-2xl"
          />
        </Reveal>
      </Container>

      <Reveal className="mt-14 bg-surface">
        <Container className="py-12 sm:py-16">
          <StatBlock
            value={whyDevmir.stat.value}
            label={whyDevmir.stat.label}
            prominent
          />

          <div className="mt-14 grid gap-10 border-t border-green/10 pt-14 md:grid-cols-3 md:gap-8 lg:mt-16">
            {whyDevmir.proofPoints.map((point, index) => (
              <Reveal key={point.title} delay={index * 0.06}>
                <div>
                  <h3 className="font-display text-lg font-semibold text-navy">{point.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">{point.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Reveal>
    </Section>
  )
}
