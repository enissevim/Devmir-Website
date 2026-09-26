import { site } from '@/content/site'

export const contactMeta = {
  title: 'Contact Devmir | Start a Conversation',
  description:
    'Contact Devmir Legwear Inc. to discuss U.S. market entry, retail partnerships, product sourcing, or operational support. Based in Pittsboro, North Carolina.',
  path: '/contact/',
  image: `${site.url}/og-contact.jpg`,
  imageAlt: 'Contact Devmir Legwear Inc. in Pittsboro, North Carolina',
}

export const contactContent = {
  hero: {
    headline: "Let's Start a Conversation",
    subcopy:
      "Have a product you'd like to bring to the U.S.? Looking for a manufacturing or sourcing partner? Interested in retail, wholesale or e-commerce opportunities?\nTell us a little about what you're working on. We'd be happy to learn more.",
  },

  form: {
    name: 'contact',
    fields: {
      helpOptions: [
        { value: 'market-entry', label: 'U.S. Market Entry' },
        { value: 'manufacturing', label: 'Manufacturing' },
        { value: 'sourcing', label: 'Sourcing' },
        { value: 'retail-wholesale', label: 'Retail / Wholesale' },
        { value: 'private-label', label: 'Private Label' },
        { value: 'ecommerce', label: 'E-Commerce' },
        { value: 'fulfillment', label: 'Fulfillment' },
        { value: 'other', label: 'Other' },
      ],
    },
    submitLabel: "LET'S TALK",
    emailCta: 'Email us',
    businessLabel: 'Tell us a little about your business',
    helpLabel: 'What can we help with?',
    successMessage:
      'Thanks for reaching out. We will read your message and get back to you soon.',
  },

  cta: {
    headline: 'Prefer email?',
    subcopy:
      'Our team in Pittsboro, North Carolina is here by phone or email if you would rather reach out directly.',
    button: { label: 'Email us', href: 'mailto:veli@devmir.com' },
  },
} as const
