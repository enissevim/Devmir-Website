import { homeContent } from '@/content/home'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function WhatWeDoSection() {
  const { whatWeDo } = homeContent

  return (
    <Section variant="surface" ariaLabelledby="what-we-do-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="what-we-do-heading"
            eyebrow={whatWeDo.eyebrow}
            headline={whatWeDo.headline}
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {whatWeDo.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="flex h-full flex-col border border-border bg-white p-8">
                <span className="inline-flex h-10 w-10 items-center justify-center bg-green-muted font-display text-sm font-bold text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-navy">{item.title}</h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <Button as="a" href={whatWeDo.link.href} variant="text">
            {whatWeDo.link.label} →
          </Button>
        </Reveal>
      </Container>
    </Section>
  )
}
