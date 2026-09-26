import { PageMeta } from '@/components/seo/PageMeta'
import { BothSidesSection } from '@/components/home/BothSidesSection'
import { FinalCTASection } from '@/components/home/FinalCTASection'
import { HeroSection } from '@/components/home/HeroSection'
import { OurBrandsSection } from '@/components/home/OurBrandsSection'
import { RetailExperienceSection } from '@/components/home/RetailExperienceSection'
import { WhoWeWorkWithSection } from '@/components/home/WhoWeWorkWithSection'
import { homeMeta } from '@/content/home'

export function HomePage() {
  return (
    <>
      <PageMeta {...homeMeta} />
      <HeroSection />
      <BothSidesSection />
      <WhoWeWorkWithSection />
      <RetailExperienceSection />
      <OurBrandsSection />
      <FinalCTASection />
    </>
  )
}
