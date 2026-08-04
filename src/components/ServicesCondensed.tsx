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
    <section id="services" className="section-padding border-y border-[#ECECEC] bg-[#FAFAFA]">
      <div className="content-container">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="text-[12px] font-semibold uppercase tracking-[0.34em] text-[#D71920]">Our Services</span>
          <h2 className="mt-3 text-[2rem] font-semibold leading-[1.12] tracking-[-0.02em] text-black sm:text-[2.4rem] lg:text-[2.8rem]">
            Comprehensive Structural Engineering Solutions
          </h2>
        </div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Building2
            return (
              <motion.div key={service.id} variants={cardVariants} className="group relative flex h-full flex-col overflow-hidden rounded-[1rem] border border-[#ECECEC] bg-white p-7 shadow-[0_12px_30px_rgba(17,17,17,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(17,17,17,0.08)]">
                <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#D71920] transition-all duration-300 group-hover:w-full" />
                <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-[0.9rem] bg-[#D71920]/10 text-[#D71920] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D71920] group-hover:text-white">
                  <IconComponent className="h-6 w-6" strokeWidth={1.6} />
                </div>
                <h3 className="mb-3 text-[1.05rem] font-semibold leading-tight tracking-[-0.01em] text-black transition-colors duration-300 group-hover:text-[#D71920]">{service.title}</h3>
                <p className="text-[15px] font-normal leading-7 text-gray-600">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="mt-12 text-center">
          <motion.a whileHover={{ scale: 1.03, x: 4 }} whileTap={{ scale: 0.97 }} href="/services" className="group inline-flex items-center gap-3 rounded-full bg-[#D71920] px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.24em] text-white shadow-[0_14px_30px_rgba(215,25,32,0.22)] transition-all duration-300 hover:bg-[#be1218]">
            VIEW ALL SERVICES
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default Services
