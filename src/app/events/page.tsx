'use client'

import React from 'react'
import { Calendar } from 'lucide-react'
import Footer from '@/components/Footer'

export default function EventsPage() {
  return (
    <main className="relative min-h-screen bg-white">

      <section className="relative pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-[#111112] text-white">
        <div className="relative max-w-7xl mx-auto text-center flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 text-[#D71920] text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-4 h-4" />
            Events & Highlights
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#D71920] font-heading uppercase leading-none mt-2">
            Engineering Events
          </h1>
          <p className="text-sm md:text-lg text-gray-300 max-w-3xl leading-relaxed mt-2 font-light">
            Our team regularly participates in technical reviews, project coordination sessions, and industry-facing engineering activities.
          </p>
        </div>
      </section>

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
