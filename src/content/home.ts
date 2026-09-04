import heroImage from '@/assets/images/hero-main.png'
import platformsImage from '@/assets/images/platforms.png'
import sierraSocksImage from '@/assets/images/sierra-socks.png'
import wearSierraImage from '@/assets/images/wear-sierra.png'
import { site } from '@/content/site'

export const homeMeta = {
  title: 'Devmir | Connecting Global Manufacturing with U.S. Retail & E-Commerce',
  description:
    'Devmir connects established international manufacturers and brands with the U.S. retail and e-commerce market through market access, fulfillment, infrastructure, and local expertise.',
  path: '/',
  image: `${site.url}/og-default.jpg`,
  imageAlt: 'Devmir: Connecting Quality Manufacturing with the U.S. Market',
}

export const homeContent = {
  hero: {
    headline: 'Connecting Quality Manufacturing with the U.S. Market',
    subcopy:
      'Devmir connects international manufacturers and brands with the U.S. retail and e-commerce market. With more than two decades of experience, we provide the infrastructure and market access needed to grow in the United States.',
    primaryCta: { label: 'For Manufacturers & Brands', href: '/u-s-market-entry/' },
    secondaryCta: { label: 'For U.S. Retailers & Partners', href: '/u-s-retailers-partners/' },
    image: heroImage,
    imageAlt:
      'Devmir Legwear team presentation showcasing Sierra Socks and Wear Sierra brands',
  },

  whatWeDo: {
    eyebrow: 'What We Do',
    headline: 'Infrastructure, access, and operations for the U.S. market',
    items: [
      {
        title: 'U.S. Market Entry',
        description:
          'We help established international manufacturers and brands enter and grow in the U.S. market with the right infrastructure, strategy, and local support.',
      },
      {
        title: 'E-Commerce & Marketplace Access',
        description:
          'We provide access to major U.S. e-commerce and retail marketplaces, helping brands reach customers without building their own U.S. operation.',
      },
      {
        title: 'Fulfillment & Operations',
        description:
          'From U.S. warehousing and order fulfillment to shipping and operational support, we provide the infrastructure brands need to serve the U.S. market efficiently.',
      },
    ],
    link: { label: 'Explore U.S. Market Entry', href: '/u-s-market-entry/' },
  },

  whyDevmir: {
    eyebrow: 'Why Devmir',
    headline: 'More than two decades of experience on the ground in the U.S. market.',
    stat: { value: '20+', label: 'Years of U.S. Market Experience' },
    summary:
      'Practical knowledge, infrastructure, and relationships built over more than two decades of U.S. market operations.',
    proofPoints: [
      {
        title: 'U.S.-Based Operations',
        description: 'Warehousing, fulfillment, shipping, customer service, and operational support.',
      },
      {
        title: 'Retail & Marketplace Access',
        description: 'Experience working with major U.S. retailers and e-commerce marketplaces.',
      },
      {
        title: 'Global Manufacturing Relationships',
        description: 'Long-standing relationships with international manufacturers and sourcing partners.',
      },
    ],
  },

  howWeWork: {
    eyebrow: 'How We Work',
    headline: 'A practical path from strategy to growth',
    steps: [
      {
        number: '01',
        title: 'Understand Your Business',
        description:
          'We evaluate your products, capabilities, goals, and U.S. market opportunities.',
      },
      {
        number: '02',
        title: 'Build the U.S. Strategy',
        description:
          'We develop the right approach for market entry, retail and marketplace access, fulfillment, and operations.',
      },
      {
        number: '03',
        title: 'Launch & Grow',
        description:
          'We support execution, day-to-day operations, and continued expansion in the U.S. market.',
      },
    ],
  },

  whoWeWorkWith: {
    eyebrow: 'Who We Work With',
    headline: 'Two paths to the U.S. market',
    audiences: [
      {
        title: 'International Manufacturers & Brands',
        description:
          'For established manufacturers and brands seeking to enter or expand in the U.S. market. We provide market access, local infrastructure, fulfillment, and operational support.',
        cta: { label: 'Explore U.S. Market Entry', href: '/u-s-market-entry/' },
        variant: 'dark' as const,
      },
      {
        title: 'U.S. Retailers & Partners',
        description:
          'For U.S. retailers, marketplaces, and business partners seeking reliable products, sourcing capabilities, and established operational support.',
        cta: { label: 'Explore Partnership Opportunities', href: '/u-s-retailers-partners/' },
        variant: 'lightGreen' as const,
      },
    ],
  },

  marketReach: {
    eyebrow: 'U.S. Market Reach',
    headline: 'Global manufacturing. U.S. infrastructure. Real market access.',
    summary:
      'Through established relationships, marketplace experience, and U.S.-based operations, Devmir helps connect international manufacturers and brands with opportunities across the U.S. retail and e-commerce landscape.',
    image: platformsImage,
    imageAlt:
      'Devmir retail and marketplace presence including Kohls, Target, JCPenney, Amazon, Walmart, and more',
    areas: [
      {
        title: 'Retail, Wholesale & Marketplace Relationships',
        description:
          'Experience working with U.S. retailers, wholesale and private-label partners, and major e-commerce marketplaces.',
      },
      {
        title: 'U.S.-Based Operations',
        description:
          'Established U.S. warehousing, fulfillment, shipping, customer service, and operational infrastructure to support domestic market growth.',
      },
      {
        title: 'Global Manufacturing & Private Label',
        description:
          'Long-standing relationships with international manufacturers, with experience in product sourcing, development, wholesale, and private-label programs for the U.S. market.',
      },
    ],
  },

  ourStory: {
    eyebrow: 'Our Story',
    headline: 'Built over two decades. Evolving with the market.',
    paragraphs: [
      'Founded in 2002, Devmir Legwear Inc. has grown from its roots in the legwear business into a U.S.-based retail, e-commerce, sourcing, and fulfillment organization.',
      'Today, Devmir combines international manufacturing relationships with established U.S. operations, helping manufacturers and brands navigate market entry, retail and marketplace opportunities, fulfillment, and long-term growth.',
    ],
    link: { label: 'Read our full story', href: '/about/' },
    founded: 'Founded 2002',
  },

  ourJourney: {
    eyebrow: 'Our Journey',
    headline: 'From legwear to a full U.S. market platform',
    milestones: [
      {
        period: '2002',
        title: 'Devmir Founded',
        description:
          'Devmir Legwear Inc. was established in North Carolina, beginning with a focus on legwear and the U.S. wholesale market.',
      },
      {
        period: 'Growth',
        title: 'Growth in U.S. Retail & Wholesale',
        description:
          'Expanded relationships with U.S. retailers and wholesale customers while broadening product sourcing and private-label capabilities.',
      },
      {
        period: 'Expansion',
        title: 'Expansion into E-Commerce & Marketplaces',
        description:
          'Expanded into e-commerce and major U.S. marketplaces, combining established retail experience with digital sales and fulfillment capabilities.',
      },
      {
        period: 'Today',
        title: 'Connecting Global Brands with the U.S. Market',
        description:
          'Today, Devmir combines international manufacturing relationships with established U.S. operations, marketplace access, fulfillment, and market knowledge to help manufacturers and brands grow in the United States.',
      },
    ],
  },

  ourBrands: {
    eyebrow: 'Our Brands',
    headline: 'Brands built for the U.S. market.',
    summary: 'Devmir operates and supports established consumer-facing brands serving the U.S. market.',
    brands: [
      {
        name: 'Sierra Socks',
        description:
          'An established U.S. legwear brand offering socks for men, women, children, and a wide range of everyday, dress, work, outdoor, and specialty needs.',
        image: sierraSocksImage,
        imageAlt: 'Sierra Socks logo',
        imageWidth: 2172,
        imageHeight: 724,
        href: 'https://www.sierrasocks.com/',
        cta: 'Visit Sierra Socks',
        imageStyles: {
          container:
            'relative flex aspect-[2/1] min-h-[200px] items-center justify-center overflow-hidden bg-gradient-to-br from-green-muted via-white to-green-light/20 sm:min-h-[240px]',
          image:
            'relative z-10 mx-auto h-auto max-h-32 w-full max-w-[520px] object-contain sm:max-h-36',
          overlay: 'absolute inset-0 bg-green/5 mix-blend-multiply',
          accent: 'border-t-green',
        },
      },
      {
        name: 'Wear Sierra',
        description:
          'A multi-category e-commerce marketplace offering apparel, accessories, footwear, and home products while providing a platform for brands to reach U.S. consumers.',
        image: wearSierraImage,
        imageAlt: 'Wear Sierra logo',
        imageWidth: 1774,
        imageHeight: 887,
        href: 'https://www.wearsierra.com/',
        cta: 'Visit Wear Sierra',
        imageStyles: {
          container:
            'relative flex aspect-[2/1] min-h-[200px] items-center justify-center overflow-hidden bg-gradient-to-br from-green-muted via-white to-green-light/20 sm:min-h-[240px]',
          image:
            'relative z-10 mx-auto h-auto max-h-36 w-full max-w-[580px] object-contain sm:max-h-40',
          overlay: 'absolute inset-0 bg-green/5 mix-blend-multiply',
          accent: 'border-t-green',
        },
      },
    ],
  },

  news: {
    eyebrow: 'News & Updates',
    headline: 'Company updates',
    items: [
      {
        date: 'January 2026',
        title: 'Expanding U.S. Marketplace Presence',
        description:
          'Devmir continues to expand its presence across major U.S. retail and e-commerce marketplaces, creating new opportunities for brands and manufacturing partners.',
      },
      {
        date: 'November 2025',
        title: 'Growing Retail Partnerships',
        description:
          'Devmir continues to strengthen relationships with U.S. retailers and marketplace partners, expanding distribution opportunities for its brands and international manufacturing partners.',
      },
      {
        date: 'September 2025',
        title: 'International Brands in the U.S.',
        description:
          'Devmir provides U.S.-based infrastructure, fulfillment, marketplace access, and local market support to help established international manufacturers and brands enter and grow in the U.S. market.',
      },
    ],
  },

  finalCta: {
    headline: "Let's build your U.S. market.",
    subcopy:
      'Whether you are an international manufacturer looking to establish a U.S. presence or a U.S. retailer seeking reliable product and supply solutions, Devmir can help build the right path forward.',
    cta: { label: 'Start a Conversation', href: '/contact/' },
  },
} as const
