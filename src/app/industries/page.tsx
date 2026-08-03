'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Building2, ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { industries } from '@/lib/brand'

export default function IndustriesPage() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <main className="relative min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-[#111112] text-white">
        <div className="relative max-w-7xl mx-auto text-center flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 text-[#D71920] text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            Sectors We Serve
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#D71920] font-heading uppercase leading-none mt-2">
            Industries
          </h1>
          <p className="text-sm md:text-lg text-gray-300 max-w-3xl leading-relaxed mt-2 font-light">
            Structural engineering expertise across diverse sectors — from commercial high-rises to heavy industrial steel structures.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {industries.map((ind) => (
            <motion.div
              key={ind.id}
              variants={cardVariants}
              className="group relative h-[360px] md:h-[400px] overflow-hidden flex flex-col justify-end cursor-pointer rounded-[1.25rem] border border-[#E9E4DC] shadow-[0_18px_44px_rgba(17,17,17,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-[#D71920]/35 hover:shadow-[0_28px_70px_rgba(17,17,17,0.16)]"
            >
              <div className="absolute left-0 top-0 z-30 h-[3px] w-0 bg-[#D71920] transition-all duration-300 group-hover:w-full" />
              {/* Background Image with Hover Zoom */}
              <div className="absolute inset-0 z-0 bg-gray-950">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ind.image}
                  alt={ind.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-75"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/48 to-transparent z-[1] transition-opacity duration-300 group-hover:opacity-[0.97]"></div>

              <div className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-[0.75rem] bg-[#D71920]/90 text-white shadow-[0_8px_20px_rgba(215,25,32,0.35)] opacity-0 transition-all duration-300 group-hover:opacity-100">
                <ArrowRight className="h-5 w-5" />
              </div>

              {/* Content Box */}
              <div className="relative z-10 text-white flex flex-col gap-2.5 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-black font-heading tracking-tight group-hover:text-[#D71920] transition-colors leading-tight">
                  {ind.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-200/95 leading-relaxed font-light">
                  {ind.description}
                </p>
              </div>

              {/* Red Line Accent on card bottom */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#D71920] transition-all duration-500 group-hover:w-full z-20"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="/contact" className="group inline-flex items-center gap-3 rounded-full bg-[#D71920] px-8 py-4 text-xs font-bold uppercase tracking-[0.24em] text-white shadow-[0_14px_30px_rgba(215,25,32,0.22)] transition-all duration-300 hover:bg-[#be1218]">
            DISCUSS YOUR PROJECT
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
