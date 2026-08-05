'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { aboutContent } from '@/lib/brand'

const About = () => {
  return (
    <section id="about" className="section-padding bg-transparent">
      <div className="w-full max-w-none px-3 sm:px-4 lg:px-6">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_0.82fr_1fr] lg:gap-14 xl:gap-16">
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[520px] overflow-hidden rounded-[2.2rem] p-3 sm:p-4">
              <div className="absolute inset-0 translate-y-6 rounded-[2.2rem] border border-[#D71920]/70" />
              <div className="absolute -bottom-4 -left-4 z-20 h-16 w-20 rounded-[1rem] bg-[#D71920] shadow-[0_18px_36px_rgba(215,25,32,0.2)]" />
              <div className="absolute -right-6 -top-6 z-20 hidden h-36 w-36 rounded-[1.25rem] border border-gray-200 bg-white/85 p-2 shadow-[0_16px_40px_rgba(17,17,17,0.08)] sm:block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/about_collage_2.png" alt="Structural engineering schematic wireframe" className="h-full w-full rounded-[0.9rem] border border-gray-100 object-cover" />
              </div>
              <div className="relative z-10 overflow-hidden rounded-[1.75rem] shadow-[0_24px_55px_rgba(17,17,17,0.12)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/about_collage_1.png" alt="Kenmos Structural Engineering design collage" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center lg:items-center lg:text-center">
            <span className="text-[12px] font-semibold uppercase tracking-[0.34em] text-[#D71920]">{aboutContent.subtitle}</span>
            <h2 className="mt-4 text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.02em] text-black sm:text-[2.45rem] lg:text-[2.8rem] xl:text-[3.15rem]">
              Building the Future
              <span className="block mt-2">with Precision</span>
              <span className="block mt-2 text-[#D71920]">&amp; Integrity</span>
            </h2>
          </div>

          <div className="flex flex-col justify-center lg:pl-4">
            <div className="flex flex-col gap-5 lg:max-w-[480px]">
              <div className="flex flex-col gap-4 text-[15px] font-normal leading-8 text-gray-600 md:text-[16px]">
                {aboutContent.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="pt-1">
                <motion.a whileHover={{ scale: 1.03, x: 5 }} whileTap={{ scale: 0.97 }} href="/about" className="group inline-flex items-center gap-3 rounded-full border border-[#D71920] px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#D71920] transition-all duration-300 hover:bg-[#D71920] hover:text-white">
                  MORE ABOUT US
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
