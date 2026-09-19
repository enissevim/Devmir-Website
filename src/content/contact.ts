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
    headline: 'Want to talk?',
    subcopy:
      'Tell us a little about yourself and what you are working on. We will get back to you.',
  },

  audiences: [
    {
      title: 'International manufacturers and brands',
      description:
        'Tell us about your products and your U.S. plans. We can talk through marketplace access, fulfillment, and what it actually takes to sell here.',
    },
    {
      title: 'U.S. retailers and partners',
      description:
        'Tell us about your sourcing needs or partnership ideas. We bring more than 20 years of selling in U.S. retail and online.',
    },
  ],

  form: {
    name: 'contact',
    fields: {
      audienceOptions: [
        { value: 'manufacturer', label: 'International Manufacturer or Brand' },
        { value: 'retailer', label: 'U.S. Retailer or Partner' },
        { value: 'other', label: 'Other' },
      ],
    },
    submitLabel: 'Send Message',
    emailCta: 'Email Devmir',
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
