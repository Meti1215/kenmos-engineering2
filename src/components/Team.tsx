'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HardHat, MapPin } from 'lucide-react'
import { teamMembers } from '@/lib/brand'

const Team = () => {
  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
  const cardVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }

  return (
    <section id="careers" className="section-padding border-y border-gray-200/70 bg-[linear-gradient(180deg,#f7f3eb_0%,#f5efe8_100%)]">
      <div className="content-container">
        <div className="mx-auto mb-10 w-full max-w-6xl px-2 text-center md:mb-14">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D71920] md:text-xs">Our Experts</span>
          <h2 className="mt-3 whitespace-nowrap text-[0.78rem] font-black leading-none tracking-[-0.03em] text-black sm:text-[1.4rem] sm:tracking-[-0.025em] md:text-[1.8rem] lg:text-[2.2rem] xl:text-[2.6rem] 2xl:text-[2.9rem]">Meet the Structural Engineering Team</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-gray-500">Dedicated professionals applying advanced analysis, code compliance, and structural optimization to shape secure foundations.</p>
        </div>

        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.1 }} 
          className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:gap-12 justify-items-center items-stretch w-full max-w-5xl mx-auto lg:pb-28"
        >
          {teamMembers.map((member, index) => {
            const offsetClass = index === 0 ? 'lg:top-0' : index === 1 ? 'lg:top-[40px]' : 'lg:top-[80px]'
            const spanClass = index === 0
              ? 'col-span-full justify-self-center md:col-start-auto md:row-start-auto md:col-span-1 md:justify-self-auto md:max-w-[380px] lg:col-span-1 lg:max-w-[340px] xl:max-w-[360px]'
              : index === 1
                ? 'col-span-full justify-self-center md:col-start-auto md:row-start-auto md:col-span-1 md:justify-self-auto md:max-w-[380px] lg:col-span-1 lg:max-w-[340px] xl:max-w-[360px]'
                : 'col-span-full justify-self-center md:col-start-auto md:row-start-auto md:col-span-1 md:justify-self-auto md:max-w-[380px] lg:col-span-1 lg:max-w-[340px] xl:max-w-[360px]'
            const mobileWidthClass = 'w-full max-w-[430px] md:w-auto md:max-w-none'
            return (
              <motion.div 
                key={member.name} 
                variants={cardVariants} 
                className={`relative flex ${mobileWidthClass} flex-col md:h-full ${offsetClass} ${spanClass}`}
              > 
                <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-[1.25rem] border border-[#E9E4DC] bg-white shadow-[0_16px_44px_rgba(17,17,17,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#D71920]/25 hover:shadow-[0_26px_65px_rgba(17,17,17,0.13)]">
                  <div className="absolute left-0 top-0 z-20 h-[3px] w-0 bg-[#D71920] transition-all duration-300 group-hover:w-full" />

                  <div className="flex flex-col justify-start gap-3 p-3 sm:p-4 md:p-8">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-[1rem] bg-[#D71920]/10 transition-all duration-300 group-hover:bg-[#D71920]/15 group-hover:scale-105">
                          <HardHat className="h-7 w-7 text-[#D71920]" strokeWidth={1.8} />
                        </div>
                        <div className="h-14 w-[1px] bg-gradient-to-b from-transparent via-[#E9E4DC] to-transparent" />
                      </div>

                      <div className="flex flex-col gap-1">
                        <h3 className="text-base font-bold leading-tight tracking-tight text-black transition-colors duration-300 group-hover:text-[#D71920] md:text-xl">{member.name}</h3>
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D71920]">{member.role}</p>
                      </div>

                      <div className="h-[1px] w-12 bg-gradient-to-r from-[#D71920]/40 to-transparent" />

                      <p className="text-sm font-light leading-6 text-gray-600">{member.bio}</p>
                    </div>

                    <div className="flex items-center gap-2 border-t border-gray-100/80 pt-2.5 text-gray-400">
                      <div className="flex h-9 w-9 items-center justify-center rounded-[0.7rem] bg-gray-50 transition-all duration-300 group-hover:bg-[#D71920]/10">
                        <MapPin className="h-4 w-4 transition-colors duration-300 group-hover:text-[#D71920]" strokeWidth={1.8} />
                      </div>
                      <span className="text-xs font-semibold tracking-wide text-gray-500 transition-colors duration-300 group-hover:text-gray-700">{member.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Team
