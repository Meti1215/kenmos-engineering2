'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HardHat, Mail } from 'lucide-react'
import { teamMembers } from '@/lib/brand'

const Team = () => {
  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
  const cardVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }

  return (
    <section id="careers" className="section-padding border-y border-gray-200/70 bg-[linear-gradient(180deg,#f7f3eb_0%,#f5efe8_100%)]">
      <div className="content-container">
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D71920] md:text-xs">Our Experts</span>
          <h2 className="mt-3 text-3xl font-black leading-tight text-black md:text-4xl lg:text-5xl">Meet the Structural Engineering Team</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-gray-500">Dedicated professionals applying advanced analysis, code compliance, and structural optimization to shape secure foundations.</p>
        </div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid gap-6 md:grid-cols-3 md:gap-8">
          {teamMembers.map((member) => (
            <motion.div key={member.name} variants={cardVariants} className="group relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-[#E9E4DC] bg-white shadow-[0_16px_44px_rgba(17,17,17,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#D71920]/25 hover:shadow-[0_26px_65px_rgba(17,17,17,0.13)]">
              <div className="absolute left-0 top-0 z-20 h-[3px] w-0 bg-[#D71920] transition-all duration-300 group-hover:w-full" />
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={member.image} alt={member.name} className="h-full w-full object-cover transition-transform duration-600 ease-out group-hover:scale-106" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute right-4 top-4 rounded-[0.85rem] bg-[#D71920] p-2.5 text-white shadow-[0_10px_24px_rgba(215,25,32,0.28)] transition-transform duration-300 group-hover:scale-110">
                  <HardHat className="h-4 w-4" />
                </div>
              </div>

              <div className="flex flex-grow flex-col justify-between gap-5 p-6 md:p-8">
                <div>
                  <h3 className="text-lg font-bold leading-tight tracking-tight text-black transition-colors duration-300 group-hover:text-[#D71920] md:text-xl">{member.name}</h3>
                  <p className="mt-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#D71920]">{member.role}</p>
                  <p className="mt-4 text-sm font-light leading-relaxed text-gray-500">{member.bio}</p>
                </div>
                <div className="flex items-center gap-3 border-t border-gray-100/80 pt-4 text-gray-400">
                  <div className="flex h-8 w-8 items-center justify-center rounded-[0.6rem] bg-gray-50 transition-all duration-300 group-hover:bg-[#D71920]/10">
                    <Mail className="h-4 w-4 transition-colors duration-300 group-hover:text-[#D71920]" />
                  </div>
                  <span className="text-xs font-medium">Addis Ababa Office</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Team
