'use client'

import React from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { Building2, Ruler, HardHat, Award } from 'lucide-react'

const StatsBar = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    {
      icon: Building2,
      value: 15,
      suffix: '+',
      title: 'YEARS OF EXPERIENCE',
    },
    {
      icon: Ruler,
      value: 800,
      suffix: '+',
      title: 'PROJECTS COMPLETED',
    },
    {
      icon: HardHat,
      value: 20,
      suffix: '+',
      title: 'EXPERT ENGINEERS',
    },
    {
      icon: Award,
      value: 1,
      suffix: 'B+',
      title: 'BIRR PROJECT VALUE HANDLED',
    },
  ]

  return (
    <div ref={ref} className="relative z-20 w-full mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white border border-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.12)] rounded-[18px] py-2.5 md:py-3.5 px-4 md:px-6"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 md:gap-1 lg:gap-1.5 divide-y md:divide-y-0 md:divide-x divide-gray-200/50">
          {stats.map((stat, i) => (
            <div 
              key={stat.title} 
              className={`flex flex-col items-center text-center px-2 py-1.5 md:p-1 lg:p-2 ${
                i >= 2 ? 'pt-3 md:pt-1 lg:pt-2' : ''
              }`}
            >
              <div className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center bg-red-50 text-[#D71920] mb-1 rounded-[6px]">
                <stat.icon className="w-3.5 h-3.5 md:w-4 md:h-4" strokeWidth={1.5} />
              </div>
              <div className="text-xl md:text-2xl lg:text-[1.85rem] font-black font-heading text-black leading-none flex items-center justify-center">
                {inView ? (
                  <CountUp start={0} end={stat.value} duration={2.5} />
                ) : (
                  <span>0</span>
                )}
                <span className="text-[#D71920]">{stat.suffix}</span>
              </div>
              <div className="text-[7px] md:text-[8px] lg:text-[9px] font-bold uppercase tracking-wider text-gray-500 mt-1 leading-tight">
                {stat.title}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default StatsBar
