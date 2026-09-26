import { homeContent } from '@/content/home'
import { CapabilityStrip } from '@/components/home/CapabilityStrip'
import { AutoplayVideo } from '@/components/ui/AutoplayVideo'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { RevealOnLoad } from '@/components/ui/Reveal'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

export function HeroSection() {
  const { hero } = homeContent
  const prefersReducedMotion = usePrefersReducedMotion()
  const showVideo = Boolean(hero.video) && !prefersReducedMotion

  const copy = (
    <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-2xl lg:text-left">
      <p className="type-label text-accent">{hero.eyebrow}</p>
      <p className="mt-5 inline-flex rounded-full border border-border bg-white/80 px-4 py-1.5 type-label text-muted backdrop-blur-sm">
        {hero.badge}
      </p>
      <h1
        id="home-hero-heading"
        className="mt-8 font-display text-[clamp(2.75rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-navy text-balance"
      >
        {hero.headline}
      </h1>
      <p className="mt-8 type-body text-muted">{hero.paragraph}</p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
        <Button as="a" href={hero.primaryCta.href} variant="primary" className="sm:min-w-60">
          {hero.primaryCta.label}
        </Button>
        <Button
          as="a"
          href={hero.secondaryCta.href}
          variant="secondary"
          className="sm:min-w-60"
        >
          {hero.secondaryCta.label}
        </Button>
      </div>
    </div>
  )

  return (
    <>
      <section
        className={`relative overflow-hidden border-b border-green/10 bg-white ${
          showVideo
            ? 'min-h-[480px] sm:min-h-[560px] lg:min-h-[640px]'
            : 'py-16 lg:py-24'
        }`}
        aria-labelledby="home-hero-heading"
        aria-label={showVideo ? hero.video.alt : undefined}
      >
        {showVideo && (
          <>
            <AutoplayVideo
              src={hero.video.src}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/55 lg:to-white/35"
              aria-hidden="true"
            />
          </>
        )}

        <Container className={`relative z-10 ${showVideo ? 'py-16 lg:py-24' : ''}`}>
          <RevealOnLoad>{copy}</RevealOnLoad>
        </Container>
      </section>
      <CapabilityStrip items={hero.capabilities} />
    </>
  )
}
