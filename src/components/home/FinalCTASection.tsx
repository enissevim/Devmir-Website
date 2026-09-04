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
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="final-cta-heading"
              className="font-display text-[clamp(2rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-[-0.02em] text-white"
            >
              {finalCta.headline}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75">{finalCta.subcopy}</p>
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
