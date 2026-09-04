import { homeContent } from '@/content/home'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
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

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {news.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="flex h-full flex-col border border-border bg-white p-8 transition-colors duration-200 hover:border-accent/30">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  {item.date}
                </p>
                <h3 className="mt-4 font-display text-xl font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-muted">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
