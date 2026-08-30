import platformsImage from '@/assets/images/platforms.png'

export const retailersMeta = {
  title: 'U.S. Retailers & Partners | Devmir Legwear Inc.',
  description:
    'Devmir provides U.S. retailers, wholesalers, and marketplace partners with reliable product sourcing, development support, fulfillment, and established operational infrastructure.',
  path: '/u-s-retailers-partners/',
}

export const retailersContent = {
  hero: {
    headline: 'Reliable Products. Established Supply. U.S.-Based Support.',
    subcopy:
      'Devmir works with U.S. retailers, marketplaces, and business partners to provide reliable product sourcing, development capabilities, and established fulfillment and operational support.',
  },

  coreAreas: [
    {
      title: 'Product Sourcing & Development',
      description:
        'Access to established international manufacturing relationships and product development capabilities for the U.S. market.',
    },
    {
      title: 'Retail & E-Commerce Support',
      description:
        'Support for retail, e-commerce, and marketplace operations backed by more than two decades of U.S. market experience.',
    },
    {
      title: 'U.S.-Based Fulfillment & Operations',
      description:
        'Established U.S. warehousing, order fulfillment, shipping, customer service, and day-to-day operational infrastructure.',
    },
  ],

  whyDevmir: {
    headline: 'Why Work With Devmir?',
    points: [
      {
        title: 'Reliable Sourcing Network',
        description:
          'Long-standing relationships with international manufacturers and established product sourcing capabilities.',
      },
      {
        title: 'Hands-On U.S. Market Experience',
        description:
          'More than two decades of practical experience across U.S. retail, wholesale, and e-commerce channels.',
      },
      {
        title: 'From Product to Fulfillment',
        description:
          'Integrated support from product development and sourcing through warehousing, fulfillment, and customer service.',
      },
      {
        title: 'Flexible Partnership Approach',
        description:
          'Partnership structures tailored to the needs of retailers, wholesalers, marketplaces, and private-label customers.',
      },
      {
        title: 'Active in the U.S. Market',
        description:
          'An operating company with established presence across major U.S. retail and e-commerce channels.',
      },
    ],
  },

  marketplace: {
    headline: 'Active across major U.S. retail and e-commerce channels',
    retailers: "KOHL'S | TARGET | JCPENNEY | AMAZON | WALMART | + MORE",
    image: platformsImage,
    imageAlt:
      'Devmir retail and marketplace presence including Kohls, Target, JCPenney, Amazon, Walmart, and more',
  },

  cta: {
    headline: 'Looking for a reliable supply and operations partner?',
    subcopy:
      'Connect with Devmir to discuss product sourcing, partnership opportunities, and how we can support your business.',
    button: { label: 'Start a Conversation', href: '/contact/' },
  },
} as const
