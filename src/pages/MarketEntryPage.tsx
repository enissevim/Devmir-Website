import { PageMeta } from '@/components/seo/PageMeta'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/ui/PageHero'
import { ProofBand } from '@/components/ui/ProofBand'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { marketEntryContent, marketEntryMeta } from '@/content/market-entry'

export function MarketEntryPage() {
  const content = marketEntryContent

  return (
    <>
      <PageMeta {...marketEntryMeta} />

      <PageHero
        eyebrow="U.S. Market Entry"
        headline={content.hero.headline}
        subcopy={content.hero.subcopy}
      />

      <Section variant="surface">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Capabilities" headline="Core capabilities" />
          </Reveal>
          <div className="mt-12 grid gap-10 border-t border-border pt-12 md:grid-cols-3 md:gap-8">
            {content.coreCapabilities.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <h2 className="font-display text-xl font-semibold text-navy">{item.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="white">
        <Container>
          <Reveal>
            <SectionHeading headline="Additional capabilities" />
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {content.additionalCapabilities.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="border-t border-border pt-8">
                  <h2 className="font-display text-lg font-semibold text-navy">{item.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading headline={content.whoIsThisFor.headline} />
              <ul className="mt-8 space-y-4">
                {content.whoIsThisFor.audiences.map((audience) => (
                  <li
                    key={audience}
                    className="border-l-2 border-accent pl-5 font-display text-lg font-semibold text-navy"
                  >
                    {audience}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.08}>
              <SectionHeading headline={content.whyDevmir.headline} />
              <div className="mt-8 space-y-7">
                {content.whyDevmir.points.map((point) => (
                  <div key={point.title} className="border-t border-border pt-6 first:border-t-0 first:pt-0">
                    <h3 className="font-display text-base font-semibold text-navy">{point.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{point.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section variant="white" className="pb-0">
        <Container>
          <Reveal>
            <SectionHeading headline={content.proof.headline} />
          </Reveal>
        </Container>
        <Reveal className="mt-12 border-y border-border bg-surface py-8 sm:py-12">
          <Container>
            <ProofBand image={content.proof.image} alt={content.proof.imageAlt} variant="prominent" />
          </Container>
        </Reveal>
      </Section>

      <Section variant="navy">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-[clamp(1.75rem,3vw,2.25rem)] font-semibold text-white">
                {content.cta.headline}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/75">{content.cta.subcopy}</p>
              <div className="mt-10">
                <Button
                  as="a"
                  href={content.cta.button.href}
                  variant="secondary"
                  className="border-white/20 bg-white text-navy hover:border-white hover:bg-white/90"
                >
                  {content.cta.button.label}
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
