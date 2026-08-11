'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { industries } from '@/lib/brand'

const Industries = () => {
  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
  const cardVariants = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }

  return (
    <section id="industries" className="w-full bg-white/70 py-8 md:py-9 lg:py-10 overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4 md:mb-5 w-full text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D71920] md:text-xs">Sectors We Serve</span>
          <h2 className="mt-2 whitespace-normal text-[0.78rem] font-black leading-tight tracking-[-0.03em] text-black sm:text-[1.35rem] sm:tracking-[-0.025em] md:text-[1.7rem] lg:text-[2.05rem] xl:text-[2.4rem] 2xl:text-[2.7rem]">Engineering Expertise Across Diverse Industries</h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
        >
          {industries.map((ind) => (
            <motion.div
              key={ind.id}
              variants={cardVariants}
              className="group h-full flex flex-col overflow-hidden bg-white border border-gray-200 shadow-sm rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Image: compact on mobile (h-40 for 2-per-row), scales up matching Projects at sm/md/lg */}
              <div className="relative h-40 w-full flex-shrink-0 overflow-hidden bg-gray-100 sm:h-56 md:h-64 lg:h-72">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ind.image}
                  alt={ind.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Content Box - compact padding on mobile to fit 2-per-row cleanly */}
              <div className="flex flex-1 flex-col p-2 sm:p-4">
                <div className="flex items-start justify-between w-full">
                  <div className="flex-1 min-w-0">
                    <h3 className="mt-0 sm:mt-2.5 text-[10px] sm:text-sm font-black font-heading uppercase tracking-tight leading-tight text-[#111112] line-clamp-1 sm:line-clamp-2 group-hover:text-[#D71920] transition-colors">
                      {ind.title}
                    </h3>
                    <p className="hidden sm:block mt-1.5 text-[11px] text-gray-500 font-light leading-relaxed line-clamp-2 min-h-[2.2rem]">
                      {ind.description}
                    </p>
                    <p className="sm:hidden mt-1 text-[9px] text-gray-500 font-light leading-snug line-clamp-2">
                      {ind.description}
                    </p>
                  </div>
                </div>

                <div className="mt-auto pt-2 sm:pt-3 mt-1 sm:mt-0 border-t border-gray-100 flex items-center justify-between">
                  <div className="hidden sm:flex items-center gap-1 text-[#D71920]/80 text-[9px] font-bold uppercase tracking-wider">
                    <span>Kenmos Industry</span>
                  </div>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#D71920] text-white flex items-center justify-center shadow-sm rounded transition-all duration-300 opacity-80 group-hover:opacity-100">
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
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
