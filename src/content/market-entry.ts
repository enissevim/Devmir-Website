import platformsImage from '@/assets/images/platforms.png'
import marketEntryHeroImage from '@/assets/images/market-entry-hero.png'
import { site } from '@/content/site'

export const marketEntryMeta = {
  title: 'U.S. Market Entry | Devmir Legwear Inc.',
  description:
    'Devmir helps established international manufacturers and brands enter and grow in the U.S. market with market access, infrastructure, fulfillment, and operational support.',
  path: '/u-s-market-entry/',
  image: `${site.url}/og-market-entry.jpg`,
  imageAlt: 'U.S. market entry support for international manufacturers and brands',
}

export const marketEntryContent = {
  hero: {
    headline: 'Helping International Manufacturers & Brands Enter the U.S. Market',
    subcopy:
      'Devmir provides established international manufacturers and brands with the market access, infrastructure, fulfillment, and operational support needed to establish and grow their business in the United States.',
    image: marketEntryHeroImage,
    imageAlt:
      'U.S. market entry from global manufacturing and logistics to U.S. retail and e-commerce',
    imageWidth: 585,
    imageHeight: 628,
  },

  whatWeProvide: {
    eyebrow: 'What We Provide',
    headline: 'Strategy, access, and operations for the U.S. market',
    items: [
      {
        title: 'U.S. Market Strategy',
        description:
          'Market assessment, positioning, pricing, and a practical strategy for entering and growing in the U.S. market.',
      },
      {
        title: 'Retail & Marketplace Access',
        description:
          'Access to U.S. retailers, e-commerce marketplaces, and wholesale opportunities through established market experience and relationships.',
      },
      {
        title: 'U.S. Operations & Fulfillment',
        description:
          'U.S.-based warehousing, order fulfillment, shipping, customer service, and day-to-day operational support.',
      },
    ],
  },

  howWeSupport: {
    eyebrow: 'How We Support Your U.S. Growth',
    headline: 'Support tailored from market entry through ongoing operations',
    intro:
      'Our support can be tailored to a business, from initial U.S. market entry through retail and e-commerce expansion, private-label opportunities, fulfillment, and ongoing operations.',
    items: [
      {
        title: 'Retail, E-Commerce & Wholesale Development',
        description:
          'We help identify and develop opportunities with U.S. retailers, e-commerce marketplaces, distributors, wholesalers, and private-label customers.',
      },
      {
        title: 'U.S. Infrastructure & Operations',
        description:
          'We provide the U.S.-based infrastructure needed to support a business, including warehousing, inventory management, order fulfillment, shipping, customer service, and operational coordination.',
      },
      {
        title: 'Private Label & Product Development',
        description:
          'We support private-label and product-development opportunities by connecting manufacturing capabilities with the requirements of U.S. retailers, wholesalers, and other customers.',
      },
      {
        title: 'Ongoing Market Management',
        description:
          'We provide ongoing support as a U.S. business grows, including marketplace management, retail coordination, inventory planning, fulfillment, and operational support.',
      },
    ],
  },

  whoIsThisFor: {
    eyebrow: 'Who Is This For?',
    headline: 'Established international manufacturers and brands',
    intro:
      'This service is designed for established international manufacturers and brands with proven products, production capabilities, and the capacity to support long-term growth in the United States.',
    audiences: [
      {
        title: 'Established Manufacturers',
        description:
          'Companies with proven manufacturing capabilities seeking U.S. customers, wholesale opportunities, or private-label programs.',
      },
      {
        title: 'Established Consumer Brands',
        description:
          'International brands looking to introduce or expand their products through U.S. retail, e-commerce, and wholesale channels.',
      },
      {
        title: 'Growth-Oriented Exporters',
        description:
          'Companies ready to invest in inventory, compliance, logistics, and the long-term development of the U.S. market.',
      },
    ],
  },

  whyDevmir: {
    eyebrow: 'Why Enter the U.S. Market With Devmir?',
    headline: 'One experienced U.S.-based partner for market entry and growth',
    intro:
      'Entering the U.S. market requires more than finding customers. It requires local knowledge, infrastructure, retail and marketplace experience, fulfillment capabilities, and ongoing operational support. Devmir brings these elements together through one experienced U.S.-based partner.',
    points: [
      {
        title: 'Active U.S. Retail & E-Commerce Presence',
        description:
          'Devmir is not simply advising companies on how to enter the U.S. market. Devmir actively sells through and manages multiple U.S. retail and e-commerce channels, with practical, day-to-day experience in marketplace requirements, retail operations, fulfillment, inventory management, customer service, and compliance. The current U.S. sales network includes major national retailers, leading e-commerce marketplaces, wholesale customers, and private-label programs.',
        featured: true,
      },
      {
        title: 'Established U.S. Infrastructure',
        description:
          'Access U.S.-based warehousing, fulfillment, shipping, customer service, and operational support without building the entire infrastructure from the ground up.',
      },
      {
        title: 'Retail & Marketplace Experience',
        description:
          'Benefit from practical experience working with major U.S. retailers, e-commerce marketplaces, wholesale customers, and private-label programs.',
      },
      {
        title: 'Local U.S. Market Knowledge',
        description:
          'Navigate U.S. customer expectations, retail requirements, logistics, pricing, and business practices with experienced local support.',
      },
      {
        title: 'A Practical Path to Growth',
        description:
          'Start with the right market-entry strategy and expand step by step across retail, e-commerce, wholesale, private-label, and other opportunities as the U.S. business develops.',
      },
    ],
  },

  proof: {
    eyebrow: 'U.S. Retail & Marketplace Presence',
    headline: 'Hands-on experience across U.S. retail and e-commerce channels',
    summary:
      'Devmir currently sells through a broad network of U.S. retail, e-commerce, wholesale, and private-label channels, giving the company direct, hands-on experience with the requirements of the U.S. market.',
    disclaimer:
      "Selected channels shown. Devmir's U.S. sales network also includes additional retail, e-commerce, wholesale, and private-label relationships.",
    image: platformsImage,
    imageAlt:
      'Devmir retail and marketplace presence including Kohls, Target, JCPenney, Amazon, Walmart, and more',
    caption: 'Active across major U.S. retail and e-commerce channels',
  },

  cta: {
    headline: 'Planning your U.S. market entry or expansion?',
    subcopy:
      'Whether your company is planning its first entry into the United States or looking to expand an existing U.S. presence, Devmir can help evaluate the opportunity and develop a practical path forward.',
    button: { label: 'Start a Conversation', href: '/contact/' },
  },
} as const
