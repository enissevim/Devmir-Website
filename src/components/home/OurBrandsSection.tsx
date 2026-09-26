import { BrandCard } from '@/components/home/BrandCard'
import { homeContent } from '@/content/home'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function OurBrandsSection() {
  const { ourBrands } = homeContent

  return (
    <Section
      variant="white"
      id="our-brands"
      ariaLabelledby="our-brands-heading"
    >
      <Container>
        <Reveal>
          <SectionHeader
            id="our-brands-heading"
            eyebrow={ourBrands.eyebrow}
            title={ourBrands.headline}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:gap-8">
          {ourBrands.brands.map((brand, index) => (
            <Reveal key={brand.name} delay={index * 0.06}>
              <BrandCard {...brand} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
