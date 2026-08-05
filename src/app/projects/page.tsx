'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Building2 } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { projects } from '@/lib/brand'

export default function ProjectsPage() {
  const categories = ['All', 'Commercial', 'Residential', 'Institutional', 'Hospitality', 'Infrastructure']
  const [selected, setSelected] = useState('All')

  const filteredProjects =
    selected === 'All'
      ? projects
      : projects.filter((p) => p.category === selected)

  return (
    <main className="relative min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-[#111112] pt-24 pb-10 text-white md:pb-16">
        <div className="relative mx-auto flex w-full max-w-none flex-col items-center gap-4 px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#D71920]">
            <Building2 className="h-4 w-4" />
            Our Works
          </div>

          <h1 className="mt-2 font-heading text-4xl font-black uppercase leading-none text-[#D71920] md:text-6xl">
            Engineering Projects
          </h1>

          <p className="mt-2 max-w-3xl text-sm font-light leading-relaxed text-gray-300 md:text-lg">
            A selective showcase of institutional grandstands, mixed-use headquarters, and specialized structures designed and supervised by Kenmos Engineering.
          </p>
        </div>

      </section>

      {/* Filter Bar (moved below hero on white background) */}
      <div className="mt-8 w-full max-w-none px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => {
            const isActive = selected === category

            return (
              <button
                key={category}
                onClick={() => setSelected(category)}
                className={
                  `rounded-md px-3 py-1.5 text-sm font-semibold transition-all duration-200 focus:outline-none ` +
                  (isActive
                    ? 'bg-[#b88739] text-white shadow-sm ring-2 ring-[#b88739]/40'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200')
                }
                aria-pressed={isActive}
              >
                {category}
              </button>
            )
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-none px-0">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12, transition: { duration: 0.18 } }}
                  transition={{ delay: index * 0.05, duration: 0.45 }}
                  className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200/80 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-400 ease-out hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.08)]"
                >
                  <div className="relative h-56 w-full flex-shrink-0 overflow-hidden bg-gray-100 sm:h-64 md:h-72">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-1.5 p-2.5">
                    <span className="inline-flex w-fit items-center bg-[#D71920]/10 px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.22em] text-[#D71920]">
                      {project.category}
                    </span>

                    <h2 className="min-h-[1.4rem] line-clamp-2 font-heading text-[11px] font-black uppercase leading-tight tracking-tight text-[#111112]">
                      {project.title}
                    </h2>

                    <p className="min-h-[1.4rem] line-clamp-2 whitespace-pre-line text-[10px] font-light leading-snug text-gray-500">
                      {project.description}
                    </p>

                    <div className="mt-auto pt-0.5">
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-[#D71920] transition-colors duration-200 hover:text-red-700"
                      >
                        Discuss Project
                        <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}