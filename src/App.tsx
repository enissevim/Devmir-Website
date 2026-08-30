import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ScrollToHash } from '@/components/layout/ScrollToHash'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'
import { HomePage } from '@/pages/HomePage'
import { MarketEntryPage } from '@/pages/MarketEntryPage'
import { RetailersPartnersPage } from '@/pages/RetailersPartnersPage'

export function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <SiteLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/u-s-market-entry" element={<MarketEntryPage />} />
          <Route path="/u-s-market-entry/" element={<MarketEntryPage />} />
          <Route path="/u-s-retailers-partners" element={<RetailersPartnersPage />} />
          <Route path="/u-s-retailers-partners/" element={<RetailersPartnersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact/" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  )
}
