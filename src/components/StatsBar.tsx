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
    <div ref={ref} className="relative z-20 max-w-[1080px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white border border-gray-200 shadow-[0_20px_55px_-24px_rgba(0,0,0,0.45)] rounded-[4px] py-3 md:py-4 lg:py-4 px-2 md:px-3 lg:px-4"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-3 lg:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {stats.map((stat, i) => (
            <div 
              key={stat.title} 
              className={`flex flex-col items-center text-center p-1 md:p-1.5 lg:p-2 ${
                i >= 2 ? 'pt-3 md:pt-2 lg:pt-2' : ''
              }`}
            >
              <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-red-50 text-[#D71920] mb-2">
                <stat.icon className="w-4.5 h-4.5 md:w-5 md:h-5" strokeWidth={1.5} />
              </div>
              <div className="text-2xl md:text-3xl lg:text-[2.35rem] font-black font-heading text-black leading-none flex items-center justify-center">
                {inView ? (
                  <CountUp start={0} end={stat.value} duration={2.5} />
                ) : (
                  <span>0</span>
                )}
                <span className="text-[#D71920]">{stat.suffix}</span>
              </div>
              <div className="text-[8px] md:text-[9px] lg:text-[10px] font-bold uppercase tracking-wider text-gray-600 mt-1 leading-tight">
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
