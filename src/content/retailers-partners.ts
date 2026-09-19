import platformsImage from '@/assets/images/platforms.png'
import retailersHeroImage from '@/assets/images/retailers-hero.png'
import { site } from '@/content/site'

export const retailersMeta = {
  title: 'U.S. Retailers & Partners | Devmir Legwear Inc.',
  description:
    'Devmir works with U.S. retailers, e-commerce marketplaces, wholesalers, and private-label customers seeking reliable products, sourcing capabilities, and dependable operational support.',
  path: '/u-s-retailers-partners/',
  image: `${site.url}/og-retailers.jpg`,
  imageAlt: 'U.S. retailer and partner supply support from Devmir',
}

export const retailersContent = {
  hero: {
    headline: 'Products and relationships built over 20 years.',
    subcopy:
      'Devmir works with U.S. retailers, e-commerce marketplaces, wholesalers, and private-label customers. We combine international sourcing relationships with hands-on U.S. retail and marketplace experience.',
    image: retailersHeroImage,
    imageAlt:
      'Devmir sourcing, supply, and U.S.-based support for retailers and partners',
    imageWidth: 712,
    imageHeight: 650,
  },

  support: {
    eyebrow: 'How Devmir Supports U.S. Retailers & Partners',
    headline: 'Sourcing, retail support, and U.S.-based operations',
    items: [
      {
        title: 'Product Sourcing & Development',
        description:
          'Access established international manufacturing capabilities across apparel, textiles, accessories, and other consumer product categories, including private-label programs.',
      },
      {
        title: 'Retail & E-Commerce Support',
        description:
          'Experienced support for retail and marketplace programs, including product setup, inventory planning, fulfillment, shipping, and ongoing operational coordination.',
      },
      {
        title: 'U.S.-Based Fulfillment & Operations',
        description:
          'U.S.-based warehousing, order fulfillment, shipping, customer service, and operational support to help keep programs running efficiently.',
      },
    ],
  },

  whyDevmir: {
    eyebrow: 'Why Work With Devmir?',
    headline: 'Sourcing relationships backed by U.S. market experience',
    intro:
      'We combine established international sourcing relationships with more than two decades of hands-on U.S. retail, wholesale, and e-commerce experience. We understand both sides of the supply relationship: the capabilities of manufacturers and the requirements of U.S. customers.',
    points: [
      {
        title: 'Reliable Sourcing Network',
        description:
          'Access established manufacturing relationships and sourcing capabilities designed to support quality, consistency, competitive pricing, and dependable supply.',
      },
      {
        title: 'Hands-On U.S. Market Experience',
        description:
          'Work with a partner that actively operates across U.S. retail, e-commerce, wholesale, and private-label channels and understands their day-to-day requirements.',
      },
      {
        title: 'From Product to Fulfillment',
        description:
          'Coordinate sourcing, product development, inventory, warehousing, fulfillment, shipping, and operational support through one experienced U.S.-based partner.',
      },
      {
        title: 'Flexible Partnership Approach',
        description:
          'Whether your business needs product sourcing, private-label development, fulfillment support, or a broader supply solution, Devmir can structure support around your business needs.',
      },
    ],
  },

  activeInMarket: {
    eyebrow: 'Active in the U.S. Market',
    headline: 'An operating company with current U.S. market experience',
    intro:
      'Devmir is an active U.S. wholesale, retail, and e-commerce operator with current experience across major national retailers, leading online marketplaces, wholesale customers, and private-label programs.',
    retailers: "KOHL'S | TARGET | JCPENNEY | AMAZON | WALMART | + MORE",
    summary:
      'This active market presence gives Devmir practical knowledge of retailer requirements, marketplace operations, inventory management, fulfillment, shipping, customer service, and ongoing program support.',
    image: platformsImage,
    imageAlt:
      'Devmir retail and marketplace presence including Kohls, Target, JCPenney, Amazon, Walmart, and more',
    caption: 'Active across major U.S. retail and e-commerce channels',
  },

  cta: {
    headline: 'Looking for a partner who knows both sides?',
    subcopy:
      'Whether your company is looking for reliable products, private-label opportunities, sourcing support, or a broader supply partnership, we would welcome a conversation.',
    button: { label: 'Contact Devmir', href: '/contact/' },
  },
} as const
