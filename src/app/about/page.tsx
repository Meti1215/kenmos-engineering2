'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Building2, ArrowRight, ShieldCheck, HardHat, Compass } from 'lucide-react'
import Footer from '@/components/Footer'
import { brand, aboutContent, teamMembers } from '@/lib/brand'

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative pt-24 pb-10 md:pb-16 bg-[#111112] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero_building.png"
            alt="Kenmos about hero background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative w-full max-w-none px-5 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="flex flex-col items-center gap-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 text-[#D71920] text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              About Our Firm
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#D71920] font-heading uppercase leading-none mt-2">
              Established 2009
            </h1>
            <p className="text-sm md:text-lg text-gray-300 max-w-3xl leading-relaxed mt-2 font-light">
              Structural design and construction supervision delivered with technical precision, safety discipline, and long-term performance in mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-14">
        <div className="mx-auto grid w-full max-w-none px-5 sm:px-6 lg:px-8 md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-6 text-gray-600 leading-relaxed font-light text-sm md:text-base">
            <h2 className="text-2xl font-black font-heading text-black uppercase tracking-tight border-b-2 border-[#D71920] pb-2 w-fit">
              Our Story
            </h2>
            {aboutContent.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Core Values / Details panel */}
          <div className="bg-gray-50 border border-gray-100 p-8 flex flex-col gap-6">
            <h3 className="text-lg font-bold text-black uppercase tracking-wider">
              Our Commitment
            </h3>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-red-50 text-[#D71920] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-black text-sm">Value Engineering</h4>
                <p className="text-xs text-gray-500 font-light mt-1">We refine material sizing and detailing to reduce project cost while preserving structural safety.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-red-50 text-[#D71920] flex items-center justify-center shrink-0">
                <HardHat className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-black text-sm">Steel Structure Expertise</h4>
                <p className="text-xs text-gray-500 font-light mt-1">Connection detailing and fabrication oversight for industrial steel arches, trusses, and plate girders.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-red-50 text-[#D71920] flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-black text-sm">Code Compliance</h4>
                <p className="text-xs text-gray-500 font-light mt-1">All designs delivered to ASCE, ACI, Eurocode, and Ethiopian building code standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="mx-auto w-full max-w-none px-5 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-black font-heading text-black uppercase tracking-tight mb-8">
            Leadership & Experts
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white border border-gray-100 p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-red-50 text-[#D71920] flex items-center justify-center mb-4">
                  <HardHat className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-black text-base">{member.name}</h3>
                <p className="text-xs text-[#D71920] font-bold uppercase mt-1 tracking-wider">{member.role}</p>
                <p className="text-xs text-gray-500 mt-3 font-light leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
