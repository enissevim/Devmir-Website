import { homeContent } from '@/content/home'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { RevealOnLoad } from '@/components/ui/Reveal'

export function HeroSection() {
  const { hero } = homeContent

  return (
    <section className="border-b border-green/10 bg-white">
      <Container className="py-14 lg:py-20">
        <RevealOnLoad>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <h1 className="font-display text-[clamp(2.625rem,5vw,4rem)] font-bold leading-[1.04] tracking-[-0.03em] text-navy text-balance">
                {hero.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{hero.subcopy}</p>
              <div className="mt-10">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  Choose your path
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch">
                  <Button as="a" href={hero.primaryCta.href} variant="primary" className="sm:min-w-[220px]">
                    {hero.primaryCta.label}
                  </Button>
                  <Button as="a" href={hero.secondaryCta.href} variant="primary-outline" className="sm:min-w-[220px]">
                    {hero.secondaryCta.label}
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden border border-border bg-surface">
                <img
                  src={hero.image}
                  alt={hero.imageAlt}
                  className="h-full min-h-[240px] w-full object-contain object-center sm:min-h-[320px]"
                  width={617}
                  height={602}
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </RevealOnLoad>
      </Container>
    </section>
  )
}
