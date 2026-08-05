'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { industries } from '@/lib/brand'

const Industries = () => {
  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
  const cardVariants = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }

  return (
    <section id="industries" className="py-12 md:py-14 lg:py-16 bg-white/70">
      <div className="content-container">
        <div className="mx-auto mb-6 md:mb-8 w-full max-w-6xl px-2 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D71920] md:text-xs">Sectors We Serve</span>
          <h2 className="mt-2.5 whitespace-nowrap text-[0.78rem] font-black leading-none tracking-[-0.03em] text-black sm:text-[1.35rem] sm:tracking-[-0.025em] md:text-[1.7rem] lg:text-[2.05rem] xl:text-[2.4rem] 2xl:text-[2.7rem]">Engineering Expertise Across Diverse Industries</h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto grid gap-3 grid-cols-2 lg:grid-cols-3 max-w-[1120px] justify-center"
        >
          {industries.map((ind) => (
            <motion.div
              key={ind.id}
              variants={cardVariants}
              className="group relative flex h-full min-h-[240px] flex-col cursor-pointer overflow-hidden rounded-[1rem] md:rounded-[1.1rem] border border-[#E9E4DC] shadow-[0_10px_28px_-8px_rgba(17,17,17,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D71920]/35 hover:shadow-[0_20px_50px_-12px_rgba(17,17,17,0.2)] sm:min-h-[250px] md:min-h-[270px]"
            >
              <div className="relative h-0 w-full flex-shrink-0 overflow-hidden rounded-t-[1rem] md:rounded-t-[1.1rem] bg-gray-100 p-2 sm:p-3" style={{ paddingBottom: '66%' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ind.image} alt={ind.title} className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-[0.65rem] bg-[#D71920]/90 text-white shadow-[0_6px_16px_rgba(215,25,32,0.32)] opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between p-3 md:p-4 bg-white">
                <div>
                  <h3 className="text-[11px] md:text-base font-black leading-tight tracking-tight transition-colors duration-300 group-hover:text-[#D71920]">{ind.title}</h3>
                  <p className="mt-1 text-[10px] md:text-[13px] font-light leading-[1.35] text-gray-700">{ind.description}</p>
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
