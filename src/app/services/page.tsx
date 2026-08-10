'use client'

import Footer from '@/components/Footer'
import Services from '@/components/ServicesFixed'

export default function ServicesPage() {
  return (
    <main className="relative">
      <div className="pt-navbar">
        <Services />
      </div>
      <Footer />
    </main>
  )
}
