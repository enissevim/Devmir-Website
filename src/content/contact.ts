export const contactMeta = {
  title: 'Contact Devmir | Start a Conversation',
  description:
    'Contact Devmir Legwear Inc. to discuss U.S. market entry, retail partnerships, product sourcing, or operational support. Based in Pittsboro, North Carolina.',
  path: '/contact/',
}

export const contactContent = {
  hero: {
    headline: "Let's Start a Conversation",
    subcopy:
      'Whether you are an international manufacturer or brand exploring the U.S. market, or a retailer seeking reliable product and supply solutions, we would be pleased to hear from you.',
  },

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
} as const
