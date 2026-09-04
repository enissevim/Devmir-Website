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
      'Whether you are an international manufacturer or brand exploring the U.S. market, or a retailer seeking reliable product and supply solutions, we would be pleased to hear from you.',
  },

  audiences: [
    {
      title: 'International manufacturers and brands',
      description:
        'Discuss U.S. market entry, marketplace access, fulfillment, and operational support for established manufacturers and brands entering the United States.',
      variant: 'dark' as const,
    },
    {
      title: 'U.S. retailers and partners',
      description:
        'Discuss product sourcing, supply relationships, private-label programs, and partnership opportunities with an established U.S. operator.',
      variant: 'lightGreen' as const,
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
      'Thank you for reaching out. We will review your message and respond as soon as possible.',
  },

  cta: {
    headline: 'Prefer to reach out directly?',
    subcopy:
      'Our team in Pittsboro, North Carolina is available by phone or email for U.S. market entry, retail partnerships, and supply discussions.',
    button: { label: 'Email Devmir', href: 'mailto:veli@devmir.com' },
  },
} as const
