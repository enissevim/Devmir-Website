import { homeContent } from '@/content/home'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { StoryHeadline } from '@/components/ui/StoryHeadline'

export function StorySection() {
  const { story } = homeContent

  return (
    <Section variant="ivory" id="our-story" ariaLabelledby="our-story-heading" className="py-16 lg:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <figure className="overflow-hidden border border-border bg-white">
              <img
                src={story.image}
                alt={story.imageAlt}
                width={story.imageWidth}
                height={story.imageHeight}
                className="h-auto w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.08}>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
              {story.year}
            </p>
            <StoryHeadline id="our-story-heading" className="mt-4">
              {story.headline}
            </StoryHeadline>

            <div className="mt-8 max-w-prose space-y-5">
              {story.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            <p className="mt-8 max-w-prose text-base font-medium leading-relaxed text-navy">
              {story.closing}
            </p>
            <div className="mt-10">
              <Button as="a" href={story.link.href} variant="text">
                {story.link.label} →
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
