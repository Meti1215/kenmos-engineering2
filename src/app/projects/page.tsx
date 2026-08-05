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
      <section className="relative pt-24 pb-10 md:pb-16 bg-[#111112] text-white">
        <div className="relative w-full max-w-none px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-4 mx-auto">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-none mx-auto px-0 sm:px-0 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {projects.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200/80 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-400 ease-out hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.08)] hover:border-gray-300"
              >
                <div className="relative h-56 sm:h-64 md:h-72 w-full overflow-hidden bg-gray-100 flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-2.5 gap-1.5">
                  <span className="inline-flex w-fit items-center bg-[#D71920]/10 px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.22em] text-[#D71920]">
                    {p.category}
                  </span>

                  <h2 className="text-[11px] font-black font-heading uppercase tracking-tight leading-tight text-[#111112] line-clamp-2 min-h-[1.4rem]">
                    {p.title}
                  </h2>

                  <p className="text-[10px] text-gray-500 font-light leading-snug line-clamp-2 whitespace-pre-line min-h-[1.4rem]">
                    {p.description}
                  </p>

                  <div className="mt-auto pt-0.5">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-[#D71920] hover:text-red-700 transition-colors duration-200"
                    >
                      Discuss Project
                      <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}