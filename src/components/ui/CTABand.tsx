import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'

interface CTABandProps {
  headline: string
  line: string
  cta: { label: string; href: string }
  headingId?: string
}

export function CTABand({
  headline,
  line,
  cta,
  headingId = 'cta-band-heading',
}: CTABandProps) {
  return (
    <Section variant="accent" ariaLabelledby={headingId}>
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id={headingId}
              className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-white text-balance"
            >
              {headline}
            </h2>
            <p className="mt-6 type-body text-white/80">{line}</p>
            <div className="mt-10 flex justify-center">
              <Button as="a" href={cta.href} variant="outline-light">
                {cta.label}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
