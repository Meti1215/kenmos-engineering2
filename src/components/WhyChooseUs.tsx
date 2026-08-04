'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Landmark, Compass, ShieldAlert, Award, FileSpreadsheet, Eye } from 'lucide-react'

const WhyChooseUs = () => {
  const points = [
    { title: 'Cost & Value Optimization', description: 'Our primary design pillar. We optimize structural steel and concrete grades, reducing material cost while maintaining high safety factors.', icon: Landmark },
    { title: '20+ Years Leadership', description: 'Our founder Kenmos Tesfaye and engineering leads bring over two decades of expert structural analysis and design coordination.', icon: Compass },
    { title: 'Steel Structure Specialists', description: 'We are recognized leaders in Ethiopia for design and connection detailing of complex steel truss warehouses, stadiums, and factories.', icon: ShieldAlert },
    { title: 'Rigorous Site Supervision', description: 'We perform strict inspections of steel fabrication, concrete pours, and reinforcement layouts to guarantee structure safety.', icon: Award },
    { title: 'Advanced Engineering Analysis', description: 'We utilize state-of-the-art structural design and finite element modeling software to test wind, seismic, and static load performance.', icon: FileSpreadsheet },
    { title: 'Proven Track Record', description: 'With over 800 projects designed and supervised since 2009, we have served clients ranging from commercial banks to stadiums.', icon: Eye },
  ]

  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
  const cardVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }

  return (
    <section className="section-padding bg-white/80">
      <div className="content-container">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D71920] md:text-xs">Why Choose Us</span>
          <h2 className="mt-3 text-3xl font-black leading-tight text-black md:text-4xl lg:text-5xl">Structural Integrity Meets Cost Optimization</h2>
        </div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {points.map((point) => (
            <motion.div key={point.title} variants={cardVariants} className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-[1.25rem] border border-[#E9E4DC] bg-white p-8 shadow-[0_16px_44px_rgba(17,17,17,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D71920]/25 hover:shadow-[0_24px_60px_rgba(17,17,17,0.12)]">
              <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#D71920] transition-all duration-300 group-hover:w-full" />
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#D71920]/5 transition-all duration-500 group-hover:scale-[2.2]" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-[1.1rem] bg-[#D71920]/10 text-[#D71920] shadow-[0_8px_20px_rgba(215,25,32,0.12)] transition-all duration-300 group-hover:bg-[#D71920] group-hover:text-white group-hover:shadow-[0_12px_28px_rgba(215,25,32,0.28)]">
                <point.icon className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <div className="relative">
                <h3 className="mb-2.5 text-lg font-bold leading-tight tracking-tight text-black transition-colors duration-300 group-hover:text-[#D71920]">{point.title}</h3>
                <p className="text-sm font-light leading-relaxed text-gray-500">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
