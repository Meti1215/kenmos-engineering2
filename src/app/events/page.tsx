'use client'

import React from 'react'
import { Calendar, MapPin, Building2, ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function EventsPage() {
  const highlights = [
    {
      title: 'Project Coordination Review',
      date: '2025',
      location: 'Addis Ababa',
      description: 'A focused design review session bringing together structural leads, site teams, and project stakeholders.',
      image: '/images/project_airforce.jpg',
    },
    {
      title: 'Steel Detailing Collaboration Forum',
      date: '2025',
      location: 'Kenmos Studio',
      description: 'A technical discussion on detailing consistency, constructability, and value-driven structural solutions.',
      image: '/images/project_capital_hotel.jpg',
    },
    {
      title: 'Engineering Site Highlight',
      date: '2024',
      location: 'Project Site',
      description: 'A recent on-site milestone that reflects the team’s hands-on structural supervision and coordination approach.',
      image: '/images/project_stadium.png',
    },
  ]

  return (
    <main className="relative min-h-screen bg-white">
      <Navigation />

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
        <div className="border border-gray-100 bg-gray-50 p-6 md:p-8 mb-10">
          <div className="flex items-center gap-3 text-[#D71920] text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-4 h-4" />
            <span>No Upcoming Events</span>
          </div>
          <p className="mt-3 max-w-3xl text-sm text-gray-600 font-light leading-relaxed">
            There are currently no scheduled public events to announce. We are continuing to support technical reviews, site coordination, and project delivery activities across our active portfolio.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-black font-heading text-black uppercase tracking-tight">
            Recent Company Highlights
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="group overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#D71920]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.date}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-black leading-tight">{item.title}</h3>
                <div className="mt-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  <MapPin className="w-3.5 h-3.5 text-[#D71920]" />
                  <span>{item.location}</span>
                </div>
                <p className="mt-3 text-sm text-gray-500 font-light leading-relaxed">{item.description}</p>
                <div className="mt-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#D71920]">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Project Activity</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
