import { homeContent } from '@/content/home'
import { CTABand } from '@/components/ui/CTABand'

export function FinalCTASection() {
  const { finalCta } = homeContent

  return (
    <CTABand
      headline={finalCta.headline}
      line={finalCta.line}
      cta={finalCta.cta}
      headingId="final-cta-heading"
    />
  )
}
