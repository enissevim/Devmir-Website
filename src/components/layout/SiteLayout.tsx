import type { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface SiteLayoutProps {
  children: ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main-content" className="flex-1 pt-[84px]">
        {children}
      </main>
      <Footer />
    </div>
  )
}
