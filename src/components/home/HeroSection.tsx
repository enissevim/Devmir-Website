import { motion } from 'motion/react'
import { homeContent } from '@/content/home'
import { Button } from '@/components/ui/Button'
import { RevealOnLoad } from '@/components/ui/Reveal'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

export function HeroSection() {
  const { hero } = homeContent
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="grid lg:min-h-[calc(100vh-72px)] lg:grid-cols-12">
        <div className="flex flex-col justify-center px-5 py-14 sm:px-8 sm:py-16 lg:col-span-5 lg:px-12 lg:py-20 xl:pl-[max(3rem,calc((100vw-1280px)/2+3rem))]">
          <RevealOnLoad>
            <p className="mb-5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-accent">
              Devmir Legwear Inc.
            </p>
          </RevealOnLoad>

          <RevealOnLoad delay={0.06}>
            <h1 className="font-display text-[clamp(2.625rem,5vw,4rem)] font-bold leading-[1.04] tracking-[-0.03em] text-navy text-balance">
              {hero.headline}
            </h1>
          </RevealOnLoad>

          <RevealOnLoad delay={0.12}>
            <p className="mt-6 max-w-md text-[1.0625rem] leading-[1.65] text-muted">{hero.subcopy}</p>
          </RevealOnLoad>

          <RevealOnLoad delay={0.18}>
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
          </RevealOnLoad>
        </div>

        <div className="relative lg:col-span-7 lg:min-h-[calc(100vh-72px)]">
          <RevealOnLoad delay={0.1} className="relative h-full">
            <div
              className="absolute inset-y-10 left-0 hidden w-px bg-accent/20 lg:block"
              aria-hidden="true"
            />
            <div className="relative h-full px-5 pb-14 sm:px-8 lg:absolute lg:inset-0 lg:px-0 lg:pb-0 lg:pl-8 lg:pt-10">
              <div
                className="absolute left-5 top-0 hidden h-16 w-16 border-l border-t border-border sm:left-8 lg:left-8 lg:block"
                aria-hidden="true"
              />
              <motion.div
                className="relative h-full min-h-[260px] overflow-hidden bg-surface sm:min-h-[340px] lg:min-h-0"
                initial={prefersReducedMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.img
                  src={hero.image}
                  alt={hero.imageAlt}
                    className="h-full w-full object-contain object-center"
                    width={617}
                    height={602}
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  initial={prefersReducedMotion ? false : { scale: 1.03 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.div>
            </div>
          </RevealOnLoad>
        </div>
      </div>
    </section>
  )
}
