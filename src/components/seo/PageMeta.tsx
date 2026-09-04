import { Helmet } from 'react-helmet-async'
import { site } from '@/content/site'
import { normalizeInternalPath } from '@/lib/paths'

interface PageMetaProps {
  title: string
  description: string
  path: string
  image?: string
  imageAlt?: string
}

export function PageMeta({ title, description, path, image, imageAlt }: PageMetaProps) {
  const canonicalPath = normalizeInternalPath(path)
  const url = `${site.url}${canonicalPath === '/' ? '' : canonicalPath}`
  const ogImage = image ?? `${site.url}/og-default.jpg`
  const ogImageAlt = imageAlt ?? 'Devmir: Connecting Quality Manufacturing with the U.S. Market'

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    description: site.tagline,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: site.contact.phone,
      email: site.contact.email,
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.contact.address.street,
      addressLocality: site.contact.address.city,
      addressRegion: site.contact.address.state,
      postalCode: site.contact.address.zip,
      addressCountry: 'US',
    },
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:site_name" content={site.shortName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
    </Helmet>
  )
}
