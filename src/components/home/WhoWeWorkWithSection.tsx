import { homeContent } from '@/content/home'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function WhoWeWorkWithSection() {
  const { whoWeWorkWith } = homeContent

  return (
    <Section variant="white" ariaLabelledby="who-we-work-with-heading" className="pb-0">
      <div className="px-5 sm:px-8 lg:px-12 xl:px-[max(3rem,calc((100vw-1280px)/2+3rem))]">
        <Reveal>
          <SectionHeading
            id="who-we-work-with-heading"
            eyebrow={whoWeWorkWith.eyebrow}
            headline={whoWeWorkWith.headline}
          />
        </Reveal>
      </div>

      <div className="mt-16 grid lg:grid-cols-2">
        {whoWeWorkWith.audiences.map((audience, index) => (
          <Reveal key={audience.title} delay={index * 0.1}>
            <div
              className={`flex min-h-[340px] flex-col justify-between px-5 py-12 sm:px-8 lg:min-h-[420px] lg:px-16 lg:py-16 xl:px-20 ${
                audience.variant === 'dark'
                  ? 'bg-navy text-white'
                  : 'border-t border-border bg-white lg:border-l lg:border-t-0'
              }`}
            >
              <div>
                <h3
                  className={`font-display text-[clamp(1.5rem,2.5vw,2rem)] font-semibold leading-tight tracking-[-0.02em] ${
                    audience.variant === 'dark' ? 'text-white' : 'text-navy'
                  }`}
                >
                  {audience.title}
                </h3>
                <p
                  className={`mt-5 max-w-md text-base leading-relaxed ${
                    audience.variant === 'dark' ? 'text-white/75' : 'text-muted'
                  }`}
                >
                  {audience.description}
                </p>
              </div>
              <div className="mt-10">
                <Button
                  as="a"
                  href={audience.cta.href}
                  variant={audience.variant === 'dark' ? 'outline-light' : 'primary'}
                >
                  {audience.cta.label}
                </Button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
