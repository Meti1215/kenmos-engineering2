'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '@/lib/brand'

const Testimonials = () => {
  const items = [...testimonials]
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setActive((prev) => (prev + 1) % items.length), 6000)
    return () => clearInterval(interval)
  }, [items.length])

  const goTo = (index: number) => setActive((index + items.length) % items.length)
  const current = items[active]

  return (
    <section id="testimonials" className="relative overflow-hidden section-padding border-y border-gray-200/70 bg-[linear-gradient(180deg,#f7f3eb_0%,#f5efe8_100%)]">
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative content-container">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center md:mb-16">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D71920] md:text-xs">Testimonials</p>
          <h2 className="text-3xl font-black leading-tight text-black md:text-4xl lg:text-5xl">What Our Clients Think</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-relaxed text-gray-500">Real feedback from project directors, architects, and developers who work with Kenmos Engineering.</p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.98 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="group relative mx-auto max-w-3xl overflow-hidden rounded-[1.25rem] border border-[#E9E4DC] bg-white p-8 text-center shadow-[0_20px_55px_rgba(17,17,17,0.08)] md:p-14">
              <div className="absolute left-0 top-0 h-[3px] w-full bg-[#D71920]" />
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#D71920]/5" />
              <div className="absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-[#D71920]/5" />
              <div className="relative">
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-[1rem] bg-[#D71920]/10 shadow-[0_8px_20px_rgba(215,25,32,0.12)]">
                  <Quote className="h-6 w-6 text-[#D71920]" />
                </div>
                <div className="mb-6 flex items-center justify-center gap-1.5">
                  {Array.from({ length: current.rating }).map((_, i) => <Star key={i} className="h-5 w-5 fill-red-500 text-red-500" />)}
                </div>
                <p className="mb-8 text-base font-light leading-relaxed text-gray-800 italic md:text-xl">&ldquo;{current.quote}&rdquo;</p>
                <div className="flex flex-col items-center">
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#D71920]/20 bg-[#D71920] text-xl font-bold text-white shadow-[0_10px_24px_rgba(215,25,32,0.28)]">{current.name.charAt(0)}</div>
                  <div className="text-base font-bold tracking-tight text-gray-900 md:text-lg">{current.name}</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-[#D71920]">{current.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4 md:mt-12">
            <button onClick={() => goTo(active - 1)} aria-label="Previous testimonial" className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#E9E4DC] bg-white text-gray-700 shadow-[0_8px_20px_rgba(17,17,17,0.06)] transition-all duration-300 hover:border-[#D71920]/30 hover:bg-[#D71920]/5 hover:text-[#D71920]">
              <ChevronLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>
            <div className="flex items-center gap-2">
              {items.map((item, index) => (
                <button key={item.name} onClick={() => goTo(index)} aria-label={`Go to testimonial ${index + 1}`} className={`h-2 transition-all duration-300 rounded-full ${index === active ? 'w-9 bg-[#D71920] shadow-[0_4px_12px_rgba(215,25,32,0.35)]' : 'w-3 bg-gray-300 hover:bg-[#D71920]/45'}`} />
              ))}
            </div>
            <button onClick={() => goTo(active + 1)} aria-label="Next testimonial" className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#E9E4DC] bg-white text-gray-700 shadow-[0_8px_20px_rgba(17,17,17,0.06)] transition-all duration-300 hover:border-[#D71920]/30 hover:bg-[#D71920]/5 hover:text-[#D71920]">
              <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
