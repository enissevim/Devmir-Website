import { homeContent } from '@/content/home'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { StoryHeadline } from '@/components/ui/StoryHeadline'

export function BothSidesSection() {
  const { bothSides } = homeContent
  const panels = [bothSides.making, bothSides.selling]

  return (
    <Section variant="white" ariaLabelledby="both-sides-heading" className="py-16 lg:py-28">
      <Container>
        <Reveal>
          <p className="mb-4 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-accent">
            {bothSides.eyebrow}
          </p>
          <StoryHeadline id="both-sides-heading">{bothSides.headline}</StoryHeadline>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{bothSides.bridge}</p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {panels.map((panel, index) => (
            <Reveal key={panel.title} delay={0.08 + index * 0.04}>
              <div className="flex h-full flex-col overflow-hidden border border-border border-t-4 border-t-green bg-ivory">
                <div className="p-8 lg:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-[clamp(1.375rem,2.5vw,1.625rem)] font-semibold leading-tight text-navy">
                        {panel.title}
                      </h3>
                    </div>
                    <span
                      className="font-display text-3xl font-bold leading-none text-green/15"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {panel.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm leading-snug text-charcoal">
                        <span
                          className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-green"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto border-t border-border bg-white px-8 py-6 lg:px-10 lg:py-7">
                  <p className="text-base leading-relaxed text-muted">{panel.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
