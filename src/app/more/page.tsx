'use client'

import Link from 'next/link'
import Footer from '@/components/Footer'
import { ArrowRight } from 'lucide-react'

const moreLinks = [
  { name: 'News & Articles', href: '/articles', description: 'Insights, industry updates, and structural engineering stories.' },
  { name: 'Careers', href: '/careers', description: 'Explore current openings and join the Kenmos engineering team.' },
  { name: 'Events', href: '/events', description: 'See upcoming industry events, seminars, and company milestones.' },
]

export default function MorePage() {
  return (
    <div className="min-h-screen bg-white">

      <main className="mx-auto max-w-[1200px] px-5 pb-20 pt-[120px] sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D71920]">More</p>
          <h1 className="mt-3 text-3xl font-black uppercase tracking-tight text-gray-950 md:text-5xl">Explore More</h1>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
            Discover the latest insights, project highlights, career opportunities, and upcoming engineering events.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {moreLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group rounded-[24px] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D71920] hover:shadow-[0_16px_40px_rgba(215,25,32,0.12)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold uppercase tracking-[0.18em] text-gray-950">{item.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
                </div>
                <span className="mt-1 inline-flex rounded-full bg-[#FCE8E8] p-2 text-[#D71920] transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
