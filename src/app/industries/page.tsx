'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Building2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
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

      <PageHero
        badge="Sectors We Serve"
        title="Industries"
        description="Structural engineering expertise across diverse sectors — from commercial high-rises to heavy industrial steel structures."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Industries' },
        ]}
      />

      {/* Industries Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-none mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3"
          >
          {industries.map((ind) => (
            <motion.div
              key={ind.id}
              variants={cardVariants}
              className="group relative overflow-hidden flex flex-col cursor-pointer rounded-[1.25rem] border border-[#E9E4DC] shadow-[0_18px_44px_rgba(17,17,17,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-[#D71920]/35 hover:shadow-[0_28px_70px_rgba(17,17,17,0.16)]"
            >
              <Link href={`/industries/${ind.id}`} className="relative overflow-hidden bg-gray-950 h-[280px] sm:h-[320px] md:h-[360px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ind.image}
                  alt={ind.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute left-0 top-0 z-20 flex h-10 w-10 items-center justify-center rounded-[0.75rem] bg-[#D71920]/90 text-white shadow-[0_8px_20px_rgba(215,25,32,0.35)] opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </Link>

              <div className="relative z-10 bg-white p-6 md:p-8 flex flex-col gap-3">
                <h3 className="text-xl md:text-2xl font-black font-heading tracking-tight text-[#111112] transition-colors leading-tight">
                  {ind.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
                  {ind.description}
                </p>
                <div className="mt-auto">
                  <Link href={`/industries/${ind.id}`} className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#D71920] transition-colors duration-200 hover:text-red-700">
                    Explore Industry
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="absolute left-0 top-0 z-30 h-[3px] w-0 bg-[#D71920] transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </motion.div>
        </div>
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
