'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Compass, ShieldCheck, HardHat, FileText, Users } from 'lucide-react'
import Footer from '@/components/Footer'
import { services } from '@/lib/brand'

export default function DepartmentsPage() {
  const iconMap = {
    Building2: Building2,
    ShieldCheck: ShieldCheck,
    Briefcase: Compass,
    Activity: HardHat,
    FileText: FileText,
    Users: Users,
  }

  return (
    <main className="relative min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-[#111112] text-white">
        <div className="relative max-w-7xl mx-auto text-center flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 text-[#D71920] text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            Our Departments
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#D71920] font-heading uppercase leading-none mt-2">
            Engineering Areas
          </h1>
          <p className="text-sm md:text-lg text-gray-300 max-w-3xl leading-relaxed mt-2 font-light">
            Specialized engineering teams delivering analysis, structural detailing, material optimization, and site supervision.
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {services.map((dept) => {
            const IconComponent = iconMap[dept.icon as keyof typeof iconMap] || Building2
            return (
              <div key={dept.id} className="group relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-[#E9E4DC] bg-white p-8 shadow-[0_16px_44px_rgba(17,17,17,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D71920]/25 hover:shadow-[0_24px_60px_rgba(17,17,17,0.12)]">
                <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#D71920] transition-all duration-300 group-hover:w-full" />
                <div className="hidden sm:block absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#D71920]/5 transition-all duration-500 group-hover:scale-[2.2]" />
                <div className="flex flex-col gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[1.1rem] bg-[#D71920]/10 text-[#D71920] shadow-[0_8px_20px_rgba(215,25,32,0.12)] transition-all duration-300 group-hover:bg-[#D71920] group-hover:text-white group-hover:shadow-[0_12px_28px_rgba(215,25,32,0.28)]">
                    <IconComponent className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold leading-tight tracking-tight text-black transition-colors duration-300 group-hover:text-[#D71920]">{dept.title}</h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">{dept.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <Footer />
    </main>
  )
}
