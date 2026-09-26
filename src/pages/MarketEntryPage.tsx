import { motion } from 'motion/react'
import { PageMeta } from '@/components/seo/PageMeta'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { CTABand } from '@/components/ui/CTABand'
import { Reveal } from '@/components/ui/Reveal'
import { RetailerWordmarks } from '@/components/ui/RetailerWordmarks'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SplitPageHero } from '@/components/ui/SplitPageHero'
import { marketEntryContent, marketEntryMeta } from '@/content/market-entry'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

function HelpStage({
  number,
  title,
  description,
  delay,
}: {
  number: string
  title: string
  description: string
  delay: number
}) {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <Reveal delay={delay}>
      <article className="relative border-l-2 border-border pl-5 sm:border-l-0 sm:border-t-2 sm:pl-0 sm:pt-5">
        {!prefersReducedMotion && (
          <motion.span
            className="absolute left-0 top-0 hidden h-0.5 origin-left bg-accent sm:block"
            style={{ width: '100%' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          />
        )}
        {prefersReducedMotion && (
          <span
            className="absolute left-0 top-0 hidden h-0.5 w-full bg-accent sm:block"
            aria-hidden="true"
          />
        )}
        <p className="text-sm font-semibold tracking-[0.08em] text-accent">{number}</p>
        <h3 className="mt-2 font-display text-[22px] font-bold tracking-tight text-navy">
          {title}
        </h3>
        <p className="mt-2.5 text-base leading-[1.6] text-muted">{description}</p>
      </article>
    </Reveal>
  )
}

export function MarketEntryPage() {
  const content = marketEntryContent

  return (
    <>
      <PageMeta {...marketEntryMeta} />

      <SplitPageHero
        eyebrow={content.hero.eyebrow}
        headline={content.hero.headline}
        paragraph={content.hero.paragraph}
        primaryCta={content.hero.primaryCta}
        secondaryCta={content.hero.secondaryCta}
        image={content.hero.image}
        imageAlt={content.hero.imageAlt}
        imageWidth={content.hero.imageWidth}
        imageHeight={content.hero.imageHeight}
        headingId="market-entry-hero-heading"
      />

      <Section variant="white" id="how-we-help" ariaLabelledby="how-we-help-heading">
        <Container>
          <Reveal>
            <SectionHeader
              id="how-we-help-heading"
              eyebrow={content.howWeHelp.eyebrow}
              title={content.howWeHelp.headline}
            />
            <p className="measure-prose mt-5 type-body text-muted">{content.howWeHelp.intro}</p>
          </Reveal>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-8">
            {content.howWeHelp.stages.map((stage, index) => (
              <HelpStage
                key={stage.title}
                number={stage.number}
                title={stage.title}
                description={stage.description}
                delay={index * 0.15}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="surface" ariaLabelledby="who-its-for-heading">
        <Container>
          <Reveal className="mx-auto max-w-[720px] text-center">
            <SectionHeader
              id="who-its-for-heading"
              eyebrow={content.whoItsFor.eyebrow}
              title={content.whoItsFor.headline}
              align="center"
            />
            <p className="mt-5 type-body text-muted">{content.whoItsFor.intro}</p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8">
            {content.whoItsFor.audiences.map((audience, index) => (
              <Reveal key={audience.title} delay={index * 0.1}>
                <Card
                  as="article"
                  className="h-full rounded-2xl p-9 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(14,26,20,0.08)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <h3 className="font-display text-[22px] font-bold tracking-tight text-navy">
                    {audience.title}
                  </h3>
                  <p className="mt-2.5 text-base leading-[1.6] text-muted">
                    {audience.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="white" ariaLabelledby="why-devmir-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <p className="type-label text-accent">{content.whyDevmir.eyebrow}</p>
                <h2
                  id="why-devmir-heading"
                  className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-navy text-balance"
                >
                  {content.whyDevmir.headline}
                </h2>
                <p className="mt-6 text-lg font-medium leading-[1.6] text-navy sm:text-xl">
                  {content.whyDevmir.lead}
                </p>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={0.1}>
              <ul className="divide-y divide-border border-y border-border">
                {content.whyDevmir.points.map((point) => (
                  <li key={point.title} className="py-7">
                    <h3 className="font-display text-xl font-bold tracking-tight text-navy">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-base leading-[1.6] text-muted">{point.description}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal className="mt-[4.5rem] lg:mt-[72px]" delay={0.15}>
            <RetailerWordmarks
              retailers={content.whyDevmir.retailers}
              caption={content.whyDevmir.caption}
              panel
            />
          </Reveal>
        </Container>
      </Section>

      <CTABand
        headline={content.cta.headline}
        line={content.cta.line}
        cta={content.cta.cta}
        headingId="market-entry-cta-heading"
      />
    </>
  )
}
