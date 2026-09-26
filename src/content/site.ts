export const site = {
  name: 'Devmir Legwear Inc.',
  shortName: 'Devmir',
  url: 'https://devmir.com',
  tagline: 'From manufacturing to the customer.',
  positioning: 'From manufacturing to the customer.',

  contact: {
    company: 'Devmir Legwear Inc.',
    address: {
      street: '136 Fayetteville Street',
      city: 'Pittsboro',
      state: 'NC',
      zip: '27312',
      country: 'United States',
    },
    phone: '919-545-5500',
    phoneHref: 'tel:+19195455500',
    email: 'veli@devmir.com',
    emailHref: 'mailto:veli@devmir.com',
  },

  nav: [
    { label: 'U.S. Market Entry', href: '/u-s-market-entry/' },
    { label: 'Retailers & Partners', href: '/u-s-retailers-partners/' },
    { label: 'About', href: '/about/' },
    { label: 'Brands', href: '/#our-brands' },
  ],

  footer: {
    nav: [
      { label: 'U.S. Market Entry', href: '/u-s-market-entry/' },
      { label: 'Retailers & Partners', href: '/u-s-retailers-partners/' },
      { label: 'About', href: '/about/' },
      { label: 'Brands', href: '/#our-brands' },
      { label: 'Contact', href: '/contact/' },
    ],
    brands: [
      { label: 'Sierra Socks', href: 'https://www.sierrasocks.com/' },
      { label: 'Wear Sierra', href: 'https://www.wearsierra.com/' },
    ],
    copyright: '© 2026 Devmir Legwear Inc. All Rights Reserved.',
  },
} as const

export type SiteConfig = typeof site
