'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import StatsBar from '@/components/StatsBar'

const Hero = () => {
  return (
    <section id="home" className="relative flex h-screen min-h-[580px] md:min-h-[660px] lg:min-h-[720px] items-center justify-start bg-black">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div initial={{ scale: 1.08 }} animate={{ scale: 1.02 }} transition={{ duration: 10, ease: 'easeOut' }} className="h-full w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero-new.jpg" alt="Kenmos Engineering structural design" className="h-full w-full object-cover" />
        </motion.div>
      </div>

      <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.62)_45%,rgba(0,0,0,0.35)_100%)]"></div>
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_top_right,rgba(215,25,32,0.24),transparent_32%)]"></div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-start justify-center px-5 pt-[clamp(4.5rem,8vh,6rem)] pb-[clamp(5.5rem,10vh,8rem)] sm:px-6 lg:px-8 -translate-y-[2vh] md:-translate-y-[3vh] lg:-translate-y-[4vh]">
        <div className="w-full max-w-[40rem] lg:max-w-[44rem] lg:ml-[clamp(3rem,6vw,5.5rem)] md:ml-[2.5rem] sm:ml-[1.5rem]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25, ease: 'easeOut' }} className="flex flex-col gap-[clamp(0.5rem,1.5vh,1.25rem)]">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#D71920]" />
              <span className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] font-bold uppercase tracking-[0.35em] text-white/90">STRUCTURAL EXCELLENCE. LASTING IMPACT.</span>
            </div>

            <h1 className="text-[clamp(1.8rem,7vh,2.5rem)] font-black uppercase leading-[0.95] tracking-tight text-white md:text-[clamp(2.5rem,8vh,4.2rem)] lg:text-[clamp(3.5rem,8.5vh,5.2rem)]">
              <span className="block">ENGINEERING</span>
              <span className="my-1 block text-[#D71920] md:my-2">STRONGER</span>
              <span className="block">FOUNDATIONS</span>
            </h1>

            <p className="max-w-xl text-xs font-light leading-relaxed text-gray-200 sm:text-sm md:text-base lg:text-[clamp(1rem,2.2vh,1.15rem)]">
              Kenmos Engineering delivers precise structural solutions shaped by technical expertise, responsible design, and long-term value.
            </p>

            <div className="mt-0.5 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="/services" prefetch={true} className="group inline-flex items-center gap-1.5 rounded-full bg-[#D71920] px-6 py-3.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.24em] text-white shadow-[0_14px_30px_rgba(215,25,32,0.22)] transition-all duration-300 hover:bg-[#be1218] sm:px-7">
                  OUR SERVICES
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="/projects" prefetch={true} className="group inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/10 px-6 py-3.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.24em] text-white transition-all duration-300 hover:bg-white hover:text-black sm:px-7">
                  VIEW PROJECTS
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            <div className="mt-8 md:mt-10 lg:mt-12 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-white/35">
              Kenmos Structural Engineering
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-[clamp(0.75rem,2.2vh,2.5rem)] z-20 flex justify-center px-4">
        <div className="w-[90%] md:w-[88%] lg:w-[88%] max-w-[1200px]">
          <StatsBar />
        </div>
      </div>
    </section>
  )
}

export default Hero
