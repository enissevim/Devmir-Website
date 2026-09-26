import retailersHeroImage from '@/assets/images/retailers-hero.png'
import { site } from '@/content/site'

export const retailersMeta = {
  title: 'U.S. Retailers & Partners | Reliable Supply | Devmir',
  description:
    'Devmir works with U.S. retailers, e-commerce marketplaces, wholesalers, and private-label customers, combining international sourcing with hands-on U.S. retail experience.',
  path: '/u-s-retailers-partners/',
  image: `${site.url}/og-retailers.jpg`,
  imageAlt: 'U.S. retailer and partner supply support from Devmir',
}

export const retailersContent = {
  hero: {
    eyebrow: 'Retailers & Partners',
    headline: 'Reliable Supply, Backed by 20 Years in U.S. Retail.',
    paragraph:
      'We work with U.S. retailers, e-commerce marketplaces, wholesalers, and private-label customers, combining international sourcing relationships with hands-on U.S. retail and marketplace experience.',
    primaryCta: { label: "Let's Talk", href: '/contact/' },
    secondaryCta: { label: 'What We Offer', href: '#what-we-offer' },
    image: retailersHeroImage,
    imageAlt:
      'Devmir sourcing, supply, and U.S.-based support for retailers and partners',
    imageWidth: 712,
    imageHeight: 650,
  },

  whatWeOffer: {
    eyebrow: '01 / What We Offer',
    headline: 'Sourcing, Retail Support, and U.S. Operations.',
    intro:
      'Support structured around your business, from a single product program to a broader supply partnership.',
    services: [
      {
        title: 'Product Sourcing & Development',
        description:
          'Established international manufacturing across apparel, textiles, accessories, and other consumer product categories, including private-label programs.',
      },
      {
        title: 'Retail & Marketplace Programs',
        description:
          'Product setup, inventory planning, and ongoing coordination for retail and marketplace programs.',
      },
      {
        title: 'U.S. Fulfillment & Operations',
        description:
          'U.S.-based warehousing, order fulfillment, shipping, and customer service that keep programs running efficiently.',
      },
    ],
  },

  whyDevmir: {
    eyebrow: '02 / Why Devmir',
    headline: 'We Understand Both Sides of the Supply Relationship.',
    lead:
      "We know what manufacturers can deliver and what U.S. customers require, because we've spent more than two decades working with both.",
    points: [
      {
        title: 'Reliable Sourcing Network',
        description:
          'Established manufacturing relationships built for quality, consistency, competitive pricing, and dependable supply.',
      },
      {
        title: 'One U.S.-Based Partner',
        description:
          'Sourcing, product development, inventory, warehousing, and fulfillment coordinated through one experienced team.',
      },
      {
        title: 'Flexible Support',
        description:
          'Product sourcing, private-label development, fulfillment, or a broader supply solution, structured around what your business needs.',
      },
    ],
  },

  activeInMarket: {
    eyebrow: '03 / Active in the U.S. Market',
    headline: 'An Operating Company With Current U.S. Experience.',
    paragraph:
      'We sell through major national retailers, leading online marketplaces, wholesale customers, and private-label programs, which gives us practical knowledge of retailer requirements, marketplace operations, inventory, fulfillment, and customer service.',
    retailers: ["Kohl's", 'Target', 'JCPenney', 'Amazon', 'Walmart'],
    caption:
      'Selected channels. Our U.S. network also includes additional retail, e-commerce, wholesale, and private-label relationships.',
  },

  cta: {
    headline: 'Looking for a Partner Who Knows Both Sides?',
    line: "Whether you need reliable products, private-label opportunities, sourcing support, or a broader supply partnership, we'd welcome the conversation.",
    cta: { label: "Let's Talk", href: '/contact/' },
  },
} as const
