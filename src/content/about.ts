import { site } from '@/content/site'

export const aboutMeta = {
  title: 'About Devmir | Established U.S. Market Infrastructure Since 2002',
  description:
    'Founded in 2002, Devmir Legwear Inc. has grown from legwear into a U.S.-based retail, e-commerce, sourcing, and fulfillment organization connecting global manufacturing with the U.S. market.',
  path: '/about/',
  image: `${site.url}/og-about.jpg`,
  imageAlt: 'About Devmir Legwear Inc., established U.S. market infrastructure since 2002',
}

export const aboutContent = {
  hero: {
    headline: 'Built over two decades. Evolving with the market.',
    subcopy:
      'From its founding in North Carolina in 2002, Devmir has grown into a U.S.-based organization connecting international manufacturing with retail, e-commerce, and marketplace opportunities across the United States.',
  },

  sections: [
    {
      title: 'Founded in legwear. Built for the U.S. market.',
      paragraphs: [
        'Devmir Legwear Inc. was established in 2002 in North Carolina, beginning with a focus on legwear and the U.S. wholesale market. Over more than two decades, the company expanded its relationships with U.S. retailers and wholesale customers while broadening product sourcing and private-label capabilities.',
        'What began as a legwear business evolved into a broader retail, e-commerce, sourcing, and fulfillment organization with established infrastructure and deep knowledge of the U.S. market.',
      ],
    },
    {
      title: 'International manufacturing. U.S. operations.',
      paragraphs: [
        'Devmir has developed long-standing relationships with international manufacturers, supporting product sourcing, development, wholesale, and private-label programs for the U.S. market. These manufacturing connections are supported by established U.S.-based operations including warehousing, fulfillment, shipping, and customer service.',
        'This combination of global sourcing relationships and domestic operational infrastructure allows Devmir to serve both international brands entering the U.S. market and U.S. retailers and partners seeking reliable supply and support.',
      ],
    },
    {
      title: 'Retail, e-commerce, and marketplace experience.',
      paragraphs: [
        'Over its history, Devmir expanded into e-commerce and major U.S. marketplaces, combining established retail and wholesale experience with digital sales and fulfillment capabilities. The company operates across major U.S. retail and e-commerce channels, creating distribution opportunities for its own brands and manufacturing partners.',
        'Devmir also operates and supports established consumer-facing brands, including Sierra Socks and Wear Sierra, serving U.S. customers directly through retail and e-commerce channels.',
      ],
    },
    {
      title: 'Connecting global manufacturing with the U.S. market.',
      paragraphs: [
        'Today, Devmir combines international manufacturing relationships with established U.S. operations, marketplace access, fulfillment, and market knowledge to help manufacturers and brands grow in the United States.',
        'Whether supporting an international manufacturer entering the U.S. market or a U.S. retailer seeking reliable product and supply solutions, Devmir provides the infrastructure, relationships, and practical market knowledge needed to build and sustain growth.',
      ],
    },
  ],

  timeline: {
    headline: 'Company Milestones',
    milestones: [
      {
        period: '2002',
        title: 'Founded in North Carolina',
        description:
          'Devmir Legwear Inc. was established in Pittsboro, North Carolina with a focus on legwear and the U.S. wholesale market.',
      },
      {
        period: '2000s',
        title: 'Retail and Wholesale Expansion',
        description:
          'Built long-term relationships with U.S. retailers and wholesale customers while expanding sourcing and private-label capabilities.',
      },
      {
        period: '2010s',
        title: 'E-Commerce and Marketplace Growth',
        description:
          'Expanded into digital commerce and major U.S. marketplaces, adding fulfillment infrastructure to support omnichannel growth.',
      },
      {
        period: 'Today',
        title: 'A Full U.S. Market Platform',
        description:
          'Combines international manufacturing relationships with warehousing, fulfillment, marketplace access, and owned brands including Sierra Socks and Wear Sierra.',
      },
    ],
  },

  cta: {
    headline: 'Ready to work together?',
    subcopy:
      'Whether you are exploring the U.S. market or seeking a reliable supply and operations partner, we would be pleased to hear from you.',
    button: { label: 'Start a Conversation', href: '/contact/' },
  },
} as const
