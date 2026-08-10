'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Landmark, FileCheck, HelpCircle } from 'lucide-react'
import Footer from '@/components/Footer'
import { brand } from '@/lib/brand'

export default function InvestorsPage() {
  const highlights = [
    {
      title: 'Cost Control & Audits',
      description: 'We prioritize design optimization, ensuring our steel detailing and concrete models remain highly cost-efficient.',
      icon: Landmark,
    },
    {
      title: 'Project Value Management',
      description: 'Having handled projects with values in the hundreds of millions to over a billion Birr, we maintain absolute financial design accountability.',
      icon: FileCheck,
    },
    {
      title: 'Compliance & Standards',
      description: 'Our designs strictly adhere to national building guidelines and international standards (ASCE, ACI, Eurocodes), minimizing structural risk.',
      icon: HelpCircle,
    },
  ]

  return (
    <main className="relative min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-[#111112] text-white">
        <div className="relative max-w-7xl mx-auto text-center flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 text-[#D71920] text-xs font-bold uppercase tracking-wider">
            <Landmark className="w-4 h-4" />
            Corporate Governance
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#D71920] font-heading uppercase leading-none mt-2">
            Value Management
          </h1>
          <p className="text-sm md:text-lg text-gray-300 max-w-3xl leading-relaxed mt-2 font-light">
            Risk mitigation, material efficiency, and structural safety standards guiding Kenmos Engineering.
          </p>
        </div>
      </section>

      {/* Investor Highlights Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <div key={item.title} className="border border-gray-100 p-8 flex flex-col gap-4 bg-white hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-50 text-[#D71920] flex items-center justify-center">
                <item.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-black">{item.title}</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
