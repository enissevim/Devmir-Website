import { homeContent } from '@/content/home'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'

function SideCard({
  label,
  descriptor,
  items,
}: {
  label: string
  descriptor: string
  items: readonly string[]
}) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-[0_1px_2px_rgba(14,26,20,0.04)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(14,26,20,0.08)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-[0_1px_2px_rgba(14,26,20,0.04)] lg:p-10">
      <h3 className="font-display text-[28px] font-bold tracking-[-0.01em] text-navy">
        {label}
      </h3>
      <p className="mt-1.5 text-[15px] leading-relaxed text-muted sm:text-base">{descriptor}</p>
      <div className="my-6 h-px w-full bg-border" aria-hidden="true" />
      <ul className="list-none">
        {items.map((item) => (
          <li
            key={item}
            className="border-b border-border py-3.5 text-base font-medium text-charcoal last:border-b-0"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  )
}

function FlowConnector() {
  return (
    <div
      className="relative my-6 flex w-full items-center justify-center lg:my-0 lg:w-20"
      aria-hidden="true"
    >
      <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-border lg:inset-x-0 lg:inset-y-auto lg:left-0 lg:top-1/2 lg:h-px lg:w-full lg:translate-x-0" />
      <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-[0_4px_12px_rgba(14,26,20,0.12)]">
        <svg
          className="h-5 w-5 rotate-90 lg:rotate-0"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M3 10h12M11 5l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  )
}

export function BothSidesSection() {
  const { bothSides } = homeContent

  return (
    <Section variant="white" ariaLabelledby="both-sides-heading">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-[720px] text-center">
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-accent sm:text-sm">
              {bothSides.eyebrow}
            </p>
            <h2
              id="both-sides-heading"
              className="mt-4 font-display text-[clamp(2rem,4vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.02em] text-navy text-balance"
            >
              {bothSides.title}
            </h2>
            <p className="mt-4 text-lg leading-[1.6] text-muted sm:text-xl">
              {bothSides.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid items-stretch lg:grid-cols-[1fr_auto_1fr]">
          <Reveal delay={0.1}>
            <SideCard
              label={bothSides.making.label}
              descriptor={bothSides.making.descriptor}
              items={bothSides.making.items}
            />
          </Reveal>

          <Reveal delay={0.2} className="flex items-center">
            <FlowConnector />
          </Reveal>

          <Reveal delay={0.3}>
            <SideCard
              label={bothSides.selling.label}
              descriptor={bothSides.selling.descriptor}
              items={bothSides.selling.items}
            />
          </Reveal>
        </div>

        <Reveal className="mt-14" delay={0.4}>
          <div className="mx-auto max-w-[640px] text-center">
            <span className="mx-auto mb-5 block h-0.5 w-10 bg-accent" aria-hidden="true" />
            <p className="text-lg font-medium leading-[1.6] text-navy sm:text-xl">
              {bothSides.closing}
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
