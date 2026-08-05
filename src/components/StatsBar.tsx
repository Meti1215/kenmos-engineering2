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
        className="bg-white border border-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.12)] rounded-[14px] py-1 md:py-1.5 px-2.5 md:px-3.5 lg:px-4"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5 md:gap-0 lg:gap-0.5 divide-y md:divide-y-0 md:divide-x divide-gray-200/50">
          {stats.map((stat, i) => (
            <div 
              key={stat.title} 
              className={`flex flex-col items-center text-center px-1.5 py-1 md:px-1 md:py-0.5 lg:px-1.5 lg:py-1 ${
                i >= 2 ? 'pt-2 md:pt-0.5 lg:pt-1' : ''
              }`}
            >
              <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center bg-red-50 text-[#D71920] mb-0.5 rounded-[5px]">
                <stat.icon className="w-2.5 h-2.5 md:w-3 md:h-3" strokeWidth={1.5} />
              </div>
              <div className="text-base md:text-lg lg:text-[1.15rem] font-black font-heading text-black leading-none flex items-center justify-center">
                {inView ? (
                  <CountUp start={0} end={stat.value} duration={2.5} />
                ) : (
                  <span>0</span>
                )}
                <span className="text-[#D71920]">{stat.suffix}</span>
              </div>
              <div className="text-[6px] md:text-[7px] lg:text-[8px] font-bold uppercase tracking-wider text-gray-500 mt-0.5 leading-tight">
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
