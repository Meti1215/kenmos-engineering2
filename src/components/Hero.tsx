'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { brand } from '@/lib/brand'

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

      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto flex flex-col justify-center py-16 md:py-24 lg:py-32">
        <div className="max-w-2xl lg:max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="flex flex-col gap-5 md:gap-7 lg:gap-8"
          >
            {/* Tagline tag */}
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#D71920]" />
              <span className="text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.3em] font-bold text-white">
                STRUCTURAL EXCELLENCE. LASTING IMPACT.
              </span>
            </div>

            {/* High Impact Heading */}
            <h1 className="text-[2.75rem] sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-heading leading-[1.1] tracking-tight uppercase">
              <span className="block text-white">ENGINEERING</span>
              <span className="block text-[#D71920] my-0.5 md:my-1">STRONGER</span>
              <span className="block text-white">FOUNDATIONS</span>
            </h1>

            {/* Subheading paragraph */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 font-light leading-relaxed max-w-xl lg:max-w-2xl">
              Kenmos Engineering delivers innovative, sustainable and cost-optimized structural engineering solutions that shape the future.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mt-2">
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
      
      {/* Scroll indicator overlay */}
      <div className="hidden md:block absolute bottom-32 left-12 z-10 text-white/40 text-xs font-bold uppercase tracking-widest leading-none">
        Kenmos Structural Engineering
      </div>
    </section>
  )
}

export default Hero
