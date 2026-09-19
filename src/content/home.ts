import brandsPartnersImage from '@/assets/images/brands-partners.png'
import heroImage from '@/assets/images/hero-main.png'
import sockImage from '@/assets/images/sock-img.png'
import platformsImage from '@/assets/images/platforms.png'
import sierraSocksImage from '@/assets/images/sierra-socks.png'
import wearSierraImage from '@/assets/images/wear-sierra.png'
import { site } from '@/content/site'

export const homeMeta = {
  title: 'Devmir | Connecting Global Manufacturing with U.S. Retail & E-Commerce',
  description:
    'Founded in 2002 in Pittsboro, North Carolina, Devmir brings hands-on experience in making and selling products across manufacturing, U.S. retail, e-commerce, marketplaces, fulfillment, and brands including Sierra Socks and Wear Sierra.',
  path: '/',
  image: `${site.url}/og-default.jpg`,
  imageAlt: 'Devmir: We know products from both sides',
}

export const homeContent = {
  hero: {
    headline: 'We Know Products From Both Sides.',
    subcopy:
      'We started with socks in Pittsboro, North Carolina. Twenty years later, we are still in the work: making products overseas, running our own brands, and selling across U.S. retail and online.',
    tagline: 'Made with care. Sold with experience. Built on relationships.',
    primaryCta: { label: 'Our story', href: '/#our-story' },
    secondaryCta: { label: "Let's Talk", href: '/contact/' },
    image: heroImage,
    imageAlt:
      'Devmir Legwear team presentation showcasing Sierra Socks and Wear Sierra brands',
    video: {
      src: '/media/wear-sierra-about-us.mp4',
      alt: 'Wear Sierra marketplace overview video',
    },
  },

  story: {
    headline: 'It Started With a Sock.',
    year: '2002',
    paragraphs: [
      'In 2002, we started in Pittsboro with legwear and wholesale buyers who cared about quality and consistency.',
      'Socks led us into manufacturing, our own brands, retail shelves, and online orders, all from the same company.',
    ],
    closing: "We're proud of where we started. And we're excited about where we're going.",
    link: { label: 'Read our full story', href: '/about/' },
    image: sockImage,
    imageAlt: 'Colorful argyle dress sock with brown leather Oxford shoe',
    imageWidth: 1119,
    imageHeight: 1405,
  },

  bothSides: {
    eyebrow: 'end to end experience',
    headline: "We've Been on Both Sides.",
    bridge: "That's why we don't just know one side of the table.",
    making: {
      title: 'Making the Product',
      items: [
        'Factories we trust',
        'Production and sourcing',
        'Product development',
        'Getting quality right',
        'Türkiye and overseas partners',
      ],
      description:
        'We have worked with the same manufacturers for years, including heritage connections in Türkiye. We know what it takes to develop a product, source it well, and stand behind it.',
    },
    selling: {
      title: 'Selling the Product',
      items: [
        'U.S. retail shelves',
        'Wholesale accounts',
        'Our own websites',
        'Amazon and marketplaces',
        'Brand building',
        'Fulfillment and shipping',
        'Real customers',
      ],
      description:
        'We have spent more than two decades selling through retail, wholesale, and online. Running Sierra Socks and Wear Sierra means we have packed orders, handled returns, and learned what buyers and customers actually expect.',
    },
  },

  ourBrands: {
    eyebrow: 'Brands we run',
    headline: 'We did not just advise. We built and operated these brands.',
    summary:
      'Sierra Socks and Wear Sierra are proof that we know the selling side from the inside out. Our brands are how we learned the U.S. market, one product and one customer at a time.',
    brands: [
      {
        name: 'Sierra Socks',
        tagline: 'Our roots in legwear',
        description:
          "Sierra Socks is where we learned legwear: men's, women's, kids', work, dress, everyday. Running it taught us what actually sells in U.S. stores.",
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
        tagline: 'Our next chapter',
        description:
          'Wear Sierra is our next chapter: a multi-category marketplace for apparel, accessories, footwear, and home. Building it taught us what it takes to reach U.S. shoppers online.',
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
            'relative z-10 mx-auto h-auto max-h-40 w-full max-w-[640px] object-contain sm:max-h-44',
          overlay: 'absolute inset-0 bg-green/5 mix-blend-multiply',
          accent: 'border-t-green',
        },
      },
    ],
  },

  marketReach: {
    eyebrow: 'Where we show up',
    headline: "We've sold through the places shoppers already trust.",
    summary:
      'Over the years we have built connections with brand partners and the major U.S. retailers and online platforms where products actually move.',
    brandsPartners: {
      eyebrow: 'Our Family',
      headline: 'Brands we work with across retail and wholesale',
      image: brandsPartnersImage,
      imageAlt:
        'Brand partners Devmir works with including Sierra Socks, Wear Sierra, Dore, Moda Fabrik, and others',
      imageWidth: 1368,
      imageHeight: 968,
    },
    platforms: {
      image: platformsImage,
      imageAlt:
        'Devmir retail and marketplace presence including Kohls, Target, JCPenney, Amazon, Walmart, and more',
      imageWidth: 1693,
      imageHeight: 929,
    },
  },

  relationships: {
    eyebrow: 'Relationships matter',
    headline: "It's how we work.",
    summary:
      'We did not learn this business from a slide deck. We learned it from factories, buyers, customers, and the people we have worked with for years.',
    items: [
      {
        title: 'The factories',
        description:
          'We have worked with the same manufacturers for years, including long-standing ties in Türkiye. That is where we learned what it takes to get a product right.',
      },
      {
        title: 'Retail and wholesale partners',
        description:
          'We know what buyers expect because we have sold to them ourselves, through wholesale programs, retail accounts, and online listings.',
      },
      {
        title: 'Our customers',
        description:
          'Running Sierra Socks and Wear Sierra taught us what people actually want: good product, honest pricing, and orders that arrive when they should.',
      },
      {
        title: 'Türkiye and beyond',
        description:
          'Our heritage connections in Türkiye run deep. They are part of how we connect overseas production with the U.S. market we know from the inside.',
      },
    ],
  },

  news: {
    eyebrow: "What's new",
    headline: "A few things we're working on",
    items: [
      {
        date: 'January 2026',
        title: 'More marketplace listings',
        description:
          'We are putting more products on major U.S. marketplaces, for our brands and for partners who want a path in.',
      },
      {
        date: 'November 2025',
        title: 'New retail accounts',
        description:
          'We are working with more U.S. retailers and wholesale partners, opening up distribution for our brands and for manufacturers we believe in.',
      },
      {
        date: 'September 2025',
        title: 'Helping brands enter the U.S.',
        description:
          'We are supporting international manufacturers and brands with U.S. fulfillment, marketplace access, and the local know-how that only comes from doing this work for years.',
      },
    ],
  },

  finalCta: {
    subcopy:
      'We are a team in Pittsboro, North Carolina with more than 20 years of experience.\nTell us what you are building and we will take it from there.',
    cta: { label: 'Reach out', href: '/contact/' },
  },

  // Retained for inner pages
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
} as const
