'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Users, GraduationCap, ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { brand } from '@/lib/brand'

export default function CareersPage() {
  const values = [
    {
      title: 'Precision & Excellence',
      description: 'A structural modeling culture focused on analysis precision, standard code compliance, and structural integrity.',
      icon: Briefcase,
    },
    {
      title: 'Team Collaboration',
      description: 'We value communication between our detailing team, consulting leads, general contractors, and site supervisors.',
      icon: Users,
    },
    {
      title: 'Continuous Learning',
      description: 'We support career development through training on advanced modeling software, seismic design, and value engineering.',
      icon: GraduationCap,
    },
  ]

  const openings = [
    { title: 'Structural Steel Detailing Specialist', location: 'Addis Ababa', type: 'Full-time' },
    { title: 'Junior Structural Designer', location: 'Addis Ababa', type: 'Full-time' },
    { title: 'Site Inspection Engineer (Contract)', location: 'Addis Ababa', type: 'Project-based' },
  ]

  return (
    <main className="relative min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-10 md:pb-16 px-4 sm:px-6 lg:px-8 bg-[#111112] text-white">
        <div className="relative max-w-7xl mx-auto text-center flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 text-[#D71920] text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            Careers at Kenmos
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#D71920] font-heading uppercase leading-none mt-2">
            Join Our Team
          </h1>
          <p className="text-sm md:text-lg text-gray-300 max-w-3xl leading-relaxed mt-2 font-light">
            Grow your engineering career with an established Ethiopian firm specializing in structural design and steel structures.
          </p>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white border border-gray-100 p-8 flex flex-col gap-4"
            >
              <div className="w-12 h-12 bg-red-50 text-[#D71920] flex items-center justify-center">
                <item.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h2 className="text-xl font-bold text-black">{item.title}</h2>
              <p className="text-sm text-gray-500 font-light leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Job Openings */}
        <div className="mt-20 bg-gray-50 border border-gray-100 p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-black font-heading text-black uppercase tracking-tight">Open Positions</h2>
              <p className="text-xs text-gray-500 mt-2 font-light leading-relaxed">
                If you are a passionate civil or structural engineering professional in Ethiopia, check our active roles.
              </p>
            </div>
            <a
              href="/contact"
              className="bg-[#D71920] hover:bg-[#be1218] text-white text-xs font-bold uppercase tracking-wider px-6 py-4 flex items-center gap-2"
            >
              Submit Resume / CV
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {openings.map((job) => (
              <div key={job.title} className="bg-white border border-gray-100 p-6 flex flex-col justify-between h-full hover:shadow-md transition-shadow">
                <div>
                  <h3 className="font-bold text-black text-base leading-tight">{job.title}</h3>
                  <p className="text-xs text-gray-400 mt-2 font-light">{job.location} · {job.type}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <a
                    href="/contact"
                    className="text-xs font-bold uppercase tracking-wider text-[#D71920]"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
