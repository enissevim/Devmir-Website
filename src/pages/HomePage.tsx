import { PageMeta } from '@/components/seo/PageMeta'
import { FinalCTASection } from '@/components/home/FinalCTASection'
import { HeroSection } from '@/components/home/HeroSection'
import { HowWeWorkSection } from '@/components/home/HowWeWorkSection'
import { MarketReachSection } from '@/components/home/MarketReachSection'
import { NewsSection } from '@/components/home/NewsSection'
import { OurBrandsSection } from '@/components/home/OurBrandsSection'
import { OurJourneySection } from '@/components/home/OurJourneySection'
import { OurStorySection } from '@/components/home/OurStorySection'
import { WhatWeDoSection } from '@/components/home/WhatWeDoSection'
import { WhoWeWorkWithSection } from '@/components/home/WhoWeWorkWithSection'
import { WhyDevmirSection } from '@/components/home/WhyDevmirSection'
import { homeMeta } from '@/content/home'

export function HomePage() {
  return (
    <>
      <PageMeta {...homeMeta} />
      <HeroSection />
      <WhatWeDoSection />
      <WhyDevmirSection />
      <HowWeWorkSection />
      <WhoWeWorkWithSection />
      <MarketReachSection />
      <OurStorySection />
      <OurJourneySection />
      <OurBrandsSection />
      <NewsSection />
      <FinalCTASection />
    </>
  )
}
