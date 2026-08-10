'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, HardHat, Compass, Briefcase } from 'lucide-react'
import Footer from '@/components/Footer'
import { brand, teamMembers } from '@/lib/brand'

export default function LeadershipPage() {
  return (
    <main className="relative min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-[#111112] text-white">
        <div className="relative max-w-7xl mx-auto text-center flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 text-[#D71920] text-xs font-bold uppercase tracking-wider">
            <Users className="w-4 h-4" />
            Leadership & Experts
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#D71920] font-heading uppercase leading-none mt-2">
            Our Key Team
          </h1>
          <p className="text-sm md:text-lg text-gray-300 max-w-3xl leading-relaxed mt-2 font-light">
            Engineers and designers bringing precision, compliance, and optimization to every structural design project.
          </p>
        </div>
      </section>

      {/* Team Profiles Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white border border-gray-100 p-8 flex flex-col justify-between h-full group hover:shadow-lg hover:border-red-500/20 transition-all duration-300">
              <div>
                <div className="w-16 h-16 bg-red-50 text-[#D71920] flex items-center justify-center mb-6">
                  <HardHat className="w-8 h-8" />
                </div>
                <h2 className="text-xl font-bold text-black group-hover:text-[#D71920] transition-colors">
                  {member.name}
                </h2>
                <p className="text-xs font-bold uppercase tracking-wider text-[#D71920] mt-1.5">
                  {member.role}
                </p>
                <p className="text-sm text-gray-500 mt-4 leading-relaxed font-light">
                  {member.bio}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-100 text-xs text-gray-400">
                Kenmos Structural Engineering
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
