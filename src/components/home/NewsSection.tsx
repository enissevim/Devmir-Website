import { homeContent } from '@/content/home'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Rule } from '@/components/ui/Rule'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function NewsSection() {
  const { news } = homeContent

  return (
    <Section variant="surface" ariaLabelledby="news-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="news-heading"
            eyebrow={news.eyebrow}
            headline={news.headline}
          />
        </Reveal>

        <div className="mt-12">
          {news.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="py-8">
                {index > 0 && <Rule className="mb-8" />}
                <h3 className="font-display text-xl font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
