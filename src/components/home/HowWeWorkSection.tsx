import { homeContent } from '@/content/home'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function HowWeWorkSection() {
  const { howWeWork } = homeContent

  return (
    <Section variant="surface" ariaLabelledby="how-we-work-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="how-we-work-heading"
            eyebrow={howWeWork.eyebrow}
            headline={howWeWork.headline}
          />
        </Reveal>

        <div className="mt-14 lg:mt-16">
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-0">
            {howWeWork.steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.06}>
                <div className="px-8 first:pl-0 last:pr-0">
                  <p className="font-display text-[3.5rem] font-bold leading-none tracking-[-0.04em] text-navy/10">
                    {step.number}
                  </p>
                  <h3 className="mt-5 font-display text-xl font-semibold text-navy">{step.title}</h3>
                  <p className="mt-3 max-w-xs text-base leading-relaxed text-muted">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="space-y-0 lg:hidden">
            {howWeWork.steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.05}>
                <div className="relative border-l-2 border-navy/15 py-7 pl-8">
                  <p className="absolute -left-4 top-7 flex h-8 w-8 items-center justify-center bg-surface font-display text-xs font-bold text-navy">
                    {step.number}
                  </p>
                  <h3 className="font-display text-lg font-semibold text-navy">{step.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
