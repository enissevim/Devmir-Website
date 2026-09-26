import { Link } from 'react-router-dom'
import { site } from '@/content/site'
import { Container } from '@/components/ui/Container'
import { Rule } from '@/components/ui/Rule'
import { normalizeInternalPath } from '@/lib/paths'

function FooterLink({ href, label }: { href: string; label: string }) {
  if (href.startsWith('http')) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-charcoal transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {label}
      </a>
    )
  }

  if (href.startsWith('/#')) {
    const hash = href.slice(1)
    return (
      <Link
        to={{ pathname: '/', hash }}
        className="text-sm text-charcoal transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {label}
      </Link>
    )
  }

  return (
    <Link
      to={normalizeInternalPath(href)}
      className="text-sm text-charcoal transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {label}
    </Link>
  )
}

export function Footer() {
  const { contact, footer } = site
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-green/10 bg-white pt-20 pb-12">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          <div>
            <p className="type-label text-muted">Navigation</p>
            <ul className="mt-5 space-y-4">
              {footer.nav.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href} label={item.label} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="type-label text-muted">Brands</p>
            <ul className="mt-5 space-y-4">
              {footer.brands.map((brand) => (
                <li key={brand.href}>
                  <FooterLink href={brand.href} label={brand.label} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="type-label text-muted">Contact</p>
            <address className="mt-5 space-y-3 not-italic">
              <p className="text-sm text-charcoal">{contact.company}</p>
              <p className="text-sm leading-relaxed text-muted">
                {contact.address.street}
                <br />
                {contact.address.city}, {contact.address.state} {contact.address.zip}
                <br />
                {contact.address.country}
              </p>
              <p>
                <a
                  href={contact.phoneHref}
                  className="text-sm text-charcoal transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {contact.phone}
                </a>
              </p>
              <p>
                <a
                  href={contact.emailHref}
                  className="text-sm text-accent transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {contact.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <Rule className="my-12" />

        <p className="text-xs text-muted">
          © {year} Devmir Legwear Inc. All Rights Reserved.
        </p>
      </Container>
    </footer>
  )
}
