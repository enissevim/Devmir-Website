import { Link } from 'react-router-dom'
import { site } from '@/content/site'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Rule } from '@/components/ui/Rule'
import { normalizeInternalPath } from '@/lib/paths'
import { SiteLogo } from './SiteLogo'

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
    return (
      <a
        href={href}
        className="text-sm text-charcoal transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {label}
      </a>
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

  return (
    <footer className="border-t border-green/10 bg-white pt-16 pb-10">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <SiteLogo linked={false} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{footer.tagline}</p>
            <div className="mt-6">
              <Button as="a" href="/contact/" variant="primary" className="px-5 py-2.5 text-sm">
                Start a Conversation
              </Button>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Navigation
            </p>
            <ul className="mt-4 space-y-3">
              {footer.nav.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href} label={item.label} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Brands</p>
            <ul className="mt-4 space-y-3">
              {footer.brands.map((brand) => (
                <li key={brand.href}>
                  <FooterLink href={brand.href} label={brand.label} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Contact</p>
            <address className="mt-4 space-y-2 not-italic">
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

        <Rule className="my-10" />

        <p className="text-xs text-muted">{footer.copyright}</p>
      </Container>
    </footer>
  )
}
