import { homeContent } from '@/content/home'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Rule } from '@/components/ui/Rule'
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

        <div className="mt-16 grid gap-0 md:grid-cols-3">
          {whatWeDo.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} className="relative">
              <div className="flex h-full flex-col px-0 py-8 md:px-8 md:py-0">
                {index > 0 && (
                  <Rule
                    orientation="vertical"
                    className="absolute -left-px top-0 hidden h-full md:block"
                  />
                )}
                {index > 0 && <Rule className="mb-8 md:hidden" />}
                <h3 className="font-display text-xl font-semibold text-navy">{item.title}</h3>
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
