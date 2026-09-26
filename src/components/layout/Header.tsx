import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { site } from '@/content/site'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { pathsMatch, normalizeInternalPath } from '@/lib/paths'
import { useScrolled } from '@/hooks/usePrefersReducedMotion'
import { MobileMenu } from './MobileMenu'
import { SiteLogo } from './SiteLogo'

function isActive(href: string, pathname: string, hash: string): boolean {
  if (href === '/#our-brands') return pathname === '/' && hash === '#our-brands'
  return pathsMatch(href, pathname)
}

function NavLink({
  href,
  label,
  active,
}: {
  href: string
  label: string
  active: boolean
}) {
  const baseClass =
    'relative py-1 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2'

  const content = (
    <>
      {label}
      {active && (
        <span className="absolute -bottom-1 left-0 h-px w-full bg-accent" aria-hidden="true" />
      )}
    </>
  )

  if (href.startsWith('/#')) {
    const hash = href.slice(1)
    return (
      <Link
        to={{ pathname: '/', hash }}
        className={`${baseClass} text-charcoal hover:text-accent`}
      >
        {content}
      </Link>
    )
  }

  return (
    <Link
      to={normalizeInternalPath(href)}
      className={`${baseClass} ${active ? 'text-accent' : 'text-charcoal hover:text-accent'}`}
      aria-current={active ? 'page' : undefined}
    >
      {content}
    </Link>
  )
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled()
  const location = useLocation()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const pathname = location.pathname
  const hash = location.hash

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
    menuButtonRef.current?.focus()
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
          scrolled
            ? 'border-b border-border bg-white/90 shadow-[0_1px_0_rgba(11,20,36,0.04)] backdrop-blur-md'
            : 'border-b border-transparent bg-white'
        }`}
      >
        <Container as="div" className="flex h-[84px] items-center justify-between gap-4 xl:gap-8">
          <SiteLogo />

          <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Main navigation">
            {site.nav.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                active={isActive(item.href, pathname, hash)}
              />
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button as="a" href="/contact/" variant="primary" className="px-5 py-2.5 text-sm">
              Contact
            </Button>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="flex h-11 w-11 items-center justify-center text-navy lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-navy transition-all duration-300 ${
                  menuOpen ? 'top-[7px] rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] block h-0.5 w-5 bg-navy transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-navy transition-all duration-300 ${
                  menuOpen ? 'top-[7px] -rotate-45' : 'top-[14px]'
                }`}
              />
            </span>
          </button>
        </Container>
      </header>

      <MobileMenu
        key={`${pathname}${hash}`}
        open={menuOpen}
        onClose={closeMenu}
        pathname={pathname}
        hash={hash}
      />
    </>
  )
}
