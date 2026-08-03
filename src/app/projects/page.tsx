'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Building2 } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { projects } from '@/lib/brand'

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 bg-[#111112] text-white">
        <div className="relative content-container text-center flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 text-[#D71920] text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            Our Works
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#D71920] font-heading uppercase leading-none mt-2">
            Engineering Projects
          </h1>
          <p className="text-sm md:text-lg text-gray-300 max-w-3xl leading-relaxed mt-2 font-light">
            A selective showcase of institutional grandstands, mixed-use headquarters, and specialized structures designed and supervised by Kenmos Engineering.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 content-container">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-[#E9E4DC] bg-white shadow-[0_16px_44px_rgba(17,17,17,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#D71920]/25 hover:shadow-[0_28px_70px_rgba(17,17,17,0.14)]"
            >
              <div className="absolute left-0 top-0 z-30 h-[3px] w-0 bg-[#D71920] transition-all duration-300 group-hover:w-full" />
              <div className="flex h-full flex-col justify-between">
                <div>
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-950">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-600 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/50 to-transparent" />
                    <div className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-[0.75rem] bg-[#D71920]/90 text-white shadow-[0_8px_20px_rgba(215,25,32,0.35)] opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <ArrowRight className="h-5 w-5" />
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                      <span className="inline-flex items-center rounded-[0.4rem] bg-[#D71920]/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_6px_16px_rgba(215,25,32,0.35)]">
                        {p.category}
                      </span>
                      <h2 className="mt-3 max-w-xl text-2xl font-black font-heading uppercase tracking-tight leading-tight text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.85)] transition-colors duration-300 group-hover:text-[#D71920]">
                        {p.title}
                      </h2>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="p-8">
                    <p className="text-sm font-light leading-relaxed text-gray-500">
                      {p.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="flex items-center justify-between border-t border-gray-100/80 px-8 py-5">
                  <a
                    href="/contact"
                    className="group/btn inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D71920] transition-all duration-300 hover:text-red-700"
                  >
                    Discuss Project
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                  <div className="flex h-9 w-9 items-center justify-center rounded-[0.65rem] bg-[#D71920]/8 text-[#D71920] transition-all duration-300 group-hover:bg-[#D71920] group-hover:text-white">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}