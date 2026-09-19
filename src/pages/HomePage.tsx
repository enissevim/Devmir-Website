import { PageMeta } from '@/components/seo/PageMeta'
import { BothSidesSection } from '@/components/home/BothSidesSection'
import { FinalCTASection } from '@/components/home/FinalCTASection'
import { HeroSection } from '@/components/home/HeroSection'
import { MarketReachSection } from '@/components/home/MarketReachSection'
import { NewsSection } from '@/components/home/NewsSection'
import { OurBrandsSection } from '@/components/home/OurBrandsSection'
import { RelationshipsSection } from '@/components/home/RelationshipsSection'
import { StorySection } from '@/components/home/StorySection'
import { homeMeta } from '@/content/home'

export function HomePage() {
  return (
    <>
      <PageMeta {...homeMeta} />
      <HeroSection />
      <StorySection />
      <BothSidesSection />
      <OurBrandsSection />
      <MarketReachSection />
      <RelationshipsSection />
      <NewsSection />
      <FinalCTASection />
    </>
  )
}
