'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Workflow } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { processSteps } from '@/lib/brand'

export default function ProcessPage() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <main className="relative min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-[#111112] text-white">
        <div className="relative max-w-7xl mx-auto text-center flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 text-[#D71920] text-xs font-bold uppercase tracking-wider">
            <Workflow className="w-4 h-4" />
            Our Work Process
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#D71920] font-heading uppercase leading-none mt-2">
            Our Process
          </h1>
          <p className="text-sm md:text-lg text-gray-300 max-w-3xl leading-relaxed mt-2 font-light">
            A proven four-stage methodology that delivers structural excellence from discovery through construction supervision.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#D71920]">
            Step-by-Step Delivery
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading text-black mt-2 leading-tight">
            How We Deliver Structural Excellence
          </h2>
        </div>

        {/* Timeline Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative"
        >
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gray-200 z-0"></div>

          {processSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              variants={stepVariants}
              className="group relative z-10 flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-[#E9E4DC] bg-white p-8 shadow-[0_16px_44px_rgba(17,17,17,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D71920]/25 hover:shadow-[0_24px_60px_rgba(17,17,17,0.12)] items-center lg:items-start text-center lg:text-left"
            >
              <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#D71920] transition-all duration-300 group-hover:w-full" />
              {/* Step Circle Counter */}
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-[1.25rem] border border-[#E9E4DC] bg-white shadow-[0_8px_24px_rgba(17,17,17,0.06)] transition-all duration-300 group-hover:border-[#D71920]/40 group-hover:shadow-[0_12px_32px_rgba(215,25,32,0.18)]">
                <span className="text-3xl font-black font-heading text-gray-300 group-hover:text-[#D71920] transition-colors">
                  {step.step}
                </span>
              </div>

              {/* Title & Description */}
              <div className="flex flex-col flex-grow max-w-[280px]">
                <h3 className="text-lg font-bold leading-tight tracking-tight text-black mb-3 transition-colors duration-300 group-hover:text-[#D71920]">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 md:py-24 bg-[#D71920] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6 md:gap-8">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/90">
            Ready to Start
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-heading tracking-tight uppercase leading-tight max-w-4xl">
            Begin Your Project with Our Proven Process
          </h2>
          <p className="text-sm sm:text-lg text-white/80 max-w-2xl font-light leading-relaxed">
            From initial consultation to final site supervision, our structured approach ensures your project is delivered with precision and value.
          </p>
          <div className="pt-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-[#D71920] hover:bg-gray-100 text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-4 transition-colors"
            >
              START YOUR PROJECT
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
