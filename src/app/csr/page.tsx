'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ShieldCheck, GraduationCap } from 'lucide-react'
import Footer from '@/components/Footer'
import { brand } from '@/lib/brand'

export default function CsrPage() {
  const pillars = [
    {
      title: 'Structural Safety Audits',
      description: 'We conduct complimentary structural safety checks and integrity assessments for public facilities and school buildings in Addis Ababa.',
      icon: ShieldCheck,
    },
    {
      title: 'Engineering Internship Mentorship',
      description: 'We run a regular mentorship program for young Ethiopian civil engineering students from Addis Ababa University, providing hands-on steel detailing experience.',
      icon: GraduationCap,
    },
  ]

  return (
    <main className="relative min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-[#111112] text-white">
        <div className="relative max-w-7xl mx-auto text-center flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 text-[#D71920] text-xs font-bold uppercase tracking-wider">
            <Heart className="w-4 h-4" />
            Social Responsibility
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#D71920] font-heading uppercase leading-none mt-2">
            Our Commitments
          </h1>
          <p className="text-sm md:text-lg text-gray-300 max-w-3xl leading-relaxed mt-2 font-light">
            Sharing our structural engineering expertise to build a safer, more skilled society in Ethiopia.
          </p>
        </div>
      </section>

      {/* CSR Pillars Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((item, idx) => (
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
