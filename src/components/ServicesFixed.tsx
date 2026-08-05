'use client'

import React from 'react'
import { Building2, ShieldCheck, Compass, HardHat, FileText, Users } from 'lucide-react'
import { services } from '@/lib/brand'

const ServicesFixed = () => {
  const iconMap = {
    Building2: Building2,
    ShieldCheck: ShieldCheck,
    Briefcase: Compass,
    Activity: HardHat,
    FileText: FileText,
    Users: Users,
  }

  return (
    <section className="py-20 bg-white">
      <div className="content-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#D71920]">
            Our Engineering Solutions
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-heading text-black mt-2">
            Consultancy Services
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Building2
            return (
              <div key={service.id} className="group relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-[#E9E4DC] bg-white p-8 shadow-[0_16px_44px_rgba(17,17,17,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D71920]/25 hover:shadow-[0_24px_60px_rgba(17,17,17,0.12)]">
                <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#D71920] transition-all duration-300 group-hover:w-full" />
                <div className="hidden sm:block absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#D71920]/5 transition-all duration-500 group-hover:scale-[2.2]" />
                <div className="flex flex-col gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[1.1rem] bg-[#D71920]/10 text-[#D71920] shadow-[0_8px_20px_rgba(215,25,32,0.12)] transition-all duration-300 group-hover:bg-[#D71920] group-hover:text-white group-hover:shadow-[0_12px_28px_rgba(215,25,32,0.28)]">
                    <IconComponent className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold leading-tight tracking-tight text-black transition-colors duration-300 group-hover:text-[#D71920]">{service.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-gray-500">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default ServicesFixed
