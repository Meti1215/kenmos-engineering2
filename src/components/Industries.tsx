'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { industries } from '@/lib/brand'

const Industries = () => {
  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
  const cardVariants = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }

  return (
    <section id="industries" className="w-full bg-white/70 py-8 md:py-9 lg:py-10 overflow-x-hidden">
      <div className="w-full px-3 sm:px-4 lg:px-5 xl:px-6">
        <div className="mb-4 md:mb-5 w-full text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D71920] md:text-xs">Sectors We Serve</span>
          <h2 className="mt-2 whitespace-normal text-[0.78rem] font-black leading-tight tracking-[-0.03em] text-black sm:text-[1.35rem] sm:tracking-[-0.025em] md:text-[1.7rem] lg:text-[2.05rem] xl:text-[2.4rem] 2xl:text-[2.7rem]">Engineering Expertise Across Diverse Industries</h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid w-full grid-cols-2 gap-2 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-4 items-stretch auto-rows-fr"
        >
          {industries.map((ind) => (
            <motion.div
              key={ind.id}
              variants={cardVariants}
              className="group relative flex flex-col w-full h-full cursor-pointer overflow-hidden rounded-[1rem] border border-[#E9E4DC] shadow-[0_10px_28px_-8px_rgba(17,17,17,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D71920]/35 hover:shadow-[0_20px_50px_-12px_rgba(17,17,17,0.2)] md:min-h-[165px]"
            >
              {/* Desktop / tablet: background image with overlay (unchanged) */}
              <div className="relative aspect-[4/2.35] w-full overflow-hidden bg-gray-100 hidden md:block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ind.image} alt={ind.title} className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 z-20 flex items-end p-2 sm:p-3 md:p-4 lg:p-4">
                  <div className="max-w-[95%]">
                    <h3 className="text-[11px] font-black leading-tight tracking-tight text-white md:text-base">{ind.title}</h3>
                    <p className="mt-1 text-[10px] font-light leading-[1.35] text-white md:text-[13px]">{ind.description}</p>
                  </div>
                </div>
                <div className="absolute right-2 top-2 z-20 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-[0.65rem] bg-[#D71920]/90 text-white shadow-[0_6px_16px_rgba(215,25,32,0.32)] opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <svg className="h-3 w-3 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </div>
              </div>

              {/* Mobile: stacked image above content */}
              <div className="w-full block md:hidden bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ind.image} alt={ind.title} className="w-full h-[140px] sm:h-[160px] object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105" />
                <div className="px-3 py-2">
                  <div className="flex items-start justify-between">
                    <div className="w-full">
                      <h3 className="text-[13px] font-black leading-tight tracking-tight text-black">{ind.title}</h3>
                      <p className="mt-1 text-[11px] font-light leading-[1.3] text-gray-700">{ind.description}</p>
                    </div>
                    <div className="ml-3 flex items-start">
                      <div className="flex h-7 w-7 items-center justify-center rounded-[0.65rem] bg-[#D71920]/90 text-white shadow-[0_6px_16px_rgba(215,25,32,0.32)]">
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Industries
