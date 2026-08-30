import { homeContent } from '@/content/home'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function OurJourneySection() {
  const { ourJourney } = homeContent

  return (
    <Section variant="surface" ariaLabelledby="our-journey-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="our-journey-heading"
            eyebrow={ourJourney.eyebrow}
            headline={ourJourney.headline}
          />
        </Reveal>

        <div className="mt-16 hidden lg:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-6 h-px bg-border" aria-hidden="true" />
            <div className="grid grid-cols-4 gap-8">
              {ourJourney.milestones.map((milestone, index) => (
                <Reveal key={milestone.title} delay={index * 0.1}>
                  <div className="relative pt-12">
                    <div
                      className="absolute left-0 top-4 h-4 w-4 rounded-full border-2 border-accent bg-surface"
                      aria-hidden="true"
                    />
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                      {milestone.period}
                    </p>
                    <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                      {milestone.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{milestone.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-0 lg:hidden">
          {ourJourney.milestones.map((milestone, index) => (
            <Reveal key={milestone.title} delay={index * 0.08}>
              <div className="relative border-l-2 border-accent/30 py-8 pl-8">
                <div
                  className="absolute -left-[5px] top-8 h-2 w-2 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  {milestone.period}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold text-navy">
                  {milestone.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{milestone.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
