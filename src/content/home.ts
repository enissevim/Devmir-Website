import sierraSocksImage from '@/assets/images/sierra-socks.png'
import wearSierraImage from '@/assets/images/wear-sierra.png'
import { site } from '@/content/site'

export const homeMeta = {
  title: 'Devmir | Built on Relationships Across Manufacturing and U.S. Retail',
  description:
    'Devmir Legwear Inc. works across manufacturing, sourcing, U.S. retail, e-commerce, and fulfillment from Pittsboro, North Carolina. Brands include Sierra Socks and Wear Sierra.',
  path: '/',
  image: `${site.url}/og-default.jpg`,
  imageAlt: 'Devmir: Built on relationships',
}

export const whoWeWorkWith = {
  eyebrow: '03 / Who We Work With',
  headline: "We've Built, Sold and Shipped Products.",
  intro:
    'Today, we work with domestic and international manufacturers, retailers, wholesale customers and e-commerce businesses, helping bring products and ideas into the U.S. market.',
  items: [
    {
      title: 'Manufacturers',
      description:
        'Making a product is one challenge. Entering the U.S. market is another.',
    },
    {
      title: 'Brands',
      description:
        "Building, positioning and selling in the U.S. is work we've done ourselves.",
    },
    {
      title: 'Retailers & Buyers',
      description:
        'Buyer relationships, retail operations and what it takes to get on shelf.',
    },
    {
      title: 'Wholesale Customers',
      description:
        'Distribution, wholesale relationships and getting product to market at scale.',
    },
  ],
} as const

export const homeContent = {
  hero: {
    eyebrow: '01 / Who We Are',
    badge: 'Since 2002 · 20+ Years',
    headline: 'Built on Relationships.',
    paragraph:
      "We've worked across the product journey, from manufacturing and sourcing to retail, e-commerce and fulfillment. We understand what happens on the product journey, because we've been there.",
    primaryCta: { label: "I'm a Manufacturer or Brand", href: '/u-s-market-entry/' },
    secondaryCta: { label: "I'm a Retailer or Buyer", href: '/u-s-retailers-partners/' },
    capabilities: [
      'Manufacturing',
      'U.S. Market',
      'Retail',
      'Wholesale',
      'E-Commerce',
      'Private Label',
      'Fulfillment',
      'Sourcing',
      'Product Development',
      'Warehousing',
      'Marketplaces',
      'Distribution',
      'Brands',
      'Operations',
    ],
    video: {
      src: '/media/wear-sierra-about-us.mp4',
      alt: 'Wear Sierra marketplace overview video',
    },
  },

  bothSides: {
    eyebrow: '02 / What We Do',
    title: 'We Know Both Sides of the Product.',
    intro: "From the factory floor to the store shelf, we've done the work ourselves.",
    making: {
      label: 'Making',
      descriptor: 'From idea to finished product',
      items: [
        'Product Development',
        'Sourcing',
        'Manufacturing & Production',
        'International Partnerships',
      ],
    },
    selling: {
      label: 'Selling',
      descriptor: 'From warehouse to customer',
      items: ['Wholesale', 'U.S. Retail', 'E-Commerce & Marketplaces', 'Fulfillment'],
    },
    closing:
      'More than 20 years on both sides means we know where products get stuck, and how to keep them moving.',
  },

  whoWeWorkWith,

  retailExperience: {
    eyebrow: '04 / Retail Experience',
    headline: "We've Been Around the U.S. Retail Market for a While.",
    summary:
      "We've worked with national retailers, wholesale customers and online marketplaces, and we know what it takes to bring products from the factory to the customer.",
    retailers: ["Kohl's", 'Target', 'JCPenney', 'Amazon', 'Walmart'],
    caption: 'and other national retailers.',
  },

  ourBrands: {
    eyebrow: '05 / Our Brands',
    headline: 'Our Brands',
    brands: [
      {
        name: 'Sierra Socks',
        subline: '25+ years in apparel & legwear',
        channels: ['Wholesale', 'Private Label', 'DTC', 'Retail'],
        image: sierraSocksImage,
        imageAlt: 'Sierra Socks logo',
        imageWidth: 2172,
        imageHeight: 724,
        href: 'https://www.sierrasocks.com/',
        cta: 'Visit Sierra Socks',
      },
      {
        name: 'Wear Sierra',
        subline: 'Apparel, accessories & home',
        channels: ['E-Commerce', 'Marketplace', 'Product Development'],
        image: wearSierraImage,
        imageAlt: 'Wear Sierra logo',
        imageWidth: 1774,
        imageHeight: 887,
        href: 'https://www.wearsierra.com/',
        cta: 'Visit Wear Sierra',
      },
    ],
  },

  finalCta: {
    headline: "We're Here to Talk.",
    line: "A Pittsboro, North Carolina team. Tell us what you're building.",
    cta: { label: "Let's Talk", href: '/contact/' },
  },
} as const
