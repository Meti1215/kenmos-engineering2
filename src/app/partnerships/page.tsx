'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Building2, MapPin, Users, ArrowRight, Heart } from 'lucide-react'
import Footer from '@/components/Footer'
import { brand } from '@/lib/brand'

export default function PartnershipsPage() {
  return (
    <main className="relative min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-[#111112] text-white">
        <div className="relative max-w-7xl mx-auto text-center flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 text-[#D71920] text-xs font-bold uppercase tracking-wider">
            <Shield className="w-4 h-4" />
            Engineering Partnerships
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#D71920] font-heading uppercase leading-none mt-2">
            Work With Us
          </h1>
          <p className="text-sm md:text-lg text-gray-300 max-w-3xl leading-relaxed mt-2 font-light">
            We collaborate with architectural firms, real estate developers, and general contractors across East Africa to deliver optimized structural designs.
          </p>
        </div>
      </section>

      {/* Partnerships Core section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="flex flex-col gap-4 text-[#111111] leading-relaxed font-light text-sm md:text-base">
            <h2 className="text-2xl font-black font-heading text-black uppercase tracking-tight">
              Value Engineering & Design Optimization
            </h2>
            <p>
              At Kenmos Engineering, we believe that design safety and economic viability should go hand-in-hand. We partner with developers early in the feasibility phase to conduct structural model audits, ensuring that concrete volumes and steel reinforcements are fully optimized according to standard codes.
            </p>
            <p>
              By applying value engineering, we help clients reduce structural cost averages by 10-15%, making projects highly financeable and resource-efficient.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="border border-gray-100 p-6 flex flex-col gap-2">
              <h3 className="font-bold text-black text-lg">For Architects</h3>
              <p className="text-xs text-gray-500 font-light">We translate your artistic concepts and complex geometries into safe, load-bearing concrete and steel frame systems without compromising structural form.</p>
            </div>
            <div className="border border-gray-100 p-6 flex flex-col gap-2">
              <h3 className="font-bold text-black text-lg">For Contractors</h3>
              <p className="text-xs text-gray-500 font-light">We provide clear, standard structural detailing and node designs that speed up steel fabrication, concrete formwork assembly, and site erection.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
