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
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-none px-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
          {industries.map((ind) => (
            <motion.div
              key={ind.id}
              variants={cardVariants}
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200/80 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-400 ease-out hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.08)] cursor-pointer"
            >
<<<<<<< Updated upstream
              <div className="relative h-56 w-full flex-shrink-0 overflow-hidden bg-gray-100 sm:h-64 md:h-72">
=======
              <Link href={`/industries/${ind.id}`} className="relative overflow-hidden bg-gray-950 h-[280px] sm:h-[320px] md:h-[360px] cursor-pointer transition-all duration-200"
              >
>>>>>>> Stashed changes
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ind.image}
                  alt={ind.title}
<<<<<<< Updated upstream
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
=======
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-90"
>>>>>>> Stashed changes
                />
                <Link href={`/industries/${ind.id}`} className="absolute left-0 top-0 z-20 flex h-10 w-10 items-center justify-center rounded-lg bg-[#D71920]/90 text-white shadow-[0_8px_20px_rgba(215,25,32,0.35)] opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="flex flex-1 flex-col gap-1.5 p-2.5">
                <h3 className="min-h-[1.4rem] line-clamp-2 font-heading text-[11px] font-black uppercase leading-tight tracking-tight text-[#111112]">
                  {ind.title}
                </h3>

                <p className="min-h-[1.4rem] line-clamp-2 whitespace-pre-line text-[10px] font-light leading-snug text-gray-500">
                  {ind.description}
                </p>

                <div className="mt-auto pt-0.5">
                  <Link
                    href={`/industries/${ind.id}`}
                    className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-[#D71920] transition-colors duration-200 hover:text-red-700"
                  >
                    Explore Industry
                    <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
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
