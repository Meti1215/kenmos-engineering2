'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { industries } from '@/lib/brand'

const Industries = () => {
  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
  const cardVariants = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }

  return (
    <section id="industries" className="section-padding bg-white/70">
      <div className="content-container">
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D71920] md:text-xs">Sectors We Serve</span>
          <h2 className="mt-3 text-3xl font-black leading-tight text-black md:text-4xl lg:text-5xl">Engineering Expertise Across Diverse Industries</h2>
        </div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {industries.map((ind) => (
            <motion.div key={ind.id} variants={cardVariants} className="group relative flex h-[360px] cursor-pointer flex-col justify-end overflow-hidden rounded-[1.25rem] border border-[#E9E4DC] shadow-[0_18px_44px_rgba(17,17,17,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-[#D71920]/35 hover:shadow-[0_28px_70px_rgba(17,17,17,0.16)] md:h-[400px]">
              <div className="absolute left-0 top-0 z-30 h-[3px] w-0 bg-[#D71920] transition-all duration-300 group-hover:w-full" />
              <div className="absolute inset-0 z-0 bg-gray-950">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ind.image} alt={ind.title} className="h-full w-full object-cover opacity-75 transition-transform duration-700 ease-out group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/92 via-black/48 to-transparent transition-opacity duration-300 group-hover:opacity-[0.97]"></div>
              <div className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-[0.75rem] bg-[#D71920]/90 text-white shadow-[0_8px_20px_rgba(215,25,32,0.35)] opacity-0 transition-all duration-300 group-hover:opacity-100">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </div>
              <div className="relative z-10 flex flex-col gap-2.5 p-6 md:p-8 text-white">
                <h3 className="text-xl font-black leading-tight tracking-tight transition-colors duration-300 group-hover:text-[#D71920] md:text-2xl">{ind.title}</h3>
                <p className="line-clamp-3 text-xs font-light leading-relaxed text-gray-200/95 md:text-sm">{ind.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 z-20 h-1 w-0 bg-[#D71920] transition-all duration-500 group-hover:w-full"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Industries
