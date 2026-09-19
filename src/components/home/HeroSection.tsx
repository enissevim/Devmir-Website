import { homeContent } from '@/content/home'
import { AutoplayVideo } from '@/components/ui/AutoplayVideo'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { RevealOnLoad } from '@/components/ui/Reveal'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

export function HeroSection() {
  const { hero } = homeContent
  const prefersReducedMotion = usePrefersReducedMotion()
  const showVideo = 'video' in hero && hero.video && !prefersReducedMotion

  return (
    <section
      className={`relative overflow-hidden border-b border-green/10 bg-white ${
        showVideo ? 'min-h-[420px] sm:min-h-[520px] lg:min-h-[580px]' : ''
      }`}
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

      <Container className="relative z-10 py-14 lg:py-24">
        <RevealOnLoad>
          <div
            className={`grid items-center gap-10 ${
              showVideo ? 'max-w-3xl' : 'lg:grid-cols-12 lg:gap-16'
            }`}
          >
            <div className={showVideo ? '' : 'lg:col-span-6'}>
              <h1 className="font-display text-[clamp(2.625rem,5vw,4rem)] font-bold leading-[1.04] tracking-[-0.03em] text-navy text-balance">
                {hero.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{hero.subcopy}</p>
              {'tagline' in hero && (
                <p className="mt-6 font-story text-[clamp(1.125rem,2vw,1.375rem)] font-semibold leading-snug text-accent">
                  {hero.tagline}
                </p>
              )}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch">
                <Button as="a" href={hero.primaryCta.href} variant="primary" className="sm:min-w-[200px]">
                  {hero.primaryCta.label}
                </Button>
                <Button as="a" href={hero.secondaryCta.href} variant="primary-outline" className="sm:min-w-[200px]">
                  {hero.secondaryCta.label}
                </Button>
              </div>
            </div>

            {!showVideo && (
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
            )}
          </div>
        </RevealOnLoad>
      </Container>
    </section>
  )
}
