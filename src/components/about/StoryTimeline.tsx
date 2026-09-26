import { motion } from 'motion/react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface TimelineStep {
  label: string
  year?: string
}

interface StoryTimelineProps {
  steps: readonly TimelineStep[]
}

export function StoryTimeline({ steps }: StoryTimelineProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <div className="relative">
      <div
        className="absolute inset-x-0 top-[calc(1.75rem+6px)] hidden h-0.5 overflow-hidden lg:block"
        aria-hidden="true"
      >
        {prefersReducedMotion ? (
          <span className="absolute inset-0 bg-border" />
        ) : (
          <motion.span
            className="absolute inset-0 origin-left bg-border"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
      </div>

      <div
        className="absolute bottom-2 left-[11px] top-2 w-0.5 overflow-hidden lg:hidden"
        aria-hidden="true"
      >
        {prefersReducedMotion ? (
          <span className="absolute inset-0 bg-border" />
        ) : (
          <motion.span
            className="absolute inset-0 origin-top bg-border"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
      </div>

      <ol className="relative flex flex-col gap-7 pl-8 lg:grid lg:grid-cols-6 lg:gap-0 lg:pl-0">
        {steps.map((step, index) => (
          <li
            key={step.label}
            className="relative flex flex-col lg:items-center lg:text-center"
          >
            <div className="hidden h-7 items-end justify-center lg:flex">
              {step.year ? (
                <motion.span
                  className="text-sm font-semibold tracking-[0.08em] text-accent"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {step.year}
                </motion.span>
              ) : null}
            </div>

            <motion.span
              className="absolute top-1.5 -left-[25px] z-10 size-3 rounded-full bg-accent lg:static lg:mt-0"
              aria-hidden="true"
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.6 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.35,
                delay: 0.15 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            <motion.div
              className="pl-5 lg:mt-5 lg:pl-0"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.4,
                delay: 0.2 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {step.year ? (
                <p className="text-sm font-semibold tracking-[0.08em] text-accent lg:hidden">
                  {step.year}
                </p>
              ) : null}
              <p
                className={`text-base font-semibold text-navy ${
                  step.year ? 'mt-1 lg:mt-0' : ''
                }`}
              >
                {step.label}
              </p>
            </motion.div>
          </li>
        ))}
      </ol>
    </div>
  )
}
