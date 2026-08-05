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
      <div className="w-full max-w-none px-3 sm:px-4 lg:px-6">
        <div className="mx-auto mb-12 w-full max-w-6xl px-2 text-center md:mb-16">
          <span className="text-[12px] font-semibold uppercase tracking-[0.34em] text-[#D71920]">Our Services</span>
          <h2 className="mt-3 text-[0.78rem] font-semibold leading-tight tracking-[-0.03em] text-black sm:text-[1.45rem] sm:tracking-[-0.025em] md:text-[1.85rem] lg:text-[2.25rem] xl:text-[2.65rem] 2xl:text-[2.95rem]">
            Comprehensive Structural Engineering Solutions
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-0 grid gap-4 grid-cols-1 min-[360px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 auto-rows-fr items-stretch"
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Building2
            return (
              <motion.div key={service.id} variants={cardVariants} className="group relative flex h-full min-h-0 flex-col justify-between overflow-hidden rounded-[1rem] border border-[#ECECEC] bg-white p-3 sm:p-4 md:p-6 shadow-[0_12px_30px_rgba(17,17,17,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(17,17,17,0.08)]">
                  <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#D71920] transition-all duration-300 group-hover:w-full" />
                  <div className="mb-4 flex h-9 w-9 md:h-13 md:w-13 items-center justify-center rounded-[0.9rem] bg-[#D71920]/10 text-[#D71920] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D71920] group-hover:text-white">
                    <IconComponent className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.6} />
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-3">
                    <div>
                      <h3 className="mb-2 text-[0.95rem] md:text-[1.05rem] font-semibold leading-tight tracking-[-0.01em] text-black transition-colors duration-300 group-hover:text-[#D71920]">{service.title}</h3>
                      <p className="text-[13px] md:text-[15px] font-normal leading-6 md:leading-7 text-gray-600">{service.description}</p>
                    </div>
                  </div>
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
