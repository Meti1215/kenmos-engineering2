'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/ServicesCondensed'
import Industries from '@/components/Industries'
import WhyChooseUs from '@/components/WhyChooseUs'
import Process from '@/components/Process'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent">
      <Hero />
      <About />
      <Services />
      <Industries />
      <WhyChooseUs />
      <Process />
      <Team />
      <Testimonials />

      <section className="relative overflow-hidden bg-[#D71920] py-24 text-white md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center gap-6 px-5 text-center sm:px-6 md:gap-8 lg:px-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/90 md:text-xs">Let&apos;s Collaborate</span>
          <h2 className="max-w-4xl text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl lg:text-6xl">Ready to Build Your Vision with Precision?</h2>
          <p className="max-w-2xl text-sm font-light leading-relaxed text-white/80 sm:text-lg">Discuss your building blueprints, steel truss connections, or value engineering parameters with our lead structural engineer.</p>
          <div className="pt-4">
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} href="/contact" className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.24em] text-[#D71920] transition-colors hover:bg-gray-100">
              GET A FREE QUOTE
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  )
}
