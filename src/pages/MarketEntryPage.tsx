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
        image={content.hero.image}
        imageAlt={content.hero.imageAlt}
        imageWidth={content.hero.imageWidth}
        imageHeight={content.hero.imageHeight}
      />

      <Section variant="surface">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={content.whatWeProvide.eyebrow}
              headline={content.whatWeProvide.headline}
            />
          </Reveal>
          <div className="mt-12 grid gap-10 border-t border-border pt-12 md:grid-cols-3 md:gap-8">
            {content.whatWeProvide.items.map((item, index) => (
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
            <SectionHeading
              eyebrow={content.howWeSupport.eyebrow}
              headline={content.howWeSupport.headline}
              summary={content.howWeSupport.intro}
            />
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {content.howWeSupport.items.map((item, index) => (
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
          <Reveal>
            <SectionHeading
              eyebrow={content.whoIsThisFor.eyebrow}
              headline={content.whoIsThisFor.headline}
              summary={content.whoIsThisFor.intro}
            />
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {content.whoIsThisFor.audiences.map((audience, index) => (
              <Reveal key={audience.title} delay={index * 0.05}>
                <div className="border-t border-border pt-8">
                  <h2 className="font-display text-lg font-semibold text-navy">{audience.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted">{audience.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="white">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={content.whyDevmir.eyebrow}
              headline={content.whyDevmir.headline}
              summary={content.whyDevmir.intro}
            />
          </Reveal>
          <div className="mt-12 space-y-8">
            {content.whyDevmir.points.map((point, index) => (
              <Reveal key={point.title} delay={index * 0.05}>
                <div
                  className={`border-t border-border pt-8 ${
                    'featured' in point && point.featured
                      ? 'bg-surface -mx-5 px-5 sm:-mx-8 sm:px-8 md:mx-0 md:px-8 md:py-8'
                      : ''
                  }`}
                >
                  <h2 className="font-display text-lg font-semibold text-navy">{point.title}</h2>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted">{point.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="surface" className="pb-0">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={content.proof.eyebrow}
              headline={content.proof.headline}
              summary={content.proof.summary}
            />
          </Reveal>
        </Container>
        <Reveal className="mt-12 border-y border-border bg-white py-8 sm:py-12">
          <Container>
            <ProofBand
              image={content.proof.image}
              alt={content.proof.imageAlt}
              caption={content.proof.caption}
              variant="prominent"
            />
            <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-muted">
              {content.proof.disclaimer}
            </p>
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
