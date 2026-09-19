import { homeContent } from '@/content/home'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'

export function FinalCTASection() {
  const { finalCta } = homeContent

  return (
    <Section variant="navy" ariaLabelledby="final-cta-heading">
      <Container>
        <Reveal>
          <div className="text-center">
            <h2
              id="final-cta-heading"
              className="whitespace-pre-line font-display text-[clamp(1.375rem,2.25vw,1.75rem)] font-semibold leading-tight tracking-[-0.02em] text-white"
            >
              {finalCta.subcopy}
            </h2>
            <div className="mt-10">
              <Button as="a" href={finalCta.cta.href} variant="primary-outline">
                {finalCta.cta.label}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
