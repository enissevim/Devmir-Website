import { Link } from 'react-router-dom'
import { StoryTimeline } from '@/components/about/StoryTimeline'
import { PageMeta } from '@/components/seo/PageMeta'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { CTABand } from '@/components/ui/CTABand'
import { Reveal, RevealOnLoad } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { aboutContent, aboutMeta } from '@/content/about'
import { normalizeInternalPath } from '@/lib/paths'

export function AboutPage() {
  const content = aboutContent
  const { selling } = content.makingSelling

  return (
    <>
      <PageMeta {...aboutMeta} />

      <section
        className="border-b border-green/10 bg-white py-[4.5rem] lg:py-28"
        aria-labelledby="about-hero-heading"
      >
        <Container>
          <RevealOnLoad>
            <div className="grid items-center gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16">
              <div>
                <p className="type-label text-accent">{content.hero.eyebrow}</p>
                <h1
                  id="about-hero-heading"
                  className="mt-6 font-display text-[clamp(2.75rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-navy text-balance"
                >
                  {content.hero.headline}
                </h1>
                <p className="mt-8 max-w-[580px] type-body text-muted">
                  {content.hero.paragraph}
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl bg-surface">
                <img
                  src={content.hero.image}
                  alt={content.hero.imageAlt}
                  width={content.hero.imageWidth}
                  height={content.hero.imageHeight}
                  className="h-full min-h-[280px] w-full object-cover object-center lg:min-h-[420px]"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </RevealOnLoad>
        </Container>
      </section>

      <Section variant="white" ariaLabelledby="our-story-heading">
        <Container>
          <Reveal>
            <div className="max-w-[720px]">
              <SectionHeader
                id="our-story-heading"
                eyebrow={content.ourStory.eyebrow}
                title={content.ourStory.headline}
              />
              <p className="mt-5 type-body text-muted">{content.ourStory.paragraph}</p>
            </div>
          </Reveal>

          <Reveal className="mt-14" delay={0.08}>
            <StoryTimeline steps={content.ourStory.steps} />
          </Reveal>

          <Reveal className="mt-[4.5rem]" delay={0.12}>
            <div className="mx-auto max-w-[760px] text-center">
              <span
                className="mx-auto mb-6 block h-0.5 w-10 bg-accent"
                aria-hidden="true"
              />
              <blockquote className="font-display text-[clamp(1.375rem,2.5vw,1.75rem)] font-semibold leading-[1.4] text-navy text-balance">
                {content.ourStory.pullQuote}
              </blockquote>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section variant="surface" ariaLabelledby="making-selling-heading">
        <Container>
          <Reveal className="mx-auto max-w-[720px] text-center">
            <SectionHeader
              id="making-selling-heading"
              eyebrow={content.makingSelling.eyebrow}
              title={content.makingSelling.headline}
              align="center"
            />
          </Reveal>

          <Reveal className="mt-14" delay={0.08}>
            <div className="grid lg:grid-cols-2">
              <div className="pb-8 lg:pb-0 lg:pr-12">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                  {content.makingSelling.making.title}
                </p>
                <p className="mt-3 text-lg leading-[1.7] text-navy">
                  {content.makingSelling.making.text}
                </p>
              </div>

              <div className="border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                  {selling.title}
                </p>
                <p className="mt-3 text-lg leading-[1.7] text-navy">
                  {selling.beforeSierra}
                  <a
                    href={selling.sierraHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    {selling.sierraLabel}
                  </a>
                  {selling.between}
                  <a
                    href={selling.wearHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    {selling.wearLabel}
                  </a>
                  {selling.afterWear}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-12 text-center" delay={0.12}>
            <p className="text-lg font-semibold leading-[1.7] text-navy">
              {content.makingSelling.closing}
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section variant="white" ariaLabelledby="work-with-us-heading">
        <Container>
          <Reveal>
            <div className="max-w-[720px]">
              <SectionHeader
                id="work-with-us-heading"
                eyebrow={content.workWithUs.eyebrow}
                title={content.workWithUs.headline}
              />
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
            {content.workWithUs.cards.map((card, index) => (
              <Reveal key={card.href} delay={index * 0.1}>
                <Card
                  as="article"
                  className="group relative h-full rounded-2xl p-10 sm:p-10 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(14,26,20,0.08)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <Link
                    to={normalizeInternalPath(card.href)}
                    className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    aria-label={`${card.label}: ${card.title}. ${card.linkLabel.replace(' →', '')}`}
                  />
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                    {card.label}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-navy">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-base leading-[1.6] text-muted">{card.text}</p>
                  <p className="mt-6 text-base font-semibold text-navy">
                    <span className="inline-flex items-center gap-1">
                      {card.linkLabel.replace(' →', '')}
                      <span
                        className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </span>
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTABand
        headline={content.cta.headline}
        line={content.cta.line}
        cta={content.cta.cta}
        headingId="about-cta-heading"
      />
    </>
  )
}
