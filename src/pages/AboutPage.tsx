import { PageMeta } from '@/components/seo/PageMeta'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { aboutContent, aboutMeta } from '@/content/about'

export function AboutPage() {
  const content = aboutContent

  return (
    <>
      <PageMeta {...aboutMeta} />

      <PageHero
        eyebrow="About Devmir"
        headline={content.hero.headline}
        subcopy={content.hero.subcopy}
      />

      {content.sections.map((section, sectionIndex) => (
        <Section
          key={section.title}
          variant={sectionIndex % 2 === 0 ? 'surface' : 'white'}
        >
          <Container>
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-4">
                  <h2 className="font-display text-[clamp(1.5rem,2.5vw,2rem)] font-semibold leading-tight tracking-[-0.02em] text-navy">
                    {section.title}
                  </h2>
                </div>
                <div className="space-y-5 lg:col-span-8">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="text-base leading-[1.7] text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          </Container>
        </Section>
      ))}

      <Section variant="surface">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-navy">{content.timeline.headline}</h2>
          </Reveal>

          <div className="mt-12 hidden lg:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-6 h-px bg-border" aria-hidden="true" />
              <div className="grid grid-cols-4 gap-8">
                {content.timeline.milestones.map((milestone, index) => (
                  <Reveal key={milestone.title} delay={index * 0.06}>
                    <div className="relative pt-12">
                      <div
                        className="absolute left-0 top-4 h-4 w-4 rounded-full border-2 border-accent bg-surface"
                        aria-hidden="true"
                      />
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                        {milestone.period}
                      </p>
                      <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                        {milestone.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{milestone.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-0 lg:hidden">
            {content.timeline.milestones.map((milestone, index) => (
              <Reveal key={milestone.title} delay={index * 0.05}>
                <div className="relative border-l-2 border-navy/15 py-7 pl-8">
                  <div
                    className="absolute -left-[5px] top-7 h-2 w-2 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                    {milestone.period}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-navy">
                    {milestone.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{milestone.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
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
