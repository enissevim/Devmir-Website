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
    headline: 'It started with legwear in North Carolina.',
    subcopy:
      'We started in Pittsboro in 2002 with socks and wholesale. More than two decades later, we make products overseas, run our own brands, and sell across U.S. retail and online.',
  },

  sections: [
    {
      title: 'Founded in legwear. Built through experience.',
      paragraphs: [
        'We started in 2002 in Pittsboro with legwear and wholesale buyers who cared about quality. Over the years we grew into manufacturing, our own brands, retail, e-commerce, and U.S. fulfillment.',
        'We did not learn the market from the outside. We learned it by doing the work, one product and one order at a time.',
      ],
    },
    {
      title: 'Making products. Selling them in the U.S.',
      paragraphs: [
        'We have built long-standing relationships with international manufacturers, supporting product sourcing, development, wholesale, and private-label programs. We know the production side because we have lived it.',
        'On the selling side, we operate Sierra Socks and Wear Sierra, run U.S. warehousing and fulfillment, and work across major retail and e-commerce channels. That hands-on experience is what we bring to every partnership.',
      ],
    },
    {
      title: 'Retail, e-commerce, and marketplace experience.',
      paragraphs: [
        'We expanded into e-commerce and major U.S. marketplaces, combining retail and wholesale experience with the fulfillment work that makes online sales actually work.',
        'We run Sierra Socks and Wear Sierra ourselves, serving U.S. customers directly through retail and online. That hands-on work shapes how we partner with others.',
      ],
    },
    {
      title: 'Built over time.',
      paragraphs: [
        'Today we combine overseas manufacturing with U.S. operations, marketplace access, fulfillment, and the market knowledge that comes from more than 20 years in the work.',
        'Whether you make products, sell them, or do both, we welcome a conversation. Knowing both sides of the product is what makes us different.',
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
          'We started in Pittsboro, North Carolina with legwear and the U.S. wholesale market.',
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
    headline: 'Want to talk?',
    subcopy:
      'Whether you are exploring the U.S. market or looking for a partner who has done this work firsthand, we would like to hear from you.',
    button: { label: 'Get in touch', href: '/contact/' },
  },
} as const
