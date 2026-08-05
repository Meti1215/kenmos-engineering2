'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Landmark, Compass, ShieldAlert, Award, FileSpreadsheet, Eye } from 'lucide-react'

const WhyChooseUs = () => {
  const points = [
    { title: 'Cost & Value Optimization', description: 'Optimize steel and concrete designs to reduce costs while maintaining safety and performance.', icon: Landmark },
    { title: '20+ Years Leadership', description: 'Experienced structural engineers delivering reliable analysis and design solutions.', icon: Compass },
    { title: 'Steel Structure Specialists', description: 'Experts in steel truss, warehouse, stadium, and factory structural design.', icon: ShieldAlert },
    { title: 'Rigorous Site Supervision', description: 'Strict inspections ensure quality fabrication, concrete work, and structural safety.', icon: Award },
    { title: 'Advanced Engineering Analysis', description: 'Using advanced modeling tools to evaluate wind, seismic, and load performance.', icon: FileSpreadsheet },
    { title: 'Proven Track Record', description: '800+ projects delivered across commercial, industrial, and public sectors.', icon: Eye },
  ]

  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }
  const cardVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: 'easeOut' } } }

  return (
    <section className="py-12 md:py-14 lg:py-16 bg-white/80">
      <div className="content-container">
        <div className="mx-auto mb-6 md:mb-8 w-full max-w-6xl px-2 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D71920] md:text-xs">Why Choose Us</span>
          <h2 className="mt-2.5 whitespace-nowrap text-[0.76rem] font-black leading-none tracking-[-0.03em] text-black sm:text-[1.3rem] sm:tracking-[-0.025em] md:text-[1.65rem] lg:text-[2rem] xl:text-[2.35rem] 2xl:text-[2.65rem]">Structural Integrity Meets Cost Optimization</h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-3 grid-cols-1 min-[360px]:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 auto-rows-fr"
        >
          {points.map((point) => (
            <motion.div
              key={point.title}
              variants={cardVariants}
              className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-[1rem] md:rounded-[1.1rem] border border-[#E9E4DC] bg-white p-3 md:p-5 shadow-[0_8px_24px_-8px_rgba(17,17,17,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D71920]/25 hover:shadow-[0_18px_44px_-12px_rgba(17,17,17,0.14)]"
            >
              <div className="absolute left-0 top-0 h-[2.5px] w-0 bg-[#D71920] transition-all duration-300 group-hover:w-full" />
              <div className="hidden sm:block absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#D71920]/5 transition-all duration-500 group-hover:scale-[2]" />
              <div className="relative flex h-8 w-8 md:h-11 md:w-11 items-center justify-center rounded-[0.9rem] bg-[#D71920]/10 text-[#D71920] shadow-[0_6px_16px_rgba(215,25,32,0.10)] transition-all duration-300 group-hover:bg-[#D71920] group-hover:text-white group-hover:shadow-[0_10px_22px_rgba(215,25,32,0.22)]">
                <point.icon className="h-4 w-4 md:h-[22px] md:w-[22px]" strokeWidth={1.6} />
              </div>
              <div className="relative">
                <h3 className="mb-1 text-[13px] md:text-[15px] font-bold leading-tight tracking-tight text-black transition-colors duration-300 group-hover:text-[#D71920]">{point.title}</h3>
                <p className="text-[11px] md:text-[13px] font-light leading-relaxed text-gray-500">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
