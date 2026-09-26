import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { site } from '@/content/site'
import { Button } from '@/components/ui/Button'
import { normalizeInternalPath, pathsMatch } from '@/lib/paths'
import { SiteLogo } from './SiteLogo'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  pathname: string
  hash?: string
}

export function MobileMenu({ open, onClose, pathname, hash = '' }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab' || !panelRef.current) return

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      )
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  useEffect(() => {
    if (open && panelRef.current) {
      const firstLink = panelRef.current.querySelector('a, button') as HTMLElement | null
      firstLink?.focus()
    }
  }, [open])

  if (!open) return null

  return (
    <div
      id="mobile-menu"
      className="fixed inset-0 z-40 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div
        className="absolute inset-0 bg-navy/20"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <SiteLogo linked={false} />
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-6 py-8" aria-label="Mobile navigation">
          {site.nav.map((item) => {
            const isHash = item.href.startsWith('/#')

            if (isHash) {
              const active = item.href === '/#our-brands' && pathname === '/' && hash === '#our-brands'
              const hashValue = item.href.slice(1)

              return (
                <Link
                  key={item.href}
                  to={{ pathname: '/', hash: hashValue }}
                  onClick={onClose}
                  className={`rounded-sm px-2 py-4 font-display text-2xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    active ? 'text-accent' : 'text-navy hover:text-accent'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              )
            }

            const active = pathsMatch(item.href, pathname)

            return (
              <Link
                key={item.href}
                to={normalizeInternalPath(item.href)}
                onClick={onClose}
                className={`rounded-sm px-2 py-4 font-display text-2xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  active ? 'text-accent' : 'text-navy hover:text-accent'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="border-t border-border px-6 py-6">
          <Button as="a" href="/contact/" variant="primary" className="w-full">
            Contact
          </Button>
        </div>
      </div>
    </div>
  )
}
