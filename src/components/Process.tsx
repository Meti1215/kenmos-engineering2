'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { processSteps } from '@/lib/brand'

const Process = () => {
  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
  const stepVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }

  return (
    <section id="process" className="section-padding border-y border-gray-200/70 bg-[linear-gradient(180deg,#f7f3eb_0%,#f5efe8_100%)] overflow-x-hidden">
      <div className="w-full max-w-none px-3 sm:px-4 lg:px-6">
        <div className="mx-auto mb-10 w-full max-w-6xl px-2 text-center md:mb-14">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D71920] md:text-xs">Our Work Process</span>
          <h2 className="mt-3 whitespace-normal sm:whitespace-nowrap text-[0.78rem] font-black leading-none tracking-[-0.03em] text-black sm:text-[1.4rem] sm:tracking-[-0.025em] md:text-[1.75rem] lg:text-[2.15rem] xl:text-[2.5rem] 2xl:text-[2.85rem]">How We Deliver Structural Excellence</h2>
        </div>

        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.1 }} 
          className="relative mx-0 grid grid-cols-2 gap-2 auto-rows-fr items-stretch sm:grid-cols-2 sm:gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          <div className="absolute hidden left-[10%] right-[10%] top-[72px] h-[1px] bg-gradient-to-r from-transparent via-[#D71920]/30 to-transparent lg:block" />

          {processSteps.map((step) => (
            <motion.div 
              key={step.step} 
              variants={stepVariants} 
              className="group relative z-10 flex h-full min-h-0 flex-col overflow-hidden rounded-[1rem] border border-[#E9E4DC] bg-white p-3 text-[9px] shadow-[0_8px_20px_rgba(17,17,17,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D71920]/25 hover:shadow-[0_16px_36px_rgba(17,17,17,0.08)] items-center text-center sm:p-4 sm:text-[9px] md:p-5 md:text-[10px] md:rounded-[1.25rem] lg:p-8 lg:text-left lg:text-sm"
            >
              <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#D71920] transition-all duration-300 group-hover:w-full" />
              
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-[0.75rem] border border-[#E9E4DC] bg-white shadow-[0_4px_12px_rgba(17,17,17,0.04)] transition-all duration-300 group-hover:border-[#D71920]/40 group-hover:shadow-[0_8px_20px_rgba(215,25,32,0.14)] md:h-14 md:w-14 md:rounded-[1rem] md:mb-4 lg:h-20 lg:w-20 lg:rounded-[1.25rem] lg:mb-6">
                <span className="text-[11px] font-black text-gray-300 transition-colors duration-300 group-hover:text-[#D71920] md:text-2xl lg:text-3xl">{step.step}</span>
              </div>
              
              <div className="flex flex-col flex-1 justify-between">
                <h3 className="mb-2 text-[10px] font-black leading-[1.1] tracking-tight text-black transition-colors duration-300 group-hover:text-[#D71920] xs:text-[9px] sm:text-[10px] md:text-sm lg:mb-3 lg:text-lg">{step.title}</h3>
                <p className="text-[9px] font-light leading-[1.3] text-gray-500 xs:text-[8.5px] sm:text-[9px] md:text-xs lg:text-sm lg:leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Process
