'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { processSteps } from '@/lib/brand'

const Process = () => {
  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
  const stepVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }

  return (
    <section id="process" className="section-padding border-y border-gray-200/70 bg-[linear-gradient(180deg,#f7f3eb_0%,#f5efe8_100%)]">
      <div className="content-container">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D71920] md:text-xs">Our Work Process</span>
          <h2 className="mt-3 text-3xl font-black leading-tight text-black md:text-4xl lg:text-5xl">How We Deliver Structural Excellence</h2>
        </div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="absolute left-[10%] right-[10%] top-16 hidden h-[1px] bg-gradient-to-r from-transparent via-[#D71920]/30 to-transparent lg:block"></div>

          {processSteps.map((step) => (
            <motion.div key={step.step} variants={stepVariants} className="group relative z-10 flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-[#E9E4DC] bg-white p-8 shadow-[0_16px_44px_rgba(17,17,17,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D71920]/25 hover:shadow-[0_24px_60px_rgba(17,17,17,0.12)] items-center text-center lg:items-start lg:text-left">
              <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#D71920] transition-all duration-300 group-hover:w-full" />
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-[1.25rem] border border-[#E9E4DC] bg-white shadow-[0_8px_24px_rgba(17,17,17,0.06)] transition-all duration-300 group-hover:border-[#D71920]/40 group-hover:shadow-[0_12px_32px_rgba(215,25,32,0.18)]">
                <span className="text-3xl font-black text-gray-300 transition-colors duration-300 group-hover:text-[#D71920]">{step.step}</span>
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="mb-3 text-lg font-bold leading-tight tracking-tight text-black transition-colors duration-300 group-hover:text-[#D71920]">{step.title}</h3>
                <p className="text-sm font-light leading-relaxed text-gray-500">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Process
