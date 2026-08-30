import platformsImage from '@/assets/images/platforms.png'

export const marketEntryMeta = {
  title: 'U.S. Market Entry | Devmir Legwear Inc.',
  description:
    'Devmir helps established international manufacturers and brands enter and grow in the U.S. market with strategy, marketplace access, fulfillment, and local operational support.',
  path: '/u-s-market-entry/',
}

export const marketEntryContent = {
  hero: {
    headline: 'Helping International Manufacturers & Brands Enter the U.S. Market',
    subcopy:
      'With more than two decades of U.S. market experience, Devmir provides the infrastructure, marketplace access, and operational support international brands need to establish and grow in the United States.',
  },

  coreCapabilities: [
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

  additionalCapabilities: [
    {
      title: 'Retail, E-Commerce & Wholesale Development',
      description:
        'Building the right channel strategy across retail, e-commerce, and wholesale to reach U.S. customers effectively.',
    },
    {
      title: 'U.S. Infrastructure & Operations',
      description:
        'Established warehousing, fulfillment, shipping, and customer service infrastructure to support domestic market growth.',
    },
    {
      title: 'Private Label & Product Development',
      description:
        'Experience in product sourcing, development, and private-label programs tailored to U.S. market requirements.',
    },
    {
      title: 'Ongoing Market Management',
      description:
        'Continued support for day-to-day operations, marketplace management, and long-term expansion in the U.S. market.',
    },
  ],

  whoIsThisFor: {
    headline: 'Who Is This For?',
    audiences: [
      'Established Manufacturers',
      'Established Consumer Brands',
      'Growth-Oriented Exporters',
    ],
  },

  whyDevmir: {
    headline: 'Why Enter the U.S. Market With Devmir?',
    points: [
      {
        title: 'Active U.S. Retail & E-Commerce Presence',
        description:
          'Established experience across U.S. retail, wholesale, and e-commerce marketplaces.',
      },
      {
        title: 'Established U.S. Infrastructure',
        description:
          'U.S.-based warehousing, fulfillment, shipping, and operational support ready to serve your brand.',
      },
      {
        title: 'Retail & Marketplace Experience',
        description:
          'Practical knowledge of U.S. retail requirements, marketplace operations, and channel development.',
      },
      {
        title: 'Local U.S. Market Knowledge',
        description:
          'Understanding of U.S. customers, logistics, business practices, and regulatory requirements.',
      },
      {
        title: 'A Practical Path to Growth',
        description:
          'A structured approach from market assessment through launch, operations, and continued expansion.',
      },
    ],
  },

  proof: {
    headline: 'Active across major U.S. retail and e-commerce channels',
    image: platformsImage,
    imageAlt:
      'Devmir retail and marketplace presence including Kohls, Target, JCPenney, Amazon, Walmart, and more',
  },

  cta: {
    headline: 'Ready to enter the U.S. market?',
    subcopy:
      'Connect with Devmir to discuss your products, goals, and the right path forward for your brand in the United States.',
    button: { label: 'Start a Conversation', href: '/contact/' },
  },
} as const
