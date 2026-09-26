import sockImage from '@/assets/images/sock-img.png'
import { site } from '@/content/site'

export const aboutMeta = {
  title: 'About Devmir | Founded in 2002 in Pittsboro, North Carolina',
  description:
    'Devmir was founded in Pittsboro, North Carolina, in 2002. From legwear and wholesale into manufacturing, brands, retail, e-commerce, and U.S. fulfillment, all within the same company.',
  path: '/about/',
  image: `${site.url}/og-about.jpg`,
  imageAlt: 'About Devmir Legwear Inc., established U.S. market infrastructure since 2002',
}

export const aboutContent = {
  hero: {
    eyebrow: 'About Devmir',
    headline: 'It Started With a Sock.',
    paragraph:
      'Devmir was founded in Pittsboro, North Carolina, in 2002, working with legwear and wholesale buyers who cared about quality and consistency. Socks led us into manufacturing, our own brands, retail shelves, and online orders, all within the same company.',
    image: sockImage,
    imageAlt: 'Colorful argyle dress sock with brown leather Oxford shoe',
    imageWidth: 1119,
    imageHeight: 1405,
  },

  ourStory: {
    eyebrow: '01 / Our Story',
    headline: 'Founded in Legwear. Built Through Experience.',
    paragraph:
      'Over the years, we grew from legwear and wholesale into manufacturing, our own brands, retail, e-commerce, and U.S. fulfillment.',
    steps: [
      { label: 'Legwear & Wholesale', year: '2002' },
      { label: 'Manufacturing' },
      { label: 'Our Own Brands' },
      { label: 'Retail' },
      { label: 'E-Commerce & Marketplaces' },
      { label: 'U.S. Fulfillment' },
    ],
    pullQuote:
      "We didn't learn the market from the outside. We learned it by doing the work, one product and one order at a time.",
  },

  makingSelling: {
    eyebrow: '02 / Making & Selling',
    headline: 'We Know the Product From Both Ends.',
    making: {
      title: 'Making',
      text: "We have long-standing relationships with international manufacturers, supporting product sourcing, development, wholesale, and private-label programs. We know the production side because we've lived it.",
    },
    selling: {
      title: 'Selling',
      beforeSierra: 'We run ',
      sierraLabel: 'Sierra Socks',
      sierraHref: 'https://www.sierrasocks.com/',
      between: ' and ',
      wearLabel: 'Wear Sierra',
      wearHref: 'https://www.wearsierra.com/',
      afterWear:
        ' ourselves, operate U.S. warehousing and fulfillment, and sell across major retail, e-commerce, and marketplace channels.',
    },
    closing: 'That hands-on experience is what we bring to every partnership.',
  },

  workWithUs: {
    eyebrow: '03 / Work With Us',
    headline: 'Find the Right Place to Start.',
    cards: [
      {
        label: 'Manufacturers & Brands',
        title: 'Entering the U.S. Market',
        text: 'Strategy, retail and marketplace access, and U.S.-based operations for established international companies.',
        linkLabel: 'U.S. Market Entry →',
        href: '/u-s-market-entry/',
      },
      {
        label: 'Retailers & Buyers',
        title: 'Sourcing and Supply',
        text: 'Product sourcing, private-label development, and fulfillment support for U.S. retailers, marketplaces, and wholesalers.',
        linkLabel: 'Retailers & Partners →',
        href: '/u-s-retailers-partners/',
      },
    ],
  },

  cta: {
    headline: "Let's Start a Conversation.",
    line: "Tell us a little about what you're working on. We'd be happy to learn more.",
    cta: { label: "Let's Talk", href: '/contact/' },
  },
} as const
