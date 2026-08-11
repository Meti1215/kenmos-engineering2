'use client'

import React from 'react'
import { Calendar } from 'lucide-react'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

export default function EventsPage() {
  return (
    <main className="relative min-h-screen bg-white">

      <PageHero
        badge="Events & Highlights"
        title="Engineering Events"
        description="Our team regularly participates in technical reviews, project coordination sessions, and industry-facing engineering activities."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Events' },
        ]}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border border-gray-100 bg-gray-50 p-6 md:p-8">
          <div className="flex items-center gap-3 text-[#D71920] text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-4 h-4" />
            <span>No Upcoming Events</span>
          </div>
          <p className="mt-3 max-w-3xl text-sm text-gray-600 font-light leading-relaxed">
            There are currently no scheduled public events to announce. We are continuing to support technical reviews, site coordination, and project delivery activities across our active portfolio.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
