'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Building2, ShieldCheck, Briefcase, Activity, FileText, Users, ArrowRight } from 'lucide-react'
import { services } from '@/lib/brand'

const iconMap = {
  Building2: Building2,
  ShieldCheck: ShieldCheck,
  Briefcase: Briefcase,
  Activity: Activity,
  FileText: FileText,
  Users: Users,
}

const Services = () => {
  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
  const cardVariants = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }

  return (
    <section id="services" className="section-padding border-y border-gray-200/70 bg-[linear-gradient(180deg,#f8f4ee_0%,#f5efe8_100%)]">
      <div className="content-container">
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D71920] md:text-xs">Our Services</span>
          <h2 className="mt-3 text-3xl font-black leading-tight text-black md:text-4xl lg:text-5xl">Comprehensive Structural Engineering Solutions</h2>
        </div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 md:gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Building2
            return (
              <motion.div key={service.id} variants={cardVariants} className="group relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-[#E9E4DC] bg-white p-7 shadow-[0_16px_44px_rgba(17,17,17,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#D71920]/25 hover:shadow-[0_26px_65px_rgba(17,17,17,0.13)]">
                <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#D71920] transition-all duration-300 group-hover:w-full" />
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#D71920]/5 transition-all duration-500 group-hover:scale-[2.5]" />
                <div>
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[1.1rem] bg-[#D71920]/10 text-[#D71920] shadow-[0_8px_20px_rgba(215,25,32,0.12)] transition-all duration-300 group-hover:bg-[#D71920] group-hover:text-white group-hover:shadow-[0_12px_28px_rgba(215,25,32,0.28)]">
                    <IconComponent className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-3 text-base font-bold leading-tight tracking-tight text-black transition-colors duration-300 group-hover:text-[#D71920] md:text-lg">{service.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-gray-500">{service.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="mt-14 text-center">
          <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="/services" className="group inline-flex items-center gap-3 rounded-full bg-[#D71920] px-8 py-4 text-xs font-bold uppercase tracking-[0.24em] text-white shadow-[0_14px_30px_rgba(215,25,32,0.22)] transition-all duration-300 hover:bg-[#be1218]">
            VIEW ALL SERVICES
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default Services
