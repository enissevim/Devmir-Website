import { Link } from 'react-router-dom'
import devmirLogo from '@/assets/images/devmir-logo.png'
import { site } from '@/content/site'

interface SiteLogoProps {
  linked?: boolean
  className?: string
}

export function SiteLogo({ linked = true, className = '' }: SiteLogoProps) {
  const image = (
    <img
      src={devmirLogo}
      alt={site.shortName}
      className="h-8 w-auto object-contain sm:h-9"
      width={755}
      height={331}
    />
  )

  if (!linked) {
    return <span className={`inline-flex shrink-0 ${className}`}>{image}</span>
  }

  return (
    <Link
      to="/"
      className={`inline-flex shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${className}`}
      aria-label={`${site.shortName} home`}
    >
      {image}
    </Link>
  )
}
