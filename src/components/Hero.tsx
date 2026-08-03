'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { brand } from '@/lib/brand'
import StatsBar from '@/components/StatsBar'

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-[95vh] md:min-h-screen flex items-center justify-start overflow-hidden bg-black"
    >
      {/* Background Image with Ken Burns effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 10, ease: 'easeOut' }}
          className="w-full h-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-new.jpg"
            alt="Kenmos Engineering structural design"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Dark overlay matching the design reference */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30 z-[1]"></div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-10 max-w-[1400px] mx-auto flex flex-col items-start justify-center pt-14 pb-28 md:pt-16 md:pb-32 lg:pt-20 lg:pb-40">
        <div className="w-full max-w-[38rem] lg:max-w-[42rem] text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="flex flex-col gap-2 md:gap-3 lg:gap-4"
          >
            {/* Tagline tag */}
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#D71920]" />
              <span className="text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.3em] font-bold text-white">
                STRUCTURAL EXCELLENCE. LASTING IMPACT.
              </span>
            </div>

            {/* High Impact Heading */}
            <h1 className="text-[2.05rem] sm:text-[2.4rem] md:text-[3.9rem] lg:text-[4.8rem] xl:text-[5.3rem] font-black font-heading leading-[0.96] tracking-tight uppercase">
              <span className="block text-white">ENGINEERING</span>
              <span className="block text-[#D71920] my-0.5 md:my-1">STRONGER</span>
              <span className="block text-white">FOUNDATIONS</span>
            </h1>

            {/* Subheading paragraph */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 font-light leading-relaxed max-w-xl lg:max-w-2xl">
              Kenmos Engineering delivers innovative, sustainable and cost-optimized structural engineering solutions that shape the future.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mt-0.5">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/services"
                  prefetch={true}
                  className="group inline-flex items-center gap-2 bg-[#D71920] hover:bg-[#be1218] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-7 sm:px-8 py-4 transition-colors"
                >
                  OUR SERVICES
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/projects"
                  prefetch={true}
                  className="group inline-flex items-center gap-2 border-2 border-white text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-7 sm:px-8 py-4 hover:bg-white hover:text-black transition-colors"
                >
                  VIEW PROJECTS
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-2 sm:bottom-3 lg:bottom-4 z-20 px-3 sm:px-4 lg:px-5">
        <StatsBar />
      </div>
      
      {/* Scroll indicator overlay */}
      <div className="hidden md:block absolute bottom-32 left-12 z-10 text-white/40 text-xs font-bold uppercase tracking-widest leading-none">
        Kenmos Structural Engineering
      </div>
    </section>
  )
}

export default Hero
