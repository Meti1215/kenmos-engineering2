'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
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
    <main className="relative bg-white min-h-screen">
      {/* Sticky Header */}
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Kenmos Section */}
      <About />
      
      {/* Services Grid Section */}
      <Services />
      
      {/* Industries Sectors Grid Section */}
      <Industries />
      

      
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      
      {/* Timeline Process Section */}
      <Process />
      
      {/* Experts Team Section */}
      <Team />
      
      {/* Testimonials Slider Section */}
      <Testimonials />

      {/* Large Red CTA Section */}
      <section className="relative py-24 md:py-32 bg-[#D71920] text-white overflow-hidden">
        {/* Structural abstract background line pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6 md:gap-8">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/90">
            Let's Collaborate
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight uppercase leading-tight max-w-4xl">
            Ready to Build Your Vision with Precision?
          </h2>
          <p className="text-sm sm:text-lg text-white/80 max-w-2xl font-light leading-relaxed">
            Discuss your building blueprints, steel truss connections, or value engineering parameters with our lead structural engineer.
          </p>
          <div className="pt-4">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-[#D71920] hover:bg-gray-100 text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-4 transition-colors"
            >
              GET A FREE QUOTE
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Contact Form & Location Map Section */}
      <Contact />
      
      {/* Sticky Footer */}
      <Footer />
    </main>
  )
}
