import marketEntryHeroImage from '@/assets/images/market-entry-hero.png'
import { site } from '@/content/site'

export const marketEntryMeta = {
  title: "U.S. Market Entry | We've Done This Ourselves | Devmir",
  description:
    'Devmir helps established international manufacturers and brands enter and grow in the U.S. market with practical support, U.S.-based fulfillment, and more than 20 years of experience.',
  path: '/u-s-market-entry/',
  image: `${site.url}/og-market-entry.jpg`,
  imageAlt: 'U.S. market entry support for international manufacturers and brands',
}

export const marketEntryContent = {
  hero: {
    eyebrow: 'U.S. Market Entry',
    headline: "We've Done This Ourselves.",
    paragraph:
      'Before helping others enter the U.S. market, we built brands, sold through retail and marketplaces, and learned what it takes day to day. Now we help established international manufacturers and brands find their place in the U.S., with practical support, U.S.-based fulfillment, and more than 20 years of experience.',
    primaryCta: { label: "Let's Talk", href: '/contact/' },
    secondaryCta: { label: 'How We Help', href: '#how-we-help' },
    image: marketEntryHeroImage,
    imageAlt:
      'U.S. market entry from global manufacturing and logistics to U.S. retail and e-commerce',
    imageWidth: 585,
    imageHeight: 628,
  },

  howWeHelp: {
    eyebrow: '01 / How We Help',
    headline: 'From First Entry to Ongoing Growth.',
    intro:
      'Support tailored to your business, from initial market entry through retail and e-commerce expansion. Start where you need to and grow step by step.',
    stages: [
      {
        number: '01',
        title: 'Strategy',
        description:
          'Market assessment, positioning, pricing, and a practical plan for entering the U.S. market.',
      },
      {
        number: '02',
        title: 'Channels',
        description:
          'Opportunities with U.S. retailers, marketplaces, distributors, wholesalers, and private-label customers, including product development that matches your manufacturing to U.S. buyer requirements.',
      },
      {
        number: '03',
        title: 'Operations',
        description:
          'U.S.-based warehousing, inventory, fulfillment, shipping, and customer service, plus the day-to-day coordination that keeps programs running.',
      },
      {
        number: '04',
        title: 'Growth',
        description:
          'Ongoing marketplace management, retail coordination, and inventory planning as your U.S. business grows.',
      },
    ],
  },

  whoItsFor: {
    eyebrow: "02 / Who It's For",
    headline: 'Built for Established Manufacturers and Brands.',
    intro:
      'For companies with proven products, production capabilities, and the capacity to support long-term growth in the United States.',
    audiences: [
      {
        title: 'Established Manufacturers',
        description:
          'Proven manufacturing capabilities, seeking U.S. customers, wholesale opportunities, or private-label programs.',
      },
      {
        title: 'Established Consumer Brands',
        description:
          'International brands introducing or expanding products through U.S. retail, e-commerce, and wholesale.',
      },
      {
        title: 'Growth-Oriented Exporters',
        description:
          'Ready to invest in inventory, compliance, logistics, and the long-term development of the U.S. market.',
      },
    ],
  },

  whyDevmir: {
    eyebrow: '03 / Why Devmir',
    headline: "We Don't Just Advise. We Sell in the U.S. Every Day.",
    lead:
      'Devmir actively sells through and manages U.S. retail and e-commerce channels, so our guidance comes from daily experience with marketplace requirements, retail operations, fulfillment, inventory, customer service, and compliance.',
    points: [
      {
        title: 'U.S.-Based Operations',
        description:
          'Warehousing, inventory, fulfillment, shipping, and customer service, without building it all from the ground up.',
      },
      {
        title: 'Local Market Knowledge',
        description:
          'U.S. customer expectations, retail requirements, logistics, pricing, and business practices.',
      },
      {
        title: 'One Partner',
        description:
          'Strategy, channels, and operations with one experienced U.S.-based team.',
      },
    ],
    retailers: ["Kohl's", 'Target', 'JCPenney', 'Amazon', 'Walmart'],
    caption:
      'Selected channels. Our U.S. network also includes additional retail, e-commerce, wholesale, and private-label relationships.',
  },

  cta: {
    headline: "Let's Talk About Your U.S. Market Plans.",
    line: "Whether you're planning your first U.S. entry or expanding an existing presence, we'd welcome the conversation.",
    cta: { label: "Let's Talk", href: '/contact/' },
  },
} as const
