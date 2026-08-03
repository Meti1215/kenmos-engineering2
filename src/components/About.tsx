'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { aboutContent } from '@/lib/brand'

const About = () => {
  return (
    <section id="about" className="section-padding bg-transparent">
      <div className="content-container">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="relative flex justify-center lg:justify-start">
            <div className="section-shell relative w-full max-w-[520px] overflow-hidden p-3 sm:p-4">
              <div className="absolute inset-0 -translate-x-5 translate-y-5 rounded-[2rem] border border-[#D71920]/70" />
              <div className="relative z-10 overflow-hidden rounded-[1.75rem] shadow-[0_24px_55px_rgba(17,17,17,0.12)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/about_collage_1.png" alt="Kenmos Structural Engineering design collage" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="absolute -bottom-4 -left-4 z-20 h-16 w-20 rounded-[1rem] bg-[#D71920] shadow-[0_18px_36px_rgba(215,25,32,0.2)]" />
              <div className="absolute -right-6 -top-6 z-20 hidden h-36 w-36 rounded-[1.25rem] border border-gray-200 bg-white/85 p-2 shadow-[0_16px_40px_rgba(17,17,17,0.08)] sm:block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/about_collage_2.png" alt="Structural engineering schematic wireframe" className="h-full w-full rounded-[0.9rem] border border-gray-100 object-cover" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D71920] md:text-xs">{aboutContent.subtitle}</span>
              <h2 className="text-3xl font-black leading-tight text-black md:text-4xl lg:text-5xl">
                Building the Future with Precision <br className="hidden md:block" />
                <span className="text-[#D71920]">&amp; Integrity</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-sm font-light leading-relaxed text-gray-600 md:text-base">
              {aboutContent.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="pt-2">
              <motion.a whileHover={{ scale: 1.03, x: 5 }} whileTap={{ scale: 0.97 }} href="/about" className="group inline-flex items-center gap-3 rounded-full border border-[#D71920] px-6 py-4 text-xs font-bold uppercase tracking-[0.24em] text-[#D71920] transition-all duration-300 hover:bg-red-50">
                MORE ABOUT US
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
